//define variables
var table1; 
var table2;
var table3;
var table4;
var table5;
var table6;

var startname1 = []; endname1 = []; count1 = [];
var startname2 = []; endname2 = []; count2 = [];
var startname3 = []; endname3 = []; count3 = [];
var startname4 = []; endname4 = []; count4 = [];
var startname5 = []; endname5 = []; count5 = [];
var startname6 = []; endname6 = []; count6 = [];

var state = 0;
var docks3164 = 67;
var docks3255 = 19;
var docks319 = 33;

// var starttext1 = 615;
var starttext2 = 50;
var starttext3 = 815;

var stationx = 400; stationy = 60;

function preload() {
  table1 = loadTable('3164start.csv', 'csv', 'header');
  table2 = loadTable('3164end.csv', 'csv', 'header');
  table3 = loadTable('3255start.csv', 'csv', 'header');
  table4 = loadTable('3255end.csv', 'csv', 'header');
  table5 = loadTable('319start.csv', 'csv', 'header');
  table6 = loadTable('319end.csv', 'csv', 'header');
  // console.log(table2);
}

function setup() {
  createCanvas(1280, 3000);
  loadData();

  button = createButton('Uptown');
  button.mousePressed(Uptown);
  button.position(50, 100);

  button = createButton('Midtown');
  button.mousePressed(Midtown);
  button.position(150, 100);

  button = createButton('Downtown');
  button.mousePressed(Downtown);
  button.position(250, 100);
}

function Uptown() {
  if (state == 1) {
    state = 0;
  } else {
    state = 1;
  }
}

function Midtown() {
  if (state == 2) {
    state = 0;
  } else {
    state = 2;
  }
}

function Downtown() {
  if (state == 3) {
    state = 0;
  } else {
    state = 3;
  }
}

function draw() {
  background(255);

  if (state == 1) {
    drawUptown();
  }

  if (state == 2) {
    drawMidtown();
  }

  if (state == 3) {
    drawDowntown();
  }

  text("Station: ", stationx, stationy);
  text("Total Docks: ", stationx, stationy+20);
  text("Total Ridership: ", stationx, stationy+40);
  text("Demand and Supply Ratio: ", stationx, stationy+60);
  text("Rides End at This Station: ", stationx, stationy+80);
  text("Rides Start from This Station: ", stationx, stationy+100);
}

function drawUptown() {
  for (var i = 0; i <= count1.length; i++) {
    if (count1[i] > 1) {
      stroke(3, 169, 244);
      strokeWeight(count1[i]/5);
      line(510, 450+2*i, 810, 50+10*i);
      }
  }

  //?? if (mouseX > starttext1 && mouseX < starttext1+endname1[i].length && mouseY > 10*i && mouseY < 10*(i+1) )
  for (var i = 0; i <= count1.length; i++) {
    if (count1[i] > 1) {
      fill("grey");
      noStroke();
      text(endname1[i], starttext3, 50+10*i);
    } 
  }

//trips that end at id3164
  for (var j = 0; j <= count2.length; j++) {
    if (count2[j] > 1) {
      stroke(3, 169, 244);
      strokeWeight(count2[j]/3);
      line(200, 100+10*j, 500, 500+2*j);
    }
  }

  for (var j = 0; j <= count2.length; j++) {
    if (count2[j] > 1) {
      fill("grey");
      noStroke();
      text(startname2[j], starttext2, 100+10*j);
    }
  }

  push();
  fill(80);
  rect(500, 300, 10, docks3164*10);
  text("Columbus Ave. W 72 St", stationx+50, stationy);
  text("67", stationx+80, stationy+20);
  text("431", stationx+100, stationy+40);
  text("6.43", stationx+160, stationy+60);
  text("174", stationx+150, stationy+80);
  text("257 ", stationx+180, stationy+100);
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
        strokeWeight(count4[j]/5);
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
  rect(500, 800, 10, docks3255*10);
  text("8 Ave. W 31 St", stationx+50, stationy);
  text("19", stationx+80, stationy+20);
  text("2947", stationx+100, stationy+40);
  text("155.1", stationx+160, stationy+60);
  text("1745", stationx+150, stationy+80);
  text("1202 ", stationx+180, stationy+100);
  pop();
}

function drawDowntown() {
  //trips that start at id319
  for (var i = 0; i <= count5.length; i++) {
    if (count5[i] > 1) {
      stroke(3, 169, 244);
      strokeWeight(count5[i]/5);
      line(510, 450+2*i, 810, 50+10*i);
      }
  }
    
  for (var i = 0; i <= count5.length; i++) {
    if (count5[i] > 1) {
      fill("grey");
      noStroke();
      text(endname5[i], starttext3, 50+10*i);
    } 
  }

//trips that end at id319
  for (var j = 0; j <= count6.length; j++) {
    if (count6[j] > 1) {
      stroke(3, 169, 244);
      strokeWeight(count6[j]/3);
      line(200, 100+10*j, 500, 500+2*j);
    }
  }

  for (var j = 0; j <= count6.length; j++) {
    if (count6[j] > 1) {
      fill("grey");
      noStroke();
      text(startname6[j], starttext2, 100+10*j);
    }
  }

  push();
  fill(80);
  rect(500, 400, 10, docks319*10);
  text("Station: Fulton St & Broadway", stationx, stationy);
  text("33", stationx+80, stationy+20);
  text("10.79", stationx+100, stationy+40);
  text("356", stationx+160, stationy+60);
  text("179", stationx+150, stationy+80);
  text("177 ", stationx+180, stationy+100);
  pop();
}

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
  //downtown
  startname5 = table5.getColumn("startstation");
  endname5 = table5.getColumn("endstation");
  count5 = table5.getColumn("count");
  startname6 = table6.getColumn("startstation");
  endname6 = table6.getColumn("endstation");
  count6 = table6.getColumn("count");
}