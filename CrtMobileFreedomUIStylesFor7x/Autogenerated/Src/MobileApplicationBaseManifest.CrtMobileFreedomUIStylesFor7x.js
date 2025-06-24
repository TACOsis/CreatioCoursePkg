{
  "Features": {
    "Mobile.UseFreedomUIStylesFor7x": {    
      "CustomSchemas": [
          "MobileFreedomUIStylesUtils",
          "MobileCommonFreedomUIStyles",
          "MobileFieldForceFreedomUIStyles"
      ],
      "Models": {
		"Activity": {
          "PagesExtensions": [
            "MobileActivityFreedomUIStyles"
          ]
        },
		"SysDashboard": {
          "PagesExtensions": [
            "MobileDashboardFreedomUIStyles"
          ]
        },
         "SocialMessage": {
          "PagesExtensions": [
            "MobileFeedFreedomUIStyles"
          ]
        }
      }
    },
    "Mobile.UseDashboardsFreedomUIStylesFor7x": { 
      "CustomSchemas": [
          "MobileFreedomUIStylesUtils"
      ],
      "Models": {
		"SysDashboard": {
          "PagesExtensions": [
            "MobileDashboardFreedomUIStyles"
          ]
        }
      }
    }
  }
}