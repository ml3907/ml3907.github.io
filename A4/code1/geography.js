var table;
var margin = 20;
var numbers = [];

function preload(){
  table = loadTable('HNYdata.csv', 'csv', 'header');
}

function setup() {
  createCanvas(600 , 800);
  loadData();
}

function loadData() {
  var numbers = table.getColumn("Numbers");

  console.log(numbers);
}