let libs=require("./Libs.js");
let getLocators=require("./locatorInfo.js");

let RegistraionPage=function(){
	
		let txtFirstName=libs.getLocator(getLocators.locators.txtRegisterFirstNameLcType,getLocators.locators.txtRegisterFirstName);
		let txtLastName=libs.getLocator(getLocators.locators.txtRegisterLastNameLcType,getLocators.locators.txtRegisterLastName);
		let txtAreaAddres=libs.getLocator(getLocators.locators.txtAreaRegisterAddresLcType,getLocators.locators.txtAreaRegisterAddres);
		let txtEmail=libs.getLocator(getLocators.locators.txtRegisterEmailLcType,getLocators.locators.txtRegisterEmail);
		let txtPhone=libs.getLocator(getLocators.locators.txtRegisterPhoneLcType,getLocators.locators.txtRegisterPhone);
		let radioMale=libs.getLocator(getLocators.locators.radioRegisterMaleLcType,getLocators.locators.radioRegisterMale);
		let radioFemale=libs.getLocator(getLocators.locators.radioRegisterFemaleLcType,getLocators.locators.radioRegisterFemale);
		let checkboxHobbies=libs.getLocator(getLocators.locators.checkBoxRegisterLcType,getLocators.locators.checkBoxRegister);
		
		this.setFirstName=function(fName){
			txtFirstName.sendKeys(fName);
		}
		
		this.setLastName=function(lName){
			txtLastName.sendKeys(lName);
		}
		
		this.setAddress=function(addres){
			txtAreaAddres.sendKeys(addres);
		}
		
		this.setEmail=function(email){
			txtEmail.sendKeys(email);
		}
		
		this.setPhone=function(phone){
			txtPhone.sendKeys(phone);
		}
		
		this.setMaleGender=function(){
			radioMale.click();
		}
		
		this.setFemaleGender=function(){
			radioFemale.click();
		}
		
		this.selectHobby=function(hobby){
			checkboxHobbies.each(function(item) {
				
			})
		}
}
module.exports=new RegistraionPage();