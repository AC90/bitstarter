var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');
var buffer1 = new Buffer( fs.readFileSync('index.html') );

//buffer1.write( fs.readFileSync('index.html') )
//buffer1.write( "monkey 1" )

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
   response.send(
     buffer1.toString('utf-8')
   );
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
