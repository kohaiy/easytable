import{V as b}from"./vue.runtime.esm-bundler-V97BM_rA.js";import{_ as p,r,o as y,c as h,a as s,w as d,m as t,p as l}from"./index-fbKNRH-9.js";const D={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:n,openBlock:e,createBlock:a}=b;return function(o,c){const u=n("ve-table");return e(),a(u,{"border-y":"","fixed-header":"","max-height":300,columns:o.columns,"table-data":o.tableData,"footer-data":o.footerData,"cell-style-option":o.cellStyleOption,rowKeyFieldName:"rowKey"},null,8,["columns","table-data","footer-data","cell-style-option"])}}(),...function(){return{data(){return{cellStyleOption:{footerCellClass:({row:n,column:e,rowIndex:a})=>{if(e.field==="address")return"table-footer-cell-class1";if(e.field==="date"&&a===1)return"table-footer-cell-class2"}},columns:[{field:"name",key:"a",title:"Name",align:"left"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},methods:{initTableData(){let n=[];for(let e=0;e<15;e++)n.push({rowKey:e,name:e,date:e,hobby:e,address:e});this.tableData=n},initFooterData(){this.footerData=[{rowKey:0,name:"平均值",date:213,hobby:355,address:189},{rowKey:1,name:"汇总值",date:1780,hobby:890,address:2988}]}},created(){this.initTableData(),this.initFooterData()}}}()}}},C={class:"content example-md-doc"},F=t("div",null,[t("p",null,[l("1、回调函数"),t("code",null,"footerCellClass({ row, column, rowIndex })"),l("接收 3 个参数，row：当前行数据、column：当前列配置、rowIndex：行索引"),t("br"),l("2、将符合条件的单元格返回指定的 class 名称。class 名称自定义"),t("br"),l("3、如果需要给单元格设置背景色或字体颜色需要加上"),t("code",null,"!important")])],-1),_=t("pre",null,[t("code",{class:"html"},`<template>
    <ve-table
        border-y
        fixed-header
        :max-height="300"
        :columns="columns"
        :table-data="tableData"
        :footer-data="footerData"
        :cell-style-option="cellStyleOption"
        rowKeyFieldName="rowKey"
    />
</template>

<style>
    .table-footer-cell-class1 {
        background: #91d5ff !important;
        color: #fff !important;
    }

    .table-footer-cell-class2 {
        background: orange !important;
        color: #fff !important;
    }
</style>

<script>
    export default {
        data() {
            return {
                cellStyleOption: {
                    footerCellClass: ({ row, column, rowIndex }) => {
                        if (column.field === "address") {
                            return "table-footer-cell-class1";
                        }

                        if (column.field === "date" && rowIndex === 1) {
                            return "table-footer-cell-class2";
                        }
                    },
                },
                columns: [
                    { field: "name", key: "a", title: "Name", align: "left" },
                    { field: "date", key: "b", title: "Date", align: "left" },
                    { field: "hobby", key: "c", title: "Hobby", align: "left" },
                    {
                        field: "address",
                        key: "d",
                        title: "Address",
                        width: "",
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
`)],-1);function w(n,e,a,i,o,c){const u=r("anchor"),f=r("element-demo0"),m=r("demo-block");return y(),h("section",C,[s(u,{"is-edit":"",label:"footer 单元格样式",fileName:"cell-style.md"}),s(m,null,{source:d(()=>[s(f)]),highlight:d(()=>[_]),default:d(()=>[F]),_:1})])}const B=p(D,[["render",w]]);export{B as C};
