let getLocator=require("./locatorInfo.js");
let libs=require("./Libs.js");

let Register4Login=function(){
	let register4LoginUrl="https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/register";
	let register4LoginFirstName=libs.getLocator(getLocator.locators.Regsiter4LoginTxtFirstNameLcType,getLocator.locators.Regsiter4LoginTxtFirstName);
	let register4LoginLastName=libs.getLocator(getLocator.locators.Regsiter4LoginTxtLastNameLcType,getLocator.locators.Regsiter4LoginTxtLastName);
	let register4LoginUserName=libs.getLocator(getLocator.locators.Regsiter4LoginTxtUserNameLcType,getLocator.locators.Regsiter4LoginTxtUserName);
	let register4LoginPassword=libs.getLocator(getLocator.locators.Regsiter4LoginTxtPasswordLcType,getLocator.locators.Regsiter4LoginTxtPassword);
	let registerButton=libs.getLocator(getLocator.locators.Regsiter4LoginRegButtonLcType,getLocator.locators.Regsiter4LoginRegButton);

	this.getRegUrl=function(){
		return register4LoginUrl;
	}

	this.setFirstName=function(fName){
		register4LoginFirstName.sendKeys(fName);
	}

	this.setLastName=function(lName){
		register4LoginLastName.sendKeys(lName);
	}

	this.setUserName=function(uName){
		register4LoginUserName.sendKeys(uName);
	}

	this.setPassword=function(password){
		register4LoginPassword.sendKeys(password);
	}

	this.clickRegisterButton=function(){
		registerButton.click();
	}

	this.fillRegForm=function(fName,lName,uName,password){
		this.setFirstName(fName);
		this.setLastName(lName);
		this.setUserName(uName);
		this.setPassword(password);
		this.clickRegisterButton();
	}

}
module.exports=new Register4Login();