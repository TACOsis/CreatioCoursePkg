{
	"Features": {
		"UseMobileFreedomUICalendar": {
			"Modules": {
				"Calendar": {
					"Group": "main",
					"Model": "Calendar",
					"Title": "CalendarSectionTitle",
					"Position": 2,
					"screens": {
						"start": {
							"schemaName": "MobileCalendar_ListPage"
						},
						"edit": {
							"schemaName": "MobileFUIActivityRecordPageSettingsDefaultWorkplace",
							"displayType": "sheet"
						}
					},
					"sysModuleId": "c87bba65-57c0-4728-b672-f464238a22d7",
					"isStartPage": false,
					"Hidden": false
				},
				"Activity": {
					"screens": {
						"edit": {
							"schemaName": "MobileFUIActivityRecordPageSettingsDefaultWorkplace",
							"displayType": "sheet"
						}
					},
					"Hidden": true
				}
			},
			"Models": {
				"Activity": {
					"PagesExtensions": [
						"MobileCalendar_ListPage",
						"MobileFUIActivityRecordPageSettingsDefaultWorkplace"
					]
				}
			}
		},
		"Mobile.HideDefaultModules": {
			"Modules": {
				"Calendar": {
					"Hidden": true
				}
			}
		}
	},
	"SyncOptions": {
		"SyncRules": {
			"CalendarActivityModule": {
				"importOptions": {
					"entityName": "Activity",
					"adapterType": "CalendarActivitySyncAdapter",
					"dependencies": [
						{
							"importOptions": {
								"entityName": "ActivityParticipant",
								"adapterType": "Entity"
							},
							"masterColumn": "Id",
							"detailColumn": "Activity"
						}
					]
				}
			},
			"ActivityModule": {
				"importOptions": {
					"columns": [
						"Location"
					]
				}
			}
		},
		"ModelDataImportConfig": [
			{
				"Name": "Activity",
				"SyncColumns": [
					"Location"
				]
			}
		]
	}
}