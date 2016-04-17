var express = require('express');
var app = express();
var index = require('./routes/index.js');
var mongoose = require('mongoose');
var ticketModel = require('../models/ticket.js');
var bodyParser = require('body-parser');
var ticketRouter = require('./routes/ticketRouter.js');
// body-parser changes Mongo to Json I think?
// var ticketRouter = require('./routes/ticketRouter.js');

app.use(bodyParser.json());
app.use(express.static('server/public'));
app.use('/', index);
app.use('/ticketData', ticketRouter);

var mongoURI = "mongodb://localhost:27017/ticketMaker";
var mongodb = mongoose.connect(mongoURI).connection;

mongodb.on('error', function(err){
  console.log('MongoDB connection err', err);
});

mongodb.once('open', function(err){
  console.log('MongoDB connection is open');
});

var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log("Listening on port", port);
});
