import{f as s}from"./index.js";import{D as d}from"./common/datatable.js";import{u as c,h as u,a as m,b as h}from"./datatable.js";import"./_commonjsHelpers.js";const t="#filterDataTableMain",f="#filterDataTable";let e=null;const v={columnDefs:[{orderable:!1,className:"select-checkbox",targets:0},{orderable:!1,targets:[]}],select:{style:"multi",selector:"td:first-child input.row-checkbox"},order:[],lengthMenu:[5,10,25],pageLength:5,dom:"rt"};document.addEventListener("DOMContentLoaded",function(){const l=document.querySelector(`${t} ${f}`),o=document.querySelector(`${t} #custom_length`);e=new d(l,v),e.on("draw",()=>c(e,t)),c(e,t);const r=document.querySelector(`${t} #select_all`);r.addEventListener("change",()=>u.call(r,e,t)),document.querySelector(`${t}`).addEventListener("change",a=>m(a,e,t)),l.querySelectorAll(".delete_selected").forEach(a=>{a.addEventListener("click",n=>h(n,e,t))}),o.addEventListener("change",function(){e.page.len(this.value).draw()}),document.querySelector(`${t} #custom_prev`).addEventListener("click",()=>e.page("previous").draw("page")),document.querySelector(`${t} #custom_next`).addEventListener("click",()=>e.page("next").draw("page")),document.querySelector("#filterDataTableMain #name_filter").addEventListener("keyup",function(){e.column(1).search(this.value).draw()}),document.querySelector("#filterDataTableMain #position_filter").addEventListener("change",function(){e.column(2).search(this.value==="all"?"":this.value).draw()}),document.querySelector("#filterDataTableMain #team_filter").addEventListener("keyup",function(){e.column(3).search(this.value).draw()}),document.querySelector("#filterDataTableMain #email_filter").addEventListener("keyup",function(){e.column(5).search(this.value).draw()}),document.querySelector("#filterDataTableMain #address_filter").addEventListener("change",function(){e.column(6).search(this.value==="all"?"":this.value).draw()}),document.querySelector("#filterDataTableMain #status_filter").addEventListener("change",function(){e.column(7).search(this.value==="all"?"":this.value).draw()}),s("#filterDataTableMain #todo-datepicker",{enableTime:!1,dateFormat:"m-d-Y",onChange:function(a,n){let i=n.split("-").reverse().join("-");e.column(4).search(i).draw()}})});
