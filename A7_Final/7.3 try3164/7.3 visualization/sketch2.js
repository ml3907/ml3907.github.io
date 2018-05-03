//next to do: insert citibike logo/image
//define variables
var table1, table2, table3, table4, table5, table6;
var table7, table8, table9, table10, table11, table12

var endname1 = []; count1 = [];
var startname2 = []; count2 = [];
var endname3 = []; count3 = [];
var startname4 = []; count4 = [];
var endname5 = []; count5 = [];
var startname6 = []; count6 = [];

var endname7 = []; count7 = [];
var startname8 = []; count8 = [];
var endname9 = []; count9 = [];
var startname10 = []; count10 = [];
var endname11 = []; count11 = [];
var startname12 = []; count12 = [];

/*var rectwidth1, rectwidth2, rectwidth3, rectwidth4, rectwidth5, rectwidth6;
var minNameLen1, maxNameLen1, minNameLen2, maxNameLen2, minNameLen3, maxNameLen3;
var minNameLen4, maxNameLen4, minNameLen5, maxNameLen5, minNameLen6, maxNameLen6;
*/
var sel, item;
//define constants
var state = 0, stateHide = 0;
/*var docks3164 = 67;
var docks3255 = 19;
var docks319 = 33;*/

// var starttext1 = 615;
var starttext2 = 160;
var starttext3 = 960;
var lineheight = 12;
var rectheight = 12;

var stationx = 250, stationy = 45, mid = 640;

function setup() {
  createCanvas(1300, 3500);
  loadData();
  
  sel = createSelect();
  sel.position(50, 100);
  sel.option(" ");
  sel.option("Uptown");
  sel.option("— 72nd Street");
  sel.option("— Cathedral Pkwy");
  sel.option("Midtown");
  sel.option("— 31st Street");
  sel.option("— Pershing Square South");
  sel.option("Downtown");
  sel.option("— Fulton Street");
  sel.option("— Lafayette Street");
  sel.changed(mySelectEvent);
}

function mySelectEvent() {
  item = sel.value();
  if (item == "— 72nd Street") {
    state = 1;
    clear();
  } else if (item == "— Cathedral Pkwy") {
    state = 2;
    clear();
  } else if (item == "— 31st Street") {
    state = 3;
    clear();
  } else if (item == "— Pershing Square South") {
    state = 4;
    clear();
  } else if (item == "— Fulton Street") {
    state = 5;
    clear();
  } else if (item == "— Lafayette Street") {
    state = 6;
    clear();
  }
}

function draw() {
  background(255);
  if (state == 1) {
    drawUt1();
  } else if (state == 2) {
    drawUt2();
  } else if (state == 3) {
    drawMt1();
  } else if (state == 4) {
    drawMt2();
  } else if (state == 5) {
    drawDt1();
  } else if (state == 6) {
    drawDt2();
  }
  
 /* // Settings to map the interactive text
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
  }*/

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
function drawUt1() {
  push();
  for (var i = 0; i < count1.length; i++) {
      stroke(3, 169, 244);
      strokeWeight(count1[i]/5);
      strokeCap(SQUARE);
      line(mid, 450+2*i, mid+300, 100+lineheight*i);
      fill(3, 169, 244);
      noStroke();
      ellipse(mid+300, 100+lineheight*i,5,5);
  }
  pop();

  push();
  //display the station name; highlight when mouse move over it
  for (var i = 0; i < count1.length; i++) {
      if (mouseX > starttext3 && mouseX < starttext3+180 && mouseY < 100+lineheight*i && mouseY > 100+lineheight*i+(-1*rectheight)) {
        fill(0);
        textSize(14);
        text(endname1[i], starttext3, 105+lineheight*i);

        fill(30, 136, 229);
        textSize(12);
        text(count1[i]+ " rides end here", starttext3+220, 105+lineheight*i);
      } else {
        fill("grey");
        textSize(10);
        text(endname1[i], starttext3, 105+lineheight*i);
      }
  }
  pop();

//trips that end at id3164
  push();
  for (var j = 0; j < count2.length; j++) {
      stroke(3, 169, 244);
      strokeWeight(count2[j]/3);
      strokeCap(SQUARE);
      line(mid-300, 100+lineheight*j, mid, 460+2*j);
      fill(3, 169, 244);
      noStroke();
      ellipse(mid-300, 100+lineheight*j,5,5);
  }
  pop();

  push();
  for (var j = 0; j < count2.length; j++) {
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
        textSize(10);
        text(startname2[j], starttext2, 105+lineheight*j);
      }
  }
  pop();

  push();
  fill(21, 101, 192);
  text("Columbus Ave. W 72 St", stationx+60, stationy);
  text("67", stationx+340, stationy);
  text("431", stationx+610, stationy);
  text("6.43", stationx+190, stationy+20);
  text("174", stationx+430, stationy+20);
  text("257 ", stationx+700, stationy+20);
  pop();
}

