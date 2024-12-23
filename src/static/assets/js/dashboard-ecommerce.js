// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0



// Module Imports
import ApexCharts from 'apexcharts';
import {
  daily_sales_chart,
  apex_area3,
  returning_rate_chat
} from "./data/charts.js";
// Initialize Page Scripts on Load
document.addEventListener("DOMContentLoaded", async function () {
  new ApexCharts(document.querySelector("#daily_sales_chart"), daily_sales_chart).render();
  new ApexCharts(document.querySelector("#apex_area1"), apex_area3).render();
  new ApexCharts(document.querySelector('#returning_rate_chat'), returning_rate_chat).render();
});