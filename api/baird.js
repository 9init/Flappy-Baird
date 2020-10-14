class Baird{
  constructor(brain) {
    this.position = createVector(80, height/2)
    this.gravity = 1;
    this.velocity = 0;
    this.score = 0;
    this.fitness = 0;
    if(brain){
      this.brain = brain;
    }else{
      this.brain = new NeuralNetwork(8, 20, 2);
    }
  }

  think(wall){
    let closest = wall.walls[0];
    if(this.position.x > wall.walls[0].up.x + wall.wall_size)
      closest = wall.walls[1];


    let velocity = this.velocity;
    let position = this.position.y;
    let top_y_End = closest.up.y;
    let top_y_Width_start = closest.up.x;
    let top_y_Width_end = (closest.up.x + wall.wall_size);
    let bot_y_End = closest.down.y;
    let bot_y_Width_start = closest.down.x;
    let bot_y_Width_end = (closest.down.x + wall.wall_size);

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
    this.velocity -= this.gravity * 15;
  }

  update(){
    this.score++;
    this.velocity += this.gravity
    this.velocity *= 0.9;
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

  offScreen(){
    return (this.position.y > height || this.position.y < 0);
  }
}
