var bullet, wall, thickness;
var speed, weight;
function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  bullet = createSprite(50, 200, 10, 30);
  wall = createSprite(1000,200, 60, 100);
  //wall.shapecolor = color(80 ,80 ,80)
  car.velocityX=speed;
}

function draw() {
  background(0,0,0);  
  drawSprites();
  
  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
bullet.velocityX=0;
var deformation = 0.5 *weight *speed *speed/22509;
if(deformation>180){
bullet.shapeColor = color(255,0,0);

}

if(deformation<180 && deformation>100){
bullet.shapeColor = color(230,230,0)


}
if(deformation<100){

bullet.shapeColor=color(0,255,0)

}

  }


}

function hasCollided(lbullet, lwall) { 
  bulletRightEdge=lbullet.x +lbullet.width; 
  wallLeftEdge=lwall.x; 
  if (bulletRightEdge>=wallLeftEdge) {
     return true
     }
     else{ 
       return false; 
    }
  }