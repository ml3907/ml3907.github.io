//next to do: insert citibike logo/image
//define variables
var table1, table2, table3, table4, table5, table6;
var table7, table8, table9, table10, table11, table12;
var table13, table14, table15, table16, table17, table18;
var table19, table20, table21, table22, table23, table24;

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

var endname13 = []; count13 = [];
var startname14 = []; count14 = [];
var endname15 = []; count15 = [];
var startname16 = []; count16 = [];
var endname17 = []; count17 = [];
var startname18 = []; count18 = [];

var endname19 = []; count19 = [];
var startname20 = []; count20 = [];
var endname21 = []; count21 = [];
var startname22 = []; count22 = [];
var endname23 = []; count23 = [];
var startname24 = []; count24 = [];

var sel, item;
//define constants
var state = 0, statebutton = 0;

var starttext2 = 160;
var starttext3 = 960;
var lineheight = 12;
var rectheight = 12;

var stationx = 250, stationy = 30, mid = 640;

function setup() {
  createCanvas(1300, 3500);
  loadData();
  button = createButton('Weekday/Weekdend');
  button.position(50, 120);
  button.mousePressed(changeday);
  
  sel = createSelect();
  sel.position(50, 80);
  sel.option("SELECT");
  sel.option("Uptown");
  sel.option("...72nd Street");
  sel.option("...Cathedral Pkwy");
  sel.option("Midtown");
  sel.option("...31st Street");
  sel.option("...Pershing Square South");
  sel.option("Downtown");
  sel.option("...Fulton Street");
  sel.option("...Lafayette Street");
  sel.changed(mySelectEvent);
}

function mySelectEvent() {
  item = sel.value();
  if (item == "...72nd Street") {
    state = 1;
    clear();
  } else if (item == "...Cathedral Pkwy") {
    state = 2;
    clear();
  } else if (item == "...31st Street") {
    state = 3;
    clear();
  } else if (item == "...Pershing Square South") {
    state = 4;
    clear();
  } else if (item == "...Fulton Street") {
    state = 5;
    clear();
  } else if (item == "...Lafayette Street") {
    state = 6;
    clear();
  }
}

function changeday() {
  statebutton = (statebutton == 0) ? 1 : 0; 
}

function draw() {
  background(255);
  if (state == 1) {
    if (statebutton == 0) {
      drawUt1();
    } else if (statebutton == 1) {
      drawUt1WD();
    }
  } else if (state == 2) {
    if (statebutton == 0) {
      drawUt2();
    } else if (statebutton == 1) {
      drawUt2WD();
    }
  } else if (state == 3) {
    if (statebutton == 0) {
      drawMt1();
    } else if (statebutton == 1) {
      drawMt1WD();
    }
  } else if (state == 4) {
    if (statebutton == 0) {
      drawMt2();
    } else if (statebutton == 1) {
      drawMt2WD();
    }
  } else if (state == 5) {
    if (statebutton == 0) {
      drawDt1();
    } else if (statebutton == 1) {
      drawDt1WD();
    }
  } else if (state == 6) {
    if (statebutton == 0) {
      drawDt2();
    } else if (statebutton == 1) {
      drawDt2WD();
    }
  }
  
  push();
  fill(0);
  textSize(14);
  textStyle(BOLD);
  text("Bikes Come from Other Stations: ", stationx, stationy+50);
  text("Bikes Leave to Other Stations: ", stationx+600, stationy+50);
  pop();
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
  fill(0);
  textSize(14);
  text("Station: Columbus Ave. W 72 St", stationx, stationy);
  text("Total Docks: 67", stationx+300, stationy);
  text("Total Ridership: 431", stationx+550, stationy);
  text("Date: 2017.9.27. Wednesday",stationx, stationy+20)
  text("Demand and Supply Ratio: 6.43", stationx+300, stationy+20);
  text("174", stationx+250, stationy+50);
  text("257 ", stationx+820, stationy+50);
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
  fill(0);
  textSize(14);
  text("Station: 8 Ave. W 31 St", stationx, stationy);
  text("Total Docks: 19", stationx+300, stationy);
  text("Total Ridership: 2,947", stationx+550, stationy);
  text("Date: 2017.9.27. Wednesday",stationx, stationy+20)
  text("Demand and Supply Ratio: 155.1", stationx+300, stationy+20);
  text("1,745", stationx+250, stationy+50);
  text("1,202 ", stationx+820, stationy+50);
  pop();
}

