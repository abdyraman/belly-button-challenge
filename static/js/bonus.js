function buildgauge(wfreq){

  var data = [
    {
      domain: { x: [0, 1], y: [0, 1] },
      title: {
        text: "Belly Button Washing Frequency<br><span style='font-size: 16px'>Scrubs per week</span>",
        font: { size: 24 },
      },
      type: "indicator",
      mode: "gauge",
      value: wfreq,
      gauge: {
        axis: {
          range: [0, 9],
          tickwidth: 1,
          tickcolor: "darkblue",
          tickvals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          ticktext: ["0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9"]
        },
        bgcolor: "white",
        bar: {
          color: "red",
          shape: "arrow"
        },
        steps: [
          { range: [0, 1], color: "#F5F5DC"},
          { range: [1, 2], color: "#E8F5E9"},
          { range: [2, 3], color: "#C8E6C9"},
          { range: [3, 4], color: "#A5D6A7"},
          { range: [4, 5], color: "#81C784" },
          { range: [5, 6], color: "#66BB6A" },
          { range: [6, 7], color: "#4CAF50"},
          { range: [7, 8], color: "#43A047"},
          { range: [8, 9], color: "#388E3C"}
        ]
      }
    }
  ];
  
  
  
  var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
  Plotly.newPlot('gauge', data, layout);
}
