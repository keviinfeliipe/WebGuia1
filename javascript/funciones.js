
window.onload = function() {
    drawnLine();
    drawnRectangle();
    drawnCircle();
};

function drawnRectangle(){
    var canvas = document.getElementById("rectangle");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";  
    ctx.fillRect(100,50,100,100);
};

function drawnCircle(){
    var canvas = document.getElementById("circle");
    var context = canvas.getContext("2d");
    context.fillStyle = "#FF0000";  
    context.arc(150, 100, 70, 0, 2 * Math.PI, false);
    context.stroke();
};

function drawnLine(){
    var canvas =document.getElementById("line");
    var context =canvas.getContext("2d");
    context.fillStyle = "#ff0000";
    context.moveTo(100, 100);
    context.lineTo(0, 0);
    context.stroke();
}
