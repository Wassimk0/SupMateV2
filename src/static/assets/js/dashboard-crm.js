// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0



// Module Imports
import ApexCharts from 'apexcharts';
import {
  apex_area1,
  average_deals_chart,
  browser_session_chart,
  completed_goals_chart_2,
  daily_sales_chart,
  deal_type_chart,
  sales_forecast_chart
} from "./data/charts.js";
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const todoList = document.getElementById('todo-list');

// Initialize Page Scripts on Load
document.addEventListener("DOMContentLoaded", async function () {

  // Initialize ApexCharts & jsVectorMap
  new ApexCharts(document.querySelector("#average_deals_chart"), average_deals_chart)?.render();
  new ApexCharts(document.querySelector("#daily_sales_chart"), daily_sales_chart)?.render();
  new ApexCharts(document.querySelector("#apex_area1"), apex_area1)?.render();
  new ApexCharts(document.querySelector("#browser_session_chart"), browser_session_chart)?.render();
  new ApexCharts(document.querySelector("#deal_type_chart"), deal_type_chart)?.render();
  new ApexCharts(document.querySelector("#completed_goals_chart"), completed_goals_chart_2)?.render();
  new ApexCharts(document.querySelector("#sales_forecast_chart"), sales_forecast_chart)?.render();

  // Initialize styles and progress bar on page load
  applyInitialStyles();
  updateProgressBar();

  // Update styles and progress when checkbox state changes
  todoList.addEventListener('change', (e) => {
    if (e.target.matches('.checkbox')) {
      const item = e.target.closest('li');
      item.classList.toggle('bg-gray-50', e.target.checked);
      item.classList.toggle('dark:bg-gray-700', e.target.checked);
      item.classList.toggle('text-primary-500', e.target.checked);
      updateProgressBar();
    }
  });

  // Handle item deletion
  todoList.addEventListener('click', (e) => {
    if (e.target.matches('.dropdown-item[data-action="delete"]')) {
      e.target.closest('li').remove();
      updateProgressBar();
    }
  });
});

// Function to update the progress bar
function updateProgressBar() {
  const items = todoList.querySelectorAll('li').length;
  const completed = todoList.querySelectorAll('input[type="checkbox"]:checked').length;
  const progress = items ? Math.round((completed / items) * 100) : 0;
  progressBar.style.width = `${progress}%`;
  progressText.textContent = `${progress}%`;
};

// Function to apply initial styles based on checkbox state
function applyInitialStyles() {
  todoList.querySelectorAll('li').forEach(item => {
    const checkbox = item.querySelector('input[type="checkbox"]');
    item.classList.toggle('bg-gray-50', checkbox.checked);
    item.classList.toggle('dark:bg-gray-700', checkbox.checked);
    item.classList.toggle('text-primary-500', checkbox.checked);
  });
};
