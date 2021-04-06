/*
function Clock() {

  this.hr = hour();
  this.mn = minute();
  this.sc = second();

  this.render = function() {


    translate(600, 400);
    rotate(-90);

    strokeWeight(8);
    stroke(255, 255, 0);
    noFill();
    this.angle3 = map(this.hr % 12, 0, 12, 0, 360);
    arc(0, 0, 400, 400, 0, this.angle3);

    strokeWeight(8);
    stroke(255, 255, 150);
    noFill();
    this.angle2 = map(this.mn, 0, 60, 0, 360);
    arc(0, 0, 380, 380, 0, this.angle2);

    strokeWeight(8);
    stroke(255, 255, 230);
    noFill();
    this.angle1 = map(this.sc, 0, 60, 0, 360);
    arc(0, 0, 360, 360, 0, this.angle1);

    push();
    rotate(this.angle3 + 0.5);
    strokeWeight(8);
    stroke(255, 255, 0);
    line(0, 0, 100, 0);
    pop();

    push();
    rotate(this.angle2 + 1);
    strokeWeight(4);
    stroke(255, 255, 150);
    line(0, 0, 145, 0);
    pop();

    push();
    rotate(this.angle1 + 1);
    strokeWeight(2);
    stroke(255, 255, 230);
    line(0, 0, 180, 0);
    pop();

  }


}
*/
