namespace Terrasoft.Configuration.SsoSettings
{
	using System;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.Entities;

	#region Class: BaseSsoVirtualSettingsQueryExecutor

	internal class BaseSsoVirtualSettingsQueryExecutor : IEntityQueryExecutor
	{

		#region Constants: Private

		private const string _userTypeColumnName = "UserType";

		#endregion

		#region Fields: Private

		private readonly UserConnection _userConnection;
		private readonly EntitySchema _virtualEntitySchema;
		private readonly EntitySchema _settingsEntitySchema;

		#endregion

		#region Constructors: Public

		protected BaseSsoVirtualSettingsQueryExecutor(UserConnection userConnection, string virtualSettingsSchemaName,
				string settingsSchemaName) {
			_userConnection = userConnection;
			_virtualEntitySchema = _userConnection.EntitySchemaManager.GetInstanceByName(virtualSettingsSchemaName);
			_settingsEntitySchema = _userConnection.EntitySchemaManager.GetInstanceByName(settingsSchemaName);
		}

		#endregion

		#region Methods: Private

		private static void SetLookupColumnValue(Entity entity, string columnName, object id, string name) {
			EntitySchemaColumn lookupColumn = entity.Schema.GetSchemaColumnByPath(columnName);
			entity.SetColumnBothValues(lookupColumn, id, name);
		}

		private void SetIsDefaultColumn(Entity entity) {
			var settingValue = SysSettings.GetValue(entity.UserConnection, "DefaultSsoProvider", Guid.Empty);
			var ssoProviderId = entity.GetTypedColumnValue<Guid>("SsoProviderId");
			var isDefault = settingValue != Guid.Empty
				&& ssoProviderId != Guid.Empty
				&& settingValue == ssoProviderId;
			entity.LoadColumnValue("IsDefault", isDefault);
		}

		private Entity CreateVirtualEntity(Entity settings, EntitySchemaQueryColumn nameColumn, EntitySchemaQueryColumn userTypeIdColumn,
				EntitySchemaQueryColumn userTypeNameColumn, EntitySchemaQueryColumn codeColumn, EntitySchemaQueryColumn templateIdColumn,
				EntitySchemaQueryColumn templateNameColumn) {
			Entity entity = _virtualEntitySchema.CreateEntity(_userConnection);
			entity.SetDefColumnValues();
			foreach (string columnValueName in settings.GetColumnValueNames()) {
				if (!settings.IsColumnValueLoaded(columnValueName)
						|| entity.FindEntityColumnValue(columnValueName) == null) {
					continue;
				}
				entity.SetColumnValue(columnValueName, settings.GetColumnValue(columnValueName));
			}
			entity.SetColumnValue("Name", settings.GetTypedColumnValue<string>(nameColumn.Name));
			entity.SetColumnValue("Code", settings.GetTypedColumnValue<string>(codeColumn.Name));
			SetLookupColumnValue(entity, "SsoSettingsTemplate", settings.GetColumnValue(templateIdColumn.Name),
				settings.GetTypedColumnValue<string>(templateNameColumn.Name));
			if (entity.Schema.Columns.FindByName(_userTypeColumnName) != null) {
				SetLookupColumnValue(entity, _userTypeColumnName, settings.GetColumnValue(userTypeIdColumn.Name),
					settings.GetTypedColumnValue<string>(userTypeNameColumn.Name));
			}
			SetIsDefaultColumn(entity);
			entity.StoringState = StoringObjectState.NotChanged;
			return entity;
		}

		#endregion

		#region Methods: Public

		/// <inheritdoc />
		public EntityCollection GetEntityCollection(EntitySchemaQuery entitySchemaQuery) {
			var esq = new EntitySchemaQuery(_settingsEntitySchema);
			esq.AddAllSchemaColumns();
			EntitySchemaQueryColumn nameColumn = esq.AddColumn("SsoProvider.Name");
			EntitySchemaQueryColumn userTypeIdColumn = null;
			EntitySchemaQueryColumn userTypeNameColumn = null;
			if (_virtualEntitySchema.Columns.FindByName(_userTypeColumnName) != null) {
				userTypeIdColumn = esq.AddColumn("SsoProvider.UserType.Id");
				userTypeNameColumn = esq.AddColumn("SsoProvider.UserType.Name");
			}
			EntitySchemaQueryColumn codeColumn = esq.AddColumn("SsoProvider.Code");
			EntitySchemaQueryColumn templateIdColumn = esq.AddColumn("SsoProvider.SsoSettingsTemplate.Id");
			templateIdColumn.SetForcedQueryColumnValueAlias("TemplateId");
			EntitySchemaQueryColumn templateNameColumn = esq.AddColumn("SsoProvider.SsoSettingsTemplate.Name");
			templateNameColumn.SetForcedQueryColumnValueAlias("TemplateName");
			esq.Filters.Add(entitySchemaQuery.Filters);
			EntityCollection settingsCollection = esq.GetEntityCollection(_userConnection);
			var resultCollection = new EntityCollection(_userConnection, _virtualEntitySchema);
			foreach (Entity settings in settingsCollection) {
				Entity entity = CreateVirtualEntity(settings,
					nameColumn, userTypeIdColumn, userTypeNameColumn, codeColumn, templateIdColumn, templateNameColumn);
				resultCollection.Add(entity);
			}
			return resultCollection;
		}

		#endregion

	}

	#endregion

}

