import{_ as h,o as b,c as p,h as n,i as a,r as o,a as d,w as s}from"./index-xkG6_mZq.js";import{V as f}from"./vue.runtime.esm-bundler-KVmUbhes.js";const D={},x={class:"content example-md-doc"},k=n("div",{class:"tip"},[n("p",null,[a("1、属性"),n("code",null,"max-height"),a("为表格的最大高度"),n("br"),a(" 2、表格总高度大于"),n("code",null,"max-height"),a("值时，表格将会出现纵向滚动条"),n("br"),a(" 3、表格总高度小于"),n("code",null,"max-height"),a("值时，表格将会高度自适应")])],-1),y=[k];function g(t,e){return b(),p("section",x,y)}const B=h(D,[["render",g]]),$={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:t,openBlock:e,createBlock:i}=f;return function(c,_){const l=t("ve-table");return e(),i(l,{"max-height":200,"fixed-header":!0,columns:c.columns,"table-data":c.tableData},null,8,["columns","table-data"])}}(),...function(){return{data(){return{columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"center"},{field:"address",key:"d",title:"Address",align:"left"}],tableData:[]}},methods:{initTableData(){let t=[];for(let e=0;e<15;e++)t.push({rowKey:e,name:e,date:e,hobby:e,address:e});this.tableData=t}},created(){this.initTableData()}}}()}}},F={class:"content example-md-doc"},A=n("div",null,[n("p",null,[a("1、通过"),n("code",null,'fixed-header="true"'),a("设置开启表头固定。默认为"),n("code",null,"true"),n("br"),a("2、通过"),n("code",null,"max-height"),a("设置表格最大高度")])],-1),v=n("pre",null,[n("code",{class:"html"},`<template>
    <ve-table :max-height="200" :fixed-header="true" :columns="columns" :table-data="tableData" />
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
                tableData: [],
            };
        },
        methods: {
            initTableData() {
                let data = [];
                for (let i = 0; i < 15; i++) {
                    data.push({
                        rowKey: i,
                        name: i,
                        date: i,
                        hobby: i,
                        address: i,
                    });
                }
                this.tableData = data;
            },
        },
        created() {
            this.initTableData();
        },
    };
<\/script>
`)],-1);function C(t,e,i,m,c,_){const l=o("anchor"),r=o("element-demo0"),u=o("demo-block");return b(),p("section",F,[d(l,{"is-edit":"",label:"基础功能",fileName:"base.md"}),d(u,null,{source:s(()=>[d(r)]),highlight:s(()=>[v]),default:s(()=>[A]),_:1})])}const E=h($,[["render",C]]),N={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:t,openBlock:e,createBlock:i}=f;return function(c,_){const l=t("ve-table");return e(),i(l,{"max-height":200,"fixed-header":!1,columns:c.columns,"table-data":c.tableData},null,8,["columns","table-data"])}}(),...function(){return{data(){return{columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"center"},{field:"address",key:"d",title:"Address",align:"left"}],tableData:[]}},methods:{initTableData(){let t=[];for(let e=0;e<15;e++)t.push({name:e,date:e,hobby:e,address:e});this.tableData=t}},created(){this.initTableData()}}}()}}},T={class:"content example-md-doc"},H=n("div",null,[n("p",null,[a("通过"),n("code",null,'fixed-header="false"'),a("禁用固定头。内容过多时，表头跟随滚动")])],-1),V=n("pre",null,[n("code",{class:"html"},`<template>
    <ve-table :max-height="200" :fixed-header="false" :columns="columns" :table-data="tableData" />
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
                tableData: [],
            };
        },
        methods: {
            initTableData() {
                let data = [];
                for (let i = 0; i < 15; i++) {
                    data.push({
                        name: i,
                        date: i,
                        hobby: i,
                        address: i,
                    });
                }
                this.tableData = data;
            },
        },
        created() {
            this.initTableData();
        },
    };
<\/script>
`)],-1);function w(t,e,i,m,c,_){const l=o("anchor"),r=o("element-demo0"),u=o("demo-block");return b(),p("section",T,[d(l,{"is-edit":"",label:"禁用固定表头",fileName:"header-fixed-disabled.md"}),d(u,null,{source:s(()=>[d(r)]),highlight:s(()=>[V]),default:s(()=>[H]),_:1})])}const K=h(N,[["render",w]]),M={name:"BasicMain",components:{Explain:B,Base:E,HeaderFixedDisabled:K}},j=n("h2",null,"固定表头",-1);function q(t,e,i,m,c,_){const l=o("Explain"),r=o("Base"),u=o("HeaderFixedDisabled");return b(),p("div",null,[j,d(l),d(r),d(u)])}const I=h(M,[["render",q]]);export{I as default};
