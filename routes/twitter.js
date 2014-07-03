
var Twitter = require('twit');
var express = require('express');
var config = require('../config');
var router = express.Router();

var twitter = new Twitter({
  consumer_key: config.get('twitter_consumer_key'),
  consumer_secret: config.get('twitter_consumer_secret'),
  access_token: config.get('twitter_access_token'),
  access_token_secret: config.get('twitter_access_token_secret')
});

router.get('/timeline/:username/:count/:max_id?', function(req, res) {
  twitter.get('/statuses/user_timeline', {
    screen_name: req.params.username,
    count: req.params.count,
    max_id: req.params.max_id
  }, function(err, data, response) {
    if (err) res.json({error: err});
    else res.json({success: data});
  });
});

module.exports = router;