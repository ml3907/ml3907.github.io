function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(51)
  text("Welcome to the LAST semester!", 280, 240);
  textSize(32);
  fill(255, 204, 0);

  ellipse(280, 180, 40, 40);
  fill(255);

  ellipse(292, 230, 5, 5);
  fill(255);

  ellipse(308, 230, 5, 5);
  fill(255);

  arc(290, 200, 12, 12, 0, HALF_PI);
  
  if (mousePressed) {
  	text(Hello);
  	textSize(20);
  	fill(255);
  }
}