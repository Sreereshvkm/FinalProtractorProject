let libs=require('./Libs.js');
let assertion=require('./assertionData.js');
let registrationLocators=require("./locatorInfo.js");
let registrationPage=require("./RegistrationPage.js")

describe("Registration Test Suite", function() {
	beforeEach(function() {
		libs.openApp("http://demo.automationtesting.in/Register.html");
	})

	xit("Verify Registration page title",function(){
		libs.openApp("http://demo.automationtesting.in/Register.html").then(function(title) {
			expect(title).toEqual(assertion.assertData.registrationPageTitle);
		})
	})

	it("Verify successfull registration", function() {

//		registrationPage.selecMultipleLanguages(["Croatian","Hindi","English","Arabic"]);
		registrationPage.uloadPhoto("lion.png");
		registrationPage.setPassword("sree2345");
		registrationPage.setConfirmPassword("45678")
		registrationPage.setYearForDob("1990");
		registrationPage.setMonthForDob("November");
		registrationPage.setDayForDob("11");
		registrationPage.selectSingleLanguage("Croatian");
		registrationPage.selectCountryDropDownWithSearchBox("India");
		registrationPage.selectSkill("APIs");
		registrationPage.setFirstName("Sree");
		registrationPage.setLastName("Vkm");
		registrationPage.setEmail("sree@jd.ck");
		registrationPage.setPhone("345678909");
		registrationPage.selectCountry("India");
		registrationPage.setAddress("Bangalore");
		registrationPage.selectHobby("Cricket");
		registrationPage.setGender("FeMale");
		
		


	})
});

