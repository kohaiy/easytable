import{_ as f,o as _,c as p,g as k,r as o,a as c,w as a,m as t,p as u}from"./index-UgqV6vM2.js";import{V as b}from"./vue.runtime.esm-bundler-KaaX9MVw.js";const y={},w={class:"content example-md-doc"},x=k('<div class="tip"><p>1、通过设置<code>columns</code> 的<code>children</code>属性，即可实现表头分组功能<br> 2、<code>children</code>属性指定需要合并的列<br> 3、表头分组功能必须指定列的<code>key</code>属性！！<br> 4、当需要固定分组的列时，只需要将 fixed 属性设置在顶层配置中即可</p></div>',1),g=[x];function $(n,e){return _(),p("section",w,g)}const D=f(y,[["render",$]]),B={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:n,openBlock:e,createBlock:d}=b;return function(i,m){const l=n("ve-table");return e(),d(l,{"border-y":"",columns:i.columns,"table-data":i.tableData},null,8,["columns","table-data"])}}(),...function(){return{data(){return{columns:[{field:"col1",key:"a",title:"col1",width:"10%"},{title:"col2-col3",children:[{field:"col2",key:"b",title:"col2",width:100},{field:"col3",key:"c",title:"col3",width:110}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"d",title:"col4",width:130},{field:"col5",key:"e",title:"col5",width:140}]},{title:"col6",field:"col6",key:"f",width:140}]},{field:"col7",key:"g",title:"col7",width:150},{field:"col8",key:"h",title:"col8",width:160}],tableData:[]}},methods:{initTableData(){let n=[];for(let e=0;e<6;e++)n.push({rowKey:e,col1:e,col2:e,col3:e,col4:e,col5:e,col6:e,col7:e,col8:e});this.tableData=n}},created(){this.initTableData()}}}()}}},v={class:"content example-md-doc"},E=t("div",null,[t("p",null,[u("1、通过设置"),t("code",null,"children"),u("指定当前合并的列")])],-1),C=t("pre",null,[t("code",{class:"html"},`<template>
    <ve-table border-y :columns="columns" :table-data="tableData" />
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    { field: "col1", key: "a", title: "col1", width: "10%" },
                    {
                        title: "col2-col3",
                        children: [
                            {
                                field: "col2",
                                key: "b",
                                title: "col2",
                                width: 100,
                            },
                            {
                                field: "col3",
                                key: "c",
                                title: "col3",
                                width: 110,
                            },
                        ],
                    },
                    {
                        title: "col4-col5-col6",
                        children: [
                            {
                                title: "col4-col5",
                                children: [
                                    {
                                        field: "col4",
                                        key: "d",
                                        title: "col4",
                                        width: 130,
                                    },
                                    {
                                        field: "col5",
                                        key: "e",
                                        title: "col5",
                                        width: 140,
                                    },
                                ],
                            },
                            {
                                title: "col6",
                                field: "col6",
                                key: "f",
                                width: 140,
                            },
                        ],
                    },
                    { field: "col7", key: "g", title: "col7", width: 150 },
                    { field: "col8", key: "h", title: "col8", width: 160 },
                ],
                tableData: [],
            };
        },
        methods: {
            initTableData() {
                let data = [];
                for (let i = 0; i < 6; i++) {
                    data.push({
                        rowKey: i,
                        col1: i,
                        col2: i,
                        col3: i,
                        col4: i,
                        col5: i,
                        col6: i,
                        col7: i,
                        col8: i,
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
`)],-1);function F(n,e,d,h,i,m){const l=o("anchor"),r=o("element-demo0"),s=o("demo-block");return _(),p("section",v,[c(l,{"is-edit":"",label:"表头分组",fileName:"grouping-header.md"}),c(s,null,{source:a(()=>[c(r)]),highlight:a(()=>[C]),default:a(()=>[E]),_:1})])}const A=f(B,[["render",F]]),T={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:n,openBlock:e,createBlock:d}=b;return function(i,m){const l=n("ve-table");return e(),d(l,{"fixed-header":"","scroll-width":1600,"max-height":380,"border-y":"",columns:i.columns,"table-data":i.tableData},null,8,["columns","table-data"])}}(),...function(){return{data(){return{columns:[{field:"col1",key:"a",title:"col1",width:50,fixed:"left"},{title:"col2-col3",fixed:"left",children:[{field:"col2",key:"b",title:"col2",width:50},{field:"col3",key:"c",title:"col3",width:50}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"d",title:"col4",width:130},{field:"col5",key:"e",title:"col5",width:140}]},{title:"col6",field:"col6",key:"f",width:140}]},{title:"col7",fixed:"right",children:[{title:"col7-1",field:"col7",key:"g",width:50}]},{field:"col8",key:"h",title:"col8",width:50,fixed:"right"}],tableData:[]}},methods:{initTableData(){let n=[];for(let e=0;e<10;e++)n.push({rowKey:e,col1:e,col2:e,col3:e,col4:e,col5:e,col6:e,col7:e,col8:e});this.tableData=n}},created(){this.initTableData()}}}()}}},G={class:"content example-md-doc"},H=t("div",null,[t("p",null,[u("1、通过"),t("code",null,'fixed:"left"'),u("设置固定左列"),t("br"),u("2、固定列只需指定到顶层列即可")])],-1),N=t("pre",null,[t("code",{class:"html"},`<template>
    <ve-table
        fixed-header
        :scroll-width="1600"
        :max-height="380"
        border-y
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
                        field: "col1",
                        key: "a",
                        title: "col1",
                        width: 50,
                        fixed: "left",
                    },
                    {
                        title: "col2-col3",
                        fixed: "left",
                        children: [
                            {
                                field: "col2",
                                key: "b",
                                title: "col2",
                                width: 50,
                            },
                            {
                                field: "col3",
                                key: "c",
                                title: "col3",
                                width: 50,
                            },
                        ],
                    },
                    {
                        title: "col4-col5-col6",
                        children: [
                            {
                                title: "col4-col5",
                                children: [
                                    {
                                        field: "col4",
                                        key: "d",
                                        title: "col4",
                                        width: 130,
                                    },
                                    {
                                        field: "col5",
                                        key: "e",
                                        title: "col5",
                                        width: 140,
                                    },
                                ],
                            },
                            {
                                title: "col6",
                                field: "col6",
                                key: "f",
                                width: 140,
                            },
                        ],
                    },
                    {
                        title: "col7",
                        fixed: "right",
                        children: [
                            {
                                title: "col7-1",
                                field: "col7",
                                key: "g",
                                width: 50,
                            },
                        ],
                    },
                    {
                        field: "col8",
                        key: "h",
                        title: "col8",
                        width: 50,
                        fixed: "right",
                    },
                ],
                tableData: [],
            };
        },
        methods: {
            initTableData() {
                let data = [];
                for (let i = 0; i < 10; i++) {
                    data.push({
                        rowKey: i,
                        col1: i,
                        col2: i,
                        col3: i,
                        col4: i,
                        col5: i,
                        col6: i,
                        col7: i,
                        col8: i,
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
`)],-1);function V(n,e,d,h,i,m){const l=o("anchor"),r=o("element-demo0"),s=o("demo-block");return _(),p("section",G,[c(l,{"is-edit":"",label:"表头分组结合固定列",fileName:"grouping-header-fixed-column.md"}),c(s,null,{source:a(()=>[c(r)]),highlight:a(()=>[N]),default:a(()=>[H]),_:1})])}const K=f(T,[["render",V]]),M={name:"BasicMain",components:{Explain:D,GroupingHeader:A,GroupingHeaderFixedColumn:K}},S=t("h2",null,"表头分组",-1);function j(n,e,d,h,i,m){const l=o("Explain"),r=o("GroupingHeader"),s=o("GroupingHeaderFixedColumn");return _(),p("div",null,[S,c(l),c(r),c(s)])}const I=f(M,[["render",j]]);export{I as default};
