var data = JSON.parse(document.querySelector('#data').value);

// Defino las capas del mapa
var tileLayer = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url: 'https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoicm9kcmlnb2NhbGdhcm8iLCJhIjoiY2pubHN1dm9wMDQ2NDNwcXMxeDgyYzF2YyJ9.ofn6b3t0tEpA4pH1WFplIw'
    })
});

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

layers = [tileLayer, ...layers];

// Defino la vista del mapa
var view = new ol.View({
    projection: 'EPSG:4326',
    center: [-59, -30],
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