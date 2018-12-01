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


    axios.post('/getInfo', {
        capa_activa,
        wkt,
        resolucion: Math.pow(resolucion, -1)
    }).then(res => {
        var elementos = res.data;
        var table = "";
        if (elementos.length == 0) {
            table += "<p>No se ha seleccionado ningún elemento</p>"
        } else {
            table += "<div class='table-responsive'><table class ='table table-striped table-bordered'>"
            table += "<thed><tr>"
            for (var x in elementos[0]) {
                table += "<th>" + x + "</th>"
            }
            table += "</tr></thed>"
            table += "<tbody>"
            for (let i = 0; i < elementos.length; i++) {
                table += "<tr>"
                const element = elementos[i];
                for (var x in element) {
                    table += "<td>" + element[x] + "</td>"
                }
                table += "</tr>"
            }
            table += "</tbody>"
            table += "</table></div>"
        }
        document.querySelector("#info").innerHTML = table;
        showInfo()
    })

};

function showInfo() {
    jQuery(function ($) {
        $("#infoModal").modal('show')
    })
}