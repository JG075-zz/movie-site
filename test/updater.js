var assert = require('chai').assert;
var sinon = require('sinon');
var Updater = require('../lib/updater');
var mongoose = require('mongoose');
var updater = new Updater();

describe('Updater', function() {

  it('should instatiate a new object', function() {
    assert.isObject(updater);
  });

  describe('#updaterAll()', function () {

    it('should connect to the database', function(done) {
      updater.updateAll(function(){
        assert.strictEqual(1, mongoose.connection.readyState);
        done();
      });
    });

  });

});
