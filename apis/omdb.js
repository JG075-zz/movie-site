var http = require('http');

function Omdbapi() {}

Omdbapi.prototype.request = function (url, fn) {
  http.get(url, (res) => {
    res.on('data', (data) => {
      fn(data);
    });

  }).on('error', (e) => {
    throw e;
  });
};

Omdbapi.prototype.get = function (title, fn) {
  this.request('http://www.omdbapi.com/?t=' + title, (data) => {
    fn(JSON.parse(data.toString('utf-8')));
  });
};

module.exports = Omdbapi;
