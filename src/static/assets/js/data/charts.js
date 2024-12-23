// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0


export const apex_area1 = {
  chart: {
    type: "area",
    stacked: false,
    height: 300,
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    strokeDashArray: 3,
  },
  series: [
    {
      data: [
        8000, 4000, 5000, 17000, 18000, 40000, 18000, 10000, 6000, 20000,
      ], // Numeric values
    },
  ],
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jan",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
  ],
  colors: ["#6950E7"],
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: true,
    },
    labels: {
      offsetX: 0,
      offsetY: 5,
    },
    tooltip: {
      enabled: false
    },
  },
  yaxis: {
    min: 0,    // Set your minimum value here
    max: 50000,   // Set your maximum value here
    tickAmount: 5,
    labels: {
      formatter: function (value) {
        if (value >= 1000) {
          return value / 1000 + "K"; // Convert to K format
        }
        return value.toLocaleString(); // Format numbers less than 1000 normally
      },
    },
    opposite: false,
  },
  legend: {
    show: false,
  },
  tooltip: {
    marker: {
      show: false,
    },
    y: {
      formatter: function (value) {
        // Format y-axis value
        if (value >= 1000) {
          return value / 1000 + "K"; // Convert to K format
        }
        return value.toLocaleString(); // Format numbers less than 1000 normally
      },
    },
    // Combine x and y values in the tooltip
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      var labels = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jan",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ];
      var xLabel = labels[dataPointIndex];
      var yValue = series[seriesIndex][dataPointIndex];

      // Format the y value
      var formattedYValue =
        yValue >= 1000 ? yValue / 1000 + "K" : yValue.toLocaleString();

      return `<div class="p-2.5 text-sm font-semibold">
                  ${xLabel} : ${formattedYValue}
                </div>`;
    },
  },
  theme: {
    mode: "light",
  },
};

