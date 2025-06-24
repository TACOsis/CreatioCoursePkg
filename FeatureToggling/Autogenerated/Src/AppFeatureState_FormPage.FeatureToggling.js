define("AppFeatureState_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "LeftModulesContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "remove",
				"name": "LeftAreaContainer"
			},
			{
				"operation": "remove",
				"name": "CardContentContainer"
			},
			{
				"operation": "remove",
				"name": "ControlGroupContainer"
			},
			{
				"operation": "insert",
				"name": "ComboBox_iw4fi1e",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"loading": false,
					"control": "$LookupAttribute_4ko02cq",
					"label": "$Resources.Strings.LookupAttribute_4ko02cq",
					"labelPosition": "auto",
					"isAddAllowed": true,
					"showValueAsLink": true
				},
				"parentName": "LeftAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_b401yu2",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"loading": false,
					"control": "$LookupAttribute_kl7y88q",
					"label": "$Resources.Strings.LookupAttribute_kl7y88q",
					"labelPosition": "auto",
					"isAddAllowed": true,
					"showValueAsLink": true
				},
				"parentName": "LeftAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Checkbox_nazd1m1",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"control": "$BooleanAttribute_ojnx9dc",
					"label": "$Resources.Strings.BooleanAttribute_ojnx9dc",
					"labelPosition": "auto"
				},
				"parentName": "LeftAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"Name": {
					"modelConfig": {
						"path": "PDS.Name"
					}
				},
				"Id": {
					"modelConfig": {
						"path": "PDS.Id"
					}
				},
				"LookupAttribute_4ko02cq": {
					"modelConfig": {
						"path": "PDS.Feature"
					}
				},
				"LookupAttribute_kl7y88q": {
					"modelConfig": {
						"path": "PDS.AdminUnit"
					}
				},
				"BooleanAttribute_ojnx9dc": {
					"modelConfig": {
						"path": "PDS.FeatureState"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"PDS": {
					"type": "crt.EntityDataSource",
					"config": {
						"entitySchemaName": "AppFeatureState"
					},
					"scope": "page"
				}
			},
			"primaryDataSourceName": "PDS"
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});