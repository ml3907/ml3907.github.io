let angle = 0;

function setup() {
  createCanvas(640, 480);
  angleMode(DEGREES);
}

function draw() {
  background(30, 20, 55, 55)

  fill(200);
  noStroke();
  textSize(30);
  text("Welcome to ", 30, 240);

  fill(255, 204, 0);
  noStroke();
  textSize(30);
  text("DATA VISUALIZATION!", 220, 240);

  //these are the eyes.
  fill(255);
  ellipse(65, 110, 18, 18);
  fill(255);
  ellipse(95, 110, 18, 18);
  
  //these are the eyeballs.
  fill(15);
  ellipse(68, 113, 10, 10);
  fill(15);
  ellipse(98, 113, 10, 10);
  
  //this is the smiling mouth.  
  noFill();
  stroke(255);
  arc(80, 140, 40, 25, 0, PI);

  //this is the current time.
  var h = hour();
  var m = minute();
  var s = second();
  textSize(10);
  text("Current Time: " + h + ": " + m + ": " + s, 30, 380)
  noStroke();

  var ma = map(s, 0, 100, 0, width);
  fill(255, 204, 0);
  rect(200, 380, ma, 5);
}