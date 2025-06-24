[
	{
		"operation": "insert",
		"name": "settings",
		"values": {
			"entitySchemaName": "Contact",
			"settingsType": "RecordPage",
			"localizableStrings": {},
			"columnSets": [],
			"operation": "insert",
			"details": [],
			"viewConfigDiff": "[{\"operation\":\"merge\",\"name\":\"ViewConfig\",\"values\":{\"header\":{\"name\":\"Contact_Header\",\"type\":\"ContactCompactProfile\"}}},{\"operation\":\"merge\",\"name\":\"Contact_RelatedTab\",\"values\":{\"position\":4}},{\"operation\":\"insert\",\"name\":\"FileDetailV2EmbeddedDetail_Tab\",\"parentName\":\"Contact_Tabs\",\"propertyName\":\"items\",\"values\":{\"visible\":\"#Not($_isNew)\",\"position\":3,\"text\":\"#ResourceString(TabAttachments_caption)#\",\"body\":{}}},{\"operation\":\"insert\",\"name\":\"FileDetailV2EmbeddedDetail_Tab_Body\",\"parentName\":\"FileDetailV2EmbeddedDetail_Tab\",\"propertyName\":\"body\",\"values\":{\"type\":\"Attachments\",\"items\":\"FileDetailV2EmbeddedDetail\"}},{\"operation\":\"insert\",\"name\":\"ContactFeed_Tab\",\"parentName\":\"Contact_Tabs\",\"propertyName\":\"items\",\"values\":{\"visible\":\"#Not($_isNew)\",\"position\":2,\"text\":\"#ResourceString(TabFeed_caption)#\",\"body\":{}}},{\"operation\":\"insert\",\"name\":\"ContactFeed_Tab_Body\",\"parentName\":\"ContactFeed_Tab\",\"propertyName\":\"body\",\"values\":{\"type\":\"Messaging\",\"items\":\"ContactFeed\"}},{\"operation\":\"remove\",\"name\":\"ContactAddressDetailV2EmbeddedDetail_ItemLayout_Address\"},{\"operation\":\"remove\",\"name\":\"ContactAddressDetailV2EmbeddedDetail_ItemLayout_AddressType\"},{\"operation\":\"remove\",\"name\":\"ContactAddressDetailV2EmbeddedDetail_ItemLayout_City\"},{\"operation\":\"remove\",\"name\":\"ContactAddressDetailV2EmbeddedDetail_ItemLayout_Region\"},{\"operation\":\"remove\",\"name\":\"ContactAddressDetailV2EmbeddedDetail_ItemLayout_Country\"},{\"operation\":\"remove\",\"name\":\"ContactAddressDetailV2EmbeddedDetail_ItemLayout_Zip\"},{\"operation\":\"merge\",\"name\":\"ContactAddressDetailV2EmbeddedDetail_ItemLayout\",\"values\":{\"type\":\"AddressPreview\"}},{\"operation\":\"merge\",\"name\":\"ContactAddressDetailV2EmbeddedDetail\",\"values\":{\"useSeparator\":false}},{\"operation\":\"move\",\"name\":\"ContactCommunicationDetailEmbeddedDetail\",\"parentName\":\"Contact_PrimaryTab_Body_profileColumnSet\",\"propertyName\":\"items\",\"values\":{\"type\":\"crt.CommunicationOptions\",\"items\":\"ContactCommunicationDetailEmbeddedDetail\"}},{\"operation\":\"insert\",\"name\":\"Contact_Timeline_Tab\",\"parentName\":\"Contact_Tabs\",\"propertyName\":\"items\",\"values\":{\"visible\":\"#Not($_isNew)\",\"position\":1,\"text\":\"#ResourceString(ContactTimelineTab_caption)#\",\"body\":{}}},{\"operation\":\"insert\",\"name\":\"Contact_Timeline_Tab_Body\",\"parentName\":\"Contact_Timeline_Tab\",\"propertyName\":\"body\",\"values\":{\"type\":\"crt.Timeline\",\"items\":[{\"linkedColumn\":\"Contact\",\"sortedByColumn\":\"SendDate\",\"data\":{\"schemaName\":\"Activity\",\"schemaType\":\"Email\",\"filter\":{\"columnName\":\"Type\",\"columnValue\":\"e2831dec-cfc0-df11-b00f-001d60e938c6\"}}},{\"linkedColumn\":\"Contact\",\"sortedByColumn\":\"StartDate\",\"columnsFlexConfigJson\":{\"phone\":[1],\"tabletPortrait\":[1],\"tabletLandscape\":[1]},\"data\":{\"schemaName\":\"Activity\",\"schemaType\":\"Entity\",\"filter\":{\"columnName\":\"Type\",\"columnValue\":\"fbe0acdc-cfc0-df11-b00f-001d60e938c6\"},\"columns\":[{\"columnName\":\"Status\",\"columnLayout\":{\"column\":1,\"row\":1}},{\"columnName\":\"DetailedResult\",\"columnLayout\":{\"column\":1,\"row\":2}}]}},{\"linkedColumn\":\"Contact\",\"sortedByColumn\":\"StartDate\",\"columnsFlexConfigJson\":{\"phone\":[1,1],\"tabletPortrait\":[1,1,1],\"tabletLandscape\":[1,1,1]},\"data\":{\"schemaName\":\"Call\",\"schemaType\":\"Call\",\"columns\":[{\"columnName\":\"StartDate\"},{\"columnName\":\"EndDate\"},{\"columnName\":\"Duration\"}]}},{\"sortedByColumn\":\"CreatedOn\",\"data\":{\"schemaType\":\"SysFile\"}},{\"sortedByColumn\":\"CreatedOn\",\"data\":{\"schemaType\":\"Feed\"}}],\"masterSchemaId\":\"$Id\"}}]",
			"viewModelConfigDiff": "[{\"operation\":\"merge\",\"name\":\"Attributes\",\"values\":{\"Name\":{\"modelConfig\":{\"path\":\"PDS.Name\"},\"name\":\"Attribute_Name\"}}},{\"operation\":\"merge\",\"name\":\"Attributes\",\"values\":{\"City.TimeZone\":{\"modelConfig\":{\"path\":\"PDS.City.TimeZone\"},\"name\":\"Attribute_City.TimeZone\"}}},{\"operation\":\"merge\",\"name\":\"Attributes\",\"values\":{\"Country\":{\"modelConfig\":{\"path\":\"PDS.Country\"},\"name\":\"Attribute_Country\"}}},{\"operation\":\"merge\",\"name\":\"Attributes\",\"values\":{\"BirthDate\":{\"modelConfig\":{\"path\":\"PDS.BirthDate\"},\"name\":\"Attribute_BirthDate\"}}},{\"operation\":\"merge\",\"name\":\"Attributes\",\"values\":{\"FileDetailV2EmbeddedDetail\":{\"modelConfig\":{\"path\":\"FileDetailV2EmbeddedDetailDS\"},\"name\":\"Attribute_FileDetailV2EmbeddedDetail\"}}},{\"operation\":\"merge\",\"name\":\"Attributes\",\"values\":{\"ContactFeed\":{\"modelConfig\":{\"path\":\"ContactFeedDS\"},\"name\":\"Attribute_ContactFeed\"}}}]",
			"modelConfigDiff": "[{\"operation\":\"merge\",\"name\":\"Dependencies\",\"values\":{\"FileDetailV2EmbeddedDetailDS\":[],\"ContactFeedDS\":[]}},{\"operation\":\"insert\",\"name\":\"FileDetailV2EmbeddedDetailDS_Dependencies\",\"values\":{\"attributePath\":\"Contact\",\"relationPath\":\"PDS.Id\"},\"parentName\":\"Dependencies\",\"propertyName\":\"FileDetailV2EmbeddedDetailDS\"},{\"operation\":\"insert\",\"name\":\"ContactFeedDS_Dependencies\",\"values\":{\"attributePath\":\"Contact\",\"relationPath\":\"PDS.Id\"},\"parentName\":\"Dependencies\",\"propertyName\":\"ContactFeedDS\"},{\"operation\":\"merge\",\"name\":\"DataSources\",\"values\":{\"FileDetailV2EmbeddedDetailDS\":{\"config\":{\"entitySchemaName\":\"ContactFile\"},\"name\":\"FileDetailV2EmbeddedDetailDS\"},\"ContactFeedDS\":{\"config\":{\"entitySchemaName\":\"Contact\"},\"name\":\"ContactFeedDS\"}}}]"
		}
	},
	{
		"operation": "insert",
		"name": "primaryColumnSet",
		"values": {
			"items": [],
			"rows": 1,
			"entitySchemaName": "Contact",
			"caption": "primaryColumnSetContact_caption",
			"operation": "insert",
			"position": 0
		},
		"parentName": "settings",
		"propertyName": "columnSets",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "profileColumnSet",
		"values": {
			"items": [],
			"rows": 1,
			"entitySchemaName": "Contact",
			"caption": "profileColumnSetContact_caption",
			"position": 1,
			"operation": "insert"
		},
		"parentName": "settings",
		"propertyName": "columnSets",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "ae49deae-4969-4aa8-be3f-488cb1f5a118",
		"values": {
			"row": 0,
			"content": "Account",
			"columnName": "Account",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "profileColumnSet",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "614857c5-ac09-464e-a95e-491bcae473dc",
		"values": {
			"row": 1,
			"content": "Full job title",
			"columnName": "JobTitle",
			"dataValueType": 1,
			"operation": "insert"
		},
		"parentName": "profileColumnSet",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "ContactCommunicationDetailEmbeddedDetail",
		"values": {
			"items": [],
			"rows": 1,
			"isDetail": true,
			"filter": {
				"detailColumn": "Contact",
				"masterColumn": "Id"
			},
			"detailSchemaName": "ContactCommunicationDetail",
			"entitySchemaName": "ContactCommunication",
			"caption": "ContactCommunicationDetailEmbeddedDetailContact_caption",
			"position": 2,
			"operation": "insert"
		},
		"parentName": "settings",
		"propertyName": "columnSets",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "infoColumnSet",
		"values": {
			"items": [],
			"rows": 1,
			"entitySchemaName": "Contact",
			"caption": "infoColumnSetContact_caption",
			"position": 3,
			"operation": "insert"
		},
		"parentName": "settings",
		"propertyName": "columnSets",
		"index": 3
	},
	{
		"operation": "insert",
		"name": "7d399357-4ec4-4620-add1-3bc0ed64b5d1",
		"values": {
			"row": 0,
			"content": "Type",
			"columnName": "Type",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "infoColumnSet",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "ab4086f1-4187-4a47-a544-3755e4c264b0",
		"values": {
			"row": 1,
			"content": "Owner",
			"columnName": "Owner",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "infoColumnSet",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "da2f6e19-8b72-4412-9d08-0ce0da5d8d51",
		"values": {
			"row": 2,
			"content": "Recipient's name",
			"columnName": "Dear",
			"dataValueType": 1,
			"operation": "insert"
		},
		"parentName": "infoColumnSet",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "0a9cc091-caaf-4661-8b2c-104a5243a666",
		"values": {
			"row": 3,
			"content": "Gender",
			"columnName": "Gender",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "infoColumnSet",
		"propertyName": "items",
		"index": 3
	},
	{
		"operation": "insert",
		"name": "7269bdc7-ffc1-43ee-ac28-440bd5c914a6",
		"values": {
			"row": 4,
			"content": "Title",
			"columnName": "SalutationType",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "infoColumnSet",
		"propertyName": "items",
		"index": 4
	},
	{
		"operation": "insert",
		"name": "e3e5dead-8eda-430a-a899-0623b3579e85",
		"values": {
			"row": 5,
			"content": "Preferred language",
			"columnName": "Language",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "infoColumnSet",
		"propertyName": "items",
		"index": 5
	},
	{
		"operation": "insert",
		"name": "ContactAddressDetailV2EmbeddedDetail",
		"values": {
			"items": [],
			"rows": 1,
			"isDetail": true,
			"filter": {
				"detailColumn": "Contact",
				"masterColumn": "Id"
			},
			"detailSchemaName": "ContactAddressDetailV2",
			"entitySchemaName": "ContactAddress",
			"caption": "ContactAddressDetailV2EmbeddedDetailContact_caption",
			"operation": "insert",
			"position": 4
		},
		"parentName": "settings",
		"propertyName": "columnSets",
		"index": 4
	},
	{
		"operation": "insert",
		"name": "43f1ac43-ddd2-4389-8ccf-782a89bf47c9",
		"values": {
			"row": 0,
			"content": "Address type",
			"columnName": "AddressType",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "ContactAddressDetailV2EmbeddedDetail",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "df7d53ec-885a-43b7-99ec-14f0e9f36d78",
		"values": {
			"row": 1,
			"content": "Address",
			"columnName": "Address",
			"dataValueType": 1,
			"operation": "insert"
		},
		"parentName": "ContactAddressDetailV2EmbeddedDetail",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "7af60027-7759-456d-848f-de3a7bbd727a",
		"values": {
			"row": 2,
			"content": "City",
			"columnName": "City",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "ContactAddressDetailV2EmbeddedDetail",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "0bc9e17d-d39b-4082-886c-0693181175a4",
		"values": {
			"row": 3,
			"content": "State/province",
			"columnName": "Region",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "ContactAddressDetailV2EmbeddedDetail",
		"propertyName": "items",
		"index": 3
	},
	{
		"operation": "insert",
		"name": "7fd1d967-c76d-4523-87b8-ea32b6f6da3c",
		"values": {
			"row": 4,
			"content": "Country",
			"columnName": "Country",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "ContactAddressDetailV2EmbeddedDetail",
		"propertyName": "items",
		"index": 4
	},
	{
		"operation": "insert",
		"name": "322bdac5-8965-4571-8ef1-180e1da25634",
		"values": {
			"row": 5,
			"content": "ZIP/postal code",
			"columnName": "Zip",
			"dataValueType": 1,
			"operation": "insert"
		},
		"parentName": "ContactAddressDetailV2EmbeddedDetail",
		"propertyName": "items",
		"index": 5
	},
	{
		"operation": "insert",
		"name": "ContactCareerDetailV2EmbeddedDetail",
		"values": {
			"items": [],
			"rows": 1,
			"isDetail": true,
			"filter": {
				"detailColumn": "Contact",
				"masterColumn": "Id"
			},
			"detailSchemaName": "ContactCareerDetailV2",
			"entitySchemaName": "ContactCareer",
			"caption": "ContactCareerDetailV2EmbeddedDetailContact_caption",
			"position": 5,
			"operation": "insert"
		},
		"parentName": "settings",
		"propertyName": "columnSets",
		"index": 5
	},
	{
		"operation": "insert",
		"name": "69408512-b350-418f-b20b-f179111f7a43",
		"values": {
			"row": 0,
			"content": "Account",
			"columnName": "Account",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "ContactCareerDetailV2EmbeddedDetail",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "69615518-7147-4d17-b151-8443617f9407",
		"values": {
			"row": 1,
			"content": "Job title",
			"columnName": "Job",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "ContactCareerDetailV2EmbeddedDetail",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "df355c94-5f74-479c-9556-03d996ed794b",
		"values": {
			"row": 2,
			"content": "Department",
			"columnName": "Department",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "ContactCareerDetailV2EmbeddedDetail",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "0405ec0b-491c-4c84-a279-35e0346f7a1b",
		"values": {
			"row": 3,
			"content": "Primary",
			"columnName": "Primary",
			"dataValueType": 12,
			"operation": "insert"
		},
		"parentName": "ContactCareerDetailV2EmbeddedDetail",
		"propertyName": "items",
		"index": 3
	},
	{
		"operation": "insert",
		"name": "f205e9a5-7b91-4f8e-bfa1-8322a3a2571b",
		"values": {
			"row": 4,
			"content": "Start",
			"columnName": "StartDate",
			"dataValueType": 8,
			"operation": "insert"
		},
		"parentName": "ContactCareerDetailV2EmbeddedDetail",
		"propertyName": "items",
		"index": 4
	}
]