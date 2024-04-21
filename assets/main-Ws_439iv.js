import{_ as u,o as p,c as m,m as t,p as i,r as a,a as r,w as f}from"./index-UgqV6vM2.js";import{V as $}from"./vue.runtime.esm-bundler-KaaX9MVw.js";const y={},b={class:"content example-md-doc"},C=t("div",{class:"tip"},[t("p",null,[i("1、通过在 columns 设置 "),t("code",null,"operationColumn=true"),i(" 作为操作列 "),t("br"),i(" 2、操作列默认左固定 "),t("br"),i(" 3、操作列支持行多选、整行复制、整行剪切、行位置交换（开发中）等行操作。此列功能类似 excel 的操作列功能"),t("br"),i(" 4、操作列的单元格不允许单元格选择、不允许单元格编辑、不允许单元格自动填充")])],-1),k=[C];function w(n,e){return p(),m("section",b,k)}const O=u(y,[["render",w]]),x={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:n,createVNode:e,openBlock:l,createElementBlock:d}=$;return function(o,s){const c=n("ve-table");return l(),d("div",null,[e(c,{columns:o.columns,"table-data":o.tableData,borderY:"","cell-autofill-option":o.cellAutofillOption,editOption:o.editOption,rowKeyFieldName:"rowKey",rowStyleOption:o.rowStyleOption},null,8,["columns","table-data","cell-autofill-option","editOption","rowStyleOption"])])}}(),...function(){return{data(){return{rowStyleOption:{clickHighlight:!1,hoverHighlight:!1},cellAutofillOption:!0,editOption:{cellValueChange:({row:n,column:e})=>{}},columns:[{field:"index",key:"index",operationColumn:!0,title:"",width:50,align:"center",renderBodyCell:({row:n,column:e,rowIndex:l},d)=>++l,edit:!0},{field:"col1",key:"col1",title:"Col1",edit:!0},{field:"col2",key:"col2",title:"Col2"},{field:"col3",key:"col3",title:"Col3"},{field:"col4",key:"col4",title:"Col4"},{field:"col5",key:"col5",title:"Col5"},{field:"col6",key:"col6",title:"Col6"}],tableData:[]}},methods:{initTableData(){let n=[];for(let e=0;e<8;e++)n.push({rowKey:e,col1:`A${e+1}`,col2:`B${e+1}`,col3:`C${e+1}`,col4:`D${e+1}`,col5:`E${e+1}`,col6:`F${e+1}`,col7:`G${e+1}`,col8:`H${e+1}`});this.tableData=n}},created(){this.initTableData()}}}()}}},g={class:"content example-md-doc"},B=t("pre",null,[t("code",{class:"html"},`<template>
    <div>
        <ve-table
            :columns="columns"
            :table-data="tableData"
            borderY
            :cell-autofill-option="cellAutofillOption"
            :editOption="editOption"
            rowKeyFieldName="rowKey"
            :rowStyleOption="rowStyleOption"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                rowStyleOption: {
                    clickHighlight: false,
                    hoverHighlight: false,
                },
                cellAutofillOption: true,
                editOption: {
                    // cell value change
                    cellValueChange: ({ row, column }) => {},
                },
                columns: [
                    {
                        field: "index",
                        key: "index",
                        operationColumn: true,
                        title: "",
                        width: 50,
                        align: "center",
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return ++rowIndex;
                        },
                        edit: true,
                    },
                    { field: "col1", key: "col1", title: "Col1", edit: true },
                    { field: "col2", key: "col2", title: "Col2" },
                    { field: "col3", key: "col3", title: "Col3" },
                    { field: "col4", key: "col4", title: "Col4" },
                    { field: "col5", key: "col5", title: "Col5" },
                    { field: "col6", key: "col6", title: "Col6" },
                ],
                tableData: [],
            };
        },
        methods: {
            initTableData() {
                let data = [];
                for (let i = 0; i < 8; i++) {
                    data.push({
                        rowKey: i,
                        col1: \`A\${i + 1}\`,
                        col2: \`B\${i + 1}\`,
                        col3: \`C\${i + 1}\`,
                        col4: \`D\${i + 1}\`,
                        col5: \`E\${i + 1}\`,
                        col6: \`F\${i + 1}\`,
                        col7: \`G\${i + 1}\`,
                        col8: \`H\${i + 1}\`,
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
`)],-1);function v(n,e,l,d,_,o){const s=a("anchor"),c=a("element-demo0"),h=a("demo-block");return p(),m("section",g,[r(s,{"is-edit":"",label:"基础功能",fileName:"base.md"}),r(h,null,{source:f(()=>[r(c)]),highlight:f(()=>[B]),_:1})])}const D=u(x,[["render",v]]),V={name:"BasicMain",components:{Explain:O,Base:D}},E=t("h2",null,"操作列",-1);function N(n,e,l,d,_,o){const s=a("Explain"),c=a("Base");return p(),m("div",null,[E,r(s),r(c)])}const S=u(V,[["render",N]]);export{S as default};
