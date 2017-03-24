var assert = require('chai').assert;
var Movie = require('../models/moviesModel');

describe('Movie', function() {

  it('should be invalid if name is empty', function(done) {
      var movie = new Movie();

      movie.validate(function(err) {
          expect(err.errors.name).to.exist;
          done();
      });
  });

});
