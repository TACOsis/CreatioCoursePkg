namespace Terrasoft.Configuration.ML
{
	using System;
	using System.Collections.Generic;
	using Newtonsoft.Json.Linq;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using Terrasoft.Nui.ServiceModel.DataContract;

	#region Class: MLCollaborativeFilteringModelBuilder

	/// <summary>
	/// Implements the behavior of the CollaborativeFiltering MLModel
	/// </summary>
	[DefaultBinding(typeof(IMLModelBuilder), Name = MLConsts.CollaborativeFiltering)]
	public class MLCollaborativeFilteringModelBuilder: MLDefaultModelBuilder
	{

		#region Methods: Private

		private static IEnumerable<MLColumnExpression> GetModelColumns(MLModelConfig modelConfig) {
			var columns = new List<MLColumnExpression>();
			if (modelConfig.CFItemColumnPath.IsNotNullOrEmpty()) {
				columns.Add(new MLColumnExpression {
					ColumnPath = modelConfig.CFItemColumnPath,
					Alias = "item_id"
				});
			}
			if (modelConfig.CFUserColumnPath.IsNotNullOrEmpty()) {
				columns.Add(new MLColumnExpression {
					ColumnPath = modelConfig.CFUserColumnPath,
					Alias = "user_id"
				});
			}
			if (modelConfig.CFInteractionValueColumnPath.IsNotNullOrEmpty()) {
				columns.Add(new MLColumnExpression {
					ColumnPath = modelConfig.CFInteractionValueColumnPath,
					Alias = "value"
				});
			} else {
				columns.Add(new MLColumnExpression {
					ExpressionType = EntitySchemaQueryExpressionType.Parameter,
					Parameter = new Parameter {
						DataValueType = Nui.ServiceModel.DataContract.DataValueType.Integer,
						Value = 1
					},
					Alias = "value"
				});
			}
			return columns;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Loads the required columns to train model.
		/// </summary>
		/// <param name="modelConfig">ML model configuration.</param>
		/// <param name="userConnection">UserConnection instance.</param>
		public override void LoadMLModelColumns(UserConnection userConnection, MLModelConfig modelConfig) {
			modelConfig.ColumnUIds = new List<Guid>();
			modelConfig.ColumnExpressions = GetModelColumns(modelConfig);
			modelConfig.PredictionColumnExpressions = new List<MLColumnExpression>();
		}

		/// <summary>
		/// Expands the original query with an output column.
		/// </summary>
		/// <param name="query">The query.</param>
		/// <param name="modelConfig">ML model configuration.</param>
		/// <param name="userConnection">UserConnection instance.</param>
		public override void AddQueryOutputColumn(UserConnection userConnection, Select query, MLModelConfig modelConfig) {
			query.Column(Column.Const(1)).As(MLConsts.DefaultOutputColumnAlias);
		}

		/// <summary>
		/// Merges fit parameters.
		/// </summary>
		/// <param name="metadata">The metadata.</param>
		/// <param name="modelConfig">ML model configuration.</param>
		public override void MergeFitParams(ModelSchemaMetadata metadata, MLModelConfig modelConfig) {
			base.MergeFitParams(metadata, modelConfig);
			if (modelConfig.FactorsCounts.IsNullOrEmpty() &&
				modelConfig.RegularizationValues.IsNullOrEmpty()) {
				return;
			}
			metadata.Params = metadata.Params ?? new ModelSchemaParams();
			RecommendationModelFitParams fitParams = metadata.Params.Fit?.ToObject<RecommendationModelFitParams>()
				?? new RecommendationModelFitParams();
			fitParams.Factors = fitParams.Factors.IsNullOrEmpty() ? modelConfig.FactorsCounts : fitParams.Factors;
			fitParams.Regularizations = fitParams.Regularizations.IsNullOrEmpty() 
				? modelConfig.RegularizationValues
				: fitParams.Regularizations;
			metadata.Params.Fit = JObject.FromObject(fitParams);
		}

		#endregion

	}

	#endregion

}

