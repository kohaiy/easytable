import{V as h}from"./vue.runtime.esm-bundler-Tv19svLr.js";import{_ as b,r as l,o as f,c as p,a as r,w as d,m as a}from"./index-BxRg2T26.js";const y={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:n,createVNode:e,openBlock:i,createElementBlock:s}=h;return function(t,u){const o=n("ve-table");return i(),s("div",null,[e(o,{"fixed-header":"","max-height":500,"virtual-scroll-option":t.virtualScrollOption,columns:t.columns,"table-data":t.tableData,"footer-data":t.footerData,"row-key-field-name":"rowKey"},null,8,["virtual-scroll-option","columns","table-data","footer-data"])])}}(),...function(){return{data(){return{virtualScrollOption:{enable:!0},columns:[{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},methods:{initData(){let n=[];for(let e=0;e<1e4;e++)n.push({rowKey:e,name:`name${e}`,hobby:`hobby${e}`,address:`address${e}`});this.tableData=n,this.footerData=[{rowKey:0,name:"平均值",date:1100,hobby:1200,address:1300},{rowKey:1,name:"汇总值",date:701e3,hobby:801e3,address:801e3}]}},created(){this.initData()}}}()}}},_={class:"content example-md-doc"},D=a("div",null,[a("p",null,"1、表格设置了虚拟滚动，footer 汇总自动支持，无需额外配置")],-1),v=a("pre",null,[a("code",{class:"html"},`<template>
    <div>
        <ve-table
            fixed-header
            :max-height="500"
            :virtual-scroll-option="virtualScrollOption"
            :columns="columns"
            :table-data="tableData"
            :footer-data="footerData"
            row-key-field-name="rowKey"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                virtualScrollOption: {
                    // 是否开启
                    enable: true,
                },

                columns: [
                    {
                        field: "name",
                        key: "b",
                        title: "Name",
                        width: 200,
                        align: "left",
                    },
                    {
                        field: "hobby",
                        key: "c",
                        title: "Hobby",
                        width: 300,
                        align: "left",
                    },
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
            initData() {
                let data = [];
                for (let i = 0; i < 10000; i++) {
                    data.push({
                        rowKey: i,
                        name: \`name\${i}\`,
                        hobby: \`hobby\${i}\`,
                        address: \`address\${i}\`,
                    });
                }

                this.tableData = data;

                this.footerData = [
                    {
                        rowKey: 0,
                        name: "平均值",
                        date: 1100,
                        hobby: 1200,
                        address: 1300,
                    },
                    {
                        rowKey: 1,
                        name: "汇总值",
                        date: 701000,
                        hobby: 801000,
                        address: 801000,
                    },
                ];
            },
        },
        created() {
            this.initData();
        },
    };
<\/script>
`)],-1);function w(n,e,i,s,c,t){const u=l("anchor"),o=l("element-demo0"),m=l("demo-block");return f(),p("section",_,[r(u,{"is-edit":"",label:"footer 结合虚拟滚动",fileName:"virtual-scroll.md"}),r(m,null,{source:d(()=>[r(o)]),highlight:d(()=>[v]),default:d(()=>[D]),_:1})])}const E=b(y,[["render",w]]);export{E as F};
