sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, formatter, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("home.kpmg.Exercise3.controller.View1", {
		formatter: formatter,
		onInit: function () {

		},
		onFilterProducts: function (oEvent) {
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("Name", FilterOperator.Contains, sQuery));
			}
			var oList = this.byId("productsList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		}
 	});
});