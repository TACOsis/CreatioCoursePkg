namespace Terrasoft.Core.Process.Configuration
{
	using System;
	using Terrasoft.Common;
	using Terrasoft.Core.Process;
	using Terrasoft.Core.Factories;
    using Terrasoft.Configuration.GlobalSearch;
    using Terrasoft.Configuration.GlobalSearchDto;
    using Newtonsoft.Json;

	#region Class: SearchEntities

	/// <exclude/>
	public partial class SearchEntities
	{
		#region Constants: Private

		private const int MaxResults = 15;

		#endregion
		
		#region Methods: Protected

		protected override bool InternalExecute(ProcessExecutingContext context) {
			if (string.IsNullOrWhiteSpace(SearchQuery)) {
				throw new ArgumentException("SearchQuery must not be empty or null.");
			}
            var globalSearchService = ClassFactory.Get<GlobalSearchService>();
            var result = globalSearchService.Search(SearchQuery, SectionEntityName ?? string.Empty, MaxResults);
            var searchResponse = JsonConvert.DeserializeObject<BpmSearchResponse>(result);
			var searchResult = new CompositeObjectList<CompositeObject>();
			if (!searchResponse.Success) {
				var compositeObject = new CompositeObject();
				compositeObject[nameof(searchResponse.ErrorInfo)] = searchResponse.ErrorInfo.Message;
				searchResult.Add(compositeObject);
				Output = searchResult;
				return true;
			}
			foreach (var data in searchResponse.Data) {
				var compositeObject = new CompositeObject();
				compositeObject[nameof(data.EntityName)] = data.EntityName;
				compositeObject[nameof(data.Id)] = data.Id;
				var schema = UserConnection.EntitySchemaManager.GetInstanceByName(data.EntityName);
				var primaryDisplayColumn = schema.FindPrimaryDisplayColumnName();
				var nestedCompositeObject = new CompositeObject();
				foreach (var column in data.FoundColumns) {
					if (primaryDisplayColumn != null && primaryDisplayColumn == column.Key) {
						compositeObject[primaryDisplayColumn] = data.ColumnValues[primaryDisplayColumn];
					}
					nestedCompositeObject[column.Key] = data.ColumnValues[column.Key].ToString();
				}
				compositeObject[nameof(data.FoundColumns)] = nestedCompositeObject;
				searchResult.Add(compositeObject);
			}
			Output = searchResult;
			return true;
		}

		#endregion

	}

	#endregion

}

