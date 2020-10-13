class Baird{
  constructor() {
    this.position = createVector(80, height/2)
    this.gravity = 1;
    this.velocity = 1;
  }

  jump(){
    this.velocity -= this.gravity * 25;
  }

  update(){
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
