define("SetupFinesseParametersPageV2", ["terrasoft"],
function(Terrasoft) {
	return {
		attributes: {

			/**
			 * Finesse server address.
			 * @type {String}
			 */
			"Domain": {
				"isRequired": false
			}
		},
		methods: {

			/**
			 * @inheritdoc Terrasoft.SetupFinesseParametersPage#getConnectionParamsConfig
			 * @overridden
			 */
			getConnectionParamsConfig: function() {
				var baseConnectionParams = this.callParent();
				delete baseConnectionParams.Domain;
				return baseConnectionParams;
			}

		},
		diff: [
			{
				"operation": "remove",
				"name": "Domain"
			},
			{
				"operation": "move",
				"name": "AgentId",
				"parentName": "controlsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "move",
				"name": "Password",
				"parentName": "controlsContainer",
				"propertyName": "items",
				"index": 1
			}
		]
	};
});
