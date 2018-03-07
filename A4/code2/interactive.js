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
    //for every row(i): for every j, draw one square;(until j>numbers)
          fill(255, 190, 0);
          rect(20*(j+1), 150, 10, 10) //show the preservation units
        }
   }
}

function loadData() {
  boro = table.getColumn("Borough");
  type = table.getColumn("Type");
  numbers = table.getColumn("Numbers"); 

  console.log(boro)
}