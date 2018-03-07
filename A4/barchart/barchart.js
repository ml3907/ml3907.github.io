var table;
var margin = 20;

var boro = [];
var type = [];
var numbers = [];

function preload(){
  table = loadTable('HNYdata.csv', 'csv', 'header');
  console.log(table)
}

function setup() {
  createCanvas(window.innerWidth, 1280);
  background(255);
  loadData();
}

function draw() {
  background(255);
  noStroke();

  //draw the nested loop
  for (var i = 0; i <= type.length; i++) {
    if (type[i] == "1") {
      fill (0);
      rect(200, 100+60*i, numbers[i]*15,15)
    } else {
      fill(250, 190, 0);
      rect(200, 80+60*i, numbers[i]*15,15)
    }

  }

  //draw icons
  push()
  fill(0);
  rect(70, 690, 10, 10);
  pop();
  push();
  rect(255, 190, 0);
  rect(70, 710, 10, 10);
  pop();

   //Five Boroughs
   push();
   fill(0);
   textSize(20);
   textFont('Helvetica')
   text("Bronx", 70, 120);
   text("Brooklyn", 70, 240);
   text("Manhattan", 70, 360);
   text("Queens", 70, 480);
   text("Staten Island", 70, 600);
   pop();

   push();
   fill(0);
   textSize(16);
   textFont('Helvetica')
      textFont('Helvetica')
   text("* The Housing New York Units by Building data after January 1, 2014 comes from HPD.", 70, 740)
   text("New Construction Units", 100, 700);
   text("Preservation Units", 100, 720);
   pop();
}

function loadData() {
  boro = table.getColumn("Borough");
  type = table.getColumn("Type");
  numbers = table.getColumn("Numbers"); 

  //console.log(boro)
}