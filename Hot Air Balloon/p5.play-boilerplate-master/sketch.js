var balloon, balloonI, bg;

function preload(){
  bg = loadImage("backgrouund.jpg");
  balloonI = loadImage("balloonn - Copy.jpg");
}

function setup() {
  createCanvas(800,400);
  balloon = createSprite(220, 280);
  balloon.addImage("ballonImage", balloonI);
}

function draw() {
  background(bg);  

  if(keyDown("A")){
    balloon.x = balloon.x - 10;
  }
  else if(keyDown("D")){
    balloon.x = balloon.x + 10;
  }
  else if(keyDown("W")){
    balloon.y = balloon.y - 10;
  }
  else if(keyDown("S")){
    balloon.y = balloon.y + 10;
  }
  
  drawSprites();
}