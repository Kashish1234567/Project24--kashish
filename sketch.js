
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;


function preload()
{

	

}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
   paper1= new Paper(200,200,50);
  

   boxPos = width/2-100;
	 boxY = 610;
	
	 fill("pink");
	 ground = Bodies.rectangle(width/2, 700, 1600, 70 , {isStatic:true} );

	 World.add(world, ground);
	 //ground. ("white");
	 console.log(ground);

	 boxbase=createSprite(boxPos+100,boxY+40,200,20);
	 boxbase.shapeColor="red";

	 boxbasebody = Bodies.rectangle(boxPos+100, boxY+45-20, 200, 20, {isStatic:true});
	World.add(world, boxbasebody);

	boxLeft=createSprite(boxPos+200,boxY-0.1,20,100);
	boxLeft.shapeColor="red";
	
	boxLeftbody = Bodies.rectangle(boxPos+20, boxY+45-20, 20, 100, {isStatic:true});
    World.add(world,boxLeftbody);

	boxRight=createSprite(boxPos,boxY-0.1,20,100);
	boxRight.shapeColor="red";
	
	boxRightbody = Bodies.rectangle(boxPos+200, boxY, 20, 210, {isStatic:true});
	World.add(world,boxRightbody);


  	

	//ground.shapeColor="brown";
  	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 // ground.display(); 
  paper1.display();
   
  drawSprites();
 
}

 function keyPressed() {
   if (keyCode === UP_ARROW ){
	   Matter.Body.applyForce(paper1.body,paper1.body.position, {x : 125, y : -85});
   }
}

