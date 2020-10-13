const POPULATION = 100;
let bairds = [];
let wall;
function setup(){
  createCanvas(1000, 500);
  for(let i = 0; i < POPULATION; i++){
    bairds[i] = new Baird();
  }
  wall = new Wall();
  frameRate(60);
}

// function keyPressed(){
//   if (keyCode == 32)
//     baird.jump();
// }

function draw(){
  background(64,224,208);
  wall.update();
  for(let i = 0; i < bairds.length; i++){
    let baird = bairds[i];
    baird.think(wall);
    baird.update();
    baird.show();
    if(wall.hit(baird))
      bairds.splice(i, 1);
  }
  

  
}
