var express = require('express');
var router = express.Router();

router.get('/hello', function (req, res) {
  var html = '<h1>Hello ' +Date.now();
  html += '<img src="http://localhost:3000/static/logo.png" />';
  html += '</h1>';
  res.send(html);
});

router.get('/test', function (req, res) {
  var html = '<h1>Test ' +Date.now()+'</h1>';
  html += '<button id="press">Press</button>';
  html += '<p id="p">Texto de relleno</p>';
  html += '<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>'
  html += '<script src="http://localhost:3000/static/test.js"></script>'
  res.send(html);
});

module.exports = router;
