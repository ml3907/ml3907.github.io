var headlines = [];
var maxHeadLen, minHeadLen;
var abstracts = [];

function preload() {

  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  var apikey = "58faa2021ebb4d989a3017d897e08cd9"; 
  url += "?api-key=" + apikey;

  nytResponse = loadJSON(url);
}

function setup() {
  createCanvas(window.innerWidth, 1000);
  background(255);

  textSize(12);
  textAlign(LEFT);
  textFont("helvetica");

  extractHeadlines();
}

function draw() {
  background(255);

  // Set the left and top margin
  var margin = 30;
  translate(margin, margin);

  var lineheight = 30;
  var rectheight = 12;

  noStroke();

  for (var i = 0; i < headlines.length; i++) {
    var rectwidth = map(headlines[i].length,minHeadLen, maxHeadLen, margin, width-margin*2);
    noFill();
    rect(0, i*lineheight, rectwidth, -1*rectheight)
    
    fill(0);
    textSize(12);
    textStyle(NORMAL);
    text(i+1 + ".", 200 , i*lineheight);    

    fill(255, 138, 51);
    textSize(24);
    textStyle(BOLD);
    text("Let's Find the\nNew York Times\nTop Stories !", 0, lineheight)

    fill(150);
    textSize(14);
    textStyle(NORMAL);
    text("* Press the title to\n  see the abstract.", 0, 5*lineheight)
  }
  
  //highlight the title when mouse move over the title
  for (var i = 0; i < headlines.length; i++) {
    if (mouseX > margin && mouseX < margin+rectwidth && mouseY < margin+i*lineheight && mouseY > margin+i*lineheight+(-1*rectheight)) {
        fill(203, 67, 53)
        textSize(16);
        textStyle(ITALIC);
        text(headlines[i], 220 , i*lineheight);
    } else {
        fill(0);
        textSize(12);
        textStyle(NORMAL);
        text(headlines[i], 230 , i*lineheight);
      }
  }

  // use a separate loop so it draws on top of everything else
  for (var i = 0; i < headlines.length; i++) {
    var rectwidth = map(headlines[i].length,minHeadLen, maxHeadLen, margin, width-margin*2);
    // show abstract on mouseover and pressed
    if (mouseX > margin && mouseX < margin+rectwidth && mouseY < margin+i*lineheight && mouseY > margin+i*lineheight+(-1*rectheight)) {
      if (mouseIsPressed) {
        fill(255, 200, 30); 
        textSize(18);
        textStyle(ITALIC);
        text("Abstract: " + abstracts[i], 700, mouseY-15, 450 , 150);
      }
    }
  }
}

function extractHeadlines() {

  // console.log(nytResponse); 

  for (var i = 0; i < nytResponse.results.length; i++) {
    var h = nytResponse.results[i].title;

    if (!maxHeadLen) {
      maxHeadLen = h.length;
    } else if (h.length > maxHeadLen) {
      maxHeadLen = h.length;
    }

    if (!minHeadLen) {
      minHeadLen = h.length;
    } else if (h.length < minHeadLen) {
      minHeadLen = h.length;
    }
    append(headlines, h);

    append(abstracts, nytResponse.results[i].abstract);
  }
  // console.log(headlines); 
}