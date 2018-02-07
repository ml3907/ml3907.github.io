function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(200);

  var h = hour();
  var m = minute();
  var s = second();

  translate(width/2,height/2)

  var angle_s = map(s, 0, 60, 0, 2*PI)
  var angle_m = map(m, 0, 60, 0, 2*PI)
  if (h>=12){h=h-12}
  var angle_h = map(h, 0, 12, 0, 2*PI)

  //this is hour square.
  push();
  stroke(100);
  strokeWeight(2.5);
  noFill();
  rotate(angle_h-(PI-2));
  rectMode(CENTER);
  rect(0, 0, 150, 150);
  pop();
  //this is minute square.
  push();
  stroke(255, 190, 0);
  strokeWeight(2.5);
  noFill();
  rotate(angle_m-(PI-2));
  rectMode(CENTER);
  rect(0, 0, 150, 150);
  pop();
  //this is second square.
  push();
  stroke(255);
  strokeWeight(2.5);
  noFill();
  rotate(angle_s-(PI-2));
  rectMode(CENTER);
  rect(0, 0, 150, 150);
  pop();
}