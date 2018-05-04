var headlines = [];
var hitwords = [
  "Russia",
  "Iran",
  "German",
  "Olympics",
  "Haiti",
  "Korea",
  "Australia",
  "American",
  "South Korea",
  "African",
  "Syria",
  "Trump"
];

function preload() {

  // Assemble url for API call
  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  var apikey = "58faa2021ebb4d989a3017d897e08cd9"; // see: https://developer.nytimes.com
  url += "?api-key=" + apikey;

  nytResponse = loadJSON(url);
  // loadJSON() is asynchronous, but calling it inside preload() guarantees
  // we'll have a response before setup() and draw() is run.
}

function setup() {
  createCanvas(window.innerWidth, 1000);
  background(255);

  textAlign(LEFT);
  textFont('Helvetica');

  noLoop(); 

  extractHeadlines();
}

function draw() {
  var lineheight = 24;
  var margin = 40;
  translate(margin, margin);

  for (var i = 0; i < 50; i++) {
    var words = split(headlines[i], /[\s,]+/);
    // console.log(words);

    var nextX = 0;

    for (var j = 0; j < words.length; j++) {
      if (hitwords.includes(words[j])) {
        textSize(18);
        stroke(230);
        strokeWeight(3);
        fill(203, 67, 53);
      } else {
        textSize(12);
        noStroke();
        fill(200-j*15);
      }

      text(words[j]+' ', nextX, i*lineheight);
      nextX += textWidth(words[j]+' ');
    }
  }
}

function extractHeadlines() {

  // console.log(nytResponse);
  for (var i = 0; i < nytResponse.results.length; i++) {
    var h = nytResponse.results[i].title;
    append(headlines, h);
  }
  // console.log(headlines); // make sure counted data looks as expected
}