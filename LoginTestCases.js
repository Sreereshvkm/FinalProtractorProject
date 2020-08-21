let app_launch=require('./Libs.js');
let assertion=require('./assertionData.js');
let loginLocators=require("./locatorInfo.js");
let loginPage=require("./LoginPage.js");
let loggedInPage=require("./LoggedInPage.js");
let regForLogin=require("./Reg4Login.js");

describe("TestSuite",function(){
	
	beforeEach(function() {
		app_launch.openApp("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login");
	})
	
	it("Verify Login page Title",function(){
		app_launch.openApp("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login").then(function(title) {
			expect(title).toEqual(assertion.assertData.loginPageTitle);
		})
		
	});
	
	it("Verify successful login",function(){
		loginPage.clickRegisterLink();
		var regURL=regForLogin.getRegUrl();
		expect(regURL).toContain(assertion.assertData.register4Login);
		regForLogin.fillRegForm("SreeX","VkmX","SreeAb","1234567");
		loginPage.setUserName("Sree");
		loginPage.setPassword("1234567");
		loginPage.clickLoginbutton();
		loggedInPage.getLoggedInMsg().then(function(msg) {
			expect(msg).toEqual(assertion.assertData.loggedInPageSuccessMsg);
		})
		
	});
	
	it("Verify failed login",function(){
		loginPage.setUserName("Sree");
		loginPage.setPassword("45678");
		loginPage.clickLoginbutton();
		loginPage.getFailedLoginMessage().then(function(msg) {
			expect(msg).toEqual(assertion.assertData.failedLoginMessage);
		})
	});
	
	it("Verify Login button disabled by default",function(){
		loginPage.isLoginbuttonDisabled().then(function(buttonState) {
			expect(buttonState).toBe(assertion.assertData.loginButtonState);
		})
	});
	
	it("Verify userName field validation",function(){
		loginPage.setUserName(" ");
		loginPage.getUserNameValidationMsg().then(function(msg){
			expect(msg).toEqual(assertion.assertData.loginUserNameValidationMsg);
		})
	});
	
	
	it("Verify password field validation",function(){
		loginPage.setPassword(" ");
		loginPage.getPasswordValidationMsg().then(function(msg){
			expect(msg).toEqual(assertion.assertData.loginPasswordValidationMsg);
		})
	});
})