// Referral Source Chart1
export const referral_source_chart1 = {
  series: [
    {
      data: [10, 12, 11, 13, 12, 12, 11, 10],
    },
  ],
  chart: {
    height: 30,
    type: "line",
    sparkline: {
      enabled: true,
    },
    zoom: {
      enabled: true, // Disables zooming
    },
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  colors: ["#11b886"],
  tooltip: {
    enabled: false,  // Disable the tooltip completely
  },
};

// Referral Source Chart2
export const referral_source_chart2 = {
  series: [
    {
      data: [10, 12, 11, 13, 12, 12, 11, 10],
    },
  ],
  chart: {
    height: 30,
    type: "line",
    sparkline: {
      enabled: true,
    },
    zoom: {
      enabled: true, // Disables zooming
    },
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  colors: ["#FF6B93"],
  tooltip: {
    enabled: false,  // Disable the tooltip completely
  },
};

// Referral Source Chart3
export const referral_source_chart3 = {
  series: [
    {
      data: [10, 12, 11, 13, 12, 12, 11, 10],
    },
  ],
  chart: {
    height: 30,
    type: "line",
    sparkline: {
      enabled: true,
    },
    zoom: {
      enabled: true, // Disables zooming
    },
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  colors: ["#11b886"],
  tooltip: {
    enabled: false,  // Disable the tooltip completely
  },
};

// Browser Session
export const browser_session_chart = {
  series: [40, 30, 50],
  labels: ["Chrome", "Opera Mini", "Yohoo!"],
  colors: ["#323a46", "#6a69f5", "#50cd89"],
  chart: {
    height: 172,
    type: "donut",
    background: 'transparent',
    toolbar: {
      show: false,
    },
  },
  dataLabels: { 
    enabled: false 
  },
  legend: {
    show: false,
  },
  plotOptions: {
    pie: {
      expandOnClick: false,
      donut: {
        size: '75%', // Adjust this value to change the size of the donut
        labels: {
          show: false, // Additional control if donut labels are not required
        },
      },
    },
  },
  states: {
    active: { 
      filter: { 
        type: 'none' 
      } 
    },
    hover: { 
      filter: { 
        type: 'none' 
      } 
    },
  },
  stroke: { 
    width: 0.5
  },
  tooltip: { 
    fillSeriesColor: false ,
    marker: {
      show: false,
    },
    custom: function({ seriesIndex, dataPointIndex, w }) {
      const color = w.config.colors[seriesIndex]; // Get the color for the series
      const label = w.config.labels[seriesIndex]; // Get the label for the series
      const value = w.config.series[seriesIndex]; // Get the value for the series

      return `
        <div class="p-2.5 text-sm font-semibold rounded-lg overflow-hidden shadow-none" style="background: ${color};">
          ${label} ${value}%
        </div>
      `;
    },
  },
};

export const activeUsers = {
  series: [
    {
      data: [22, 30, 46, 50, 46, 30, 22],
    },
  ],
  chart: {
    type: "bar",
    stacked: true,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false, // Hides the toolbar
    },
    height: 250,
  },
  plotOptions: {
    bar: {
      columnWidth: '28%',
      distributed: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  zoom: {
    enabled: false, // Disables zooming
  },
  xaxis: {
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: true,
    },
    labels: {
      show: false,
    },
    axisBorder: {
      show: false, // Hides the x-axis bottom line
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  grid: {
    show: false, // Removes the background grid lines
  },
  colors: ['#e5e7eb', '#6950e8', '#e5e7eb', '#6950e8', '#e5e7eb', '#6950e8', '#e5e7eb', '#6950e8'], // Alternating blue and gray
  tooltip: {
    marker: {
      show: false,
    },
    // Combine x and y values in the tooltip
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      var labels = [
        "Sat",
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
      ];
      var xLabel = labels[dataPointIndex];
      var yValue = series[seriesIndex][dataPointIndex];

      return `<div class="p-2.5 text-sm font-semibold">
                  ${xLabel}: ${yValue}
                </div>`;
    },
  },
};

// Completed Goals Chart
export const completed_goals_chart = {
  series: [
    {
      data: [70, 60, 90, 80, 100, 70, 80],
    },
  ],
  chart: {
    type: "bar",
    stacked: true,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false, // Hides the toolbar
    },
    height: 120,
    offsetY: 30, // Adjust vertical position if needed
    offsetX: -5, // Adjust horizontal position if needed
  },
  plotOptions: {
    bar: {
      columnWidth: '35%',
      distributed: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  zoom: {
    enabled: false, // Disables zooming
  },
  xaxis: {
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: true,
    },
    labels: {
      show: false,
    },
    axisBorder: {
      show: false, // Hides the x-axis bottom line
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  grid: {
    show: false, // Removes the background grid lines
  },
  colors: ['#e5e7eb', '#6950e8', '#e5e7eb', '#6950e8', '#e5e7eb', '#6950e8', '#e5e7eb', '#6950e8'], // Alternating blue and gray
  tooltip: {
    marker: {
      show: false,
    },
    // Combine x and y values in the tooltip
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      var labels = [
        "Sat",
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
      ];
      var xLabel = labels[dataPointIndex];
      var yValue = series[seriesIndex][dataPointIndex];

      return `<div class="p-2.5 text-sm font-semibold">
                  ${xLabel}: ${yValue}
                </div>`;
    },
  },
};

// Completed Rates Chart
export const completed_rates_chart = {
  series: [
    {
      data: [70, 60, 90, 80, 100, 70, 80],
    },
  ],
  chart: {
    type: "bar",
    stacked: true,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false, // Hides the toolbar
    },
    height: 120,
    offsetY: 30, // Adjust vertical position if needed
    offsetX: -5, // Adjust horizontal position if needed
  },
  plotOptions: {
    bar: {
      columnWidth: '35%',
      distributed: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  zoom: {
    enabled: false, // Disables zooming
  },
  xaxis: {
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: true,
    },
    labels: {
      show: false,
    },
    axisBorder: {
      show: false, // Hides the x-axis bottom line
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  grid: {
    show: false, // Removes the background grid lines
  },
  colors: ['#e5e7eb', '#11b886', '#e5e7eb', '#11b886', '#e5e7eb', '#11b886', '#e5e7eb', '#11b886'], // Alternating blue and gray
  tooltip: {
    marker: {
      show: false,
    },
    // Combine x and y values in the tooltip
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      var labels = [
        "Sat",
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
      ];
      var xLabel = labels[dataPointIndex];
      var yValue = series[seriesIndex][dataPointIndex];

      return `<div class="p-2.5 text-sm font-semibold">
                  ${xLabel}: ${yValue}
                </div>`;
    },
  },
};

// Sales by Country Chart
export const sales_country_chart = {
  series: [
    {
      data: [60, 40, 80, 60, 90, 70, 80],
    },
  ],
  chart: {
    type: "bar",
    stacked: true,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false, // Hides the toolbar
    },
    height: 360,
  },
  plotOptions: {
    bar: {
      columnWidth: '28%',
      distributed: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  zoom: {
    enabled: false, // Disables zooming
  },
  xaxis: {
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: true,
    },
    axisBorder: {
      show: false, // Hides the x-axis bottom line
    },
    categories: ["AUS", "USA", "RSA", "BRA", "JAP", "UAE", "THI"], // Updated categories
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  grid: {
    show: false, // Removes the background grid lines
  },
  colors: ['#e5e7eb', '#6950e8', '#e5e7eb', '#6950e8', '#e5e7eb', '#6950e8', '#e5e7eb', '#6950e8'], // Alternating blue and gray
  tooltip: {
    marker: {
      show: false,
    },
    // Combine x and y values in the tooltip
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      var labels = [
        "AUS",
        "USA",
        "RSA",
        "BRA",
        "JAP",
        "UAE",
        "THI",
      ];
      var xLabel = labels[dataPointIndex];
      var yValue = series[seriesIndex][dataPointIndex];

      return `<div class="p-2.5 text-sm font-semibold">
                  ${xLabel}: ${yValue}
                </div>`;
    },
  },
};

// Average Positions Chart1
export const average_positions_chart = {
  chart: {
    type: "area",
    stacked: false,
    height: 330,
    toolbar: {
      show: false,
    },
  },
  colors: ["#6a69f5", "#323a46"],
  dataLabels: {
    enabled: false,
  },
  grid: {
    strokeDashArray: 3,
  },
  series: [
    {
      data: [6, 15, 10, 17], // Numeric values
    },
  ],
  labels: [
    "Sep 20",
    "Sep 21",
    "Sep 22",
    "Sep 23",
  ],
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: true,
    },
    tooltip: {
      enabled: false
    },
  },
  yaxis: {
    min: 0,    // Set your minimum value here
    max: 20,   // Set your maximum value here
  },
  fill: {
    type: "solid", // Change to solid fill for no gradient
    opacity: 0, // Set opacity to 0 for no fill
  },
  stroke: {
    show: true,
    curve: 'smooth', // Use smooth curve for the outline
    lineCap: 'round',
    colors: ["#11b886"], // Set the color for the outline
    width: 3, // Adjust width as needed
  },
  markers: {
    colors: ["#11b886"],
    strokeColors: ['#000'],
    strokeWidth: 2,
    strokeOpacity: 1,
  },
  legend: {
    show: false,
  },
  tooltip: {
    marker: {
      show: false,
    },
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      var labels = [
        "Sep 20",
        "Sep 21",
        "Sep 22",
        "Sep 23",
      ];
      var xLabel = labels[dataPointIndex];
      var yValue = series[seriesIndex][dataPointIndex];

      return `<div class="p-2.5 text-sm font-semibold">
                  ${xLabel}: ${yValue}
                </div>`;
    },
  },
  theme: {
    mode: "light",
  },
};

// Referral Source Chart1
export const apex_area2 = {
  chart: {
    type: "area",
    stacked: false,
    height: 300,
    toolbar: {
      show: false,
    },
  },
  colors: ["#6a69f5", "#323a46"],
  dataLabels: {
    enabled: false,
  },
  grid: {
    strokeDashArray: 3,
  },
  series: [
    {
      data: [
        0, 10000, 15000, 30000, 40000, 10000, 10000, 15000, 30000, 40000, 20000,
      ], // Numeric values
    },
  ],
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jan",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
  ],
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: true,
    },
    tooltip: {
      enabled: false
    },
  },
  yaxis: {
    tickAmount: 5,
    labels: {
      formatter: function (value) {
        if (value >= 1000) {
          return value / 1000 + "K"; // Convert to K format
        }
        return value.toLocaleString(); // Format numbers less than 1000 normally
      },
    },
    opposite: false,
  },
  fill: {
    type: "solid", // Change to solid fill for no gradient
    opacity: 0, // Set opacity to 0 for no fill
  },
  stroke: {
    show: true,
    curve: 'smooth', // Use smooth curve for the outline
    lineCap: 'round',
    colors: ["#6950E8"], // Set the color for the outline
    width: 3, // Adjust width as needed
  },
  legend: {
    show: false,
  },
  tooltip: {
    marker: {
      show: false,
    },
    y: {
      formatter: function (value) {
        // Format y-axis value
        if (value >= 1000) {
          return value / 1000 + "K"; // Convert to K format
        }
        return value.toLocaleString(); // Format numbers less than 1000 normally
      },
    },
    // Combine x and y values in the tooltip
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      var labels = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jan",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ];
      var xLabel = labels[dataPointIndex];
      var yValue = series[seriesIndex][dataPointIndex];

      // Format the y value
      var formattedYValue =
        yValue >= 1000 ? yValue / 1000 + "K" : yValue.toLocaleString();

      return `<div class="p-2.5 text-sm font-semibold">
                  ${xLabel}: ${formattedYValue}
                </div>`;
    },
  },
  theme: {
    mode: "light",
  },
};

