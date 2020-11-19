var bullet;
var wall;
var speed;
var weight;
var thickness;

function setup() 
{
  createCanvas(1600,400);
  bullet=createSprite(10, 20, 50, 10);
  bullet.shapeColor="white";
  
  wall=createSprite(1200, 200,thickness, height/2);
  wall.shapeColor=(80,80,80);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)
}

function draw() 
{
  background();
  bullet.velocityX=speed;

  if(wall.x-bullet.x<(bullet.width+wall.width/2))
  {
    bullet.velocityX=0;
    var deformation=0.5* weight * speed * speed/22500;
    if(deformation > 180)
    {
      bullet.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      bullet.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      bullet.shapeColor=color(0,255,0);
    }
  }

  if(collided(bullet,wall))
  {
    bullet.velocityX=0;

    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  }
    if(damage>10)
    {
      wall.shapeColor=colour(255,0,0);
    }

    if(damage<10)
    {
      wall.shapeColor=colour(0,255,0);
    }
  
  

  drawSprites();
}