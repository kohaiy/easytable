import{E as _}from"./ellipsis-props-k6aA68ey.js";import{_ as p,o as m,c as b,m as e,p as t,r as d,a as n,w as r,d as f,b as y}from"./index-fbKNRH-9.js";import{V as x}from"./vue.runtime.esm-bundler-V97BM_rA.js";import"./api-tpl-suA9Q-lD.js";const w={},C={class:"content example-md-doc"},v=e("div",{class:"tip"},[e("p",null,[t("1、通过 "),e("code",null,"column"),t(" 的 "),e("code",null,"ellipsis"),t(" 属性设置超出显示省略"),e("br"),t(" 2、通过 "),e("code",null,"lineClamp"),t("内容超出多少行开始出现省略")])],-1),k=[v];function A(i,s){return m(),b("section",C,k)}const N=p(w,[["render",A]]),K={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:i,openBlock:s,createBlock:l}=x;return function(o,h){const a=i("ve-table");return s(),l(a,{rowKeyFieldName:"rowKey","fixed-header":!0,columns:o.columns,"table-data":o.tableData},null,8,["columns","table-data"])}}(),...function(){return{data(){return{columns:[{field:"name",key:"a",title:"Name",align:"left",width:"15%"},{field:"date",key:"b",title:"Date",align:"left",width:"15%"},{field:"hobby",key:"c",title:"Hobby",align:"center",width:"30%"},{field:"address",key:"d",title:"Address",align:"left",width:"40%"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai,this is a long text,this is a long text,this is a long text,this is a long text",rowKey:0},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing,this is a long text,this is a long text,this is a long text,this is a long text",rowKey:1},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing,this is a long text,this is a long text,this is a long text,this is a long text",rowKey:2},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen,this is a long text,this is a long text",rowKey:3},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen",rowKey:4}]}},methods:{}}}()}}},D={class:"content example-md-doc"},B=e("p",null,"默认单元格内的文本超出宽度时，换行显示",-1),$=e("pre",null,[e("code",{class:"html"},`<template>
    <ve-table
        rowKeyFieldName="rowKey"
        :fixed-header="true"
        :columns="columns"
        :table-data="tableData"
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
                        align: "left",
                        width: "15%",
                    },
                    {
                        field: "date",
                        key: "b",
                        title: "Date",
                        align: "left",
                        width: "15%",
                    },
                    {
                        field: "hobby",
                        key: "c",
                        title: "Hobby",
                        align: "center",
                        width: "30%",
                    },
                    {
                        field: "address",
                        key: "d",
                        title: "Address",
                        align: "left",
                        width: "40%",
                    },
                ],
                // table data
                tableData: [
                    {
                        name: "John",
                        date: "1900-05-20",
                        hobby: "coding and coding repeat",
                        address:
                            "No.1 Century Avenue, Shanghai,this is a long text,this is a long text,this is a long text,this is a long text",
                        rowKey: 0,
                    },
                    {
                        name: "Dickerson",
                        date: "1910-06-20",
                        hobby: "coding and coding repeat",
                        address:
                            "No.1 Century Avenue, Beijing,this is a long text,this is a long text,this is a long text,this is a long text",
                        rowKey: 1,
                    },
                    {
                        name: "Larsen",
                        date: "2000-07-20",
                        hobby: "coding and coding repeat",
                        address:
                            "No.1 Century Avenue, Chongqing,this is a long text,this is a long text,this is a long text,this is a long text",
                        rowKey: 2,
                    },
                    {
                        name: "Geneva",
                        date: "2010-08-20",
                        hobby: "coding and coding repeat",
                        address:
                            "No.1 Century Avenue, Xiamen,this is a long text,this is a long text",
                        rowKey: 3,
                    },
                    {
                        name: "Jami",
                        date: "2020-09-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Shenzhen",
                        rowKey: 4,
                    },
                ],
            };
        },
        methods: {},
    };
