namespace Terrasoft.Configuration.ML
{
	using System;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Factories;

	[DefaultBinding(typeof(IMLServiceConfig))]
	public class MLServiceConfig: IMLServiceConfig
	{

		#region Fields: Private

		private readonly UserConnection _userConnection;

		#endregion

		#region Constructors: Public

		public MLServiceConfig(UserConnection userConnection) {
			_userConnection = userConnection;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Check if service configured for solving the given <see cref="MLProblemType"/>.
		/// </summary>
		/// <param name="problemTypeId">Problem type.</param>
		/// <param name="checkTraining">If <c>true</c> checks if it's configured for training.</param>
		public bool IsServiceConfigured(Guid problemTypeId, bool checkTraining = false) {
			Select select = (Select)new Select(_userConnection)
				.Cols("ServiceUrl", "TrainingEndpoint", "PredictionEndpoint")
				.From("MLProblemType")
				.Where("Id").IsEqual(new QueryParameter(problemTypeId));
			bool isConfigExists = select.ExecuteSingleRecord(reader => new {
				ServiceUrl = reader.GetColumnValue<string>("ServiceUrl"),
				TrainingEndpoint = reader.GetColumnValue<string>("TrainingEndpoint"),
				PredictionEndpoint = reader.GetColumnValue<string>("PredictionEndpoint")
			}, out var result);
			if (!isConfigExists) {
				return false;
			}
			if (result.ServiceUrl.IsNullOrEmpty() || result.PredictionEndpoint.IsNullOrEmpty()) {
				return false;
			}
			return !checkTraining || !result.TrainingEndpoint.IsNullOrEmpty();
		}

		/// <summary>
		/// Checks if there's license to use ML Service.
		/// </summary>
		public bool HasLicense() {
			return _userConnection.LicHelper.GetHasOperationLicense(MLConsts.LicOperationCode);
		}

		#endregion

	}
} 
