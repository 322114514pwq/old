function mr(num1,num2=0){
    return Math.random()*(num1-num2)+num2;
}
var canvas=document.getElementById("canvas1");
var ctx=canvas.getContext("2d");
var flag=false;
canvas.width=700;
canvas.height=500;
const dpr = window.devicePixelRatio
const logicalWidth = canvas.width
const logicalHeight = canvas.height
canvas.width = logicalWidth * dpr
canvas.height = logicalHeight * dpr
canvas.style.width = logicalWidth + 'px'
canvas.style.height = logicalHeight + 'px'
function draw(){
    ctx.fillStyle='#'+Math.floor(mr(255)).toString(16)+Math.floor(mr(255)).toString(16)+Math.floor(mr(255)).toString(16);
    ctx.fillRect(mr(canvas.width,-20),mr(canvas.height,-20),mr(500),mr(500));
}
var itv = setInterval(function(){if(flag){draw()}},100);