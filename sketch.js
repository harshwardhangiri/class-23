const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var box1,box2,ground;
function setup() {
  var Canvas = createCanvas(800,400);
  engine = Engine.create();
  world=engine.world;
 
  box1 = new BOX(100,100,50,40);
  box2 = new BOX(200,100,30,80);
  ground = new Ground(400,380,800,20)

  console.log(ground);
 
 
  
}
function draw() {
  background(245,3,155);  
  Engine.update(engine);

  box1.display() ;
  box2.display();
  ground.display();

}


