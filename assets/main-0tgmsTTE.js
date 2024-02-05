import{c as y}from"./clipboard-option-props-Ytcx7GlU.js";import{_ as d,o as p,c as u,m as c,r as l,a,g as _,w as h}from"./index-xJshVBOS.js";import{V as b}from"./vue.runtime.esm-bundler-20duM4zf.js";import"./api-tpl-4ZsYqKyP.js";const x={},C={class:"content example-md-doc"},R=c("div",{class:"tip"},[c("p",null,"1、你可以像 excle 那样，选中单元格并批量的复制、粘贴、剪切、删除操作")],-1),w=[R];function $(t,e){return p(),u("section",C,w)}const I=d(x,[["render",$]]),k={},O={class:"content example-md-doc"},K=_('<p>剪贴板功能以下快捷键（参考 excel 快捷键）：</p><table class="example-table"><thead><tr><th style="text-align:left;">功能</th><th style="text-align:left;">快捷键</th></tr></thead><tbody><tr><td style="text-align:left;">复制区域单元格内容</td><td style="text-align:left;"><code>Ctrl</code> + <code>C</code></td></tr><tr><td style="text-align:left;">粘贴（支持 excel 内容格式）</td><td style="text-align:left;"><code>Ctrl</code> + <code>V</code></td></tr><tr><td style="text-align:left;">剪切区域单元格内容</td><td style="text-align:left;"><code>Ctrl</code> + <code>X</code></td></tr><tr><td style="text-align:left;">删除区域单元格内容</td><td style="text-align:left;"><code>Delete</code></td></tr></tbody></table>',2);function D(t,e){const o=l("anchor");return p(),u("section",O,[a(o,{"is-edit":"",label:"快捷键",fileName:"shortcuts.md"}),K])}const v=d(k,[["render",D]]),B={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:t,createVNode:e,openBlock:o,createElementBlock:s}=b;return function(n,r){const i=t("ve-table");return o(),s("div",null,[e(i,{"max-height":350,columns:n.columns,"table-data":n.tableData,borderY:"",rowStyleOption:n.rowStyleOption,"cell-autofill-option":n.cellAutofillOption,"edit-option":n.editOption,"row-key-field-name":"rowKey","clipboard-option":n.clipboardOption,"virtual-scroll-option":n.virtualScrollOption},null,8,["columns","table-data","rowStyleOption","cell-autofill-option","edit-option","clipboard-option","virtual-scroll-option"])])}}(),...function(){return{data(){return{rowStyleOption:{clickHighlight:!1,hoverHighlight:!1},clipboardOption:{copy:!0,paste:!0,cut:!0,delete:!0,beforeCopy:({data:t,selectionRangeIndexes:e,selectionRangeKeys:o})=>{console.log("beforeCopy"),this.log({data:t,selectionRangeIndexes:e,selectionRangeKeys:o})},afterCopy:({data:t,selectionRangeIndexes:e,selectionRangeKeys:o})=>{console.log("afterCopy"),this.log({data:t,selectionRangeIndexes:e,selectionRangeKeys:o})},beforePaste:({data:t,selectionRangeIndexes:e,selectionRangeKeys:o})=>{console.log("beforePaste"),this.log({data:t,selectionRangeIndexes:e,selectionRangeKeys:o})},afterPaste:({data:t,selectionRangeIndexes:e,selectionRangeKeys:o})=>{console.log("afterPaste"),this.log({data:t,selectionRangeIndexes:e,selectionRangeKeys:o})},beforeCut:({data:t,selectionRangeIndexes:e,selectionRangeKeys:o})=>{console.log("beforeCut"),this.log({data:t,selectionRangeIndexes:e,selectionRangeKeys:o})},afterCut:({data:t,selectionRangeIndexes:e,selectionRangeKeys:o})=>{console.log("afterCut"),this.log({data:t,selectionRangeIndexes:e,selectionRangeKeys:o})},beforeDelete:({data:t,selectionRangeIndexes:e,selectionRangeKeys:o})=>{console.log("beforeDelete"),this.log({data:t,selectionRangeIndexes:e,selectionRangeKeys:o})},afterDelete:({data:t,selectionRangeIndexes:e,selectionRangeKeys:o})=>{console.log("afterDelete"),this.log({data:t,selectionRangeIndexes:e,selectionRangeKeys:o})}},virtualScrollOption:{enable:!1},cellAutofillOption:!0,editOption:{cellValueChange:({row:t,column:e})=>{}},columns:[{field:"index",key:"index",operationColumn:!0,title:"#",width:35,align:"center",renderBodyCell:({row:t,column:e,rowIndex:o},s)=>++o},{field:"col1",key:"col1",title:"Col1",edit:!0,width:150},{field:"col2",key:"col2",title:"Col2",edit:!0,width:150},{field:"col3",key:"col3",title:"Col3",edit:!0,width:150},{field:"col4",key:"col4",title:"Col4",edit:!0,width:150},{field:"col5",key:"col5",title:"Col5",edit:!0,width:150},{field:"col6",key:"col6",title:"Col6",edit:!0,width:150}],tableData:[]}},methods:{initTableData(){let t=[];for(let e=0;e<100;e++)t.push({rowKey:`row${e}`,col1:`A${e+1}`,col2:`B${e+1}`,col3:`C${e+1}`,col4:`D${e+1}`,col5:`E${e+1}`,col6:`F${e+1}`,col7:`G${e+1}`,col8:`H${e+1}`});this.tableData=t},log({data:t,selectionRangeIndexes:e,selectionRangeKeys:o}){console.log("data::",t),console.log("selectionRangeIndexes::",e),console.log("selectionRangeKeys::",o)}},created(){this.initTableData()}}}()}}},S={class:"content example-md-doc"},P=c("pre",null,[c("code",{class:"html"},`<template>
    <div>
        <ve-table
            :max-height="350"
            :columns="columns"
            :table-data="tableData"
            borderY
            :rowStyleOption="rowStyleOption"
            :cell-autofill-option="cellAutofillOption"
            :edit-option="editOption"
            row-key-field-name="rowKey"
            :clipboard-option="clipboardOption"
            :virtual-scroll-option="virtualScrollOption"
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
                // clipboard option
                clipboardOption: {
                    copy: true,
                    paste: true,
                    cut: true,
                    delete: true,
                    beforeCopy: ({ data, selectionRangeIndexes, selectionRangeKeys }) => {
                        console.log("beforeCopy");
                        this.log({ data, selectionRangeIndexes, selectionRangeKeys });
                    },
                    afterCopy: ({ data, selectionRangeIndexes, selectionRangeKeys }) => {
                        console.log("afterCopy");
                        this.log({ data, selectionRangeIndexes, selectionRangeKeys });
                    },
                    beforePaste: ({ data, selectionRangeIndexes, selectionRangeKeys }) => {
                        console.log("beforePaste");
                        this.log({ data, selectionRangeIndexes, selectionRangeKeys });
                    },
                    afterPaste: ({ data, selectionRangeIndexes, selectionRangeKeys }) => {
                        console.log("afterPaste");
                        this.log({ data, selectionRangeIndexes, selectionRangeKeys });
                    },
                    beforeCut: ({ data, selectionRangeIndexes, selectionRangeKeys }) => {
                        console.log("beforeCut");
                        this.log({ data, selectionRangeIndexes, selectionRangeKeys });
                    },
                    afterCut: ({ data, selectionRangeIndexes, selectionRangeKeys }) => {
                        console.log("afterCut");
                        this.log({ data, selectionRangeIndexes, selectionRangeKeys });
                    },
                    beforeDelete: ({ data, selectionRangeIndexes, selectionRangeKeys }) => {
                        console.log("beforeDelete");
                        this.log({ data, selectionRangeIndexes, selectionRangeKeys });
                    },
                    afterDelete: ({ data, selectionRangeIndexes, selectionRangeKeys }) => {
                        console.log("afterDelete");
                        this.log({ data, selectionRangeIndexes, selectionRangeKeys });
                    },
                },
                virtualScrollOption: {
                    // 是否开启
                    enable: false,
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
                        title: "#",
                        width: 35,
                        align: "center",
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return ++rowIndex;
                        },
                    },
                    { field: "col1", key: "col1", title: "Col1", edit: true, width: 150 },
                    { field: "col2", key: "col2", title: "Col2", edit: true, width: 150 },
                    { field: "col3", key: "col3", title: "Col3", edit: true, width: 150 },
                    { field: "col4", key: "col4", title: "Col4", edit: true, width: 150 },
                    { field: "col5", key: "col5", title: "Col5", edit: true, width: 150 },
                    { field: "col6", key: "col6", title: "Col6", edit: true, width: 150 },
                ],
                tableData: [],
            };
        },
        methods: {
            initTableData() {
                let data = [];
                for (let i = 0; i < 100; i++) {
                    data.push({
                        rowKey: \`row\${i}\`,
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
            log({ data, selectionRangeIndexes, selectionRangeKeys }) {
                console.log("data::", data);
                console.log("selectionRangeIndexes::", selectionRangeIndexes);
                console.log("selectionRangeKeys::", selectionRangeKeys);
            },
        },
        created() {
            this.initTableData();
        },
    };
<\/script>
`)],-1);function A(t,e,o,s,f,n){const r=l("anchor"),i=l("element-demo0"),g=l("demo-block");return p(),u("section",S,[a(r,{"is-edit":"",label:"基础功能",fileName:"base.md"}),a(g,null,{source:h(()=>[a(i)]),highlight:h(()=>[P]),_:1})])}const V=d(B,[["render",A]]),E={name:"BasicMain",components:{Explain:I,ShortCuts:v,Base:V,API:y}},F=c("h2",null,"剪贴板",-1);function N(t,e,o,s,f,n){const r=l("Explain"),i=l("ShortCuts"),g=l("Base"),m=l("API");return p(),u("div",null,[F,a(r),a(i),a(g),a(m,{title:"API",anchor:"API",desc:"clipboardOption 剪贴板配置"})])}const M=d(E,[["render",N]]);export{M as default};
