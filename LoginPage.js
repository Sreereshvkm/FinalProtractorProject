let getLocator=require("./locatorInfo.js");
let libs=require("./Libs.js");
let loginPage=function(){
	
	let txtUserName=libs.getLocator(getLocator.locators.txtuserName_LcType,getLocator.locators.txtUserName);
	
	let txtPassword=libs.getLocator(getLocator.locators.txt_password_LcType,getLocator.locators.txtPassword);
	
	let btnLogin=libs.getLocator(getLocator.locators.btnLogin_LcType,getLocator.locators.btnLogin);
	
	this.setUserName=function(name){
		txtUserName.sendKeys(name);
	}
	
	this.setPassword=function(password){
		txtPassword.sendKeys(password);
	}
	
	this.clickLoginbutton=function(){
		btnLogin.click();
	}
}
module.exports=new loginPage();