var assert = require('chai').assert;
var Updater = require('../lib/updater');

var updater = new Updater();

describe('Updater', function() {

  it('should instatiate a new object', function() {
    assert.isObject(updater);
  });

});
