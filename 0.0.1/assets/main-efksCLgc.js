import{c as z}from"./column-width-resize-option-props-AGFlySNm.js";import{_ as p,o as _,c as b,m as n,p as l,r as i,a as c,w as f}from"./index-RZxYTv8K.js";import{V as C}from"./vue.runtime.esm-bundler-yaRY9uGK.js";import{M as k}from"./mock-aCN8KHWC.js";import"./api-tpl-K8HSvQrO.js";const $={},D={class:"content example-md-doc"},W=n("div",{class:"tip"},[n("p",null,[l("1、当存在大文本时，列宽调整将会很有用"),n("br"),l(" 2、通过"),n("code",null,"columnWidthResizeOption"),l("设置列宽拖动功能"),n("br"),l(" 3、建议设置"),n("code",null,"scroll-width=0"),l("，那么当列宽总和大于容器宽度时，将会出横向滚动条"),n("br"),l(" 4、通过"),n("code",null,"column.width"),l(" 设置列的默认宽度，如果所有列宽总和小于容器宽度，列宽度将会自适应")])],-1),R=[W];function B(o,e){return _(),b("section",D,R)}const v=p($,[["render",B]]),E={name:"component-doc",components:{"element-demo0":{render:function(){const{toDisplayString:o,createElementVNode:e,vShow:t,withDirectives:a,resolveComponent:u,createVNode:h,openBlock:d,createElementBlock:s}=C,r={style:{margin:"10px 0","line-height":"2"}};return function(m,j){const y=u("ve-table");return d(),s("div",null,[a(e("div",r,[e("div",null,"column:"+o(m.columnResizeInfo.column),1),e("div",null,"differWidth:"+o(m.columnResizeInfo.differWidth),1),e("div",null,"columnWidth:"+o(m.columnResizeInfo.columnWidth),1)],512),[[t,m.columnResizeInfo.column]]),h(y,{style:{width:"100%"},"scroll-width":0,columns:m.columns,"table-data":m.tableData,"border-around":!0,"border-x":!0,"border-y":!0,"column-width-resize-option":m.columnWidthResizeOption},null,8,["columns","table-data","column-width-resize-option"])])}}(),...function(){return{data(){return{columnWidthResizeOption:{enable:!0,minWidth:30,sizeChange:({column:o,differWidth:e,columnWidth:t})=>{this.columnResizeInfo.column=o,this.columnResizeInfo.differWidth=e,this.columnResizeInfo.columnWidth=t}},columns:[{field:"index",key:"index",title:"#",width:50,align:"center",fixed:"left",renderBodyCell:({row:o,column:e,rowIndex:t},a)=>++t},{field:"col1",key:"col1",title:"Col1",width:220},{field:"col2",key:"col2",title:"Col2",width:220},{field:"col3",key:"col3",title:"Col3",width:220},{field:"col4",key:"col4",title:"Col4",width:220},{field:"col5",key:"col5",title:"Col5",width:220},{field:"col6",key:"col6",title:"Col6",width:220},{field:"col7",key:"col7",title:"Col7"},{field:"col8",key:"col8",title:"Col8"}],columnResizeInfo:{column:"",differWidth:"",columnWidth:"",tableWidth:""},tableData:[]}},methods:{initTableData(){let o=[];for(let e=0;e<5;e++)o.push({rowKey:e,col1:`A${e+1}`,col2:k.Random.sentence(3,12),col3:`C${e+1}`,col4:`D${e+1}`,col5:`E${e+1}`,col6:`F${e+1}`,col7:`G${e+1}`,col8:`H${e+1}`});this.tableData=o}},created(){this.initTableData()}}}()}}},g={class:"content example-md-doc"},x=n("p",null,"你可以将鼠标悬浮在两列之间，然后拖动即可。如果列宽度不设置，默认是 50px",-1),I=n("div",null,[n("p",null,[l("1、通过 "),n("code",null,"minWidth"),l("设置列拖动的最小宽度"),n("br"),l("2、通过"),n("code",null,"sizeChange({ column, differWidth, columnWidth })"),l("列拖动变化的回调信息")])],-1),A=n("pre",null,[n("code",{class:"html"},`<template>
    <div>
        <div v-show="columnResizeInfo.column" style="margin:10px 0;line-height:2">
            <div>column:{{columnResizeInfo.column}}</div>
            <div>differWidth:{{columnResizeInfo.differWidth}}</div>
            <div>columnWidth:{{columnResizeInfo.columnWidth}}</div>
        </div>
        <ve-table
            style="width:100%"
            :scroll-width="0"
            :columns="columns"
            :table-data="tableData"
            :border-around="true"
            :border-x="true"
            :border-y="true"
            :column-width-resize-option="columnWidthResizeOption"
        />
    </div>
</template>

<script>
    import Mock from "mockjs";
    export default {
        data() {
            return {
                columnWidthResizeOption: {
                    // default false
                    enable: true,
                    // column resize min width
                    minWidth: 30,
                    // column size change
                    sizeChange: ({ column, differWidth, columnWidth }) => {
                        this.columnResizeInfo.column = column;
                        this.columnResizeInfo.differWidth = differWidth;
                        this.columnResizeInfo.columnWidth = columnWidth;
                    },
                },
                columns: [
                    {
                        field: "index",
                        key: "index",
                        title: "#",
                        width: 50,
                        align: "center",
                        fixed: "left",
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return ++rowIndex;
                        },
                    },
                    { field: "col1", key: "col1", title: "Col1", width: 220 },
                    { field: "col2", key: "col2", title: "Col2", width: 220 },
                    { field: "col3", key: "col3", title: "Col3", width: 220 },
                    { field: "col4", key: "col4", title: "Col4", width: 220 },
                    { field: "col5", key: "col5", title: "Col5", width: 220 },
                    { field: "col6", key: "col6", title: "Col6", width: 220 },
                    { field: "col7", key: "col7", title: "Col7" },
                    { field: "col8", key: "col8", title: "Col8" },
                ],
                columnResizeInfo: {
                    column: "",
                    differWidth: "",
                    columnWidth: "",
                    tableWidth: "",
                },
                tableData: [],
            };
        },
        methods: {
            initTableData() {
                let data = [];
                for (let i = 0; i < 5; i++) {
                    data.push({
                        rowKey: i,
                        col1: \`A\${i + 1}\`,
                        col2: Mock.Random.sentence(3, 12),
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
`)],-1);function F(o,e,t,a,u,h){const d=i("anchor"),s=i("element-demo0"),r=i("demo-block");return _(),b("section",g,[c(d,{"is-edit":"",label:"列宽拖动",fileName:"basic.md"}),x,c(r,null,{source:f(()=>[c(s)]),highlight:f(()=>[A]),default:f(()=>[I]),_:1})])}const O=p(E,[["render",F]]),N={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:o,openBlock:e,createBlock:t}=C;return function(u,h){const d=o("ve-table");return e(),t(d,{style:{width:"100%"},"scroll-width":0,columns:u.columns,"table-data":u.tableData,"border-around":!0,"border-x":!0,"border-y":!0,"column-width-resize-option":u.columnWidthResizeOption},null,8,["columns","table-data","column-width-resize-option"])}}(),...function(){return{data(){return{columnWidthResizeOption:{enable:!0,minWidth:30,sizeChange:({column:o,differWidth:e,columnWidth:t})=>{}},columns:[{field:"index",key:"index",title:"#",width:50,align:"center",fixed:"left",renderBodyCell:({row:o,column:e,rowIndex:t},a)=>++t,disableResizing:!0},{field:"col1",key:"col1",title:"Col1",width:220,disableResizing:!0},{field:"col2",key:"col2",title:"Col2",width:220,disableResizing:!0},{field:"col3",key:"col3",title:"Col3",width:220},{field:"col4",key:"col4",title:"Col4",width:220},{field:"col5",key:"col5",title:"Col5",width:220},{field:"col6",key:"col6",title:"Col6",width:220},{field:"col7",key:"col7",title:"Col7"},{field:"col8",key:"col8",title:"Col8"}],columnResizeInfo:{column:"",differWidth:"",columnWidth:"",tableWidth:""},tableData:[]}},methods:{initTableData(){let o=[];for(let e=0;e<5;e++)o.push({rowKey:e,col1:`A${e+1}`,col2:k.Random.sentence(3,12),col3:`C${e+1}`,col4:`D${e+1}`,col5:`E${e+1}`,col6:`F${e+1}`,col7:`G${e+1}`,col8:`H${e+1}`});this.tableData=o}},created(){this.initTableData()}}}()}}},T={class:"content example-md-doc"},V=n("p",null,[l("以下示例，列 Col1、Col2、Col3 列宽拖动通过 "),n("code",null,"disableResizing"),l("被禁用了")],-1),M=n("pre",null,[n("code",{class:"html"},`<template>
    <ve-table
        style="width:100%"
        :scroll-width="0"
        :columns="columns"
        :table-data="tableData"
        :border-around="true"
        :border-x="true"
        :border-y="true"
        :column-width-resize-option="columnWidthResizeOption"
    />
</template>

<script>
    import Mock from "mockjs";
    export default {
        data() {
            return {
                columnWidthResizeOption: {
                    // default false
                    enable: true,
                    // column resize min width
                    minWidth: 30,
                    // column size change
                    sizeChange: ({ column, differWidth, columnWidth }) => {
                        //
                    },
                },
                columns: [
                    {
                        field: "index",
                        key: "index",
                        title: "#",
                        width: 50,
                        align: "center",
                        fixed: "left",
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return ++rowIndex;
                        },
                        disableResizing: true,
                    },
                    {
                        field: "col1",
                        key: "col1",
                        title: "Col1",
                        width: 220,
                        disableResizing: true,
                    },
                    {
                        field: "col2",
                        key: "col2",
                        title: "Col2",
                        width: 220,
                        disableResizing: true,
                    },
                    { field: "col3", key: "col3", title: "Col3", width: 220 },
                    { field: "col4", key: "col4", title: "Col4", width: 220 },
                    { field: "col5", key: "col5", title: "Col5", width: 220 },
                    {
                        field: "col6",
                        key: "col6",
                        title: "Col6",
                        width: 220,
                    },
                    { field: "col7", key: "col7", title: "Col7" },
                    { field: "col8", key: "col8", title: "Col8" },
                ],
                columnResizeInfo: {
                    column: "",
                    differWidth: "",
                    columnWidth: "",
                    tableWidth: "",
                },
                tableData: [],
            };
        },
        methods: {
            initTableData() {
                let data = [];
                for (let i = 0; i < 5; i++) {
                    data.push({
                        rowKey: i,
                        col1: \`A\${i + 1}\`,
                        col2: Mock.Random.sentence(3, 12),
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
`)],-1);function P(o,e,t,a,u,h){const d=i("anchor"),s=i("element-demo0"),r=i("demo-block");return _(),b("section",T,[c(d,{"is-edit":"",label:"禁用列宽拖动",fileName:"disable-resizing.md"}),V,c(r,null,{source:f(()=>[c(s)]),highlight:f(()=>[M]),_:1})])}const G=p(N,[["render",P]]),H={name:"BasicMain",components:{Explain:v,Basic:O,DisableResizing:G,API:z}},K=n("h2",null,"列宽拖动",-1);function S(o,e,t,a,u,h){const d=i("Explain"),s=i("Basic"),r=i("DisableResizing"),w=i("API");return _(),b("div",null,[K,c(d),c(s),c(r),c(w,{title:"API",anchor:"API"})])}const X=p(H,[["render",S]]);export{X as default};
