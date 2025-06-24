namespace Terrasoft.Core.Process.Configuration
{
	using System.Collections.Generic;
	using Terrasoft.Common;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Process;

	#region Class: GetIndexedEntities

	/// <exclude/>
	public partial class GetIndexedEntities
	{

		#region Methods: Protected

		protected override bool InternalExecute(ProcessExecutingContext context) {
            var indexedEntities = RetrieveIndexedEntities();
            Output = string.Join(", ", indexedEntities);
			return true;
		}

		#endregion

		#region Methods: Private
		
		private Select CreateSchemaSelect() {
			return new Select(UserConnection)
				.Column("SysModule", "Code")
				.Distinct()
				.From("SysModule")
				.Where("SysModule", "GlobalSearchAvailable")
				.IsEqual(Column.Parameter(true)) as Select;
		}
		
		private List<string> RetrieveIndexedEntities() {
			var indexedEntities = new List<string>();
			var schemaSelect = CreateSchemaSelect();
			using (var dbExecutor = UserConnection.EnsureDBConnection()) {
				using (var reader = schemaSelect.ExecuteReader(dbExecutor)) {
					while (reader.Read()) {
						var indexedEntity = reader.GetColumnValue<string>("Code");
						indexedEntities.Add(indexedEntity);
					}
				}
			}
			return indexedEntities;
		}

		#endregion
	}

	#endregion

}

