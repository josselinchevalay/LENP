// DB 
var low = require('lowdb');
low.mixin(require('underscore-db'));
var db = low('db.json');




module.exports.Db = db;