<\/script>
`)],-1);function F(i,s,l,c,o,h){const a=d("anchor"),u=d("element-demo0"),g=d("demo-block");return m(),b("section",D,[n(a,{"is-edit":"",label:"超出换行",fileName:"base.md"}),B,n(g,null,{source:r(()=>[n(u)]),highlight:r(()=>[$]),_:1})])}const E=p(K,[["render",F]]),S={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:i,openBlock:s,createBlock:l}=x;return function(o,h){const a=i("ve-table");return s(),l(a,{rowKeyFieldName:"rowKey","fixed-header":!0,columns:o.columns,"table-data":o.tableData},null,8,["columns","table-data"])}}(),...function(){return{data(){return{columns:[{field:"name",key:"a",title:"Name",align:"left",width:"15%"},{field:"date",key:"b",title:"Date",align:"left",width:"15%"},{field:"hobby",key:"c",title:"Hobby",align:"center",width:"30%"},{field:"address",key:"d",title:"Address",align:"left",width:"40%",ellipsis:{showTitle:!0}}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai,this is a long text,this is a long text,this is a long text,this is a long text",rowKey:0},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing,this is a long text,this is a long text,this is a long text,this is a long text",rowKey:1},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing,this is a long text,this is a long text,this is a long text,this is a long text",rowKey:2},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen,this is a long text,this is a long text",rowKey:3},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen",rowKey:4}]}},methods:{}}}()}}},J={class:"content example-md-doc"},z=e("div",null,[e("p",null,[t("通过 "),e("code",null,"column"),t(" 的 "),e("code",null,"ellipsis"),t(" 属性设置超出显示省略。默认单行省略")])],-1),L=e("pre",null,[e("code",{class:"html"},`<template>
    <ve-table
        rowKeyFieldName="rowKey"
        :fixed-header="true"
        :columns="columns"
        :table-data="tableData"
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
                        align: "left",
                        width: "15%",
                    },
                    {
                        field: "date",
                        key: "b",
                        title: "Date",
                        align: "left",
                        width: "15%",
                    },
                    {
                        field: "hobby",
                        key: "c",
                        title: "Hobby",
                        align: "center",
                        width: "30%",
                    },
                    {
                        field: "address",
                        key: "d",
                        title: "Address",
                        align: "left",
                        width: "40%",
                        ellipsis: {
                            showTitle: true,
                        },
                    },
                ],
                // table data
                tableData: [
                    {
                        name: "John",
                        date: "1900-05-20",
                        hobby: "coding and coding repeat",
                        address:
                            "No.1 Century Avenue, Shanghai,this is a long text,this is a long text,this is a long text,this is a long text",
                        rowKey: 0,
                    },
                    {
                        name: "Dickerson",
                        date: "1910-06-20",
                        hobby: "coding and coding repeat",
                        address:
                            "No.1 Century Avenue, Beijing,this is a long text,this is a long text,this is a long text,this is a long text",
                        rowKey: 1,
                    },
                    {
                        name: "Larsen",
                        date: "2000-07-20",
                        hobby: "coding and coding repeat",
                        address:
                            "No.1 Century Avenue, Chongqing,this is a long text,this is a long text,this is a long text,this is a long text",
                        rowKey: 2,
                    },
                    {
                        name: "Geneva",
                        date: "2010-08-20",
                        hobby: "coding and coding repeat",
                        address:
                            "No.1 Century Avenue, Xiamen,this is a long text,this is a long text",
                        rowKey: 3,
                    },
                    {
                        name: "Jami",
                        date: "2020-09-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Shenzhen",
                        rowKey: 4,
                    },
                ],
            };
        },
        methods: {},
    };
