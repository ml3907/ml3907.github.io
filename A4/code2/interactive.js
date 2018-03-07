var table;

var boro = [];
var type = [];
var squares = [];
var rentals = [];
var owners = [];
var others = [];

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
  for (var i = 0; i <= boro.length; i++) {
    for (var j = 0; j <= squares[i]; j++) { 
    //for every row(i): let j(max)=squares[i], and for every j<=j(max), draw one square;
          if (type[i] == "1") {
            fill(0);//show the new construction units.
            rect(200+20*(j-1), 100+60*i, 10, 10)
          } else {
            fill(255, 190, 0);//show the preservation units.
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
  text("Bronx", 50, 120);
  text("Brooklyn", 50, 240);
  text("Manhattan", 50, 360);
  text("Queens", 50, 480);
  text("Staten Island", 50, 600);
  pop();

  push();
  fill(0);
  textSize(16);
  textFont('Helvetica')
  textFont('Helvetica')
  text("*  The Housing New York Units by Building data after January 1, 2014 comes from HPD.", 50, 720)
  text("New Construction Units", 80, 680);
  text("Preservation Units", 80, 700);
  pop();
}

function loadData() {
  boro = table.getColumn("Borough");
  type = table.getColumn("Type");
  squares = table.getColumn("Numbers"); 
  rentals = table.getColumn("Rental");
  owners = table.getColumn("Homeownership");
  others = table.getColumn("Others");
}