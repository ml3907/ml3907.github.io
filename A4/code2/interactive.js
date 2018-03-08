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
  createCanvas(window.innerWidth, 1280);
  background(255);
  loadData();

  button = createButton('Check the homeownership');
  button.position(200, 50);
  button.mousePressed(change);
}

function change () { //when mouse is pressed, change to the view of homeownership composition.
  var rnum = rentals/200;
  var hnum = homeownership/200;
  var onum = others/200;

  for (var i = 0; i <= boro.length; i++) {
    for (var j = 0; j <= rnum[i]; j++) {
      if (type[i] == "1") {
      fill(0);//show the rental units.
      rect(200+10*(j-1), 100+60*i, 5, 5)
      } else {
      fill(255, 190, 0);//show the homeownership units.
      rect(200+10*(j-1), 80+60*i, 5, 5)
      }
    }
}

function draw() {
  background(255);
  noStroke();
  
  //draw the squares
  for (var i = 0; i <= boro.length; i++) {
    for (var j = 0; j <= squares[i]; j++) {
      if (type[i] == "1") {
      fill(0);//show the new construction units.
      rect(200+20*(j-1), 100+60*i, 10, 10)
      } else {
      fill(255, 190, 0);//show the preservation units.
      rect(200+20*(j-1), 80+60*i, 10, 10)
      }
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
}