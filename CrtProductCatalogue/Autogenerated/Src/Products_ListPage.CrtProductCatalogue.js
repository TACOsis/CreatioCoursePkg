define("Products_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_Name",
							"caption": "#ResourceString(PDS_Name)#",
							"dataValueType": 1,
							"width": 326
						},
						{
							"id": "9558f750-e644-93bb-a066-e750aa331d3e",
							"code": "PDS_Type",
							"path": "Type",
							"caption": "#ResourceString(PDS_Type)#",
							"dataValueType": 10,
							"referenceSchemaName": "ProductType",
							"width": 219
						},
						{
							"id": "ea7bb2f4-a4cc-5061-4afd-6421af6b0daf",
							"code": "PDS_Category",
							"path": "Category",
							"caption": "#ResourceString(PDS_Category)#",
							"dataValueType": 10,
							"referenceSchemaName": "ProductCategory"
						},
						{
							"id": "7a73a67e-2ad8-24ff-0516-3a67c316633b",
							"code": "PDS_Price",
							"path": "Price",
							"caption": "#ResourceString(PDS_Price)#",
							"dataValueType": 6,
							"width": 180
						},
						{
							"id": "48bc9532-9222-9d41-e7a5-6a2c2543194a",
							"code": "PDS_Currency",
							"path": "Currency",
							"caption": "#ResourceString(PDS_Currency)#",
							"dataValueType": 10,
							"referenceSchemaName": "Currency"
						}
					]
				}
			},
			{
				"operation": "remove",
				"name": "DataTable",
				"properties": [
					"selectionState",
					"_selectionOptions"
				]
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_Category": {
						"modelConfig": {
							"path": "PDS.Category"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig",
					"sortingConfig"
				],
				"values": {
					"default": []
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config",
					"attributes"
				],
				"values": {
					"Category": {
						"path": "Category"
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});