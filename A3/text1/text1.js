var headlines = [];

function preload(){
  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  var apikey = "58faa2021ebb4d989a3017d897e08cd9";
  url += "?api-key=" + apikey;

  rytResponse = loadJSON(url);
}

function setup(){
  createCanvas(640, 1000);
  background(0);

  textSize(12);
  textAlign(LEFT);
  textLeading(20);
  text(lines, 10, 25);

  noLoop();

  extractHeadlines();
}

function draw(){
  background(0);
  var lineheight = 25

  for (var i = 0; i < headlines.length; i++){
    //drawheadline
    fill(255);
    text(headlines[i], 0, i*lineheight);
  }
}

function extractHeadlines(){
  for (var i = 0; i < nytResponse.results.length; i++){
    var h = nytResponse.results[i].title;
    append(headlines, h);
  }
  console.log(headlines);
}