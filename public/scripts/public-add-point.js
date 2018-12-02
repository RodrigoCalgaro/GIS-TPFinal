function addPoint(event) {
    var posicion = event.coordinate
    document.querySelector("#addPointModal").querySelector("#coordenadas").value = posicion;
    document.querySelector("#addPointModal").querySelector("#fecha").value = getFecha();
    if (tipo_control == "agregar") {
        jQuery(function ($) {
            $("#addPointModal").modal('show')
        })
    }
}

function getFecha() {
    let date = new Date();
    var dia = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate();
    var mes = ((date.getMonth() + 1) < 10) ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
    var año = date.getFullYear();

    var fecha = año + "-" + mes + "-" + dia;
    return fecha
}

function submitAddPoint() {
    var nombre = document.querySelector("#addPointModal").querySelector("#nombre").value;
    var descripcion = document.querySelector("#addPointModal").querySelector("#descripcion").value;
    var coordenadas = document.querySelector("#addPointModal").querySelector("#coordenadas").value;
    var fecha = document.querySelector("#addPointModal").querySelector("#fecha").value;
    axios.post("/addPoint", {
        nombre,
        descripcion,
        coordenadas,
        fecha
    }).then(res => {
        coordenadas = coordenadas.split(",");
        coordenadas[0] = parseFloat(coordenadas[0]);
        coordenadas[1] = parseFloat(coordenadas[1]);
        map.getView().setCenter(coordenadas);
        map.getView().setZoom(15);
        layers[48].setVisible(true);
        layers[48].setVisible(false);
        layers[48].setVisible(true);

        $(function () {
            $('#addPointModal').modal('toggle');
        });
    })
}

