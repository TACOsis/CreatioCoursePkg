 define("SysTwoFactorAuthFlowLookupSection", [],
	function() {
		return {
			entitySchemaName: "SysTwoFactorAuthFlow",
			methods: {
				saveDataRow: function(row, callback, scope) {
                  if(row.getChangedEntityColumns().filter(column => column === 'Primary'
                          || column === 'Enabled').length > 0) {
                      row.save({
						callback: function() {
							callback.call();
							this.reloadGridData();
						},
						isSilent: true,
						scope: scope
					});
                  } else {
                    this.callParent(arguments);
                  }
        		}
			}
		};
	});