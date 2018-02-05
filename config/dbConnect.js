var mongoose = require('mongoose');
var url='mongodb://admin:admin@ds115758.mlab.com:15758/tejadb';
mongoose.connect(url);

var db = mongoose.connection;
db.on('error', function callback(err) {console.log("Database connection failed. Error: " + err);});
db.once('open', function callback() {console.log("Database connection successful.");});


