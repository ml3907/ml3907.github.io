//define constants
var docks3164 = 65; 

var state = 0;

// function preload() {
//   table1 = loadTable('3164start.csv', 'csv', 'header');

//   // console.log(table1);
// }

function setup() {
  createCanvas(1280, 3000);
  background(255);
  noStroke();
  loadData();

  button = createButton('uptown');
  button.position(100, 100);
  button.mousePressed(nextState);
}

function nextState() {
  if (state == 1) {
    state = 0;
  } else {
    state = 1;
  }
}

function draw() {
  fill(0);
  rect(50, 50, 50, 50);

  if (state == 1) {
    drawUptown();
  } 
}

function drawUptown() {
    fill(80);
    rect(400, 400, 10, docks3164*5);
    text("Station: Columbus Ave. W 72 St", 100, 10)
}

// function loadData() {
//   //uptown
//   startname1 = table1.getColumn("startstation");
//   endname1 = table1.getColumn("endstation");
//   count1 = table1.getColumn("count");
//   //console.log(count2);
// }