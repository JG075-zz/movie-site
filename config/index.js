var configValues = require('./config');

module.exports = {

  getDbConnectString: function() {
    return 'mongodb://' + configValues.uname + ':' + configValues.pwd +
    '@ds055772.mlab.com:55772/movie-site';
  }

};
