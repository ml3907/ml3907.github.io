//define variables
var table1; 
var table2;
var startname1 = []; endname1 = []; count1 = []; 
var startname2 = []; endname2 = []; count2 = [];

//define constants
var docks3164 = 65;
var starttext1 = 615;
var starttext2 = 50;

function preload() {
  table1 = loadTable('3164start.csv', 'csv', 'header');
  table2 = loadTable('3164end.csv', 'csv', 'header');
  // console.log(table);
}

function setup() {
  createCanvas(1280, 1400);
  background(255);
  noStroke();
  loadData();
}

function draw() {
 // var textwidth = map(endname[i].length,200, 100, starttext, starttext+???);


  for (var i = 0; i <= count1.length; i++) {
    if (count1[i] > 1) {
      stroke(3, 169, 244);
      strokeWeight(count1[i]/5);
      line(410, 450+2*i, 610, 50+10*i);
    }
  }

//?? if (mouseX > starttext1 && mouseX < starttext1+endname1[i].length && mouseY > 10*i && mouseY < 10*(i+1) )
  
  for (var i = 0; i <= count1.length; i++) {
    if (count1[i] > 1) {
      fill("grey");
      noStroke();
      text(endname1[i], starttext1, 50+10*i);
    } 
  }

//should delete the last row of table2
  for (var j = 0; j <= count2.length; j++) {
    if (count2[j] > 1) {
      stroke(3, 169, 244);
      strokeWeight(count2[j]/3);
      line(200, 10*j, 400, 500+2*j);
    }
  }

  for (var j = 0; j <= count2.length; j++) {
    if (count2[j] > 1) {
      fill("grey");
      noStroke();
      text(startname2[j], starttext2, 10*j);
    }
  }

  push();
  fill(80);
  rect(400, 400, 10, docks3164*5);
  pop();
}

function loadData() {
  startname1 = table1.getColumn("startstation");
  endname1 = table1.getColumn("endstation");
  count1 = table1.getColumn("count");
  //console.log(count1);
  startname2 = table2.getColumn("startstation");
  endname2 = table2.getColumn("endstation");
  count2 = table2.getColumn("count");

}
