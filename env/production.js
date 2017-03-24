module.exports = {
  mongodb: {
    url: 'ds055772.mlab.com:55772',
    uname: 'JG075',
    pwd: 'Hammers01!',
    db: 'movie-site',
    connectString: `mongodb://${this.uname}:${this.pwd}@${this.url}/${this.db}`
  },
};
