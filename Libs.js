let app_launcher=function(){

	this.openApp=function(url){
		browser.get(url);
		return browser.getTitle().then(function(title) {
			return title;
		})
	}
	
	this.getLocator=function(locator,value){
		let loc;
		switch(locator){
		case "id":
			loc=element(by.id(value));
			break;
			
		case "name":
			loc=element(by.name(value));
			break;
			
		case "css":
			loc=element(by.css(value));
			break;
			
		case "model":
			loc=element(by.model(value));
			break;
			
		case "buttonText":
			loc=element(by.buttonText(value));
			break;
			
		case "binding":
			loc=element(by.binding(value));
			break;
			
		case "linkText":
			loc=element(by.linkText(value));
			break;
			
		case "partialLinkText":
			loc=element(by.partialLinkText(value));
			break;

		default:
			console.log("invalid");
		}
		return loc;
	}
}

module.exports=new app_launcher();