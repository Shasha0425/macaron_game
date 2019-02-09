var orm = require('../config/orm.js');

var macaroon = {
  all: function(cb){
    orm.all('macaroons', function(res) {
      cb(res);
    })
  },

  update: function(id,cb){
      orm.update('macaroons',id,cb);
  },

  create: function(name,cb){
      orm.create('macaroons', name, cb);
  }
}

module.exports = macaroon;