function drawDt1() {
  push();
  //trips that start at id319
  for (var i = 0; i < count5.length; i++) {
      stroke(3, 169, 244);
      strokeWeight(count5[i]/5);
      strokeCap(SQUARE);
      line(mid, 600+2*i, mid+300, 100+lineheight*i);
      fill(3, 169, 244);
      noStroke();
      ellipse(mid+300, 100+lineheight*i,5,5);
  }
  pop();
    
  push();
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
      line(mid-300, 100+lineheight*j, mid, 600+2*j);
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
  fill(0);
  textSize(14);
  text("Station: Fulton St & Broadway", stationx, stationy);
  text("Total Docks: 33", stationx+300, stationy);
  text("Total Ridership: 356", stationx+550, stationy);
  text("Date: 2017.9.27. Wednesday",stationx, stationy+20)
  text("Demand and Supply Ratio: 10.79", stationx+300, stationy+20);
  text("179", stationx+250, stationy+50);
  text("177 ", stationx+820, stationy+50);
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
  fill(0);
  textSize(14);
  text("Station: Cathedral Pkwy & Broadway", stationx, stationy);
  text("Total Docks: 25", stationx+300, stationy);
  text("Total Ridership: 146", stationx+550, stationy);
  text("Date: 2017.9.27. Wednesday",stationx, stationy+20)
  text("Demand and Supply Ratio: 5.84", stationx+300, stationy+20);
  text("76", stationx+250, stationy+50);
  text("70 ", stationx+820, stationy+50);
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
  fill(0);
  textSize(14);
  text("Station: Pershing Square South", stationx, stationy);
  text("Total Docks: 59", stationx+300, stationy);
  text("Total Ridership: 408", stationx+550, stationy);
  text("Date: 2017.9.27. Wednesday",stationx, stationy+20)
  text("Demand and Supply Ratio: 8.44", stationx+300, stationy+20);
  text("234", stationx+250, stationy+50);
  text("264 ", stationx+820, stationy+50);
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
  fill(0);
  textSize(14);
  text("Station: Lafayette St. & E 8 St", stationx, stationy);
  text("Total Docks: 55", stationx+300, stationy);
  text("Total Ridership: 721", stationx+550, stationy);
  text("Date: 2017.9.27. Wednesday",stationx, stationy+20)
  text("Demand and Supply Ratio: 13.1", stationx+300, stationy+20);
  text("358", stationx+250, stationy+50);
  text("363 ", stationx+820, stationy+50);
  pop();
}


function drawUt1WD() {
  push();
  for (var i = 0; i < count13.length; i++) {
      stroke(3, 169, 244);
      strokeWeight(count13[i]/5);
      strokeCap(SQUARE);
      line(mid, 450+2*i, mid+300, 100+lineheight*i);
      fill(3, 169, 244);
      noStroke();
      ellipse(mid+300, 100+lineheight*i,5,5);
  }
  pop();

  push();
  for (var i = 0; i < count13.length; i++) {
      if (mouseX > starttext3 && mouseX < starttext3+180 && mouseY < 100+lineheight*i && mouseY > 100+lineheight*i+(-1*rectheight)) {
        fill(0);
        textSize(14);
        text(endname13[i], starttext3, 105+lineheight*i);

        fill(30, 136, 229);
        textSize(12);
        text(count13[i]+ " rides end here", starttext3+220, 105+lineheight*i);
      } else {
        fill("grey");
        textSize(10);
        text(endname13[i], starttext3, 105+lineheight*i);
      }
  }
  pop();

//trips that end at id3164
  push();
  for (var j = 0; j < count14.length; j++) {
      stroke(3, 169, 244);
      strokeWeight(count14[j]/3);
      strokeCap(SQUARE);
      line(mid-300, 100+lineheight*j, mid, 460+2*j);
      fill(3, 169, 244);
      noStroke();
      ellipse(mid-300, 100+lineheight*j,5,5);
  }
  pop();

  push();
  for (var j = 0; j < count14.length; j++) {
      if (mouseX > starttext2 && mouseX < starttext2+180 && mouseY > 100+lineheight*j+(-1*rectheight) && mouseY < 100+lineheight*j) {
        fill(0);
        textSize(14);
        text(startname14[j], starttext2, 105+lineheight*j);

        fill(30, 136, 229);
        textSize(12);
        text(count14[j]+ " rides start here", 50, 105+lineheight*j);
      } else {
        fill("grey");
        noStroke();
        textSize(10);
        text(startname14[j], starttext2, 105+lineheight*j);
      }
  }
  pop();

  push();
  fill(0);
  textSize(14);
  text("Station: Columbus Ave. W 72 St", stationx, stationy);
  text("Total Docks: 67", stationx+300, stationy);
  text("Total Ridership: 431", stationx+550, stationy);
  text("Date: 2017.10.07. Saturday",stationx, stationy+20)
  text("Demand and Supply Ratio: 6.43", stationx+300, stationy+20);
  text("174", stationx+250, stationy+50);
  text("257 ", stationx+820, stationy+50);
  pop();
}

