//define variables
var table1; 
var table2;
var table3;
var table4;
var startname1 = []; endname1 = []; count1 = []; 
var startname2 = []; endname2 = []; count2 = [];
var startname3 = []; endname3 = []; count3 = [];
var startname4 = []; endname4 = []; count4 = [];


//define constants
var docks3164 = 65; 
var docks3255 = 46;
//var docks319 = ??;
var starttext1 = 615; 
var starttext2 = 50;
var starttext3 = 815;

function preload() {
  table1 = loadTable('3164start.csv', 'csv', 'header');
  table2 = loadTable('3164end.csv', 'csv', 'header');
  table3 = loadTable('3255start.csv', 'csv', 'header');
  table4 = loadTable('3255end.csv', 'csv', 'header');
  // console.log(table1);
}

function setup() {
  createCanvas(1280, 3000);
  background(255);
  noStroke();
  loadData();

  sel = createSelect();
  sel.position(10, 10);
  sel.option("Uptown");
  sel.option("Midtown");
  sel.changed(mySelectEvent);
}

function mySelectEvent() {
  var item = sel.value();
  switch (item) {
    
    case "Uptown":
    drawUptown();

    case "Midtown":
    drawMidtown();

    // case "Downtown":
    // drawDowntown();
  }
}


function drawUptown() {
    //trips that start at id3164
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

    //trips that end at id3164
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
  text("Station: Columbus Ave. W 72 St", 100, 10)
  pop();
}

function drawMidtown() {
    //trips that start at id 3255
    for (var i = 0; i <= count3.length; i++) {
      if (count3[i] > 1) {
        stroke(3, 169, 244);
        strokeWeight(count3[i]/5);
        line(510, 800+2*i, 810, 50+10*i);
      }
    }

    for (var i = 0; i <= count3.length; i++) {
      if (count3[i] > 1) {
        fill("grey");
        noStroke();
        text(endname3[i], starttext3, 50+10*i);
      } 
    }

    //trips that end at id3255
    for (var j = 0; j <= count4.length; j++) {
      if (count4[j] > 1) {
        stroke(3, 169, 244);
        strokeWeight(count4[j]/3);
        line(200, 10*j, 500, 800+2*j);
      }
    }

    for (var j = 0; j <= count4.length; j++) {
      if (count4[j] > 1) {
        fill("grey");
        noStroke();
        text(startname4[j], starttext2, 10*j);
      }
    }

  push();
  fill(80);
  rect(500, 500, 10, docks3255*5);
  text("Station: 8 Ave. W 31 St", 100, 10)
  pop();
}

// function draw() {

// }

function loadData() {
  //uptown
  startname1 = table1.getColumn("startstation");
  endname1 = table1.getColumn("endstation");
  count1 = table1.getColumn("count");
  startname2 = table2.getColumn("startstation");
  endname2 = table2.getColumn("endstation");
  count2 = table2.getColumn("count");
  //console.log(count2);

  //midtown
  startname3 = table3.getColumn("startstation");
  endname3 = table3.getColumn("endstation");
  count3 = table3.getColumn("count");
  startname4 = table4.getColumn("startstation");
  endname4 = table4.getColumn("endstation");
  count4 = table4.getColumn("count");
}