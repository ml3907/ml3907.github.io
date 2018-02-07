function setup() {
  createCanvas(600, 600);

  var second_xs = [], second_ys = [];
  for (var i = 0; i < 60; i++) {
    append(second_xs, random(width))
    append(second_ys, random(height))
  }
}

function draw() {
  background(200);
  fill(255)
 
  for (var i = 0; i < second(); i++) {
    drawBall(second_xs[i], second_ys[i], 10, 190)
  }
 }