function drawMt1WD() {
  push();
  //trips that start at id 3255
  for (var i = 0; i < count15.length; i++) {
      stroke(3, 169, 244);
      strokeWeight(count15[i]/8);
      strokeCap(SQUARE);
      line(mid, 500+5*i, mid+300, 100+lineheight*i);
      fill(3, 169, 244);
      noStroke();
      ellipse(mid+300, 100+lineheight*i,5,5);
  }
  pop();

  push();
  for (var i = 0; i < count15.length; i++) {
      if (mouseX > starttext3 && mouseX < starttext3+180 && mouseY < 105+lineheight*i && mouseY > 105+lineheight*i+(-1*rectheight)) {
        fill(0);
        textSize(14);
        text(endname15[i], starttext3, 105+lineheight*i);

        fill(30, 136, 229);
        textSize(12);
        text(count15[i]+ " rides end here", starttext3+220, mouseY);
      } else {
        fill("grey");
        textSize(10);
        text(endname15[i], starttext3, 105+lineheight*i);
      }
  }
  pop();

    //trips that end at id3255
  push();
  for (var j = 0; j < count16.length; j++) {
      stroke(3, 169, 244);
      strokeWeight(count16[j]/8);
      strokeCap(SQUARE);
      line(mid-300, 100+lineheight*j, mid, 500+5*j);
      fill(3, 169, 244);
      noStroke();
      ellipse(mid-300, 100+lineheight*j,5,5);
  }
  pop();

  push();
  for (var j = 0; j < count16.length; j++) {
      if (mouseX > starttext2 && mouseX < starttext2+180 && mouseY > 100+lineheight*j+(-1*rectheight) && mouseY < 100+lineheight*j) {
        fill(0);
        textSize(14);
        text(startname16[j], starttext2, 105+lineheight*j);

        fill(30, 136, 229);
        textSize(12);
        text(count16[j]+ " rides start here", 50, 100+lineheight*j);
      } else {
        fill("grey");
        noStroke();
        textSize(10);
        text(startname16[j], starttext2, 105+lineheight*j);
      }
  }
  pop();

  push();
  fill(0);
  textSize(14);
  text("Station: 8 Ave. W 31 St", stationx, stationy);
  text("Total Docks: 19", stationx+300, stationy);
  text("Total Ridership: 2,947", stationx+550, stationy);
  text("Date: 2017.10.07. Saturday",stationx, stationy+20)
  text("Demand and Supply Ratio: 155.1", stationx+300, stationy+20);
  text("1,745", stationx+250, stationy+50);
  text("1,202 ", stationx+820, stationy+50);
  pop();
}

