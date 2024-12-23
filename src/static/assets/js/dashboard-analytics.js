// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0



// Css Imports
import "jsvectormap/dist/jsvectormap.css";

// Module Imports
import ApexCharts from 'apexcharts';
import jsVectorMap from "jsvectormap/dist/jsvectormap.js";
import "jsvectormap/dist/maps/world.js"; 
import { map } from "./data/maps.js";
import {
    apex_area1,
    referral_source_chart1,
    referral_source_chart2,
    referral_source_chart3,
    browser_session_chart,
    activeUsers,
    completed_goals_chart,
    completed_rates_chart,
    sales_country_chart,
} from "./data/charts.js";

// Initialize Page Scripts on Load
document.addEventListener("DOMContentLoaded", async function () {

    // Initialize ApexCharts & jsVectorMap
    new ApexCharts(document.querySelector("#apex_area1"), apex_area1).render();
    new ApexCharts(document.querySelector("#referral_source_chart1"), referral_source_chart1).render();
    new ApexCharts(document.querySelector("#referral_source_chart2"), referral_source_chart2).render();
    new ApexCharts(document.querySelector("#referral_source_chart3"), referral_source_chart3).render();
    new ApexCharts(document.querySelector("#browser_session_chart"), browser_session_chart).render();
    new ApexCharts(document.querySelector("#activeUsers"), activeUsers).render();
    new ApexCharts(document.querySelector("#completed_goals_chart"), completed_goals_chart).render();
    new ApexCharts(document.querySelector("#completed_rates_chart"), completed_rates_chart).render();
    new ApexCharts(document.querySelector("#sales_country_chart"), sales_country_chart).render();
    new jsVectorMap(map);
});

