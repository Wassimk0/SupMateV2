// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0



// Module Imports
import ApexCharts from 'apexcharts';
import {
  apex_area1,
  audits_chart,
  average_deals_chart_2,
  reports_chart,
  transactions_chart
} from "./data/charts.js";

// Initialize Page Scripts on Load
document.addEventListener("DOMContentLoaded", async function () {

  // Initialize ApexCharts & jsVectorMap
  new ApexCharts(document.querySelector("#average_deals_chart"), average_deals_chart_2)?.render();
  new ApexCharts(document.querySelector("#transactions_chart"), transactions_chart)?.render();
  new ApexCharts(document.querySelector("#apex_area1"), apex_area1)?.render();
  new ApexCharts(document.querySelector("#reports_chart"), reports_chart)?.render();
  new ApexCharts(document.querySelector("#audits_chart"), audits_chart)?.render();
});
