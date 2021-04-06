var rat;
var cheeseFont;

function preload() {
  cheeseFont = loadFont('Cheese and Mouse.ttf');
  comicFont = loadFont('Comic Sans MS Bold.ttf');

}

function setup() {
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
  angleMode(DEGREES);
  rat = new Rat();
}

function draw() {
  var w = window.innerWidth;
  var h = window.innerHeight;  
  background(0);
  rat.turn(0.4);
  let hr = hour();
  let mn = minute();
  let sc = second();
  fill(255, 255, 0);
  strokeWeight(1);
  push();
  textSize(53);
  textFont(cheeseFont);
  text("THE CHEESE CLOCK", (w / 2 - textWidth("THE CHEESE CLOCK") / 2), 70);
  image(cheez, w/2, h/2);
  pop();

  push();
  translate(w/2, h/2);
  rotate(-90);
  strokeWeight(8);
  stroke(255, 255, 0);
  noFill();
  var angle3 = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 400, 400, 0, angle3);

  strokeWeight(8);
  stroke(255, 255, 150);
  noFill();
  var angle2 = map(mn, 0, 60, 0, 360);
  arc(0, 0, 380, 380, 0, angle2);

  strokeWeight(8);
  stroke(255, 255, 230);
  noFill();
  var angle1 = map(sc, 0, 60, 0, 360);
  arc(0, 0, 360, 360, 0, angle1);

  push();
  rotate(angle3 + 0.5);
  strokeWeight(8);
  stroke(255, 255, 0);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(angle2 + 1);
  strokeWeight(4);
  stroke(255, 255, 150);
  line(0, 0, 145, 0);
  pop();

  push();
  rotate(angle1 + 1);
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
  // text("12", w/2, -220);
  text("12", (0 - textWidth("12") / 2), -220);
  text("3", (236 - textWidth("3") / 2), 0);
  text("6", (0 - textWidth("6") / 2), (258));
  text("9", (-260 + textWidth("3") / 2), 0);

  // push();
  // rotate(angle3);
  // imageMode(CENTER);
  // image(ratPic, 0, 0, 30, 30);
  // pop();


  push();
  rotate(180);
  rotate(angle2);
  image(ratPic, -5, 155, 20, 20);
  pop();

  push();
  rotate(180);
  rotate(angle3);
  image(ratPic, -6, 110, 30, 30);
  pop();

  rat.render();
  // rat.update();
  //  rat.edges();

}
