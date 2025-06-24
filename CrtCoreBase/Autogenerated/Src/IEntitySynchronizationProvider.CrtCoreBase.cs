namespace Terrasoft.Configuration.EntitySynchronization
{

	using System.Collections.Generic;
	using Terrasoft.Core.Entities;
	using Terrasoft.Common;

	#region Interface: IEntitySynchronizationProvider

	public interface IEntitySynchronizationProvider
	{

		Entity FindEntity(string entitySchemaName, Dictionary<string, object> conditions);

		Entity CreateEntity(string entitySchemaName, bool useAdminRights = false);

		Entity FindEntity(string entitySchemaName, Dictionary<string, object> conditions,
			Dictionary<string, OrderDirection> orderByColumns);

	}

	#endregion

}

