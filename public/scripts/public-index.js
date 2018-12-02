var capa_activa = '';
var tipo_control = 'navegacion';

function changeVisibility(checkbox, id) {
    layers[id].setVisible(checkbox.checked);
    if (checkbox.checked) {
        document.querySelector("#leyend_" + checkbox.id).classList.remove("d-none");
    } else {
        document.querySelector("#leyend_" + checkbox.id).classList.add("d-none");
    }

    if (checkbox.checked && tipo_control == 'consulta') {
        capa_activa = checkbox.id;
        setAllInvisible(id);
    }
}

function setAllInvisible(id) {
    for (let index = 1; index < layers.length - 1; index++) {
        const element = layers[index];
        if (index != id) {
            element.setVisible(false);
            document.querySelector("#leyend_" + data[index - 1].capa).classList.add("d-none")
        }
    }
}

layers.forEach(layer => {
    layer.on('change:visible', function () {
        var visible = this.getVisible();
        if (layer.type != "VECTOR") {
            var checkbox = document.getElementById(layer.values_.source.params_.LAYERS);
            if (visible !== checkbox.checked) {
                checkbox.checked = visible;
            }
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

    if (el.value == "consulta") {
        //Seteo todas las capas como no visible, para que la consulta se haga sobre una sola capa;
        capa_activa = ''
        setAllInvisible(0);

        map.removeInteraction(draw);
        map.addInteraction(selectInteraction);

        map.un('click');
        map.un('pointermove', pointerMoveHandler);
        map.on('click', clickEnMapa);

    } else if (el.value == "navegacion") {
        map.removeInteraction(selectInteraction);
        map.removeInteraction(draw);

        map.un('click');
        map.un('pointermove', pointerMoveHandler);
        map.un('click', clickEnMapa);

    } else if (el.value == "medicion") {
        map.removeInteraction(selectInteraction);
        map.un('click');
        map.un('click', clickEnMapa);

        map.on('pointermove', pointerMoveHandler);

        map.getViewport().addEventListener('mouseout', function () {
            helpTooltipElement.classList.add('hidden');
        });

        addInteraction();
    } else if (el.value == "agregar") {
        map.removeInteraction(selectInteraction);
        map.removeInteraction(draw);

        map.un('pointermove', pointerMoveHandler);
        map.un('click', clickEnMapa);

        map.on('click', function (event) {
            addPoint(event)
        });
    }
};


//  Checkboxes search filter
(function ($) {
    $(".keyword").on('keyup', function (e) {
        var $this = $(this);
        var exp = new RegExp($this.val(), 'i');
        $(".capas-list li label").each(function () {
            var $self = $(this);
            if (!exp.test($self.text())) {
                $self.parent().hide();
            } else {
                $self.parent().show();
            }
        });
    });
})(jQuery);

//  Ver/Ocultar controles div
function toggleDivControles(){
    document.querySelector("#caret-up").classList.toggle("d-none")
    document.querySelector("#caret-down").classList.toggle("d-none")
    document.querySelector("#controles").classList.toggle("d-none")
}