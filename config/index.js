var nconf = require('nconf');

// load config
nconf.argv().env().file({
  file: './config/app.json'
});

module.exports = nconf;