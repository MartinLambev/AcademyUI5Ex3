sap.ui.define([], function () {
	"use strict";
	return {
		statusText: function(sStatus) {
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			switch (sStatus) {
			case "Available":
				return resourceBundle.getText("nice");
			case "Unavailable":
				return resourceBundle.getText("not nice");
			default:
				return sStatus;
			}
		}
	};
});