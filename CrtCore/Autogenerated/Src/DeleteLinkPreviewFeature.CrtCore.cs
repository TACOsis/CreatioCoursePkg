namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;

	#region Class: DeleteLinkPreviewFeatureInstallScript

	public class DeleteLinkPreviewFeatureInstallScript : IInstallScriptExecutor
	{

		#region Methods: Private

		private static void DeleteLinkPreviewFeature(UserConnection userConnection) {
			EntitySchemaManager entitySchemaManager = userConnection.EntitySchemaManager;
			Entity feature = entitySchemaManager.GetEntityByName("Feature", userConnection);
			var entityCondition = new Dictionary<string, object> {
				{ "Code", "LinkPreview" }
			};
			if (feature.FetchFromDB(entityCondition)) {
				new Delete(userConnection).From("AdminUnitFeatureState").Where("FeatureId")
					.IsEqual(Column.Parameter(feature.GetTypedColumnValue<Guid>("Id")))
					.Execute();
				feature.Delete();
			}
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Execute script for delete "LinkPreview" feature.
		/// </summary>
		/// <param name="userConnection">Instance of the <see cref="UserConnection"/> type.</param>
		public void Execute(UserConnection userConnection) {
			DeleteLinkPreviewFeature(userConnection);
		}

		#endregion

	}

	#endregion

}