// Referral Source Chart1
export const referral_source_chart1_2 = {
  series: [
    {
      data: [10, 12, 11, 13, 12, 12, 11, 10],
    },
  ],
  chart: {
    height: 30,
    type: "line",
    sparkline: {
      enabled: true,
    },
    zoom: {
      enabled: true, // Disables zooming
    },
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  colors: ["#11b886"],
  tooltip: {
    enabled: false,  // Disable the tooltip completely
  },
};

// Referral Source Chart2
export const referral_source_chart2_2 = {
  series: [
    {
      data: [10, 12, 11, 13, 12, 12, 11, 10],
    },
  ],
  chart: {
    height: 30,
    type: "line",
    sparkline: {
      enabled: true,
    },
    zoom: {
      enabled: true, // Disables zooming
    },
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  colors: ["#FF6B93"],
  tooltip: {
    enabled: false,  // Disable the tooltip completely
  },
};

// Referral Source Chart3
export const referral_source_chart3_2 = {
  series: [
    {
      data: [10, 12, 11, 13, 12, 12, 11, 10],
    },
  ],
  chart: {
    height: 30,
    type: "line",
    sparkline: {
      enabled: true,
    },
    zoom: {
      enabled: true, // Disables zooming
    },
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  colors: ["#11b886"],
  tooltip: {
    enabled: false,  // Disable the tooltip completely
  },
};

// Browser Session
export const browser_session_chart_2 = {
  series: [40, 30, 50],
  labels: ["Chrome", "Opera Mini", "Yohoo!"],
  colors: ["#323a46", "#6a69f5", "#50cd89"],
  chart: {
    height: 172,
    type: "donut",
    background: 'transparent',
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false,
  },
  plotOptions: {
    pie: {
      expandOnClick: false,
      donut: {
        size: '75%', // Adjust this value to change the size of the donut
        labels: {
          show: false, // Additional control if donut labels are not required
        },
      },
    },
  },
  states: {
    active: {
      filter: {
        type: 'none'
      }
    },
    hover: {
      filter: {
        type: 'none'
      }
    },
  },
  stroke: {
    width: 0.5
  },
  tooltip: {
    fillSeriesColor: false,
    marker: {
      show: false,
    },
    custom: function ({ seriesIndex, dataPointIndex, w }) {
      const color = w.config.colors[seriesIndex]; // Get the color for the series
      const label = w.config.labels[seriesIndex]; // Get the label for the series
      const value = w.config.series[seriesIndex]; // Get the value for the series

      return `
        <div class="p-2.5 text-sm font-semibold rounded-lg overflow-hidden shadow-none" style="background: ${color};">
          ${label} ${value}%
        </div>
      `;
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};

export const completed_goals_chart_2 = {
  chart: {
    type: "area",
    stacked: false,
    toolbar: {
      show: false,
    },
    height: 120,
    offsetY: 20, // Adjust vertical position if needed
    offsetX: -5, // Adjust horizontal position if needed
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  grid: {
    show: false, // Removes the background grid lines
  },
  series: [
    {
      data: [70, 60, 90, 80, 100, 70, 80], // Numeric values
    },
  ],
  labels: [
    "Sat",
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
  ],
  xaxis: {
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: true,
    },
    labels: {
      show: false,
    },
    axisBorder: {
      show: false, // Hides the x-axis bottom line
    },
    tooltip: {
      enabled: false
    },
  },
  yaxis: {
    min: 0,    // Set your minimum value here
    max: 100,   // Set your maximum value here
    labels: {
      show: false,
    },
  },
  colors: ["#6950E7"],
  legend: {
    show: false,
  },
  tooltip: {
    marker: {
      show: false,
    },
    y: {
      formatter: function (value) {
        // Format y-axis value
        if (value >= 1000) {
          return value / 1000 + "K"; // Convert to K format
        }
        return value.toLocaleString(); // Format numbers less than 1000 normally
      },
    },
    // Combine x and y values in the tooltip
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      var labels = [
        "Sat",
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
      ];
      var xLabel = labels[dataPointIndex];
      var yValue = series[seriesIndex][dataPointIndex];

      // Format the y value
      var formattedYValue =
        yValue >= 1000 ? yValue / 1000 + "K" : yValue.toLocaleString();

      return `<div class="p-2.5 text-sm font-semibold">
                  ${xLabel}: ${formattedYValue}
                </div>`;
    },
  },
  theme: {
    mode: "light",
  },
};

// Completed Rates Chart
export const completed_rates_chart_2 = {
  series: [
    {
      data: [70, 60, 90, 80, 100, 70, 80],
    },
  ],
  chart: {
    type: "bar",
    stacked: true,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false, // Hides the toolbar
    },
    height: 120,
    offsetY: 30, // Adjust vertical position if needed
    offsetX: -5, // Adjust horizontal position if needed
  },
  plotOptions: {
    bar: {
      columnWidth: '35%',
      distributed: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  zoom: {
    enabled: false, // Disables zooming
  },
  xaxis: {
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: true,
    },
    labels: {
      show: false,
    },
    axisBorder: {
      show: false, // Hides the x-axis bottom line
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  grid: {
    show: false, // Removes the background grid lines
  },
  colors: ['#e5e7eb', '#11b886', '#e5e7eb', '#11b886', '#e5e7eb', '#11b886', '#e5e7eb', '#11b886'], // Alternating blue and gray
  tooltip: {
    marker: {
      show: false,
    },
    // Combine x and y values in the tooltip
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      var labels = [
        "Sat",
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
      ];
      var xLabel = labels[dataPointIndex];
      var yValue = series[seriesIndex][dataPointIndex];

      return `<div class="p-2.5 text-sm font-semibold">
                  ${xLabel}: ${yValue}
                </div>`;
    },
  },
};

// Sales by Country Chart
export const sales_country_chart_2 = {
  series: [
    {
      data: [60, 40, 80, 60, 90, 70, 80],
    },
  ],
  chart: {
    type: "bar",
    stacked: true,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false, // Hides the toolbar
    },
    height: 360,
  },
  plotOptions: {
    bar: {
      barHeight: '28%',
      distributed: true,
      horizontal: true,
      borderRadius: 5,
      borderRadiusApplication: 'end',
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  zoom: {
    enabled: false, // Disables zooming
  },
  xaxis: {
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
    },
    crosshairs: {
      show: true,
    },
    axisBorder: {
      show: false, // Hides the x-axis bottom line
    },
    categories: ["AUS", "USA", "RSA", "BRA", "JAP", "UAE", "THI"], // Ensure categories are correctly defined
  },
  yaxis: {
    labels: {
      show: true, // Set to true to ensure labels are visible
    },
  },
  grid: {
    show: false, // Removes the background grid lines
  },
  colors: ['#e5e7eb', '#6950e8', '#e5e7eb', '#6950e8', '#e5e7eb', '#6950e8', '#e5e7eb', '#6950e8'], // Alternating blue and gray
  tooltip: {
    marker: {
      show: false,
    },
    // Combine x and y values in the tooltip
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      var labels = [
        "AUS",
        "USA",
        "RSA",
        "BRA",
        "JAP",
        "UAE",
        "THI",
      ];
      var xLabel = labels[dataPointIndex];
      var yValue = series[seriesIndex][dataPointIndex];

      return `<div class="p-2.5 text-sm font-semibold">
                  ${xLabel}: ${yValue}
                </div>`;
    },
  },
};

// Daily Sales Chart
export const daily_sales_chart = {
  series: [
    {
      data: [22, 30, 46, 50, 46, 30, 22],
    },
  ],
  chart: {
    type: "bar",
    stacked: true,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false, // Hides the toolbar
    },
    height: 130,
    offsetX: -5, // Adjust horizontal position if needed
  },
  plotOptions: {
    bar: {
      columnWidth: '35%',
      distributed: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  zoom: {
    enabled: false, // Disables zooming
  },
  xaxis: {
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: true,
    },
    labels: {
      show: false,
    },
    axisBorder: {
      show: false, // Hides the x-axis bottom line
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  grid: {
    show: false, // Removes the background grid lines
  },
  colors: ['#e5e7eb', '#6950E8', '#e5e7eb', '#6950E8', '#e5e7eb', '#6950E8', '#e5e7eb', '#6950E8'], // Alternating blue and gray
  tooltip: {
    marker: {
      show: false,
    },
    // Combine x and y values in the tooltip
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      var labels = [
        "Sat",
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
      ];
      var xLabel = labels[dataPointIndex];
      var yValue = series[seriesIndex][dataPointIndex];

      return `<div class="p-2.5 text-sm font-semibold">
                  ${xLabel}: ${yValue}
                </div>`;
    },
  },
};

// Referral Source Chart1
export const apex_area3 = {
  series: [
    {
      data: [
        38000, 48000, 50000, 40000, 42000, 30000, 33000
      ], // Numeric values
    },
  ],
  chart: {
    type: "bar",
    stacked: true,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false, // Hides the toolbar
    },
    height: 300,
    offsetY: 20, // Adjust vertical position if needed
    offsetX: -5, // Adjust horizontal position if needed
  },
  plotOptions: {
    bar: {
      columnWidth: '18.5%',
      distributed: true,
      borderRadius: 9,
      borderRadiusApplication: 'end',
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  zoom: {
    enabled: false, // Disables zooming
  },
  labels: [
    "Sat",
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
  ],
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: true,
    },
  },
  yaxis: {
    tickAmount: 5,
    min: 0,    // Set your minimum value here
    max: 50000,   // Set your maximum value here
    labels: {
      formatter: function (value) {
        if (value >= 1000) {
          return value / 1000 + "K"; // Convert to K format
        }
        return value.toLocaleString(); // Format numbers less than 1000 normally
      },
      offsetX: -10,
      offsetY: 0,
      style: {
        fontSize: "12px",
        cssClass: "apexcharts-yaxis-title",
      },
    },
    opposite: false,
  },
  grid: {
    strokeDashArray: 3,
  },
  colors: ['#6950E8', '#e5e7eb', '#6950E8', '#e5e7eb', '#6950E8', '#e5e7eb', '#6950E8'], // Alternating blue and gray
  tooltip: {
    marker: {
      show: false,
    },
    y: {
      formatter: function (value) {
        // Format y-axis value
        if (value >= 1000) {
          return value / 1000 + "K"; // Convert to K format
        }
        return value.toLocaleString(); // Format numbers less than 1000 normally
      },
    },
    // Combine x and y values in the tooltip
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      var labels = [
        "Sat",
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
      ];
      var xLabel = labels[dataPointIndex];
      var yValue = series[seriesIndex][dataPointIndex];

      // Format the y value
      var formattedYValue =
        yValue >= 1000 ? yValue / 1000 + "K" : yValue.toLocaleString();

      return `<div class="p-2.5 text-sm font-semibold">
                  ${xLabel}: ${formattedYValue}
                </div>`;
    },
  },
};

// Referral Source Chart1
export const returning_rate_chat = {
  chart: {
    type: 'area',
    stacked: false,
    height: 280,
    toolbar: {
      show: false,
    },
  },
  colors: ['#6950e8', '#11b886'], // Colors for both lines
  dataLabels: {
    enabled: false,
  },
  grid: {
    strokeDashArray: 3,
  },
  series: [
    {
      name: 'Returning', // Name for the first series
      data: [
        0, 250, 100, 17, 122, 18,
      ],
    },
    {
      name: 'New', // Name for the second series
      data: [
        20, 150, 75, 150, 300, 400,
      ],
    },
  ],
  labels: [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  ],
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: true,
    },
    tooltip: {
      enabled: false
    },
  },
  yaxis: {
    tickAmount: 5,
    labels: {
      formatter: function (value) {
        return value.toLocaleString(); // Format numbers with thousand separators
      },
      style: {
        fontSize: '12px',
        cssClass: 'apexcharts-yaxis-title',
      },
    },
    opposite: false,
  },
  fill: {
    type: 'solid',
    opacity: 0, // Set opacity to 0 for no fill
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'round',
    colors: ['#6950e8', '#11b886'], // Colors for both lines
    width: 3, // Adjust width as needed
  },
  legend: {
    show: true, // Show legend to identify both lines
    position: 'top',
    labels: {
      style: {
        fontSize: '12px', // Change font size here
      },
    },
  },
  tooltip: {
    marker: {
      show: false,
    },
    y: {
      formatter: function (value) {
        return value.toLocaleString(); // Format numbers with thousand separators
      },
    },
    custom: function ({ series, seriesIndex, dataPointIndex }) {
      var labels = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      ];
      var xLabel = labels[dataPointIndex];
      var yValue = series[seriesIndex][dataPointIndex];
      var formattedYValue = yValue.toLocaleString();

      return `<div class="p-2.5 text-sm font-semibold">
                ${xLabel}: ${formattedYValue}
              </div>`;
    },
  },
  theme: {
    mode: 'light',
  },
};

