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
  createCanvas(800 , 1000);
  background(255);
  loadData();
}

function draw() {
  background(255);
  noStroke();
  var num = numbers;
  
  //draw the nested loop
  for (var i = 0; i <= boro.length; i++) {
    for (var j = 0; j <= numbers[j]; j++) { 
    //for every row: read the numbers, and then for every j, draw one square, until j>numbers)
      if (boro[i] == "Bronx" ) {
        if (type[i] == "1") {
          fill(255, 190, 0);
          rect(200+20*(j+1), 140, 10, 10) //show the preservation units
        }
      }
    }
  }

   //Five Boroughs
   push();
   fill(0);
   textSize(20);
   textStyle(BOLD);
   textFont('Helvetica')
   text("Bronx", 100, 150);
   text("Brooklyn", 100, 300);
   text("Manhattan", 100, 450);
   text("Queens", 100, 600);
   text("Staten Island", 100, 750);
   pop();
}

function loadData() {
  boro = table.getColumn("Borough");
  type = table.getColumn("Type");
  numbers = table.getColumn("Numbers"); 

  //console.log(boro)
}