define("InvoiceReportResult_MiniPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "PageTitle"
			},
			{
				"operation": "merge",
				"name": "ContinueInOtherPageButton",
				"values": {
					"color": "default"
				}
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
					"recordColumnName": "Invoice",
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"items": "$FileList_vlozu5m",
					"primaryColumnName": "FileList_vlozu5mDS_Id",
					"columns": [
						{
							"id": "29e566bc-c044-0f1a-266a-6000c1e88738",
							"code": "FileList_vlozu5mDS_Name",
							"caption": "#ResourceString(FileList_vlozu5mDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "de0b301a-a9eb-0ccb-7a9f-5d2a29e04366",
							"code": "FileList_vlozu5mDS_CreatedOn",
							"caption": "#ResourceString(FileList_vlozu5mDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "00a671de-1654-1fc2-7340-f73c6cae3556",
							"code": "FileList_vlozu5mDS_CreatedBy",
							"caption": "#ResourceString(FileList_vlozu5mDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "48275f24-e314-e6ec-1bed-e1fd32b18619",
							"code": "FileList_vlozu5mDS_Size",
							"caption": "#ResourceString(FileList_vlozu5mDS_Size)#",
							"dataValueType": 4
						}
					],
					"visible": true,
					"tag": "Invoice",
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
					"FileList_vlozu5m": {
						"isCollection": true,
						"modelConfig": {
							"path": "FileList_vlozu5mDS",
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
								"FileList_vlozu5mDS_Name": {
									"modelConfig": {
										"path": "FileList_vlozu5mDS.Name"
									}
								},
								"FileList_vlozu5mDS_CreatedOn": {
									"modelConfig": {
										"path": "FileList_vlozu5mDS.CreatedOn"
									}
								},
								"FileList_vlozu5mDS_CreatedBy": {
									"modelConfig": {
										"path": "FileList_vlozu5mDS.CreatedBy"
									}
								},
								"FileList_vlozu5mDS_Size": {
									"modelConfig": {
										"path": "FileList_vlozu5mDS.Size"
									}
								},
								"FileList_vlozu5mDS_Id": {
									"modelConfig": {
										"path": "FileList_vlozu5mDS.Id"
									}
								}
							}
						}
					},
					"Id": {
						"modelConfig": {
							"path": "InvoiceDS.Id"
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
						"InvoiceDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "Invoice"
							}
						},
						"FileList_vlozu5mDS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "InvoiceFile",
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
					"primaryDataSourceName": "InvoiceDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});