function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(200);

  //this is the clock box.
  fill(255, 204, 0);
  rect(50, 250, 120, 40);

  //this is the current time.
  var h = hour();
  var m = minute();
  var s = second();
  fill(255)
  textSize(20);
  text("Current Time: ", 50, 200)
  text(h + ": " + m + ": " + s,60, 280)
}