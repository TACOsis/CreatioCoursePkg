namespace Terrasoft.Configuration
{
	using System;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;

	#region Class: SysTwoFactorAuthFlowInstallScriptExecutor

	internal class SysTwoFactorAuthFlowInstallScriptExecutor : IInstallScriptExecutor
	{

		#region Methods: Public

		public void Execute(UserConnection userConnection)
		{
			EntitySchemaManager entitySchemaManager = userConnection.EntitySchemaManager;
			Entity twoFactorAuthFlow = entitySchemaManager.GetEntityByName("SysTwoFactorAuthFlow", userConnection);
			if (twoFactorAuthFlow.FetchFromDB("Code", "TOTP")) {
				var twoFactorAuthFlowName = new LocalizableString();
				var enCulture = new CultureInfo("en-US");
				var ruCulture = new CultureInfo("ru-RU");
				twoFactorAuthFlowName.SetCultureValue(enCulture, "Authenticator app");
				twoFactorAuthFlowName.SetCultureValue(ruCulture, "Приложение-аутентификатор");
				twoFactorAuthFlow.SetColumnValue("Name", twoFactorAuthFlowName);
				twoFactorAuthFlow.Save();
			}
			Entity adminOperation = entitySchemaManager.GetEntityByName("SysAdminOperation", userConnection);
			if (adminOperation.FetchFromDB("Code", "CanReset2FA")) {
				var enCulture = new CultureInfo("en-US");
				var ruCulture = new CultureInfo("ru-RU");
				var adminOperationName = new LocalizableString();
				adminOperationName.SetCultureValue(enCulture, "Can disconnect 2FA authenticator app");
				adminOperationName.SetCultureValue(ruCulture, "Отключение 2FA аутентификатора");
				adminOperation.SetColumnValue("Name", adminOperationName);
				var adminOperationDescription = new LocalizableString();
				adminOperationDescription.SetCultureValue(enCulture,
					"Enables the user to disconnect the authenticator app for other users");
				adminOperationDescription.SetCultureValue(ruCulture,
					"Дает возможность отключать приложение-аутентификатор другим пользователям");
				adminOperation.SetColumnValue("Description", adminOperationDescription);
				adminOperation.Save();
			}
			Entity settingsInFolder = entitySchemaManager.GetEntityByName("SysSettingsInFolder", userConnection);
			if (settingsInFolder.FetchFromDB("Id", Guid.Parse("D28EFE2D-BA78-4054-8D0F-B4DFA9EE8674")))
			{
				settingsInFolder.Delete();
			};
		}

		#endregion

	}

	#endregion
}
