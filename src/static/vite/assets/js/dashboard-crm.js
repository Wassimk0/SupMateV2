import{A as c,e as h,d as u,a as y,q as _,s as m,u as p,v as k}from"./charts.js";import"./_commonjsHelpers.js";const q=document.getElementById("progress-bar"),x=document.getElementById("progress-text"),s=document.getElementById("todo-list");document.addEventListener("DOMContentLoaded",async function(){var e,t,a,l,d,g,i;(e=new c(document.querySelector("#average_deals_chart"),h))==null||e.render(),(t=new c(document.querySelector("#daily_sales_chart"),u))==null||t.render(),(a=new c(document.querySelector("#apex_area1"),y))==null||a.render(),(l=new c(document.querySelector("#browser_session_chart"),_))==null||l.render(),(d=new c(document.querySelector("#deal_type_chart"),m))==null||d.render(),(g=new c(document.querySelector("#completed_goals_chart"),p))==null||g.render(),(i=new c(document.querySelector("#sales_forecast_chart"),k))==null||i.render(),S(),n(),s.addEventListener("change",r=>{if(r.target.matches(".checkbox")){const o=r.target.closest("li");o.classList.toggle("bg-gray-50",r.target.checked),o.classList.toggle("dark:bg-gray-700",r.target.checked),o.classList.toggle("text-primary-500",r.target.checked),n()}}),s.addEventListener("click",r=>{r.target.matches('.dropdown-item[data-action="delete"]')&&(r.target.closest("li").remove(),n())})});function n(){const e=s.querySelectorAll("li").length,t=s.querySelectorAll('input[type="checkbox"]:checked').length,a=e?Math.round(t/e*100):0;q.style.width=`${a}%`,x.textContent=`${a}%`}function S(){s.querySelectorAll("li").forEach(e=>{const t=e.querySelector('input[type="checkbox"]');e.classList.toggle("bg-gray-50",t.checked),e.classList.toggle("dark:bg-gray-700",t.checked),e.classList.toggle("text-primary-500",t.checked)})}