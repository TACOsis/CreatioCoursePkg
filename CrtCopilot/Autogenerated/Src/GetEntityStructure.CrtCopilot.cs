namespace Terrasoft.Core.Process.Configuration
{
	using System.Linq;
	using System.Text;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;

	#region Class: GetEntityStructure

	/// <exclude/>
	public partial class GetEntityStructure
	{

		#region Methods: Protected

		protected override bool InternalExecute(ProcessExecutingContext context) {
            EntitySchema entitySchema = UserConnection.EntitySchemaManager.GetInstanceByName(EntitySchemaName);
			var columns = entitySchema.Columns.Select(column => new {
				column.Name,
				column.Caption,
				Type = column.DataValueType?.Name,
				ReferenceEntitySchemaName = column.ReferenceSchema?.Name
			}).Aggregate(new StringBuilder("["), (sb, col) => {
				if (sb.Length > 1) {
					sb.Append(',');
				}
				sb.Append("[\"").Append(col.Name).Append("\",\"").Append(col.Type).Append("\"");
				var caption = col.Caption?.Value;
				if (!string.IsNullOrEmpty(caption) && caption != col.Name) {
					sb.Append(",\"").Append(caption).Append("\"");
				} else if (col.Type == "Lookup" && !string.IsNullOrEmpty(col.ReferenceEntitySchemaName)) {
					sb.Append(",\"").Append(col.ReferenceEntitySchemaName).Append("\"");
				}
				return sb.Append("]");
			}, sb => sb.Append("]").ToString());
			Output = columns;
			return true;
		}

		#endregion

	}

	#endregion

}

