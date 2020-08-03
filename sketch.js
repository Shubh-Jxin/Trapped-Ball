const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var canvas;
var world,engine;

function setup() {
  canvas= createCanvas(500,500);
  engine = Engine.create();
  world= engine.world;

  wall= new Wall(100,100,1000,100);
  wall2= new Wall(100,300,1000,100);
  ball= new Ball(100,150);
  wall3= new Wall(width,displayHeight/2,100,1000);
  wall4= new Wall(0,displayHeight/2,100,1000);
}

function draw() {
  background(0);
  Engine.update(engine);

  wall.display();
  wall2.display();
  ball.display();
  wall3.display();
  wall4.display();  
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:random(-0.2,0.2),y:-0.2});
    ball.color=color(random(1,255),random(1,255),random(1,255));
    wall.color=color(random(1,255),random(1,255),random(1,255));
    wall2.color=color(random(1,255),random(1,255),random(1,255));
    wall3.color=color(random(1,255),random(1,255),random(1,255));
    wall4.color=color(random(1,255),random(1,255),random(1,255));
  }
}