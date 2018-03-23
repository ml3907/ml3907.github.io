//define variables
var table;
var boro = []; type = []; squares = [];
var rnum = []; hnum = []; onum = [];
//define constants
var margin = 200;
var value1 = 150;
var value2 = 150;
var state = 0;

function preload(){
  table = loadTable('HNYdata.csv', 'csv', 'header');
  console.log(table)
}

function setup() {
  createCanvas(1280, 800);
  background(255);
  noStroke();
  loadData();

  button = createButton('Check the construction type');
  button.position(200, 50);
  button.mousePressed(change);

  button = createButton('Show the homeownership composition');
  button.position(400,50);
  button.mousePressed(togglehome);
}

function togglehome() {
  state = (state == 0) ? 1 : 0 
    if (state == 1) {
      fill("red");
  } else {
    fill(150);
  } 
  homeCom();
}

function homeCom() {
  rect(400,400,20,20);
}

function change() {
  value1 = (value1 == 150) ? 0 : 150;
  value2 = (value2 == 150) ? color(255, 190, 0) : 150;
  consType();
}

function consType() {
  for (var i = 0; i <= boro.length; i++) {
      for (var j = 0; j <= squares[i]; j++) {
        if (type[i] == "1") {   
          fill(value1);//show the new construction units.       
            if (j < 5) {
              rect(200+15*(j-1), 100+40*i, 10, 10);
            } else if (j > 5 && j <= 10) {
              rect(220+15*(j-1), 100+40*i, 10, 10);
            } else if (j > 10 && j <= 15) {
              rect(250+15*(j-1), 100+40*i, 10, 10);
            } else if (j > 15 && j <= 20) {
              rect(15*(j-1)-40, 120+40*i, 10, 10);
            } else if (j > 20 && j <= 25) {
              rect(15*(j-1)-5, 120+40*i, 10, 10);
            } else if (j > 25 && j <= 30) {
              rect(15*(j-1)+25, 120+40*i, 10, 10);
            } else if (j > 30 && j <= 35) {
              rect(15*(j-1)-265, 140+40*i, 10, 10);
            }//show the new construction units.
          } else {
          fill(value2);
            if (j < 5) {
              rect(525+15*(j-1), 60+40*i, 10, 10);
            } else if (j > 5 && j <= 10) {
              rect(545+15*(j-1), 60+40*i, 10, 10);
            } else if (j > 10 && j <= 15) {
              rect(575+15*(j-1), 60+40*i, 10, 10);
            } else if (j > 15 && j <= 20) {
              rect(285+15*(j-1), 80+40*i, 10, 10);
            } else if (j > 20 && j <= 25) {
              rect(320+15*(j-1), 80+40*i, 10, 10);
            } else if (j > 25 && j <= 30) {
              rect(350+15*(j-1), 80+40*i, 10, 10);
            } else if (j > 30 && j <= 35) {
              rect(60+15*(j-1), 100+40*i, 10, 10);
            } else if (j > 35 && j <= 40) {
              rect(95+15*(j-1), 100+40*i, 10, 10);
            }
          }
      }
     }
}

function draw() {
  //draw icons
  push()
  fill(0);
  rect(50, 490, 10, 10);
  pop();
  push();
  fill(255, 190, 0);
  rect(50, 510, 10, 10);
  pop();

  //five Boroughs
  push();
  fill(0);
  textSize(18);
  textFont('Helvetica')
  text("Bronx", 50, 115);
  text("Brooklyn", 50, 195);
  text("Manhattan", 50, 275);
  text("Queens", 50, 355);
  text("Staten Island", 50, 435);
  pop();

  push();
  fill(0);
  textSize(16);
  textFont('Helvetica')
  textFont('Helvetica')
  text("*  The Housing New York Units by Building data after January 1, 2014 comes from HPD. One square represent 500 units.", 50, 540)
  text("New Construction Units", 80, 500);//need to add togglehome
  text("Preservation Units", 80, 520);//need to add togglehome.
  pop();
}

function loadData() {
  boro = table.getColumn("Borough");
  type = table.getColumn("Type");
  squares = table.getColumn("Numbers");
  rnum = table.getColumn("RentalNum");
  hnum = table.getColumn("HomeNum");
  onum = table.getColumn("OthersNum");

  console.log(rnum);
  console.log(hnum);
}