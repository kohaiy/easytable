import{c as A}from"./cell-autofill-option-props-0R_Om15t.js";import{_ as y,o as h,c as m,m as c,r as d,a as i,w as f,d as x,b as _}from"./index-1-5pqjkO.js";import{V as S}from"./vue.runtime.esm-bundler-BRNTKtdd.js";import"./api-tpl-2bea2PZj.js";const D={},O={class:"content example-md-doc"},C=c("div",{class:"tip"},[c("p",null,"当存在需要重复拷贝的数据，你可以像 excel 那样进行单元格内容的自动填充")],-1),v=[C];function B(l,e){return h(),m("section",O,v)}const E=y(D,[["render",B]]),T={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:l,openBlock:e,createBlock:n}=S;return function(o,p){const a=l("ve-table");return e(),n(a,{"fixed-header":"","scroll-width":1600,"max-height":500,"border-y":"",columns:o.columns,"table-data":o.tableData,rowKeyFieldName:"rowKey","virtual-scroll-option":o.virtualScrollOption,"cell-autofill-option":o.cellAutofillOption,rowStyleOption:o.rowStyleOption},null,8,["columns","table-data","virtual-scroll-option","cell-autofill-option","rowStyleOption"])}}(),...function(){return{data(){return{rowStyleOption:{clickHighlight:!1,hoverHighlight:!1},virtualScrollOption:{enable:!0},cellAutofillOption:{directionX:!0,directionY:!0,beforeAutofill:({direction:l,sourceSelectionRangeIndexes:e,targetSelectionRangeIndexes:n,sourceSelectionData:t,targetSelectionData:o})=>{console.log("direction::",l),console.log("sourceSelectionRangeIndexes::",e),console.log("targetSelectionRangeIndexes::",n),console.log("sourceSelectionData::",t),console.log("targetSelectionData::",o),console.log("---")},afterAutofill:({direction:l,sourceSelectionRangeIndexes:e,targetSelectionRangeIndexes:n,sourceSelectionData:t,targetSelectionData:o})=>{console.log("direction::",l),console.log("sourceSelectionRangeIndexes::",e),console.log("targetSelectionRangeIndexes::",n),console.log("sourceSelectionData::",t),console.log("targetSelectionData::",o),console.log("---")}},columns:[{field:"index",key:"index",operationColumn:!0,title:"#",width:15,fixed:"left"},{field:"col1",key:"a",title:"col1",width:50,fixed:"left"},{title:"col2-col3",fixed:"left",children:[{field:"col2",key:"b",title:"col2",width:50},{field:"col3",key:"col3",title:"col3",width:30}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"col4",title:"col4",width:110},{field:"col5",key:"col5",title:"col5",width:120}]},{title:"col6",field:"col6",key:"col6",width:130}]},{title:"col7",fixed:"right",children:[{title:"col7-1",field:"col7",key:"col7",width:50}]}],tableData:[]}},methods:{initTableData(){let l=[];for(let e=0;e<100;e++)l.push({rowKey:e,index:e+1,col1:`A${e+1}`,col2:`B${e+1}`,col3:`C${e+1}`,col4:`D${e+1}`,col5:`E${e+1}`,col6:`F${e+1}`,col7:`G${e+1}`});this.tableData=l}},created(){this.initTableData()}}}()}}},V={class:"content example-md-doc"},I=c("pre",null,[c("code",{class:"html"},`<template>
    <ve-table
        fixed-header
        :scroll-width="1600"
        :max-height="500"
        border-y
        :columns="columns"
        :table-data="tableData"
        rowKeyFieldName="rowKey"
        :virtual-scroll-option="virtualScrollOption"
        :cell-autofill-option="cellAutofillOption"
        :rowStyleOption="rowStyleOption"
    />
</template>

<script>
    export default {
        data() {
            return {
                rowStyleOption: {
                    clickHighlight: false,
                    hoverHighlight: false,
                },
                virtualScrollOption: {
                    // 是否开启
                    enable: true,
                },
                cellAutofillOption: {
                    directionX: true,
                    directionY: true,
                    beforeAutofill: ({
                        direction,
                        sourceSelectionRangeIndexes,
                        targetSelectionRangeIndexes,
                        sourceSelectionData,
                        targetSelectionData,
                    }) => {
                        console.log("direction::", direction);
                        console.log("sourceSelectionRangeIndexes::", sourceSelectionRangeIndexes);
                        console.log("targetSelectionRangeIndexes::", targetSelectionRangeIndexes);
                        console.log("sourceSelectionData::", sourceSelectionData);
                        console.log("targetSelectionData::", targetSelectionData);
                        console.log("---");
                    },
                    afterAutofill: ({
                        direction,
                        sourceSelectionRangeIndexes,
                        targetSelectionRangeIndexes,
                        sourceSelectionData,
                        targetSelectionData,
                    }) => {
                        console.log("direction::", direction);
                        console.log("sourceSelectionRangeIndexes::", sourceSelectionRangeIndexes);
                        console.log("targetSelectionRangeIndexes::", targetSelectionRangeIndexes);
                        console.log("sourceSelectionData::", sourceSelectionData);
                        console.log("targetSelectionData::", targetSelectionData);
                        console.log("---");
                    },
                },
                columns: [
                    {
                        field: "index",
                        key: "index",
                        // is operation column
                        operationColumn: true,
                        title: "#",
                        width: 15,
                        fixed: "left",
                    },
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
                                key: "col3",
                                title: "col3",
                                width: 30,
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
                                        key: "col4",
                                        title: "col4",
                                        width: 110,
                                    },
                                    {
                                        field: "col5",
                                        key: "col5",
                                        title: "col5",
                                        width: 120,
                                    },
                                ],
                            },
                            {
                                title: "col6",
                                field: "col6",
                                key: "col6",
                                width: 130,
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
                                key: "col7",
                                width: 50,
                            },
                        ],
                    },
                ],
                tableData: [],
            };
        },
        methods: {
            initTableData() {
                let data = [];
                for (let i = 0; i < 100; i++) {
                    data.push({
                        rowKey: i,
                        index: i + 1,
                        col1: \`A\${i + 1}\`,
                        col2: \`B\${i + 1}\`,
                        col3: \`C\${i + 1}\`,
                        col4: \`D\${i + 1}\`,
                        col5: \`E\${i + 1}\`,
                        col6: \`F\${i + 1}\`,
                        col7: \`G\${i + 1}\`,
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
`)],-1);function F(l,e,n,t,o,p){const a=d("anchor"),s=d("element-demo0"),u=d("demo-block");return h(),m("section",V,[i(a,{"is-edit":"",label:"基本用法",fileName:"base.md"}),i(u,null,{source:f(()=>[i(s)]),highlight:f(()=>[I]),_:1})])}const H=y(T,[["render",F]]),R={name:"component-doc",components:{"element-demo0":{render:function(){const{createTextVNode:l,resolveComponent:e,withCtx:n,createVNode:t,createElementVNode:o,openBlock:p,createElementBlock:a}=S,s=o("br",null,null,-1),u=o("br",null,null,-1);return function(r,b){const g=e("el-radio"),$=e("el-radio-group"),w=e("ve-table");return p(),a("div",null,[t($,{onChange:r.autofillTypeChang,modelValue:r.autofillType,"onUpdate:modelValue":b[0]||(b[0]=k=>r.autofillType=k)},{default:n(()=>[t(g,{label:"Horizontal"},{default:n(()=>[l("Horizontal")]),_:1}),t(g,{label:"Vertical"},{default:n(()=>[l("Vertical")]),_:1}),t(g,{label:"All"},{default:n(()=>[l("All")]),_:1})]),_:1},8,["onChange","modelValue"]),s,u,t(w,{"fixed-header":"","border-y":"",columns:r.columns,"table-data":r.tableData,"cell-autofill-option":r.cellAutofillOption,rowKeyFieldName:"rowKey",rowStyleOption:r.rowStyleOption},null,8,["columns","table-data","cell-autofill-option","rowStyleOption"])])}}(),...function(){return{data(){return{autofillType:"All",cellAutofillOption:{directionX:!0,directionY:!0},rowStyleOption:{clickHighlight:!1,hoverHighlight:!1},columns:[{field:"col1",key:"col1",title:"Col1"},{field:"col2",key:"col2",title:"Col2"},{field:"col3",key:"col3",title:"Col3"},{field:"col4",key:"col4",title:"Col4"},{field:"col5",key:"col5",title:"Col5"},{field:"col6",key:"col6",title:"Col6"}],tableData:[]}},methods:{autofillTypeChang(l){this.cellAutofillOption.directionX=!1,this.cellAutofillOption.directionY=!1,l==="Horizontal"?this.cellAutofillOption.directionX=!0:l==="Vertical"?this.cellAutofillOption.directionY=!0:l==="All"&&(this.cellAutofillOption.directionX=!0,this.cellAutofillOption.directionY=!0)},initTableData(){let l=[];for(let e=0;e<8;e++)l.push({rowKey:e,col1:`A${e+1}`,col2:`B${e+1}`,col3:`C${e+1}`,col4:`D${e+1}`,col5:`E${e+1}`,col6:`F${e+1}`,col7:`G${e+1}`,col8:`H${e+1}`});this.tableData=l}},created(){this.initTableData()}}}()}}},N={class:"content example-md-doc"},K=c("div",null,[c("p",null,"可以设置在某一个方向开启自动填充")],-1),X=c("pre",null,[c("code",{class:"html"},`<template>
    <div>
        <el-radio-group @change="autofillTypeChang" v-model="autofillType">
            <el-radio label="Horizontal">Horizontal</el-radio>
            <el-radio label="Vertical">Vertical</el-radio>
            <el-radio label="All">All</el-radio>
        </el-radio-group>
        <br />
        <br />
        <ve-table
            fixed-header
            border-y
            :columns="columns"
            :table-data="tableData"
            :cell-autofill-option="cellAutofillOption"
            rowKeyFieldName="rowKey"
            :rowStyleOption="rowStyleOption"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                autofillType: "All",
                cellAutofillOption: {
                    directionX: true,
                    directionY: true,
                },
                rowStyleOption: {
                    clickHighlight: false,
                    hoverHighlight: false,
                },
                columns: [
                    { field: "col1", key: "col1", title: "Col1" },
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
            autofillTypeChang(type) {
                this.cellAutofillOption.directionX = false;
                this.cellAutofillOption.directionY = false;
                if (type === "Horizontal") {
                    this.cellAutofillOption.directionX = true;
                } else if (type === "Vertical") {
                    this.cellAutofillOption.directionY = true;
                } else if (type === "All") {
                    this.cellAutofillOption.directionX = true;
                    this.cellAutofillOption.directionY = true;
                }
            },
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
`)],-1);function Y(l,e,n,t,o,p){const a=d("anchor"),s=d("element-demo0"),u=d("demo-block");return h(),m("section",N,[i(a,{"is-edit":"",label:"自动填充方向",fileName:"autofill-direction.md"}),i(u,null,{source:f(()=>[i(s)]),highlight:f(()=>[X]),default:f(()=>[K]),_:1})])}const z=y(R,[["render",Y]]),G=c("h2",null,"单元格自动填充",-1),L=x({name:"CellSelection",__name:"main",setup(l){return(e,n)=>(h(),m("div",null,[G,i(_(E)),i(_(H)),i(_(z)),i(A,{title:"API",anchor:"API"})]))}});export{L as default};
