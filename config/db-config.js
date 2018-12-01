var pgp = require('pg-promise')();

var cn = {
  host: 'localhost',
  port: 5432,
  user: 'user',
  password: 'user',
  database: 'tpfinal'
}

var db = pgp(cn)

module.exports = db;