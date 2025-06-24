namespace Terrasoft.Core.Process.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Newtonsoft.Json;
	using Newtonsoft.Json.Serialization;
	using Terrasoft.Common;
	using Terrasoft.Configuration;
	using Terrasoft.Configuration.ML;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using Terrasoft.Nui.ServiceModel.DataContract;
	using EntitySchema = Terrasoft.Core.Entities.EntitySchema;

	#region Class: MLDataPredictionUserTask

	/// <summary>
	/// Partial class, that implements user task runtime behaviour.
	/// </summary>
	public partial class MLDataPredictionUserTask
	{

		#region Class: FilterEditConverter

		/// <summary>
		/// Provides methods for convertion from process filters to regular NUI filters by resolving
		/// process parameters.
		/// </summary>
		private class FilterEditConverter : ProcessDataContractFilterConverter
		{

			#region Constructors: Public

			/// <summary>
			/// Initializes a new instance of <see cref="FilterEditConverter"/>.
			/// </summary>
			/// <param name="userConnection">User connection</param>
			public FilterEditConverter(UserConnection userConnection) : base(userConnection) {
			}

			#endregion

			#region Methods: Public

			/// <summary>
			/// Converts serialized process filters to regular NUI <see cref="Filters"/>
			/// by resolving given process parameters.
			/// </summary>
			/// <param name="process">Process activity to obtain parameters.</param>
			/// <param name="processFilters">Serialized process filters.</param>
			/// <returns>Serialized NUI filters.</returns>
			public string Convert(Process process, string processFilters) {
				Filters filters = ConvertFilters(processFilters);
				InitializeFilters(filters, process);
				string serializedFilters = JsonConvert.SerializeObject(filters, new JsonSerializerSettings {
					NullValueHandling = NullValueHandling.Ignore,
					ContractResolver = new CamelCasePropertyNamesContractResolver()
				});
				return serializedFilters;
			}

			#endregion

		}

		#endregion

		#region Methods: Private

		private bool GetIsCFModel() {
			var select = new Select(UserConnection)
				.Column("MLProblemTypeId")
				.From("MLModel")
				.Where("Id")
					.IsEqual(Column.Parameter(MLModelId)) as Select;
			return select.ExecuteScalar<Guid>() == new Guid(MLConsts.CollaborativeFiltering);
		}

		private void PredictForCFModel(MLEntityPredictor predictor) {
			var modelLoader = ClassFactory.Get<IMLModelLoader>();
			if (!modelLoader.TryLoadModelForPrediction(UserConnection, MLModelId, out MLModelConfig modelConfig)) {
				throw new InvalidObjectStateException($"Recommendation model with id {MLModelId} was not found"
					+ " or not ready for making predictions.");
			}
			if (modelConfig.ListPredictResultSchemaUId.IsEmpty()) {
				throw new NotImplementedException($"Model {MLModelId} is not configured for saving results");
			}
			EntitySchema predictionEntitySchemaId = UserConnection.EntitySchemaManager
				.GetInstanceByUId(modelConfig.PredictionEntitySchemaId);
			EntitySchemaQuery usersEsq = GetCFSchemaDataEsq(predictionEntitySchemaId,
				modelConfig.CFUserColumnPath, CFUserFilterData);
			IEnumerable<Guid> users = ReadCFData(usersEsq);
			EntitySchemaQuery itemsEsq = GetCFSchemaDataEsq(predictionEntitySchemaId, modelConfig.CFItemColumnPath,
				CFItemFilterData);
			bool isItemsFilterEmpty = itemsEsq.Filters.IsEmpty();
			IEnumerable<Guid> items = isItemsFilterEmpty ? Enumerable.Empty<Guid>() : ReadCFData(itemsEsq);
			RecommendationFilterItemsMode filterItemsMode = isItemsFilterEmpty
				? RecommendationFilterItemsMode.Black
				: RecommendationFilterItemsMode.White;
			predictor.Recommend(MLModelId, users.ToList(), TopN, items.ToList(),
				filterItemsMode: filterItemsMode, filterAlreadyInteractedItems: CFFilterAlreadyInteractedItems);
		}

		private EntitySchemaQuery GetCFSchemaDataEsq(EntitySchema modelRootSchema, string cfColumnPath,
				string filterData) {
			EntitySchema cfColumnSchema = modelRootSchema.GetSchemaColumnByPath(cfColumnPath).ReferenceSchema;
			var esq = new EntitySchemaQuery(cfColumnSchema);
			esq.PrimaryQueryColumn.IsAlwaysSelect = true;
			var converter = new FilterEditConverter(UserConnection);
			IEntitySchemaQueryFilterItem filter = converter.ConvertToEntitySchemaQueryFilterItem(esq, Owner,
				filterData);
			if (!filter.GetFilterInstances().IsEmpty()) {
				esq.Filters.Add(filter);
			}
			return esq;
		}

		private IEnumerable<Guid> ReadCFData(EntitySchemaQuery esq) {
			return esq.GetEntityCollection(UserConnection).Select(e => e.GetTypedColumnValue<Guid>("Id"));
		}

		#endregion

		#region Methods: Protected

		/// <summary>
		/// Executes current flow element.
		/// </summary>
		/// <returns><c>true</c>, if element was successfully executed and conditions for moving to the next step were
		/// satisfied. Otherwise - <c>false</c>.</returns>
		protected override bool InternalExecute(ProcessExecutingContext context) {
			if (IsBatchPrediction) {
				var batchPredictionJob = ClassFactory.Get<IMLBatchPredictionJob>();
				var converter = new FilterEditConverter(UserConnection);
				var filterEditData = converter.Convert(Owner, PredictionFilterData);
				batchPredictionJob.ProcessModel(UserConnection, MLModelId, filterEditData, this);
			} else {
				var constructorArgument = new ConstructorArgument("userConnection", UserConnection);
				var predictor = ClassFactory.Get<MLEntityPredictor>(constructorArgument);
				predictor.UseAdminRights = GlobalAppSettings.FeatureUseAdminRightsInEmbeddedLogic;
				if (GetIsCFModel()) {
					PredictForCFModel(predictor);
				} else {
					predictor.PredictEntityValueAndSaveResult(MLModelId, RecordId, this);
				}
			}
			return true;
		}

		#endregion

	}

	#endregion

}
