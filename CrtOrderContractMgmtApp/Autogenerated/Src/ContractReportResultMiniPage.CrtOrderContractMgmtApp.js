define("ContractReportResultMiniPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "PageTitle"
			},
			{
				"operation": "remove",
				"name": "CancelButton"
			},
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"caption": "#ResourceString(SaveButton_caption)#"
				}
			},
			{
				"operation": "insert",
				"name": "Title",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Title_caption)#)#",
					"labelType": "headline-2",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "TitleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AttachmentList",
				"values": {
					"type": "crt.FileList",
					"masterRecordColumnValue": "$Id",
					"recordColumnName": "Contract",
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"items": "$FileList_7q1o9ry",
					"primaryColumnName": "FileList_7q1o9ryDS_Id",
					"columns": [
						{
							"id": "6c894b1c-8721-66ce-7cda-46c8b0dc8b89",
							"code": "FileList_7q1o9ryDS_Name",
							"caption": "#ResourceString(FileList_7q1o9ryDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "e2a28a8e-856f-83db-2681-51a135f51fe5",
							"code": "FileList_7q1o9ryDS_CreatedOn",
							"caption": "#ResourceString(FileList_7q1o9ryDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "5a8cece6-8f0c-4653-2729-b0bc7fefd7f2",
							"code": "FileList_7q1o9ryDS_CreatedBy",
							"caption": "#ResourceString(FileList_7q1o9ryDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "6249f9b5-91a4-e1b9-6003-ae4b2d7eb92b",
							"code": "FileList_7q1o9ryDS_Size",
							"caption": "#ResourceString(FileList_7q1o9ryDS_Size)#",
							"dataValueType": 4
						}
					],
					"visible": true,
					"tag": "Contract",
					"viewType": "gallery",
					"tileSize": "small"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"FileList_7q1o9ry": {
						"isCollection": true,
						"modelConfig": {
							"path": "FileList_7q1o9ryDS",
							"sortingConfig": {
								"default": [
									{
										"columnName": "CreatedOn",
										"direction": "desc"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"FileList_7q1o9ryDS_Name": {
									"modelConfig": {
										"path": "FileList_7q1o9ryDS.Name"
									}
								},
								"FileList_7q1o9ryDS_CreatedOn": {
									"modelConfig": {
										"path": "FileList_7q1o9ryDS.CreatedOn"
									}
								},
								"FileList_7q1o9ryDS_CreatedBy": {
									"modelConfig": {
										"path": "FileList_7q1o9ryDS.CreatedBy"
									}
								},
								"FileList_7q1o9ryDS_Size": {
									"modelConfig": {
										"path": "FileList_7q1o9ryDS.Size"
									}
								},
								"FileList_7q1o9ryDS_Id": {
									"modelConfig": {
										"path": "FileList_7q1o9ryDS.Id"
									}
								}
							}
						}
					},
					"Id": {
						"modelConfig": {
							"path": "ContractDS.Id"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"ContractDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "Contract"
							}
						},
						"FileList_7q1o9ryDS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "ContractFile",
								"attributes": {
									"Name": {
										"path": "Name"
									},
									"CreatedOn": {
										"path": "CreatedOn"
									},
									"CreatedBy": {
										"path": "CreatedBy"
									},
									"Size": {
										"path": "Size"
									}
								}
							}
						},
						"AttachmentListDS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "SysFile"
							}
						}
					},
					"primaryDataSourceName": "ContractDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});