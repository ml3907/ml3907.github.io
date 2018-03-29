//define variables
var table;
var boro = []; type = []; squares = []; 
var rnum = []; hnum = []; onum = [];
var total = [61,63,79,20,5];
var newarr = [total, squares];
//define constants
var marginx = 200; marginy = 100;
var value1 = 150;
var value2 = 150;
var state = 0;

function preload(){
  table = loadTable('HNYdata.csv', 'csv', 'header');
  // console.log(table)
}

function setup() {
  createCanvas(1280, 800);
  background(255);
  noStroke();
  loadData();
}

function draw() {
  //Brooklyn
    for (var j = 0; j <= total[0]; j++) {
      if (j<20) {
        fill(0);
        rect(200+15*(j-1), 100, 10, 10);
      } else if (j>20 && j<=40) {
        fill("grey");
        rect(200+15*(j-1),100, 10, 10);
      } else if (j>40 && j<=60) {
        fill("red");
        rect(15*(j-1)-400, 220, 10, 10);
      } else if (j>60 && j <= 80) {
        fill(255, 190, 0);
        rect(15*(j-1)-715, 400, 10, 10);
       }
  }
}


function loadData() {
  boro = table.getColumn("Borough");
  type = table.getColumn("Type");
  squares = table.getColumn("Numbers");
  rnum = table.getColumn("RentalNum");
  hnum = table.getColumn("HomeNum");
  onum = table.getColumn("OthersNum");

  // console.log(rnum);
  // console.log(hnum);
}