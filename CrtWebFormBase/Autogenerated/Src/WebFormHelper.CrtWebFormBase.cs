namespace Terrasoft.Configuration.GeneratedWebFormService
{
	using System;
	using System.Collections.Generic;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;

	#region Class: WebFormHelper

	/// <summary>
	/// Provides common operations for webforms.
	/// </summary>
	public static class WebFormHelper
	{
		#region Constants: Private

		private static readonly List<string> _geographicalUnitColumns
			= new List<string>() { "CityStr", "CountryStr", "RegionStr" };

		#endregion

		#region Methods: Protected

		private static EntitySchemaQuery GetWebFormSchemaEsq(UserConnection userConnection) {
			var esq = new EntitySchemaQuery(userConnection.EntitySchemaManager, "GeneratedWebForm");
			esq.AddColumn("Type.SchemaUid");
			return esq;
		}

		private static EntitySchemaQuery GetDictionaryItemEsq(string dictionaryName, string filterFieldValue,
				UserConnection userConnection) {
			EntitySchemaQuery dictionaryESQ = new EntitySchemaQuery(userConnection.EntitySchemaManager, dictionaryName);
			dictionaryESQ.PrimaryQueryColumn.IsAlwaysSelect = true;
			dictionaryESQ.AddColumn("Name");
			dictionaryESQ.Filters.Add(dictionaryESQ.CreateFilterWithParameters(
				FilterComparisonType.Equal,
				"Name",
				filterFieldValue
				));
			return dictionaryESQ;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Gets the web form identifier.
		/// </summary>
		/// <param name="formData">The form data.</param>
		/// <param name="userConnection">The user connection.</param>
		/// <returns></returns>
		public static Guid GetWebFormId(this FormData formData) {
			Guid webFormId;
			if (!Guid.TryParse(formData.formId, out webFormId)) {
				return Guid.Empty;
			}
			return webFormId;
		}

		/// <summary>
		/// Gets the web form entity schema.
		/// </summary>
		/// <param name="webFormId">The web form identifier.</param>
		/// <param name="userConnection">The user connection.</param>
		/// <returns></returns>
		public static EntitySchema GetWebFormEntitySchema(Guid webFormId, UserConnection userConnection) {
			var esq = GetWebFormSchemaEsq(userConnection);
			var entity = esq.GetEntity(userConnection, webFormId);
			if (entity == null) {
				return null;
			}
			var schemaUid = entity.GetTypedColumnValue<Guid>("Type_SchemaUidId");
			return userConnection.EntitySchemaManager.FindInstanceByUId(schemaUid);
		}

		/// <summary>
		/// Returns record identifier, by text value.
		/// </summary>
		/// <param name="dictionaryName">Lookup name.</param>
		/// <param name="filterFieldValue">Text value.</param>
		/// <param name="userConnection">UserConnection.</param>
		/// <returns>Record identifier.</returns>
		public static Guid GetItemIdFromDictionary(string dictionaryName, string filterFieldValue,
				UserConnection userConnection) {	
			EntitySchemaQuery dictionaryEsq = GetDictionaryItemEsq(dictionaryName, filterFieldValue, userConnection);
			EntityCollection dictionaryEntityCollection = dictionaryEsq.GetEntityCollection(userConnection);
			if (dictionaryEntityCollection.Count != 0) {
				return dictionaryEntityCollection[0].GetTypedColumnValue<Guid>(dictionaryEsq.PrimaryQueryColumn.Name);
			}
			return Guid.Empty;
		}

		/// <summary>
		/// Determines whether [is geographical column] [the specified column name].
		/// </summary>
		/// <param name="columnName">Name of the column.</param>
		/// <returns>
		///   <c>true</c> if [is geographical column] [the specified column name]; otherwise, <c>false</c>.
		/// </returns>
		public static bool IsGeographicalColumn(string columnName) {
			return _geographicalUnitColumns.Contains(columnName);
		}

		/// <summary>
		/// Gets the geographical unit column.
		/// </summary>
		/// <param name="columnName">Name of the column.</param>
		/// <param name="columnValue">The column value.</param>
		/// <param name="userConnection">The user connection.</param>
		/// <returns></returns>
		public static KeyValuePair<string, string> GetGeographicalUnitColumn(string columnName, string columnValue,
				UserConnection userConnection) {
			string dictionaryName = columnName.Remove(columnName.Length - 3);
			Guid itemIdValue = GetItemIdFromDictionary(dictionaryName, columnValue, userConnection);
			KeyValuePair<string, string> column;
			if (itemIdValue != Guid.Empty) {
				column = new KeyValuePair<string, string>(dictionaryName + "Id", itemIdValue.ToString());
			} else {
				column = new KeyValuePair<string, string>(columnName, columnValue);
			}
			return column;
		}

		#endregion

	}

	#endregion

}

