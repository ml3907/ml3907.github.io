function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(200);

  var second_xs = [], second_ys = [];
  
  for (var i = 1, i < 60; i++) {
    drawBall(second_xs[i], second_ys[i], 10, 190)
  }
}