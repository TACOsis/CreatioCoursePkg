namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using Newtonsoft.Json;
	using Terrasoft.Common;
	using Terrasoft.Core.Configuration;

	#region Class: PushNotification

	/// <summary>
	/// Push notification.
	/// </summary>
	public class PushNotification
	{
		#region Constructors: Public

		public PushNotification(UserConnection userConnection) {
			_userConnection = userConnection;
		}

		#endregion

		#region Fields: Private

		private readonly UserConnection _userConnection;

		#endregion
		
		#region Methods: Private

		private bool CanLog() {
			var entitySchema = _userConnection.EntitySchemaManager.FindInstanceByName("MobileNotificationLog");
			var entitySchemaUId = entitySchema?.UId;
			if (!entitySchemaUId.HasValue || entitySchemaUId.Value.IsEmpty()) {
				return false;
			}
			return true;
		}

		private string Truncate(string value, int maxLength) {
			if (string.IsNullOrEmpty(value)) {
				return value;
			}
			return value.Length <= maxLength ? value : value.Substring(0, maxLength);
		}

		#endregion

		#region Methods: Protected

		protected virtual IPushNotificationProvider CreateProviderInstance(string className, string settings) {
			var workspaceTypeProvider = ClassFactory.Get<IWorkspaceTypeProvider>();
			Type classType = workspaceTypeProvider.GetType(className);
			IPushNotificationProvider providerInstance = null;
			if (classType != null) {
				string assemblyQualifiedName = classType.AssemblyQualifiedName;
				providerInstance = ClassFactory.ForceGet<IPushNotificationProvider>(assemblyQualifiedName,
					new ConstructorArgument("settings", settings));
			}
			return providerInstance;
		}

		protected virtual void LogData(PushNotificationData data) {
			var nowParameter = new QueryParameter("now", DateTime.UtcNow, "DateTime");
			var currentUserContactIdParameter = new QueryParameter("currentUserId",
				_userConnection.CurrentUser.ContactId);
			if (data.SysAdminUnitId != null) {
				var guid = Guid.NewGuid();
				Guid sysAdminUnitId = data.SysAdminUnitId ?? Guid.Empty;
				new Insert(_userConnection).Into("MobileNotificationLog")
					.Set("Id", Column.Parameter(guid))
					.Set("CreatedOn", nowParameter)
					.Set("CreatedById", currentUserContactIdParameter)
					.Set("ModifiedOn", nowParameter)
					.Set("ModifiedById", currentUserContactIdParameter)
					.Set("Title", Column.Parameter(Truncate(data.Title, 50)))
					.Set("Message", Column.Parameter(Truncate(data.Message, 500)))
					.Set("SysAdminUnitId", Column.Parameter(sysAdminUnitId))
					.Set("AdditionalData", Column.Parameter(JsonConvert.SerializeObject(data.AdditionalData)))
					.Execute();
				_userConnection.DBSecurityEngine.SetEntitySchemaRecordRightLevel(sysAdminUnitId,
					"MobileNotificationLog", guid, EntitySchemaRecordRightOperation.Read,
					EntitySchemaRecordRightLevel.AllowAndGrant, true);
			}
		}

		#endregion

		#region Methods: Public
		
		public virtual void Send(Guid sysAdminUnitId, string title, string message) {
			Send(sysAdminUnitId, title, message, null);
		}

		public virtual void Send(Guid sysAdminUnitId, string title, string message, Dictionary<string, string> additionalData) {
			if (!_userConnection.GetIsFeatureEnabled("UseMobilePushNotifications")) {
				return;
			}
			EntitySchema schema = _userConnection.EntitySchemaManager.GetInstanceByName("PushNotificationService");
			var esq = new EntitySchemaQuery(schema);
			EntitySchemaQueryColumn settingsColumn = esq.AddColumn("Settings");
			EntitySchemaQueryColumn classNameColumn = esq.AddColumn("ClassName");
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Enabled", true));
			EntityCollection entityCollection = esq.GetEntityCollection(_userConnection);
			var data = new PushNotificationData() {
				SysAdminUnitId = sysAdminUnitId,
				Title = title,
				Message = message,
				AdditionalData = additionalData
			};
			foreach (var item in entityCollection) {
				var settings = item.GetTypedColumnValue<string>(settingsColumn.Name);
				var className = item.GetTypedColumnValue<string>(classNameColumn.Name);
				IPushNotificationProvider providerInstance = CreateProviderInstance(className, settings);
				providerInstance.Send(data);
			}
			if (CanLog()) {
				LogData(data);
			}
		}

		#endregion

	}

	#endregion

}
