import{C as v}from"./cell-style-J6QPc3a3.js";import{C as F}from"./cell-style-option-props-wwwBJA6z.js";import{_ as b,o as p,c as h,g as A,r as l,a as t,w as s,m as e,p as u}from"./index-BxRg2T26.js";import{V as f}from"./vue.runtime.esm-bundler-Tv19svLr.js";import"./api-tpl-Z63SnkFF.js";const w={},D={class:"content example-md-doc"},B=A('<div class="tip"><p>1、通过配置对象<code>cellStyleOption</code>设置单元格的样式<br> 2、回调函数属性<code>bodyCellClass({ row, column, rowIndex })</code>设置符合条件的表体单元格 class<br> 3、回调函数属性<code>headerCellClass({column, rowIndex})</code>设置符合条件的表头单元格 class<br> 4、回调函数属性<code>footerCellClass({row,column, rowIndex})</code>设置符合条件的 footer 单元格 class<br> 5、<code>&lt;style&gt;</code>标签不可以使用<code>scoped</code>属性<br> 6、当然你也可以通过<code>renderBodyCell</code>、<code>renderHeaderCell</code>、<code>renderFooterCell</code>等实现单元格样式的自定义功能</p></div>',1),S=[B];function N(c,n){return p(),h("section",D,S)}const $=b(w,[["render",N]]),E={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:c,openBlock:n,createBlock:d}=f;return function(o,y){const a=c("ve-table");return n(),d(a,{columns:o.columns,"table-data":o.tableData,"cell-style-option":o.cellStyleOption},null,8,["columns","table-data","cell-style-option"])}}(),...function(){return{data(){return{cellStyleOption:{bodyCellClass:({row:c,column:n,rowIndex:d})=>{if(n.field==="hobby")return"table-body-cell-class1";if(n.field==="name"&&d===2)return"table-body-cell-class2"}},columns:[{field:"name",key:"a",title:"Name",align:"left"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},x={class:"content example-md-doc"},I=e("div",null,[e("p",null,[u("1、回调函数"),e("code",null,"bodyCellClass({ row, column, rowIndex })"),u("接收 3 个参数，row：当前行数据、column：当前列配置、rowIndex：行索引"),e("br"),u("2、将符合条件的单元格返回指定的 class 名称。class 名称自定义"),e("br"),u("3、如果需要给单元格设置背景色或字体颜色需要加上"),e("code",null,"!important")])],-1),O=e("pre",null,[e("code",{class:"html"},`<template>
    <ve-table :columns="columns" :table-data="tableData" :cell-style-option="cellStyleOption" />
</template>

<style>
    .table-body-cell-class1 {
        background: #91d5ff !important;
        color: #fff !important;
    }

    .table-body-cell-class2 {
        background: orange !important;
        color: #fff !important;
    }
</style>

<script>
    export default {
        data() {
            return {
                cellStyleOption: {
                    bodyCellClass: ({ row, column, rowIndex }) => {
                        if (column.field === "hobby") {
                            return "table-body-cell-class1";
                        }

                        if (column.field === "name" && rowIndex === 2) {
                            return "table-body-cell-class2";
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
                tableData: [
                    {
                        name: "John",
                        date: "1900-05-20",
                        hobby: "coding",
                        address: "No.1 Century Avenue, Shanghai",
                    },
                    {
                        name: "Dickerson",
                        date: "1910-06-20",
                        hobby: "coding",
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
    };
<\/script>
`)],-1);function H(c,n,d,m,o,y){const a=l("anchor"),i=l("element-demo0"),r=l("demo-block");return p(),h("section",x,[t(a,{"is-edit":"",label:"表体单元格样式",fileName:"body-cell-style.md"}),t(r,null,{source:s(()=>[t(i)]),highlight:s(()=>[O]),default:s(()=>[I]),_:1})])}const J=b(E,[["render",H]]),R={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:c,openBlock:n,createBlock:d}=f;return function(o,y){const a=c("ve-table");return n(),d(a,{columns:o.columns,"table-data":o.tableData,"cell-style-option":o.cellStyleOption},null,8,["columns","table-data","cell-style-option"])}}(),...function(){return{data(){return{cellStyleOption:{bodyCellClass:({row:c,column:n,rowIndex:d})=>{if(d===2)return"table-body-cell-class"}},columns:[{field:"name",key:"a",title:"Name",align:"left"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},j={class:"content example-md-doc"},q=e("div",null,[e("p",null,[u("1、行样式，仍然可以通过"),e("code",null,"bodyCellClass({ row, column, rowIndex })"),u("实现")])],-1),z=e("pre",null,[e("code",{class:"html"},`<template>
    <ve-table :columns="columns" :table-data="tableData" :cell-style-option="cellStyleOption" />
</template>

<style>
    .table-body-cell-class {
        background: #91d5ff !important;
        color: #fff !important;
    }
</style>

<script>
    export default {
        data() {
            return {
                cellStyleOption: {
                    bodyCellClass: ({ row, column, rowIndex }) => {
                        if (rowIndex === 2) {
                            return "table-body-cell-class";
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
                tableData: [
                    {
                        name: "John",
                        date: "1900-05-20",
                        hobby: "coding",
                        address: "No.1 Century Avenue, Shanghai",
                    },
                    {
                        name: "Dickerson",
                        date: "1910-06-20",
                        hobby: "coding",
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
    };
<\/script>
`)],-1);function G(c,n,d,m,o,y){const a=l("anchor"),i=l("element-demo0"),r=l("demo-block");return p(),h("section",j,[t(a,{"is-edit":"",label:"表体行样式",fileName:"body-row-style.md"}),t(r,null,{source:s(()=>[t(i)]),highlight:s(()=>[z]),default:s(()=>[q]),_:1})])}const L=b(R,[["render",G]]),V={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:c,openBlock:n,createBlock:d}=f;return function(o,y){const a=c("ve-table");return n(),d(a,{columns:o.columns,"table-data":o.tableData,"cell-style-option":o.cellStyleOption},null,8,["columns","table-data","cell-style-option"])}}(),...function(){return{data(){return{cellStyleOption:{headerCellClass:({column:c,rowIndex:n})=>{if(c.field==="hobby")return"table-header-cell-class"}},columns:[{field:"name",key:"a",title:"Name",align:"left"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},X={class:"content example-md-doc"},P=e("div",null,[e("p",null,[u("1、回调函数"),e("code",null,"headerCellClass({ column, rowIndex })"),u("接收 2 个参数，column：当前列配置、rowIndex：表头行索引"),e("br"),u("2、将符合条件的单元格返回指定的 class 名称。class 名称自定义"),e("br"),u("3、如果需要给单元格设置背景色或字体颜色需要加上"),e("code",null,"!important")])],-1),T=e("pre",null,[e("code",{class:"html"},`<template>
    <ve-table :columns="columns" :table-data="tableData" :cell-style-option="cellStyleOption" />
</template>

<style>
    .table-header-cell-class {
        background: orange !important;
        color: #fff !important;
    }
</style>

<script>
    export default {
        data() {
            return {
                cellStyleOption: {
                    headerCellClass: ({ column, rowIndex }) => {
                        if (column.field === "hobby") {
                            return "table-header-cell-class";
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
                tableData: [
                    {
                        name: "John",
                        date: "1900-05-20",
                        hobby: "coding",
                        address: "No.1 Century Avenue, Shanghai",
                    },
                    {
                        name: "Dickerson",
                        date: "1910-06-20",
                        hobby: "coding",
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
    };
<\/script>
`)],-1);function K(c,n,d,m,o,y){const a=l("anchor"),i=l("element-demo0"),r=l("demo-block");return p(),h("section",X,[t(a,{"is-edit":"",label:"表头单元格样式",fileName:"header-cell-style.md"}),t(r,null,{source:s(()=>[t(i)]),highlight:s(()=>[T]),default:s(()=>[P]),_:1})])}const M=b(V,[["render",K]]),Q={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:c,openBlock:n,createBlock:d}=f;return function(o,y){const a=c("ve-table");return n(),d(a,{columns:o.columns,"table-data":o.tableData,"cell-style-option":o.cellStyleOption},null,8,["columns","table-data","cell-style-option"])}}(),...function(){return{data(){return{cellStyleOption:{headerCellClass:({column:c,rowIndex:n})=>{if(n===0)return"table-header-cell-class"}},columns:[{field:"col1",key:"a",title:"col1",width:"10%"},{title:"col2-col3",children:[{field:"col2",key:"b",title:"col2",width:100},{field:"col3",key:"c",title:"col3",width:110}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"d",title:"col4",width:130},{field:"col5",key:"e",title:"col5",width:140}]},{title:"col6",field:"col6",key:"f",width:140}]},{field:"col7",key:"g",title:"col7",width:150},{field:"col8",key:"h",title:"col8",width:160}],tableData:[{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8"}]}}}}()}}},U={class:"content example-md-doc"},W=e("div",null,[e("p",null,[u("1、表头行样式，仍然可以通过 "),e("code",null,"headerCellClass({ column, rowIndex })"),u("实现")])],-1),Y=e("pre",null,[e("code",{class:"html"},`<template>
    <ve-table :columns="columns" :table-data="tableData" :cell-style-option="cellStyleOption" />
</template>

<style>
    .table-header-cell-class {
        background: #91d5ff !important;
        color: #fff !important;
    }
</style>

<script>
    export default {
        data() {
            return {
                cellStyleOption: {
                    headerCellClass: ({ column, rowIndex }) => {
                        if (rowIndex === 0) {
                            return "table-header-cell-class";
                        }
                    },
                },
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
                tableData: [
                    {
                        col1: "1",
                        col2: "2",
                        col3: "3",
                        col4: "4",
                        col5: "5",
                        col6: "6",
                        col7: "7",
                        col8: "8",
                    },
                    {
                        col1: "1",
                        col2: "2",
                        col3: "3",
                        col4: "4",
                        col5: "5",
                        col6: "6",
                        col7: "7",
                        col8: "8",
                    },
                    {
                        col1: "1",
                        col2: "2",
                        col3: "3",
                        col4: "4",
                        col5: "5",
                        col6: "6",
                        col7: "7",
                        col8: "8",
                    },
                    {
                        col1: "1",
                        col2: "2",
                        col3: "3",
                        col4: "4",
                        col5: "5",
                        col6: "6",
                        col7: "7",
                        col8: "8",
                    },
                    {
                        col1: "1",
                        col2: "2",
                        col3: "3",
                        col4: "4",
                        col5: "5",
                        col6: "6",
                        col7: "7",
                        col8: "8",
                    },
                ],
            };
        },
    };
<\/script>
`)],-1);function Z(c,n,d,m,o,y){const a=l("anchor"),i=l("element-demo0"),r=l("demo-block");return p(),h("section",U,[t(a,{"is-edit":"",label:"表头行样式",fileName:"header-row-style.md"}),t(r,null,{source:s(()=>[t(i)]),highlight:s(()=>[Y]),default:s(()=>[W]),_:1})])}const ee=b(Q,[["render",Z]]),ne={name:"CustomCell",components:{Explain:$,BodyCellStyle:J,BodyRowStyle:L,HeaderCellStyle:M,HeaderRowStyle:ee,FooterRowStyle:v,API:F}},oe=e("h2",null,"单元格样式",-1);function le(c,n,d,m,o,y){const a=l("Explain"),i=l("BodyCellStyle"),r=l("BodyRowStyle"),_=l("HeaderCellStyle"),C=l("HeaderRowStyle"),g=l("FooterRowStyle"),k=l("API");return p(),h("div",null,[oe,t(a),t(i),t(r),t(_),t(C),t(g),t(k,{title:"API",anchor:"API",desc:"cellStyleOption 单元格样式配置"})])}const se=b(ne,[["render",le]]);export{se as default};
