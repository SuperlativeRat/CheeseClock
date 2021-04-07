var rat;
var cheeseFont;

function preload() {
  cheeseFont = loadFont('Cheese and Mouse.ttf');
  comicFont = loadFont('Comic Sans MS Bold.ttf');
}

function setup() {
  frameRate(60);
  var w = window.innerWidth;
  var h = window.innerHeight;  
  var cnv = createCanvas(w, h);
  console.log(
              "████████╗██╗  ██╗███████╗\n" +
              "╚══██╔══╝██║  ██║██╔════╝\n" +
              "   ██║   ███████║█████╗  \n" +
              "   ██║   ██╔══██║██╔══╝  \n" +
              "   ██║   ██║  ██║███████╗\n" +
              "   ╚═╝   ╚═╝  ╚═╝╚══════╝\n");
  console.log(
              " ██████╗██╗  ██╗███████╗███████╗███████╗███████╗\n" +
              "██╔════╝██║  ██║██╔════╝██╔════╝██╔════╝██╔════╝\n" +
              "██║     ███████║█████╗  █████╗  ███████╗█████╗  \n" +
              "██║     ██╔══██║██╔══╝  ██╔══╝  ╚════██║██╔══╝  \n" +
              "╚██████╗██║  ██║███████╗███████╗███████║███████╗\n" +
              " ╚═════╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚══════╝\n");
  console.log(
              " ██████╗██╗      ██████╗  ██████╗██╗  ██╗\n" +
              "██╔════╝██║     ██╔═══██╗██╔════╝██║ ██╔╝\n" +
              "██║     ██║     ██║   ██║██║     █████╔╝ \n" +
              "██║     ██║     ██║   ██║██║     ██╔═██╗ \n" +
              "╚██████╗███████╗╚██████╔╝╚██████╗██║  ██╗\n" +
              " ╚═════╝╚══════╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝\n" +
              "                                         \n");

  cnv.position(((windowWidth / 2) - (width / 2)), ((windowHeight / 2) - (height / 2)));
  cheez = loadImage("cheez wheel.png");
  imageMode(CENTER);
  ratPic = loadImage("rat.png");
  ratPicFlipped = loadImage("rat_flipped.png");
  angleMode(DEGREES);
  rat1 = new Rat();
  rat2 = new Rat();
  rat3 = new Rat();
  rat4 = new Rat();
  rat5 = new Rat();
  rat6 = new Rat();
  rat7 = new Rat();
  rat8 = new Rat();
  rat9 = new Rat();
  rat10 = new Rat();
  rat11 = new Rat();
  rat12 = new Rat();
}

function draw() {
  var w = window.innerWidth;
  var h = window.innerHeight;  
  background(0);
  rat1.turn(.4);
  // rat2.turn(.4);
  // rat3.turn(.4);
  // rat4.turn(.4);
  // rat5.turn(-.4);
  // rat6.turn(-.4);
  // rat7.turn(-.4);
  // rat8.turn(-.4);
  // rat9.turn(.4);
  // rat10.turn(.4);
  // rat11.turn(.4);
  // rat12.turn(.4);
  let hr = hour();
  let mn = minute();
  let sc = second();
  let ml = millis();
  fill(255, 255, 0);
  strokeWeight(1);
  push();
  textSize(53);
  textFont(cheeseFont);
  text("T H E  C H E E S E  C L O C K", (w / 2 - textWidth("T H E  C H E E S E  C L O C K") / 2), 70);
  image(cheez, w/2, h/2);
  pop();

  push();
  
  translate(w/2, h/2);
  rotate(-90);

  // HOURS CIRCLE
  strokeWeight(8);
  stroke(255, 255, 0);
  noFill();
  var hours = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 400, 400, 0, hours);


  // MINUTES CIRCLE
  strokeWeight(8);
  stroke(255, 255, 150);
  noFill();
  var minutes = map(mn, 0, 60, 0, 360);
  arc(0, 0, 380, 380, 0, minutes);


  // SECONDS CIRCLE
  strokeWeight(8);
  stroke(255, 255, 230);
  noFill();
  var seconds = map(sc, 0, 60, 0, 360);
  arc(0, 0, 360, 360, 0, seconds);

  // HOUR HAND MOVEMENT
  push();
  rotate(hours + 0.5);
  strokeWeight(8);
  stroke(255, 255, 0);
  line(0, 0, 100, 0);
  pop();

  // MINUTE HAND MOVEMENT
  push();
  rotate(minutes + 1);
  strokeWeight(4);
  stroke(255, 255, 150);
  line(0, 0, 145, 0);
  pop();

  // SECOND HAND MOVEMENT
  push();
  rotate(seconds + 1);
  strokeWeight(2);
  stroke(255, 255, 230);
  line(0, 0, 178, 0);
  pop();

  pop();

  translate(w/2, h/2);
  rectMode(CENTER);
  textSize(50);
  textFont(comicFont);
  noFill();
  stroke(255, 255, 0);
  text("12", (0 - textWidth("12") / 2), -220);
  text("3", (236 - textWidth("3") / 2), 0);
  text("6", (0 - textWidth("6") / 2), (258));
  text("9", (-260 + textWidth("3") / 2), 0);

  // Rat on minutes
  push();
  rotate(180);
  rotate(minutes);
  image(ratPic, -5, 155, 20, 20);
  pop();

  // Rat on hours
  push();
  rotate(180);
  rotate(hours);
  image(ratPic, -6, 110, 30, 30);
  pop();

  rat1.render(288, 0, 0);
  // rat2.render(288, 0, 90);
  // rat3.render(288, 0, 180);
  // rat4.render(288, 0, 270);

  // rat5.render(349, 1, 120);
  // rat6.render(349, 1, 210);
  // rat7.render(349, 1, 300);
  // rat8.render(349, 1, 390);
  
  // rat9.render(392, 0, 240);
  // rat10.render(392, 0, 330);
  // rat10.render(392, 0, 420);
  // rat12.render(392, 0, 510);
  
}
