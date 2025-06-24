using System.Globalization;
using Terrasoft.Common;

namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;
    using Terrasoft.Core.Entities;
	using global::Common.Logging;

	#region Class: SysTwoFactorAuthFlowLookupChangedInstallScriptExecutor

	public class SysTwoFactorAuthFlowLookupChangedInstallScriptExecutor : IInstallScriptExecutor
	{

		#region Fields: Private

		private Guid _sysTwoFactorAuthFlowLookupId = Guid.Parse("bc7a03aa-36ad-421c-8f0c-f0e699ca4fc9");
		private Guid _sysTwoFactorAuthFlowLookupSectionSchemaUId = Guid.Parse("107dafdc-c7af-4274-a4df-fb696a2e46c0");

		#endregion

		#region Methods: Public

		public void Execute(UserConnection userConnection) {
			EntitySchemaManager entitySchemaManager = userConnection.EntitySchemaManager;
			Entity lookup = entitySchemaManager.GetEntityByName("Lookup", userConnection);
			lookup.FetchFromDB(_sysTwoFactorAuthFlowLookupId);
			lookup.SetColumnValue("SysPageSchemaUId", _sysTwoFactorAuthFlowLookupSectionSchemaUId);
			var lookupName = new LocalizableString();
			var enCulture = new CultureInfo("en-US");
			var ruCulture = new CultureInfo("ru-RU");
			lookupName.SetCultureValue(enCulture, "2FA methods");
			lookupName.SetCultureValue(ruCulture, "Методы двухфакторной аутентификации");
			lookup.SetColumnValue("Name", lookupName);
			lookup.Save();
		}

		#endregion

	}

	#endregion

}

