
console.log("whattttt");
console.log("script.js");

$(document).ready(function(){

var w = 180,
h = 180;
var colorscale = d3.scale.category10();
var d = [
      [
      {axis:"Fighting",value:0.59},
      {axis:"Farming",value:0.56},
      {axis:"supporting",value:0.42},
      {axis:"pushing",value:0.34},
      {axis:"versatility",value:0.48}
      ]
    ];

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 1,
  levels: 5,
  ExtraWidthX: 200
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);


});





