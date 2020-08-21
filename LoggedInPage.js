let getLocator=require("./locatorInfo.js");
let libs=require("./Libs.js");

let LoggedInPage=function(){
	let loggedInMsg=libs.getLocator(getLocator.locators.LoggedInMessageLcType,getLocator.locators.LoggedInMessage);
	
	this.getLoggedInMsg=function(){
		return loggedInMsg.getText().then(function(msg) {
			return msg;
		})
	}
}
module.exports=new LoggedInPage();