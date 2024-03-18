import{C as k}from"./cell-selection-option-props-eMrvrthO.js";import{_ as y,o as p,c as b,m as t,p as s,r as i,a as c,g as $,w as f}from"./index-OafSkC6h.js";import{V as _}from"./vue.runtime.esm-bundler-Y-OwEadg.js";import"./api-tpl-s27m4m-6.js";const x={},S={class:"content example-md-doc"},v=t("div",{class:"tip"},[t("p",null,[s("1、你可以像 excel 那样，多行选择、多列选择、全选等功能"),t("br"),s(" 2、配合单元格编辑功能非常方便"),t("br"),s(" 3、需要指定 "),t("code",null,"rowKeyFieldName"),s(" 属性"),t("br"),s(" 4、开启了单元格选择，会禁用文本选择即"),t("code",null,"user-select:none")])],-1),B=[v];function D(n,e){return p(),b("section",S,B)}const E=y(x,[["render",D]]),K={},F={class:"content example-md-doc"},O=$('<p>单元格选择支持以下快捷键（参考 excel 快捷键）：</p><table class="example-table"><thead><tr><th style="text-align:left;">功能</th><th style="text-align:left;">快捷键</th></tr></thead><tbody><tr><td style="text-align:left;">向上移动活动单元格</td><td style="text-align:left;"><code>↑</code></td></tr><tr><td style="text-align:left;">向右移动活动单元格</td><td style="text-align:left;"><code>→</code></td></tr><tr><td style="text-align:left;">向下移动活动单元格</td><td style="text-align:left;"><code>↓</code></td></tr><tr><td style="text-align:left;">向左移动活动单元格</td><td style="text-align:left;"><code>←</code></td></tr><tr><td style="text-align:left;">向下移动活动单元格</td><td style="text-align:left;"><code>Enter</code></td></tr><tr><td style="text-align:left;">向上移动活动单元格</td><td style="text-align:left;"><code>Shift</code> + <code>Enter</code></td></tr><tr><td style="text-align:left;">向右移动活动单元格</td><td style="text-align:left;"><code>Tab</code></td></tr><tr><td style="text-align:left;">向左移动活动单元格</td><td style="text-align:left;"><code>Shift</code> + <code>Tab</code></td></tr></tbody></table>',2);function R(n,e){const o=i("anchor");return p(),b("section",F,[c(o,{"is-edit":"",label:"快捷键",fileName:"shortcuts.md"}),O])}const A=y(K,[["render",R]]),N={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:n,openBlock:e,createBlock:o}=_;return function(d,m){const a=n("ve-table");return e(),o(a,{"fixed-header":"","scroll-width":1600,"max-height":380,"border-y":"",columns:d.columns,"table-data":d.tableData,rowKeyFieldName:"rowKey",rowStyleOption:d.rowStyleOption},null,8,["columns","table-data","rowStyleOption"])}}(),...function(){return{data(){return{rowStyleOption:{clickHighlight:!1,hoverHighlight:!1},columns:[{field:"",key:"a",title:"",width:15,align:"center",fixed:"left",operationColumn:!0,renderBodyCell:({row:n,column:e,rowIndex:o},r)=>++o},{field:"col1",key:"col1",title:"col1",width:50,fixed:"left"},{title:"col2-col3",fixed:"left",children:[{field:"col2",key:"col2",title:"col2",width:50},{field:"col3",key:"col3",title:"col3",width:50}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"col4",title:"col4",width:130},{field:"col5",key:"col5",title:"col5",width:140}]},{title:"col6",field:"col6",key:"col6",width:140}]},{title:"col7",fixed:"right",children:[{title:"col7-1",field:"col7",key:"col7",width:50}]},{field:"col8",key:"col8",title:"col8",width:50,fixed:"right"}],tableData:[]}},methods:{initTableData(){let n=[];for(let e=0;e<10;e++)n.push({rowKey:e,col1:`A${e+1}`,col2:`B${e+1}`,col3:`C${e+1}`,col4:`D${e+1}`,col5:`E${e+1}`,col6:`F${e+1}`,col7:`G${e+1}`,col8:`H${e+1}`});this.tableData=n}},created(){this.initTableData()}}}()}}},I={class:"content example-md-doc"},H=t("p",null,"你可以尝试点击表头、行号列等查看效果。",-1),T=t("pre",null,[t("code",{class:"html"},`<template>
    <ve-table
        fixed-header
        :scroll-width="1600"
        :max-height="380"
        border-y
        :columns="columns"
        :table-data="tableData"
        rowKeyFieldName="rowKey"
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
                columns: [
                    {
                        field: "",
                        key: "a",
                        title: "",
                        width: 15,
                        align: "center",
                        fixed: "left",
                        operationColumn: true,
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return ++rowIndex;
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
                        title: "col4-col5-col6",
                        children: [
                            {
                                title: "col4-col5",
                                children: [
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
                                ],
                            },
                            {
                                title: "col6",
                                field: "col6",
                                key: "col6",
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
                tableData: [],
            };
        },
        methods: {
            initTableData() {
                let data = [];
                for (let i = 0; i < 10; i++) {
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
`)],-1);function V(n,e,o,r,d,m){const a=i("anchor"),u=i("element-demo0"),l=i("demo-block");return p(),b("section",I,[c(a,{"is-edit":"",label:"基本用法",fileName:"base.md"}),H,c(l,null,{source:f(()=>[c(u)]),highlight:f(()=>[T]),_:1})])}const G=y(N,[["render",V]]),M={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:n,openBlock:e,createBlock:o}=_;return function(d,m){const a=n("ve-table");return e(),o(a,{"fixed-header":"","border-y":"",columns:d.columns,"table-data":d.tableData,cellSelectionOption:d.cellSelectionOption,rowKeyFieldName:"rowKey",rowStyleOption:d.rowStyleOption},null,8,["columns","table-data","cellSelectionOption","rowStyleOption"])}}(),...function(){return{data(){return{rowStyleOption:{clickHighlight:!1,hoverHighlight:!1},cellSelectionOption:{enable:!1},columns:[{field:"",key:"a",title:"",width:15,align:"center",fixed:"left",operationColumn:!0,renderBodyCell:({row:n,column:e,rowIndex:o},r)=>++o},{field:"name",key:"name",title:"Name",align:"left"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"right"},{field:"address",key:"d",title:"Address"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai",rowKey:0},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing",rowKey:1},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing",rowKey:2},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen",rowKey:3},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen",rowKey:4}]}}}}()}}},P={class:"content example-md-doc"},J=t("div",null,[t("p",null,[s("默认单元格选择是开启的，你可以通过 "),t("code",null,"cellSelectionOption.enable = false"),s(" 关闭")])],-1),j=t("pre",null,[t("code",{class:"html"},`<template>
    <ve-table
        fixed-header
        border-y
        :columns="columns"
        :table-data="tableData"
        :cellSelectionOption="cellSelectionOption"
        rowKeyFieldName="rowKey"
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
                cellSelectionOption: {
                    // disble cell selection
                    enable: false,
                },
                columns: [
                    {
                        field: "",
                        key: "a",
                        title: "",
                        width: 15,
                        align: "center",
                        fixed: "left",
                        operationColumn: true,
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return ++rowIndex;
                        },
                    },
                    { field: "name", key: "name", title: "Name", align: "left" },
                    { field: "date", key: "b", title: "Date", align: "left" },
                    {
                        field: "hobby",
                        key: "c",
                        title: "Hobby",
                        align: "right",
                    },
                    { field: "address", key: "d", title: "Address" },
                ],
                tableData: [
                    {
                        name: "John",
                        date: "1900-05-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Shanghai",
                        rowKey: 0,
                    },
                    {
                        name: "Dickerson",
                        date: "1910-06-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Beijing",
                        rowKey: 1,
                    },
                    {
                        name: "Larsen",
                        date: "2000-07-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Chongqing",
                        rowKey: 2,
                    },
                    {
                        name: "Geneva",
                        date: "2010-08-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Xiamen",
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
    };
<\/script>
`)],-1);function q(n,e,o,r,d,m){const a=i("anchor"),u=i("element-demo0"),l=i("demo-block");return p(),b("section",P,[c(a,{"is-edit":"",label:"禁用单元格选择",fileName:"disable-selection.md"}),c(l,null,{source:f(()=>[c(u)]),highlight:f(()=>[j]),default:f(()=>[J]),_:1})])}const z=y(M,[["render",q]]),L={name:"component-doc",components:{"element-demo0":{render:function(){const{createElementVNode:n,resolveComponent:e,createVNode:o,openBlock:r,createElementBlock:d}=_,m=n("br",null,null,-1),a=n("br",null,null,-1);return function(l,h){const w=e("ve-table");return r(),d("div",null,[n("button",{class:"button-demo",onClick:h[0]||(h[0]=g=>l.setCellSelection(29,"col5"))},"选中第30行第5列"),n("button",{class:"button-demo",onClick:h[1]||(h[1]=g=>l.setCellSelection(1,"col1"))},"选中第2行第1列"),m,a,o(w,{ref:"tableRef","fixed-header":"","scroll-width":1600,"max-height":380,"border-y":"",columns:l.columns,"table-data":l.tableData,rowKeyFieldName:"rowKey","virtual-scroll-option":l.virtualScrollOption,rowStyleOption:l.rowStyleOption},null,8,["columns","table-data","virtual-scroll-option","rowStyleOption"])])}}(),...function(){return{data(){return{startRowIndex:0,virtualScrollOption:{enable:!0,scrolling:this.scrolling},rowStyleOption:{clickHighlight:!1,hoverHighlight:!1},cellSelectionOption:{enable:!0},columns:[{field:"",key:"a",title:"",width:15,align:"center",fixed:"left",operationColumn:!0,renderBodyCell:({row:n,column:e,rowIndex:o},r)=>o+this.startRowIndex+1},{field:"col1",key:"col1",title:"col1",width:50,fixed:"left"},{title:"col2-col3",fixed:"left",children:[{field:"col2",key:"col2",title:"col2",width:50},{field:"col3",key:"col3",title:"col3",width:50}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"col4",title:"col4",width:130},{field:"col5",key:"col5",title:"col5",width:140}]},{title:"col6",field:"col6",key:"col6",width:140}]},{title:"col7",fixed:"right",children:[{title:"col7-1",field:"col7",key:"col7",width:50}]},{field:"col8",key:"col8",title:"col8",width:50,fixed:"right"}],tableData:[]}},methods:{setCellSelection(n,e){this.$refs.tableRef.setCellSelection({rowKey:n,colKey:e})},initTableData(){let n=[];for(let e=0;e<50;e++)n.push({rowKey:e,col1:`A${e+1}`,col2:`B${e+1}`,col3:`C${e+1}`,col4:`D${e+1}`,col5:`E${e+1}`,col6:`F${e+1}`,col7:`G${e+1}`,col8:`H${e+1}`});this.tableData=n},scrolling({startRowIndex:n}){this.startRowIndex=n}},created(){this.initTableData()}}}()}}},X={class:"content example-md-doc"},Q=t("div",null,[t("p",null,[s("你可以通过实例方法"),t("code",null,"setCellSelection({ rowKey, colKey })"),s("设置单元格选中")])],-1),U=t("pre",null,[t("code",{class:"html"},`<template>
    <div>
        <button class="button-demo" @click="setCellSelection(29,'col5')">选中第30行第5列</button>
        <button class="button-demo" @click="setCellSelection(1,'col1')">选中第2行第1列</button>
        <br />
        <br />
        <ve-table
            ref="tableRef"
            fixed-header
            :scroll-width="1600"
            :max-height="380"
            border-y
            :columns="columns"
            :table-data="tableData"
            rowKeyFieldName="rowKey"
            :virtual-scroll-option="virtualScrollOption"
            :rowStyleOption="rowStyleOption"
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
                rowStyleOption: {
                    clickHighlight: false,
                    hoverHighlight: false,
                },
                cellSelectionOption: {
                    // disble cell selection
                    enable: true,
                },
                columns: [
                    {
                        field: "",
                        key: "a",
                        title: "",
                        width: 15,
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
                        title: "col4-col5-col6",
                        children: [
                            {
                                title: "col4-col5",
                                children: [
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
                                ],
                            },
                            {
                                title: "col6",
                                field: "col6",
                                key: "col6",
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
                tableData: [],
            };
        },
        methods: {
            // set cell selection
            setCellSelection(rowKey, colKey) {
                this.$refs["tableRef"].setCellSelection({ rowKey, colKey });
            },
            initTableData() {
                let data = [];
                for (let i = 0; i < 50; i++) {
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
`)],-1);function W(n,e,o,r,d,m){const a=i("anchor"),u=i("element-demo0"),l=i("demo-block");return p(),b("section",X,[c(a,{"is-edit":"",label:"单选实例方法",fileName:"single-selection-instance-methods.md"}),c(l,null,{source:f(()=>[c(u)]),highlight:f(()=>[U]),default:f(()=>[Q]),_:1})])}const Y=y(L,[["render",W]]),Z={name:"component-doc",components:{"element-demo0":{render:function(){const{createElementVNode:n,resolveComponent:e,createVNode:o,openBlock:r,createElementBlock:d}=_,m=n("br",null,null,-1),a=n("br",null,null,-1);return function(l,h){const w=e("ve-table");return r(),d("div",null,[n("button",{class:"button-demo",onClick:h[0]||(h[0]=g=>l.setAllCellSelection())},"单元格全选"),n("button",{class:"button-demo",onClick:h[1]||(h[1]=g=>l.setRangeCellSelection())},"区域选择"),m,a,o(w,{ref:"tableRef","fixed-header":"","scroll-width":1600,"max-height":380,"border-y":"",columns:l.columns,"table-data":l.tableData,rowKeyFieldName:"rowKey","virtual-scroll-option":l.virtualScrollOption,rowStyleOption:l.rowStyleOption},null,8,["columns","table-data","virtual-scroll-option","rowStyleOption"])])}}(),...function(){return{data(){return{startRowIndex:0,virtualScrollOption:{enable:!0,scrolling:this.scrolling},rowStyleOption:{clickHighlight:!1,hoverHighlight:!1},cellSelectionOption:{enable:!0},columns:[{field:"",key:"a",title:"",width:15,align:"center",fixed:"left",operationColumn:!0,renderBodyCell:({row:n,column:e,rowIndex:o},r)=>o+this.startRowIndex+1},{field:"col1",key:"col1",title:"col1",width:50,fixed:"left"},{title:"col2-col3",fixed:"left",children:[{field:"col2",key:"col2",title:"col2",width:50},{field:"col3",key:"col3",title:"col3",width:50}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"col4",title:"col4",width:130},{field:"col5",key:"col5",title:"col5",width:140}]},{title:"col6",field:"col6",key:"col6",width:140}]},{title:"col7",fixed:"right",children:[{title:"col7-1",field:"col7",key:"col7",width:50}]},{field:"col8",key:"col8",title:"col8",width:50,fixed:"right"}],tableData:[]}},methods:{setAllCellSelection(){this.$refs.tableRef.setAllCellSelection()},setRangeCellSelection(){this.$refs.tableRef.setRangeCellSelection({startRowKey:30,startColKey:"col2",endRowKey:32,endColKey:"col4",isScrollToStartCell:!0})},initTableData(){let n=[];for(let e=0;e<50;e++)n.push({rowKey:e,col1:`A${e+1}`,col2:`B${e+1}`,col3:`C${e+1}`,col4:`D${e+1}`,col5:`E${e+1}`,col6:`F${e+1}`,col7:`G${e+1}`,col8:`H${e+1}`});this.tableData=n},scrolling({startRowIndex:n}){this.startRowIndex=n}},created(){this.initTableData()}}}()}}},ee={class:"content example-md-doc"},ne=t("div",null,[t("p",null,[s("1、通过实例方法"),t("code",null,"setAllCellSelection()"),s("设置单元格全选"),t("br"),s("2、通过实例方法"),t("code",null,"setRangeCellSelection({ startRowKey,startColKey,endRowKey,endColKey,isScrollToStartCell })"),s("设置区域单元格选中"),t("br")])],-1),te=t("pre",null,[t("code",{class:"html"},`<template>
    <div>
        <button class="button-demo" @click="setAllCellSelection()">单元格全选</button>
        <button class="button-demo" @click="setRangeCellSelection()">区域选择</button>
        <br />
        <br />
        <ve-table
            ref="tableRef"
            fixed-header
            :scroll-width="1600"
            :max-height="380"
            border-y
            :columns="columns"
            :table-data="tableData"
            rowKeyFieldName="rowKey"
            :virtual-scroll-option="virtualScrollOption"
            :rowStyleOption="rowStyleOption"
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
                rowStyleOption: {
                    clickHighlight: false,
                    hoverHighlight: false,
                },
                cellSelectionOption: {
                    // disble cell selection
                    enable: true,
                },
                columns: [
                    {
                        field: "",
                        key: "a",
                        title: "",
                        width: 15,
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
                        title: "col4-col5-col6",
                        children: [
                            {
                                title: "col4-col5",
                                children: [
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
                                ],
                            },
                            {
                                title: "col6",
                                field: "col6",
                                key: "col6",
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
                tableData: [],
            };
        },
        methods: {
            // set all selection
            setAllCellSelection() {
                this.$refs["tableRef"].setAllCellSelection();
            },
            // set range cell selection
            setRangeCellSelection() {
                this.$refs["tableRef"].setRangeCellSelection({
                    startRowKey: 30,
                    startColKey: "col2",
                    endRowKey: 32,
                    endColKey: "col4",
                    isScrollToStartCell: true,
                });
            },
            initTableData() {
                let data = [];
                for (let i = 0; i < 50; i++) {
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
`)],-1);function le(n,e,o,r,d,m){const a=i("anchor"),u=i("element-demo0"),l=i("demo-block");return p(),b("section",ee,[c(a,{"is-edit":"",label:"区域选择实例方法",fileName:"range-selection-instance-methods.md"}),c(l,null,{source:f(()=>[c(u)]),highlight:f(()=>[te]),default:f(()=>[ne]),_:1})])}const oe=y(Z,[["render",le]]),ie={name:"CellSelection",components:{Explain:E,ShortCuts:A,Base:G,DisableSelection:z,SingleSelectionInstanceMethods:Y,RangeSelectionInstanceMethods:oe,API:k}},ce=t("h2",null,"单元格选择",-1);function de(n,e,o,r,d,m){const a=i("Explain"),u=i("ShortCuts"),l=i("Base"),h=i("DisableSelection"),w=i("SingleSelectionInstanceMethods"),g=i("RangeSelectionInstanceMethods"),C=i("API");return p(),b("div",null,[ce,c(a),c(u),c(l),c(h),c(w),c(g),c(C,{title:"API",anchor:"API",desc:"cellSelection 单元格选择配置"})])}const he=y(ie,[["render",de]]);export{he as default};
