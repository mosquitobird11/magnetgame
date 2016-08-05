//Html globals
var canvas;
var ctx;

const WIDTH = 450;
const HEIGHT = 600;

$('#cgame').attr('width',WIDTH);
$('#cgame').attr('height',HEIGHT);

//Global objects
var player = new Ball(225,400);

//Colors
var c_player = "rgba(150,150,150,0.5)";

//Game Settings
var speed = 30;

//Initialize function
function init(){
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

function drawWhite(){
	ctx.beginPath();
	ctx.rect(0,0, WIDTH, HEIGHT);
	ctx.fillStyle = "white";
	ctx.fill();
}

function draw(){
	drawWhite();
	drawBackground();
	player.draw();
    //recall function
    setTimeout(draw,10);
}

function drawBackground(){
	ctx.strokeStyle = "#CCCCCC";
	for (var i = 0; i < 100; i++) {
		ctx.beginPath();
		ctx.moveTo(0,6*i);
		ctx.lineTo(WIDTH,6*i);
		ctx.stroke();
	}
	for (var i = 0; i < 75; i++) {
		ctx.beginPath();
		ctx.moveTo(6*i,0);
		ctx.lineTo(6*i,HEIGHT);
		ctx.stroke();
	}
}

$('#cgame').on('mousedown',function(e){
    var canvas = document.getElementById('cgame');
    var rect = canvas.getBoundingClientRect();
    var mx = Math.floor(Math.floor(e.clientX - rect.left)/CELL_SIZE);
    var my = Math.floor(Math.floor(e.clientY - rect.top)/CELL_SIZE);
});

function Ball(xpos,ypos){
	this.x = xpos;
	this.y = ypos;
	this.r = 25;

	this.draw = function(){
		ctx.fillStyle = c_player;
		ctx.moveTo(this.x,this.y);
		ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
		ctx.fill();
	}
}




init();