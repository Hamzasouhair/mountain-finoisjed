// canvas - fighting scene

// canvas setup
let cnv = document.getElementById("mycanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

//animatioon variables
let cloud1X = 50;
let cloud1Y = 40;
let cloud2X = 150;
let cloud3x = 250;
let sunY = 60;

let skyR = 173;
let skyG = 230;
let skyB = 216;

// track frames gone by
let frame = 0;

// triggers the start of animation

requestAnimationFrame(draw);

//put all drawing code in ht edraw funciton
function draw() {
  // top-left corner (0,0)
  // top-right corner (400,0)
  //bottom-left corner(0,400)
  //bottom-right

  // sky
  ctx.fillStyle = `rgb(${skyR}, ${skyG}, ${skyB})`;

  ctx.fillRect(0, 0, 400, 400);

  //sun
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(200, sunY, 50, 0, 2 * Math.PI);
  ctx.fill();

  // Inner sun
  ctx.fillStyle = "orange";
  ctx.beginPath();
  ctx.arc(200, sunY, 40, 0, 2 * Math.PI);
  ctx.fill();

  // 2nd Inner sun
  ctx.fillStyle = "Yellow";
  ctx.beginPath();
  ctx.arc(200, sunY, 30, 0, 2 * Math.PI);
  ctx.fill();

  // 3rd Inner sun
  ctx.fillStyle = "orange";
  ctx.beginPath();
  ctx.arc(200, sunY, 20, 0, 2 * Math.PI);
  ctx.fill();

  //mountain 1
  ctx.lineWidth = 1;
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.moveTo(100, 50);
  ctx.lineTo(0, 300);
  ctx.lineTo(0, 900);
  ctx.lineTo(200, 250);
  ctx.fill();

  //mountain 2
  ctx.lineWidth = 1;
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.moveTo(550, 550);
  ctx.lineTo(300, 50);
  ctx.lineTo(100, 450);
  ctx.lineTo(550, 450);
  ctx.fill();

  //mountain 2
  ctx.lineWidth = 1;
  ctx.fillStyle = "gray";
  ctx.beginPath();
  ctx.moveTo(400, 450);
  ctx.lineTo(200, 100);
  ctx.lineTo(50, 450);
  ctx.lineTo(400, 450);
  ctx.fill();

  // // Cloud Image
  // var cloudImg = document.getElementById("cloudEl");
  // ctx.drawImage(cloudImg, 50, 50, 90, 90);
  // ctx.drawImage(cloudImg, 200, 0, 90, 90);
  // ctx.drawImage(cloudImg, 300, 70, 90, 90);

  // clouds
  let cloud = document.getElementById("cloudEl");
  ctx.drawImage(cloud, cloud1X, cloud1Y, 75, 50);
  ctx.drawImage(cloud, cloud2X, 10, 75, 50);

  //animation

  cloud1X = cloud1X + 1;
  cloud2X += 3;

  // When cloud1 exits the RIGHT side of the canvas, move it to the LEFT side of the canvas
  if (cloud1X >= 400) {
    cloud1X = -75;

    // Reappear at a random height
    cloud1Y = Math.random() * 150;
  }

  // Sun sets and stops under the pier
  if (sunY <= 250) {
    sunY = sunY + 1;
  }

  // sky animation

  if (skyR <= 225) {
    skyR++;
  }
  if (skyG >= 41) {
    skyG--;
  }
  if (skyB >= 119) {
    skyB--;
  }

  requestAnimationFrame(draw);
}

//Text
ctx.font = "15px Arial";
ctx.fillStyle = "White";
ctx.fillText("Art by Hamza", 300, 375);
