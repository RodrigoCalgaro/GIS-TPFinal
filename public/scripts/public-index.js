var capa_activa = '';
var tipo_control = 'navegacion';

function changeVisibility(checkbox, id) {
    layers[id].setVisible(checkbox.checked);
    if (checkbox.checked && tipo_control == 'consulta') {
        capa_activa = checkbox.id;
        setAllInvisible(id);
    }
}

function setAllInvisible(id) {
    for (let index = 1; index < layers.length; index++) {
        const element = layers[index];
        if (index != id) {
            element.setVisible(false)
        }
    }
}

layers.forEach(layer => {
    layer.on('change:visible', function () {
        var visible = this.getVisible();
        /* var checkbox = document.getElementById(layer.values_.source.params_.LAYERS);
        if (visible !== checkbox.checked) {
            checkbox.checked = visible;
        } */
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
    tipo_control = el.value;
    console.log(tipo_control);
    /* switch (tipo_control) {
        case "consulta": {
            //Seteo todas las capas como no visible, para que la consulta se haga sobre una sola capa;
            capa_activa = ''
            setAllInvisible(0);


            //agrego la interaccion del dragbox
            //la cual tiene precedencia sobre las otras
            map.addInteraction(selectInteraction);

            //subscribo una funcion al evento click del mapa
            map.on('click', clickEnMapa);
        }
        case "navegacion": {
            //la remuevo...
            map.removeInteraction(selectInteraction);
            //remueveo la subscripcion de la funcion al evento click del mapa
            map.un('click', clickEnMapa);
        }
        case "medicion" : {
            medir()
        }
    }
 */

    if (el.value == "consulta") {
        view = new ol.View({
            projection: 'EPSG:4326',
            //projection: 'EPSG:3857',
            center: [-59, -30],
            //center: [-6674367, -3155350],
            zoom: 5
        })

        map.setView(view)

        //Seteo todas las capas como no visible, para que la consulta se haga sobre una sola capa;
        capa_activa = ''
        setAllInvisible(0);


        //agrego la interaccion del dragbox
        //la cual tiene precedencia sobre las otras
        map.removeInteraction(draw);
        map.addInteraction(selectInteraction);

        //subscribo una funcion al evento click del mapa
        map.un('pointermove', pointerMoveHandler);
        map.on('click', clickEnMapa);

    } else if (el.value == "navegacion") {
        view = new ol.View({
            projection: 'EPSG:4326',
            //projection: 'EPSG:3857',
            center: [-59, -30],
            //center: [-6674367, -3155350],
            zoom: 5
        })

        map.setView(view)


        //la remuevo...
        map.removeInteraction(selectInteraction);
        map.removeInteraction(draw);
        //remueveo la subscripcion de la funcion al evento click del mapa
        map.un('pointermove', pointerMoveHandler);
        map.un('click', clickEnMapa);

    } else if (el.value == "medicion") {
        view = new ol.View({
            //projection: 'EPSG:4326',
            projection: 'EPSG:3857',
            //center: [-59, -30],
            center: [-6567849.96, -3503549.84],
            zoom: 5
        })

        map.setView(view)


        map.removeInteraction(selectInteraction);
        map.un('click', clickEnMapa);

        map.on('pointermove', pointerMoveHandler);

        map.getViewport().addEventListener('mouseout', function () {
            helpTooltipElement.classList.add('hidden');
        });

        addInteraction();
    }
};