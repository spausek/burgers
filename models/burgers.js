
var orm = require("../config/orm.js");

var burger = {
  all: (cb) => {
    orm.all('burgers', (res) => {
      cb(res);
    });
  },

  create: (cols, vals, cb) => {
    orm.create('burgers', cols, vals, function(res) {
      cb(res);
    });
  },
  update: (objColVals, condition, cb) => {
    orm.update('burgers', objColVals, condition, (res) => {
      cb(res);
      console.log(res);
    });
  },
  delete: (condition, cb) => {
    orm.delete('burgers', condition, (res) => {
      cb(res);
    });
  }
};


module.exports = burger;