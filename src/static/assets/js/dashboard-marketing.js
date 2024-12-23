// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0




// Module Imports
import ApexCharts from 'apexcharts';
import {
  apex_area1,
  daily_sales_chart,
  total_orders_chart,
  youTube_campaign_chart,
} from "./data/charts.js";

// Initialize Page Scripts on Load
document.addEventListener("DOMContentLoaded", async function () {

  // Initialize ApexCharts & jsVectorMap
  new ApexCharts(document.querySelector("#total_items_chart"), daily_sales_chart)?.render();
  new ApexCharts(document.querySelector("#total_orders_chart"), total_orders_chart)?.render();
  new ApexCharts(document.querySelector("#apex_area1"), apex_area1)?.render();
  new ApexCharts(document.querySelector("#youTube_campaign_chart"), youTube_campaign_chart)?.render();
});