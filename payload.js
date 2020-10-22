    //Getting and parsing content of textarea
    var testMSG = "Test";
    var payload = {
                    "name": "",
                    "id": null,
                    "key": "REST-2",
                    "type": "REST",
                    "arguments": {},
                    "configurationArguments": {},
                    "metaData": {
                      "icon": "https://koneko-mc.herokuapp.com/icon.png",
                      "category": "custom",
                      "iconSmall": null,
                      "statsContactIcon": null,
                      "original_icon": "icon.png"
                    },
                    "editable": true,
                    "outcomes": [
                      {
                        "next": "WAITBYDURATION-2",
                        "metaData": {
                          "invalid": false
                        }
                      }
                    ],
                    "errors": null
                  };

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

    console.log(payload);