require( './config/dbConnect' );
var express = require('express');
var mongodb = require('mongodb');
var mongoose = require('mongoose');

var app = express();

require('./routes')(app);

var server = app.listen(8080, "0.0.0.0", function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port)
});


