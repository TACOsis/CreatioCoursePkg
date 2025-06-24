{
	"SyncOptions": {
		"SysSettingsImportConfig": [
			"DefaultMessageLanguage"
		],
		"ModelDataImportConfig": [
			{
				"Name": "SysImage",
				"QueryFilter": {
					"logicalOperation": 0,
					"filterType": 6,
					"rootSchemaName": "SysImage",
					"items": {
						"ExistContactPhoto": {
							"filterType": 5,
							"comparisonType": 15,
							"leftExpression": {
								"expressionType": 0,
								"columnPath": "[Contact:Photo].Id"
							},
							"subFilters": {
								"items": {},
								"logicalOperation": 0,
								"filterType": 6,
								"rootSchemaName": "Contact",
								"key": "069e89d5-96d6-4268-a4ae-93fd7f97f3e4"
							}
						}
					}
				},
				"RequiredDataFilter": {
					"filterType": 6,
					"rootSchemaName": "SysImage",
					"logicalOperation": 0,
					"items": {
						"CurrentContact": {
							"filterType": 1,
							"comparisonType": 3,
							"leftExpression": {
								"expressionType": 0,
								"columnPath": "[Contact:Photo].Id"
							},
							"rightExpression": {
								"expressionType": 1,
								"functionType": 1,
								"macrosType": 2
							}
						}
					}
				},
				"SyncColumns": [
					"Name",
					"HasRef",
					{
						"Name": "PreviewData",
						"UseRecordIdAsFileName": true,
						"ImportBinaryData": true
					}
				]
			},
			"FileType",
			{
				"Name": "Contact",
				"SyncColumns": [
					"Name",
					"JobTitle",
					"MobilePhone",
					"Owner",
					"Dear",
					"SalutationType",
					"Gender",
					"Account",
					"Type",
					"Email",
					"Language",
					"Job",
					"Address"
				]
			},
			{
				"Name": "ContactSalutationType",
				"SyncColumns": []
			},
			{
				"Name": "Gender",
				"SyncColumns": []
			},
			{
				"Name": "Account",
				"SyncColumns": [
					"Name",
					"Owner",
					"Ownership",
					"PrimaryContact",
					"Industry",
					"Phone",
					"Web",
					"AccountCategory",
					"EmployeesNumber",
					"AnnualRevenue",
					"AlternativeName"
				]
			},
			{
				"Name": "ContactType",
				"SyncColumns": []
			},
			{
				"Name": "SysLanguage",
				"SyncColumns": []
			},
			{
				"Name": "ContactCareer",
				"SyncColumns": [
					"Contact",
					"Account",
					"Department",
					"Job",
					"Primary",
					"StartDate"
				]
			},
			{
				"Name": "Department",
				"SyncColumns": []
			},
			{
				"Name": "Job",
				"SyncColumns": []
			},
			{
				"Name": "AccountOwnership",
				"SyncColumns": []
			},
			{
				"Name": "AccountIndustry",
				"SyncColumns": []
			},
			{
				"Name": "AccountCategory",
				"SyncColumns": []
			},
			{
				"Name": "AccountEmployeesNumber",
				"SyncColumns": []
			},
			{
				"Name": "AccountAnnualRevenue",
				"SyncColumns": []
			},
			{
				"Name": "AccountAddress",
				"SyncColumns": [
					"AddressType",
					"Country",
					"Region",
					"City",
					"Address",
					"Zip",
					"Account"
				]
			},
			{
				"Name": "AddressType",
				"SyncColumns": []
			},
			{
				"Name": "Country",
				"SyncColumns": []
			},
			{
				"Name": "Region",
				"SyncColumns": []
			},
			{
				"Name": "City",
				"SyncColumns": []
			}
		]
	},
	"Features": {
		"UseMobileCustomer360": {
			"Modules": {
				"Contact": {
					"screens": {
						"start": {
							"schemaName": "MobileFUIContactGridPageSettingsDefaultWorkplace"
						},
						"edit": {
							"schemaName": "MobileFUIContactRecordPageSettingsDefaultWorkplace"
						}
					},
					"Hidden": false
				},
				"Account": {
					"screens": {
						"start": {
							"schemaName": "MobileFUIAccountGridPageSettingsDefaultWorkplace"
						},
						"edit": {
							"schemaName": "MobileFUIAccountRecordPageSettingsDefaultWorkplace"
						}
					},
					"Hidden": false
				}
			},
			"Models": {
				"Account": {
					"RequiredModels": [
						"Account",
						"Contact",
						"AccountFile",
						"AccountAddress",
						"AddressType",
						"Country",
						"Region",
						"City",
						"AccountOwnership",
						"AccountIndustry",
						"AccountCategory",
						"AccountEmployeesNumber",
						"AccountAnnualRevenue",
						"Job",
						"SysLanguage",
						"AccountCommunication"
					],
					"PagesExtensions": [
						"MobileFUIAccountRecordPageSettingsDefaultWorkplace",
						"MobileFUIAccountGridPageSettingsDefaultWorkplace"
					]
				},
				"Contact": {
					"RequiredModels": [
						"Contact",
						"ContactFile",
						"ContactSalutationType",
						"Gender",
						"Account",
						"ContactType",
						"SysLanguage",
						"ContactCareer",
						"Department",
						"Job",
						"ContactAddress",
						"AddressType",
						"Country",
						"Region",
						"City",
						"ContactCommunication"
					],
					"PagesExtensions": [
						"MobileFUIContactRecordPageSettingsDefaultWorkplace",
						"MobileFUIContactGridPageSettingsDefaultWorkplace"
					]
				}
			},
			"SyncOptions": {
				"SysLookupsImportConfig": [
					"Communication",
					"ComTypebyCommunication"
				],
				"ModelDataImportConfig": [
					{
						"Name": "Communication",
						"SyncColumns": [
							"Name",
							"Code",
							{
								"Name": "ImageLink",
								"ImportBinaryData": true
							}
						]
					},
					{
						"Name": "ComTypebyCommunication",
						"SyncColumns": [
							"Communication",
							"CommunicationType"
						]
					},
					{
						"Name": "CommunicationType",
						"SyncColumns": [
							"Name",
							"UseforContacts",
							"UseforAccounts",
							"DisplayFormat",
							{
								"Name": "ImageLink",
								"ImportBinaryData": true
							}
						]
					}
				]
			}
		}
	},
	"Modules": {},
	"Models": {
		"Call": {
			"RequiredModels": [
				"Call",
				"Contact"
			]
		},
		"SysFile": {
			"RequiredModels": [
				"SysFile"
			]
		},
		"Activity": {
			"RequiredModels": [
				"Activity",
				"ActivityType",
				"Contact"
			]
		}
	},
	"ModuleGroups": {
		"main": {}
	},
	"UseUTC": true
}