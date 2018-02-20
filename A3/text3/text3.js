var headlines = [];
var abstract = [];

function preload() {
  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  var apikey = "58faa2021ebb4d989a3017d897e08cd9";
  url += "?api-key=" + apikey;

  nytResponse = loadJSON(url);
}

function setup() {
  createCanvas(window.innerWidth, 1000);
  background(0);

  textSize(12);
  textAlign(LEFT);
  textFont('Helvetica');

  noLoop();

  extractHeadlines();
}

function draw() {
  background(0);

  var lineheight = 24;
  var margin = 30;
  translate(margin, margin);

  //display the titles
  for (var i = 0; i < 27; i++) {
    fill(255);
    text(i+1 + ".", 0 , i*lineheight*1.5);
    if (i < 9) {
      text(headlines[i], 20 , i*lineheight*1.5);
    }
      else{
        text(headlines[i], 30 , i*lineheight*1.5);
      } 
  }
}

function mouseMoved() {
  if 
//鼠标滑过某个title时，显示该title对应的abstract
}

function extractHeadlines() {
  // console.log(nytResponse);
  for (var i = 0; i < nytResponse.results.length; i++) {
    var h = nytResponse.results[i].title;
    append(headlines, h);
  }
  // console.log(headlines);
}