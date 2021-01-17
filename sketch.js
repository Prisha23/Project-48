var canvas, scene, scene1;
var you, yourfreind, you1, yourfreind1, person1;


function preload()
{
  you1 = loadImage("happy face.jpg");
  yourfreind1 = loadImage("happy face.jpg");
  scene1 = loadImage("green background.jpg");
  person1 = loadImage("children.jpg");

}

function setup() {
	canvas = createCanvas(1500, 625);
 
  scene = createSprite(0, 0, 800, 400);
  scene.scale=10;
  scene.velocityY=-2;
  scene.addImage(scene1);

  you = createSprite(300, 200, 15, 15);
  you.velocityX = 0;
  you.velocityY = 0;
  you.addImage(you1);
  you.scale = 0.1;

  yourfreind = createSprite(190, 200, 15, 15);
  yourfreind.addImage(yourfreind1);
  yourfreind.scale = 0.1;

  PeopleGroup = new Group();
  you.setCollider("circle", 0, 0, 1000);
  you.debug = true;

  yourfreind.setCollider("circle", 0, 0, 1000);
  yourfreind.debug = true;

}

//draw function
function draw() {
if (scene.y<0) {
	scene.y=scene.height/2;
}
	  
//you
if (keyDown("UP_ARROW")) {
	   
	you.velocityX = 0;
	you.velocityY = -1;
	  
}
	  
if (keyDown("DOWN_ARROW")) {
		
	you.velocityX = 0;
	you.velocityY = 1;
	  
}
	  
if (keyDown("LEFT_ARROW")) {
	   
	you.velocityX = -1;
    you.velocityY = 0;
		
}
	  
if (keyDown("RIGHT_ARROW")) {
		
	you.velocityX = 1;
	you.velocityY = 0;
	  
}
	  
//yourfreind
if (keyDown("UP_ARROW")) {
	   
	yourfreind.velocityX = 0;
	yourfreind.velocityY = -1;
	  
}
	  
if (keyDown("DOWN_ARROW")) {
		
	yourfreind.velocityX = 0;
	yourfreind.velocityY = 1;
	  
}
	  
if (keyDown("LEFT_ARROW")) {
	   
	yourfreind.velocityX = -1;
	yourfreind.velocityY = 0;
		
}
	  
if (keyDown("RIGHT_ARROW")) {
		
	yourfreind.velocityX = 1;
	yourfreind.velocityY = 0;
	  
}
   
/*if (condition) {
  
}*/

  spawnPeople();
  drawSprites();
}

function spawnPeople() {
  //write code here to spawn the clouds
  if (World.frameCount % 200 === 0) {
    var person = createSprite(1200,625,40,10);
    person.x = Math.round(random(800,1300));
    person.addImage(person1);
    person.scale = 0.3;
    person.velocityY = -3;
    
     //assign lifetime to the variable
     person.lifetime = 300;
    
    //adjust the depth
    //person.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    //add each person to the group
    PeopleGroup.add(person);
  }
  
}
