function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(200);

  //this is the clock box.
  fill(255, 204, 0);
  rect(100, 40, 40, 40);

  //this is the current time.
  var h = hour();
  var m = minute();
  var s = second();
  textSize(20);
  text("Current Time: ", 50, 240)
  text(h + ": " + m + ": " + s,50, 280)
}