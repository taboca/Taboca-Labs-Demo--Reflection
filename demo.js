
var canvas = null; 
var video = null;  
var ctx = null; 

function start() {
  initCanvas();
  play(); 
}

function play() { 
  drawFromVideo(); 
  setTimeout("play()",50); 
} 

function initCanvas() { 
  canvas = document.getElementById("reflection"); 
  video = document.getElementById("video");
  ctx = canvas.getContext("2d"); 
  canvas.setAttribute('height', 360);
  canvas.setAttribute('width', 640);
  ctx.scale(1,-1);
  ctx.translate(0,-360);

  var canvas2 = document.getElementById('reflectionmask')
  canvas2.setAttribute('height', 100);
  canvas2.setAttribute('width', 640);
  var ctx2 = canvas2.getContext('2d');
  var lingrad2 = ctx.createLinearGradient(0,0,0,100);
  lingrad2.addColorStop(1, 'rgb(0,0,0)');
  lingrad2.addColorStop(0, 'rgba(0,0,0,0)');

  // assign gradients to fill and stroke styles
  ctx2.fillStyle = lingrad2;
  ctx2.fillRect(0,0,640,100);
}


function drawFromVideo() { 
  ctx.drawImage(video, 0, 0, 640, 360, 0, 0, canvas.width, canvas.height);
} 

