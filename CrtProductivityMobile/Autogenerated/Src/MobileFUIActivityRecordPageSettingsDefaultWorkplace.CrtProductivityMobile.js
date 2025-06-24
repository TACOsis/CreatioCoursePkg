[
	{
		"operation": "insert",
		"name": "settings",
		"values": {
			"entitySchemaName": "Activity",
			"settingsType": "RecordPage",
			"localizableStrings": {
				"ActivityParticipantDetailV2EmbeddedDetailActivity_caption": "Activity participants"
			},
			"columnSets": [],
			"operation": "insert",
			"details": [],
			"viewConfigDiff": "[{\"operation\":\"insert\",\"name\":\"Activity_PrimaryTab_Body_primaryColumnSet_categoryColumnSet\",\"parentName\":\"Activity_PrimaryTab_Body_primaryColumnSet\",\"propertyName\":\"items\",\"values\":{\"type\":\"crt.AdaptiveLayout\",\"scrollable\":false,\"autoHorizontalPadding\":false,\"columns\":{\"phone\":[1,1],\"tabletPortrait\":[1,1],\"tabletLandscape\":[1,1]},\"items\":[]}},{\"operation\":\"move\",\"name\":\"Activity_PrimaryTab_Body_primaryColumnSet_ActivityCategory\",\"parentName\":\"Activity_PrimaryTab_Body_primaryColumnSet_categoryColumnSet\",\"propertyName\":\"items\",\"index\":0},{\"operation\":\"move\",\"name\":\"Activity_PrimaryTab_Body_primaryColumnSet_Status\",\"parentName\":\"Activity_PrimaryTab_Body_primaryColumnSet_categoryColumnSet\",\"propertyName\":\"items\",\"index\":1},{\"operation\":\"move\",\"name\":\"Activity_PrimaryTab_Body_primaryColumnSet_Owner\",\"parentName\":\"Activity_PrimaryTab_Body_primaryColumnSet\",\"propertyName\":\"items\",\"index\":6},{\"operation\":\"merge\",\"name\":\"Activity_PrimaryTab_Body_primaryColumnSet_StartDate\",\"values\":{\"hint\":\"#ResourceString(StartDate_caption)#\",\"label\":{\"visible\":false}}},{\"operation\":\"merge\",\"name\":\"Activity_PrimaryTab_Body_primaryColumnSet_DueDate\",\"values\":{\"hint\":\"#ResourceString(DueDate_caption)#\",\"label\":{\"visible\":false}}},{\"operation\":\"merge\",\"name\":\"Activity_PrimaryTab_Body_primaryColumnSet_Location\",\"values\":{\"maxLines\":2}},{\"operation\":\"merge\",\"name\":\"Activity_PrimaryTab_Body\",\"values\":{\"autoHorizontalPadding\":false,\"columns\":{\"phone\":[1],\"tabletPortrait\":[1],\"tabletLandscape\":[1]}}},{\"operation\":\"merge\",\"name\":\"ActivityParticipantDetailV2EmbeddedDetail_ItemLayout\",\"values\":{\"icon\":\"$Participant.Photo\",\"title\":\"$Participant\",\"showEmptyValues\": false,\"iconSize\":\"small\"}},{\"operation\":\"merge\",\"name\":\"ActivityParticipantDetailV2EmbeddedDetail_ItemLayout_Participant.Email\",\"values\":{\"label\":{\"visible\":false}}},{\"operation\":\"merge\",\"name\":\"ActivityParticipantDetailV2EmbeddedDetail\",\"values\":{\"createItem\":{\"request\": \"crt.CreateActivityParticipantDetailRequest\",\"params\":{\"attributeName\":\"ActivityParticipantDetailV2EmbeddedDetail\",\"pickerTitle\":\"#ResourceString(ActivityParticipantDetailV2EmbeddedDetailActivity_caption)#\"}},\"useSeparator\":false,\"itemClick\":{\"request\":\"crt.UpdateRecordRequest\",\"params\":{\"entityName\":\"Contact\",\"recordId\":\"$Participant.Id\"}},\"canEdit\":false}}]",
			"modelConfigDiff": "[{\"operation\":\"merge\",\"name\":\"ActivityParticipantDetailV2EmbeddedDetailDS_Attributes\",\"values\":{\"Participant\":{}}},{\"operation\":\"insert\",\"name\":\"ActivityParticipantDetailV2EmbeddedDetailDS_Attribute_Participant\",\"parentName\":\"ActivityParticipantDetailV2EmbeddedDetailDS_Attributes\",\"propertyName\":\"Participant\",\"values\":{\"path\":\"Participant\"}}]"
		}
	},
	{
		"operation": "insert",
		"name": "primaryColumnSet",
		"values": {
			"items": [],
			"rows": 1,
			"entitySchemaName": "Activity",
			"caption": "primaryColumnSetActivity_caption",
			"operation": "insert",
			"position": 0
		},
		"parentName": "settings",
		"propertyName": "columnSets",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "d9cebe94-2f2a-472c-996d-fa3469a883af",
		"values": {
			"row": 0,
			"content": "Subject",
			"columnName": "Title",
			"dataValueType": 1,
			"operation": "insert"
		},
		"parentName": "primaryColumnSet",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "ba0c046a-d37e-4b57-b889-b8e4bad8d5bf",
		"values": {
			"row": 1,
			"content": "Location",
			"columnName": "Location",
			"dataValueType": 1,
			"operation": "insert"
		},
		"parentName": "primaryColumnSet",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "8f318cf0-92cd-4a0c-a82e-4416b345fa37",
		"values": {
			"row": 2,
			"content": "Start",
			"columnName": "StartDate",
			"dataValueType": 7,
			"operation": "insert"
		},
		"parentName": "primaryColumnSet",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "9f8f0ea5-22e1-47e6-8b90-ee292358a180",
		"values": {
			"row": 3,
			"content": "Due",
			"columnName": "DueDate",
			"dataValueType": 7,
			"operation": "insert"
		},
		"parentName": "primaryColumnSet",
		"propertyName": "items",
		"index": 3
	},
	{
		"operation": "insert",
		"name": "0360b806-484f-494b-b851-e9a7e98e53d8",
		"values": {
			"row": 4,
			"content": "Show in calendar",
			"columnName": "ShowInScheduler",
			"dataValueType": 12,
			"operation": "insert"
		},
		"parentName": "primaryColumnSet",
		"propertyName": "items",
		"index": 4
	},
	{
		"operation": "insert",
		"name": "df0cd79e-e298-4564-84db-4e985e800873",
		"values": {
			"row": 5,
			"content": "Category",
			"columnName": "ActivityCategory",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "primaryColumnSet",
		"propertyName": "items",
		"index": 5
	},
	{
		"operation": "insert",
		"name": "8f0d232f-8136-4f7c-bbdb-caeed2687317",
		"values": {
			"row": 6,
			"content": "Status",
			"columnName": "Status",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "primaryColumnSet",
		"propertyName": "items",
		"index": 6
	},
	{
		"operation": "insert",
		"name": "d2bfdee9-aa05-4805-888a-7a7cdc32b028",
		"values": {
			"row": 7,
			"content": "Owner",
			"columnName": "Owner",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "primaryColumnSet",
		"propertyName": "items",
		"index": 7
	},
	{
		"operation": "insert",
		"name": "ActivityParticipantDetailV2EmbeddedDetail",
		"values": {
			"items": [],
			"rows": 1,
			"isDetail": true,
			"filter": {
				"detailColumn": "Activity",
				"masterColumn": "Id"
			},
			"detailSchemaName": "ActivityParticipantDetailV2",
			"entitySchemaName": "ActivityParticipant",
			"caption": "ActivityParticipantDetailV2EmbeddedDetailActivity_caption",
			"position": 1,
			"operation": "insert"
		},
		"parentName": "settings",
		"propertyName": "columnSets",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "93f6f39b-b53b-4ff2-a019-b041ee2f0c17",
		"values": {
			"row": 0,
			"content": "Participant.Email",
			"columnName": "Participant.Email",
			"dataValueType": 1,
			"operation": "insert"
		},
		"parentName": "ActivityParticipantDetailV2EmbeddedDetail",
		"propertyName": "items",
		"index": 0
	}
]