namespace Terrasoft.Configuration
{
	using System;
	using global::Common.Logging;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;

	public class CopyProcessIdInOmniChatActionISE : IInstallScriptExecutor
	{

		#region Fields: Private

		private static readonly ILog _logger = LogManager.GetLogger("OmnichannelMessaging");

		#endregion

		#region Properties: Public

		private ILog _log;
		public ILog Log {
			get => _log ?? (_log = _logger);
			set => _log = value;
		}

		#endregion
		
		#region Methods: Public
		
		public void Execute(UserConnection userConnection) {
			var select = new Select(userConnection).From("OmniChatAction")
				.Column("Id")
				.Column("ProcessSchemaId")
				.Column("BusinessProcessId");
			select.ExecuteReader(reader => {
				var value = reader.GetColumnValue<Guid>("ProcessSchemaId");
				if (value != null && value.IsNotEmpty()) {
					new Update(userConnection, "OmniChatAction")
						.Set("BusinessProcessId", Column.Parameter(value))
						.Where("Id").In(Column.Parameter(reader.GetColumnValue<Guid>("Id")))
						.Execute();
				} else {
					Log.ErrorFormat("Incorrect value of ProcessSchemaId=[{0}] when updating OmniChatAction with Id={1}", value, reader.GetColumnValue<Guid>("Id"));
				}
			});
		}
		
		#endregion
		
	}
}

