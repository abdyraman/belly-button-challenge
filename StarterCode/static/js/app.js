// Use the D3 library to read in samples.json from the URL

const sample = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

d3.json(sample).then(function(data) {
    console.log(data);
  
    // Extract keys from the data object
    let info = Object.keys(data);
    console.log(info);

    let samples = Object.keys(data.samples);
    console.log(samples);

  // Slice the first 10 objects for plotting
  let bacterias = samples.sort((a, b) => data.samples[b] - data.samples[a]).reverse().slice(0, 10);
  console.log(bacterias);
});

//   //Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual
// let trace1 = {
//     x: samples.map(object => object.sample_values),
//     y: samples.map(object => object.otu_ids),
//     text: samples.map(object => object.otu_labels),
//     type: "bar",
//     orientation: "h"
//   };

//   let traceData = [trace1];

// let layout = {
//     height: 600,
//     width: 800
//   };
  
//   // Render the plot to the div tag with id "plot"
//   // Note that we use `traceData` here, not `data`
//   Plotly.newPlot("plot", traceData, layout);