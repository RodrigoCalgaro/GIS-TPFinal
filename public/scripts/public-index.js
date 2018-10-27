function changeVisibility(checkbox, id) {
    layers[id].setVisible(checkbox.checked);
}

layers.forEach(layer => {
    layer.on('change:visible', function () {
        var visible = this.getVisible();
        var checkbox = document.getElementById(layer.values_.source.params_.LAYERS);
        if (visible !== checkbox.checked) {
            checkbox.checked = visible;
        }
    });
})

// Interacción
var selectInteraction = new ol.interaction.DragBox({
    condition: ol.events.condition.always, //noModifierKeys
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: [0, 0, 255, 1]
        })
    })
});


selectInteraction.on('boxend', function (evt) {
    //this: referencia al selectInteraction
    console.log('boxend', this.getGeometry().getCoordinates());
    consultar(selectInteraction.getGeometry().getCoordinates());

});

//function que va a realizar la peticion de la consulta
var consultar = function (coordinate) {
    if (coordinate.length == 2) {
        //es un punto [lon,lat]
        var wkt = 'POINT(' + coordinate[0] + ' ' + coordinate[1] + ')';
    } else {
        //es un poligono en la forma [ [ [lon,lat],[lon,lat],....] ]
        var wkt = 'POLYGON((';
        for (var i = 0; i < coordinate[0].length - 1; i++) {
            wkt += coordinate[0][i][0] + ' ' + coordinate[0][i][1] + ',';
        }
        wkt += coordinate[0][0][0] + ' ' + coordinate[0][0][1] + '))'
    }
    var resolucion = map.getView().getResolution()
    
    document.querySelector("#info").innerHTML = '<p>Coordenadas: '+ wkt +'</p><br><br><p>Resolucion: ' + resolucion +'</p>' ;
    showInfo()
    
    //window.open('consulta.php?wkt=' + wkt + '&res=' + resolucion);
    //return;

};

function showInfo() {
    jQuery(function ($) {
        $("#infoModal").modal('show')
    })
}

var selectInteraction = new ol.interaction.DragBox({
    condition: ol.events.condition.always, //noModifierKeys
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: [0, 0, 255, 1]
        })
    })
});


selectInteraction.on('boxend', function (evt) {
    consultar(selectInteraction.getGeometry().getCoordinates());
});

//funcion para el evento click en el mapa
var clickEnMapa = function (evt) {
    consultar(evt.coordinate);
};



//function para "cambiar" de interaction en function del value de los radios
var seleccionarControl = function (el) {
    if (el.value == "consulta") {
        //agrego la interaccion del dragbox
        //la cual tiene precedencia sobre las otras
        map.addInteraction(selectInteraction);

        //subscribo una funcion al evento click del mapa
        map.on('click', clickEnMapa);

    } else if (el.value == "navegacion") {
        //la remuevo...
        map.removeInteraction(selectInteraction);
        //remueveo la subscripcion de la funcion al evento click del mapa
        map.un('click', clickEnMapa);
    }
};