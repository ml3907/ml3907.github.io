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
  textFont("Helvetica");

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
    var words = headlines[i].split(" ");
    for (var j = 0; j < words.length; j++) {
      var wordWidth = textWidth(words[j]);
      fill (255);
      text(words[j], 0 , j*lineheight);
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



 