define("BaseLookupPage", ["terrasoft", "BusinessRuleModule", "ext-base", "sandbox", "BaseLookupPageResources"],
	function(Terrasoft, BusinessRuleModule, Ext, sandbox, resources) {
		return {
			entitySchemaName: "BaseLookup",
			attributes: {},
			details: /**SCHEMA_DETAILS*/{}, /**SCHEMA_DETAILS*/
			methods: {},
			diff: /**SCHEMA_DIFF*/[
				{
					"operation": "insert",
					"name": "GeneralInfoTabContainer",
					"parentName": "CardContentContainer",
					"propertyName": "items",
					"values": {
						itemType: Terrasoft.ViewItemType.CONTAINER,
						items: []
					}
				},
				{
					"operation": "insert",
					"parentName": "GeneralInfoTabContainer",
					"name": "GeneralInfoControlGroup",
					"propertyName": "items",
					"values": {
						itemType: Terrasoft.ViewItemType.CONTROL_GROUP,
						caption: "",
						items: [],
						controlConfig: {
							collapsed: false
						}
					}
				},
				{
					"operation": "insert",
					"parentName": "GeneralInfoControlGroup",
					"propertyName": "items",
					"name": "GeneralInfoBlock",
					"values": {
						itemType: Terrasoft.ViewItemType.GRID_LAYOUT,
						items: []
					}
				},
				{
					"operation": "insert",
					"parentName": "GeneralInfoBlock",
					"propertyName": "items",
					"name": "Name",
					"values": {
						"bindTo": "Name",
						"layout": {"column": 0, "row": 0, "colSpan": 12}
					}
				},
				{
					"operation": "insert",
					"parentName": "GeneralInfoBlock",
					"propertyName": "items",
					"name": "Description",
					"values": {
						"bindTo": "Description",
						"layout": {"column": 0, "row": 1, "colSpan": 12}
					}
				}
			]/**SCHEMA_DIFF*/
		};
	});
