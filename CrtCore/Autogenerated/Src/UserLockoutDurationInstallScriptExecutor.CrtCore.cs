namespace Terrasoft.Configuration
{
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;

	#region Class: UserLockoutDurationInstallScriptExecutor

	internal class UserLockoutDurationInstallScriptExecutor : IInstallScriptExecutor
	{

		#region Methods: Public

		public void Execute(UserConnection userConnection) {
			EntitySchemaManager entitySchemaManager = userConnection.EntitySchemaManager;
			Entity sysSettings = entitySchemaManager.GetEntityByName("SysSettings", userConnection);
			if (sysSettings.FetchFromDB("Code", "UserLockoutDuration")) {
				var sysSettingsDescription = new LocalizableString();
				var enCulture = new CultureInfo("en-US");
				var ruCulture = new CultureInfo("ru-RU");
				var enMessage = "The length of time (in minutes) a user's account will be locked after exceeding the allowed number of incorrect login attempts or second-factor verification failures.\nIf set to 0, users with too many failed attempts will be deactivated instead of temporarily locked.";
				var ruMessage = "Продолжительность (в минутах) блокировки учетной записи пользователя после превышения допустимого количества неправильных попыток входа в систему или неудачных проверок второго фактора аутентификации.\nЕсли значение установлено на 0, вместо временной блокировки учетные записи будут деактивированы.";
				sysSettingsDescription.SetCultureValue(enCulture, enMessage);
				sysSettingsDescription.SetCultureValue(ruCulture, ruMessage);
				sysSettings.SetColumnValue("Description", sysSettingsDescription);
				sysSettings.Save();
			}
		}

		#endregion

	}

	#endregion

} 
