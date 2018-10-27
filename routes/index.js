var express = require('express');
var router = express.Router();
var db = require('../config/db-config')
var data = require('../config/data')

/* Query Example
db.any("SELECT table_name" +
    " FROM information_schema.tables" +
    " WHERE table_schema='public'" +
    " AND table_type='BASE TABLE' " +
    " AND table_name <> 'spatial_ref_sys';"
  ).then(data => {
    
    res.render('index', {
      data
    });
  }).catch(err => console.log(err)) */

  
/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', {
    data
  })
});


/* GET fclass of table */
router.get('/getInfo/:wkt/:resolucion', function (req, res) {
  
})


module.exports = router;