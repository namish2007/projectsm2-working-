var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,leftedge,rightedge,bottomedge
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80,10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
    
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	 box1 = new box(helicopterSprite.x,630,100,20);
	 box2 = new box(helicopterSprite.x + 40,630,20,100);
	 box3 = new box(helicopterSprite.x - 40,630,20,100);
	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world,packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world,ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
   packageSprite.y= packageBody.position.y 
   box3.display();	
   box2.display(); 
   box1.display();
   keyPressed();
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);


}
}