function drawMt1() {
  push();
  //trips that start at id 3255
  for (var i = 0; i < count3.length; i++) {
      stroke(3, 169, 244);
      strokeWeight(count3[i]/8);
      strokeCap(SQUARE);
      line(mid, 800+5*i, mid+300, 100+lineheight*i);
      fill(3, 169, 244);
      noStroke();
      ellipse(mid+300, 100+lineheight*i,5,5);
  }
  pop();

  push();
  //display the station name; highlight when mouse move over it
  for (var i = 0; i < count3.length; i++) {
      if (mouseX > starttext3 && mouseX < starttext3+180 && mouseY < 105+lineheight*i && mouseY > 105+lineheight*i+(-1*rectheight)) {
        fill(0);
        textSize(14);
        text(endname3[i], starttext3, 105+lineheight*i);

        fill(30, 136, 229);
        textSize(12);
        text(count3[i]+ " rides end here", starttext3+220, mouseY);
      } else {
        fill("grey");
        textSize(10);
        text(endname3[i], starttext3, 105+lineheight*i);
      }
  }
  pop();

    //trips that end at id3255
  push();
  for (var j = 0; j < count4.length; j++) {
      stroke(3, 169, 244);
      strokeWeight(count4[j]/8);
      strokeCap(SQUARE);
      line(mid-300, 100+lineheight*j, mid, 800+5*j);
      fill(3, 169, 244);
      noStroke();
      ellipse(mid-300, 100+lineheight*j,5,5);
  }
  pop();

  push();
  for (var j = 0; j < count4.length; j++) {
      if (mouseX > starttext2 && mouseX < starttext2+180 && mouseY > 100+lineheight*j+(-1*rectheight) && mouseY < 100+lineheight*j) {
        fill(0);
        textSize(14);
        text(startname4[j], starttext2, 105+lineheight*j);

        fill(30, 136, 229);
        textSize(12);
        text(count4[j]+ " rides start here", 50, 100+lineheight*j);
      } else {
        fill("grey");
        noStroke();
        textSize(10);
        text(startname4[j], starttext2, 105+lineheight*j);
      }
  }
  pop();

  push();
  fill(21, 101, 192);
  text("8 Ave. W 31 St", stationx+60, stationy);
  text("19", stationx+340, stationy);
  text("2,947", stationx+610, stationy);
  text("155.1", stationx+190, stationy+20);
  text("1,745", stationx+430, stationy+20);
  text("1,202 ", stationx+700, stationy+20);
  pop();
}

