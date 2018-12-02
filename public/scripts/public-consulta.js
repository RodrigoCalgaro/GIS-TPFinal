var consultar = function (coordinate) {
    if (capa_activa == "") {
        document.querySelector("#info").innerHTML = "<p>No hay ninguna capa activa</p>";
        showInfo()
    } else {
      axios.post('/getInfo', {
            capa_activa,
            coordinate
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
    }
};

function showInfo() {
    jQuery(function ($) {
        $("#infoModal").modal('show')
    })
}