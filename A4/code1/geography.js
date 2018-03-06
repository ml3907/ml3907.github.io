var table;
var margin = 20;
var boro = []; type = []; numbers = [];

function preload(){
  table = loadTable('HNYdata.csv', 'csv', 'header');
}

function setup() {
  createCanvas(800 , 1000);
  background(15);
  loadData();
}

function loadData() {
  var boro = table.getColumn("Borough");
  var type = table.getColumn("Type");
  var numbers = table.getColumn("Numbers"); 
}

function draw() {
  background(15);

  for (var i = 0; i < boro.length; i++) {
    if (boro[i] == "Bronx" ) {
      if (type[i] == "1") {
        fill(0); //show the new construction with black square 
      } else {
        fill(255); //show the preservation with white square
      }
      rect(margin*i, margin*i, numbers[i], numbers[i])
      }
    }

}