function drawDt1() {
  push();
  //trips that start at id319
  for (var i = 0; i < count5.length; i++) {
      stroke(3, 169, 244);
      strokeWeight(count5[i]/5);
      strokeCap(SQUARE);
      line(mid, 500+2*i, mid+300, 100+lineheight*i);
      fill(3, 169, 244);
      noStroke();
      ellipse(mid+300, 100+lineheight*i,5,5);
  }
  pop();
    
  push();
  //display the station name; highlight when mouse move over it
  for (var i = 0; i < count5.length; i++) {
      if (mouseX > starttext3 && mouseX < starttext3+180 && mouseY < 105+lineheight*i && mouseY > 105+lineheight*i+(-1*rectheight)) {
        fill(0);
        textSize(14);
        text(endname5[i], starttext3, 105+lineheight*i);

        fill(30, 136, 229);
        textSize(12);
        text(count5[i]+ " rides end here", starttext3+220, mouseY);
      } else {
        fill("grey");
        textSize(10);
        text(endname5[i], starttext3, 105+lineheight*i);
      }
  }
  pop();

//trips that end at id319
  push();
  for (var j = 0; j < count6.length; j++) {
      stroke(3, 169, 244);
      strokeWeight(count6[j]/3);
      strokeCap(SQUARE);
      line(mid-300, 100+lineheight*j, mid, 500+2*j);
      fill(3, 169, 244);
      noStroke();
      ellipse(mid-300, 100+lineheight*j,5,5);
  }
  pop();

  push();
  for (var j = 0; j < count6.length; j++) {
      if (mouseX > starttext2 && mouseX < starttext2+180 && mouseY > 100+lineheight*j+(-1*rectheight) && mouseY < 100+lineheight*j) {
        fill(0);
        textSize(14);
        text(startname6[j], starttext2, 105+lineheight*j);

        fill(30, 136, 229);
        textSize(12);
        text(count6[j]+ " rides start here", 50, 100+lineheight*j);
      } else {
        fill("grey");
        noStroke();
        textSize(10);
        text(startname6[j], starttext2, 105+lineheight*j);
      }
  }
  pop();

  push();
  fill(21, 101, 192);
  text("Fulton St & Broadway", stationx+60, stationy);
  text("33", stationx+340, stationy);
  text("10.79", stationx+610, stationy);
  text("356", stationx+190, stationy+20);
  text("179", stationx+430, stationy+20);
  text("177 ", stationx+700, stationy+20);
  pop();
}

function drawUt2() {
  push();
  for (var i = 0; i < count7.length; i++) {
      stroke(3, 169, 244);
      strokeWeight(count7[i]/5);
      strokeCap(SQUARE);
      line(mid, 400+2*i, mid+300, 100+lineheight*i);
      fill(3, 169, 244);
      noStroke();
      ellipse(mid+300, 100+lineheight*i,5,5);
  }
  pop();

  push();
  //display the station name; highlight when mouse move over it
  for (var i = 0; i < count7.length; i++) {
      if (mouseX > starttext3 && mouseX < starttext3+180 && mouseY < 100+lineheight*i && mouseY > 100+lineheight*i+(-1*rectheight)) {
        fill(0);
        textSize(14);
        text(endname7[i], starttext3, 105+lineheight*i);

        fill(30, 136, 229);
        textSize(12);
        text(count7[i]+ " rides end here", starttext3+220, 105+lineheight*i);
      } else {
        fill("grey");
        textSize(10);
        text(endname7[i], starttext3, 105+lineheight*i);
      }
  }
  pop();

//trips that end at id3164
  push();
  for (var j = 0; j < count8.length; j++) {
      stroke(3, 169, 244);
      strokeWeight(count8[j]/3);
      strokeCap(SQUARE);
      line(mid-300, 100+lineheight*j, mid, 400+2*j);
      fill(3, 169, 244);
      noStroke();
      ellipse(mid-300, 100+lineheight*j,5,5);
  }
  pop();

  push();
  for (var j = 0; j < count8.length; j++) {
      if (mouseX > starttext2 && mouseX < starttext2+180 && mouseY > 100+lineheight*j+(-1*rectheight) && mouseY < 100+lineheight*j) {
        fill(0);
        textSize(14);
        text(startname8[j], starttext2, 105+lineheight*j);

        fill(30, 136, 229);
        textSize(12);
        text(count8[j]+ " rides start here", 50, 105+lineheight*j);
      } else {
        fill("grey");
        noStroke();
        textSize(10);
        text(startname8[j], starttext2, 105+lineheight*j);
      }
  }
  pop();

  push();
  fill(21, 101, 192);
  text("Cathedral Pkwy & Broadway", stationx+60, stationy);
  text("25", stationx+340, stationy);
  text("146", stationx+610, stationy);
  text("5.84", stationx+190, stationy+20);
  text("76", stationx+430, stationy+20);
  text("70 ", stationx+700, stationy+20);
  pop();
}

