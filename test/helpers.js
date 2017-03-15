function Helpers() {}

Helpers.prototype.isObject = function (obj) {
  return obj === Object(obj);
};

module.exports = new Helpers();
