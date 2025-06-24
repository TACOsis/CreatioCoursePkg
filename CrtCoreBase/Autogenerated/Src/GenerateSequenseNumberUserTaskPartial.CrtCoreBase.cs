namespace Terrasoft.Core.Process.Configuration
{
	using System;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;
	using CoreSysSettings = Terrasoft.Core.Configuration.SysSettings;

	#region Class: GenerateSequenseNumberUserTask

	/// <summary>
	/// Represents user task to generate ordinal number.
	/// </summary>
	public partial class GenerateSequenseNumberUserTask
	{

		#region Methods: Protected

		/// <inheritdoc />
		protected override bool InternalExecute(ProcessExecutingContext context) {
			if (EntitySchema != null) {
				var entitySchema = (EntitySchema)EntitySchema;
				var connection = context.UserConnection;
				ResultCode = GenerateSequenseNumber(entitySchema, connection);
			}
			return true;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Returns sequence number.
		/// </summary>
		/// <param name="entitySchema">Entity schema.</param>
		/// <param name="connection">User connection.</param>
		/// <returns>String that represents a generated sequence number.</returns>
		public virtual string GenerateSequenseNumber(EntitySchema entitySchema, UserConnection connection) {
			string entitySchemaName = entitySchema.Name;
			string codeMaskSettingName = entitySchemaName + "CodeMask";
			string lastNumberSettingName = entitySchemaName + "LastNumber";
			string sysSettingsCodeMask = string.Empty;
			var sysSettingsMaskItem = new CoreSysSettings(connection) {
				UseAdminRights = false,
				Code = codeMaskSettingName
			};
			if (!sysSettingsMaskItem.FetchFromDB("Code", codeMaskSettingName)) {
				throw new ItemNotFoundException(codeMaskSettingName);
			}
			if (sysSettingsMaskItem.IsPersonal) {
				sysSettingsCodeMask = (string)CoreSysSettings.GetValue(connection, codeMaskSettingName);
			} else {
				sysSettingsCodeMask = (string)CoreSysSettings.GetDefValue(connection, codeMaskSettingName);
			}
			if (GlobalAppSettings.UseDBSequence) {
				var sequenceMap = new SequenceMap(connection);
				var sequence = sequenceMap.GetByNameOrDefault(lastNumberSettingName);
				return string.Format(sysSettingsCodeMask, sequence.GetNextValue());
			}
			int sysSettingsLastNumber = Convert.ToInt32(CoreSysSettings.GetDefValue(connection, lastNumberSettingName));
			++sysSettingsLastNumber;
			CoreSysSettings.SetDefValue(connection, lastNumberSettingName, sysSettingsLastNumber);
			return string.Format(sysSettingsCodeMask, sysSettingsLastNumber);
		}

		#endregion

	}

	#endregion

}