export const average_deals_chart = {
  series: [2658, 6687, 4348],
  labels: ["Cloths", "Foods", "Others"],
  colors: ["#6950E8", "#4B5563", "#D1D5DB"],
  chart: {
    height: 150,
    width: 150,
    offsetX: -10, // Adjust horizontal position if needed
    type: "donut",
    background: 'transparent',
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false,
  },
  plotOptions: {
    pie: {
      expandOnClick: false,
      borderRadius: 8,
      donut: {
        size: '70%', // Adjust this value to change the size of the donut
        labels: {
          show: false, // Additional control if donut labels are not required
        },
      },
    },
  },
  states: {
    active: {
      filter: {
        type: 'none'
      }
    },
    hover: {
      filter: {
        type: 'none'
      }
    },
  },
  stroke: {
    width: 1.5,
  },
  tooltip: {
    fillSeriesColor: false,
    marker: {
      show: false,
    },
    custom: function ({ seriesIndex, dataPointIndex, w }) {
      const color = w.config.colors[seriesIndex]; // Get the color for the series
      const label = w.config.labels[seriesIndex]; // Get the label for the series
      const value = w.config.series[seriesIndex]; // Get the value for the series

      return `
        <div class="px-2.5 py-1.5 text-sm font-semibold overflow-hidden shadow-none" style="background: ${color};">
          <span class="font-normal">${label}</span> ${value}
        </div>
      `;
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};

// Browser Session
export const deal_type_chart = {
    series: [40, 20, 20],
    labels: ["Pending", "Won", "Loss"],
    colors: ["#6950E8", "#11B886", "#6B7280"],
    chart: {
      height: 245,
      type: "donut",
      background: 'transparent',
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: '75%', // Adjust this value to change the size of the donut
          labels: {
            show: true,
            total: {
              show: true,
              fontSize: '12px',
              label: 'Total',
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => a + b, 0);
              }
            }
          }
        }
      },
    },
    states: {
      active: {
        filter: {
          type: 'none'
        }
      },
      hover: {
        filter: {
          type: 'none'
        }
      },
    },
    stroke: {
      width: 3
    },
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
    },
    tooltip: {
      fillSeriesColor: false,
      custom: function ({ seriesIndex, dataPointIndex, w }) {
        const color = w.config.colors[seriesIndex]; // Get the color for the series
        const label = w.config.labels[seriesIndex]; // Get the label for the series
        const value = w.config.series[seriesIndex]; // Get the value for the series

        return `
        <div class="px-2.5 py-2 text-black text-sm font-medium overflow-hidden shadow-none" style="background: ${color};">
          <span class="font-normal">${label}</span> ${value}%
        </div>
      `;
      },
    }
};
  
