define("QuotationReportResult_MiniPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
					"recordColumnName": "Opportunity",
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"items": "$FileList_3y6zupv",
					"primaryColumnName": "FileList_3y6zupvDS_Id",
					"columns": [
						{
							"id": "0fd134cd-fde4-131d-d31f-4b0bdcb5867d",
							"code": "FileList_3y6zupvDS_Name",
							"caption": "#ResourceString(FileList_3y6zupvDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "52313750-0b22-700a-3bf1-6b812d812e5b",
							"code": "FileList_3y6zupvDS_CreatedOn",
							"caption": "#ResourceString(FileList_3y6zupvDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "65d0315e-a80e-a084-5e7a-a2ab12405c09",
							"code": "FileList_3y6zupvDS_CreatedBy",
							"caption": "#ResourceString(FileList_3y6zupvDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "6d5a9507-e4c8-28cf-6ded-1267989fdf97",
							"code": "FileList_3y6zupvDS_Size",
							"caption": "#ResourceString(FileList_3y6zupvDS_Size)#",
							"dataValueType": 4
						}
					],
					"visible": true,
					"tag": "Quotation",
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
					"FileList_3y6zupv": {
						"isCollection": true,
						"modelConfig": {
							"path": "FileList_3y6zupvDS",
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
								"FileList_3y6zupvDS_Name": {
									"modelConfig": {
										"path": "FileList_3y6zupvDS.Name"
									}
								},
								"FileList_3y6zupvDS_CreatedOn": {
									"modelConfig": {
										"path": "FileList_3y6zupvDS.CreatedOn"
									}
								},
								"FileList_3y6zupvDS_CreatedBy": {
									"modelConfig": {
										"path": "FileList_3y6zupvDS.CreatedBy"
									}
								},
								"FileList_3y6zupvDS_Size": {
									"modelConfig": {
										"path": "FileList_3y6zupvDS.Size"
									}
								},
								"FileList_3y6zupvDS_Id": {
									"modelConfig": {
										"path": "FileList_3y6zupvDS.Id"
									}
								}
							}
						}
					},
					"Id": {
						"modelConfig": {
							"path": "OpportunityDS.Id"
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
						"OpportunityDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "Opportunity"
							}
						},
						"FileList_3y6zupvDS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "OpportunityFile",
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
					"primaryDataSourceName": "OpportunityDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});