function setup() {
  createCanvas(1280, 960);
}

function draw() {
  background(30, 20, 55, 55)

  text("Welcome to ", 200, 480);
  textSize(50);
  fill(200);

  text("DATA VISUALIZATION!", 500, 480);
  fill(255, 204, 0);

  ellipse(280, 180, 170, 180);
  fill(255);
    
  ellipse(250, 150, 25, 25);
  fill(255);
  ellipse(310, 150, 25, 25);
  fill(255);

  ellipse(254, 154, 14, 14);
  fill(15);
  ellipse(314, 154, 14, 14);
  fill(15);
  
  noFill();
  arc(280, 200, 70, 50, 0, PI)
}