function drawMt2() {
  push();
  //trips that start at id 517
  for (var i = 0; i < count9.length; i++) {
      stroke(3, 169, 244);
      strokeWeight(count9[i]/3);
      strokeCap(SQUARE);
      line(mid, 500+5*i, mid+300, 100+lineheight*i);
      fill(3, 169, 244);
      noStroke();
      ellipse(mid+300, 100+lineheight*i,5,5);
  }
  pop();

  push();
  //display the station name; highlight when mouse move over it
  for (var i = 0; i < count9.length; i++) {
      if (mouseX > starttext3 && mouseX < starttext3+180 && mouseY < 105+lineheight*i && mouseY > 105+lineheight*i+(-1*rectheight)) {
        fill(0);
        textSize(14);
        text(endname9[i], starttext3, 105+lineheight*i);

        fill(30, 136, 229);
        textSize(12);
        text(count9[i]+ " rides end here", starttext3+220, mouseY);
      } else {
        fill("grey");
        textSize(10);
        text(endname9[i], starttext3, 105+lineheight*i);
      }
  }
  pop();

    //trips that end at id517
  push();
  for (var j = 0; j < count10.length; j++) {
      stroke(3, 169, 244);
      strokeWeight(count10[j]/3);
      strokeCap(SQUARE);
      line(mid-300, 100+lineheight*j, mid, 500+5*j);
      fill(3, 169, 244);
      noStroke();
      ellipse(mid-300, 100+lineheight*j,5,5);
  }
  pop();

  push();
  for (var j = 0; j < count10.length; j++) {
      if (mouseX > starttext2 && mouseX < starttext2+180 && mouseY > 100+lineheight*j+(-1*rectheight) && mouseY < 100+lineheight*j) {
        fill(0);
        textSize(14);
        text(startname10[j], starttext2, 105+lineheight*j);

        fill(30, 136, 229);
        textSize(12);
        text(count10[j]+ " rides start here", 50, 100+lineheight*j);
      } else {
        fill("grey");
        noStroke();
        textSize(10);
        text(startname10[j], starttext2, 105+lineheight*j);
      }
  }
  pop();

  push();
  fill(21, 101, 192);
  text("Pershing Square South", stationx+60, stationy);
  text("59", stationx+340, stationy);
  text("498", stationx+610, stationy);
  text("8.44", stationx+190, stationy+20);
  text("234", stationx+430, stationy+20);
  text("264", stationx+700, stationy+20);
  pop();
}

function drawDt2() {
  push();
  //trips that start at id293
  for (var i = 0; i < count11.length; i++) {
      stroke(3, 169, 244);
      strokeWeight(count11[i]/5);
      strokeCap(SQUARE);
      line(mid, 700+2*i, mid+300, 100+lineheight*i);
      fill(3, 169, 244);
      noStroke();
      ellipse(mid+300, 100+lineheight*i,5,5);
  }
  pop();
    
  push();
  //display the station name; highlight when mouse move over it
  for (var i = 0; i < count11.length; i++) {
      if (mouseX > starttext3 && mouseX < starttext3+180 && mouseY < 105+lineheight*i && mouseY > 105+lineheight*i+(-1*rectheight)) {
        fill(0);
        textSize(14);
        text(endname11[i], starttext3, 105+lineheight*i);

        fill(30, 136, 229);
        textSize(12);
        text(count11[i]+ " rides end here", starttext3+220, mouseY);
      } else {
        fill("grey");
        textSize(10);
        text(endname11[i], starttext3, 105+lineheight*i);
      }
  }
  pop();

//trips that end at id293
  push();
  for (var j = 0; j < count12.length; j++) {
      stroke(3, 169, 244);
      strokeWeight(count12[j]/3);
      strokeCap(SQUARE);
      line(mid-300, 100+lineheight*j, mid, 700+2*j);
      fill(3, 169, 244);
      noStroke();
      ellipse(mid-300, 100+lineheight*j,5,5);
  }
  pop();

  push();
  for (var j = 0; j < count12.length; j++) {
      if (mouseX > starttext2 && mouseX < starttext2+180 && mouseY > 100+lineheight*j+(-1*rectheight) && mouseY < 100+lineheight*j) {
        fill(0);
        textSize(14);
        text(startname12[j], starttext2, 105+lineheight*j);

        fill(30, 136, 229);
        textSize(12);
        text(count12[j]+ " rides start here", 50, 100+lineheight*j);
      } else {
        fill("grey");
        noStroke();
        textSize(10);
        text(startname12[j], starttext2, 105+lineheight*j);
      }
  }
  pop();

  push();
  fill(21, 101, 192);
  text("Lafayette St. & E 8 St.", stationx+60, stationy);
  text("55", stationx+340, stationy);
  text("13.1", stationx+610, stationy);
  text("721", stationx+190, stationy+20);
  text("358", stationx+430, stationy+20);
  text("363", stationx+700, stationy+20);
  pop();
}

