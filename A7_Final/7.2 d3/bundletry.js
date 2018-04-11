var stations = {
	name: "",
	children:[
	   {name:"1 Ave & E 110 St"}, {name:"1 Ave & E 78 St"}, {name:"2 Ave & E 104 St"},
	   {name:"2 Ave & E 122 St"}, {name:"1 Ave & E 16 St"}, {name:"1 Ave & E 18 St"},
	    {name:"1 Ave & E 30 St"}, {name:"11 Ave & W 41 St"}, {name:"2 Ave & E 31 St"
	]
};

var route = [
	   {source:"1 Ave & E 110 St", target："1 Ave & E 78 St"},
	   {source:"1 Ave & E 110 St", target："2 Ave & E 104 St"},
	   {source:"1 Ave & E 110 St", target："2 Ave & E 122 St"},
	   {source:"1 Ave & E 16 St", target："1 Ave & E 18 St"},
	   {source:"1 Ave & E 16 St", target："1 Ave & E 30 St"},
	   {source:"1 Ave & E 16 St", target："11 Ave & W 41 St"},
	   {source:"1 Ave & E 16 St", target："2 Ave & E 31 St"},
];

// data transformation
var cluster = d3.layout.cluster()
                .size([360, width/2 - 50])
                .separation(function(a, b) { 
return (a.parent == b.parent ? 1 : 2) / a.depth; 
});

var bundle = d3.layout.bundle();

var nodes = cluster.nodes(stations);
console.log(nodes);

//
function map( nodes, links ){
var hash = [];
    for(var i = 0; i < nodes.length; i++){
        hash[nodes[i].name] = nodes[i];
    }
    var resultLinks = [];
    for(var i = 0; i < links.length; i++){
        resultLinks.push({      source: hash[ links[i].source ], 
                                target: hash[ links[i].target ]
                            });
    }
    return resultLinks;
}

var oLinks = map(nodes, route);
    console.log(oLinks);
        
var links = bundle(oLinks);
console.log(links);

//draw the map:
var line = d3.svg.line.radial()
                    .interpolate("bundle")
                    .tension(.85)
                    .radius(function(d) { return d.y; })
                    .angle(function(d) { return d.x / 180 * Math.PI; });

gBundle = svg.append("g")
                .attr("transform", 
"translate(" + (width/2) + "," + (height/2) + ")");

var color = d3.scale.category20c(); //颜色比例尺

var link = gBundle.selectAll(".link")
              .data(links)
              .enter()
              .append("path")
              .attr("class", "link")
              .attr("d", line); //使用线段生成器
//???添加透明度
.link {
        fill: none;
        stroke: black;
        stroke-opacity: .5;
        stroke-width: 8px;
    }

//add nodes in the diagram:
var node = gBundle.selectAll(".node")
              .data( nodes.filter(function(d) { return !d.children; }) )
              .enter()
              .append("g")
              .attr("class", "node")
              .attr("transform", function(d) {
                    return "rotate(" + (d.x- 90) + ")translate(" 
+ d.y + ")" + "rotate("+ (90 - d.x) +")"; 
              });

node.append("circle")
              .attr("r", 20)
              .style("fill",function(d,i){ return color(i); });
            
    node.append("text")
            .attr("dy",".2em")
            .style("text-anchor", "middle")
            .text(function(d) { return d.name; });