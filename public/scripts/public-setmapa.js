var data = JSON.parse(document.querySelector('#data').value);

// Defino las capas del mapa
var tileLayer = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url: 'https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoicm9kcmlnb2NhbGdhcm8iLCJhIjoiY2pubHN1dm9wMDQ2NDNwcXMxeDgyYzF2YyJ9.ofn6b3t0tEpA4pH1WFplIw'
    })
});

// Measure Config
var raster = new ol.layer.Tile({
    source: new ol.source.OSM()
});

/* var proj = new ol.proj.Projection({
    code: 'EPSG:4326',
    units: 'm',
    extent: [-180.0000, -90.0000, 180.0000, 90.0000]
}) */

var source = new ol.source.Vector();

var vector = new ol.layer.Vector({
    source: source,
    style: new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 255, 255, 0.2)'
        }),
        stroke: new ol.style.Stroke({
            color: '#ffcc33',
            width: 2
        }),
        image: new ol.style.Circle({
            radius: 7,
            fill: new ol.style.Fill({
                color: '#ffcc33'
            })
        })
    })
});

var sketch;
var helpTooltipElement;
var helpTooltip;
var measureTooltipElement;
var measureTooltip;
var continuePolygonMsg = 'Click to continue drawing the polygon';
var continueLineMsg = 'Click to continue drawing the line';
var pointerMoveHandler = function (evt) {
    if (evt.dragging) {
        return;
    }

    var helpMsg = 'Click to start drawing';

    if (sketch) {
        var geom = (sketch.getGeometry());
        if (geom instanceof ol.geom.Polygon) {
            helpMsg = continuePolygonMsg;
        } else if (geom instanceof ol.geom.LineString) {
            helpMsg = continueLineMsg;
        }
    }

    helpTooltipElement.innerHTML = helpMsg;
    helpTooltip.setPosition(evt.coordinate);

    helpTooltipElement.classList.remove('hidden');

};

// End Measure config


var layers = [];
data.map(element => {
    var layer;
    layer = new ol.layer.Image({
        title: element.nombre,
        visible: element.visible,
        source: new ol.source.ImageWMS({
            url: element.url_ogc,
            params: {
                LAYERS: element.capa
            }
        })
    })
    layers.push(layer);
})

layers = [tileLayer, ...layers, vector];

// Defino la vista del mapa
var view = new ol.View({
    projection: 'EPSG:4326',
    //projection: 'EPSG:3857',
    center: [-59, -30],
    //center: [-6674367, -3155350],
    zoom: 5
})

// Defino el mapa
var map = new ol.Map({
    //interactions: [],
    layers,
    target: 'map',
    view
})

// Para visibilizar la escala en el mapa
var scaleLineControl = new ol.control.ScaleLine();
map.addControl(scaleLineControl);

var mousePositionControl = new ol.control.MousePosition({
    coordinateFormat: ol.coordinate.createStringXY(4),
    projection: 'EPSG:4326',
    className: 'custom-mouse-position',
    target: document.getElementById('mouse-position'),
    undefinedHTML: '&nbsp;'
});
map.addControl(mousePositionControl);