function drawDt1WD() {
  push();
  //trips that start at id319
  for (var i = 0; i < count17.length; i++) {
      stroke(3, 169, 244);
      strokeWeight(count17[i]/5);
      strokeCap(SQUARE);
      line(mid, 500+2*i, mid+300, 100+lineheight*i);
      fill(3, 169, 244);
      noStroke();
      ellipse(mid+300, 100+lineheight*i,5,5);
  }
  pop();
    
  push();
  for (var i = 0; i < count17.length; i++) {
      if (mouseX > starttext3 && mouseX < starttext3+180 && mouseY < 105+lineheight*i && mouseY > 105+lineheight*i+(-1*rectheight)) {
        fill(0);
        textSize(14);
        text(endname17[i], starttext3, 105+lineheight*i);

        fill(30, 136, 229);
        textSize(12);
        text(count17[i]+ " rides end here", starttext3+220, mouseY);
      } else {
        fill("grey");
        textSize(10);
        text(endname17[i], starttext3, 105+lineheight*i);
      }
  }
  pop();

//trips that end at id319
  push();
  for (var j = 0; j < count18.length; j++) {
      stroke(3, 169, 244);
      strokeWeight(count18[j]/3);
      strokeCap(SQUARE);
      line(mid-300, 100+lineheight*j, mid, 500+2*j);
      fill(3, 169, 244);
      noStroke();
      ellipse(mid-300, 100+lineheight*j,5,5);
  }
  pop();

  push();
  for (var j = 0; j < count18.length; j++) {
      if (mouseX > starttext2 && mouseX < starttext2+180 && mouseY > 100+lineheight*j+(-1*rectheight) && mouseY < 100+lineheight*j) {
        fill(0);
        textSize(14);
        text(startname18[j], starttext2, 105+lineheight*j);

        fill(30, 136, 229);
        textSize(12);
        text(count18[j]+ " rides start here", 50, 100+lineheight*j);
      } else {
        fill("grey");
        noStroke();
        textSize(10);
        text(startname18[j], starttext2, 105+lineheight*j);
      }
  }
  pop();

  push();
  fill(0);
  textSize(14);
  text("Station: Fulton St & Broadway", stationx, stationy);
  text("Total Docks: 33", stationx+300, stationy);
  text("Total Ridership: 356", stationx+550, stationy);
  text("Date: 2017.10.07. Saturday",stationx, stationy+20)
  text("Demand and Supply Ratio: 10.79", stationx+300, stationy+20);
  text("179", stationx+250, stationy+50);
  text("177 ", stationx+820, stationy+50);
  pop();
}

function drawUt2WD() {
  push();
  for (var i = 0; i < count19.length; i++) {
      stroke(3, 169, 244);
      strokeWeight(count19[i]/5);
      strokeCap(SQUARE);
      line(mid, 400+2*i, mid+300, 100+lineheight*i);
      fill(3, 169, 244);
      noStroke();
      ellipse(mid+300, 100+lineheight*i,5,5);
  }
  pop();

  push();
  for (var i = 0; i < count19.length; i++) {
      if (mouseX > starttext3 && mouseX < starttext3+180 && mouseY < 100+lineheight*i && mouseY > 100+lineheight*i+(-1*rectheight)) {
        fill(0);
        textSize(14);
        text(endname19[i], starttext3, 105+lineheight*i);

        fill(30, 136, 229);
        textSize(12);
        text(coun19[i]+ " rides end here", starttext3+220, 105+lineheight*i);
      } else {
        fill("grey");
        textSize(10);
        text(endname19[i], starttext3, 105+lineheight*i);
      }
  }
  pop();

//trips that end at id3164
  push();
  for (var j = 0; j < count20.length; j++) {
      stroke(3, 169, 244);
      strokeWeight(count20[j]/3);
      strokeCap(SQUARE);
      line(mid-300, 100+lineheight*j, mid, 400+2*j);
      fill(3, 169, 244);
      noStroke();
      ellipse(mid-300, 100+lineheight*j,5,5);
  }
  pop();

  push();
  for (var j = 0; j < count20.length; j++) {
      if (mouseX > starttext2 && mouseX < starttext2+180 && mouseY > 100+lineheight*j+(-1*rectheight) && mouseY < 100+lineheight*j) {
        fill(0);
        textSize(14);
        text(startname20[j], starttext2, 105+lineheight*j);

        fill(30, 136, 229);
        textSize(12);
        text(count20[j]+ " rides start here", 50, 105+lineheight*j);
      } else {
        fill("grey");
        noStroke();
        textSize(10);
        text(startname20[j], starttext2, 105+lineheight*j);
      }
  }
  pop();

  push();
  fill(0);
  textSize(14);
  text("Station: Cathedral Pkwy & Broadway", stationx, stationy);
  text("Total Docks: 25", stationx+300, stationy);
  text("Total Ridership: 146", stationx+550, stationy);
  text("Date: 2017.10.07. Saturday",stationx, stationy+20)
  text("Demand and Supply Ratio: 5.84", stationx+300, stationy+20);
  text("76", stationx+250, stationy+50);
  text("70 ", stationx+820, stationy+50);
  pop();
}

