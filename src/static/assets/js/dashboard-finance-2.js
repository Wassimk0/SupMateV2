// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0



// Module Imports
import ApexCharts from 'apexcharts';
import {
  apex_area1,
  average_deals_chart_3,
  outcome_chart,
  top_activity_chart,
  transactions_chart_2,
  weeklyTask
} from "./data/charts.js";

// Initialize Page Scripts on Load
document.addEventListener("DOMContentLoaded", async function () {

  // Initialize ApexCharts & jsVectorMap
  new ApexCharts(document.querySelector("#average_deals_chart"), average_deals_chart_3)?.render();
  new ApexCharts(document.querySelector("#transactions_chart"), transactions_chart_2)?.render();
  new ApexCharts(document.querySelector("#weeklyTask"), weeklyTask)?.render();
  new ApexCharts(document.querySelector("#outcome_chart"), outcome_chart)?.render();
  new ApexCharts(document.querySelector("#apex_area1"), apex_area1)?.render();
  new ApexCharts(document.querySelector("#top_activity_chart"), top_activity_chart)?.render();
});