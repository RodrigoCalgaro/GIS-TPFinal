var hitTolerance;

var statusElement = document.getElementById('status');

map.on('singleclick', function (e) {
    var hit = false;
    map.forEachFeatureAtPixel(e.pixel, function () {
        hit = true;
    }, {
            hitTolerance: hitTolerance
        });
    /* if (hit) {
        style.getStroke().setColor('green');
        statusElement.innerHTML = '&nbsp;A feature got hit!';
    } else {
        style.getStroke().setColor('black');
        statusElement.innerHTML = '&nbsp;No feature got hit.';
    } 
    feature.changed(); */
});

var selectHitToleranceElement = document.getElementById('hitTolerance');
var circleCanvas = document.getElementById('circle');

var changeHitTolerance = function () {
    hitTolerance = parseInt(selectHitToleranceElement.value, 10);

    var size = 2 * hitTolerance + 2;
    circleCanvas.width = size;
    circleCanvas.height = size;
    var ctx = circleCanvas.getContext('2d');
    ctx.clearRect(0, 0, size, size);
    ctx.beginPath();
    ctx.arc(hitTolerance + 1, hitTolerance + 1, hitTolerance + 0.5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
};

selectHitToleranceElement.onchange = changeHitTolerance;
changeHitTolerance();