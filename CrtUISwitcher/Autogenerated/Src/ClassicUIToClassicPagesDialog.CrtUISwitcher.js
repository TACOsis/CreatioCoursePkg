define("ClassicUIToClassicPagesDialog", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "YesButton",
				"values": {
					"clicked": [
						{
							"request": "crt.RunBusinessProcessRequest",
							"params": {
								"processName": "UISwitcherSetFormPagesUI",
								"processRunType": "RegardlessOfThePage",
								"processParameters": {
									"ForNewShell": "false",
									"EditPagesUIType":"d823260d-75be-44ee-8e3a-669bb83a5ce4"
								}
							}
						},
						{
							"request": "crt.OpenPageRequest",
							"params": {
								"schemaName": "UISwitcherLogoutDialog"
							}
						}
					]
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});