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
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);
  loadData();
}

function draw() {
  background(255);
  noStroke();
  
  //draw the nested loop
  for (var i = 0; i <= boro.length; i++) {
    for (var j = 0; j <= squares[j]; j++) { 
    //for every row(i): for every j, draw one square;(until j>numbers)
          fill(255, 190, 0);
          rect(20*(j+1), 150, 10, 10) //show the preservation units
        }
   }
}

function loadData() {
  boro = table.getColumn("Borough");
  type = table.getColumn("Type");
  squares = table.getColumn("Numbers"); 
  rentals = table.getColumn("Rental");
  owners = table.getColumn("Homeownership");
  others = table.getColumn("Others");

  //console.log(boro)
}