// Referral Source Chart1
export const sales_forecast_chart = {
  series: [
    {
      data: [
        50000, 28000, 40000,
      ], // Numeric values
    },
  ],
  chart: {
    type: "bar",
    stacked: true,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false, // Hides the toolbar
    },
    height: 220,
  },
  plotOptions: {
    bar: {
      columnWidth: '20%',
      distributed: true,
      borderRadius: 10,
      borderRadiusApplication: 'end',
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  zoom: {
    enabled: false, // Disables zooming
  },
  labels: [
    "Goal",
    "Pending",
    "Profit",
  ],
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: true,
    },
  },
  yaxis: {
    tickAmount: 3,
    min: 0,    // Set your minimum value here
    max: 50000,   // Set your maximum value here
    labels: {
      formatter: function (value) {
        if (value >= 1000) {
          return Math.floor(value / 1000) + "K"; // Convert to K format
        }
        return Math.floor(value).toLocaleString(); // Format numbers less than 1000 normally
      },
      offsetX: -10,
      offsetY: 0,
      style: {
        fontSize: "12px",
        cssClass: "apexcharts-yaxis-title",
      },
    },
    opposite: false,
  },
  grid: {
    strokeDashArray: 3,
  },
  colors: ['#6950E8', '#555D6B', '#ABB1BB',], // Alternating blue and gray
  tooltip: {
    marker: {
      show: false,
    },
    y: {
      formatter: function (value) {
        // Format y-axis value
        if (value >= 1000) {
          return Math.floor(value / 1000) + "K"; // Convert to K format
        }
        return Math.floor(value).toLocaleString(); // Format numbers less than 1000 normally
      },
    },
    // Combine x and y values in the tooltip
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      var labels = [
        "Goal",
        "Pending",
        "Profit",
      ];
      var xLabel = labels[dataPointIndex];
      var yValue = series[seriesIndex][dataPointIndex];

      // Format the y value
      var formattedYValue =
        yValue >= 1000 ? yValue / 1000 + "K" : yValue.toLocaleString();

      return `<div class="p-2.5 text-sm font-semibold">
                  ${xLabel}: ${formattedYValue}
                </div>`;
    },
  },
};

// Average Positions Chart
export const average_positions_chart_2 = {
  chart: {
    type: "area",
    height: 130,
    toolbar: {
      show: false,
    },
  },
  colors: ["#11b886"], // Set the color for the outline
  dataLabels: {
    enabled: false,
  },
  grid: {
    strokeDashArray: 3,
  },
  series: [
    {
      data: [6, 15, 10, 17, 12, 19, 10], // Numeric values
    },
  ],
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: true,
    },
  },
  yaxis: {
    min: 0,    // Set your minimum value here
    max: 20,   // Set your maximum value here
    tickAmount: 2,
  },
  fill: {
    type: "solid", // Solid fill for no gradient
    opacity: 0,    // No fill
  },
  stroke: {
    show: true,
    curve: 'smooth', // Smooth curve for the outline
    lineCap: 'round',
    colors: ["#E9E5FC"], // Set the color for the outline
    width: 3, // Adjust width as needed
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex }) {
      var labels = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
      var xLabel = labels[dataPointIndex];
      var yValue = series[seriesIndex][dataPointIndex];

      return `<div class="p-2.5 text-sm font-semibold">
                  ${xLabel} : ${yValue}
                </div>`;
    },
  },
  theme: {
    mode: "light",
  },
};

