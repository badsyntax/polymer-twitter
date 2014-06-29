var util = require('util');
var Twitter = require('twit');
var nconf = require('nconf');
var express = require('express');
var app = express();

 nconf
 .argv()
 .env()
 .file({ file: 'config/app.json' });

var twitter = new Twitter({
  consumer_key: nconf.get('twitter_consumer_key'),
  consumer_secret: nconf.get('twitter_consumer_secret'),
  access_token: nconf.get('twitter_access_token'),
  access_token_secret: nconf.get('twitter_access_token_secret')
});

app.use('/', express.static('web'));

app.get('/timeline/:username/:count/:max_id?', function(req, res, next) {
  twitter.get('/statuses/user_timeline', { 
    screen_name: req.params.username,
    count: req.params.count,
    max_id: req.params.max_id
  }, function(err, data, response) {
    if (err) res.json({error: err});
    else res.json({success: data});
  });
});

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});