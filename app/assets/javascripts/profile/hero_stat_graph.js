/* implementation heavily influenced by http://bl.ocks.org/1166403 */
/* also http://bl.ocks.org/benjchristensen/2579599 */
var drawherostats = function(ind_hero_stats){ 
  // define dimensions of graph
  $("#ind_hero_graph").empty();
  var m = [80, 80, 80, 80]; // margins
  
  if (ind_hero_stats.length <= 13){
  var w = (ind_hero_stats.length*35)+50 - m[1] - m[3]; // width
  } else {
  var w = (ind_hero_stats.length*25)+50 - m[1] - m[3]; // width
  };
  var h = 300 - m[0] - m[2]; // height
  
  // create a simple data array that we'll plot with a line (this array represents only the Y values, X will just be the index location)
  // var data = [3, 6, 2, 7, 5, 2, 0, 3, 8, 9, 2, 5, 9, 3, 6, 3, 6, 2, 7, 5, 2, 1, 3, 8, 9, 2, 5, 9, 2, 7];

  // X scale will fit all values from data[] within pixels 0-w
  var x = d3.scale.linear().domain([0, ind_hero_stats.length]).range([0, w]);
  // Y scale will fit values from 0-10 within pixels h-0 (Note the inverted domain for the y-scale: bigger is up!)
  var y = d3.scale.linear().domain([0, 1200]).range([h, 0]);
    // automatically determining max range can work something like this
    // var y = d3.scale.linear().domain([0, d3.max(data)]).range([h, 0]);

  // create a line function that can convert data[] into x and y points
  var line = d3.svg.line()
    // assign the X function to plot our line as we wish
    .x(function(d,i) { 
      // verbose logging to show what's actually being done
      // console.log('Plotting X value for data point: ' + d + ' using index: ' + i + ' to be at: ' + x(i) + ' using our xScale.');
      // return the X coordinate where we want to plot this datapoint
      return x(i) + 10; 
    })
    .y(function(d) { 
      // verbose logging to show what's actually being done
      // console.log('Plotting Y value for data point: ' + d + ' to be at: ' + y(d) + " using our yScale.");
      // return the Y coordinate where we want to plot this datapoint
      // console.log(parseInt(d.gold_per_min));
      return y(parseInt(d.gold_per_min)); 
    })

  var line2 = d3.svg.line()
    // assign the X function to plot our line as we wish
    .x(function(d,i) { 
      // verbose logging to show what's actually being done
      // console.log('Plotting X value for data point: ' + d + ' using index: ' + i + ' to be at: ' + x(i) + ' using our xScale.');
      // return the X coordinate where we want to plot this datapoint
      return x(i) + 10; 
    })
    .y(function(d) { 
      // verbose logging to show what's actually being done
      // console.log('Plotting Y value for data point: ' + d + ' to be at: ' + y(d) + " using our yScale.");
      // return the Y coordinate where we want to plot this datapoint
      // console.log(parseInt(d.xp_per_min));
      return y(parseInt(d.xp_per_min)); 
    });



    // Add an SVG element with the desired dimensions and margin.

  var graph = d3.select("#ind_hero_graph")
      .append("svg:svg")
        .attr("class","hero_stat_svg")
        .attr("width", "100%")
        .attr("height", "200")
        .attr("viewBox","0 0 450 150")
        .attr("preserveAspectRatio","xMidYMid meet");



  var rectangle = graph.selectAll("rect").
      data(ind_hero_stats);

    rectangle.enter()
    .append("svg:rect")              
      .attr("x", function(d,i){
        return x(i) + 1;
      })
      .attr("y", function(d,i){
        return 2;
      })
      .attr("fill", function(d,i){
        // console.log(d.winner);
        if (d.winner === true){
          return "rgba(64, 179, 79, 1)"
        }
        else {
          return "rgba(138, 19, 55, 1)"
        }
      })
      .attr("width", 13)
      .attr("height", 11);

  rectangle.enter()
    .append("svg:rect")              
      .attr("x", function(d,i){
        return x(i) + 7;
      })
      .attr("y", function(d,i){
        return y(parseInt(d.xp_per_min)) - 3;
      })
      .attr("fill", function(d,i){
        // console.log(d.winner);
          return "rgba(181, 204, 24, 0.6)"
      })
      .attr("width", 4)
      .attr("height", 4);

  rectangle.enter()
    .append("svg:rect")              
      .attr("x", function(d,i){
        return x(i) + 7;
      })
      .attr("y", function(d,i){
        return y(parseInt(d.gold_per_min)) - 3;
      })
      .attr("fill", function(d,i){
        // console.log(d.winner);
          return "rgb(255, 148, 10)"
      })
      .attr("width", 4)
      .attr("height", 4);


  graph.selectAll("text")
     .data(ind_hero_stats)
     .enter()
     .append("text")
      .attr("font-family","Open Sans-serif")
      .attr("font-size", ".7em") 
      .attr("x", function(d,i){
        return x(i) + 3;
      })
      .attr("y",function(d,i){
        return 12;
      })
      .text(function(d) { 
        if(d.winner == true){
          return "W";
        } else {
          return "L";
        };
      });


    graph.append("svg:g")
          .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

    // create yAxis
    var xAxis = d3.svg.axis().scale(x).ticks(ind_hero_stats.length).tickSize(-h).tickSubdivide(true).tickFormat("");
    // Add the x-axis.
    graph.append("svg:g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + h + ")")
          .call(xAxis);


    // create left yAxis
    // var yAxisLeft = d3.svg.axis().scale(y).ticks(4).orient("left");
    // // Add the y-axis to the left
    // graph.append("svg:g")
    //       .attr("class", "y axis")
    //       .attr("transform", "translate(-25,0)")
    //       .call(yAxisLeft);

    // graph.append("text")
    //   .attr("x", function(d,i) { return x(i); })
    //   .attr("y", "320")
    //   .attr("dy", ".35em")
    //   .text(function(d) { return d; });




    
      // Add the line by appending an svg:path element with the data line we created above
    // do this AFTER the axes above so that the line is above the tick-lines
      graph.append("svg:path").attr("d", line(ind_hero_stats)).attr('class','gpm_path');
      graph.append("svg:path").attr("d", line2(ind_hero_stats)).attr('class','xpm_path');
};