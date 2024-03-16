import{V as m}from"./vue.runtime.esm-bundler-BRNTKtdd.js";import{_ as b,r as i,o as y,c as f,a as l,w as s,m as n,p as d}from"./index-1-5pqjkO.js";const g={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:a,openBlock:e,createBlock:o}=m;return function(t,u){const r=a("ve-table");return e(),o(r,{"border-y":"","fixed-header":"","max-height":300,columns:t.columns,"table-data":t.tableData,"footer-data":t.footerData,rowKeyFieldName:"rowKey","cell-span-option":t.cellSpanOption},null,8,["columns","table-data","footer-data","cell-span-option"])}}(),...function(){return{data(){return{cellSpanOption:{footerCellSpan:this.footerCellSpan},columns:[{field:"name",key:"a",title:"Name",width:200,align:"center"},{field:"date",key:"b",title:"Date",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:200,align:"right"},{field:"address",key:"d",title:"Address",width:""}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{footerCellSpan({row:a,column:e,rowIndex:o}){if(o===0){if(e.field==="date")return{rowspan:1,colspan:2};if(e.field==="hobby")return{rowspan:0,colspan:0}}},initTableData(){let a=[];for(let e=0;e<15;e++)a.push({rowKey:e,name:e,date:e,hobby:e,address:e});this.tableData=a},initFooterData(){this.footerData=[{rowKey:0,name:"平均值",date:213,hobby:355,address:189},{rowKey:1,name:"汇总值",date:1780,hobby:890,address:2988}]}},created(){this.initTableData(),this.initFooterData()}}}()}}},C={class:"content example-md-doc"},w=n("div",null,[n("p",null,[d("设置 footer 汇总第 1 行"),n("code",null,"date"),d("列和"),n("code",null,"hoby"),d("列合并。 同时需要指定第 2 行"),n("code",null,"hoby"),d("列不渲染")])],-1),_=n("pre",null,[n("code",{class:"html"},`<template>
    <ve-table
        border-y
        fixed-header
        :max-height="300"
        :columns="columns"
        :table-data="tableData"
        :footer-data="footerData"
        rowKeyFieldName="rowKey"
        :cell-span-option="cellSpanOption"
    />
</template>

<script>
    export default {
        data() {
            return {
                cellSpanOption: {
                    footerCellSpan: this.footerCellSpan,
                },
                columns: [
                    {
                        field: "name",
                        key: "a",
                        title: "Name",
                        width: 200,
                        align: "center",
                    },
                    {
                        field: "date",
                        key: "b",
                        title: "Date",
                        width: 200,
                        align: "left",
                    },
                    {
                        field: "hobby",
                        key: "c",
                        title: "Hobby",
                        width: 200,
                        align: "right",
                    },
                    { field: "address", key: "d", title: "Address", width: "" },
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
        methods: {
            // footer cell span
            footerCellSpan({ row, column, rowIndex }) {
                if (rowIndex === 0) {
                    if (column.field === "date") {
                        return {
                            rowspan: 1,
                            colspan: 2,
                        };
                    }
                    // does not need to be rendered
                    else if (column.field === "hobby") {
                        return {
                            rowspan: 0,
                            colspan: 0,
                        };
                    }
                }
            },
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
`)],-1);function D(a,e,o,c,t,u){const r=i("anchor"),h=i("element-demo0"),p=i("demo-block");return y(),f("section",C,[l(r,{"is-edit":"",label:"footer 列合并",fileName:"cell-span.md"}),l(p,null,{source:s(()=>[l(h)]),highlight:s(()=>[_]),default:s(()=>[w]),_:1})])}const N=b(g,[["render",D]]);export{N as C};
