var bullet, wall;
var speed, weight, thickness;

function setup() {
  
  createCanvas(1600,400);
  speed = random(50,90);
  weight = random(400,1500);
  thickness = random(22,83);
  
  
  bullet = createSprite(50,200,50,5);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255);
  
  
  
  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor = color("white");
  
}

function draw() {
  background(0);  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation>100){
    wall.shapeColor = color("red");
    }
    if(deformation<100){
      wall.shapeColor = color("green");
      }
    }
  bullet.display();
  wall.display();

  

  }
 
  