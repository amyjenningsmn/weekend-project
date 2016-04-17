var express = require('express');
var path = require('path');
var router = express.Router();
var app = express();


router.get('/', function(request, response){
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
});


module.exports = router;
