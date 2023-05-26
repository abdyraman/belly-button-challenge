// Use the D3 library to read in samples.json from the URL
const sample = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Use d3.json() to fetch the data from the URL
d3.json(sample).then(function(data) {
  console.log(data);

  // Extract the required data arrays from the data object
  let samples = data.samples;
  let otuIds = samples.map(obj => obj.otu_ids);
  let sampleValues = samples.map(obj => obj.sample_values);
  let otuLabels = samples.map(obj => obj.otu_labels);

  // Combine the extracted arrays into an array of objects
  let bacterias = samples.map((obj, index) => ({
    otu_ids: otuIds[index],
    sample_values: sampleValues[index],
    otu_labels: otuLabels[index]
  }));

  // Sort the bacterias array based on sample_values in descending order
  bacterias.sort((a, b) => b.sample_values - a.sample_values);

  // Slice the first 10 objects for plotting
  bacterias = bacterias.slice(0, 10);

  console.log(bacterias);

//   // Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual
//   let trace = {
//     x: bacterias.map(obj => obj.sample_values),
//     y: bacterias.map(obj => `OTU ${obj.otu_ids}`),
//     text: bacterias.map(obj => obj.otu_labels),
//     type: "bar",
//     orientation: "h"
//   };

//   let traceData = [trace];

//   let layout = {
//     title: "Top 10 OTUs",
//     xaxis: { title: "Sample Values" },
//     yaxis: { title: "OTU IDs" },
//     height: 500,
//     width: 800
//   };

//   // Render the plot to the div tag with id "bar"
//   Plotly.newPlot("bar", traceData, layout);
});

