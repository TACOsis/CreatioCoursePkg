namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Runtime.Serialization;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.ServiceModelContract;

	/// <summary>
	/// Represents a class responsible for loading playbook stage data.
	/// </summary>
	#region Class: PlaybookStageLoader

	public class PlaybookStageLoader
	{

		private readonly UserConnection _userConnection;

		/// <summary>
		/// Initializes a new instance of the <see cref="PlaybookStageLoader"/> class.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		public PlaybookStageLoader(UserConnection userConnection) {
			_userConnection = userConnection;
		}

		#region Methods: Private

		/// <summary>
		/// Gets the name of the DCM stage lookup.
		/// </summary>
		/// <param name="dcmId">The DCM identifier.</param>
		/// <returns>The name of the DCM stage lookup.</returns>
		private string GetDcmStageLookupName(Guid dcmId) {
			Select query = new Select(_userConnection)
				.Top(1)
				.Column("SS", "Name")
				.From("SysSchema").As("SS")
				.InnerJoin("SysEntitySchemaReference").As("SESR")
					.On("SS", "Id").IsEqual("SESR", "ReferenceSchemaId")
				.InnerJoin("VwSysDcmLib").As("SDL")
					.On("SESR", "ColumnUId").IsEqual("SDL", "StageColumnUId")
				.Where("SDL", "Id").IsEqual(Column.Parameter(dcmId))
				as Select;
			return query.ExecuteScalar<string>();
		}

		private void AddSchemaColumns(EntitySchema schema, EntitySchemaQuery esq) {
			esq.PrimaryQueryColumn.IsAlwaysSelect = true;
			AddIfColumnFilled(schema.PrimaryColorColumn, esq);
			AddIfColumnFilled(schema.PrimaryDisplayColumn, esq);
		}

		private void AddIfColumnFilled(EntitySchemaColumn column, EntitySchemaQuery esq) {
			if (column != null) {
				esq.AddColumn(column.Name);
			}
		}

		private List<LookupValue> GetLookupStageValues(EntitySchema schema, EntityCollection collectionResult) {
			List<LookupValue> result = new List<LookupValue>();
			foreach (var entity in collectionResult) {
				result.Add(new LookupValue {
					Value = entity.GetTypedColumnValue<Guid>(schema.PrimaryColumn.Name),
					DisplayValue = schema.PrimaryDisplayColumn != null ? entity.PrimaryDisplayColumnValue : string.Empty,
					PrimaryColorValue = schema.PrimaryColorColumn != null ? entity.GetTypedColumnValue<string>(schema.PrimaryColorColumn.Name) : string.Empty,
				});
			}
			return result;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Returns DCM stages from lookup.
		/// </summary>
		/// <param name="dcmId">Dcm schema identifier.</param>
		/// <returns></returns>
		public List<LookupValue> GetDcmLookupValues(Guid dcmId) {
			var schemaName = GetDcmStageLookupName(dcmId);
			EntitySchema schema = _userConnection.EntitySchemaManager.GetInstanceByName(GetDcmStageLookupName(dcmId));
			EntitySchemaQuery esq = new EntitySchemaQuery(schema);
			AddSchemaColumns(schema, esq);
			return GetLookupStageValues(schema, esq.GetEntityCollection(_userConnection));
		}

		#endregion

	}

	#endregion

}