// Daily Sales Chart
export const daily_sales_chart_2 = {
  series: [
    {
      data: [6, 15, 10, 17, 12, 19, 10],
    },
  ],
  chart: {
    type: "bar",
    stacked: true,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false, // Hides the toolbar
    },
    height: 100,
    offsetX: -10, // Adjust horizontal position if needed
  },
  plotOptions: {
    bar: {
      columnWidth: '70%',
      distributed: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  zoom: {
    enabled: false, // Disables zooming
  },
  xaxis: {
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: true,
    },
    labels: {
      show: false,
    },
    axisBorder: {
      show: false, // Hides the x-axis bottom line
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  grid: {
    show: false, // Removes the background grid lines
  },
  colors: ['#e5e7eb', '#6950E8', '#e5e7eb', '#6950E8', '#e5e7eb', '#6950E8', '#e5e7eb', '#6950E8'], // Alternating blue and gray
  tooltip: {
    marker: {
      show: false,
    },
    // Combine x and y values in the tooltip
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      var labels = [
        "Sat",
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
      ];
      var xLabel = labels[dataPointIndex];
      var yValue = series[seriesIndex][dataPointIndex];

      return `<div class="p-2.5 text-sm font-semibold">
                  ${xLabel}: ${yValue}
                </div>`;
    },
  },
};

// Monthly Earning Chart
export const monthly_earning_chart = {
  series: [
    {
      data: [6, 15, 10, 17, 12, 19, 10],
    },
  ],
  chart: {
    type: "bar",
    stacked: true,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false, // Hides the toolbar
    },
    height: 100,
    offsetX: -10, // Adjust horizontal position if needed
  },
  plotOptions: {
    bar: {
      columnWidth: '70%',
      distributed: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  zoom: {
    enabled: false, // Disables zooming
  },
  xaxis: {
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: true,
    },
    labels: {
      show: false,
    },
    axisBorder: {
      show: false, // Hides the x-axis bottom line
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  grid: {
    show: false, // Removes the background grid lines
  },
  colors: ['#e5e7eb', '#6950E8', '#e5e7eb', '#6950E8', '#e5e7eb', '#6950E8', '#e5e7eb', '#6950E8'], // Alternating blue and gray
  tooltip: {
    marker: {
      show: false,
    },
    // Combine x and y values in the tooltip
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      var labels = [
        "Sat",
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
      ];
      var xLabel = labels[dataPointIndex];
      var yValue = series[seriesIndex][dataPointIndex];

      return `<div class="p-2.5 text-sm font-semibold">
                  ${xLabel}: ${yValue}
                </div>`;
    },
  },
};

// Daily Sales Chart
export const earning_year_chart = {
  series: [
    {
      data: [22, 30, 46, 50, 46, 30, 22],
    },
  ],
  chart: {
    type: "bar",
    stacked: true,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false, // Hides the toolbar
    },
    height: 205,
    offsetY: 20, // Adjust horizontal position if needed
    offsetX: -5, // Adjust horizontal position if needed
  },
  plotOptions: {
    bar: {
      columnWidth: '48%',
      distributed: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  zoom: {
    enabled: false, // Disables zooming
  },
  xaxis: {
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: true,
    },
    labels: {
      show: false,
    },
    axisBorder: {
      show: false, // Hides the x-axis bottom line
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  grid: {
    show: false, // Removes the background grid lines
  },
  colors: ['#e5e7eb', '#6950E8', '#e5e7eb', '#6950E8', '#e5e7eb', '#6950E8', '#e5e7eb', '#6950E8'], // Alternating blue and gray
  tooltip: {
    marker: {
      show: false,
    },
    // Combine x and y values in the tooltip
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      var labels = [
        "Sat",
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
      ];
      var xLabel = labels[dataPointIndex];
      var yValue = series[seriesIndex][dataPointIndex];

      return `<div class="p-2.5 text-sm font-semibold">
                  ${xLabel}: ${yValue}
                </div>`;
    },
  },
};

// Total Orders Chart
export const total_orders_chart = {
  series: [
    {
      data: [72, 30, 26, 60, 66, 30, 82],
    },
  ],
  chart: {
    type: "bar",
    stacked: true,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false, // Hides the toolbar
    },
    height: 130,
    offsetX: -5, // Adjust horizontal position if needed
  },
  plotOptions: {
    bar: {
      columnWidth: '35%',
      distributed: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  zoom: {
    enabled: false, // Disables zooming
  },
  xaxis: {
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: true,
    },
    labels: {
      show: false,
    },
    axisBorder: {
      show: false, // Hides the x-axis bottom line
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  grid: {
    show: false, // Removes the background grid lines
  },
  colors: ['#e5e7eb', '#6950E8', '#e5e7eb', '#6950E8', '#e5e7eb', '#6950E8', '#e5e7eb', '#6950E8'], // Alternating blue and gray
  tooltip: {
    marker: {
      show: false,
    },
    // Combine x and y values in the tooltip
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      var labels = [
        "Sat",
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
      ];
      var xLabel = labels[dataPointIndex];
      var yValue = series[seriesIndex][dataPointIndex];

      return `<div class="p-2.5 text-sm font-semibold">
                  ${xLabel}: ${yValue}
                </div>`;
    },
  },
};

// YouTube Campaign Chart
export const youTube_campaign_chart = {
  series: [
    {
      data: [22, 30, 46, 50, 46, 30, 22],
    },
  ],
  chart: {
    type: "bar",
    stacked: true,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false, // Hides the toolbar
    },
    height: 230,
    offsetX: -5, // Adjust horizontal position if needed
  },
  plotOptions: {
    bar: {
      columnWidth: '41%',
      distributed: true,
      borderRadius: 10,
      borderRadiusApplication: 'end',
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  zoom: {
    enabled: false, // Disables zooming
  },
  xaxis: {
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: true,
    },
    labels: {
      show: false,
    },
    axisBorder: {
      show: false, // Hides the x-axis bottom line
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  grid: {
    show: false, // Removes the background grid lines
  },
  colors: ['#e5e7eb', '#6950E8', '#e5e7eb', '#6950E8', '#e5e7eb', '#6950E8', '#e5e7eb', '#6950E8'], // Alternating blue and gray
  tooltip: {
    marker: {
      show: false,
    },
    // Combine x and y values in the tooltip
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      var labels = [
        "Sat",
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
      ];
      var xLabel = labels[dataPointIndex];
      var yValue = series[seriesIndex][dataPointIndex];

      return `<div class="p-2.5 text-sm font-semibold">
                  ${xLabel}: ${yValue}
                </div>`;
    },
  },
};

// Browser Session
export const average_deals_chart_2 = {
  series: [33, 33, 33],
  labels: ["USD", "EURO", "GBP"],
  colors: ["#6950E8", "#FEBF00", "#0DB886"],
  chart: {
    height: 230,
    offsetX: -10, // Adjust horizontal position if needed
    type: "donut",
    background: 'transparent',
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false,
  },
  plotOptions: {
    pie: {
      expandOnClick: false,
      donut: {
        size: '80%', // Adjust this value to change the size of the donut
        labels: {
          show: true,
          total: {
            show: true,
            label: 'Increase',
            formatter: function (w) {
              const total = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
              const percentage = (total / 100) * 100; // Assuming the total is out of 100
              return `${percentage}%`;
            }
          }
        }
      }
    },
  },
  states: {
    active: {
      filter: {
        type: 'none'
      }
    },
    hover: {
      filter: {
        type: 'none'
      }
    },
  },
  stroke: {
    width: 1.5,
  },
  tooltip: {
    fillSeriesColor: false,
    marker: {
      show: false,
    },
    custom: function ({ seriesIndex, dataPointIndex, w }) {
      const color = w.config.colors[seriesIndex]; // Get the color for the series
      const label = w.config.labels[seriesIndex]; // Get the label for the series
      const value = w.config.series[seriesIndex]; // Get the value for the series

      return `
        <div class="px-2.5 py-1.5 text-sm font-semibold overflow-hidden shadow-none" style="background: ${color};">
          <span class="font-normal">${label}</span> ${value}
        </div>
      `;
    },
  }
};

// Referral Source Chart1
export const transactions_chart = {
  series: [
    {
      name: 'Income',
      data: [
        48000, 40000, 22000, 30000, 28000, 20000, 48000, 25000, 20000, 44000, 25000, 15000
      ],
    },
    {
      name: 'Expense',
      data: [
        42000, 35000, 28000, 15000, 20000, 30000, 45000, 20000, 30000, 41000, 35000, 15000
      ],
    },
  ],
  chart: {
    type: "bar",
    stacked: false, // Set to false for grouped bars
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false, // Hides the toolbar
    },
    height: 275,
  },
  plotOptions: {
    bar: {
      columnWidth: '30%', // Adjust width to fit multiple series
      distributed: false, // Set to false for grouped bars
      borderRadius: 4,
      borderRadiusApplication: 'end',
    }
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true, // Enable the legend
    position: 'top', // Position the legend at the top
    horizontalAlign: 'center', // Center align the legend horizontally
  },
  zoom: {
    enabled: false, // Disables zooming
  },
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: true,
    },
  },
  yaxis: {
    tickAmount: 5,
    min: 0,    // Set your minimum value here
    max: 50000,   // Set your maximum value here
    labels: {
      formatter: function (value) {
        if (value >= 1000) {
          return value / 1000 + "K"; // Convert to K format
        }
        return value.toLocaleString(); // Format numbers less than 1000 normally
      },
      offsetX: -10,
      offsetY: 0,
      style: {
        fontSize: "12px",
        cssClass: "apexcharts-yaxis-title",
      },
    },
    opposite: false,
  },
  grid: {
    strokeDashArray: 3,
  },
  colors: ['#6950E8', '#E8EAED'], // Distinct colors for each series
  tooltip: {
    marker: {
      show: false,
    },
    y: {
      formatter: function (value) {
        // Format y-axis value
        if (value >= 1000) {
          return value / 1000 + "K"; // Convert to K format
        }
        return value.toLocaleString(); // Format numbers less than 1000 normally
      },
    },
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      var yValue = series[seriesIndex][dataPointIndex];

      return `<div class="p-2.5 text-sm font-semibold">
                 $${yValue}
                </div>`;
    },
  },
};

// Reports Chart
export const reports_chart = {
  series: [10000, 15000],
  labels: ["Expense", "Revenue"],
  colors: ["#D0D4DA", "#6950E8"],
  chart: {
    height: 275,
    type: "donut",
    background: 'transparent',
  },
  dataLabels: {
    enabled: false
  },
  plotOptions: {
    pie: {
      expandOnClick: false,
      donut: {
        size: '80%', // Adjust this value to change the size of the donut
        labels: {
          show: true,
          total: {
            show: true,
            fontSize: '12px',
            label: 'Total',
            formatter: function (w) {
              return w.globals.seriesTotals.reduce((a, b) => a + b, 0);
            }
          }
        }
      }
    },
  },
  states: {
    active: {
      filter: {
        type: 'none'
      }
    },
    hover: {
      filter: {
        type: 'none'
      }
    },
  },
  stroke: {
    width: 3
  },
  legend: {
    show: true,
    position: 'bottom',
    horizontalAlign: 'center',
  },
  tooltip: {
    fillSeriesColor: false,
    custom: function ({ seriesIndex, dataPointIndex, w }) {
      const color = w.config.colors[seriesIndex]; // Get the color for the series
      const label = w.config.labels[seriesIndex]; // Get the label for the series
      const value = w.config.series[seriesIndex]; // Get the value for the series

      return `
        <div class="px-2.5 py-2 text-white text-sm font-medium overflow-hidden shadow-none" style="background: ${color};">
          <span class="font-normal">${label}</span> ${value}
        </div>
      `;
    },
  }
};

export const audits_chart = {
  chart: {
    height: 250,
    type: "radialBar",
  },
  series: [70], // Single series
  labels: ["Apples"], // Single label
  colors: ['#6950E8'], // Set the radial bar fill color
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 15,
        size: "50%", // Adjust this to change the thickness of the bar
        background: "#6950E8" // Background color for the hollow area
      },
      dataLabels: {
        show: false, // Hide data labels
      },
      track: {
        show: false,
      }
    }
  },
  stroke: {
    lineCap: 'round' // Ensures the radial bar ends are rounded
  },
  tooltip: {
    enabled: true, // Enable the tooltip
    custom: function ({ series, seriesIndex }) {
      return `<div class="px-2.5 py-1.5 text-sm text-white font-semibold bg-primary-500 overflow-hidden shadow-none">
          ${series[seriesIndex]}
        </div>
      `;
    }
  }
};

