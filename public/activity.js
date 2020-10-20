var connection = new Postmonger.Session();

//Startup Sequence
connection.trigger('ready');

connection.on('initActivity', function(data) {
    console.log(JSON.stringify(data, null, 2));
	document.getElementById('configuration').value = JSON.stringify(data, null, 2);
});

// Save Sequence
connection.on('clickedNext', function() {
	var configuration = JSON.parse(document.getElementById('configuration').value);
	console.log(configuration);
	connection.trigger('updateActivity', configuration);
});