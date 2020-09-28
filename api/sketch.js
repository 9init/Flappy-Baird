let baird;
let wall;

function setup(){
  createCanvas(1000, 500);
  wall = new Wall();
  baird = new Baird();
  wall = new Wall();
  frameRate(60);
}

function mousePressed(){
  baird.jump();

}

function draw(){
  background(64,224,208);
  baird.update();
  wall.update();

}
