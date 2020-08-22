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
			
		case "tagName":
			loc=element(by.tagName(value));
			break;
			

		default:
			console.log("invalid");
		}
		return loc;
	}
	
	
	
	this.getAllLocator=function(locator,value){
		let loc;
		switch(locator){
		case "id":
			loc=element.all(by.id(value));
			break;
			
		case "name":
			loc=element.all(by.name(value));
			break;
			
		case "css":
			loc=element.all(by.css(value));
			break;
			
		case "model":
			loc=element.all(by.model(value));
			break;
			
		case "buttonText":
			loc=element.all(by.buttonText(value));
			break;
			
		case "binding":
			loc=element.all(by.binding(value));
			break;
			
		case "linkText":
			loc=element.all(by.linkText(value));
			break;
			
		case "partialLinkText":
			loc=element.all(by.partialLinkText(value));
			break;
			
		case "tagName":
			loc=element.all(by.tagName(value));
			break;
			
		default:
			console.log("invalid");
		}
		return loc;
	}
}

module.exports=new app_launcher();