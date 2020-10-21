var connection = new Postmonger.Session();
// Getting configuration file
var configFile = require('./public/activity.json');
//var configuration1 = JSON.stringify(configFile);

/* var config = {
                "name": "",
                                  "id": null,
                                  "key": "REST-1",
                                  "arguments": {
                                    "execute": {
                                      "inArguments": [
                                        {"contactKey": "{{Contact.Key}}"},
                                        {"first_name": "{{Contact.Attribute.bg_marketing_test.first_name}}"},
                                        {"last_name": "{{Contact.Attribute.bg_marketing_test.last_name}}"},
                                        {"email": "{{Contact.Attribute.bg_marketing_test.email}}"},
                                        {"phone": "{{Contact.Attribute.bg_marketing_test.phone}}"}
                                      ],
                                      "url": "https://enz3kkxiw5fpq.x.pipedream.net/"
                                    }
                                  },
                                  "configurationArguments": {
                                    "publish": {
                                      "url": "https://enz3kkxiw5fpq.x.pipedream.net/"
                                    }
                                  },
                                  "metaData": {
                                    "icon": "https://koneko-mc.herokuapp.com/icon.png",
                                    "category": "message",
                                    "iconSmall": null,
                                    "statsContactIcon": null,
                                    "original_icon": "icon.png",
                                    "isConfigured": true,
                                    "configurationDisabled": true
                                  },
                "editable": true,
                "outcomes": [
                  {
                    "key": "ba80c3b0-7c5c-4c83-a582-5d230f242910",
                    "next": "WAITBYDURATION-2",
                    "arguments": {},
                    "metaData": {
                      "invalid": false
                    }
                  }
                ],
                "errors": []
              }; */

//Startup Sequence
connection.trigger('ready');

connection.on('initActivity', function(data) {
	document.getElementById('configuration').value = JSON.stringify(data, null, 2);
});

// Save Sequence
connection.on('clickedNext', function() {

    // Getting and parsing content of textarea
	var testMSG = document.getElementById('message').value;
	// Adding new value to payload
	configFile['arguments'].execute.inArguments = [{'SMSmessage': testMSG}];
    //Saving configuration
	connection.trigger('updateActivity', configFile);
});
