canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

ctx.beginPath;
ctx.strokestyle= "gris" ;
ctx.linewidht = 1;
ctx.rect(150, 143, 430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokestyle= "azul" ;
ctx.linewidht = 5;
ctx.arc(250, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokestyle= "negro" ;
ctx.linewidht = 5;
ctx.arc(350, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokestyle= "rojo" ;
ctx.linewidht = 5;
ctx.arc(450, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokestyle= "naranja" ; 
ctx.linewidht = 5;
ctx.arc(300, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokestyle= "verde" ;
ctx.linewidht = 5;
ctx.arc(400, 250, 40, 0, 2 * Math.PI);
ctx.stroke();