function drawMt2WD() {
  push();
  //trips that start at id 517
  for (var i = 0; i < count21.length; i++) {
      stroke(3, 169, 244);
      strokeWeight(count21[i]/3);
      strokeCap(SQUARE);
      line(mid, 250+5*i, mid+300, 100+lineheight*i);
      fill(3, 169, 244);
      noStroke();
      ellipse(mid+300, 100+lineheight*i,5,5);
  }
  pop();

  push();
  for (var i = 0; i < count21.length; i++) {
      if (mouseX > starttext3 && mouseX < starttext3+180 && mouseY < 105+lineheight*i && mouseY > 105+lineheight*i+(-1*rectheight)) {
        fill(0);
        textSize(14);
        text(endname21[i], starttext3, 105+lineheight*i);

        fill(30, 136, 229);
        textSize(12);
        text(count21[i]+ " rides end here", starttext3+220, mouseY);
      } else {
        fill("grey");
        textSize(10);
        text(endname21[i], starttext3, 105+lineheight*i);
      }
  }
  pop();

  //trips that end at id517
  push();
  for (var j = 0; j < count22.length; j++) {
      stroke(3, 169, 244);
      strokeWeight(count22[j]/3);
      strokeCap(SQUARE);
      line(mid-300, 100+lineheight*j, mid, 250+5*j);
      fill(3, 169, 244);
      noStroke();
      ellipse(mid-300, 100+lineheight*j,5,5);
  }
  pop();

  push();
  for (var j = 0; j < count22.length; j++) {
      if (mouseX > starttext2 && mouseX < starttext2+180 && mouseY > 100+lineheight*j+(-1*rectheight) && mouseY < 100+lineheight*j) {
        fill(0);
        textSize(14);
        text(startname22[j], starttext2, 105+lineheight*j);

        fill(30, 136, 229);
        textSize(12);
        text(count22[j]+ " rides start here", 50, 100+lineheight*j);
      } else {
        fill("grey");
        noStroke();
        textSize(10);
        text(startname22[j], starttext2, 105+lineheight*j);
      }
  }
  pop();

  push();
  fill(0);
  textSize(14);
  text("Station: Pershing Square South", stationx, stationy);
  text("Total Docks: 59", stationx+300, stationy);
  text("Total Ridership: 408", stationx+550, stationy);
  text("Date: 2017.10.07. Saturday",stationx, stationy+20)
  text("Demand and Supply Ratio: 8.44", stationx+300, stationy+20);
  text("234", stationx+250, stationy+50);
  text("264 ", stationx+820, stationy+50);
  pop();
}

