var data = JSON.parse(document.querySelector('#data').value);

// Defino las capas del mapa
var tileLayer = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url: 'https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoicm9kcmlnb2NhbGdhcm8iLCJhIjoiY2pubHN1dm9wMDQ2NDNwcXMxeDgyYzF2YyJ9.ofn6b3t0tEpA4pH1WFplIw'
    })
});

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
    //projection: 'EPSG:4326',
    projection: 'EPSG:3857',
    //center: [-59, -30],
    center: [-6674367, -3155350],
    zoom: 5
})

// Defino el mapa
var map = new ol.Map({
    controls: ol.control.defaults().extend([
        new ol.control.FullScreen()
      ]),
    //interactions: [],
    layers,
    target: 'map',
    view
})