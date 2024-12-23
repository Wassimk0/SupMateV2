// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0


// Css Imports
import "jsvectormap/dist/jsvectormap.css";

// Module Imports
import ApexCharts from 'apexcharts';
import jsVectorMap from "jsvectormap/dist/jsvectormap.js";
import "jsvectormap/dist/maps/world.js";
import "./common/main.js";
import { map } from "./data/maps.js";
import {
    apex_area2,
    average_positions_chart,
    browser_session_chart_2,
    referral_source_chart1,
    referral_source_chart2,
    referral_source_chart3,
    sales_country_chart_2,
    completed_goals_chart_2,
    completed_rates_chart_2,
} from "./data/charts.js";

// Initialize Page Scripts on Load
document.addEventListener("DOMContentLoaded", async function () {

    // Initialize ApexCharts & jsVectorMap
    new ApexCharts(document.querySelector("#apex_area1"), apex_area2).render();
    new ApexCharts(document.querySelector("#average_positions_chart"), average_positions_chart).render();
    new ApexCharts(document.querySelector("#browser_session_chart"), browser_session_chart_2).render();
    new ApexCharts(document.querySelector("#referral_source_chart1"), referral_source_chart1).render();
    new ApexCharts(document.querySelector("#referral_source_chart2"), referral_source_chart2).render();
    new ApexCharts(document.querySelector("#referral_source_chart3"), referral_source_chart3).render();
    new ApexCharts(document.querySelector("#sales_country_chart"), sales_country_chart_2).render();
    new ApexCharts(document.querySelector("#completed_goals_chart"), completed_goals_chart_2).render();
    new ApexCharts(document.querySelector("#completed_rates_chart"), completed_rates_chart_2).render();
    
    new jsVectorMap(map);
});

