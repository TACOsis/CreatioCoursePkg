namespace Terrasoft.Configuration.FileHandler
{
	using Terrasoft.Configuration.FileUpload;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;

	#region Class: FileHandler

	/// <summary>
	/// Represents class for handler file.
	/// </summary>
	public class FileHandler
	{

		#region Constructors: Public

		/// <summary>
		/// Creates a new instance of the <see cref="FileHandler"/> type.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		public FileHandler(UserConnection userConnection) {
			UserConnection = userConnection;
		}

		#endregion

		#region Properties: Private

		private bool _isInitializedFeatureUseFileApi;
		private bool _featureUseFileApi;

		/// <summary>
		/// Gets or sets value that indicates the feature "FeatureUseFileApi" state.
		/// </summary>
		private bool UseFileApi {
			get {
				if (_isInitializedFeatureUseFileApi) {
					return _featureUseFileApi;
				}
				return GlobalAppSettings.FeatureUseFileApi;
			}
			set {
				_featureUseFileApi = value;
				_isInitializedFeatureUseFileApi = true;
			}
		}

		#endregion

		#region Properties: Protected

		/// <summary>
		/// Gets user connection.
		/// </summary>
		protected UserConnection UserConnection { get; }

		#endregion

		#region Methods: Protected

		protected bool GetCanUseFileApi(EntitySchema entitySchema) {
			return UseFileApi && entitySchema.GetIsAncestorOf("File");
		}

		#endregion

	}

	#endregion

}

