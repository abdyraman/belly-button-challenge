function buildgauge(wfreq) {
  let data = [
    {
      domain: { x: [0, 1], y: [0, 1] },
      title: {
        text: "Belly Button Washing Frequency<br><span style='font-size: 16px'>Scrubs per week</span>",
        font: { size: 24 }
      },
      type: "indicator",
      mode: "gauge",
      value: wfreq,
      gauge: {
        shape: "angular",
        bar: {
          color: "blue",
          line: {
            color: "red",
            width: 4
          },
          thickness: 0
        },
        axis: {
          range: [0, 9],
          tickwidth: 1,
          tickcolor: "darkblue",
          tickvals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          ticktext: ["0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9"]
        },
        bgcolor: "white",
        steps: [
          { range: [0, 1], color: "#F5F5DC" },
          { range: [1, 2], color: "#E8F5E9" },
          { range: [2, 3], color: "#C8E6C9" },
          { range: [3, 4], color: "#A5D6A7" },
          { range: [4, 5], color: "#81C784" },
          { range: [5, 6], color: "#66BB6A" },
          { range: [6, 7], color: "#4CAF50" },
          { range: [7, 8], color: "#43A047" },
          { range: [8, 9], color: "#388E3C" }
        ]
      }
    }
  ];

  var theta = 180;
  var r = 0.7;


  let layout = {
    xaxis: { range: [0, 1], showgrid: false, zeroline: false, visible: false },
    yaxis: { range: [0, 1], showgrid: false, zeroline: false, visible: false },
    showlegend: false,
    annotations: [
      {
        ax: 0.5,
        ay: 0,
        axref: "x",
        ayref: "y",
        x: 0.5 + r * Math.cos(Math.PI / 180 * theta),
        y: wfreq,
        xref: "x",
        yref: "y",
        showarrow: true,
        arrowhead: 2,
      }
    ]
  };

  let GAUGE = document.getElementById("gauge");
  Plotly.newPlot(GAUGE, data, layout);
}



// function buildgauge(wfreq){

// var data = [
//     {
//       domain: { x: [0, 1], y: [0, 1] },
//       title: {
//         text:"Belly Button Washing Frequency<br><span style='font-size: 16px'>Scrubs per week</span>",
//         font: { size: 24 }
//       },
//       type: "indicator",
//       mode: "gauge",
//       value: wfreq,
//       gauge: {
//         shape: "angular",
//         bar: {color: "blue",
//             line: {
//                 color: "red",
//                 width: 4
//             },  
//             thickness: 0
//         },
//         axis: {
//           range: [0, 9],
//           tickwidth: 1,
//           tickcolor: "darkblue",
//           tickvals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//           ticktext: ["0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9"]
//         },
//         bgcolor: "white",
//         steps: [
//           { range: [0, 1], color: "#F5F5DC"},
//           { range: [1, 2], color: "#E8F5E9"},
//           { range: [2, 3], color: "#C8E6C9"},
//           { range: [3, 4], color: "#A5D6A7"},
//           { range: [4, 5], color: "#81C784" },
//           { range: [5, 6], color: "#66BB6A" },
//           { range: [6, 7], color: "#4CAF50"},
//           { range: [7, 8], color: "#43A047"},
//           { range: [8, 9], color: "#388E3C"}
//         ]
//       }
//     }
//   ];
//   var theta = 1;
//   var r = 0.7
//   var x_head = r * Math.cos(Math.PI/180*theta)
//   var y_head = r * Math.sin(Math.PI/180*theta)
  
//   let layout = {
//     xaxis: {range: [0, 1], showgrid: false, 'zeroline': false, 'visible': false},
//     yaxis: {range: [0, 1], showgrid: false, 'zeroline': false, 'visible': false},
//     showlegend: false,
//     annotations: [
//       {
//         ax: 0.5,
//         ay: 0,
//         axref: 'x',
//         ayref: 'y',
//         x: 0.5+x_head,
//         y: y_head,
//         xref: 'x',
//         yref: 'y',
//         showarrow: true,
//         arrowhead: 10,
//       }
//     ]
//   };
//   let GAUGE = document.getElementById("gauge");
//       Plotly.newPlot(GAUGE, data, layout);
//     }

  // shape
// X axis Yaxis
// gauge chart 


// function buildgauge(wfreq){

//   var data = [
//       {
//         domain: { x: [0, 1], y: [0, 1] },
//         title: {
//           text:"Belly Button Washing Frequency<br><span style='font-size: 16px'>Scrubs per week</span>",
//           font: { size: 24 }
//         },
//         type: "indicator",
//         mode: "gauge+number",
//         mode: "gauge",
//         value: wfreq,
//         gauge: {
//           axis: { range: [0, 9], tickwidth: 1, tickcolor: "darkblue" },
//           bar: { color: "darkblue" },
//           axis: {
//             range: [0, 9],
//             tickwidth: 1,
//             tickcolor: "darkblue",
//             tickvals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//             ticktext: ["0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9"]
//           },
//           bgcolor: "white",
//           bar: {
//             color: "red",
//             shape: "arrow"
//           },
//           steps: [
//             { range: [0, 1], color: "#F5F5DC"},
//             { range: [1, 2], color: "#E8F5E9"},
//             { range: [2, 3], color: "#C8E6C9"},
//             { range: [3, 4], color: "#A5D6A7"},
//             { range: [4, 5], color: "#81C784" },
//             { range: [5, 6], color: "#66BB6A" },
//             { range: [6, 7], color: "#4CAF50"},
//             { range: [7, 8], color: "#43A047"},
//             { range: [8, 9], color: "#388E3C"}
//           ]
//         }
//       }
//     ];
//     var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
//       let GAUGE = document.getElementById("gauge");
//       Plotly.newPlot(GAUGE, data, layout);
//     }