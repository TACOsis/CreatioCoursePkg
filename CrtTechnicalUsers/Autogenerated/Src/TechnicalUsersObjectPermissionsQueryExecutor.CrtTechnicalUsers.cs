namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Data;
	using System.Linq;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using Terrasoft.Common;
	using Terrasoft.Web.Http.Abstractions;
	using Terrasoft.Web.Common;
	
	#region Class: TechnicalUsersObjectPermissionsQueryExecutor

	[DefaultBinding(typeof(IEntityQueryExecutor), Name = "TechnicalUsersObjectPermissionsQueryExecutor")]
	public class TechnicalUsersObjectPermissionsQueryExecutor : IEntityQueryExecutor
	{

		#region Struct: UserSchemaKey

		public readonly struct UserSchemaKey : IEquatable<UserSchemaKey>
		{

			#region Properties: Public

			public Guid UserId { get; }
			public Guid SysSchemaUId { get; }

			#endregion

			#region Constructors: Public

			public UserSchemaKey(Guid userId, Guid sysSchemaUId) {
				UserId = userId;
				SysSchemaUId = sysSchemaUId;
			}

			#endregion

			#region Methods: Public

			public override bool Equals(object obj) {
				return obj is UserSchemaKey key && Equals(key);
			}

			public bool Equals(UserSchemaKey other) {
				return UserId.Equals(other.UserId) && SysSchemaUId.Equals(other.SysSchemaUId);
			}

			public override int GetHashCode() {
				unchecked {
					int hash = 17;
					hash = hash * 23 + UserId.GetHashCode();
					hash = hash * 23 + SysSchemaUId.GetHashCode();
					return hash;
				}
			}

			#endregion

		}

		#endregion

		#region Fields: Private

		private readonly UserConnection _userConnection;

		#endregion

		#region Constructors: Public

		public TechnicalUsersObjectPermissionsQueryExecutor(UserConnection userConnection) {
			_userConnection = userConnection;
		}

		#endregion

		#region Methods: Private

		private static void ApplyFilters(Select query, EntitySchemaQueryFilterCollection filters) {
			foreach (IEntitySchemaQueryFilterItem entitySchemaQueryFilterItem in filters) {
				IEnumerable<EntitySchemaQueryFilter> filterInstances = entitySchemaQueryFilterItem.GetFilterInstances();
				foreach (EntitySchemaQueryFilter filter in filterInstances) {
					if (filter.LeftExpression.ExpressionType == EntitySchemaQueryExpressionType.SchemaColumn 
						&& filter.RightExpressions[0].ExpressionType == EntitySchemaQueryExpressionType.Parameter) {
						object value = filter.RightExpressions.First().ParameterValue;
						switch (filter.LeftExpression.Path) {
							case "[VwTechnicalUser:Id:TechnicalUserId].Id": 
								query.And("sau", "Id").IsEqual(Column.Parameter(value));
								break;
							case "Object": 
								query.And("ss", "Name").IsLike(Column.Parameter($"%{value}%"));
								break;
							default: 
								return;
						}
					}
				}
			}
		}

		private Select GetUsersObjectPermissionsSelectQuery(EntitySchemaQueryFilterCollection filters) {
			var selectQuery =
				new Select(_userConnection)
					.Column("sau", "Id").As("UserId")
					.Column("ss", "UId").As("SysSchemaUId")
					.Column("ss", "Name").As("SysSchemaName")
					.Column("sesor", "CanRead")
					.Column("sesor", "CanAppend")
					.Column("sesor", "CanEdit")
					.Column("sesor", "CanDelete")
					.Column("sesor", "Position")
					.Column("vwwo", "AdministratedByRecords")
					.Column("vwwo", "AdministratedByColumns")
				.From("SysAdminUnit").As("sau")
					.InnerJoin("SysAdminUnitInRole").As("saur")
						.On("saur", "SysAdminUnitId") .IsEqual("sau", "Id")
					.InnerJoin("SysEntitySchemaOperationRight").As("sesor")
						.On("sesor", "SysAdminUnitId").IsEqual("saur", "SysAdminUnitRoleId")
					.InnerJoin("SysSchema").As("ss")
						.On("sesor", "SubjectSchemaUId").IsEqual("ss", "UId")
					.InnerJoin("VwWorkspaceObjects").As("vwwo")
						.On("ss", "UId").IsEqual("vwwo", "UId")
				.Where("sau", "SysAdminUnitTypeValue").IsEqual(Column.Parameter(7)) as Select;
			ApplyFilters(selectQuery, filters);
			return selectQuery;
		}

		#endregion

		#region Methods: Public

		public EntityCollection GetEntityCollection(EntitySchemaQuery esq) {
			Select selectQuery = GetUsersObjectPermissionsSelectQuery(esq.Filters);
			EntitySchema schema = _userConnection.EntitySchemaManager
				.GetInstanceByName("TechnicalUsersObjectPermissions");
			var resultCollection = new EntityCollection(_userConnection, schema);
			string baseApplicationUrl = WebUtilities.GetBaseApplicationUrl(HttpContext.Current.Request);
			string objectPermissionsUrl = baseApplicationUrl + "/ClientApp/#/AdministratedObjects/";
			var minPositionEntities = new Dictionary<UserSchemaKey, (Entity Entity, int Position)>();
			using (DBExecutor dbExecutor = _userConnection.EnsureDBConnection()) {
				using (IDataReader reader = selectQuery.ExecuteReader(dbExecutor)) {
					while (reader.Read()) {
						Guid sysSchemaUId = reader.GetColumnValue<Guid>("SysSchemaUId");
						Guid userId = reader.GetColumnValue<Guid>("UserId");
						int position = reader.GetColumnValue<int>("Position");
						var key = new UserSchemaKey(userId, sysSchemaUId);
						if (minPositionEntities.TryGetValue(key, out (Entity Entity, int Position) current)
								&& current.Position <= position) {
							continue;
						}
						Entity entity = schema.CreateEntity(_userConnection);
						entity.SetDefColumnValues();
						entity.LoadColumnValue("Object", reader.GetColumnValue<string>("SysSchemaName"));
						entity.LoadColumnValue("TechnicalUserId", userId);
						entity.LoadColumnValue("CanRead", reader.GetColumnValue<bool>("CanRead"));
						entity.LoadColumnValue("CanAppend", reader.GetColumnValue<bool>("CanAppend"));
						entity.LoadColumnValue("CanEdit", reader.GetColumnValue<bool>("CanEdit"));
						entity.LoadColumnValue("CanDelete", reader.GetColumnValue<bool>("CanDelete"));
						entity.LoadColumnValue("AdministratedByRecords", reader.GetColumnValue<bool>("AdministratedByRecords"));
						entity.LoadColumnValue("AdministratedByColumns", reader.GetColumnValue<bool>("AdministratedByColumns"));
						entity.LoadColumnValue("ObjectPermissionsUrl", objectPermissionsUrl + sysSchemaUId);
						minPositionEntities[key] = (entity, position);
					}
				}
			}
			foreach ((Entity Entity, int Position) values in minPositionEntities.Values) {
				resultCollection.Add(values.Entity);
			}
			return resultCollection;
		}

		#endregion

	}

	#endregion

}

