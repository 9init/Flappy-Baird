function Baird(){
  this.dim = createVector(100, 150);
  this.y = false;
  this.jumpSpace = 0;
};

Baird.prototype.jump = function(){
  this.jumpSpace += 70
};

Baird.prototype.gameOver = function(){

};

Baird.prototype.getY=function(){
  if(this.jumpSpace>0){
    this.jumpSpace -= 7;
    this.dim.y += 7;
  }else
    this.dim.y -= 6

  let y = map(this.dim.y, 0, height, height, 0);
  return createVector(this.dim.x, y);
}

Baird.prototype.update=function(){
  //scale(20);
  noStroke();
  fill(255, 255, 0);
  let {x, y} = this.getY();
  ellipse(x, y, 30, 30);
}
