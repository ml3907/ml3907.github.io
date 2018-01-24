function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(30, 20, 55, 55)

  fill(200);
  text("Welcome to ", 30, 240);
  textSize(30);

  fill(255, 204, 0);
  text("DATA VISUALIZATION!", 230, 240);

  fill(255);
  ellipse(65, 110, 18, 18);
  fill(255);
  ellipse(95, 110, 18, 18);
  
  fill(15);
  ellipse(68, 113, 10, 10);
  fill(15);
  ellipse(98, 113, 10, 10);
    
  noFill();
  stroke(255);
  arc(80, 140, 40, 25, 0, PI);
}