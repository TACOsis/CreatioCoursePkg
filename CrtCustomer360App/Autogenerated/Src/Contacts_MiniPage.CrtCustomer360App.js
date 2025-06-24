define("Contacts_MiniPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					]
				}
			},
			{
				"operation": "insert",
				"name": "ContactCompactProfile",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ContactCompactProfile",
					"readonly": false,
					"referenceColumn": "$undefined_e1cfb0a5-137e-a7ee-189e-772789862d7c"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Type",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_sa5uaxw",
					"labelPosition": "above",
					"control": "$LookupAttribute_sa5uaxw",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"placeholder": "#ResourceString(Type_placeholder)#",
					"visible": true,
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Account",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_g8rwi2b",
					"labelPosition": "above",
					"control": "$LookupAttribute_g8rwi2b",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"placeholder": "#ResourceString(Account_placeholder)#"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_3b5w93f",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_3b5w93f_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Account",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "JobTitle",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.StringAttribute_7dk4fnk",
					"labelPosition": "above",
					"control": "$StringAttribute_7dk4fnk",
					"placeholder": "#ResourceString(JobTitle_placeholder)#"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "MobilePhone",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.PhoneInput",
					"label": "$Resources.Strings.StringAttribute_2sfe3yg",
					"labelPosition": "above",
					"control": "$StringAttribute_2sfe3yg",
					"visible": true,
					"placeholder": "#ResourceString(MobilePhone_placeholder)#",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Email",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.EmailInput",
					"label": "$Resources.Strings.StringAttribute_fep6vyv",
					"labelPosition": "above",
					"control": "$StringAttribute_fep6vyv",
					"visible": true,
					"placeholder": "#ResourceString(Email_placeholder)#",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 5
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"LookupAttribute_sa5uaxw": {
					"modelConfig": {
						"path": "ContactDS.Type"
					}
				},
				"LookupAttribute_g8rwi2b": {
					"modelConfig": {
						"path": "ContactDS.Account"
					}
				},
				"StringAttribute_7dk4fnk": {
					"modelConfig": {
						"path": "ContactDS.JobTitle"
					}
				},
				"StringAttribute_2sfe3yg": {
					"modelConfig": {
						"path": "ContactDS.MobilePhone"
					}
				},
				"StringAttribute_fep6vyv": {
					"modelConfig": {
						"path": "ContactDS.Email"
					}
				},
				"undefined_e1cfb0a5-137e-a7ee-189e-772789862d7c": {
					"modelConfig": {
						"path": "ContactDS.Id"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"ContactDS": {
					"type": "crt.EntityDataSource",
					"scope": "page",
					"config": {
						"entitySchemaName": "Contact"
					}
				}
			},
			"primaryDataSourceName": "ContactDS"
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});