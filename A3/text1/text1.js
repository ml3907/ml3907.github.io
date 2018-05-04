var headlines = [];
var dates = [];

function preload() {
  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  var apikey = "58faa2021ebb4d989a3017d897e08cd9";
  url += "?api-key=" + apikey;

  nytResponse = loadJSON(url);
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);

  textSize(12);
  textAlign(LEFT);
  textStyle(ITALIC);
  textFont('Helvetica');

  noLoop();

  extractHeadlines();
  extractDates();
}

function draw() {
  var lineheight = 24;
  var margin = 30;
  translate(margin, margin);

  //display the titles
  for (var i = 0; i < 27; i++) {
    fill(0);
    text(i+1 + ".", 0 , i*lineheight*1.5);
    if (i < 9) {
      text(headlines[i], 20 , i*lineheight*1.5);
    }
      else{
        text(headlines[i], 30 , i*lineheight*1.5);
      }    
  }

  //display the date
  for (var j = 0; j < dates.length; j++) {
    fill(0);
    text(dates[j], 400 , j*lineheight*1.5);
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

function extractDates() {
  // console.log(dates);
  for (var j = 0; j < nytResponse.results.length; j++ ) {
    var d = nytResponse.results.published_date;
    append(dates, d);
  }
  // console.log(dates);
}