<\/script>
`)],-1);function j(i,s,l,c,o,h){const a=d("anchor"),u=d("element-demo0"),g=d("demo-block");return m(),b("section",J,[n(a,{"is-edit":"",label:"超出省略",fileName:"ellipsis.md"}),n(g,null,{source:r(()=>[n(u)]),highlight:r(()=>[L]),default:r(()=>[z]),_:1})])}const q=p(S,[["render",j]]),G={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:i,openBlock:s,createBlock:l}=x;return function(o,h){const a=i("ve-table");return s(),l(a,{rowKeyFieldName:"rowKey","fixed-header":!0,columns:o.columns,"table-data":o.tableData},null,8,["columns","table-data"])}}(),...function(){return{data(){return{columns:[{field:"name",key:"a",title:"Name",align:"left",width:"15%"},{field:"date",key:"b",title:"Date",align:"left",width:"15%"},{field:"hobby",key:"c",title:"Hobby",align:"center",width:"30%"},{field:"address",key:"d",title:"Address",align:"left",width:"40%",ellipsis:{showTitle:!0,lineClamp:2}}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text",rowKey:0},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing,this is a long text,this is a long text,this is a long text,this is a long text",rowKey:1},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text",rowKey:2},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen,this is a long text,this is a long text",rowKey:3},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen",rowKey:4}]}},methods:{}}}()}}},H={class:"content example-md-doc"},X=e("p",null,[t("此功能目前只支持 "),e("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-line-clamp"},"-webkit-line-clamp 属性"),t(" 的浏览器")],-1),T=e("div",null,[e("p",null,[t("通过 "),e("code",null,"lineClamp"),t("设置超过多少行省略")])],-1),V=e("pre",null,[e("code",{class:"html"},`<template>
    <ve-table
        rowKeyFieldName="rowKey"
        :fixed-header="true"
        :columns="columns"
        :table-data="tableData"
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
                        align: "left",
                        width: "15%",
                    },
                    {
                        field: "date",
                        key: "b",
                        title: "Date",
                        align: "left",
                        width: "15%",
                    },
                    {
                        field: "hobby",
                        key: "c",
                        title: "Hobby",
                        align: "center",
                        width: "30%",
                    },
                    {
                        field: "address",
                        key: "d",
                        title: "Address",
                        align: "left",
                        width: "40%",
                        ellipsis: {
                            showTitle: true,
                            lineClamp: 2,
                        },
                    },
                ],
                // table data
                tableData: [
                    {
                        name: "John",
                        date: "1900-05-20",
                        hobby: "coding and coding repeat",
                        address:
                            "No.1 Century Avenue, Shanghai,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text",
                        rowKey: 0,
                    },
                    {
                        name: "Dickerson",
                        date: "1910-06-20",
                        hobby: "coding and coding repeat",
                        address:
                            "No.1 Century Avenue, Beijing,this is a long text,this is a long text,this is a long text,this is a long text",
                        rowKey: 1,
                    },
                    {
                        name: "Larsen",
                        date: "2000-07-20",
                        hobby: "coding and coding repeat",
                        address:
                            "No.1 Century Avenue, Chongqing,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text",
                        rowKey: 2,
                    },
                    {
                        name: "Geneva",
                        date: "2010-08-20",
                        hobby: "coding and coding repeat",
                        address:
                            "No.1 Century Avenue, Xiamen,this is a long text,this is a long text",
                        rowKey: 3,
                    },
                    {
                        name: "Jami",
                        date: "2020-09-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Shenzhen",
                        rowKey: 4,
                    },
                ],
            };
        },
        methods: {},
    };
<\/script>
`)],-1);function P(i,s,l,c,o,h){const a=d("anchor"),u=d("element-demo0"),g=d("demo-block");return m(),b("section",H,[n(a,{"is-edit":"",label:"多行省略",fileName:"ellipsis-line.md"}),X,n(g,null,{source:r(()=>[n(u)]),highlight:r(()=>[V]),default:r(()=>[T]),_:1})])}const I=p(G,[["render",P]]),M=e("h2",null,"单元格省略",-1),U=f({name:"BasicMain",__name:"main",setup(i){return(s,l)=>(m(),b("div",null,[M,n(y(N)),n(y(E)),n(y(q)),n(y(I)),n(_,{title:"API",anchor:"API",desc:"ellipsis 单元格省略配置"})]))}});export{U as default};
