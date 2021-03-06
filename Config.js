var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {

		directConnect: true,
		// Capabilities to be passed to the webdriver instance.
		capabilities: {
			'browserName': 'chrome'
		},

		// Framework to use. Jasmine is recommended.
		framework: 'jasmine',

		// Spec patterns are relative to the current working directory when
		// protractor is called.
		
		specs: ['LoginTestCases.js','RegistrationTestcases.js'],
		// Options to be passed to Jasmine.
		jasmineNodeOpts: {
			defaultTimeoutInterval: 50000
		},

		onPrepare:function(){
			browser.manage().window().maximize();
			jasmine.getEnv().addReporter(
					new Jasmine2HtmlReporter({
						savePath: 'target/screenshots'
					})
			);
		}
};