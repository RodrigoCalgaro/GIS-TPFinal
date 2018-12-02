var express = require('express');
var router = express.Router();
var db = require('../config/db-config');
var data = require('../config/data');
const transformation = require('transform-coordinates');
const transform = transformation('EPSG:3857', 'EPSG:4326');

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
  }).catch(err => console.log(err)
) */


/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', {
    data
  })
});


/* GET info  */
router.post('/getInfo', function (req, res) {
  var coordinates = req.body.coordinate;
  var wkt;

  if (coordinates.length == 2) {
    //es un punto [lon,lat]
    coordinates = transform.forward({ x: coordinates[0], y: coordinates[1] })
    wkt = 'POINT(' + coordinates.x + ' ' + coordinates.y + ')';
  } else {
    //es un poligono en la forma [ [ [lon,lat],[lon,lat],....] ]
    wkt = 'POLYGON((';
    for (var i = 0; i < coordinates[0].length - 1; i++) {
      coordinates[0][i] = transform.forward({ x: coordinates[0][i][0], y: coordinates[0][i][1] })
      wkt += coordinates[0][i].x + ' ' + coordinates[0][i].y + ',';
    }
    wkt += coordinates[0][0].x + ' ' + coordinates[0][0].y + '))'
  }

  db.any("SELECT * FROM " + req.body.capa_activa +
    " WHERE st_intersects(" +
    " ST_geomfromtext('" + wkt + "' , 4326), geom)"
  ).then(info => {
    res.send(info);
  }).catch(err => {
    console.log(err);
  })
})

/* Add point to puntos_de_interes layer */
router.post("/addPoint", function (req, res) {
  var nombre = req.body.nombre;
  var descripcion = req.body.descripcion;
  var coordenadas = req.body.coordenadas;
  var fecha = req.body.fecha;
  var wkt;

  coordenadas = coordenadas.split(",");
  coordenadas[0] = parseFloat(coordenadas[0]);
  coordenadas[1] = parseFloat(coordenadas[1]);
  coordenadas = transform.forward({ x: coordenadas[0], y: coordenadas[1] })
  wkt = 'POINT(' + coordenadas.x + ' ' + coordenadas.y + ')';
  db.any("INSERT INTO puntos_de_interes(nombre, descrip, relevado, geom)" +
    " VALUES('"+ nombre + "' , '"+ descripcion +"' , '"+ fecha +"' , ST_GeomFromText('"+ wkt +"', 4326));"
  ).then(result => {
    res.send({ agregado: true });
  }).catch(err => {
    console.log(err);
  })
})

module.exports = router;