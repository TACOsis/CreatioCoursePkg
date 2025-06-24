define("Leads_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "DetailsFlexContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 2,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "insert",
				"name": "ContactSource",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.QualifiedContactSource",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"readonly": true,
					"control": "$QualifiedContactSource",
					"visible": true,
					"placeholder": ""
				},
				"parentName": "SideAreaProfileFieldGridContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ContactChannel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.QualifiedContactChannel",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"readonly": true,
					"control": "$QualifiedContactChannel",
					"visible": true,
					"placeholder": ""
				},
				"parentName": "OverviewFieldsContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "ContactRegisterMethod",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.QualifiedContactRegisterMethod",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"readonly": true,
					"control": "$QualifiedContactRegisterMethod",
					"visible": true,
					"placeholder": ""
				},
				"parentName": "OverviewFieldsContainer",
				"propertyName": "items",
				"index": 8
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"QualifiedContactSource": {
					"modelConfig": {
						"path": "PDS.QualifiedContactSource"
					}
				},
				"QualifiedContactChannel": {
					"modelConfig": {
						"path": "PDS.QualifiedContactChannel"
					}
				},
				"QualifiedContactRegisterMethod": {
					"modelConfig": {
						"path": "PDS.QualifiedContactRegisterMethod"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"PDS": {
					"config": {
						"attributes": {
							"QualifiedContactSource": {
								"path": "QualifiedContact.Source",
								"type": "ForwardReference"
							},
							"QualifiedContactChannel": {
								"path": "QualifiedContact.Channel",
								"type": "ForwardReference"
							},
							"QualifiedContactRegisterMethod": {
								"path": "QualifiedContact.RegisterMethod",
								"type": "ForwardReference"
							}
						}
					}
				}
			}
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
