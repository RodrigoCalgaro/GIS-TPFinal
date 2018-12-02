var pgp = require('pg-promise')();

var cn = {
  host: '127.0.0.1',
  port: 5432,
  user: 'user',
  password: 'user',
  database: 'tpfinal'
}

var db = pgp(cn)

module.exports = db;