// Browser Session
export const average_deals_chart_3 = {
  series: [
    {
      data: [22, 30, 46, 50, 46, 30, 22],
    },
  ],
  chart: {
    type: "bar",
    stacked: true,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false, // Hides the toolbar
    },
    height: 180,
    offsetX: -5, // Adjust horizontal position if needed
  },
  plotOptions: {
    bar: {
      columnWidth: '29%',
      distributed: true,
      borderRadius: 5,
      borderRadiusApplication: 'end',
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  zoom: {
    enabled: false, // Disables zooming
  },
  xaxis: {
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: true,
    },
    labels: {
      show: false,
    },
    axisBorder: {
      show: false, // Hides the x-axis bottom line
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  grid: {
    show: false, // Removes the background grid lines
  },
  colors: ['#e5e7eb', '#6950E8', '#e5e7eb', '#6950E8', '#e5e7eb', '#6950E8', '#e5e7eb', '#6950E8'], // Alternating blue and gray
  tooltip: {
    marker: {
      show: false,
    },
    // Combine x and y values in the tooltip
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      var labels = [
        "Sat",
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
      ];
      var xLabel = labels[dataPointIndex];
      var yValue = series[seriesIndex][dataPointIndex];

      return `<div class="p-2.5 text-sm font-semibold">
                  ${xLabel}: ${yValue}
                </div>`;
    },
  },
};

// Referral Source Chart1
export const transactions_chart_2 = {
  series: [
    {
      name: 'Income',
      data: [
        48000, 40000, 22000, 30000, 28000, 20000, 48000, 25000, 20000, 44000, 25000, 15000
      ],
    },
    {
      name: 'Expense',
      data: [
        42000, 35000, 28000, 15000, 20000, 30000, 45000, 20000, 30000, 41000, 35000, 15000
      ],
    },
  ],
  chart: {
    type: "area",
    stacked: false, // Set to false for grouped bars
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false, // Hides the toolbar
    },
    height: 275,
  },
  plotOptions: {
    bar: {
      columnWidth: '30%', // Adjust width to fit multiple series
      distributed: false, // Set to false for grouped bars
      borderRadius: 4,
      borderRadiusApplication: 'end',
    }
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true, // Enable the legend to differentiate series
  },
  legend: {
    show: true, // Enable the legend
    position: 'top', // Position the legend at the top
    horizontalAlign: 'center', // Center align the legend horizontally
  },
  zoom: {
    enabled: false, // Disables zooming
  },
  fill: {
    type: 'solid',
    opacity: 0, // Set opacity to 0 for no fill
  },
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: true,
    },
    tooltip: {
      enabled: false
    },
  },
  yaxis: {
    tickAmount: 5,
    min: 0,    // Set your minimum value here
    max: 50000,   // Set your maximum value here
    labels: {
      formatter: function (value) {
        if (value >= 1000) {
          return value / 1000 + "K"; // Convert to K format
        }
        return value.toLocaleString(); // Format numbers less than 1000 normally
      },
      offsetX: -10,
      offsetY: 0,
      style: {
        fontSize: "12px",
        cssClass: "apexcharts-yaxis-title",
      },
    },
    opposite: false,
  },
  grid: {
    strokeDashArray: 3,
  },
  colors: ['#6950E8', '#E8EAED'], // Distinct colors for each series
  tooltip: {
    marker: {
      show: false,
    },
    y: {
      formatter: function (value) {
        // Format y-axis value
        if (value >= 1000) {
          return value / 1000 + "K"; // Convert to K format
        }
        return value.toLocaleString(); // Format numbers less than 1000 normally
      },
    },
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      var yValue = series[seriesIndex][dataPointIndex];

      return `<div class="p-2.5 text-sm font-semibold">
                 $${yValue}
                </div>`;
    },
  },
};

