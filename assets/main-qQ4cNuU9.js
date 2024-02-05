import{_ as h,o as b,c as _,m as t,p as f,r as o,a,w as d}from"./index-gSu8gfTL.js";import{V as p}from"./vue.runtime.esm-bundler-x7LAIwf8.js";import{C as g}from"./custom-cell-QsYEjBCa.js";import{C as B}from"./cell-style-bqilKqOY.js";import{C as $}from"./cell-span-A5VoZCxk.js";import{O as E,a as K}from"./on-footer-cell-oR76A1f1.js";import{F as v}from"./virtual-scroll-80hBJNR7.js";const A={},N={class:"content example-md-doc"},T=t("div",{class:"tip"},[t("p",null,[f("1、footer 汇总，允许对表格数据进行汇总展示"),t("br"),f(" 2、"),t("code",null,"footerData"),f("为 footer 汇总数据。数据结构与"),t("code",null,"tableData"),f("保持一致")])],-1),S=[T];function V(n,e){return b(),_("section",N,S)}const H=h(A,[["render",V]]),O={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:n,openBlock:e,createBlock:i}=p;return function(l,m){const r=n("ve-table");return e(),i(r,{"border-y":"","fixed-header":"","max-height":300,columns:l.columns,"table-data":l.tableData,"footer-data":l.footerData,rowKeyFieldName:"rowKey"},null,8,["columns","table-data","footer-data"])}}(),...function(){return{data(){return{columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"center"},{field:"address",key:"d",title:"Address",align:"left"}],tableData:[],footerData:[]}},methods:{initTableData(){let n=[];for(let e=0;e<15;e++)n.push({rowKey:e,name:e,date:e,hobby:e,address:e});this.tableData=n},initFooterData(){this.footerData=[{rowKey:0,name:"平均值",date:213,hobby:355,address:189},{rowKey:1,name:"汇总值",date:1780,hobby:890,address:2988}]}},created(){this.initTableData(),this.initFooterData()}}}()}}},R={class:"content example-md-doc"},j=t("div",null,[t("p",null,"1、默认汇总数据固定在底部")],-1),q=t("pre",null,[t("code",{class:"html"},`<template>
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
`)],-1);function z(n,e,i,u,l,m){const r=o("anchor"),s=o("element-demo0"),c=o("demo-block");return b(),_("section",R,[a(r,{"is-edit":"",label:"footer 基础功能",fileName:"base.md"}),a(c,null,{source:d(()=>[a(s)]),highlight:d(()=>[q]),default:d(()=>[j]),_:1})])}const G=h(O,[["render",z]]),I={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:n,openBlock:e,createBlock:i}=p;return function(l,m){const r=n("ve-table");return e(),i(r,{"border-y":"","fixed-header":"","max-height":300,columns:l.columns,"table-data":l.tableData,"footer-data":l.footerData,"fixed-footer":!1,rowKeyFieldName:"rowKey"},null,8,["columns","table-data","footer-data"])}}(),...function(){return{data(){return{columns:[{field:"name",key:"a",title:"Name",align:"center",width:200},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"center"},{field:"address",key:"d",title:"Address",align:"left",width:200}],tableData:[],footerData:[]}},methods:{initTableData(){let n=[];for(let e=0;e<15;e++)n.push({rowKey:e,name:e,date:e,hobby:e,address:e});this.tableData=n},initFooterData(){this.footerData=[{rowKey:0,name:"平均值",date:213,hobby:355,address:189},{rowKey:1,name:"汇总值",date:1780,hobby:890,address:2988}]}},created(){this.initTableData(),this.initFooterData()}}}()}}},J={class:"content example-md-doc"},L=t("div",null,[t("p",null,[f("1、设置了 "),t("code",null,"maxHeight"),f(" 属性后，footer 汇总会固定显示。如果想让汇总信息跟随表格行数据，可以设置 "),t("code",null,"fixedFooter=false")])],-1),M=t("pre",null,[t("code",{class:"html"},`<template>
    <ve-table
        border-y
        fixed-header
        :max-height="300"
        :columns="columns"
        :table-data="tableData"
        :footer-data="footerData"
        :fixed-footer="false"
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
                        width: 200,
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
                        width: 200,
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
`)],-1);function P(n,e,i,u,l,m){const r=o("anchor"),s=o("element-demo0"),c=o("demo-block");return b(),_("section",J,[a(r,{"is-edit":"",label:"footer 跟随",fileName:"footer-fixed.md"}),a(c,null,{source:d(()=>[a(s)]),highlight:d(()=>[M]),default:d(()=>[L]),_:1})])}const Q=h(I,[["render",P]]),U={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:n,openBlock:e,createBlock:i}=p;return function(l,m){const r=n("ve-table");return e(),i(r,{"border-y":"","fixed-header":"","max-height":300,style:{width:"900px"},"scroll-width":1200,columns:l.columns,"table-data":l.tableData,"footer-data":l.footerData,rowKeyFieldName:"rowKey"},null,8,["columns","table-data","footer-data"])}}(),...function(){return{data(){return{columns:[{field:"name",key:"a",title:"Name",align:"center",fixed:"left",width:200},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"center"},{field:"address",key:"d",title:"Address",align:"left",fixed:"right",width:200}],tableData:[],footerData:[]}},methods:{initTableData(){let n=[];for(let e=0;e<15;e++)n.push({rowKey:e,name:e,date:e,hobby:e,address:e});this.tableData=n},initFooterData(){this.footerData=[{rowKey:0,name:"平均值",date:213,hobby:355,address:189},{rowKey:1,name:"汇总值",date:1780,hobby:890,address:2988}]}},created(){this.initTableData(),this.initFooterData()}}}()}}},W={class:"content example-md-doc"},X=t("div",null,[t("p",null,"1、表格设置了固定列，footer 汇总自动支持，无需额外配置")],-1),Y=t("pre",null,[t("code",{class:"html"},`<template>
    <ve-table
        border-y
        fixed-header
        :max-height="300"
        style="width:900px"
        :scroll-width="1200"
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
                        fixed: "left",
                        width: 200,
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
                        fixed: "right",
                        width: 200,
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
`)],-1);function Z(n,e,i,u,l,m){const r=o("anchor"),s=o("element-demo0"),c=o("demo-block");return b(),_("section",W,[a(r,{"is-edit":"",label:"footer 结合固定列",fileName:"footer-column-fixed.md"}),a(c,null,{source:d(()=>[a(s)]),highlight:d(()=>[Y]),default:d(()=>[X]),_:1})])}const ee=h(U,[["render",Z]]),te={name:"EventCustom",components:{Explain:H,Base:G,CustomCell:g,CellStyle:B,CellSpan:$,OnFooterRow:E,OnFooterCell:K,FooterFixed:Q,FooterColumnFixed:ee,VirtualScroll:v}},ne=t("h2",null,"footer 汇总",-1);function oe(n,e,i,u,l,m){const r=o("Explain"),s=o("Base"),c=o("CustomCell"),y=o("CellStyle"),D=o("CellSpan"),F=o("OnFooterRow"),C=o("OnFooterCell"),w=o("FooterFixed"),k=o("FooterColumnFixed"),x=o("VirtualScroll");return b(),_("div",null,[ne,a(r),a(s),a(c),a(y),a(D),a(F),a(C),a(w),a(k),a(x)])}const ue=h(te,[["render",oe]]);export{ue as default};
