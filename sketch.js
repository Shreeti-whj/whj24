
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var box,box2,box3
var ball,ground	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
    world = engine.world;
    
    box1=new Box1(1300,650,130,130)
    box2=new Box2(1250,650,15,130);
	box3=new Box3(1200,650,130,15);
	ball=new Ball(200,450,40);
	ground=new Ground(width/2,670,width,20);

	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  box1.display();
  box2.display();
  box3.display();
  ball.display();
  ground.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}



