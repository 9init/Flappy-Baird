class Baird{
  constructor() {
    this.position = createVector(80, height/2)
    this.gravity = 1;
    this.velocity = 0;
    this.brain = new NeuralNetwork(8, 20, 2);
    this.score = 0;
    this.fitness = 0;
  }

  think(wall){

    let closest = null;
    let closestD = Infinity;
    for (let i = 0; i < wall.walls.length; i++){
      let d = wall.walls[i].up.x - this.position.x;
      if(d < closestD && d > 0){
        closest = wall.walls[i];
        closestD = d;
      }
    }

    let velocity = this.velocity;
    let position = this.position.y;
    let top_y_End = closest.up.y / height;
    let top_y_Width_start = closest.up.x / width;
    let top_y_Width_end = (closest.up.x + wall.wall_size) / width;
    let bot_y_End = closest.down.y / height;
    let bot_y_Width_start = closest.down.x / width;
    let bot_y_Width_end = (closest.down.x + wall.wall_size) / width;

    let inputs= [
      velocity,
      position,
      top_y_End,
      top_y_Width_start,
      top_y_Width_end,
      bot_y_End,
      bot_y_Width_start,
      bot_y_Width_end
    ];

    let output = this.brain.predict(inputs)
    if(output[0] > output[1])
      this.jump();
  }

  jump(){
    this.velocity -= this.gravity * 25;
  }

  update(){
    this.score++;
    this.velocity += this.gravity
    this.velocity *= 0.9;

    if(this.position.y > height){
      this.position.y = height;
      this.velocity = 0;
    }
    if(this.position.y < 0){
      this.position.y = 0;
      this.velocity = 0;
    }
    this.position.y += this.velocity
  }

  highLight(){
    noStroke();
    fill(255, 0, 0);
    let {x, y} = this.position;
    ellipse(x, y, 30, 30);
  }


  show(){
    noStroke();
    fill(255, 255, 0);
    let {x, y} = this.position;
    ellipse(x, y, 30, 30);
  }
}
