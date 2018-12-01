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


/* GET info  */
router.post('/getInfo', function (req, res) {
  console.log(req.body);
  console.log(req.body.wkt)
  db.any("SELECT * FROM " + req.body.capa_activa +  
        " WHERE st_intersects("+
        " ST_geomfromtext('"+ req.body.wkt +"' , 4326), geom)"
  ).then(info => {
    res.send(info);
  }).catch(err => {
    console.log(err);
  }) 
})


module.exports = router;