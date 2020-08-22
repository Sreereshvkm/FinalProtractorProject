let libs=require("./Libs.js");
let getLocators=require("./locatorInfo.js");

let RegistractionSuccessPage=function(){
	let webTable=libs.getLocator(getLocators.locators.registerSuccessPageWebTableLcType,getLocators.locators.registerSuccessPageWebTable);
	
	this.getActiveTabName=function(){
		return webTable.getText().then(function(tabName) {
			return tabName;
		})
	}
}

module.exports=new RegistractionSuccessPage();