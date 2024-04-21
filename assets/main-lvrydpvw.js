import{_ as r,o as m,c as u,m as e,p as n,r as a,a as o,w as b}from"./index-UgqV6vM2.js";import{V as h}from"./vue.runtime.esm-bundler-KaaX9MVw.js";const y={},f={class:"content example-md-doc"},v=e("div",{class:"tip"},[e("p",null,[n("1、通过"),e("code",null,"align=left"),n(" 单元格左对齐"),e("br"),n(" 2、通过"),e("code",null,"align=center"),n(" 单元格居中"),e("br"),n(" 3、通过"),e("code",null,"align=right"),n(" 设置右对齐")])],-1),k=[v];function C(c,d){return m(),u("section",f,k)}const A=r(y,[["render",C]]),B={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:c,openBlock:d,createBlock:i}=h;return function(s,p){const t=c("ve-table");return d(),i(t,{columns:s.columns,"table-data":s.tableData,"border-y":""},null,8,["columns","table-data"])}}(),...function(){return{data(){return{columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"center"},{field:"address",key:"d",title:"Address",align:"left"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},N={class:"content example-md-doc"},$=e("pre",null,[e("code",{class:"html"},`<template>
    <ve-table :columns="columns" :table-data="tableData" border-y />
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    { field: "name", key: "a", title: "Name", align: "center" },
                    { field: "date", key: "b", title: "Date", align: "left" },
                    {
                        field: "hobby",
                        key: "c",
                        title: "Hobby",
                        align: "center",
                    },
                    {
                        field: "address",
                        key: "d",
                        title: "Address",
                        align: "left",
                    },
                ],
                tableData: [
                    {
                        name: "John",
                        date: "1900-05-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Shanghai",
                    },
                    {
                        name: "Dickerson",
                        date: "1910-06-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Beijing",
                    },
                    {
                        name: "Larsen",
                        date: "2000-07-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Chongqing",
                    },
                    {
                        name: "Geneva",
                        date: "2010-08-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Xiamen",
                    },
                    {
                        name: "Jami",
                        date: "2020-09-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Shenzhen",
                    },
                ],
            };
        },
    };
<\/script>
`)],-1);function x(c,d,i,_,s,p){const t=a("anchor"),l=a("element-demo0"),g=a("demo-block");return m(),u("section",N,[o(t,{"is-edit":"",label:"设置单元格对齐方式",fileName:"basic-align.md"}),o(g,null,{source:b(()=>[o(l)]),highlight:b(()=>[$]),_:1})])}const D=r(B,[["render",x]]),E={name:"CellAlign",components:{Explain:A,BasicAlign:D}},F=e("h2",null,"单元格对齐",-1);function V(c,d,i,_,s,p){const t=a("Explain"),l=a("BasicAlign");return m(),u("div",null,[F,o(t),o(l)])}const j=r(E,[["render",V]]);export{j as default};
