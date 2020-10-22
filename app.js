var express = require('express');
var app = express();
var port = process.env.PORT || 8080;


//Serve static files
app.use(express.static('public'));

console.log('Served: http://localhost:' + port);
app.listen(port);