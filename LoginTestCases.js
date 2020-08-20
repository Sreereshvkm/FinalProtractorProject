let app_launch=require('./Libs.js');
let assertion=require('./assertionData.js');
let loginLocators=require("./locatorInfo.js");
let loginPage=require("./LoginPage.js");

describe("TestSuite",function(){
	it("Validate Login page Title",function(){
		app_launch.openApp("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login").then(function(title) {
			expect(title).toEqual(assertion.assertData.loginPageTitle);
		})
		
	});
	
	it("Validate successful login",function(){
		loginPage.setUserName("Sreeresh");
		loginPage.setPassword("Sreeresh121");
		loginPage.clickLoginbutton();
	});
})