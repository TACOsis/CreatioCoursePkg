namespace Terrasoft.Configuration.ML
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.ServiceModel;
	using System.ServiceModel.Activation;
	using System.ServiceModel.Web;
	using System.Runtime.Serialization;
	using Newtonsoft.Json;
	using Terrasoft.Common;
	using Terrasoft.Core.DB;
	using Terrasoft.Web.Common;

	#region Class: MLPredictionStateService

	/// <summary>
	/// Service class for working with <see cref="MLPrediction"/> state.
	/// </summary>
	[ServiceContract]
	[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
	public class MLPredictionStateService : BaseService, System.Web.SessionState.IReadOnlySessionState
	{

		#region Constants: Private

		private const string HighSignificance = "High";
		private const string MediumSignificance = "Medium";
		private const string NoneSignificance = "None";

		#endregion

		#region Fields: Private

		private static readonly Dictionary<string, MLSignificance> _dbToResultMapping =
			new Dictionary<string, MLSignificance> {
				{ HighSignificance, MLSignificance.Exact },
				{ MediumSignificance, MLSignificance.NotExact },
				{ NoneSignificance, MLSignificance.Insignificant }
			};

		#endregion

		#region Methods: Private

		private Select GetPredictionsQuerySelect(Guid schemaUId, Guid entityId) {
			var lengthFunc = new LengthQueryFunction(Column.SourceColumn("MLModel", "ModelInstanceUId"));
			var predictionsQuerySelect = new Select(UserConnection)
				.Column("MLModel", "Id")
				.Column("MLClassificationResult", "Value")
				.Column("MLClassificationResult", "Significance")
				.From("MLModel")
				.LeftOuterJoin("MLClassificationResult").On("MLModel", "Id")
					.IsEqual("MLClassificationResult", "ModelId")
					.And("MLClassificationResult", "Key")
						.IsEqual(Column.Parameter(entityId))
				.Where("RootSchemaUId").IsEqual(Column.Parameter(schemaUId))
					.And("PredictionEnabled").IsEqual(Column.Parameter(true, "Boolean"))
					.And(lengthFunc).IsGreater(Column.Const(0));
			return (Select)predictionsQuerySelect;
		}

		private List<MLPredictionState> GetPredictionList(Guid schemaUId, Guid entityId) {
			Select query = GetPredictionsQuerySelect(schemaUId, entityId);
			IEnumerable<MLPredictionState> result = query.ExecuteEnumerable(reader => new MLPredictionState { 
				ModelId = reader.GetColumnValue<Guid>("Id"),
				Value = reader.GetColumnValue<Guid>("Value"),
				Significance = reader.GetColumnValue<string>("Significance")
			});
			return result.ToList();
		}

		private Dictionary<string, MLPredictionState> GetPredictionState(IEnumerable<MLPredictionState> list,
				string dbSignificance, MLSignificance responseSignificance) {
			var result = from item in list
						 join signigicantItem in list on new { ModelId = item.ModelId, Significance = dbSignificance }
							equals new { ModelId = signigicantItem.ModelId, Significance = signigicantItem.Significance }
							into significantList
						 from significantItem in significantList.DefaultIfEmpty(new MLPredictionState() {
							 Value = Guid.Empty
						 })
						 group new { item, significantItem } by item.ModelId into groupedList
						 select new MLPredictionState {
							 ModelId = groupedList.Key,
							 Value = responseSignificance == MLSignificance.Exact
								? groupedList.Max(groupedItem => groupedItem.significantItem.Value) 
								: Guid.Empty,
							 State = groupedList.Count(groupedItem => groupedItem.significantItem.Value != Guid.Empty) == 0 
								? MLSignificance.Unknown
								: responseSignificance
						 };
			return result.Where(r => r.State != MLSignificance.Unknown).ToDictionary(r => r.ModelId.ToString());
		}

		private Dictionary<string, MLPredictionState> GetPredictionStateList(List<MLPredictionState> list) {
			var statesToProcess = new List<MLPredictionState>(list);
			var result = new Dictionary<string, MLPredictionState>();
			foreach (var kv in _dbToResultMapping) {
				string dbSignificance = kv.Key;
				MLSignificance responseSignificance = kv.Value;
				result.AddRange(GetPredictionState(statesToProcess, dbSignificance, responseSignificance));
				statesToProcess.RemoveAll(state => result.Values.Any(
					resultState => resultState.ModelId == state.ModelId));
			}
			var stateComparer = new MLPredictionStateComparer();
			result.AddRange(statesToProcess.Distinct(stateComparer).Select(state => new MLPredictionState {
				ModelId = state.ModelId,
				State = MLSignificance.InProgress
			}).ToDictionary(l => l.ModelId.ToString()));
			return result;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Returns list of prediction states for specific entity
		/// by <paramref name="entityId"/> and <paramref name="schemaUId"/>.
		/// </summary>
		/// <param name="schemaUId">Root entity schema UId.</param>
		/// <param name="entityId">Entity Id.</param>
		/// <returns></returns>
		[OperationContract]
		[WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.WrappedRequest,
			ResponseFormat = WebMessageFormat.Json)]
		public string GetColumnsPredictionStates(Guid schemaUId, Guid entityId) {
			var predictionList = GetPredictionList(schemaUId, entityId);
			return JsonConvert.SerializeObject(GetPredictionStateList(predictionList));
		}
		
		#endregion

	}

	#endregion

	#region Class: MLPredictionState

	[DataContract]
	public class MLPredictionState
	{
		
		#region Properties: Public

		[DataMember(Name = "modelId")]
		public Guid ModelId {
			get;
			set;
		}

		[DataMember(Name = "value")]
		public Guid Value {
			get;
			set;
		}

		[DataMember(Name = "state")]
		public MLSignificance State {
			get;
			set;
		}

		[IgnoreDataMember]
		public string Significance {
			get;
			set;
		}

		#endregion

		#region Methods: Public

		public override bool Equals(object obj) {
			if (obj == null) {
				return false;
			}
			var otherState = (MLPredictionState)obj;
			return Equals(otherState);
		}

		public bool Equals(MLPredictionState obj) {
			if (obj == null) {
				return false;
			}
			return obj.ModelId == ModelId &&
				obj.Value == Value &&
				obj.State == State;
		}

		public override int GetHashCode() {
			return (ModelId + Value.ToString() + State).GetHashCode();
		}

		#endregion

	}

	#endregion

	#region Class: MLPredictionStateComparer

	public class MLPredictionStateComparer: IEqualityComparer<MLPredictionState>
	{
		#region Methods: Public

		public bool Equals(MLPredictionState state1, MLPredictionState state2) {
			return state1.ModelId.Equals(state2.ModelId);
		}

		public int GetHashCode(MLPredictionState state) {
			return state.ModelId.GetHashCode();
		}

		#endregion
	}

	#endregion

	#region Enum: MLSignificance

	public enum MLSignificance
	{
		InProgress = 0,
		Exact = 1,
		NotExact = 2,
		Insignificant = 3,
		Unknown = 4
	}

	#endregion

}

