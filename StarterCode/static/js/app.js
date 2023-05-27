// Use the D3 library to read in samples.json from the URL
const sample = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Use d3.json() to fetch the data from the URL
d3.json(sample).then((data) => {
  let ids=data.names;  
  console.log(ids);

  // Select the select element
  let selectElement = d3.select('#selDataset');

  // Bind data to options
  const optionSelection = selectElement.selectAll('option')
    .data(ids)
    .enter()
    .append('option');

  // Set the value and text of each option
  optionSelection
    .attr('value', (d) => d)
    .text((d) => d);
});

//   // Create the dropdown select element
//   const dropdownSelect = dropdownContainer
//     .append("select")
//     .attr("id", "dropdown-select");

//   // Create the dropdown options
//   const options = dropdownSelect
//     .selectAll("option")
//     .data(ids)
//     .enter()
//     .append("option")
//     .text(d => d);

// // Event handler for dropdown selection
// dropdownSelect.on("change", function() {
//   const selectedOption = d3.select(this).property("value");
//   console.log("Selected option:", selectedOption);
  
//   // Filter the data based on the selected ID
//   const filteredData = data.samples.filter(sample => sample.id === selectedOption);
  
//   // Log the filtered data
//   console.log("Filtered data:", filteredData);
// });
// });

//  //Horizontal bar chart
//     let samples = data.samples;
//     let otuIds = samples.map(obj => obj.otu_ids);
//     let sampleValues = samples.map(obj => obj.sample_values);
//     let otuLabels = samples.map(obj => obj.otu_labels);

//   // // Combine the extracted arrays into an array of objects
//   let bacterias = samples.map((obj, index) => ({
//     otu_ids: otuIds[index],
//     sample_values: sampleValues[index],
//     otu_labels: otuLabels[index]
//   }));

//   // // Sort the bacterias array based on sample_values in descending order
// bacterias.sort((a, b) => b.sample_values - a.sample_values);

//   // // Slice the first 10 objects for plotting
//  bacterias = bacterias.slice(0, 10);

// console.log(bacterias);

//    // Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual
//    let trace = {
//      x: bacterias.map(obj => obj.sample_values),
//      y: bacterias.map(obj => `OTU ${obj.otu_ids}`),
//      text: bacterias.map(obj => obj.otu_labels),
//      type: "bar",
//      orientation: "h"
//    };

//    let traceData = [trace];

//   let layout = {
//      title: "Top 10 OTUs",
//      xaxis: { title: "Sample Values" },
//      yaxis: { title: "OTU IDs" },
//      height: 500,
//      width: 800
//    };

// // //   // Render the plot to the div tag with id "bar"
//  Plotly.newPlot("bar", traceData, layout);
// });

//  //Create a bubble chart that displays each sample.

//   // Create the trace for the bubble chart
//   let trace = {
//     x: otuIds,
//     y: sampleValues,
//     text: otuLabels,
//     mode: 'markers',
//     marker: {
//       size: sampleValues,
//       color: otuIds,
//       colorscale: 'Earth',
//     }
//   };

//   let traceData = [trace];

//   let layout = {
//     title: 'Bubble Chart - Samples',
//     xaxis: { title: 'OTU IDs' },
//     yaxis: { title: 'Sample Values' },
//     showlegend: false,
//     height: 600,
//     width: 1000
//   };

//   // Render the plot to the div tag with id "bubble"
//   Plotly.newPlot('bubble', traceData, layout);
// });

// //Display the sample metadata, i.e., an individual's demographic information.

// //Display each key-value pair from the metadata JSON object somewhere on the page.

// //Update all the plots when a new sample is selected. 
// //Additionally, you are welcome to create any layout that you would like for your dashboard. 
// //Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. 
// //Ensure that your repository has regular commits and a thorough README.md file