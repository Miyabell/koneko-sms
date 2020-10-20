var connection = new Postmonger.Session();
// Getting configuration file
//var configFile = require('./demo-data/activity.json');
//var configuration = JSON.stringify(configFile);

//Startup Sequence
connection.trigger('ready');

connection.on('initActivity', function(data) {
    console.log(JSON.stringify(data, null, 2));
	document.getElementById('configuration').value = JSON.stringify(data, null, 2);
});

// Save Sequence
connection.on('clickedNext', function() {
	var configuration = JSON.parse(document.getElementById('configuration').value);
	connection.trigger('updateActivity', configuration);
});