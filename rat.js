function Rat() {

  // wide = ratPic.width * 0.05;
  // high = ratPic.height * 0.05;
  //this.pos = createVector(random(width), random(height));
  this.r = 50;
  //this.vel = p5.Vector.random2D();
  this.heading = 0;


  this.update = function() {
    this.pos.add(this.vel);
  }

  this.render = function() {
    push();
    //translate(this.pos.x, this.pos.y);
    rotate(this.heading);
    //translate(50, 50);
    //translate(400, 0);
    imageMode(CENTER);
    image(ratPic, 288, 0, this.r, this.r);
    pop();



  }

  this.turn = function(angle) {
    this.heading += angle;
  }

  this.edges = function() {
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
      //this.heading = -90;
    } else if (this.pos.x < -this.r) {
      this.pos.x = width;
      //this.heading = -270;

    }
    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
      //this.heading = -180;
    } else if (this.pos.y < -this.r) {
      this.pos.y = height;
      //this.heading = 180;

    }
  }


}