function drawDt2WD() {
  push();
  //trips that start at id293
  for (var i = 0; i < count23.length; i++) {
      stroke(3, 169, 244);
      strokeWeight(count23[i]/5);
      strokeCap(SQUARE);
      line(mid, 700+2*i, mid+300, 100+lineheight*i);
      fill(3, 169, 244);
      noStroke();
      ellipse(mid+300, 100+lineheight*i,5,5);
  }
  pop();
    
  push();
  for (var i = 0; i < count23.length; i++) {
      if (mouseX > starttext3 && mouseX < starttext3+180 && mouseY < 105+lineheight*i && mouseY > 105+lineheight*i+(-1*rectheight)) {
        fill(0);
        textSize(14);
        text(endname23[i], starttext3, 105+lineheight*i);

        fill(30, 136, 229);
        textSize(12);
        text(count23[i]+ " rides end here", starttext3+220, mouseY);
      } else {
        fill("grey");
        textSize(10);
        text(endname23[i], starttext3, 105+lineheight*i);
      }
  }
  pop();

//trips that end at id293
  push();
  for (var j = 0; j < count24.length; j++) {
      stroke(3, 169, 244);
      strokeWeight(count24[j]/3);
      strokeCap(SQUARE);
      line(mid-300, 100+lineheight*j, mid, 700+2*j);
      fill(3, 169, 244);
      noStroke();
      ellipse(mid-300, 100+lineheight*j,5,5);
  }
  pop();

  push();
  for (var j = 0; j < count24.length; j++) {
      if (mouseX > starttext2 && mouseX < starttext2+180 && mouseY > 100+lineheight*j+(-1*rectheight) && mouseY < 100+lineheight*j) {
        fill(0);
        textSize(14);
        text(startname24[j], starttext2, 105+lineheight*j);

        fill(30, 136, 229);
        textSize(12);
        text(count24[j]+ " rides start here", 50, 100+lineheight*j);
      } else {
        fill("grey");
        noStroke();
        textSize(10);
        text(startname24[j], starttext2, 105+lineheight*j);
      }
  }
  pop();

  push();
  fill(0);
  textSize(14);
  text("Station: Lafayette St. & E 8 St", stationx, stationy);
  text("Total Docks: 55", stationx+300, stationy);
  text("Total Ridership: 721", stationx+550, stationy);
  text("Date: 2017.10.07. Saturday",stationx, stationy+20)
  text("Demand and Supply Ratio: 13.1", stationx+300, stationy+20);
  text("358", stationx+250, stationy+50);
  text("363 ", stationx+820, stationy+50);
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


  //uptown1WD: Columbus Av.72
  endname13 = table13.getColumn("endstation");
  count13 = table13.getColumn("count");
  startname14 = table14.getColumn("startstation");
  count14 = table14.getColumn("count");
  //midtown1: 8 Av. 31st
  endname15 = table15.getColumn("endstation");
  count15 = table15.getColumn("count");
  startname16 = table16.getColumn("startstation");
  count16 = table16.getColumn("count");
  //downtown1: Fulton St
  endname17 = table17.getColumn("endstation");
  count17 = table17.getColumn("count");
  startname18 = table18.getColumn("startstation");
  count18 = table18.getColumn("count");
  //uptown2: Cathedral Pkwy
  endname19 = table19.getColumn("endstation");
  count19 = table19.getColumn("count");
  startname20 = table20.getColumn("startstation");
  count20 = table20.getColumn("count");
  //midtown2: Grand Central
  endname21 = table21.getColumn("endstation");
  count21 = table21.getColumn("count");
  startname22 = table22.getColumn("startstation");
  count22 = table22.getColumn("count");
  //downtown3: Lafayette St.
  endname23 = table23.getColumn("endstation");
  count23 = table23.getColumn("count");
  startname24 = table24.getColumn("startstation");
  count24 = table24.getColumn("count");
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

  table7 = loadTable('start3383.csv', 'csv', 'header');
  table8 = loadTable('end3383.csv', 'csv', 'header');
  table9 = loadTable('start517.csv', 'csv', 'header');
  table10 = loadTable('end517.csv', 'csv', 'header');
  table11 = loadTable('start293.csv', 'csv', 'header');
  table12 = loadTable('end293.csv', 'csv', 'header');

  table13 = loadTable('10start3164.csv', 'csv', 'header');
  table14 = loadTable('10end3164.csv', 'csv', 'header');
  table15 = loadTable('10start3255.csv', 'csv', 'header');
  table16 = loadTable('10end3255.csv', 'csv', 'header');
  table17 = loadTable('10start319.csv', 'csv', 'header');
  table18 = loadTable('10end319.csv', 'csv', 'header');

  table19 = loadTable('10start3383.csv', 'csv', 'header');
  table20 = loadTable('10end3383.csv', 'csv', 'header');
  table21 = loadTable('10start517.csv', 'csv', 'header');
  table22 = loadTable('10end517.csv', 'csv', 'header');
  table23 = loadTable('10start293.csv', 'csv', 'header');
  table24 = loadTable('10end293.csv', 'csv', 'header');
  // console.log(table18);
}