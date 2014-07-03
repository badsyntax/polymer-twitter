// var favicon = require('static-favicon');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var config = require('./config');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/twitter', require('./routes/twitter'));

var server = app.listen(config.get('port'), function() {
  console.log('Listening on port %d', server.address().port);
});
