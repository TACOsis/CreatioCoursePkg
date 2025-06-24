 namespace Terrasoft.Configuration
{
	using System;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;

	#region Class: UpdateProductivitySysAppTemplateInstallScriptExecutor

	public class UpdateProductivitySysAppTemplateInstallScriptExecutor : IInstallScriptExecutor
	{
		#region Fields: Private
		
		private readonly Guid ProductivityAppTemplateId = new Guid("A51BD8B2-1D24-4D0F-8393-51ECADF0F006");
		private readonly Guid ProductivityAppIconId = new Guid("C8DC282F-496C-4FC9-950D-53438C1E2C3F");
		private readonly Guid BetaProductivityAppIconId = new Guid("96d7b381-e8c4-f5d9-b4ad-e59d355c49d0");
		private const string ProductivityAppTemplateCode = "CrtProductivityApp";
		
		#endregion

		#region Methods: Public

		public void Execute(UserConnection userConnection) {
			EntitySchemaManager entitySchemaManager = userConnection.EntitySchemaManager;
			Entity sysAppTemplate = entitySchemaManager.GetEntityByName("SysAppTemplate", userConnection);
			if (sysAppTemplate.FetchFromDB(ProductivityAppTemplateId)) {
				var ruCulture = new CultureInfo("ru-RU");
				var enCulture = new CultureInfo("en-US");
				var displayName = new LocalizableString();
				var description = new LocalizableString();
				displayName.SetCultureValue(ruCulture, "Productivity");
				displayName.SetCultureValue(enCulture, "Productivity");
				description.SetCultureValue(ruCulture, "Планируйте вашу работу, задачи и встречи в вашем календаре");
				description.SetCultureValue(enCulture, "Plan your work, tasks and meetings in your calendar");
				sysAppTemplate.SetColumnValue("Name", displayName);
				sysAppTemplate.SetColumnValue("Description", description);
				sysAppTemplate.SetColumnValue("IsPrerelease", false);
				sysAppTemplate.SetColumnValue("ImageId", ProductivityAppIconId);
				sysAppTemplate.SetColumnValue("Code", ProductivityAppTemplateCode);
				sysAppTemplate.Save(false);
			}
			Entity sysImage = entitySchemaManager.GetEntityByName("SysImage", userConnection);
			if (sysImage.FetchFromDB(BetaProductivityAppIconId)) {
				sysImage.Delete();
			}
		}

		#endregion

	}

	#endregion

}

