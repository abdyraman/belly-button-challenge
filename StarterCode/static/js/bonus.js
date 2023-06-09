function buildgauge(wfreq){

var data = [
    {
      domain: { x: [0, 1], y: [0, 1] },
      title: {
        text: "Belly Button Washing Frequency",
        font: { size: 24 }
      },
      type: "indicator",
      mode: "gauge+number",
      value: wfreq,
      gauge: {
        axis: { range: [0, 9], tickwidth: 1, tickcolor: "darkblue" },
        bar: { color: "darkblue" },
        bgcolor: "white",
        steps: [
          { range: [0, 1], color: "rgb(230, 242, 255)" },
          { range: [1, 2], color: "rgb(204, 230, 255)" },
          { range: [2, 3], color: "rgb(179, 217, 255)" },
          { range: [3, 4], color: "rgb(153, 204, 255)" },
          { range: [4, 5], color: "rgb(128, 191, 255)" },
          { range: [5, 6], color: "rgb(102, 178, 255)" },
          { range: [6, 7], color: "rgb(77, 166, 255)" },
          { range: [7, 8], color: "rgb(51, 153, 255)" },
          { range: [8, 9], color: "rgb(26, 140, 255)" }
        ]
      }
    }
  ];
  
  var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
  Plotly.newPlot('gauge', data, layout);
}
