function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(200);

  var h = hour();
  var m = minute();
  var s = second();

  var angle_s = map(s, 0, 60, 0, 2*PI)
  var angle_m = map(m, 0, 60, 0, 2*PI)

  if (h>=12){h=h-12}
  var angle_h1 = map(h, 0, 12, 0, 2*PI)
  var angle_h2 = map(h+1, 0, 12, 0, 2*PI

  translate(width/2,height/2)

  push();
  rotate(angle_s-(PI-2))
  strokeWeight(0.5)
  line(0, 0, 100, 0)
  pop();

  push();
  rotate(angle_m-(PI-2))
  strokeWeight(1)
  line(0, 0, 80, 0)
  pop();

  push();
  rotate(angle_h1-(PI-2))
  strokeWeight(2)
  line(0, 0, 50, 0)
  pop();

  push();
  rotate(angle_h2-(PI-2))
  strokeWeight(2)
  fill(25, 25, 80, 80);
  line(0, 0, 50, 0)
  pop();
}