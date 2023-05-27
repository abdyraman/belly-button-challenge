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

  // Event listener for select change
  selectElement.on('change', function() {
    // Get the selected value
    let selectedValue = d3.select(this).property('value');
    console.log('Selected ID:', selectedValue);

//   // Filter the data based on the selected ID

    const filteredData = data.samples.filter(sample => sample.id === selectedValue);
    console.log("Filtered data:", filteredData);

    // Assign variables to the selected values
    let otuIds = filteredData[0].otu_ids;
    let sampleValues = filteredData[0].sample_values;
    let otuLabels = filteredData[0].otu_labels;
    
    // Log the assigned variables to the console
    console.log("otuIds:", otuIds);
    console.log("sampleValues:", sampleValues);
    console.log("otuLabels:", otuLabels);

    // Sort the sample values in descending order
    sampleValues.sort((a, b) => b - a);

    // Slice the first 10 values
    let topSampleValues = sampleValues.slice(0, 10).reverse();

    console.log("Top Sample Values:", topSampleValues);

   // Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual
   let trace = {
    x: topSampleValues,
    y: otuIds.slice(0, 10).map(id => `OTU ${id}`),
    text: otuLabels.slice(0, 10),
    type: "bar",
    orientation: "h"
  };

    let traceData = [trace];

  let layout = {
      title: "Top 10 OTUs",
      xaxis: { title: "Sample Values" },
      yaxis: { title: "OTU ID" }
    };

// //   // Render the plot to the div tag with id "bar"
    Plotly.newPlot("bar", traceData, layout);
    });
});
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