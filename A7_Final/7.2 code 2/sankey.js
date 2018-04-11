// var table;
// var start = []; end = []; rides = [];

google.charts.load("current", {packages:["sankey"]});
google.charts.setOnLoadCallback(drawChart);

// function preload() {
//        table = loadTable('3164try.csv', 'csv', 'header');
//        console.log(table)
// }

// function loadData() {
//   start  = table.getColumn("startstation");
//   end = table.getColumn("endstation");
//   rides = table.getColumn("rides"); 
//   console.log(rides)
// }

// Add data
function drawChart() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'From');
      data.addColumn('string', 'To');
      data.addColumn('number', 'Rides');

      // for (var i = 0; i <= table.length; i++) {
      //  data.addRows(table[i]);
      // }

        var data = new google.visualization.DataTable();
             data.addColumn('string', 'From');
             data.addColumn('string', 'To');
             data.addColumn('number', 'Rides');
             data.addRows([
                [ '1 Ave & E 68 St', 'Columbus Ave & W 72 St', 2 ],
                [ '11 Ave & W 27 St', 'Columbus Ave & W 72 St', 3 ],
                [ '11 Ave & W 41 St', 'Columbus Ave & W 72 St', 1 ],
                [ '24 St & 41 Ave', 'Columbus Ave & W 72 St', 1 ], 
                [ '3 Ave & E 62 St', 'Columbus Ave & W 72 St', 1 ], 
                [ '5 Ave & E 29 St', 'Columbus Ave & W 72 St', 1 ], 
                [ '5 Ave & E 63 St', 'Columbus Ave & W 72 St', 1 ], 
                [ '5 Ave & E 73 St', 'Columbus Ave & W 72 St', 4 ], 
                [ '5 Ave & E 93 St', 'Columbus Ave & W 72 St', 1 ],
                [ '8 Ave & W 16 St', 'Columbus Ave & W 72 St', 1 ],
                [ '9 Ave & W 28 St', 'Columbus Ave & W 72 St', 1 ], 
                [ '9 Ave & W 45 St', 'Columbus Ave & W 72 St', 1 ],   
                [ '9 St & 44 Rd', 'Columbus Ave & W 72 St', 1 ],
                [ 'Amsterdam Ave & W 119 St', 'Columbus Ave & W 72 St', 1 ],
                [ 'Amsterdam Ave & W 73 St', 'Columbus Ave & W 72 St', 2 ],
                [ 'Amsterdam Ave & W 79 St', 'Columbus Ave & W 72 St', 1 ],
                [ 'Amsterdam Ave & W 82 St', 'Columbus Ave & W 72 St', 2 ],  
                [ 'Barclay St & Church St', 'Columbus Ave & W 72 St', 1 ], 
                [ 'Columbus Ave & W 72 St', '1 Ave & E 62 St', 1 ],
                [ 'Columbus Ave & W 72 St', '1 Ave & E 94 St', 4 ],
                [ 'Columbus Ave & W 72 St', '11 Ave & W 59 St', 3 ],
                [ 'Columbus Ave & W 72 St', '12 Ave & W 40 St', 1 ],
                [ 'Columbus Ave & W 72 St', '2 Ave & E 96 St', 1 ],
                [ 'Columbus Ave & W 72 St', '3 Ave & E 72 St', 2 ],
                [ 'Columbus Ave & W 72 St', '5 Ave & E 78 St', 2 ],
                [ 'Columbus Ave & W 72 St', '5 Ave & E 88 St', 2 ],
             ]);

      // Set color and size
      var options = {
        width: 600,
        sankey: {
          link: { color: { fill: '#87CEFA' } },
          node: { colors: ['#4682B4'] },
        }
       }

      // Draw chart
      var chart = new google.visualization.Sankey(document.getElementById('sankey_multiple'));
      chart.draw(data, options);
     }