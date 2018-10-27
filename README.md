# GIS-TPFinal

Para ejecutar el proyecto ese necesario tener creada una base de datos llamada "tpfinal".

Además en la carpeta config se debe agregar un archivo url_ogc.js con las siguientes líneas:

var url_ogc = 'http://localhost/cgi-bin/qgis_mapserv.fcgi?map=/home/{user}/{ubicación_del_proyecto}/qgis_project/tpfinal.qgs'
module.exports = url_ogc;