// Weekly Task 
export const weeklyTask = {
  series: [70],
  chart: {
    height: 160,
    width: 160,
    type: 'radialBar',
    offsetY: 5,
    offsetX: -20,
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          show: false
        },
        value: {
          show: true,
          color: '#7B65EB', // Color for the value label
          offsetY: 5,
          fontSize: '14px'
        }
      },
    }
  },
  fill: {
    type: 'solid',
    color: '#7B65EB' // Updated color for the radial bar
  },
  labels: ['Percent'],
  colors: ["#6950E8"],
};
// outcome_chart
export const outcome_chart = {
  series: [30],
  chart: {
    height: 160,
    width: 160,
    type: 'radialBar',
    offsetY: 5,
    offsetX: -20,
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          show: false
        },
        value: {
          show: true,
          color: '#7B65EB', // Color for the value label
          offsetY: 5,
          fontSize: '14px'
        }
      },
    }
  },
  fill: {
    type: 'solid',
    color: '#7B65EB' // Updated color for the radial bar
  },
  labels: ['Percent'],
  colors: ["#7E8490"],
};

// Top Activity Chart
export const top_activity_chart = {
  series: [55, 45, 33],
  labels: ["Asia", "Europe", "Africa"],
  colors: ["#6950E8", "#9CA3AF", "#D1D5DB"],
  chart: {
    height: 260,
    width: 310,
    offsetX: -10, // Adjust horizontal position if needed
    type: "pie",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: true,
    position: 'bottom',
    horizontalAlign: 'center',
  },
  states: {
    active: {
      filter: {
        type: 'none'
      }
    },
    hover: {
      filter: {
        type: 'none'
      }
    },
  },
  stroke: {
    show: false,
  },
  tooltip: {
    fillSeriesColor: false,
    marker: {
      show: false,
    },
    custom: function ({ seriesIndex, dataPointIndex, w }) {
      const color = w.config.colors[seriesIndex]; // Get the color for the series
      const label = w.config.labels[seriesIndex]; // Get the label for the series
      const value = w.config.series[seriesIndex]; // Get the value for the series

      return `
        <div class="px-2.5 py-1.5 text-sm font-semibold overflow-hidden shadow-none" style="background: ${color};">
          <span class="font-normal">${label}</span> ${value}
        </div>
      `;
    },
  },
};