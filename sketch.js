var fixed_rect,moving_rect ;

function setup() {
  createCanvas(800,400);
  fixed_rect = createSprite(400, 200, 50, 50);
  fixed_rect.shapeColor = "red";
  fixed_rect.debug = true;

  moving_rect = createSprite(400, 200, 50, 50);
  moving_rect.shapeColor = "blue";
  moving_rect.debug = true;

}

function draw() {
  background("yellow");  
  
  moving_rect.x = mouseX ;
  moving_rect.y = mouseY ;
  
  if(moving_rect.x-fixed_rect.x < moving_rect.width/2 + fixed_rect.width/2 && 
    fixed_rect.x-moving_rect.x < moving_rect.width/2 + fixed_rect.width/2 && 
    moving_rect.y-fixed_rect.y < moving_rect.height/2 + fixed_rect.height/2 && 
    fixed_rect.y-moving_rect.y < moving_rect.height/2 + fixed_rect.height/2)
  {
moving_rect.shapeColor = "green";
fixed_rect.shapeColor = "purple";
}
else {
  moving_rect.shapeColor = "blue";
  fixed_rect.shapeColor = "red";

}

  drawSprites();
}