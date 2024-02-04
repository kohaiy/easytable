import{V as h}from"./vue.runtime.esm-bundler-KVmUbhes.js";import{a as o,_ as f,r as u,o as y,c as p,w as d,h as t,i as s}from"./index-xkG6_mZq.js";const D={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:n,openBlock:e,createBlock:l}=h;return function(a,c){const r=n("ve-table");return e(),l(r,{"border-y":"","fixed-header":"","max-height":300,columns:a.columns,"table-data":a.tableData,"footer-data":a.footerData,rowKeyFieldName:"rowKey"},null,8,["columns","table-data","footer-data"])}}(),...function(){return{data(){return{columns:[{field:"name",key:"a",title:"Name",align:"center",renderFooterCell:({row:n,column:e,rowIndex:l},i)=>o("span",{class:"text-bold",style:""},[n.name])},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"center"},{field:"address",key:"d",title:"Address",align:"left"}],tableData:[],footerData:[]}},methods:{initTableData(){let n=[];for(let e=0;e<15;e++)n.push({rowKey:e,name:e,date:e,hobby:e,address:e});this.tableData=n},initFooterData(){this.footerData=[{rowKey:0,name:"平均值",date:213,hobby:355,address:189},{rowKey:1,name:"汇总值",date:1780,hobby:890,address:2988}]}},created(){this.initTableData(),this.initFooterData()}}}()}}},_={class:"content example-md-doc"},F=t("div",null,[t("p",null,[s("1、column 配置中，支持通过属性 "),t("code",null,"renderFooterCell"),s(" 传入渲染函数，与 body 自定义单元格用法一致。"),t("br"),s("2、渲染函数接收三个参数，row:当前行数据、column:当前列配置、rowIndex:行索引")])],-1),C=t("pre",null,[t("code",{class:"html"},`<template>
    <ve-table
        border-y
        fixed-header
        :max-height="300"
        :columns="columns"
        :table-data="tableData"
        :footer-data="footerData"
        rowKeyFieldName="rowKey"
    />
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        field: "name",
                        key: "a",
                        title: "Name",
                        align: "center",
                        renderFooterCell: ({ row, column, rowIndex }, h) => {
                            return (
                                <span class="text-bold" style="">
                                    {row.name}
                                </span>
                            );
                        },
                    },
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
                footerData: [],
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

            initFooterData() {
                this.footerData = [
                    {
                        rowKey: 0,
                        name: "平均值",
                        date: 213,
                        hobby: 355,
                        address: 189,
                    },
                    {
                        rowKey: 1,
                        name: "汇总值",
                        date: 1780,
                        hobby: 890,
                        address: 2988,
                    },
                ];
            },
        },
        created() {
            this.initTableData();
            this.initFooterData();
        },
    };
<\/script>

<style>
    .text-bold {
        font-weight: bold;
    }
</style>
`)],-1);function w(n,e,l,i,a,c){const r=u("anchor"),m=u("element-demo0"),b=u("demo-block");return y(),p("section",_,[o(r,{"is-edit":"",label:"footer 汇总自定义单元格",fileName:"custom-cell.md"}),o(b,null,{source:d(()=>[o(m)]),highlight:d(()=>[C]),default:d(()=>[F]),_:1})])}const x=f(D,[["render",w]]);export{x as C};
