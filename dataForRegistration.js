let faker=require('faker');
// Faker is used to get random data for successful registration
// Faker provides string data for phone number, so used javascript to create random 10 digit number -Math.floor(1000000000 + Math.random() * 9000000000);
 
module.exports={
		dataForSuccessRegistration:{
			FirstData:{
				"firstName":faker.name.firstName(),
				"lastName":faker.name.lastName(),
				"address":"bangalore",
				"emailAddress":faker.internet.email(),
				"phoneNumber":Math.floor(1000000000 + Math.random() * 9000000000),
				"gender":"Male",
				"Hobby":"Cricket",
				"languages":"English",
				"Skills":"Certifications",
				"Country":"India",
				"SelecCountry":"India",
				"DobYear":"1990",
				"DobMonth":"November",
				"DobDay":"24",
				"password":"Test1234",
				"cPassword":"Test1234",
				"photo":"lion.png"
					
			},
			SecondData:{
				"firstName":faker.name.firstName(),
				"lastName":faker.name.lastName(),
				"address":"Chennai",
				"emailAddress":faker.internet.email(),
				"phoneNumber":Math.floor(1000000000 + Math.random() * 9000000000),
				"gender":"FeMale",
				"Hobby":"Movies",
				"languages":"Danish",
				"Skills":"APIs",
				"Country":"Angola",
				"SelecCountry":"Australia",
				"DobYear":"1988",
				"DobMonth":"March",
				"DobDay":"28",
				"password":"Nishi1234",
				"cPassword":"Nishi1234",
				"photo":"Tiger.png"
					
			}
		},
		dataForInvalidRegistration:{
			FirstData:{
				"firstName":faker.name.firstName(),
				"lastName":faker.name.lastName(),
				"address":"bangalore",
				"emailAddress":"PNCYAMELDW@test.com",
				"phoneNumber":Math.floor(1000000000 + Math.random() * 9000000000),
				"gender":"Male",
				"Hobby":"Cricket",
				"languages":"English",
				"Skills":"Certifications",
				"Country":"India",
				"SelecCountry":"India",
				"DobYear":"1990",
				"DobMonth":"November",
				"DobDay":"24",
				"password":"Test1234",
				"cPassword":"Test1234",
				"photo":"lion.png"
					
			},
			SecondData:{
				"firstName":faker.name.firstName(),
				"lastName":faker.name.lastName(),
				"address":"Chennai",
				"emailAddress":"LAOSEFIURV@test.com",
				"phoneNumber":Math.floor(1000000000 + Math.random() * 9000000000),
				"gender":"FeMale",
				"Hobby":"Movies",
				"languages":"Danish",
				"Skills":"APIs",
				"Country":"Angola",
				"SelecCountry":"Australia",
				"DobYear":"1988",
				"DobMonth":"March",
				"DobDay":"28",
				"password":"Nishi1234",
				"cPassword":"Nishi1234",
				"photo":"Tiger.png"
					
			}
		}
}