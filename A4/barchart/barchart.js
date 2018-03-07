var table;
var margin = 20;

var boro = [];
var type = [];
var rentals = [];
var owners = [];
var others = [];

function preload(){
  table = loadTable('HNYdata.csv', 'csv', 'header');
  console.log(table)
}

function setup() {
  createCanvas(800 , 1000);
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
      rect(200, 130+60*i, rentals[i]/100,20)
    } else {
      fill(250, 190, 0);
      rect(200+rentals[i-1]*10, 150+60*(i-1), rentals[i]/100,20)
    }

  }

   //Five Boroughs
   push();
   fill(0);
   textSize(20);
   textFont('Helvetica')
   text("Bronx", 50, 150);
   text("Brooklyn", 50, 270);
   text("Manhattan", 50, 390);
   text("Queens", 50, 510);
   text("Staten Island", 50, 630);
   pop();
}

function loadData() {
  boro = table.getColumn("Borough");
  type = table.getColumn("Type");
  rentals = table.getColumn("Rental"); 
  owners = table.getColumn("Homeownership");
  others = table.getColumn("Others");

  //console.log(boro)
}