function loadData() {
  //uptown1: Columbus Av.72
  endname1 = table1.getColumn("endstation");
  count1 = table1.getColumn("count");
  startname2 = table2.getColumn("startstation");
  count2 = table2.getColumn("count");
  //midtown1: 8 Av. 31st
  endname3 = table3.getColumn("endstation");
  count3 = table3.getColumn("count");
  startname4 = table4.getColumn("startstation");
  count4 = table4.getColumn("count");
  //downtown1: Fulton St
  endname5 = table5.getColumn("endstation");
  count5 = table5.getColumn("count");
  startname6 = table6.getColumn("startstation");
  count6 = table6.getColumn("count");
  //uptown2: Cathedral Pkwy
  endname7 = table7.getColumn("endstation");
  count7 = table7.getColumn("count");
  startname8 = table8.getColumn("startstation");
  count8 = table8.getColumn("count");
  //midtown2: Grand Central
  endname9 = table9.getColumn("endstation");
  count9 = table9.getColumn("count");
  startname10 = table10.getColumn("startstation");
  count10 = table10.getColumn("count");
  //downtown3: Lafayette St.
  endname11 = table11.getColumn("endstation");
  count11 = table11.getColumn("count");
  startname12 = table12.getColumn("startstation");
  count12 = table12.getColumn("count");
}

//3164: Columbus Av.72; 3255: 8 Av.; 319: Fulton St;
//3383: Cathedral Pkwy; 517: Grand Central; 293: Lafayette;
//pass-3507: Park Ave. 124th; 525: Hudson Yards; 436: Chambers St.

function preload() {
  table1 = loadTable('3164start.csv', 'csv', 'header');
  table2 = loadTable('3164end.csv', 'csv', 'header');
  table3 = loadTable('3255start.csv', 'csv', 'header');
  table4 = loadTable('3255end.csv', 'csv', 'header');
  table5 = loadTable('319start.csv', 'csv', 'header');
  table6 = loadTable('319end.csv', 'csv', 'header');
  // // console.log(table2);
  table7 = loadTable('start3383.csv', 'csv', 'header');
  table8 = loadTable('end3383.csv', 'csv', 'header');
  table9 = loadTable('start517.csv', 'csv', 'header');
  table10 = loadTable('end517.csv', 'csv', 'header');
  table11 = loadTable('start293.csv', 'csv', 'header');
  table12 = loadTable('end293.csv', 'csv', 'header');

  // table13 = loadTable('start3507.csv', 'csv', 'header');
  // table14 = loadTable('end3507.csv', 'csv', 'header');
  // table15 = loadTable('start525.csv', 'csv', 'header');
  // table16 = loadTable('end525.csv', 'csv', 'header');
  // table17 = loadTable('start436.csv', 'csv', 'header');
  // table18 = loadTable('end436.csv', 'csv', 'header');
  // // console.log(table18);
}