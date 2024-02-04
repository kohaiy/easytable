import{c as O,a as w}from"./contextmenu-body-option-props-Yqu8DetB.js";import{_ as y,o as p,c as m,h as i,i as g,r as l,a as c,ac as C,w as u}from"./index-xkG6_mZq.js";import{V as x}from"./vue.runtime.esm-bundler-KVmUbhes.js";import"./api-tpl-6B7TdmRP.js";const b={},E={class:"content example-md-doc"},T=i("div",{class:"tip"},[i("p",null,[g("1、有些操作可以通过右键菜单更方便的完成。比如单元格编辑功能，可以通过右键操作很方便的插入行或者移除行"),i("br"),g(" 2、当然你也可以自定义右键菜单功能")])],-1),I=[T];function k(n,e){return p(),m("section",E,I)}const S=y(b,[["render",k]]),A={},M={class:"content example-md-doc"},L=C('<p>header 右键菜单清单</p><table class="example-table"><thead><tr><th style="text-align:left;">功能</th><th style="text-align:left;">类型</th></tr></thead><tbody><tr><td style="text-align:left;">分割线</td><td style="text-align:left;"><code>SEPARATOR</code></td></tr><tr><td style="text-align:left;">剪切</td><td style="text-align:left;"><code>CUT</code></td></tr><tr><td style="text-align:left;">拷贝</td><td style="text-align:left;"><code>COPY</code></td></tr><tr><td style="text-align:left;">清空列</td><td style="text-align:left;"><code>EMPTY_COLUMN</code></td></tr><tr><td style="text-align:left;">左列冻结至该列</td><td style="text-align:left;"><code>LEFT_FIXED_COLUMN_TO</code></td></tr><tr><td style="text-align:left;">右列冻结至该列</td><td style="text-align:left;"><code>RIGHT_FIXED_COLUMN_TO</code></td></tr><tr><td style="text-align:left;">取消左列冻结至该列</td><td style="text-align:left;"><code>CANCEL_LEFT_FIXED_COLUMN_TO</code></td></tr><tr><td style="text-align:left;">取消右列冻结至该列</td><td style="text-align:left;"><code>CANCEL_RIGHT_FIXED_COLUMN_TO</code></td></tr></tbody></table><p>body 右键菜单清单</p><table class="example-table"><thead><tr><th style="text-align:left;">功能</th><th style="text-align:left;">类型</th></tr></thead><tbody><tr><td style="text-align:left;">分割线</td><td style="text-align:left;"><code>SEPARATOR</code></td></tr><tr><td style="text-align:left;">剪切</td><td style="text-align:left;"><code>CUT</code></td></tr><tr><td style="text-align:left;">拷贝</td><td style="text-align:left;"><code>COPY</code></td></tr><tr><td style="text-align:left;">在上方插入行</td><td style="text-align:left;"><code>INSERT_ROW_ABOVE</code></td></tr><tr><td style="text-align:left;">在下方插入行</td><td style="text-align:left;"><code>INSERT_ROW_BELOW</code></td></tr><tr><td style="text-align:left;">删除行</td><td style="text-align:left;"><code>REMOVE_ROW</code></td></tr><tr><td style="text-align:left;">清空行</td><td style="text-align:left;"><code>EMPTY_ROW</code></td></tr><tr><td style="text-align:left;">清空单元格</td><td style="text-align:left;"><code>EMPTY_CELL</code></td></tr></tbody></table>',4);function N(n,e){const t=l("anchor");return p(),m("section",M,[c(t,{"is-edit":"",label:"右键菜单清单",fileName:"contextmenu-types.md"}),L])}const F=y(A,[["render",N]]),D={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:n,createVNode:e,openBlock:t,createElementBlock:a}=x;return function(o,d){const s=n("ve-table");return t(),a("div",null,[e(s,{"max-height":350,"scroll-width":1600,"row-key-field-name":"rowKey","fixed-header":!0,columns:o.columns,"table-data":o.tableData,"row-style-option":o.rowStyleOption,"border-y":"","virtual-scroll-option":o.virtualScrollOption,"contextmenu-body-option":o.contextmenuBodyOption,"contextmenu-header-option":o.contextmenuHeaderOption},null,8,["columns","table-data","row-style-option","virtual-scroll-option","contextmenu-body-option","contextmenu-header-option"])])}}(),...function(){return{data(){return{startRowIndex:0,virtualScrollOption:{enable:!0,scrolling:this.scrolling},contextmenuHeaderOption:{beforeShow:({isWholeColSelection:n,selectionRangeKeys:e,selectionRangeIndexes:t})=>{console.log("---contextmenu header beforeShow--"),console.log("isWholeColSelection::",n),console.log("selectionRangeKeys::",e),console.log("selectionRangeIndexes::",t)},afterMenuClick:({type:n,selectionRangeKeys:e,selectionRangeIndexes:t})=>{console.log("---contextmenu header afterMenuClick--"),console.log("type::",n),console.log("selectionRangeKeys::",e),console.log("selectionRangeIndexes::",t)},contextmenus:[{type:"CUT"},{type:"COPY"},{type:"SEPARATOR"},{type:"EMPTY_COLUMN"},{type:"SEPARATOR"},{type:"LEFT_FIXED_COLUMN_TO"},{type:"CANCEL_LEFT_FIXED_COLUMN_TO"},{type:"RIGHT_FIXED_COLUMN_TO"},{type:"CANCEL_RIGHT_FIXED_COLUMN_TO"}]},contextmenuBodyOption:{beforeShow:({isWholeRowSelection:n,selectionRangeKeys:e,selectionRangeIndexes:t})=>{console.log("---contextmenu body beforeShow--"),console.log("isWholeRowSelection::",n),console.log("selectionRangeKeys::",e),console.log("selectionRangeIndexes::",t)},afterMenuClick:({type:n,selectionRangeKeys:e,selectionRangeIndexes:t})=>{console.log("---contextmenu body afterMenuClick--"),console.log("type::",n),console.log("selectionRangeKeys::",e),console.log("selectionRangeIndexes::",t)},contextmenus:[{type:"CUT"},{type:"COPY"},{type:"SEPARATOR"},{type:"INSERT_ROW_ABOVE"},{type:"INSERT_ROW_BELOW"},{type:"SEPARATOR"},{type:"REMOVE_ROW"},{type:"EMPTY_ROW"},{type:"EMPTY_CELL"}]},rowStyleOption:{clickHighlight:!1,hoverHighlight:!1},columns:[{field:"",key:"a",title:"",width:15,align:"center",operationColumn:!0,renderBodyCell:({row:n,column:e,rowIndex:t},a)=>t+this.startRowIndex+1},{field:"col1",key:"col1",title:"col1",fixed:"left",width:50},{field:"col2",key:"col2",title:"col2",width:50},{field:"col3",key:"col3",title:"col3",width:50},{field:"col4",key:"col4",title:"col4",width:50},{field:"col5",key:"col5",title:"col5",width:50},{title:"col6",field:"col6",key:"col6",width:50},{title:"col7",field:"col7",key:"col7",width:50},{field:"col8",key:"col8",title:"col8",width:50}],tableData:[]}},methods:{initTableData(){let n=[];for(let e=0;e<100;e++)n.push({rowKey:e,col1:"A"+e,col2:"B"+e,col3:"C"+e,col4:"D"+e,col5:"E"+e,col6:"F"+e,col7:"G"+e,col8:"H"+e});this.tableData=n},scrolling({startRowIndex:n}){this.startRowIndex=n}},created(){this.initTableData()}}}()}}},P={class:"content example-md-doc"},B=i("p",null,"右键表格区域查看效果",-1),v=i("div",null,[i("p",null,"你可以根据需要进行组合使用")],-1),K=i("pre",null,[i("code",{class:"html"},`<template>
    <div>
        <ve-table
            :max-height="350"
            :scroll-width="1600"
            row-key-field-name="rowKey"
            :fixed-header="true"
            :columns="columns"
            :table-data="tableData"
            :row-style-option="rowStyleOption"
            border-y
            :virtual-scroll-option="virtualScrollOption"
            :contextmenu-body-option="contextmenuBodyOption"
            :contextmenu-header-option="contextmenuHeaderOption"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // start row index
                startRowIndex: 0,
                virtualScrollOption: {
                    // 是否开启
                    enable: true,
                    scrolling: this.scrolling,
                },
                // contextmenu header option
                contextmenuHeaderOption: {
                    /*
                    before contextmenu show.
                    In this function,You can change the \`contextmenu\` options
                    */
                    beforeShow: ({
                        isWholeColSelection,
                        selectionRangeKeys,
                        selectionRangeIndexes,
                    }) => {
                        console.log("---contextmenu header beforeShow--");
                        console.log("isWholeColSelection::", isWholeColSelection);
                        console.log("selectionRangeKeys::", selectionRangeKeys);
                        console.log("selectionRangeIndexes::", selectionRangeIndexes);
                    },
                    // after menu click
                    afterMenuClick: ({ type, selectionRangeKeys, selectionRangeIndexes }) => {
                        console.log("---contextmenu header afterMenuClick--");
                        console.log("type::", type);
                        console.log("selectionRangeKeys::", selectionRangeKeys);
                        console.log("selectionRangeIndexes::", selectionRangeIndexes);
                    },

                    // contextmenus
                    contextmenus: [
                        {
                            type: "CUT",
                        },
                        {
                            type: "COPY",
                        },
                        {
                            type: "SEPARATOR",
                        },
                        {
                            type: "EMPTY_COLUMN",
                        },
                        {
                            type: "SEPARATOR",
                        },
                        {
                            type: "LEFT_FIXED_COLUMN_TO",
                        },
                        {
                            type: "CANCEL_LEFT_FIXED_COLUMN_TO",
                        },
                        {
                            type: "RIGHT_FIXED_COLUMN_TO",
                        },
                        {
                            type: "CANCEL_RIGHT_FIXED_COLUMN_TO",
                        },
                    ],
                },

                // contextmenu body option
                contextmenuBodyOption: {
                    /*
                    before contextmenu show.
                    In this function,You can change the \`contextmenu\` options
                    */
                    beforeShow: ({
                        isWholeRowSelection,
                        selectionRangeKeys,
                        selectionRangeIndexes,
                    }) => {
                        console.log("---contextmenu body beforeShow--");
                        console.log("isWholeRowSelection::", isWholeRowSelection);
                        console.log("selectionRangeKeys::", selectionRangeKeys);
                        console.log("selectionRangeIndexes::", selectionRangeIndexes);
                    },
                    // after menu click
                    afterMenuClick: ({ type, selectionRangeKeys, selectionRangeIndexes }) => {
                        console.log("---contextmenu body afterMenuClick--");
                        console.log("type::", type);
                        console.log("selectionRangeKeys::", selectionRangeKeys);
                        console.log("selectionRangeIndexes::", selectionRangeIndexes);
                    },

                    // contextmenus
                    contextmenus: [
                        {
                            type: "CUT",
                        },
                        {
                            type: "COPY",
                        },
                        {
                            type: "SEPARATOR",
                        },
                        {
                            type: "INSERT_ROW_ABOVE",
                        },
                        {
                            type: "INSERT_ROW_BELOW",
                        },
                        {
                            type: "SEPARATOR",
                        },
                        {
                            type: "REMOVE_ROW",
                        },
                        {
                            type: "EMPTY_ROW",
                        },
                        {
                            type: "EMPTY_CELL",
                        },
                    ],
                },

                rowStyleOption: {
                    clickHighlight: false,
                    hoverHighlight: false,
                },
                columns: [
                    {
                        field: "",
                        key: "a",
                        title: "",
                        width: 15,
                        align: "center",
                        operationColumn: true,
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return rowIndex + this.startRowIndex + 1;
                        },
                    },
                    {
                        field: "col1",
                        key: "col1",
                        title: "col1",
                        fixed: "left",
                        width: 50,
                    },
                    {
                        field: "col2",
                        key: "col2",
                        title: "col2",
                        width: 50,
                    },
                    {
                        field: "col3",
                        key: "col3",
                        title: "col3",
                        width: 50,
                    },
                    {
                        field: "col4",
                        key: "col4",
                        title: "col4",
                        width: 50,
                    },
                    {
                        field: "col5",
                        key: "col5",
                        title: "col5",
                        width: 50,
                    },
                    {
                        title: "col6",
                        field: "col6",
                        key: "col6",
                        width: 50,
                    },
                    {
                        title: "col7",
                        field: "col7",
                        key: "col7",
                        width: 50,
                    },
                    {
                        field: "col8",
                        key: "col8",
                        title: "col8",
                        width: 50,
                    },
                ],
                // table data
                tableData: [],
            };
        },
        methods: {
            initTableData() {
                let data = [];
                for (let i = 0; i < 100; i++) {
                    data.push({
                        rowKey: i,
                        col1: \`A\` + i,
                        col2: \`B\` + i,
                        col3: \`C\` + i,
                        col4: \`D\` + i,
                        col5: \`E\` + i,
                        col6: \`F\` + i,
                        col7: \`G\` + i,
                        col8: \`H\` + i,
                    });
                }
                this.tableData = data;
            },
            // virtual scrolling
            scrolling({ startRowIndex }) {
                this.startRowIndex = startRowIndex;
            },
        },
        created() {
            this.initTableData();
        },
    };
<\/script>
`)],-1);function U(n,e,t,a,h,o){const d=l("anchor"),s=l("element-demo0"),r=l("demo-block");return p(),m("section",P,[c(d,{"is-edit":"",label:"基础用法",fileName:"base.md"}),B,c(r,null,{source:u(()=>[c(s)]),highlight:u(()=>[K]),default:u(()=>[v]),_:1})])}const H=y(D,[["render",U]]),W={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:n,createVNode:e,openBlock:t,createElementBlock:a}=x;return function(o,d){const s=n("ve-table");return t(),a("div",null,[e(s,{"scroll-width":1600,"max-height":350,"row-key-field-name":"rowKey","fixed-header":!0,columns:o.columns,"table-data":o.tableData,"row-style-option":o.rowStyleOption,"virtual-scroll-option":o.virtualScrollOption,"border-y":"","contextmenu-body-option":o.contextmenuBodyOption,"contextmenu-header-option":o.contextmenuHeaderOption},null,8,["columns","table-data","row-style-option","virtual-scroll-option","contextmenu-body-option","contextmenu-header-option"])])}}(),...function(){return{data(){return{virtualScrollOption:{enable:!0,scrolling:this.scrolling},contextmenuHeaderOption:{beforeShow:({isWholeColSelection:n,selectionRangeKeys:e,selectionRangeIndexes:t})=>{console.log("---contextmenu header beforeShow--"),console.log("isWholeColSelection::",n),console.log("selectionRangeKeys::",e),console.log("selectionRangeIndexes::",t)},afterMenuClick:({type:n,selectionRangeKeys:e,selectionRangeIndexes:t})=>{console.log("---contextmenu header afterMenuClick--"),console.log("type::",n),console.log("selectionRangeKeys::",e),console.log("selectionRangeIndexes::",t)},contextmenus:[{type:"CUT"},{type:"COPY"},{type:"SEPARATOR"},{type:"EMPTY_COLUMN"},{type:"SEPARATOR"},{type:"LEFT_FIXED_COLUMN_TO"},{type:"CANCEL_LEFT_FIXED_COLUMN_TO"},{type:"RIGHT_FIXED_COLUMN_TO"},{type:"CANCEL_RIGHT_FIXED_COLUMN_TO"}]},contextmenuBodyOption:{beforeShow:({isWholeRowSelection:n,selectionRangeKeys:e,selectionRangeIndexes:t})=>{console.log("---contextmenu body beforeShow--"),console.log("isWholeRowSelection::",n),console.log("selectionRangeKeys::",e),console.log("selectionRangeIndexes::",t)},afterMenuClick:({type:n,selectionRangeKeys:e,selectionRangeIndexes:t})=>{console.log("---contextmenu body afterMenuClick--"),console.log("type::",n),console.log("selectionRangeKeys::",e),console.log("selectionRangeIndexes::",t)},contextmenus:[{type:"CUT"},{type:"COPY"},{type:"SEPARATOR"},{type:"custom-empty-row",label:"empty row(custom)"},{type:"customType1",label:"custom menu",children:[{label:"menu5-1",type:"menu5-1-type",children:[{label:"menu5-1-1",type:"menu5-1-1-type"},{label:"menu5-2-2",type:"menu5-2-2-type"}]},{label:"menu5-2",disabled:!0},{type:"SEPARATOR"},{label:"menu5-3",type:"menu5-3-type"}]}]},rowStyleOption:{clickHighlight:!1,hoverHighlight:!1},columns:[{field:"",key:"a",title:"",width:20,align:"center",fixed:"left",operationColumn:!0,renderBodyCell:({row:n,column:e,rowIndex:t},a)=>t+this.startRowIndex+1},{field:"col1",key:"col1",title:"col1",width:50,fixed:"left"},{title:"col2-col3",fixed:"left",children:[{field:"col2",key:"col2",title:"col2",width:50},{field:"col3",key:"col3",title:"col3",width:50}]},{field:"col4",key:"col4",title:"col4",width:130},{field:"col5",key:"col5",title:"col5",width:140},{title:"col6",field:"col6",key:"col6",width:140},{title:"col7",fixed:"right",children:[{title:"col7-1",field:"col7",key:"col7",width:50}]},{field:"col8",key:"col8",title:"col8",width:50,fixed:"right"}],tableData:[]}},methods:{initTableData(){let n=[];for(let e=0;e<100;e++)n.push({rowKey:e,col1:"A"+e,col2:"B"+e,col3:"C"+e,col4:"D"+e,col5:"E"+e,col6:"F"+e,col7:"G"+e,col8:"H"+e});this.tableData=n},scrolling({startRowIndex:n}){this.startRowIndex=n}},created(){this.initTableData()}}}()}}},$={class:"content example-md-doc"},Y=i("pre",null,[i("code",{class:"html"},`<template>
    <div>
        <ve-table
            :scroll-width="1600"
            :max-height="350"
            row-key-field-name="rowKey"
            :fixed-header="true"
            :columns="columns"
            :table-data="tableData"
            :row-style-option="rowStyleOption"
            :virtual-scroll-option="virtualScrollOption"
            border-y
            :contextmenu-body-option="contextmenuBodyOption"
            :contextmenu-header-option="contextmenuHeaderOption"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                virtualScrollOption: {
                    // 是否开启
                    enable: true,
                    scrolling: this.scrolling,
                },
                // contextmenu header option
                contextmenuHeaderOption: {
                    /*
                    before contextmenu show.
                    In this function,You can change the \`contextmenu\` options
                    */
                    beforeShow: ({
                        isWholeColSelection,
                        selectionRangeKeys,
                        selectionRangeIndexes,
                    }) => {
                        console.log("---contextmenu header beforeShow--");
                        console.log("isWholeColSelection::", isWholeColSelection);
                        console.log("selectionRangeKeys::", selectionRangeKeys);
                        console.log("selectionRangeIndexes::", selectionRangeIndexes);
                    },
                    // after menu click
                    afterMenuClick: ({ type, selectionRangeKeys, selectionRangeIndexes }) => {
                        console.log("---contextmenu header afterMenuClick--");
                        console.log("type::", type);
                        console.log("selectionRangeKeys::", selectionRangeKeys);
                        console.log("selectionRangeIndexes::", selectionRangeIndexes);
                    },

                    // contextmenus
                    contextmenus: [
                        {
                            type: "CUT",
                        },
                        {
                            type: "COPY",
                        },
                        {
                            type: "SEPARATOR",
                        },
                        {
                            type: "EMPTY_COLUMN",
                        },
                        {
                            type: "SEPARATOR",
                        },
                        {
                            type: "LEFT_FIXED_COLUMN_TO",
                        },
                        {
                            type: "CANCEL_LEFT_FIXED_COLUMN_TO",
                        },
                        {
                            type: "RIGHT_FIXED_COLUMN_TO",
                        },
                        {
                            type: "CANCEL_RIGHT_FIXED_COLUMN_TO",
                        },
                    ],
                },
                // contextmenu body option
                contextmenuBodyOption: {
                    /*
                    before contextmenu show.
                    In this function,You can change the \`contextmenu\` options
                    */
                    beforeShow: ({
                        isWholeRowSelection,
                        selectionRangeKeys,
                        selectionRangeIndexes,
                    }) => {
                        console.log("---contextmenu body beforeShow--");
                        console.log("isWholeRowSelection::", isWholeRowSelection);
                        console.log("selectionRangeKeys::", selectionRangeKeys);
                        console.log("selectionRangeIndexes::", selectionRangeIndexes);
                    },
                    // after menu click
                    afterMenuClick: ({ type, selectionRangeKeys, selectionRangeIndexes }) => {
                        console.log("---contextmenu body afterMenuClick--");
                        console.log("type::", type);
                        console.log("selectionRangeKeys::", selectionRangeKeys);
                        console.log("selectionRangeIndexes::", selectionRangeIndexes);
                    },

                    // contextmenus
                    contextmenus: [
                        {
                            type: "CUT",
                        },
                        {
                            type: "COPY",
                        },
                        {
                            type: "SEPARATOR",
                        },
                        {
                            type: "custom-empty-row",
                            label: "empty row(custom)",
                        },
                        {
                            type: "customType1",
                            label: "custom menu",
                            children: [
                                {
                                    label: "menu5-1",
                                    type: "menu5-1-type",
                                    children: [
                                        {
                                            label: "menu5-1-1",
                                            type: "menu5-1-1-type",
                                        },
                                        {
                                            label: "menu5-2-2",
                                            type: "menu5-2-2-type",
                                        },
                                    ],
                                },
                                {
                                    label: "menu5-2",
                                    disabled: true,
                                },
                                {
                                    type: "SEPARATOR",
                                },
                                {
                                    label: "menu5-3",
                                    type: "menu5-3-type",
                                },
                            ],
                        },
                    ],
                },

                rowStyleOption: {
                    clickHighlight: false,
                    hoverHighlight: false,
                },
                columns: [
                    {
                        field: "",
                        key: "a",
                        title: "",
                        width: 20,
                        align: "center",
                        fixed: "left",
                        operationColumn: true,
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return rowIndex + this.startRowIndex + 1;
                        },
                    },
                    {
                        field: "col1",
                        key: "col1",
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
                                key: "col2",
                                title: "col2",
                                width: 50,
                            },
                            {
                                field: "col3",
                                key: "col3",
                                title: "col3",
                                width: 50,
                            },
                        ],
                    },
                    {
                        field: "col4",
                        key: "col4",
                        title: "col4",
                        width: 130,
                    },
                    {
                        field: "col5",
                        key: "col5",
                        title: "col5",
                        width: 140,
                    },
                    {
                        title: "col6",
                        field: "col6",
                        key: "col6",
                        width: 140,
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
                    {
                        field: "col8",
                        key: "col8",
                        title: "col8",
                        width: 50,
                        fixed: "right",
                    },
                ],
                // table data
                tableData: [],
            };
        },
        methods: {
            initTableData() {
                let data = [];
                for (let i = 0; i < 100; i++) {
                    data.push({
                        rowKey: i,
                        col1: \`A\` + i,
                        col2: \`B\` + i,
                        col3: \`C\` + i,
                        col4: \`D\` + i,
                        col5: \`E\` + i,
                        col6: \`F\` + i,
                        col7: \`G\` + i,
                        col8: \`H\` + i,
                    });
                }
                this.tableData = data;
            },
            // virtual scrolling
            scrolling({ startRowIndex }) {
                this.startRowIndex = startRowIndex;
            },
        },
        created() {
            this.initTableData();
        },
    };
<\/script>
`)],-1);function X(n,e,t,a,h,o){const d=l("anchor"),s=l("element-demo0"),r=l("demo-block");return p(),m("section",$,[c(d,{"is-edit":"",label:"自定义右键菜单",fileName:"custom.md"}),c(r,null,{source:u(()=>[c(s)]),highlight:u(()=>[Y]),_:1})])}const V=y(W,[["render",X]]),G={name:"BasicMain",components:{Explain:S,ContextmenuTypes:F,Base:H,Custom:V,API1:O,API2:w}},j=i("h2",null,"右键菜单",-1);function q(n,e,t,a,h,o){const d=l("Explain"),s=l("ContextmenuTypes"),r=l("Base"),_=l("Custom"),f=l("API1"),R=l("API2");return p(),m("div",null,[j,c(d),c(s),c(r),c(_),c(f,{anchor:"API contextmenuHeaderOption",desc:"contextmenuHeaderOption header 右键菜单配置"}),c(R,{anchor:"API contextmenuBodyOption",desc:"contextmenuBodyOption body 右键菜单配置"})])}const ee=y(G,[["render",q]]);export{ee as default};
