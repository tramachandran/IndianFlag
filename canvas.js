

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Flag post
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineWidth = 2;
ctx.lineTo(50, 550);
ctx.stroke();
ctx.closePath();

// Saffron rect

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.fillStyle = "#FF9933";
ctx.fillRect(51, 50, 400, 75);
ctx.closePath();

// white leave Empty

// ctx.beginPath();
// ctx.strokeRect(51, 125, 400, 75);
// ctx.closePath();

// green 

ctx.beginPath();
ctx.fillStyle = "#138808";
ctx.fillRect(51, 200, 400, 75);
ctx.closePath();

// flag right border
ctx.beginPath();
ctx.moveTo(451, 50);
ctx.lineTo(451, 275);
ctx.stroke();
ctx.closePath();

// Flag top border
ctx.beginPath();
ctx.moveTo(51, 50);
ctx.lineTo(451, 50);
ctx.stroke();
ctx.closePath();

//Flag bottom border
ctx.beginPath();
ctx.moveTo(50, 275);
ctx.lineTo(451, 275);
ctx.stroke();
ctx.closePath();

// Flag post bottom

ctx.beginPath();
ctx.moveTo(20, 551);
ctx.lineTo(80, 551);
ctx.stroke();
ctx.closePath();


// Ashok chakra circle
// ctx.beginPath();
// ctx.strokeStyle = "#000080";
// ctx.lineWidth = 2;
// ctx.arc(252.5, 162.5, 37.5, 0, 2 * Math.PI);
// ctx.stroke();
// ctx.closePath();

// Ashok chakra
for (let i = 0; i <= 360; i+=15) {
	draw(canvas, i); 
}

function draw(canvas, angle){
    var context = canvas.getContext('2d'), centerX = 252.5, centerY = 162.5,radius = 37.5;
    context.lineWidth = 1;
    context.strokeStyle = '#000080';
    var begin = 0; interval = 90;
    var arcSize= degreesToRadians(interval);
    context.beginPath();
    context.moveTo(centerX,centerY);
    context.arc(centerX,centerY,radius, degreesToRadians(0), degreesToRadians(angle));
    context.closePath();
    context.stroke();
    
}

function degreesToRadians(degrees) {
    return (degrees * Math.PI)/180;
}

/* end of ashok chakra */
