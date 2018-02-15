var headlines = [];
var hitwords = [
"in", "and", "or", "of", "from", "out", "for", "on", "at", "into"
];

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

  noLoop();

  extractHeadlines();
}

function draw() {
  background(100);

  var lineheight = 24;
  var margin = 30;
  translate(margin, margin);

  //display the titles
  for (var i = 0; i < headlines; i++) {
    var words = split(headlines[i], ' ');
    //console.log(words);
    var nextX = 0;

    for (var j = 0, j < words.length; j++) {
      if (hitwords.includes(words[j].toLowerCase())){
        fill(255, 190, 0);
      } else {
        fill(255);
      }
      text(words[j]+ ' ', nextX, i*lineheight*1.5);
      nextX += textWidth(words[j]+ ' ');
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