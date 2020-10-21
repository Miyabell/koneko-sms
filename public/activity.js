var connection = new Postmonger.Session();
// Getting configuration file
var configFile = require('./activity.json');

//Startup Sequence
connection.trigger('ready');

connection.on('initActivity', function(data) {
	document.getElementById('message').value = JSON.stringify(data, null, 2);
});

// Save Sequence
connection.on('clickedNext', function() {

    // Getting and parsing content of textarea
	//var testMSG = document.getElementById('message').value;
	// Adding new value to payload
	//var testMSG = "Test";
	// Modyfing payload
	/*configFile['arguments'].execute.inArguments = [{
                "SMSmessage": testMSG,
                "contactKey": "{{Contact.Key}}",
                "first_name": "{{Contact.Attribute.bg_marketing_test.first_name}}",
                "last_name": "{{Contact.Attribute.bg_marketing_test.last_name}}",
                "email": "{{Contact.Attribute.bg_marketing_test.email}}",
                "phone": "{{Contact.Attribute.bg_marketing_test.phone}}"
                }];*/

    //Saving configuration
	connection.trigger('updateActivity', configFile);
});
