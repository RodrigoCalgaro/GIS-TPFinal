// Para visibilizar la escala en el mapa
var scaleLineControl = new ol.control.ScaleLine();
map.addControl(scaleLineControl);

var mousePositionControl = new ol.control.MousePosition({
    coordinateFormat: ol.coordinate.createStringXY(47),
    projection: 'EPSG:3857',
    className: 'custom-mouse-position',
    target: document.getElementById('mouse-position'),
    undefinedHTML: null
});

map.addControl(mousePositionControl);