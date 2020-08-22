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
		let genderRadioButton=libs.getAllLocator(getLocators.locators.radioGenderLcType,getLocators.locators.radioGender);
		let checkboxHobbies=libs.getAllLocator(getLocators.locators.checkBoxRegisterLcType,getLocators.locators.checkBoxRegister);
		let multiSelectLanguage=libs.getLocator(getLocators.locators.multiCheckBoxLanguageLcType,getLocators.locators.multiCheckBoxLanguage);
		let allLangauges=libs.getAllLocator(getLocators.locators.allLanguagesLcType,getLocators.locators.allLanguages);
		let allSkillDropDownValues=libs.getAllLocator(getLocators.locators.allSkillDropDownValuesLcType,getLocators.locators.allSkillDropDownValues);
		let allCoutries=libs.getAllLocator(getLocators.locators.allCountriesValuesLcType,getLocators.locators.allCountriesValues);
		let selectCountryArrowDown=libs.getLocator(getLocators.locators.selectCountryDropDownLcType,getLocators.locators.selectCountryDropDown);
		let selectCountrySearchbox=libs.getLocator(getLocators.locators.selectCountrySearchboxLcType,getLocators.locators.selectCountrySearchbox);
		let selectCountrySearchResult=libs.getLocator(getLocators.locators.selectCountrySearchResultLcType,getLocators.locators.selectCountrySearchResult);
		let allYearDropDownDob=libs.getAllLocator(getLocators.locators.yearDropDownDobLcType,getLocators.locators.yearDropDownDob);
		let allMonthDropDownDob=libs.getAllLocator(getLocators.locators.monthDropDownDobLcType,getLocators.locators.monthDropDownDob);
		let allDayDropDownDob=libs.getAllLocator(getLocators.locators.dayDropDownDobLcType,getLocators.locators.dayDropDownDob);
		let txtPassword=libs.getLocator(getLocators.locators.txtPasswordLcType,getLocators.locators.txtPassword);
		let txtConfirmPassword=libs.getLocator(getLocators.locators.txtConfirmPasswordLcType,getLocators.locators.txtConfirmPassword);
		let photoUpload=libs.getLocator(getLocators.locators.photoUploadLcType,getLocators.locators.photoUpload);
		let buttonSubmit=libs.getLocator(getLocators.locators.buttonSubmitLcType,getLocators.locators.buttonSubmit);
		
		this.uloadPhoto=function(photo){
			photoUpload.sendKeys(__dirname+"/Photos/"+photo);
		}
		
		this.clickSubmitButton=function(){
			buttonSubmit.click().then(function() {
				browser.sleep(5000);
			})
		}
		
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
		
		this.setYearForDob=function(year){
			allYearDropDownDob.each(function(item) {
				item.getText().then(function(displayedYear) {
					if(displayedYear==year){
						item.click();
					}
				})
				
			});
		}
		
		this.setMonthForDob=function(month){
			allMonthDropDownDob.each(function(item) {
				item.getText().then(function(displayedMonth) {
					if(displayedMonth==month){
						item.click();
					}
				})
				
			});
		}
		
		this.setDayForDob=function(day){
			allDayDropDownDob.each(function(item) {
				item.getText().then(function(displayedDay) {
					if(displayedDay==day){
						item.click();
					}
				})
				
			});
		}
		
		this.setPassword=function(password){
			txtPassword.sendKeys(password);
		}
		
		this.setConfirmPassword=function(confimPassword){
			txtConfirmPassword.sendKeys(confimPassword);
		}
		
		this.selectCountryDropDownWithSearchBox=function(country){
			selectCountryArrowDown.click();
			selectCountrySearchbox.sendKeys(country);
			selectCountrySearchResult.getText().then(function(searchResult) {
				if(searchResult==country){
					selectCountrySearchResult.click();
				}
			});
		}
		
		this.setGender=function(gender){
			genderRadioButton.each(function(item) {
				item.getAttribute("Value").then(function(value) {
					if(value==gender){
						item.click();
					}
				});
			}) 
		}
		
		this.selectHobby=function(hobby){
			checkboxHobbies.each(function(item) {
				item.getAttribute("Value").then(function(value) {
					if(value==hobby){
						item.click();
					}
				});
			})
		}
		
		this.selectSingleLanguage=function(language){
			multiSelectLanguage.click();
			allLangauges.each(function(item) {
				item.getText().then(function(lang) {
					if(lang==language){
						item.click();
					}
				})
			});
		}
		
		
		this.selecMultipleLanguages=function(languages){
			for(i=0;i<languages.length;i++){
				this.selectSingleLanguage(languages[i]);
			}
		}
		
		this.selectSkill=function(skill){
			allSkillDropDownValues.each(function(item) {
				item.getText().then(function(sk) {
					if(sk==skill){
						item.click();
					}
				});
			})
		}
		

		this.selectCountry=function(country){
			allCoutries.each(function(item) {
				item.getText().then(function(cntry) {
					if(cntry==country){
						item.click();
					}
				});
			})
		}
		
		this.performRegistration=function(fName,lName,address,email,phone,gender,hobby,language,skill,country,
				selectCountry,DobYear,DobMonth,DobDay,password,cPassword,photo){
			
			this.setFirstName(fName);
			this.setLastName(lName);
			this.setAddress(address);
			this.setEmail(email);
			this.setPhone(phone);
			this.setGender(gender);
			this.selectHobby(hobby);
			this.selectSingleLanguage(language);
			this.selectSkill(skill);
			this.selectCountry(country);
			this.selectCountryDropDownWithSearchBox(selectCountry);
			this.setYearForDob(DobYear);
			this.setMonthForDob(DobMonth);
			this.setDayForDob(DobDay);
			this.setPassword(password);
			this.setConfirmPassword(cPassword);
			this.uloadPhoto(photo);
			this.clickSubmitButton();
			
		}
}
module.exports=new RegistraionPage();