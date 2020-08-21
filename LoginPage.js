let getLocator=require("./locatorInfo.js");
let libs=require("./Libs.js");
let loginPage=function(){
	
	let txtUserName=libs.getLocator(getLocator.locators.txtuserName_LcType,getLocator.locators.txtUserName);
	
	let txtPassword=libs.getLocator(getLocator.locators.txt_password_LcType,getLocator.locators.txtPassword);
	
	let btnLogin=libs.getLocator(getLocator.locators.btnLogin_LcType,getLocator.locators.btnLogin);
	
	let userNameValidation=libs.getLocator(getLocator.locators.UserNameValidationMsgLcType,getLocator.locators.UserNameValidationMsg);
	
	let passwordValidation=libs.getLocator(getLocator.locators.PasswordValidationMsgLcType,getLocator.locators.PasswordValidationMsg);
	
	let registerHyperlink=libs.getLocator(getLocator.locators.Register4LoginRegLinkLcType,getLocator.locators.Register4LoginRegLink);
	
	let failedLoginMsg=libs.getLocator(getLocator.locators.LoginFaileMessage_LcType,getLocator.locators.LoginFaileMessage);
	
	this.setUserName=function(name){
		txtUserName.sendKeys(name);
	}
	
	this.setPassword=function(password){
		txtPassword.sendKeys(password);
	}
	
	this.clickLoginbutton=function(){
		btnLogin.click();
	}
	
	this.getFailedLoginMessage=function(){
		return failedLoginMsg.getText().then(function(msg) {
			return msg;
		})
	}
	
	this.clickRegisterLink=function(){
		registerHyperlink.click();
	}
	this.isLoginbuttonDisabled=function(){
		return btnLogin.getAttribute("disabled").then(function(isDisabled) {
			return isDisabled;
		});
	}
	
	this.getUserNameValidationMsg=function(){
		return userNameValidation.getText().then(function(msg) {
			return msg;
		})
	}
	
	this.getPasswordValidationMsg=function(){
		return passwordValidation.getText().then(function(msg) {
			return msg;
		})
	}
}
module.exports=new loginPage();