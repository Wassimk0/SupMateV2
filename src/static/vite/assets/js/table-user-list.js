import{D as i}from"./common/datatable.js";import{u as a,h as _,a as m,b as h,r as b}from"./datatable.js";import"./_commonjsHelpers.js";document.addEventListener("DOMContentLoaded",function(){const r=[{tab:"#user_list_table_tabs-11",tableId:"#user_list_table-11",table:null},{tab:"#user_list_table_tabs-22",tableId:"#user_list_table-22",table:null},{tab:"#user_list_table_tabs-33",tableId:"#user_list_table-33",table:null},{tab:"#user_list_table_tabs-44",tableId:"#user_list_table-44",table:null},{tab:"#user_list_table_tabs-55",tableId:"#user_list_table-55",table:null}],c={columnDefs:[{orderable:!1,className:"select-checkbox",targets:0},{orderable:!1,targets:[]}],select:{style:"multi",selector:"td:first-child input.row-checkbox"},order:[],lengthMenu:[5,10,25],pageLength:5,dom:"rt"};r.forEach(({tab:e,table:t,tableId:o})=>{const s=document.querySelector(`${e} ${o}`),d=document.querySelector(`${e} #custom_length`);t=new i(s,c),t.on("draw",()=>a(t,e)),a(t,e);const n=document.querySelector(`${e} #select_all`);n.addEventListener("change",()=>_.call(n,t,e)),document.querySelector(`${e}`).addEventListener("change",l=>m(l,t,e)),s.querySelectorAll(".delete_selected").forEach(l=>{l.addEventListener("click",u=>h(u,t,e))}),document.querySelector(`${e} .main_delete_selected .delete_selected`).addEventListener("click",l=>{l.preventDefault(),b(t,e)}),d.addEventListener("change",function(){t.page.len(this.value).draw()}),document.querySelector(`${e} #custom_prev`).addEventListener("click",()=>t.page("previous").draw("page")),document.querySelector(`${e} #custom_next`).addEventListener("click",()=>t.page("next").draw("page"))})});
