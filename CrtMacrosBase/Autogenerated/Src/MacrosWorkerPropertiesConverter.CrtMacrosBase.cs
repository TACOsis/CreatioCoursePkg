namespace Terrasoft.Configuration
{
	using System;
	using System.Linq;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Configuration.Utils;

	#region Class: MacrosWorkerPropertiesConverter

	/// <summary>
	/// Represents properties converter from <see cref="MacrosExtendedProperties"/> to <see cref="MacrosWorkerExtendedProperties"/>.
	/// </summary>
	public class MacrosWorkerPropertiesConverter : IMacrosWorkerPropertiesConverter<MacrosExtendedProperties, MacrosWorkerExtendedProperties>
	{

		#region Properties: Public

		/// <summary>
		/// User connection.
		/// </summary>
		public UserConnection UserConnection {
			get;
		}

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Creates new instance of <see cref="MacrosWorkerPropertiesConverter"/>
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		public MacrosWorkerPropertiesConverter(UserConnection userConnection) {
			UserConnection = userConnection;
		}

		#endregion

		#region Methods: Private

		private Guid GetSysCultureByLanguage(Guid languageId) {
			if (languageId == Guid.Empty) {
				return Guid.Empty;
			}
			var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "SysCulture");
			esq.PrimaryQueryColumn.IsAlwaysSelect = true;
			var languageFilter = esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Language", languageId);
			esq.Filters.Add(languageFilter);
			var sysLanguage = esq.GetEntityCollection(UserConnection).SingleOrDefault();
			return sysLanguage?.PrimaryColumnValue ?? Guid.Empty;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Converts <see cref="MacrosExtendedProperties"/> to <see cref="MacrosWorkerExtendedProperties"/> properties.
		/// </summary>
		/// <param name="macrosProperties">MacrosHelper extended properties <see cref="MacrosExtendedProperties"/></param>
		/// <returns>Returns instance of <see cref="MacrosWorkerExtendedProperties"/></returns>
		public MacrosWorkerExtendedProperties Convert(MacrosExtendedProperties macrosProperties) {
			var workerProperties = new MacrosWorkerExtendedProperties();
			if (macrosProperties == null) {
				return workerProperties;
			}
			workerProperties.SysCultureId = GetSysCultureByLanguage(macrosProperties.LanguageId);
			return workerProperties;
		}

		#endregion

	}

	#endregion

}
