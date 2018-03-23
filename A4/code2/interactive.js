//define constants
var margin = 200;
var value1 = 0;
var value2 = 0;
//define variables
var table;
var boro = [];
var type = [];
var squares = [];

function preload(){
  table = loadTable('HNYdata.csv', 'csv', 'header');
  console.log(table)
}

function setup() {
  createCanvas(window.innerWidth, 1280);
  background(255);
  loadData();

  button = createButton('Check the composition of construction type');
  button.position(60, 50);
  button.mousePressed(change);
}

function change() {
  if (value2 === 0) {
    value2 = color(255, 190, 0);
  } else {
    value2 = 0;
  }
}

function draw() {
  background(255);
  noStroke();
  
  //draw the nested loop
  for (var i = 0; i <= boro.length; i++) {
    for (var j = 0; j <= squares[i]; j++) { 
    //for every row(i): let j(max)=squares[i], and for every j<=j(max), draw one square;
          if (type[i] == "1") {
            fill(value1);//show the new construction units.
            rect(200+20*(j-1), 100+60*i, 10, 10)
          } else {
            fill(value2);//show the preservation units.
            rect(200+20*(j-1), 80+60*i, 10, 10)
          }
    }
   }

  //draw icons
  push()
  fill(0);
  rect(50, 670, 10, 10);
  pop();
  push();
  fill(255, 190, 0);
  rect(50, 690, 10, 10);
  pop();

   //five Boroughs
  push();
  fill(0);
  textSize(20);
  textFont('Helvetica')
  text("Bronx", 50, 110);
  text("Brooklyn", 50, 230);
  text("Manhattan", 50, 350);
  text("Queens", 50, 470);
  text("Staten Island", 50, 590);
  pop();

  push();
  fill(0);
  textSize(16);
  textFont('Helvetica')
  textFont('Helvetica')
  text("*  The Housing New York Units by Building data after January 1, 2014 comes from HPD. One square represent 500 units.", 50, 720)
  text("New Construction Units", 80, 680);
  text("Preservation Units", 80, 700);
  pop();
}

function loadData() {
  boro = table.getColumn("Borough");
  type = table.getColumn("Type");
  squares = table.getColumn("Numbers"); 
}