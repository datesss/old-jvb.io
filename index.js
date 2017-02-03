var path = require('path');
var express = require('express');

var app = express.createServer();

var staticPath = path.join(__dirname, '/build');
app.use(express.static(staticPath));

app.listen(3000, function() {
  console.log('listening');
});
