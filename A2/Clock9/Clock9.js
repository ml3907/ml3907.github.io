var second_xs = [], second_ys = [];

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(200);
  fill(255)

  var h = hour();
  var m = minute();
  var s = second();
  
  for (var i = 1, i < 60; i++) {
    drawBall(second_xs[i], second_ys[i], 10, 190)
  }
}