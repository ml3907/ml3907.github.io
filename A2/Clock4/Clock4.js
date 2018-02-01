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
  var angle_h2 = map(h+1, 0, 12, 0, 2*PI)

  translate(width/2,height/2-50)
 
  push();
  noStroke()
  fill(255)
  ellipse(0,0,220,220)
  fill(255, 190, 0)
  ellipse(0,0,205,205)
  fill(0)
  ellipse(0,0,8,8)
  pop();

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
  line(0, 0, 60, 0)
  pop();

  push();
  stroke(150);
  rotate(angle_h2-(PI-2))
  strokeWeight(2)
  line(0, 0, 60, 0)
  pop();

  textSize(15);
  text("Current Time in New York: ", -160, 190)
  text("Current Time in Beijing:", -160, 220)

  push();
  text(h+12 + ": " + m + ": " + s, 70, 190)
  if (h>=12) {
    text(h +":" + m + ":" + s, 70, 220)
  } else {
    text(h+1 +": " + m + ": " + s, 70, 220)
  }
  pop()  
}