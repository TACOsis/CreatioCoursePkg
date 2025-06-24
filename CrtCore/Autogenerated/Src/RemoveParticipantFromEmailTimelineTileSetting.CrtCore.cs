namespace Terrasoft.Configuration
{
	using System;
	using System.Data;
    using System.Text;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;
    using Newtonsoft.Json;

	public class RemoveParticipantFromEmailTimelineTileSetting : IInstallScriptExecutor
	{

		private readonly Guid _emailTileSettingId = Guid.Parse("09A70391-B767-40AB-97B8-6D1B538ADBE6");
        private readonly String _config = "{\n\t\"entitySchemaName\": \"Activity\",\n\t\"typeColumnValue\": \"e2831dec-cfc0-df11-b00f-001d60e938c6\",\n\t\"viewModelClassName\": \"Terrasoft.EmailTimelineItemViewModel\",\n\t\"viewClassName\": \"Terrasoft.EmailTimelineItemView\",\n\t\"orderColumnName\": \"SendDate\",\n\t\"authorColumnName\": \"SenderContact\",\n\t\"messageColumnName\": \"Body\",\n\t\"filters\": {\n\t\t\"ownerFilter\": {\n\t\t\t\"comparisonType\": 15,\n\t\t\t\"existsFilterColumnName\": \"[ActivityParticipant:Activity].Id\",\n\t\t\t\"subFilterColumnName\": \"Participant\"\n\t\t}\n\t},\n\t\"columns\": [{\n\t\t\"columnName\": \"Title\",\n\t\t\"isSearchEnabled\": true,\n\t\t\"columnAlias\": \"Subject\"\n\t},\n\t{\n\t\t\"columnName\": \"Sender\",\n\t\t\"columnAlias\": \"AuthorEmail\"\n\t},\n\t{\n\t\t\"columnName\": \"Recepient\",\n\t\t\"columnAlias\": \"RecipientEmail\"\n\t}]\n}";

		private void UpdateSetting(UserConnection userConnection) {
			var update = new Update(userConnection, "TimelineTileSetting")
				.Set("Data", Column.Parameter(Encoding.UTF8.GetBytes(_config)))
				.Where("Id").IsEqual(Column.Parameter(_emailTileSettingId));
			update.Execute();
		}

		public void Execute(UserConnection userConnection) {
			UpdateSetting(userConnection);
		}
	}
}
