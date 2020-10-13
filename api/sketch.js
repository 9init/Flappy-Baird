let baird;
let wall;
function setup(){
  createCanvas(1000, 500);
  baird = new Baird();
  wall = new Wall();
  frameRate(60);
}

function keyPressed(){
  if (keyCode == 32)
    baird.jump();
}

function draw(){
  background(64,224,208);
  baird.update();
  baird.show();
  wall.update();
  wall.hit(baird);
}
