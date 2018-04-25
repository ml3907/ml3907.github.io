//next to do: insert citibike logo/image
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

var rectwidth1, rectwidth2, rectwidth3, rectwidth4, rectwidth5, rectwidth6;
var minNameLen1, maxNameLen1, minNameLen2, maxNameLen2, minNameLen3, maxNameLen3;
var minNameLen4, maxNameLen4, minNameLen5, maxNameLen5, minNameLen6, maxNameLen6;

var sel, item;
//define constants
var state = 0, stateHide = 0;
var docks3164 = 67;
var docks3255 = 19;
var docks319 = 33;

// var starttext1 = 615;
var starttext2 = 180;
var starttext3 = 960;
var lineheight = 12;
var rectheight = 12;

var stationx = 150, stationy = 45, mid = 640;

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
  createCanvas(1300, 3500);
  loadData();
  
  sel = createSelect();
  sel.position(50, 100);
  sel.option(" ");
  sel.option("Uptown");
  sel.option("Midtown");
  sel.option("Downtown");
  sel.changed(mySelectEvent);
}

function mySelectEvent() {
  item = sel.value();
  if (item == "Uptown") {
    state = 1;
    clear();
  } else if (item == "Midtown") {
    state = 2;
    clear();
  } else if (item == "Downtown") {
    state = 3;
    clear();
  }
}

function draw() {
  background(255);
  if (state == 1) {
    drawUptown();
  } else if (state == 2) {
    drawMidtown();
  } else if (state == 3) {
    drawDowntown();
  }
  
  // Settings to map the interactive text
  // Uptown
  for (var i = 0; i < count1.length; i++) {
    rectwidth1 = map(endname1[i].length,minNameLen1, maxNameLen1, 80, 200);
    if (!maxNameLen1) {
      maxNameLen1 = endname1[i].length;
    } else if (endname1[i].length > maxNameLen1) {
      maxNameLen1 = endname1[i].length;
    }

    if (!minNameLen1) {
      minNameLen1 = endname1[i].length;
    } else if (endname1[i].length < minNameLen1) {
      minNameLen1 = endname1[i].length;
    }
  }
  //console.log(minNameLen1);

  // Midtown
  for (var i = 0; i < count3.length; i++) {
    rectwidth3 = map(endname3[i].length,minNameLen3, maxNameLen3, 80, 200);
    if (!maxNameLen3) {
      maxNameLen3 = endname3[i].length;
    } else if (endname3[i].length > maxNameLen3) {
      maxNameLen3 = endname3[i].length;
    }

    if (!minNameLen3) {
      minNameLen3 = endname3[i].length;
    } else if (endname3[i].length < minNameLen3) {
      minNameLen3 = endname3[i].length;
    }
  }

  // Downtown
  for (var i = 0; i < count5.length; i++) {
    rectwidth5 = map(endname5[i].length,minNameLen5, maxNameLen5, 80, 200);
    if (!maxNameLen5) {
      maxNameLen5 = endname5[i].length;
    } else if (endname5[i].length > maxNameLen5) {
      maxNameLen5 = endname5[i].length;
    }

    if (!minNameLen5) {
      minNameLen5 = endname5[i].length;
    } else if (endname5[i].length < minNameLen5) {
      minNameLen5 = endname5[i].length;
    }
  }

  fill(0);
  textSize(14);
  text("Station: ", stationx, stationy);
  text("Total Docks: ", stationx+250, stationy);
  text("Total Ridership: ", stationx+500, stationy);
  text("Demand and Supply Ratio: ", stationx, stationy+20);
  text("Rides End at This Station: ", stationx+250, stationy+20);
  text("Rides Start from This Station: ", stationx+500, stationy+20);
}

// how to draw a group of curve???
function drawUptown() {
  push();
  for (var i = 0; i <= count1.length; i++) {
    if (count1[i] > 1) {
      stroke(3, 169, 244);
      strokeWeight(count1[i]/5);
      strokeCap(SQUARE);
      line(mid+5, 450+2*i, mid+305, 50+lineheight*i);
      }
  }
  pop();

  push();
  //display the station name; highlight when mouse move over it
  for (var i = 0; i < count1.length; i++) {
    if (count1[i] > 1) {
      if (mouseX > starttext3 && mouseX < starttext3+180 && mouseY < 50+lineheight*i && mouseY > 50+lineheight*i+(-1*rectheight)) {
        fill(0);
        textSize(14);
        text(endname1[i], starttext3, 50+lineheight*i);

        fill(30, 136, 229);
        textSize(12);
        text(count1[i]+ " rides end here", mouseX+rectwidth1, 50+lineheight*i);
      } else {
        fill("grey");
        textSize(12);
        text(endname1[i], starttext3, 50+lineheight*i);
      }
    }
  }
  pop();

//trips that end at id3164
  push();
  for (var j = 0; j <= count2.length; j++) {
    if (count2[j] > 1) {
      stroke(3, 169, 244);
      strokeWeight(count2[j]/3);
      strokeCap(SQUARE);
      line(mid-300, 100+lineheight*j, mid, 460+2*j);
    }
  }
  pop();

  push();
  for (var j = 0; j < count2.length; j++) {
    if (count2[j] > 1) {
      if (mouseX > starttext2 && mouseX < starttext2+180 && mouseY > 100+lineheight*j+(-1*rectheight) && mouseY < 100+lineheight*j) {
        fill(0);
        textSize(14);
        text(startname2[j], starttext2, 105+lineheight*j);

        fill(30, 136, 229);
        textSize(12);
        text(count2[j]+ " rides start here", 50, 105+lineheight*j);
      } else {
        fill("grey");
        noStroke();
        textSize(12);
        text(startname2[j], starttext2, 105+lineheight*j);
      }
    }
  }
  pop();

  push();
  fill(30, 136, 229);
  noStroke();
  rect(mid, 400, 10, docks3164*5);

  fill(21, 101, 192);
  text("Columbus Ave. W 72 St", stationx+60, stationy);
  text("67", stationx+340, stationy);
  text("431", stationx+610, stationy);
  text("6.43", stationx+190, stationy+20);
  text("174", stationx+430, stationy+20);
  text("257 ", stationx+700, stationy+20);
  pop();
}

