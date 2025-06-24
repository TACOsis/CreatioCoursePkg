define("Products_ListPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"selectionState": "$DataTable_SelectionState",
					"_selectionOptions": {
						"attribute": "DataTable_SelectionState"
					}
				}
			},
			{
				"operation": "insert",
				"name": "MenuItem_RunGererateShortDescriptionProcess",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_RunGererateShortDescriptionProcess_caption)#",
					"icon": "copilot-action-button-icon",
					"clicked": {
						"request": "crt.GenerateShortDescription",
						"params": {
							"filters": "$Items | crt.ToCollectionFilters : 'Items' : $DataTable_SelectionState | crt.SkipIfSelectionEmpty : $DataTable_SelectionState",
							"sorting": "$ItemsSorting"
						}
					},
					"visible": true
				},
				"parentName": "DataTable",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "crt.GenerateShortDescription",
				handler: async (request, next) => {
					const handlerChain = sdk.HandlerChainService.instance;
					const sysSettingsService = new sdk.SysSettingsService();
					const identityServerUrl = await sysSettingsService.getByCode('IdentityServerUrl');
					const identityServerClientId = await sysSettingsService.getByCode('IdentityServerClientId');
					const accountEnrichmentServiceUrl = await sysSettingsService.getByCode('AccountEnrichmentServiceUrl');
					if (!identityServerUrl.value || !identityServerClientId.value || !accountEnrichmentServiceUrl.value) {
						const errorMessage = await request.$context.Resources.Strings.GenerateShortDescriptionError;
						await handlerChain.process({
						type: 'crt.ShowDialogRequest',
						$context: request.$context,
						scopes: [...request.scopes], 
						dialogConfig: {
							data: {
									title: "",
									message: errorMessage,
									actions: [
										{
											key: "SAVE",
											config: {
												color: "primary",
												caption: "OK",
											}
										}
									]
								}
							}
						}); 
						return next?.handle(request);
					}
					const prcResult = await handlerChain.process({
						type: "crt.RunBusinessProcessRequest",
						processName: "LaunchProductShortDescriptionGeneration",
						processRunType: "ForTheSelectedRecords",
						showNotification: false,
						parameterMappings: {
								"Products.RecordId": "Id"
							},
						dataSourceName: "PDS",
						filters: request.filters,
						sorting: request.sorting,
						selectionStateAttributeName: "DataTable_SelectionState",
						$context: request.$context,
						scopes: [...request.scopes]
					});
					if (prcResult.success) {
						const successMessage = await request.$context.Resources.Strings.GenerateShortDescriptionConfirmation;
						await handlerChain.process({
						type: "crt.NotificationRequest",
						message: successMessage,   
						$context: request.$context,
						scopes: [...request.scopes]  
						});
					}
					return next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});