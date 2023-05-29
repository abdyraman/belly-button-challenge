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

//   Filter the data based on the selected ID

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

    // Sort the sample values 
    sampleValues.sort((a, b) => b - a);

    // Slice the first 10 values in descending order
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

    // Create the trace for the bubble chart
    let trace2 = {
      x: otuIds,
      y: sampleValues,
      text: otuLabels,
      mode: 'markers',
      marker: {
        size: sampleValues,
        color: otuIds,
        colorscale: 'Earth',
      }
    };

    let traceData2 = [trace2];

    let layout2 = {
      title: 'Bubble Chart - Samples',
      xaxis: { title: 'OTU IDs' },
      yaxis: { title: 'Sample Values' },
      showlegend: false,
      height: 600,
      width: 1000
    };

    // Render the plot to the div tag with id "bubble"
    Plotly.newPlot('bubble', traceData2, layout2);

//Display the sample metadata, i.e., an individual's demographic information.
  // Filter the data based on the selected ID

    const filteredMetadata = data.metadata.filter(metadata => metadata.id === parseInt(selectedValue));
    console.log("Filtered metadata:", filteredMetadata);

    // Select the element where you want to display the metadata (e.g., a <div> with id "metadata")
    let metadataElement = d3.select('#sample-metadata');

    // Clear any existing metadata
    metadataElement.html('');

    // Iterate over the filtered metadata and display each demographic
    filteredMetadata.forEach(metadata => {
      Object.entries(metadata).forEach(([key, value]) => {
        metadataElement
          .append('p')
          .text(`${key}: ${value}`);
      });
    });
    var wfreq=filteredMetadata[0].wfreq
    buildgauge(wfreq)
});
});


