let libs=require('./Libs.js');
let assertion=require('./assertionData.js');
let registrationLocators=require("./locatorInfo.js");
let registrationPage=require("./RegistrationPage.js")
let registrationSuccessPage=require("./RegistrationSuccessPage.js");
let dataForReg=require("./dataForRegistration.js");
let using = require('jasmine-data-provider');

describe("Registration Test Suite", function() {
	beforeEach(function() {
		libs.openApp("http://demo.automationtesting.in/Register.html");
	})

	it("Verify Registration page title",function(){
		libs.openApp("http://demo.automationtesting.in/Register.html").then(function(title) {
			expect(title).toEqual(assertion.assertData.registrationPageTitle);
		})
	})

	using(dataForReg.dataForSuccessRegistration, function (data, description) {
		it("Verify successfull registration -"+description, function() {
			
			registrationPage.performRegistration(data.firstName,data.lastName,data.address,data.emailAddress,data.phoneNumber,data.gender,
					data.Hobby,data.languages,data.Skills,data.Country,data.SelecCountry,data.DobYear,data.DobMonth,data.DobDay,data.password,data.cPassword,data.photo)
			registrationSuccessPage.getActiveTabName().then(function(tabName) {
				expect(tabName).toEqual(assertion.assertData.registrationSuccessPageWebTableActiveTab);
			
			})

		})

	});
	});

