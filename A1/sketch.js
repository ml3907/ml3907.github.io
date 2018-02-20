let angle = 0;

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(200)

  fill(100);
  noStroke();
  textSize(30);
  text("Welcome to ", 30, 240);

  fill(255, 204, 0);
  stroke(255);
  strokeWeight(2);
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
  textSize(15);
  fill(100);
  noStroke();
  text("Current Time: " + h + ": " + m + ": " + s, 30, 380)


  var ma = map(s, 0, 100, 0, width);
  fill(255, 204, 0);
  rect(30, 400, ma, 5);
}