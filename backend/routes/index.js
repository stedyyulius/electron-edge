var express = require('express');
var router = express.Router();
var edge = require('edge-js');

// var cCode = require('../ClouReaderAPI.dll');
var mycsharpcode = function () {/*
   .... the C# goes here
*/};
/* GET home page. */
router.get('/', function(req, res, next) {
  var hello = edge.func('SampleCoded.cs')
  res.send(hello);
});

module.exports = router;
