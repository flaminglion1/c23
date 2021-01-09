//namespacing
const Engine=Matter.Engine;//namespacing
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld;
var box1,box2;
var b1,b2

function setup() {
  createCanvas(400,400);
  myEngine=Engine.create();
  myWorld=myEngine.world;
  box1=new Box(100,200,50,80);
  box2=new Box(300,300,80,100);
  b1=new Ground(10,50,20,20)
b2=new Ground(10,100,20,40)

 // console.log(ball.position.x);
 
}

function draw() {
  background("blue");
  Engine.update(myEngine);
  box1.display();
  box2.display();
  b1.display();
b2.display();

  drawSprites();
}