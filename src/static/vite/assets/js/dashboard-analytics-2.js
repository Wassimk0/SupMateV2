import{j as s,m as d}from"./maps.js";import{A as e,G as i,H as l,I as u,x as m,z as _,B as h,J as w,u as f,K as p}from"./charts.js";import{c as y,m as t,S as L,P as c,i as S,a as q}from"./preline.js";import"./_commonjsHelpers.js";import"./isObject.js";y({icons:q});window.Alpine=t;window.SimpleBar=L;window.Prism=c;window.isLoaded=!1;t.data("sidebar",function(){return{init(){const a=location.pathname==="/"?"index.html":location.pathname.substring(1);document.querySelectorAll('a[href*="'+a+'"]').forEach(o=>{o.classList.add("active");const r=o.closest(".hs-accordion");if(r){r.classList.add("active"),r.children[1].childNodes.forEach(x=>{});const n=r.querySelector(".hs-accordion-content");n&&n.classList.remove("hidden")}})}}});t.data("loader",function(){return{showLoader:!0,init(){const a=setInterval(()=>{window.isLoaded&&(this.showLoader=!1,clearInterval(a))},10)}}});document.addEventListener("DOMContentLoaded",function(){S(),t.start(),c.highlightAll(),setTimeout(()=>{window.isLoaded=!0},100)});document.addEventListener("DOMContentLoaded",async function(){new e(document.querySelector("#apex_area1"),i).render(),new e(document.querySelector("#average_positions_chart"),l).render(),new e(document.querySelector("#browser_session_chart"),u).render(),new e(document.querySelector("#referral_source_chart1"),m).render(),new e(document.querySelector("#referral_source_chart2"),_).render(),new e(document.querySelector("#referral_source_chart3"),h).render(),new e(document.querySelector("#sales_country_chart"),w).render(),new e(document.querySelector("#completed_goals_chart"),f).render(),new e(document.querySelector("#completed_rates_chart"),p).render(),new s(d)});