import{_ as b,o as _,c as p,m as t,p as d,r as o,a as l,w as s}from"./index-lRrbso5P.js";import{V as f}from"./vue.runtime.esm-bundler-PK1gl5UO.js";const k={},y={class:"content example-md-doc"},g=t("div",{class:"tip"},[t("p",null,[d("1、表格高度默认由行数据决定，也可以通过 "),t("code",null,"max-height"),d("属性设置最大高度"),t("br"),d(" 2、表格高度可以设置固定值。如："),t("code",null,':max-height="500"'),t("br"),d(" 3、表格高度可以设置动态值。如："),t("code",null,'max-height="calc(100vh - 210px)"'),d(" 或者 "),t("code",null,'max-height="80%"'),t("br")])],-1),x=[g];function $(n,e){return _(),p("section",y,x)}const B=b(k,[["render",$]]),A={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:n,openBlock:e,createBlock:i}=f;return function(c,h){const a=n("ve-table");return e(),i(a,{columns:c.columns,"table-data":c.tableData},null,8,["columns","table-data"])}}(),...function(){return{data(){return{columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"center"},{field:"address",key:"d",title:"Address",align:"left"}],tableData:[]}},methods:{initTableData(){let n=[];for(let e=0;e<2;e++)n.push({name:e,date:e,hobby:e,address:e});this.tableData=n}},created(){this.initTableData()}}}()}}},v={class:"content example-md-doc"},E=t("div",null,[t("p",null,"当不设置表格高度时，表格高度根据内容撑开")],-1),C=t("pre",null,[t("code",{class:"html"},`<template>
    <ve-table :columns="columns" :table-data="tableData" />
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    { field: "name", key: "a", title: "Name", align: "center" },
                    { field: "date", key: "b", title: "Date", align: "left" },
                    { field: "hobby", key: "c", title: "Hobby", align: "center" },
                    { field: "address", key: "d", title: "Address", align: "left" },
                ],
                tableData: [],
            };
        },
        methods: {
            initTableData() {
                let data = [];
                for (let i = 0; i < 2; i++) {
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
`)],-1);function F(n,e,i,m,c,h){const a=o("anchor"),r=o("element-demo0"),u=o("demo-block");return _(),p("section",v,[l(a,{"is-edit":"",label:"表格高度自适应",fileName:"auto-height.md"}),l(u,null,{source:s(()=>[l(r)]),highlight:s(()=>[C]),default:s(()=>[E]),_:1})])}const H=b(A,[["render",F]]),T={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:n,openBlock:e,createBlock:i}=f;return function(c,h){const a=n("ve-table");return e(),i(a,{"max-height":300,columns:c.columns,"table-data":c.tableData,"border-around":!0,"border-x":!0,"border-y":!0},null,8,["columns","table-data"])}}(),...function(){return{data(){return{columns:[{field:"name",key:"a",title:"Name",width:100},{field:"date",key:"b",title:"Tel",width:200},{field:"hobby",key:"c",title:"Hobby",width:300},{field:"address",key:"d",title:"Address",width:300}],tableData:[]}},methods:{initTableData(){let n=[];for(let e=0;e<20;e++)n.push({name:e,date:e,hobby:e,address:e});this.tableData=n}},created(){this.initTableData()}}}()}}},N={class:"content example-md-doc"},w=t("pre",null,[t("code",{class:"html"},`<template>
    <ve-table
        :max-height="300"
        :columns="columns"
        :table-data="tableData"
        :border-around="true"
        :border-x="true"
        :border-y="true"
    />
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    { field: "name", key: "a", title: "Name", width: 100 },
                    { field: "date", key: "b", title: "Tel", width: 200 },
                    { field: "hobby", key: "c", title: "Hobby", width: 300 },
                    { field: "address", key: "d", title: "Address", width: 300 },
                ],
                tableData: [],
            };
        },
        methods: {
            initTableData() {
                let data = [];
                for (let i = 0; i < 20; i++) {
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
`)],-1);function V(n,e,i,m,c,h){const a=o("anchor"),r=o("element-demo0"),u=o("demo-block");return _(),p("section",N,[l(a,{"is-edit":"",label:"表格高度固定",fileName:"fixed-height.md"}),l(u,null,{source:s(()=>[l(r)]),highlight:s(()=>[w]),_:1})])}const S=b(T,[["render",V]]),z={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:n,openBlock:e,createBlock:i}=f;return function(c,h){const a=n("ve-table");return e(),i(a,{"max-height":"calc(100vh - 350px)","fixed-header":"",columns:c.columns,"table-data":c.tableData},null,8,["columns","table-data"])}}(),...function(){return{data(){return{columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"center"},{field:"address",key:"d",title:"Address",align:"left"}],tableData:[]}},methods:{initTableData(){let n=[];for(let e=0;e<20;e++)n.push({name:e,date:e,hobby:e,address:e});this.tableData=n}},created(){this.initTableData()}}}()}}},M={class:"content example-md-doc"},U=t("div",null,[t("p",null,[d("1、你可以使用 "),t("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/calc()"},"calc css 函数"),d(" 实现表格动态高度"),t("br"),d("2、试试改变浏览器宽度查看效果")])],-1),W=t("pre",null,[t("code",{class:"html"},`<template>
    <ve-table
        max-height="calc(100vh - 350px)"
        fixed-header
        :columns="columns"
        :table-data="tableData"
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
            };
        },
        methods: {
            initTableData() {
                let data = [];
                for (let i = 0; i < 20; i++) {
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
`)],-1);function j(n,e,i,m,c,h){const a=o("anchor"),r=o("element-demo0"),u=o("demo-block");return _(),p("section",M,[l(a,{"is-edit":"",label:"表格动态高度（calc css 函数）",fileName:"calc-height.md"}),l(u,null,{source:s(()=>[l(r)]),highlight:s(()=>[W]),default:s(()=>[U]),_:1})])}const q=b(z,[["render",j]]),G={name:"BasicMain",components:{Explain:B,AutoHeight:H,FixedHeight:S,CalcHeight:q}},I=t("h2",null,"表格高度",-1);function J(n,e,i,m,c,h){const a=o("Explain"),r=o("AutoHeight"),u=o("FixedHeight"),D=o("CalcHeight");return _(),p("div",null,[I,l(a),l(r),l(u),l(D)])}const O=b(G,[["render",J]]);export{O as default};
