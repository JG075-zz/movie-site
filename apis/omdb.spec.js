var assert = require('assert');
var Omdbapi = require('./omdb');

describe('Omdb', function() {
  var omdbapi = new Omdbapi();

  it('should instatiate a new object', function() {
    assert.ok(omdbapi instanceof Omdbapi);
  });
});
