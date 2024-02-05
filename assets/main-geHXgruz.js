import{C}from"./cell-span-z6fKbPnC.js";import{_ as b,o as h,c as y,g as w,r,a,w as i,m as o,p as c}from"./index-xJshVBOS.js";import{V as f}from"./vue.runtime.esm-bundler-20duM4zf.js";const v={},B={class:"content example-md-doc"},S=w('<div class="tip"><p>1、通过方法<code>cellSpanOption</code>设置合并单元格<br> 2、通过方法<code>bodyCellSpan({row,column,rowIndx})</code>设置 body 单元格合并<br> 3、通过方法<code>footerCellSpan({row,column,rowIndx})</code>设置 footer 单元格合并<br> 4、属性 <code>colspan</code> 指定合并的列数；属性 <code>rowspan</code> 指定合并的行数<br> 5、为实现功能，需要指定不需要渲染的列，设置<code>colspan</code>、 <code>rowspan</code> 的值为 0 即可<br> 6、默认合并后的内容，是渲染的单元格的内容。若要自定义单元格内容，可以结合<code>renderBodyCell({row,column,rowIndex},h)</code>实现<br> 7、具体见下面的示例</p></div>',1),k=[S];function N(t,n){return h(),y("section",B,k)}const A=b(v,[["render",N]]),$={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:t,openBlock:n,createBlock:e}=f;return function(d,m){const l=t("ve-table");return n(),e(l,{columns:d.columns,"table-data":d.tableData,"border-around":!0,"border-x":!0,"border-y":!0,"cell-span-option":d.cellSpanOption},null,8,["columns","table-data","cell-span-option"])}}(),...function(){return{data(){return{cellSpanOption:{bodyCellSpan:this.bodyCellSpan},columns:[{field:"name",key:"a",title:"Name",width:200,align:"center"},{field:"date",key:"b",title:"Date",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:200,align:"right"},{field:"address",key:"d",title:"Address",width:""}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{bodyCellSpan({row:t,column:n,rowIndex:e}){if(e===1){if(n.field==="date")return{rowspan:1,colspan:2};if(n.field==="hobby")return{rowspan:0,colspan:0}}}}}}()}}},x={class:"content example-md-doc"},D=o("div",null,[o("p",null,[c("设置第 2 行"),o("code",null,"date"),c("列和"),o("code",null,"hoby"),c("列合并。 同时需要指定第 2 行"),o("code",null,"hoby"),c("列不渲染")])],-1),E=o("pre",null,[o("code",{class:"html"},`<template>
    <ve-table
        :columns="columns"
        :table-data="tableData"
        :border-around="true"
        :border-x="true"
        :border-y="true"
        :cell-span-option="cellSpanOption"
    />
</template>

<script>
    export default {
        data() {
            return {
                cellSpanOption: {
                    bodyCellSpan: this.bodyCellSpan,
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
            // body cell span
            bodyCellSpan({ row, column, rowIndex }) {
                if (rowIndex === 1) {
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
        },
    };
<\/script>
`)],-1);function I(t,n,e,s,d,m){const l=r("anchor"),u=r("element-demo0"),p=r("demo-block");return h(),y("section",x,[a(l,{"is-edit":"",label:"body 列合并",fileName:"body-colspan.md"}),a(p,null,{source:i(()=>[a(u)]),highlight:i(()=>[E]),default:i(()=>[D]),_:1})])}const O=b($,[["render",I]]),J={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:t,openBlock:n,createBlock:e}=f;return function(d,m){const l=t("ve-table");return n(),e(l,{columns:d.columns,"table-data":d.tableData,"border-around":!0,"border-x":!0,"border-y":!0,"cell-span-option":d.cellSpanOption},null,8,["columns","table-data","cell-span-option"])}}(),...function(){return{data(){return{cellSpanOption:{bodyCellSpan:this.bodyCellSpan},columns:[{field:"name",key:"a",title:"Name",width:200,align:"center"},{field:"date",key:"b",title:"Date",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:200,align:"right"},{field:"address",key:"d",title:"Address",width:""}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{bodyCellSpan({row:t,column:n,rowIndex:e}){if(n.field==="name"){if(e===1)return{rowspan:2,colspan:1};if(e===2)return{rowspan:0,colspan:0}}}}}}()}}},F={class:"content example-md-doc"},j=o("div",null,[o("p",null,[c("设置"),o("code",null,"name"),c("列，第 2 和 3 行合并。 同时需要指定"),o("code",null,"name"),c("列第 3 行不渲染")])],-1),q=o("pre",null,[o("code",{class:"html"},`<template>
    <ve-table
        :columns="columns"
        :table-data="tableData"
        :border-around="true"
        :border-x="true"
        :border-y="true"
        :cell-span-option="cellSpanOption"
    />
</template>

<script>
    export default {
        data() {
            return {
                cellSpanOption: {
                    bodyCellSpan: this.bodyCellSpan,
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
            // body cell span
            bodyCellSpan({ row, column, rowIndex }) {
                if (column.field === "name") {
                    if (rowIndex === 1) {
                        return {
                            rowspan: 2,
                            colspan: 1,
                        };
                    }
                    // does not need to be rendered
                    else if (rowIndex === 2) {
                        return {
                            rowspan: 0,
                            colspan: 0,
                        };
                    }
                }
            },
        },
    };
<\/script>
`)],-1);function z(t,n,e,s,d,m){const l=r("anchor"),u=r("element-demo0"),p=r("demo-block");return h(),y("section",F,[a(l,{"is-edit":"",label:"body 行合并",fileName:"body-rowspan.md"}),a(p,null,{source:i(()=>[a(u)]),highlight:i(()=>[q]),default:i(()=>[j]),_:1})])}const G=b(J,[["render",z]]),H={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:t,openBlock:n,createBlock:e}=f;return function(d,m){const l=t("ve-table");return n(),e(l,{columns:d.columns,"table-data":d.tableData,"border-around":!0,"border-x":!0,"border-y":!0,"cell-span-option":d.cellSpanOption},null,8,["columns","table-data","cell-span-option"])}}(),...function(){return{data(){return{cellSpanOption:{bodyCellSpan:this.bodyCellSpan},columns:[{field:"name",key:"a",title:"Name",width:200,align:"center",renderBodyCell:({row:t,column:n,rowIndex:e},s)=>n.field==="name"&&e===1?a("span",{style:"color:#1890ff;"},[c("this is custom content")]):t[n.field]},{field:"date",key:"b",title:"Date",width:200,align:"left",renderBodyCell:({row:t,column:n,rowIndex:e},s)=>e===1&&n.field==="date"?a("span",{style:"color:#1890ff;"},[c("this is custom content")]):t[n.field]},{field:"hobby",key:"c",title:"Hobby",width:200,align:"right"},{field:"address",key:"d",title:"Address",width:""}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{bodyCellSpan({row:t,column:n,rowIndex:e}){if(e===1){if(n.field==="date")return{rowspan:1,colspan:2};if(n.field==="hobby")return{rowspan:0,colspan:0}}if(n.field==="name"){if(e===1)return{rowspan:2,colspan:1};if(e===2)return{rowspan:0,colspan:0}}}}}}()}}},L={class:"content example-md-doc"},V=o("div",null,[o("p",null,[c("结合"),o("code",null,"renderBodyCell({row,column,rowIndex},h)"),c("可以实现自定义合并后的内容")])],-1),X=o("pre",null,[o("code",{class:"html"},`<template>
    <ve-table
        :columns="columns"
        :table-data="tableData"
        :border-around="true"
        :border-x="true"
        :border-y="true"
        :cell-span-option="cellSpanOption"
    />
</template>

<script>
    export default {
        data() {
            return {
                cellSpanOption: {
                    bodyCellSpan: this.bodyCellSpan,
                },
                columns: [
                    {
                        field: "name",
                        key: "a",
                        title: "Name",
                        width: 200,
                        align: "center",
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            if (column.field === "name") {
                                if (rowIndex === 1) {
                                    return (
                                        <span style="color:#1890ff;">this is custom content</span>
                                    );
                                }
                            }

                            return row[column.field];
                        },
                    },
                    {
                        field: "date",
                        key: "b",
                        title: "Date",
                        width: 200,
                        align: "left",
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            if (rowIndex === 1) {
                                if (column.field === "date") {
                                    return (
                                        <span style="color:#1890ff;">this is custom content</span>
                                    );
                                }
                            }

                            return row[column.field];
                        },
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
            // body cell span
            bodyCellSpan({ row, column, rowIndex }) {
                // colspan
                if (rowIndex === 1) {
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

                // rowspan
                if (column.field === "name") {
                    if (rowIndex === 1) {
                        return {
                            rowspan: 2,
                            colspan: 1,
                        };
                    }
                    // does not need to be rendered
                    else if (rowIndex === 2) {
                        return {
                            rowspan: 0,
                            colspan: 0,
                        };
                    }
                }
            },
        },
    };
<\/script>
`)],-1);function R(t,n,e,s,d,m){const l=r("anchor"),u=r("element-demo0"),p=r("demo-block");return h(),y("section",L,[a(l,{"is-edit":"",label:"自定义合并内容",fileName:"custom-content.md"}),a(p,null,{source:i(()=>[a(u)]),highlight:i(()=>[X]),default:i(()=>[V]),_:1})])}const T=b(H,[["render",R]]),K={name:"CellSpan",components:{Explain:A,BodyColspan:O,BodyRowspan:G,FooterCellSpan:C,CustomContent:T}},M=o("h2",null,"单元格合并",-1);function P(t,n,e,s,d,m){const l=r("Explain"),u=r("BodyColspan"),p=r("BodyRowspan"),g=r("FooterCellSpan"),_=r("CustomContent");return h(),y("div",null,[M,a(l),a(u),a(p),a(g),a(_)])}const Y=b(K,[["render",P]]);export{Y as default};
