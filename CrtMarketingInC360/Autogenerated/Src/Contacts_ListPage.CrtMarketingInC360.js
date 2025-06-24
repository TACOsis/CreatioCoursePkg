define("Contacts_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "DataTable_AddRecordsToStaticFolderAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(DataTable_AddRecordsToStaticFolderAction_caption)#",
					"icon": "folder-button-icon",
					"clicked": {
						"request": "crt.AddRecordsInStaticFoldersRequest",
						"params": {
							"filters": "$Items | crt.ToCollectionFilters : 'Items' : $DataTable_SelectionState | crt.SkipIfSelectionEmpty : $DataTable_SelectionState",
							"dataSourceName": "PDS"
						}
					},
					"items": [],
					"visible": true
				},
				"parentName": "DataTable",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataTable_RemoveRecordsFromStaticFolderAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(DataTable_RemoveRecordsFromStaticFolderAction_caption)#",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveRecordsInStaticFoldersRequest",
						"params": {
							"filters": "$Items | crt.ToCollectionFilters : 'Items' : $DataTable_SelectionState | crt.SkipIfSelectionEmpty : $DataTable_SelectionState",
							"dataSourceName": "PDS"
						}
					},
					"visible": true
				},
				"parentName": "DataTable_AddRecordsToStaticFolderAction",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});