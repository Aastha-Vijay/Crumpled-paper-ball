
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;
var ground, ball, basket1, basket2, basket3;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,385,1200,10);
	basket1 = new Basket(1100, 337, 15, 85);
	basket2 = new Basket(950, 337, 15, 85);
	basket3 = new Basket(1025, 373, 130, 15);
  ball = new paperBall(80,383,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  //keyPressed();

  drawSprites();

  ground.display();
  basket1.display();
  basket2.display();
  basket3.display();
  ball.display();
}
function keyPressed(){
  if(keyCode === UP_ARROW){
  Matter.Body.applyForce(ball.body,ball.body.position,{x:350,y:-100});
  }
}



