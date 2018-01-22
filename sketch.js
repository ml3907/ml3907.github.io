function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(51)
  text("Welcome to the LAST semester!", 150, 240);
  textSize(100);
  fill(150)

  ellipse(280, 180, 50, 50);
  fill(255, 204, 0);

  ellipse(290, 230, 10, 10);
  fill(255);

  ellipse(300, 230, 10, 10);
  fill(255);

  arc(290, 200, 30, 30, 0, PI);
  
  if (mouseIsPressed) {
  	fill('red');
  } else {
  	fill(255);
  } 
    text(Hello);
  	textSize(20);
}