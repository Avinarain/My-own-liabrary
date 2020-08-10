var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  Rect1 = createSprite(400, 100, 50, 80);
  Rect1.shapeColor = "green";
  Rect1.debug = true;
  Rect2 = createSprite(400, 800,80,30);
  Rect2.shapeColor = "green";
  Rect2.debug = true;

  box = createSprite(400,700,30,30)


  box.velocityY = -5;
  Rect1.velocityY = +5;
}

function draw() {
  background(0,0,0);  
 
  bounceOff(Rect1,box);
  
  
  drawSprites();
}

