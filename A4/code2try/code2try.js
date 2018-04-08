var state = 0;
var marginx = 360;

var table;
var boro = []; type = []; squares = [];
var total = [61,63,79,20,5];

function preload(){
  table = loadTable('HNYdata.csv', 'csv', 'header');
  // console.log(table)
}

function setup() {
  createCanvas(1280, 800);
  background(255);
  noStroke();
  loadData();

  button = createButton('Check the construction type');
  button.position(200, 50);
  button.mousePressed(showType);
}

function draw() {
  background(255);
  fill(150);
  //Bronx
  for (var j = 0; j <= total[0]; j++) {
    if (j<10) {
        rect(200+15*(j-1), 100, 10, 10);
      } else if (j>10 && j<=20) {
        rect(200+15*(j-1), 100, 10, 10);
      } else if (j>20 && j<=30) {
        rect(15*(j-1)-115, 120, 10, 10);
      } else if (j>30 && j<=40) {
        rect(15*(j-1)-100, 120, 10, 10);
      } else if (j>40 && j<=50) {
        rect(15*(j-1)-415, 140, 10, 10);
      } else if (j>50 && j<=60){
        rect(15*(j-1)-400, 140, 10, 10)
      } else {
        rect(15*(j-1)-715, 160, 10, 10)
      }
  }

  //Brooklyn
    for (var j = 0; j <= total[1]; j++) {
      if (j<10) {
        rect(200+15*(j-1), 200, 10, 10);
      } else if (j>10 && j<=20) {
        rect(200+15*(j-1), 200, 10, 10);
      } else if (j>20 && j<=30) {
        rect(15*(j-1)-115, 220, 10, 10);
      } else if (j>30 && j<=40) {
        rect(15*(j-1)-100, 220, 10, 10);
      } else if (j>40 && j<=50) {
        rect(15*(j-1)-415, 240, 10, 10);
      } else if (j>50 && j<=60) {
        rect(15*(j-1)-400, 240, 10, 10)
      } else {
        rect(15*(j-1)-715, 260, 10, 10)
      }
  }

  //Manhattan
    for (var j = 0; j <= total[2]; j++) {
      if (j<10) {
        rect(200+15*(j-1), 300, 10, 10);
      } else if (j>10 && j<=20) {
        rect(200+15*(j-1), 300, 10, 10);
      } else if (j>20 && j<=30) {
        rect(15*(j-1)-115, 320, 10, 10);
      } else if (j>30 && j<=40) {
        rect(15*(j-1)-100, 320, 10, 10);
      } else if (j>40 && j<=50) {
        rect(15*(j-1)-415, 340, 10, 10);
      } else if (j>50 && j<=60) {
        rect(15*(j-1)-400, 340, 10, 10);
      } else if (j>60 && j<=70) {
        rect(15*(j-1)-715, 360, 10, 10)
      } else {
        rect(15*(j-1)-700, 360, 10, 10)
      }
  }

   //Queens
    for (var j = 0; j <= total[3]; j++) {
      if (j<10) {
        rect(200+15*(j-1), 400, 10, 10);
      } else if (j>10 && j<=20) {
        rect(200+15*(j-1), 400, 10, 10);
      } 
  }

  //Staten Island
    for (var j = 0; j <= total[4]; j++) {
      if (j<10) {
        rect(200+15*(j-1), 460, 10, 10);
      } else {
        rect(200+15*(j-1), 460, 10, 10);
      } 
  }

    //draw icons
  push()
  fill(0);
  rect(50, 550, 10, 10);
  pop();
  push();
  fill(255, 190, 0);
  rect(50, 570, 10, 10);
  pop();

  //five Boroughs
  push();
  fill(0);
  textSize(18);
  textFont('Helvetica')
  text("Bronx", 50, 110);
  text("Brooklyn", 50, 210);
  text("Manhattan", 50, 310);
  text("Queens", 50, 410);
  text("Staten Island", 50, 470);
  pop();

  push();
  fill(0);
  textSize(16);
  textFont('Helvetica')
  textFont('Helvetica')
  text("New Construction Units", 80, 560);//need to add togglehome
  text("Preservation Units", 80, 580);//need to add togglehome.
  text("*  The Housing New York Units by Building data after January 1, 2014 comes from HPD. One square represent 500 units.", 50, 600)
  pop();

  if (state == 1) {
    consType();
  } 
}

function consType() {
  for (var i = 0; i <= boro.length; i++) {
      for (var j = 0; j <= squares[i]; j++) {
        if (type[i] == "1") {   
          fill("orange");//show the new construction units.       
            if (j < 5) {
              rect(marginx+200+15*(j-1), 100+50*i, 10, 10);
            } else if (j > 5 && j <= 10) {
              rect(marginx+220+15*(j-1), 100+50*i, 10, 10);
            } else if (j > 10 && j <= 15) {
              rect(marginx+250+15*(j-1), 100+50*i, 10, 10);
            } else if (j > 15 && j <= 20) {
              rect(marginx+15*(j-1)-40, 120+50*i, 10, 10);
            } else if (j > 20 && j <= 25) {
              rect(marginx+15*(j-1)-5, 120+50*i, 10, 10);
            } else if (j > 25 && j <= 30) {
              rect(marginx+15*(j-1)+25, 120+50*i, 10, 10);
            } else if (j > 30 && j <= 35) {
              rect(marginx+15*(j-1)-265, 140+50*i, 10, 10);
            }
          } else { //show the preservation units.
          fill("black");
            if (j < 5) {
              rect(marginx+525+15*(j-1), 50+50*i, 10, 10);
            } else if (j > 5 && j <= 10) {
              rect(marginx+545+15*(j-1), 50+50*i, 10, 10);
            } else if (j > 10 && j <= 15) {
              rect(marginx+575+15*(j-1), 50+50*i, 10, 10);
            } else if (j > 15 && j <= 20) {
              rect(marginx+285+15*(j-1), 70+50*i, 10, 10);
            } else if (j > 20 && j <= 25) {
              rect(marginx+320+15*(j-1), 70+50*i, 10, 10);
            } else if (j > 25 && j <= 30) {
              rect(marginx+350+15*(j-1), 70+50*i, 10, 10);
            } else if (j > 30 && j <= 35) {
              rect(marginx+60+15*(j-1), 90+50*i, 10, 10);
            } else if (j > 35 && j <= 40) {
              rect(marginx+95+15*(j-1), 90+50*i, 10, 10);
            }
          }
      }
     }
}

function showType() {
  if (state == 0) {
    state = 1;
  } else {
    state = 0;
  }
}

function loadData() {
  boro = table.getColumn("Borough");
  type = table.getColumn("Type");
  squares = table.getColumn("Numbers");
  // console.log(rnum);
  // console.log(hnum);
}