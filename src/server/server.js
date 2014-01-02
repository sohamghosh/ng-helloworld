var express = require("express");
var http = require("http");
var app = express();

app.set('port', 3000);

app.get('/demo', function(req, res){
    res.send('Hello World');
});

http.createServer(app).listen(app.get("port"), function() {
	console.log("Express server listening on port " + app.get("port"));
});