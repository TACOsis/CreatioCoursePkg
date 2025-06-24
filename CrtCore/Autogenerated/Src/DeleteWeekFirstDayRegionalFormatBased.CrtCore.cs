namespace Terrasoft.Configuration
{
	using System;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;
	using global::Common.Logging;

	#region Class: DeleteWeekFirstDayRegionalFormatBased

	public class DeleteWeekFirstDayRegionalFormatBased : IInstallScriptExecutor
	{

		#region Fields: Private

		private readonly ILog _logger = LogManager.GetLogger("DeleteWeekFirstDayRegionalFormatBased");
		private readonly string _schemaName = "WeekFirstDay";
		private readonly Guid _recordId = new Guid("e6257269-7f7c-46a3-8431-e0119a9d88d4");

		#endregion

		#region Methods: Private

		private void ClearWeekFirstDay(UserConnection userConnection) {
			Update update = new Update(userConnection, "SysAdminUnit");
			update.Set("WeekFirstDayId", Column.Parameter(null, "Guid"));
			update.Where("WeekFirstDayId").IsEqual(Column.Parameter(_recordId));
			int result = update.Execute();
			_logger.Info($"Updated {result} records, where WeekFirstDayId was {_recordId}");
		}

		#endregion

		#region Methods: Public

		public void Execute(UserConnection userConnection) {
			ClearWeekFirstDay(userConnection);
			var entity = userConnection.EntitySchemaManager.GetEntityByName(_schemaName, userConnection);
			if (entity.FetchFromDB(_recordId)) {
				entity.Delete();
			}
		}

		#endregion

	}

	#endregion

}
