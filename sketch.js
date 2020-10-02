var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bottom,top,middle;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	bottom=Bodies.rectangle(200,640,200,20,{isStatic:true})
	World.add(world,bottom);
	
	bottomSprite=createSprite(400,650,200,20);
   bottomSprite.shapeColor=color(255)


   middle=Bodies.rectangle(200,640,20,100,{isStatic:true})
	World.add(world,middle);
	
	middleSprite=createSprite(510,620,20,100);
   middleSprite.shapeColor=color(255)

   top=Bodies.rectangle(200,640,20,100,{isStatic:true})
   World.add(world,top);
   
   topSprite=createSprite(310,620,20,100);
  topSprite.shapeColor=color(255)


	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  packageSprite.collide(bottomSprite)
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false)
    
  }
}



