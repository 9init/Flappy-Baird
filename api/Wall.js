function Wall(){
  this.walls = [];
  this.dim = createVector(width, 120);
  this.counter = 0
}

Wall.prototype.update=function(){
  this.addWall();
  this.show();
}

Wall.prototype.canAddNow = function(){
  if(this.walls.length == 0){
    return true;
  }
  let state = false
  let {up} = this.walls[0];
  if(up.x+40 == 0){
    this.walls.shift();
    state = true
  }
  if(this.walls[this.walls.length-1].up.x <= width-(80*4)){
      state = true;
  }
  return state;
}

Wall.prototype.show = function(){
  for(let i=0; i<this.walls.length; i++){
    let {up, down} = this.walls[i];
    fill(34, 139, 34);
    rect(up.x, 0, 80, up.y);
    rect(down.x, down.y, 80, height);

    up = createVector(up.x-6, up.y);
    down = createVector(down.x-6, down.y);
    this.walls[i].up = up;
    this.walls[i].down = down;
  }
}

Wall.prototype.addWall = function(){
  let precentage = 60;
  if(!this.canAddNow()){return;}
  let wallLength = floor(random((height*precentage)/100));
  let wallInfo = new WallInfo();
  let x = width;
  let upY = wallLength;
  let downY = map(floor((height*precentage)/100)-upY, 0, height, height, 0);
  wallInfo.up = createVector(x, upY);
  wallInfo.down = createVector(x, downY);
  this.walls.push(wallInfo);
}

function WallInfo(){
  this.up = createVector(0, 0);
  this.down = createVector(0, 0);
}
