var express = require('express');
var router = express.Router();

router.get('/time', function (req, res) {
  var now = new Date();
  var time = {
    timestamp: Date.now(),
    year: now.getFullYear()
  };
  res.json(time);
});

module.exports = router;
