//define constants
var docks3164 = 65; 
var docks3255 = 46;

var state = 0;

function setup() {
  createCanvas(1280, 3000);
  background(255);
  noStroke();
  loadData();

  sel = createSelect();
  sel.position(10, 10);
  sel.option("Select");
  sel.option("Uptown");
  sel.option("Midtown");
  sel.changed(mySelectEvent);
}

function mySelectEvent() {
  var item = sel.value();
  if (item == "Uptown" && state == 1) {
    state = 0;
  } else {
    state = 1;
  }

  // if (item == "Midtown") {
  //   state = 2;
  //   drawMidtown();
  // } else {
  //   state = 0;
  // }
}

function draw() {
  if (state == 1) {
    drawUptown();
  } 
  // else if (state == 2) {
  //   drawDowntown();
  // }
}

function drawUptown() {
  push();
  fill(80);
  rect(400, 400, 10, docks3164*5);
  text("Station: Columbus Ave. W 72 St", 100, 10)
  pop();
}

function drawMidtown() {
  push();
  fill(80);
  rect(500, 500, 10, docks3255*5);
  text("Station: 8 Ave. W 31 St", 100, 10)
  pop();
}

// function draw() {

// }