//need to change the 系数
function drawMidtown() {
  push();
  //trips that start at id 3255
  for (var i = 0; i <= count3.length; i++) {
    if (count3[i] > 1) {
      stroke(3, 169, 244);
      strokeWeight(count3[i]/8);
      strokeCap(SQUARE);
      line(mid+5, 800+5*i, mid+305, 100+lineheight*i);
    }
  }
  pop();

  push();
  //display the station name; highlight when mouse move over it
  for (var i = 0; i < count3.length; i++) {
    if (count3[i] > 1) {
      if (mouseX > starttext3 && mouseX < starttext3+180 && mouseY < 100+lineheight*i && mouseY > 100+lineheight*i+(-1*rectheight)) {
        fill(0);
        textSize(14);
        text(endname3[i], starttext3, 100+lineheight*i);

        fill(30, 136, 229);
        textSize(12);
        text(count3[i]+ " rides end here", mouseX+rectwidth3, mouseY);
      } else {
        fill("grey");
        textSize(12);
        text(endname3[i], starttext3, 100+lineheight*i);
      }
    }
  }
  pop();

    //trips that end at id3255
  push();
  for (var j = 0; j <= count4.length; j++) {
    if (count4[j] > 1) {
      stroke(3, 169, 244);
      strokeWeight(count4[j]/8);
      strokeCap(SQUARE);
      line(mid-300, 100+lineheight*j, mid, 800+5*j);
    }
  }
  pop();

  push();
  for (var j = 0; j < count4.length; j++) {
    if (count4[j] > 1) {
      if (mouseX > starttext2 && mouseX < starttext2+180 && mouseY > 100+lineheight*j+(-1*rectheight) && mouseY < 100+lineheight*j) {
        fill(0);
        textSize(14);
        text(startname4[j], starttext2, 100+lineheight*j);

        fill(30, 136, 229);
        textSize(12);
        text(count4[j]+ " rides start here", 50, 100+lineheight*j);
      } else {
        fill("grey");
        noStroke();
        textSize(12);
        text(startname4[j], starttext2, 100+lineheight*j);
      }
    }
  }
  pop();

  push();
  fill(200);
  noStroke();
  rect(mid-5, 770, 10, 1320);
  fill(30, 136, 229);
  noStroke();
  rect(mid-5, 1500, 10, docks3255*5);
  fill(21, 101, 192);
  text("8 Ave. W 31 St", stationx+60, stationy);
  text("19", stationx+340, stationy);
  text("2,947", stationx+610, stationy);
  text("155.1", stationx+190, stationy+20);
  text("1,745", stationx+430, stationy+20);
  text("1,202 ", stationx+700, stationy+20);
  pop();
}

function drawDowntown() {
  push();
  //trips that start at id319
  for (var i = 0; i <= count5.length; i++) {
    if (count5[i] > 1) {
      stroke(3, 169, 244);
      strokeWeight(count5[i]/5);
      strokeCap(SQUARE);
      line(mid+5, 500+2*i, mid+305, 50+lineheight*i);
      }
  }
  pop();
    
  push();
  //display the station name; highlight when mouse move over it
  for (var i = 0; i < count5.length; i++) {
    if (count5[i] > 1) {
      if (mouseX > starttext3 && mouseX < starttext3+180 && mouseY < 50+lineheight*i && mouseY > 50+lineheight*i+(-1*rectheight)) {
        fill(0);
        textSize(14);
        text(endname5[i], starttext3, 50+lineheight*i);

        fill(30, 136, 229);
        textSize(12);
        text(count5[i]+ " rides end here", mouseX+rectwidth5, mouseY);
      } else {
        fill("grey");
        textSize(12);
        text(endname5[i], starttext3, 50+lineheight*i);
      }
    }
  }
  pop();

//trips that end at id319
  push();
  for (var j = 0; j <= count6.length; j++) {
    if (count6[j] > 1) {
      stroke(3, 169, 244);
      strokeWeight(count6[j]/3);
      strokeCap(SQUARE);
      line(mid-300, 100+lineheight*j, mid, 500+2*j);
    }
  }
  pop();

  push();
  for (var j = 0; j < count6.length; j++) {
    if (count6[j] > 1) {
      if (mouseX > starttext2 && mouseX < starttext2+180 && mouseY > 100+lineheight*j+(-1*rectheight) && mouseY < 100+lineheight*j) {
        fill(0);
        textSize(14);
        text(startname6[j], starttext2, 100+lineheight*j);

        fill(30, 136, 229);
        textSize(12);
        text(count6[j]+ " rides start here", 50, 100+lineheight*j);
      } else {
        fill("grey");
        noStroke();
        textSize(12);
        text(startname6[j], starttext2, 100+lineheight*j);
      }
    }
  }
  pop();

  push();
  fill(200);
  noStroke();
  rect(mid-5, 500, 10, 280);
  fill(30, 136, 229);
  noStroke();
  rect(mid-5, 550, 10, docks319*5);
  fill(21, 101, 192);
  text("Fulton St & Broadway", stationx+60, stationy);
  text("33", stationx+340, stationy);
  text("10.79", stationx+610, stationy);
  text("356", stationx+190, stationy+20);
  text("179", stationx+430, stationy+20);
  text("177 ", stationx+700, stationy+20);
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