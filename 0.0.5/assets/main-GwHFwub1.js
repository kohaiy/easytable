import{t as u,d as i}from"./api-tpl-ovJbPc0g.js";import{_ as s,r as n,o as r,c as a,a as o,m as V}from"./index-kkwE-wMw.js";import{E as k}from"./ellipsis-props-2IO4hlZY.js";import{F as A}from"./filter-props-khRrK5RW.js";import{F as w}from"./filter-custom-props-_BCBA2QQ.js";import{I as z}from"./instance-methods-LGoH-16C.js";import{E as F}from"./expand-option-props-eKBnPSTl.js";import{C as W}from"./checkbox-option-props-yy9ki6lm.js";import{R as M}from"./radio-option-props-6LlgNAhV.js";import{V as N}from"./virtual-scroll-option-props-xGQ3ZVbZ.js";import{S as K}from"./sort-option-props-Bfw6x6fQ.js";import{E as j}from"./event-custom-option-props-PGha9Scb.js";import{C as q}from"./column-hidden-option-props-d3AQq5IU.js";import{C as D}from"./cell-style-option-props-nADbp_3R.js";import{R as G}from"./row-style-option-props-LdI7yWXR.js";import{C as J}from"./cell-selection-option-props-RUOutEjP.js";import{E as L}from"./edit-option-props-i47PZ1xx.js";import{c as Q,a as U}from"./contextmenu-body-option-props-UwhYJq6i.js";import{c as X}from"./cell-autofill-option-props-F-pZVfts.js";import{c as Y}from"./clipboard-option-props-IABHFl__.js";import{c as Z}from"./column-width-resize-option-props-sJsL4av4.js";const oo={components:{Tpl:u},props:{anchor:{type:String,default:"表格配置"},desc:{type:String,default:"Table Props"}},data(){return{db:i}}};function no(p,c,t,m,e,d){const l=n("Tpl");return r(),a("div",null,[o(l,{desc:t.desc,anchor:t.anchor,"table-data":e.db.table.data,columns:e.db.table.columns},null,8,["desc","anchor","table-data","columns"])])}const to=s(oo,[["render",no]]),eo={components:{Tpl:u},props:{anchor:{type:String,default:"列配置"},desc:{type:String,default:"Columns"}},data(){return{db:i,expandOption:{expandable:({row:p,column:c,rowIndex:t})=>{if(![49,50,55].includes(p.expandId))return!1},defaultExpandedRowKeys:[],render:({row:p,column:c,rowIndex:t})=>{if(p.expandId===49)return o(k,null,null);if(p.expandId===50)return o(A,null,null);if(p.expandId===55)return o(w,null,null)}}}}};function po(p,c,t,m,e,d){const l=n("Tpl");return r(),a("div",null,[o(l,{desc:t.desc,anchor:t.anchor,"table-data":e.db.columns.data,columns:e.db.columns.columns,"expand-option":e.expandOption},null,8,["desc","anchor","table-data","columns","expand-option"])])}const lo=s(eo,[["render",po]]),co={components:{Tpl:u},props:{anchor:{type:String,default:"单元格合并配置"},desc:{type:String,default:"cellSpanOption"}},data(){return{db:i}}};function io(p,c,t,m,e,d){const l=n("Tpl");return r(),a("div",null,[o(l,{desc:t.desc,anchor:t.anchor,"table-data":e.db.cellSpanOption.data,columns:e.db.cellSpanOption.columns},null,8,["desc","anchor","table-data","columns"])])}const so=s(co,[["render",io]]),ro={components:{TableProps:to,ColumnProps:lo,InstanceMethods:z,CellSpanOption:so,EventCustomOption:j,ColumnHiddenOption:q,CellStyleOption:D,RowStyleOption:G,ExpandOption:F,CheckboxOption:W,RadioOption:M,VirtualScrollOption:N,SortOption:K,CellSelectionOption:J,EditOption:L,ContextmenuHeaderOption:Q,ContextmenuBodyOption:U,CellAutofillOption:X,ClipboardOption:Y,ColumnWidthResizeOption:Z},data(){return{db:i}}},ao={class:"mb100"},mo=V("h2",null,"API",-1);function uo(p,c,t,m,e,d){const l=n("TableProps"),_=n("ColumnProps"),O=n("InstanceMethods"),f=n("CellSpanOption"),C=n("ColumnHiddenOption"),x=n("CellStyleOption"),h=n("RowStyleOption"),b=n("ExpandOption"),S=n("CheckboxOption"),y=n("RadioOption"),E=n("VirtualScrollOption"),R=n("SortOption"),T=n("CellSelectionOption"),I=n("EditOption"),P=n("ContextmenuHeaderOption"),$=n("ContextmenuBodyOption"),v=n("EventCustomOption"),B=n("CellAutofillOption"),H=n("ClipboardOption"),g=n("ColumnWidthResizeOption");return r(),a("div",ao,[mo,o(l),o(_),o(O),o(f),o(C),o(x),o(h),o(b),o(S),o(y),o(E),o(R),o(T),o(I),o(P),o($),o(v),o(B),o(H),o(g)])}const Ao=s(ro,[["render",uo]]);export{Ao as default};
