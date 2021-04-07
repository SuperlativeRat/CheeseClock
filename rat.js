function Rat() {
  this.r = 50;
  this.heading = 0;

  this.render = function(distance, flipped, translate) {
    push();
    rotate(this.heading);

    rotate(translate)
    imageMode(CENTER);
    if (!flipped)
      image(ratPic, distance, 0, this.r, this.r);
    else
      image(ratPicFlipped, distance, 0, this.r, this.r);
    pop();
  }

  this.turn = function(angle) {
    this.heading += angle;
  }
}
