let angle = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  fill(230);
  noStroke();
  rect(250, 80, 640, 380);

  fill(30);
  noStroke();
  textSize(30);
  text("Welcome to ", 280, 240);
  text("Hello", 280, 280);

  fill(255, 204, 0);
  stroke(50);
  strokeWeight(2);
  textSize(30);
  text("DATA VISUALIZATION!", 470, 240);
  text("WORLD!", 370, 280);

  //these are the eyes.
  fill(255);
  ellipse(280, 110, 18, 18);
  fill(255);
  ellipse(310, 110, 18, 18);
  
  //these are the eyeballs.
  fill(15);
  ellipse(282, 113, 10, 10);
  fill(15);
  ellipse(312, 113, 10, 10);
  
  //this is the smiling mouth.  
  noFill();
  stroke(15);
  arc(295, 140, 40, 25, 0, PI);

  //this is the current time.
  var h = hour();
  var m = minute();
  var s = second();
  textSize(15);
  fill(100);
  noStroke();
  text("Current Time: " + h + ": " + m + ": " + s, 280, 380)


  var ma = map(s, 0, 100, 0, width);
  fill(255, 204, 0);
  rect(280, 400, ma, 5);
}