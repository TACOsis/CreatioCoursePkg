namespace Terrasoft.AppFeatures
{
	using System;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;

	#region Class: BaseQueryExecutor

	public abstract class BaseQueryExecutor
	{

		#region Fields: Private

		private readonly EntitySchema _entitySchema;
		private readonly UserConnection _userConnection;

		#endregion

		#region Constructors: Protected

		protected BaseQueryExecutor(UserConnection userConnection, string entitySchemaName) {
			_userConnection = userConnection;
			_entitySchema = UserConnection.EntitySchemaManager.GetInstanceByName(entitySchemaName);
		}

		#endregion

		#region Properties: Protected

		protected UserConnection UserConnection => _userConnection;

		protected EntitySchema EntitySchema => _entitySchema;

		#endregion

		#region Methods: Protected

		protected bool GetIsPrimaryColumnValueFilter(QueryFilterInfo filterInfo, out Guid primaryColumnValue) {
			primaryColumnValue = default;
			return filterInfo?.GetIsSingleColumnValueEqualsFilter(EntitySchema.PrimaryColumn.Name,
				out primaryColumnValue) == true;
		}

		#endregion

	}

	#endregion

}

