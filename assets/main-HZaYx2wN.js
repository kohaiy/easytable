import{R as f}from"./row-style-option-props-4byVXW3H.js";import{_ as y,o as g,c as b,g as v,r as o,a,w as u,m as n,p as m}from"./index-1-5pqjkO.js";import{V as w}from"./vue.runtime.esm-bundler-BRNTKtdd.js";import"./api-tpl-2bea2PZj.js";const C={},k={class:"content example-md-doc"},A=v('<div class="tip"><p>1、通过属性<code>rowStyleOption</code>设置行的样式<br> 2、通过属性<code>stripe=true</code>开启斑马纹<br> 3、通过属性<code>hoverHighlight=true</code>开启行 hover 高亮效果。默认开启<br> 4、通过属性<code>clickHighlight=true</code>开启行 click 高亮效果。默认开启</p></div>',1),N=[A];function B(e,d){return g(),b("section",k,N)}const $=y(C,[["render",B]]),E={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:e,createVNode:d,openBlock:t,createElementBlock:i}=w;return function(r,s){const l=e("ve-table");return t(),i("div",null,[d(l,{"row-style-option":r.rowStyleOption,columns:r.columns,"table-data":r.tableData},null,8,["row-style-option","columns","table-data"])])}}(),...function(){return{data(){return{rowStyleOption:{stripe:!0},columns:[{field:"",key:"a",title:"",width:50,align:"center",renderBodyCell:({row:e,column:d,rowIndex:t},i)=>++t},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},K={class:"content example-md-doc"},S=n("div",null,[n("p",null,[m("通过属性"),n("code",null,"stripe"),m("开启斑马纹")])],-1),H=n("pre",null,[n("code",{class:"html"},`<template>
    <div>
        <ve-table :row-style-option="rowStyleOption" :columns="columns" :table-data="tableData" />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                rowStyleOption: {
                    stripe: true,
                },
                columns: [
                    {
                        field: "",
                        key: "a",
                        title: "",
                        width: 50,
                        align: "center",
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return ++rowIndex;
                        },
                    },
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
                tableData: [
                    {
                        rowKey: 1001,
                        name: "John",
                        date: "1900-05-20",
                        hobby: "coding",
                        address: "No.1 Century Avenue, Shanghai",
                    },
                    {
                        rowKey: 1002,
                        name: "Dickerson",
                        date: "1910-06-20",
                        hobby: "coding",
                        address: "No.1 Century Avenue, Beijing",
                    },
                    {
                        rowKey: 1003,
                        name: "Larsen",
                        date: "2000-07-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Chongqing",
                    },
                    {
                        rowKey: 1004,
                        name: "Geneva",
                        date: "2010-08-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Xiamen",
                    },
                    {
                        rowKey: 1005,
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
`)],-1);function D(e,d,t,i,h,r){const s=o("anchor"),l=o("element-demo0"),c=o("demo-block");return g(),b("section",K,[a(s,{"is-edit":"",label:"斑马纹",fileName:"row-stripe.md"}),a(c,null,{source:u(()=>[a(l)]),highlight:u(()=>[H]),default:u(()=>[S]),_:1})])}const x=y(E,[["render",D]]),R={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:e,createVNode:d,openBlock:t,createElementBlock:i}=w;return function(r,s){const l=e("ve-table");return t(),i("div",null,[d(l,{"row-style-option":r.rowStyleOption,columns:r.columns,"table-data":r.tableData},null,8,["row-style-option","columns","table-data"])])}}(),...function(){return{data(){return{rowStyleOption:{hoverHighlight:!0},columns:[{field:"",key:"a",title:"",width:50,align:"center",renderBodyCell:({row:e,column:d,rowIndex:t},i)=>++t},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},O={class:"content example-md-doc"},V=n("div",null,[n("p",null,"默认行 hover 高亮效果开启")],-1),F=n("pre",null,[n("code",{class:"html"},`<template>
    <div>
        <ve-table :row-style-option="rowStyleOption" :columns="columns" :table-data="tableData" />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                rowStyleOption: {
                    hoverHighlight: true,
                },
                columns: [
                    {
                        field: "",
                        key: "a",
                        title: "",
                        width: 50,
                        align: "center",
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return ++rowIndex;
                        },
                    },
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
                tableData: [
                    {
                        rowKey: 1001,
                        name: "John",
                        date: "1900-05-20",
                        hobby: "coding",
                        address: "No.1 Century Avenue, Shanghai",
                    },
                    {
                        rowKey: 1002,
                        name: "Dickerson",
                        date: "1910-06-20",
                        hobby: "coding",
                        address: "No.1 Century Avenue, Beijing",
                    },
                    {
                        rowKey: 1003,
                        name: "Larsen",
                        date: "2000-07-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Chongqing",
                    },
                    {
                        rowKey: 1004,
                        name: "Geneva",
                        date: "2010-08-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Xiamen",
                    },
                    {
                        rowKey: 1005,
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
`)],-1);function J(e,d,t,i,h,r){const s=o("anchor"),l=o("element-demo0"),c=o("demo-block");return g(),b("section",O,[a(s,{"is-edit":"",label:"行 hover 高亮",fileName:"hover-highlight.md"}),a(c,null,{source:u(()=>[a(l)]),highlight:u(()=>[F]),default:u(()=>[V]),_:1})])}const I=y(R,[["render",J]]),j={name:"component-doc",components:{"element-demo0":{render:function(){const{createElementVNode:e,resolveComponent:d,createVNode:t,openBlock:i,createElementBlock:h}=w,r=e("br",null,null,-1),s=e("br",null,null,-1);return function(c,p){const _=d("ve-table");return i(),h("div",null,[e("button",{class:"button-demo",onClick:p[0]||(p[0]=Q=>c.setHighlightRow(1002))},"选中第2行"),r,s,t(_,{ref:"tableRef","row-style-option":c.rowStyleOption,columns:c.columns,"table-data":c.tableData,"row-key-field-name":"rowKey"},null,8,["row-style-option","columns","table-data"])])}}(),...function(){return{data(){return{rowStyleOption:{clickHighlight:!0},columns:[{field:"",key:"a",title:"",width:50,align:"center",renderBodyCell:({row:e,column:d,rowIndex:t},i)=>++t},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{setHighlightRow(e){this.$refs.tableRef.setHighlightRow({rowKey:e})}}}}()}}},q={class:"content example-md-doc"},z=n("div",null,[n("p",null,[m("1、默认行 click 高亮效果开启。要设置"),n("code",null,"row-key-field-name"),n("br"),m("2、可以通过 "),n("code",null,"setHighlightRow"),m("实例方法设置高亮行")])],-1),G=n("pre",null,[n("code",{class:"html"},`<template>
    <div>
        <button class="button-demo" @click="setHighlightRow(1002)">选中第2行</button>
        <br />
        <br />
        <ve-table
            ref="tableRef"
            :row-style-option="rowStyleOption"
            :columns="columns"
            :table-data="tableData"
            row-key-field-name="rowKey"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                rowStyleOption: {
                    clickHighlight: true,
                },
                columns: [
                    {
                        field: "",
                        key: "a",
                        title: "",
                        width: 50,
                        align: "center",
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return ++rowIndex;
                        },
                    },
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
                tableData: [
                    {
                        rowKey: 1001,
                        name: "John",
                        date: "1900-05-20",
                        hobby: "coding",
                        address: "No.1 Century Avenue, Shanghai",
                    },
                    {
                        rowKey: 1002,
                        name: "Dickerson",
                        date: "1910-06-20",
                        hobby: "coding",
                        address: "No.1 Century Avenue, Beijing",
                    },
                    {
                        rowKey: 1003,
                        name: "Larsen",
                        date: "2000-07-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Chongqing",
                    },
                    {
                        rowKey: 1004,
                        name: "Geneva",
                        date: "2010-08-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Xiamen",
                    },
                    {
                        rowKey: 1005,
                        name: "Jami",
                        date: "2020-09-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Shenzhen",
                    },
                ],
            };
        },
        methods: {
            // set highlight row
            setHighlightRow(rowKey) {
                this.$refs["tableRef"].setHighlightRow({ rowKey: rowKey });
            },
        },
    };
<\/script>
`)],-1);function L(e,d,t,i,h,r){const s=o("anchor"),l=o("element-demo0"),c=o("demo-block");return g(),b("section",q,[a(s,{"is-edit":"",label:"行 click 高亮",fileName:"click-highlight.md"}),a(c,null,{source:u(()=>[a(l)]),highlight:u(()=>[G]),default:u(()=>[z]),_:1})])}const X=y(j,[["render",L]]),P={name:"BasicMain",components:{Explain:$,RowStripe:x,HoverHighlight:I,ClickHighlight:X,API:f}},M=n("h2",null,"行样式",-1);function T(e,d,t,i,h,r){const s=o("Explain"),l=o("RowStripe"),c=o("HoverHighlight"),p=o("ClickHighlight"),_=o("API");return g(),b("div",null,[M,a(s),a(l),a(c),a(p),a(_,{title:"API",anchor:"API",desc:"rowStyleOption 行样式配置"})])}const ee=y(P,[["render",T]]);export{ee as default};
