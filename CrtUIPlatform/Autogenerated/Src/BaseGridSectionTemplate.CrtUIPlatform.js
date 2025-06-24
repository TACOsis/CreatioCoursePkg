// Parent: BaseSectionTemplate
define("BaseGridSectionTemplate", /**SCHEMA_DEPS*/["@creatio-devkit/common", "css!BaseGridSectionTemplateCSS"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(devkit)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"color": "primary"
				}
			},
			{
				"operation": "insert",
				"name": "SectionContentWrapper",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"stretch": true,
					"fitContent": false,
					"color": "primary",
					"items": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataTable",
				"values": {
					"type": "crt.DataGrid",
					"columns": "$Columns",
					"items": "$Items",
					"layoutConfig": {
						"basis": "100%"
					},
					"classes": ["section-data-grid"],
					"placeholder": [
						{
							"type": "crt.Placeholder",
							"image": {
								"type": "animation",
								"name": "search"
							},
							"title": "#ResourceString(FilteredEmptySectionPlaceholderTitle)#",
							"subhead": "#ResourceString(FilteredEmptySectionPlaceholderSubHead)#",
							"visible": "$DataTable_NoFilteredItems"
						},
						{
							"type": "crt.Placeholder",
							"image": {
								"type": "animation",
								"name": "cat"
							},
							"title": "#ResourceString(EmptySectionPlaceholderTitle)#",
							"subhead": "#ResourceString(EmptySectionPlaceholderSubHead)#",
							"visible": "$DataTable_NoItems"
						}
					],
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					}
				},
				"parentName": "SectionContentWrapper",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"ActiveRecordId": {},
				"Items": {
					"isCollection": true,
					"viewModelConfig": {
						"attributes": {}
					}
				},
				"Columns": {
					"value": []
				},
				"DataTable_NoItems": {
					"from": ["Items"],
					"converter": "crt.DataGridHasNoItems"
				},
				"DataTable_NoFilteredItems": {
					"from": ["Items"],
					"converter": "crt.DataGridHasNoFilteredItems"
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
