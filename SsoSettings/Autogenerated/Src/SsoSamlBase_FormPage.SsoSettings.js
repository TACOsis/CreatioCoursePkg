define("SsoSamlBase_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MainHeaderTop",
				"values": {
					"wrap": "wrap",
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "small",
						"right": "none",
						"bottom": "small",
						"left": "none"
					},
					"direction": "row",
					"alignItems": "stretch",
					"gap": "small"
				}
			},
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "SetRecordRightsButton",
				"values": {
					"visible": false
				}
			},
			{
				"operation": "remove",
				"name": "MainHeaderBottom"
			},
			{
				"operation": "remove",
				"name": "CardToolsContainer"
			},
			{
				"operation": "remove",
				"name": "CardToggleContainer"
			},
			{
				"operation": "remove",
				"name": "MainContainer"
			},
			{
				"operation": "remove",
				"name": "CardContentWrapper"
			},
			{
				"operation": "insert",
				"name": "TestSignInButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_TestSignIn_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "large",
					"iconPosition": "right-icon",
					"visible": "$IsChanged | crt.InvertBooleanValue",
					"icon": "open-button-icon",
					"clicked": {
						"request": "crt.TestSsoRequest"
					},
					"clickMode": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "NotSecureSettingsIdentsContainer",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": "$IsSecure | crt.InvertBooleanValue",
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "medium",
						"bottom": "none",
						"left": "small"
					},
					"alignItems": "stretch"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NotSecureSettingsContainer",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "none",
						"left": "large"
					},
					"color": "primary",
					"borderRadius": "medium",
					"visible": true,
					"alignItems": "stretch",
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "NotSecureSettingsIdentsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotSafeConfigurationWarningLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(NotSafeConfigurationWarningLabel_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#D2310D",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "NotSecureSettingsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MainContainerTotal",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": false,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "small",
						"bottom": "none",
						"left": "small"
					},
					"stretch": true,
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "small",
					"wrap": "nowrap"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "MainContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"stretch": true,
					"fitContent": true,
					"items": [],
					"visible": true,
					"color": "primary",
					"borderRadius": "medium",
					"padding": {
						"top": "medium",
						"right": "none",
						"bottom": "none",
						"left": "small"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "small",
					"wrap": "nowrap",
					"layoutConfig": {}
				},
				"parentName": "MainContainerTotal",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SetIdentityStepExpansionPanel",
				"values": {
					"layoutConfig": {},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(SetIdentityStepExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": true,
					"titleWidth": "50",
					"padding": {
						"top": "none",
						"bottom": "medium",
						"left": "medium",
						"right": "medium"
					},
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainerTopExpansionPanel",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "small"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "medium",
						"left": "none"
					},
					"fitContent": true,
					"alignItems": "stretch"
				},
				"parentName": "SetIdentityStepExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RegisterInIdentityLabel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 4,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(RegisterInIdentity_Label)#)#",
					"labelType": "body",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "GridContainerTopExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GetMetadataButton",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Button",
					"caption": "#ResourceString(GetMetadataButton_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"clicked": {
						"request": "crt.LoadSamlMetadataRequest"
					},
					"visible": true,
					"icon": "download-button-icon",
					"clickMode": "default"
				},
				"parentName": "GridContainerTopExpansionPanel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SamlEndpointsExpansionPanel",
				"values": {
					"layoutConfig": {},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(SamlEndpoints_ExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": true,
					"titleWidth": "50",
					"padding": {
						"top": "none",
						"bottom": "medium",
						"left": "medium",
						"right": "medium"
					},
					"alignItems": "stretch",
					"fitContent": true,
					"visible": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SamlEndpointsGridContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "small"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "SamlEndpointsExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UploadMetadataLabel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 4,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(UploadMetadataLabel_caption)#)#",
					"labelType": "body",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start"
				},
				"parentName": "SamlEndpointsGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UploadMetadataButton",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Button",
					"caption": "#ResourceString(UploadMetadataButton_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"clicked": {
						"request": "crt.UploadSamlIdpMetadataRequest"
					},
					"icon": "upload-button-icon"
				},
				"parentName": "SamlEndpointsGridContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "OrLabel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 4,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(OrLabel_caption)#)#",
					"labelType": "body",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "SamlEndpointsGridContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "SetSamlParamsLabel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 4,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(SetSamlParams_Label_caption)#)#",
					"labelType": "body",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "SamlEndpointsGridContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "PartnerIdentityName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 4,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PartnerIdentityName",
					"labelPosition": "auto",
					"control": "$PartnerIdentityName"
				},
				"parentName": "SamlEndpointsGridContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "SingleSignOnServiceUrl",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 4,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.SingleSignOnServiceUrl",
					"labelPosition": "auto",
					"control": "$SingleSignOnServiceUrl"
				},
				"parentName": "SamlEndpointsGridContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "SingleLogoutServiceUrl",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 7,
						"colSpan": 4,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.SingleLogoutServiceUrl",
					"labelPosition": "auto",
					"control": "$SingleLogoutServiceUrl"
				},
				"parentName": "SamlEndpointsGridContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "SigningAndEncryptionExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(SigningAndEncryptionExpansionPanelTitle)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "none",
						"bottom": "medium",
						"left": "medium",
						"right": "medium"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "SigningAndEncryptionGridContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "SigningAndEncryptionExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UploadIdpCertificateLabel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 4,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(UploadIdpCertificateLabel_caption)#)#",
					"labelType": "body",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "SigningAndEncryptionGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "IdpCertificatesFlexContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 4,
						"rowSpan": 1
					},
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "medium",
						"left": "none"
					},
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
				},
				"parentName": "SigningAndEncryptionGridContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WantAssertionSignedCheckbox",
				"values": {
					"layoutConfig": {},
					"type": "crt.Checkbox",
					"value": true,
					"disabled": false,
					"inversed": false,
					"label": "#ResourceString(WantAssertionSignedCheckbox_label)#",
					"ariaLabel": "#ResourceString(WantAssertionSignedCheckboxLabel)#",
					"labelPosition": "left",
					"tooltip": "",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"control": "$WantAssertionSigned"
				},
				"parentName": "IdpCertificatesFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "IdpCertificatesDataGrid",
				"values": {
					"type": "crt.DataGrid",
					"headerToolbarItems": [],
					"features": {
						"rows": {
							"selection": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						},
						"columns": {
							"adding": false
						}
					},
					"sortingChange": {},
					"items": "$IdpCertificatesDataGrid",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "IdpCertificatesDataGridDS_Id",
					"columns": [
						{
							"id": "53b02f98-6a79-a16e-dd25-1dbafa1b268a",
							"code": "IdpCertificatesDataGridDS_Name",
							"caption": "#ResourceString(IdpCertificatesDataGridDS_Name)#",
							"dataValueType": 28,
							"width": 450
						},
						{
							"id": "73b02f98-6a79-a16e-dd25-1dbafa1b268a",
							"code": "IdpCertificatesDataGridDS_NotBefore",
							"caption": "#ResourceString(IdpCertificatesDataGridDS_NotBefore)#",
							"dataValueType": 7,
							"width": 150
						},
						{
							"id": "83b02f98-6a79-a16e-dd25-1dbafa1b268a",
							"code": "IdpCertificatesDataGridDS_NotAfter",
							"caption": "#ResourceString(IdpCertificatesDataGridDS_NotAfter)#",
							"dataValueType": 7,
							"width": 150
						},
						{
							"id": "63b02f98-6a79-a16e-dd25-1dbafa1b268a",
							"code": "IdpCertificatesDataGridDS_Thumbprint",
							"caption": "#ResourceString(IdpCertificatesDataGridDS_Thumbprint)#",
							"dataValueType": 28,
							"width": 400
						}
					]
				},
				"parentName": "IdpCertificatesFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UploadIdpCertificateButton",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Button",
					"caption": "#ResourceString(UploadIdpCertificateButton_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"clicked": {
						"request": "crt.UploadSamlIdpCertificateRequest"
					},
					"visible": true,
					"icon": "clip-button-icon",
					"clickMode": "default"
				},
				"parentName": "SigningAndEncryptionGridContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "WantAssertionEncryptedCheckbox",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"value": true,
					"disabled": false,
					"inversed": false,
					"label": "#ResourceString(WantAssertionEncryptedCheckboxLabel)#",
					"ariaLabel": "#ResourceString(WantAssertionEncryptedCheckboxLabel)#",
					"labelPosition": "above",
					"tooltip": "",
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"control": "$WantAssertionEncrypted"
				},
				"parentName": "SigningAndEncryptionGridContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "EnableSigningLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(EnableSigningLabel_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#D2310D",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": "$IsSecure | crt.InvertBooleanValue",
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 4,
						"rowSpan": 1
					}
				},
				"parentName": "SigningAndEncryptionGridContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "AdditionalParametersExpansionPanel",
				"values": {
					"layoutConfig": {},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(AdditionalParameters_ExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": true,
					"titleWidth": "50",
					"padding": {
						"top": "none",
						"bottom": "large",
						"left": "medium",
						"right": "medium"
					},
					"fitContent": true,
					"visible": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "AdditionalParametersGridContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "AdditionalParametersExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DisplayName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.DisplayName",
					"labelPosition": "auto",
					"control": "$DisplayName"
				},
				"parentName": "AdditionalParametersGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "IsDefault",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.IsDefault",
					"labelPosition": "auto",
					"control": "$IsDefault"
				},
				"parentName": "AdditionalParametersGridContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UserType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UserType",
					"labelPosition": "auto",
					"control": "$UserType",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "AdditionalParametersGridContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "AdditionalParams",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.AdditionalParams",
					"labelPosition": "auto",
					"control": "$AdditionalParams"
				},
				"parentName": "AdditionalParametersGridContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "PartnerCertificateThumbprint",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PartnerCertificateThumbprint",
					"labelPosition": "auto",
					"control": "$PartnerCertificateThumbprint"
				},
				"parentName": "AdditionalParametersGridContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_f07ddif",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"visible": false
				},
				"parentName": "AdditionalParametersExpansionPanel",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"Id": {
						"modelConfig": {
							"path": "SsoSamlProviderDS.Id"
						}
					},
					"PartnerIdentityName": {
						"modelConfig": {
							"path": "SsoSamlProviderDS.EntityID"
						},
						"validators": {
							"IsUrlValidator": {
								"type": "crt.StringUrlValidator"
							}
						}
					},
					"DisplayName": {
						"modelConfig": {
							"path": "SsoSamlProviderDS.Name"
						}
					},
					"SingleLogoutServiceUrl": {
						"modelConfig": {
							"path": "SsoSamlProviderDS.SingleLogoutServiceUrl"
						},
						"validators": {
							"IsUrlValidator": {
								"type": "crt.StringUrlValidator",
								"params": {
									"SkipEmptyValues": true
								}
							}
						}
					},
					"PartnerCertificateThumbprint": {
						"modelConfig": {
							"path": "SsoSamlProviderDS.PartnerCertificateThumbprint"
						}
					},
					"WantAssertionSigned": {
						"modelConfig": {}
					},
					"WantAssertionEncrypted": {
						"modelConfig": {}
					},
					"AdditionalParams": {
						"modelConfig": {
							"path": "SsoSamlProviderDS.AdditionalParams"
						},
						"validators": {
							"IsJsonOrEmptyValidator": {
								"type": "crt.IsJsonValidator",
								"params": {
									"skipEmptyValues": true
								}
							}
						}
					},
					"SingleSignOnServiceUrl": {
						"modelConfig": {
							"path": "SsoSamlProviderDS.SingleSignOnServiceUrl"
						},
						"validators": {
							"IsUrlValidator": {
								"type": "crt.StringUrlValidator"
							}
						}
					},
					"Code": {
						"modelConfig": {
							"path": "SsoSamlProviderDS.Code"
						}
					},
					"IsDefault": {
						"modelConfig": {
							"path": "SsoSamlProviderDS.IsDefault"
						}
					},
					"Type": {
						"modelConfig": {
							"path": "SsoSamlProviderDS.SsoSettingsTemplate"
						}
					},
					"IsSecure": {
						"modelConfig": {}
					},
					"IdpCertificatesDataGrid": {
						"isCollection": true,
						"modelConfig": {
							"path": "IdpCertificatesDataGridDS"
						},
						"viewModelConfig": {
							"attributes": {
								"IdpCertificatesDataGridDS_Name": {
									"modelConfig": {
										"path": "IdpCertificatesDataGridDS.Name"
									}
								},
								"IdpCertificatesDataGridDS_NotBefore": {
									"modelConfig": {
										"path": "IdpCertificatesDataGridDS.NotBefore"
									}
								},
								"IdpCertificatesDataGridDS_NotAfter": {
									"modelConfig": {
										"path": "IdpCertificatesDataGridDS.NotAfter"
									}
								},
								"IdpCertificatesDataGridDS_Thumbprint": {
									"modelConfig": {
										"path": "IdpCertificatesDataGridDS.Thumbprint"
									}
								},
								"IdpCertificatesDataGridDS_Id": {
									"modelConfig": {
										"path": "IdpCertificatesDataGridDS.Id"
									}
								}
							}
						}
					},
					"UserType": {
						"modelConfig": {
							"path": "SsoSamlProviderDS.UserType"
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
						"SsoSamlProviderDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "SsoSamlProvider"
							}
						},
						"IdpCertificatesDataGridDS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "SamlIdpCertificateView",
								"attributes": {
									"Name": {
										"path": "Name"
									},
									"NotBefore": {
										"path": "NotBefore"
									},
									"NotAfter": {
										"path": "NotAfter"
									},
									"Thumbprint": {
										"path": "Thumbprint"
									}
								}
							}
						}
					},
					"primaryDataSourceName": "SsoSamlProviderDS",
					"dependencies": {
						"IdpCertificatesDataGridDS": [
							{
								"attributePath": "SsoSamlSettings",
								"relationPath": "SsoSamlProviderDS.Id"
							}
						]
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});