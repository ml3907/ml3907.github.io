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
    if (boro[i] == "Bronx" && type[i] == "1") {
      fill(255, 190, 0);
    } else
    if (boro[i] == "Bronx" && type[i] == "0") {
      fill(255,150, 0);
    } else
    if (boro[i] == "Manhattan" && type[i] == "1") {
      fill(255, 100, 0);
    } else
    if (boro[i] == "Manhattan" && type[i] == "0") {
      fill(255, 50, 0);
    } else 
    if (boro[i] == "Queens" && type[i] == "1") {
      fill(255, 10, 0)
    } else
    if (boro[i] == "Queens" && type[i] == "0") {
      fill(0, 255, 0);
    } else 
    if (boro[i] == "Brooklyn" && type[i] == "1") {
      fill(50, 255, 0);
    } else 
    if (boro[i] == "Brooklyn" && type[i] == "0") {
      fill(100, 255, 0);
    } else
    if (boro[i] == "Staten Island" && type[i] == "1") {
      fill(150, 255, 0);
    } else
    if (boro[i] == "Staten Island" && type[i] == "0") {
      fill(190, 255, 0);
    }
    rect(200, 130+80*i, numbers[i]*100,20)
  }

   //Five Boroughs
   push();
   fill(0);
   textSize(20);
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