var headlines = [];

function preload() {
  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  var apikey = "58faa2021ebb4d989a3017d897e08cd9";
  url += "?api-key=" + apikey;

  nytResponse = loadJSON(url);
}

function setup() {
  createCanvas(640, 1000);
  background(100);

  textSize(12);
  textAlign(LEFT);
  textStyle(ITALIC);

  noLoop();

  extractHeadlines();
}

function draw() {
  background(100);

  var lineheight = 24;
  var margin = 30;
  translate(margin, margin);

  //display the titles
  for (var i = 0; i < headlines.length; i++) {
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

function extractHeadlines() {
  // console.log(nytResponse);
  for (var i = 0; i < nytResponse.results.length; i++) {
    var h = nytResponse.results[i].title;
    append(headlines, h);
  }
  // console.log(headlines);
}