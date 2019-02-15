var express = require('express');
var bodyParser = require('body-parser');
var api = require('./routes/api');
var dynamic = require('./routes/dynamic');

var app = express();
var port = 5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use('/static', express.static('assets'));
app.use('/api', api);
app.use('/', dynamic);

app.listen(port, function () {
  console.log('API REST on localhost:'+ port);
});
