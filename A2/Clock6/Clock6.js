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
  var angle_h = map(h, 0, 12, 0, 2*PI)

  //these are the eyes.
  push();
  if (h >=12) {
    fill(255);
    noStroke();
    ellipse(270, 160, 80, 80);
    ellipse(370, 160, 80, 80);
  } else {
    fill(100);
    noStroke();
    ellipse(270, 160, 80, 80);
    ellipse(370, 160, 80, 80);
  }
  pop();

  push();
  if (h >=12) {
    fill(255);
    noStroke();
    ellipse(270, 300, 80, 80);
    ellipse(370, 300, 80, 80);
  } else {
    fill(100);
    noStroke();
    ellipse(270, 300, 80, 80);
    ellipse(370, 300, 80, 80);
  }

  //this is hour circle.
  push();
  translate(width/2+50,height/2-80)
  noStroke();
  fill(15);
  rotate(angle_h-(PI-2));
  ellipseMode(CENTER);
  ellipse(0, 20, 20, 20);
  pop();
  //this is minute circle.
  push();
  translate(width/2-50,height/2-80)
  noStroke();
  fill(15);
  rotate(angle_m-(PI-2));
  ellipseMode(CENTER);
  ellipse(0, 20, 20, 20);
  pop();

  //this is second circle1.
  push();
  translate(width/2+50,height/2+60)
  noStroke();
  fill(255, 190, 0);
  rotate(angle_s-(PI-2));
  ellipseMode(CENTER);
  ellipse(0, 20, 20, 20);
  pop();
  //this is second circle2.
  push();
  translate(width/2-50,height/2+60)
  noStroke();
  fill(255, 190, 0);
  rotate(angle_s-(PI-2));
  ellipseMode(CENTER);
  ellipse(0, 20, 20, 20);
  pop();

}