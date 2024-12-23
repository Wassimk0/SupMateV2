// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0




// Module Imports
import ApexCharts from 'apexcharts';
import {
  apex_area1,
  average_deals_chart,
  average_positions_chart_2,
  daily_sales_chart_2,
  earning_year_chart,
  monthly_earning_chart
} from "./data/charts.js";

// Initialize Page Scripts on Load
document.addEventListener("DOMContentLoaded", async function () {

  // Initialize ApexCharts & jsVectorMap
  new ApexCharts(document.querySelector("#average_positions_chart"), average_positions_chart_2)?.render();
  new ApexCharts(document.querySelector("#daily_sales_chart"), daily_sales_chart_2)?.render();
  new ApexCharts(document.querySelector("#monthly_earning_chart"), monthly_earning_chart)?.render();
  new ApexCharts(document.querySelector("#apex_area1"), apex_area1)?.render();
  new ApexCharts(document.querySelector("#company_progress_chart"), apex_area1)?.render();
  new ApexCharts(document.querySelector("#average_deals_chart"), average_deals_chart)?.render();
  new ApexCharts(document.querySelector("#earning_year_chart"), earning_year_chart)?.render();
});


