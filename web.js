var express = require('express');
var fs = require('fs');
var infile = "index.html";

var app = express.createServer(express.logger());

var msg = fs.readFileSync(infile).toString();

app.get('/', function(request, response) {
  response.send(msg);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

