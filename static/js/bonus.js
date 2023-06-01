
// function buildgauge(wfreq) {
//   let data = [
//     {
//       domain: { x: [0, 1], y: [0, 1] },
//       title: {
//         text: "Belly Button Washing Frequency<br><span style='font-size: 16px'>Scrubs per week</span>",
//         font: { size: 24 }
//       },
//       type: "indicator",
//       mode: "gauge",
//       value: wfreq,
//       gauge: {
//         shape: "angular",
//         bar: {
//           color: "blue",
//           line: {
//             color: "red",
//             width: 4
//           },
//           thickness: 0
//         },
//         axis: {
//           range: [0, 9],
//           tickwidth: 1,
//           tickcolor: "darkblue",
//           tickvals: [0, 1, 2, 3, 4, 5, 6, 7, 8],
//           ticktext: ["0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9"]
//         },
//         bgcolor: "white",
//         steps: [
//           { range: [0, 1], color: "#F5F5DC" },
//           { range: [1, 2], color: "#E8F5E9" },
//           { range: [2, 3], color: "#C8E6C9" },
//           { range: [3, 4], color: "#A5D6A7" },
//           { range: [4, 5], color: "#81C784" },
//           { range: [5, 6], color: "#66BB6A" },
//           { range: [6, 7], color: "#4CAF50" },
//           { range: [7, 8], color: "#43A047" },
//           { range: [8, 9], color: "#388E3C" }
//         ]
//       }
//     }
//   ];

//   var theta = 180;
//   var r = 0.7;


//   let layout = {
//     xaxis: { range: [0, 1], showgrid: false, zeroline: false, visible: false },
//     yaxis: { range: [0, 1], showgrid: false, zeroline: false, visible: false },
//     showlegend: false,
//     annotations: [
//       {
//         ax: 0.5,
//         ay: 0,
//         axref: "x",
//         ayref: "y",
//         x: 0.5 + r * Math.cos(Math.PI / 180 * theta),
//         y: wfreq,
//         xref: "x",
//         yref: "y",
//         showarrow: true,
//         arrowhead: 2,
//       }
//     ]
//   };

//   let GAUGE = document.getElementById("gauge");
//   Plotly.newPlot(GAUGE, data, layout);
// }

// Enter a speed between 0 and 180
var level = 10;

// Trig to calc meter point
function gaugePointer(wfreq) {
  var degrees = 180 - wfreq * 20;
  var radius = 0.5;
  var radians = degrees * Math.PI / 180;
  var x = radius * Math.cos(radians);
  var y = radius * Math.sin(radians);

  // Path: may have to change to create a better triangle
  var mainPath = 'M -.0 -0.035 L .0 0.035 L ';
  var pathX = String(x);
  var space = ' ';
  var pathY = String(y);
  var pathEnd = ' Z';
  var path = mainPath.concat(pathX, space, pathY, pathEnd);

  return path;
}

function buildgauge(wfreq) {
  var data = [
    {
      type: 'scatter',
      x: [0],
      y: [0],
      marker: { size: 18, color: '850000' },
      showlegend: false,
      name: 'Belly Button',
      text: level,
      hoverinfo: 'text+name'
    },
    {
      values: [50/9, 50/9, 50/9, 50/9, 50/9, 50/9,50/9,50/9,50/9, 50],
      rotation: 90,
      text: ["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
      textinfo: 'text',
      textposition: 'inside',
      marker: {
        colors: [
          'rgba(14, 127, 0, .5)','rgba(14, 127, 0, .5)','rgba(14, 127, 0, .5)',
'rgba(110, 154, 22, .5)','rgba(170, 202, 42, .5)' ,'rgba(202, 209, 95, .5)' ,'rgba(210, 206, 145, .5)' ,'rgba(232, 226, 202, .5)' ,'rgba(255, 255, 255, 0)' 
        ]
      },
      labels: ['9', '8', '7', '6', '5', '4', '3','2','1',''],
      hoverinfo: 'label',
      hole: 0.5,
      type: 'pie',
      showlegend: false
    }
  ];

  var layout = {
    shapes: [{
      type: 'path',
      path: gaugePointer(wfreq),
      fillcolor: '850000',
      line: {
        color: '850000'
      }
    }],
    autosize: true,
    xaxis: {
      zeroline: false,
      showticklabels: false,
      showgrid: false,
      range: [-1, 1]
    },
    yaxis: {
      zeroline: false,
      showticklabels: false,
      showgrid: false,
      range: [-1, 1]
    }
  };

  let GAUGE = document.getElementById("gauge");
  Plotly.newPlot(GAUGE, data, layout);
}

