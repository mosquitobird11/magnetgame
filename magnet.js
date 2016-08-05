var canvas;
var ctx;

$('#mgame').attr('width',SIZE);
$('#mgame').attr('height',SIZE);

speed = 30;

//Initialize function
function init(){
    calcMode();
    canvas = $('#mgame')[0];
    if (canvas.getContext){
        ctx = canvas.getContext('2d');
        draw();
        simulate();
    }
}

function simulate(){
    setTimeout(simulate,speed);
}

function draw(){
    //recall function
    setTimeout(draw,10);
}

$('#cgame').on('mousedown',function(e){
    var canvas = document.getElementById('cgame');
    var rect = canvas.getBoundingClientRect();
    var mx = Math.floor(Math.floor(e.clientX - rect.left)/CELL_SIZE);
    var my = Math.floor(Math.floor(e.clientY - rect.top)/CELL_SIZE);
});