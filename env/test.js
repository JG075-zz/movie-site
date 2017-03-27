module.exports = {
  mongodb: {
    db: 'local',
    connectString: function() { return `mongodb://localhost/${this.db}`;}
  }
};
