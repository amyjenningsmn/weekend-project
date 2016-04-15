var express = require('express');
var path = require('path');
var router = express.Router();
var app = express();
var ticket = require('ticket');

router.get('/', function(request, response){
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
});
console.log(ticket);
