var table;
var margin = 30;
var rectHeight = 10;

var no = [];
var yes = [];

function preload() {
  table = loadTable('HYNdata.csv','csv','header')
}

function setup() {
  createCanvas(window.innerWidth, 800);
  background(0);  
  textSize(12);
  textFont('Helvetica');

  loadData();
  noStroke();

}

function draw() {
  background(0);
  var boroughs = table.getColumn("Borough");
  var com = table.getColumn("Completion");

  var rental = table.getColumn("Rental");
  var owner = table.getColumn("Homeownership");
  
//for each borough, count the number of completed and uncompleted housing units.
//for completed housing units, map them by yellow square. the number of square   

  for (var i = 0; i< com.length; i++) {
    if (com[i] = 1) {
      append(no, 0);
    } else {
      append(yes, 0);
    }
  }

  for 

}