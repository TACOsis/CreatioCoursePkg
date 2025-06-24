namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Core.Entities;

	#region Class: EntityUtilities

	/// <summary>
	/// ######## ######### ###### ### ###### # Entity
	/// </summary>
	public static class EntityUtilities
	{

		#region Methods: Public

		/// <summary>
		/// ########## ######## ####### <paramref name="columnName"/>, ########## ####
		/// </summary>
		/// <param name="columnName">### #######, ######## ####### ########## #######.</param>
		/// <returns>######## ####### ########## ####
		/// </returns>
		public static T SafeGetColumnValue<T>(this Entity entity, string columnName) {
			if (entity.IsColumnValueLoaded(columnName)) {
				return entity.GetTypedColumnValue<T>(columnName);
			}
			return default(T);
		}

		#endregion

	}

	#endregion

}
