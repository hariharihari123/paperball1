var dusti;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var w1,w2,w3,disball,paperball; 
var ground;
function preload()
{
	dusti = loadImage("bin.png");
}

function setup() {
	createCanvas(1200,650);
	engine = Engine.create();
  world = engine.world;
  w1 = new box(785,565,20,100);
  w2 = new box(915,565,20,100);
  w3 = new box(850,605,110,20);
  paperball = new paper(100,600,20);
  var bin = createSprite(850,550,20,20);
  bin.addImage(dusti);
	ground = Bodies.rectangle(width/2, height-35, width,10,{isStatic:true} );
  World.add(world,ground);

  keyPressed();
	Engine.run(engine); 
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  w1.display();
  w2.display();
  w3.display();
  paperball.scale = 0.1;
  paperball.display();
}
function keyPressed(){
 if ( keyCode === UP_ARROW ){
  Matter.Body.applyForce(paperball.body,paperball.body.position,{ x:100 , y:-37 });
  }
}


