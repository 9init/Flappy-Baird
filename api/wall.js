function Wall(){
  this.walls = [];
  this.dim = createVector(width, 120);
  this.wall_size = 80;
  this.speed = 5
  this.counter = 0;
}

Wall.prototype.update=function(){
  if (this.counter++ == floor(300/this.speed)   ){
    this.addWall();
    this.counter = 0;
  }
  if(this.walls.length != 0 && this.walls[0].up.x + this.wall_size <= 0){
    this.walls.shift();
  }
  this.show();
}

Wall.prototype.show = function(){
  for(let i=0; i<this.walls.length; i++){
    let {up, down} = this.walls[i];
    fill(34, 139, 34);
    rect(up.x, 0, this.wall_size, up.y);
    rect(down.x, down.y, this.wall_size, height);

    up = createVector(up.x-this.speed, up.y);
    down = createVector(down.x-this.speed, down.y);
    this.walls[i].up = up;
    this.walls[i].down = down;
  }
}

Wall.prototype.addWall = function(){
  let percentage = 60;
  let wallLength = floor(random((height*percentage)/100));
  let wallInfo = new WallInfo();
  let x = width;
  let upY = wallLength;
  let downY = map(floor((height*percentage)/100)-upY, 0, height, height, 0);
  wallInfo.up = createVector(x, upY);
  wallInfo.down = createVector(x, downY);
  this.walls.push(wallInfo);
}

Wall.prototype.hit = function (baird){
  if(this.walls.length == 0){
    return;
  }
  let {up, down} = this.walls[0];
  let {x, y} = baird.position;
  if( (y <= up.y || y >= down.y) && (x >= up.x && x <= up.x+this.wall_size) ){
    baird.highLight();
  }
};

function WallInfo(){
  this.up = createVector(0, 0);
  this.down = createVector(0, 0);
}
