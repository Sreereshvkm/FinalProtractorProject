let libs=require('./Libs.js');
let assertion=require('./assertionData.js');
let registrationLocators=require("./locatorInfo.js");
let registraionPage=require("./RegistrationPage.js")

describe("Registration Test Suite", function() {
	beforeEach(function() {
		libs.openApp("http://demo.automationtesting.in/Register.html");
	})
	
	it("Verify Registration page title",function(){
		libs.openApp("http://demo.automationtesting.in/Register.html").then(function(title) {
			expect(title).toEqual(assertion.assertData.registrationPageTitle);
		})
	})
});

