var http = require('http');

var req = http.get("http://www.omdbapi.com/?t=Winter's+Bone", (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });

}).on('error', (e) => {
  console.error(e);
});
