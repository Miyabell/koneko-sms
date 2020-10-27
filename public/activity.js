var connection = new Postmonger.Session();
var payload = {};
var msg = '';
//Startup Sequence
connection.trigger('ready');

connection.on('initActivity', function(data) {
    payload = data;
    msg = payload['arguments'].execute.inArguments.SMSmessage;
	document.getElementById('message').value = JSON.stringify(msg);
});

// Save Sequence
connection.on('clickedNext', function() {
    //Getting and parsing content of textarea
    var testMSG = document.getElementById('message').value;

	// Creating payload
	payload['arguments'] = payload['arguments'] || {};
	payload['arguments'].execute = payload['arguments'].execute || {};
	payload['arguments'].execute.inArguments = [{
                "SMSmessage": testMSG,
                "contactKey": "{{Contact.Key}}",
                "first_name": "{{Contact.Attribute.bg_marketing_test.first_name}}",
                "last_name": "{{Contact.Attribute.bg_marketing_test.last_name}}",
                "email": "{{Contact.Attribute.bg_marketing_test.email}}",
                "phone": "{{Contact.Attribute.bg_marketing_test.phone}}"
                }];
    payload['arguments'].execute.url = "https://enz3kkxiw5fpq.x.pipedream.net/";

    payload['configurationArguments'] = payload['configurationArguments'] || {};
    payload['configurationArguments'].publish = payload['configurationArguments'].publish || {};
    payload['configurationArguments'].publish.url = "https://enz3kkxiw5fpq.x.pipedream.net/";

    payload['metaData'] = payload['metaData'] || {};
    payload['metaData'].isConfigured = true;

    //Saving configuration
	connection.trigger('updateActivity', payload);
});
