namespace Creatio.Copilot
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;

	public interface ICopilotContextResolver
	{
		CompositeObjectList<CompositeObject> Resolve(string entitySchemaName, List<string> columnNames,
			List<Guid> recordIds);
	}

	[DefaultBinding(typeof(ICopilotContextResolver))]
	public class CopilotContextResolver : ICopilotContextResolver
	{

		#region Fields: Private

		private readonly UserConnection _userConnection;

		#endregion

		#region Constructors: Public

		public CopilotContextResolver(UserConnection userConnection) {
			_userConnection = userConnection;
		}

		#endregion

		#region Methods: Private

		private EntityCollection LoadData(string entitySchemaName, List<string> columnNames,
				List<Guid> recordIds) {
			if (recordIds.IsEmpty()) {
				return new EntityCollection(_userConnection, entitySchemaName);
			}
			var esq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, entitySchemaName) {
				PrimaryQueryColumn = {
					IsVisible = true
				}
			};
			foreach (string columnName in columnNames) {
				esq.AddColumn(columnName);
			}
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, 
				esq.RootSchema.GetPrimaryColumnName(), recordIds.Cast<object>().ToList()));
			return esq.GetEntityCollection(_userConnection);
		}

		#endregion

		#region Methods: Public

		public CompositeObjectList<CompositeObject> Resolve(string entitySchemaName, List<string> columnNames,
			List<Guid> recordIds) {
			EntityCollection entityCollection = LoadData(entitySchemaName, columnNames, recordIds);
			var result = new CompositeObjectList<CompositeObject>();
			foreach (Entity entity in entityCollection) {
				var compositeObject = new CompositeObject();
				IEnumerable<string> columnValueNames = entity.GetColumnValueNames();
				foreach (string columnValueName in columnValueNames) {
					var columnValue = entity.FindEntityColumnValue(columnValueName);
					if (columnValue.IsLoaded) {
						compositeObject[columnValueName] = columnValue.Value;
					}
				}
				result.Add(compositeObject);
			}
			return result;
		}

		#endregion

	}
} 
