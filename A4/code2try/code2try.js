//define variables
var table;
var boro = []; type = []; squares = [];
var rnum = []; hnum = []; onum = [];
//define constants
var margin = 200;
var value1 = 0;
var value2 = 0;
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
  button.position(60, 50);
  button.mousePressed(change);

  button = createButton('Show the homeownership composition');
  button.position(300,50);
  button.mousePressed(togglehome);
}

function togglehome() {
  state = (state == 0) ? 1 : 0 

    if (state == 1) {
    fill(255, 190, 0);
    noStroke();
    rect(100,600,50,50)
  } else {
    fill(220);
    noStroke();
    rect(100,600,50,50)
  } 
}

function change() {
  value2 = (value2 == 0) ? color(255, 190, 0) : 0;
}

function draw() {
  //draw the nested loop
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
          } else if (j > 35 && j <= 40) {
            rect(15*(j-1)-225, 140+40*i, 10, 10);
          } else if (j > 40 && j <= 45) {
            rect(15*(j-1)-175, 140+40*i, 10, 10);
          } 
        } else {
            fill(255, 190, 0);
            rect(15*(j-1)-210, 180+40*i, 10, 10);
          }
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

  console.log(rnum);
  console.log(hnum);
}