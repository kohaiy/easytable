import{E as F}from"./edit-option-props-IULHAYH4.js";import{_ as b,o as f,c as y,h as l,i as u,r as c,a as o,ac as k,w as h,d as v,b as p}from"./index-3l6WcM-u.js";import{V as w}from"./vue.runtime.esm-bundler-BhRfMb4p.js";import"./api-tpl-kFwwUsaH.js";const E={},D={class:"content example-md-doc"},B=l("div",{class:"tip"},[l("p",null,[u("1、通过 "),l("code",null,"editOption"),u("属性配置单元格编辑功能"),l("br"),u(" 2、通过 "),l("code",null,"columns"),u(" 对象设置"),l("code",null,"edit=true"),u("允许编辑的列"),l("br")])],-1),x=[B];function V(e,t){return f(),y("section",D,x)}const K=b(E,[["render",V]]),N={},A={class:"content example-md-doc"},$=k('<p>可编辑单元格支持以下快捷键（参考 excel 快捷键）：</p><table class="example-table"><thead><tr><th style="text-align:left;">功能</th><th style="text-align:left;">快捷键</th></tr></thead><tbody><tr><td style="text-align:left;">活动单元格进入编辑状态</td><td style="text-align:left;"><code>F2</code></td></tr><tr><td style="text-align:left;">停止编辑状态，并停留在当前单元格</td><td style="text-align:left;"><code>Ctrl</code> + <code>Enter</code></td></tr><tr><td style="text-align:left;">单元格内文本换行</td><td style="text-align:left;"><code>Alt</code> + <code>Enter</code></td></tr><tr><td style="text-align:left;">清空活动单元格内容</td><td style="text-align:left;"><code>Delete</code></td></tr><tr><td style="text-align:left;">清空活动单元格内容，并进入编辑状态</td><td style="text-align:left;"><code>BackSpace</code></td></tr><tr><td style="text-align:left;">清空活动单元格内容并填入空格</td><td style="text-align:left;"><code>Space</code></td></tr><tr><td style="text-align:left;">停止编辑状态并向下移动活动单元格</td><td style="text-align:left;"><code>Enter</code></td></tr><tr><td style="text-align:left;">停止编辑状态并向上移动活动单元格</td><td style="text-align:left;"><code>Shift</code> + <code>Enter</code></td></tr><tr><td style="text-align:left;">停止编辑状态并向右移动活动单元格</td><td style="text-align:left;"><code>Tab</code></td></tr><tr><td style="text-align:left;">停止编辑状态并向左移动活动单元格</td><td style="text-align:left;"><code>Shift</code> + <code>Tab</code></td></tr><tr><td style="text-align:left;">支持在可编辑单元格直接输入文本并进入编辑状态</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">支持长文本输入时，编辑框自动伸缩功能</td><td style="text-align:left;">-</td></tr></tbody></table>',2);function O(e,t){const n=c("anchor");return f(),y("section",A,[o(n,{"is-edit":"",label:"快捷键",fileName:"shortcuts.md"}),$])}const S=b(N,[["render",O]]),H={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:e,createVNode:t,openBlock:n,createElementBlock:d}=w;return function(i,s){const m=e("ve-table");return n(),d("div",null,[t(m,{rowKeyFieldName:"rowKey","fixed-header":!0,columns:i.columns,"table-data":i.tableData,editOption:i.editOption,rowStyleOption:i.rowStyleOption,"border-y":""},null,8,["columns","table-data","editOption","rowStyleOption"])])}}(),...function(){return{data(){return{rowStyleOption:{clickHighlight:!1,hoverHighlight:!1},editOption:{beforeStartCellEditing:({row:e,column:t,cellValue:n})=>{if(console.log("beforeStartCellEditing"),console.log("row::",e),console.log("column::",t),console.log("cellValue::",n),console.log("---"),e.rowKey===0&&t.field==="name")return alert("You can't edit this cell."),!1},beforeCellValueChange:({row:e,column:t,changeValue:n})=>{if(console.log("beforeCellValueChange"),console.log("row::",e),console.log("column::",t),console.log("changeValue::",n),console.log("---"),t.field==="number"&&!/^\d+$/.test(n))return alert("请输入数字"),!1},afterCellValueChange:({row:e,column:t,changeValue:n})=>{console.log("afterCellValueChange"),console.log("row::",e),console.log("column::",t),console.log("changeValue::",n),console.log("---")}},columns:[{field:"",key:"a",title:"",width:50,align:"center",operationColumn:!0,renderBodyCell:({row:e,column:t,rowIndex:n},d)=>++n},{field:"name",key:"name",title:"Name",align:"left",width:"15%",edit:!0},{field:"date",key:"date",title:"Date",align:"left",width:"15%",edit:!0},{field:"number",key:"number",title:"Number",align:"right",width:"30%",edit:!0},{field:"address",key:"address",title:"Address",align:"left",width:"40%",edit:!0}],tableData:[{name:"You can't edit",date:"1900-05-20",number:"32",address:"No.1 Century Avenue, Shanghai",rowKey:0},{name:"Dickerson",date:"1910-06-20",number:"676",address:"No.1 Century Avenue, Beijing",rowKey:1},{name:"Larsen",date:"2000-07-20",number:"76",address:"No.1 Century Avenue, Chongqing",rowKey:2},{name:"Geneva",date:"2010-08-20",number:"7797",address:"No.1 Century Avenue, Xiamen",rowKey:3},{name:"Jami",date:"2020-09-20",number:"8978",address:"No.1 Century Avenue, Shenzhen",rowKey:4}]}}}}()}}},I={class:"content example-md-doc"},J=l("p",null,[u("1、尝试将 “Number”列的值改为非数字"),l("br"),u(" 2、尝试修改第一行第一列")],-1),z=l("div",null,[l("p",null,[u("1、单元格进入编辑状态前首先触发"),l("code",null,"beforeStartCellEditing"),u("回调，如果返回 false，则会阻止进入编辑状态。"),l("br"),u("2、单元格停止编辑后首先触发"),l("code",null,"beforeCellValueChange"),u("回调，如果返回 false，则会阻止编辑，单元格还原为编辑前状态。编辑成功将触发"),l("code",null,"afterCellValueChange"),u("方法"),l("br"),u("3、你可以利用"),l("code",null,"beforeCellValueChange"),u("做编辑校验功能"),l("br")])],-1),G=l("pre",null,[l("code",{class:"html"},`<template>
    <div>
        <ve-table
            rowKeyFieldName="rowKey"
            :fixed-header="true"
            :columns="columns"
            :table-data="tableData"
            :editOption="editOption"
            :rowStyleOption="rowStyleOption"
            border-y
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
                // edit option 可控单元格编辑
                editOption: {
                    beforeStartCellEditing: ({ row, column, cellValue }) => {
                        console.log("beforeStartCellEditing");
                        console.log("row::", row);
                        console.log("column::", column);
                        console.log("cellValue::", cellValue);
                        console.log("---");

                        if (row.rowKey === 0 && column.field === "name") {
                            alert("You can't edit this cell.");
                            return false;
                        }
                    },
                    beforeCellValueChange: ({ row, column, changeValue }) => {
                        console.log("beforeCellValueChange");
                        console.log("row::", row);
                        console.log("column::", column);
                        console.log("changeValue::", changeValue);

                        console.log("---");

                        if (column.field === "number" && !/^\\d+$/.test(changeValue)) {
                            alert("请输入数字");
                            return false;
                        }
                    },
                    afterCellValueChange: ({ row, column, changeValue }) => {
                        console.log("afterCellValueChange");
                        console.log("row::", row);
                        console.log("column::", column);
                        console.log("changeValue::", changeValue);
                        console.log("---");
                    },
                },
                columns: [
                    {
                        field: "",
                        key: "a",
                        title: "",
                        width: 50,
                        align: "center",
                        operationColumn: true,
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return ++rowIndex;
                        },
                    },
                    {
                        field: "name",
                        key: "name",
                        title: "Name",
                        align: "left",
                        width: "15%",
                        edit: true,
                    },
                    {
                        field: "date",
                        key: "date",
                        title: "Date",
                        align: "left",
                        width: "15%",
                        edit: true,
                    },
                    {
                        field: "number",
                        key: "number",
                        title: "Number",
                        align: "right",
                        width: "30%",
                        edit: true,
                    },
                    {
                        field: "address",
                        key: "address",
                        title: "Address",
                        align: "left",
                        width: "40%",
                        edit: true,
                    },
                ],
                // table data
                tableData: [
                    {
                        name: "You can't edit",
                        date: "1900-05-20",
                        number: "32",
                        address: "No.1 Century Avenue, Shanghai",
                        rowKey: 0,
                    },
                    {
                        name: "Dickerson",
                        date: "1910-06-20",
                        number: "676",
                        address: "No.1 Century Avenue, Beijing",
                        rowKey: 1,
                    },
                    {
                        name: "Larsen",
                        date: "2000-07-20",
                        number: "76",
                        address: "No.1 Century Avenue, Chongqing",
                        rowKey: 2,
                    },
                    {
                        name: "Geneva",
                        date: "2010-08-20",
                        number: "7797",
                        address: "No.1 Century Avenue, Xiamen",
                        rowKey: 3,
                    },
                    {
                        name: "Jami",
                        date: "2020-09-20",
                        number: "8978",
                        address: "No.1 Century Avenue, Shenzhen",
                        rowKey: 4,
                    },
                ],
            };
        },
    };
<\/script>
`)],-1);function T(e,t,n,d,a,i){const s=c("anchor"),m=c("element-demo0"),r=c("demo-block");return f(),y("section",I,[o(s,{"is-edit":"",label:"基本用法",fileName:"base.md"}),J,o(r,null,{source:h(()=>[o(m)]),highlight:h(()=>[G]),default:h(()=>[z]),_:1})])}const U=b(H,[["render",T]]),L={name:"component-doc",components:{"element-demo0":{render:function(){const{createElementVNode:e,resolveComponent:t,createVNode:n,openBlock:d,createElementBlock:a}=w,i=e("br",null,null,-1),s=e("br",null,null,-1);return function(r,g){const C=t("ve-table");return d(),a("div",null,[e("button",{class:"button-demo",onClick:g[0]||(g[0]=_=>r.startEditingCell(0,"name"))},"编辑单元格0-0"),e("button",{class:"button-demo",onClick:g[1]||(g[1]=_=>r.startEditingCell(2,"hobby",""))}," 编辑并清空单元格2-2 "),i,s,n(C,{ref:"tableRef",rowKeyFieldName:"rowKey","max-height":300,"fixed-header":!0,columns:r.columns,"table-data":r.tableData,editOption:r.editOption,"row-style-option":r.rowStyleOption,"border-y":""},null,8,["columns","table-data","editOption","row-style-option"])])}}(),...function(){return{data(){return{rowStyleOption:{clickHighlight:!1,hoverHighlight:!1},editOption:{cellValueChange:({row:e,column:t})=>{console.log("cellValueChange row::",e),console.log("cellValueChange column::",t)}},columns:[{field:"",key:"a",title:"",width:50,align:"center",operationColumn:!0,renderBodyCell:({row:e,column:t,rowIndex:n},d)=>++n},{field:"name",key:"name",title:"Name",align:"left",width:"15%",edit:!0},{field:"date",key:"date",title:"Date",align:"left",width:"15%",edit:!0},{field:"hobby",key:"hobby",title:"Hobby",align:"left",width:"30%",edit:!0},{field:"address",key:"address",title:"Address",align:"left",width:"40%",edit:!0}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai",rowKey:0},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing",rowKey:1},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing",rowKey:2},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen",rowKey:3},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen",rowKey:4}]}},methods:{startEditingCell(e,t,n){this.$refs.tableRef.startEditingCell({rowKey:e,colKey:t,defaultValue:n})}}}}()}}},M={class:"content example-md-doc"},j=l("div",null,[l("p",null,[u("1、通过实例方法"),l("code",null,"startEditingCell({ rowKey, colKey, defaultValue })"),u("编辑指定的单元格")])],-1),q=l("pre",null,[l("code",{class:"html"},`<template>
    <div>
        <button class="button-demo" @click="startEditingCell(0,'name')">编辑单元格0-0</button>
        <button class="button-demo" @click="startEditingCell(2,'hobby','')">
            编辑并清空单元格2-2
        </button>
        <br />
        <br />
        <ve-table
            ref="tableRef"
            rowKeyFieldName="rowKey"
            :max-height="300"
            :fixed-header="true"
            :columns="columns"
            :table-data="tableData"
            :editOption="editOption"
            :row-style-option="rowStyleOption"
            border-y
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
                // edit option 可控单元格编辑
                editOption: {
                    // cell value change
                    cellValueChange: ({ row, column }) => {
                        console.log("cellValueChange row::", row);
                        console.log("cellValueChange column::", column);
                    },
                },
                columns: [
                    {
                        field: "",
                        key: "a",
                        title: "",
                        width: 50,
                        align: "center",
                        operationColumn: true,
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return ++rowIndex;
                        },
                    },
                    {
                        field: "name",
                        key: "name",
                        title: "Name",
                        align: "left",
                        width: "15%",
                        edit: true,
                    },
                    {
                        field: "date",
                        key: "date",
                        title: "Date",
                        align: "left",
                        width: "15%",
                        edit: true,
                    },
                    {
                        field: "hobby",
                        key: "hobby",
                        title: "Hobby",
                        align: "left",
                        width: "30%",
                        edit: true,
                    },
                    {
                        field: "address",
                        key: "address",
                        title: "Address",
                        align: "left",
                        width: "40%",
                        edit: true,
                    },
                ],
                // table data
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
        methods: {
            // start editing cell
            startEditingCell(rowKey, colKey, defaultValue) {
                this.$refs["tableRef"].startEditingCell({ rowKey, colKey, defaultValue });
            },
        },
    };
<\/script>
`)],-1);function P(e,t,n,d,a,i){const s=c("anchor"),m=c("element-demo0"),r=c("demo-block");return f(),y("section",M,[o(s,{"is-edit":"",label:"实例方法",fileName:"instance-method.md"}),o(r,null,{source:h(()=>[o(m)]),highlight:h(()=>[q]),default:h(()=>[j]),_:1})])}const R=b(L,[["render",P]]),X={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:e,createVNode:t,openBlock:n,createElementBlock:d}=w;return function(i,s){const m=e("ve-table");return n(),d("div",null,[t(m,{"scroll-width":1600,"max-height":500,"row-key-field-name":"rowKey","fixed-header":!0,columns:i.columns,"table-data":i.tableData,"edit-option":i.editOption,"row-style-option":i.rowStyleOption,"virtual-scroll-option":{enable:!0},"border-y":""},null,8,["columns","table-data","edit-option","row-style-option"])])}}(),...function(){return{data(){return{rowStyleOption:{clickHighlight:!1,hoverHighlight:!1},editOption:{cellValueChange:({row:e,column:t})=>{console.log("cellValueChange row::",e),console.log("cellValueChange column::",t)}},columns:[{field:"",key:"a",title:"",width:15,align:"center",fixed:"left",operationColumn:!0,renderBodyCell:({row:e,column:t,rowIndex:n},d)=>++n},{field:"col1",key:"col1",title:"col1",width:50,fixed:"left",edit:!0},{title:"col2-col3",fixed:"left",children:[{field:"col2",key:"col2",title:"col2",width:50,edit:!0},{field:"col3",key:"col3",title:"col3",width:50,edit:!0}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"col4",title:"col4",width:130,edit:!0},{field:"col5",key:"col5",title:"col5",width:140,edit:!0}]},{title:"col6",field:"col6",key:"col6",width:140,edit:!0}]},{title:"col7",fixed:"right",children:[{title:"col7-1",field:"col7",key:"col7",width:50,edit:!0}]},{field:"col8",key:"col8",title:"col8",width:50,fixed:"right",edit:!0}],tableData:[]}},methods:{initTableData(){let e=[];for(let t=0;t<100;t++)e.push({rowKey:t,col1:"A"+t,col2:"B"+t,col3:"C"+t,col4:"D"+t,col5:"E"+t,col6:"F"+t,col7:"G"+t,col8:"H"+t});this.tableData=e}},created(){this.initTableData()}}}()}}},Y={class:"content example-md-doc"},Q=l("pre",null,[l("code",{class:"html"},`<template>
    <div>
        <ve-table
            :scroll-width="1600"
            :max-height="500"
            row-key-field-name="rowKey"
            :fixed-header="true"
            :columns="columns"
            :table-data="tableData"
            :edit-option="editOption"
            :row-style-option="rowStyleOption"
            :virtual-scroll-option="{enable:true}"
            border-y
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
                // edit option 可控单元格编辑
                editOption: {
                    // cell value change
                    cellValueChange: ({ row, column }) => {
                        console.log("cellValueChange row::", row);
                        console.log("cellValueChange column::", column);
                    },
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
                        edit: true,
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
                                edit: true,
                            },
                            {
                                field: "col3",
                                key: "col3",
                                title: "col3",
                                width: 50,
                                edit: true,
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
                                        edit: true,
                                    },
                                    {
                                        field: "col5",
                                        key: "col5",
                                        title: "col5",
                                        width: 140,
                                        edit: true,
                                    },
                                ],
                            },
                            {
                                title: "col6",
                                field: "col6",
                                key: "col6",
                                width: 140,
                                edit: true,
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
                                edit: true,
                            },
                        ],
                    },
                    {
                        field: "col8",
                        key: "col8",
                        title: "col8",
                        width: 50,
                        fixed: "right",
                        edit: true,
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
        },
        created() {
            this.initTableData();
        },
    };
<\/script>
`)],-1);function W(e,t,n,d,a,i){const s=c("anchor"),m=c("element-demo0"),r=c("demo-block");return f(),y("section",Y,[o(s,{"is-edit":"",label:"结合固定列",fileName:"combine-column-fixed.md"}),o(r,null,{source:h(()=>[o(m)]),highlight:h(()=>[Q]),_:1})])}const Z=b(X,[["render",W]]),ee={name:"component-doc",components:{"element-demo0":{render:function(){const{createElementVNode:e,resolveComponent:t,createVNode:n,openBlock:d,createElementBlock:a}=w,i=e("br",null,null,-1),s=e("br",null,null,-1);return function(r,g){const C=t("ve-table");return d(),a("div",null,[e("button",{class:"button-demo",onClick:g[0]||(g[0]=_=>r.submit())},"提交"),i,s,n(C,{rowKeyFieldName:"rowKey","fixed-header":!0,columns:r.columns,"table-data":r.tableData,"cell-selection-option":r.cellSelectionOption,"row-style-option":r.rowStyleOption},null,8,["columns","table-data","cell-selection-option","row-style-option"])])}}(),...function(){return{data(){return{rowStyleOption:{clickHighlight:!1,hoverHighlight:!1},submitData:[],cellSelectionOption:{enable:!1},columns:[{field:"",key:"a",title:"",width:50,align:"center",operationColumn:!0,renderBodyCell:({row:e,column:t,rowIndex:n},d)=>++n},{field:"name",key:"name",title:"Name",align:"left",width:"15%"},{field:"date",key:"date",title:"Date",align:"left",width:"15%",renderBodyCell:({row:e,column:t,rowIndex:n},d)=>o(c("ElDatePicker"),{size:"small",modelValue:e.date,"onUpdate:modelValue":a=>{e.date=a,this.cellDataChange(e,t,a)},type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},null)},{field:"age",key:"age",title:"Age",align:"center",width:"30%",renderBodyCell:({row:e,column:t,rowIndex:n},d)=>o(c("el-input-number"),{size:"small",min:1,modelValue:e.age,"onUpdate:modelValue":a=>{e.age=a},onChange:a=>{this.cellDataChange(e,t,a)}},null)},{field:"gender",key:"gender",title:"Gender",align:"left",width:"40%",renderBodyCell:({row:e,column:t,rowIndex:n},d)=>o(c("el-select"),{size:"small",modelValue:e.gender,"onUpdate:modelValue":a=>{e.gender=a,this.cellDataChange(e,t,a)},placeholder:"请选择"},{default:()=>[o(c("el-option"),{label:"female",value:"female"},null),o(c("el-option"),{label:"male",value:"male"},null)]})}],tableData:[{name:"John",date:"1900-05-20",age:17,gender:"female",rowKey:0},{name:"Dickerson",date:"1910-06-20",age:20,gender:"male",rowKey:1},{name:"Larsen",date:"2000-07-20",age:22,gender:"female",rowKey:2},{name:"Geneva",date:"2010-08-20",age:18,gender:"male",rowKey:3},{name:"Jami",date:"2020-09-20",age:29,gender:"female",rowKey:4}]}},methods:{submit(){alert(JSON.stringify(this.submitData))},cellDataChange(e,t,n){const{submitData:d}=this;let a=d.find(i=>i.rowKey===e.rowKey&&i.field===t.field);if(a)a.value=n;else{let i={rowKey:e.rowKey,field:t.field,value:n};this.submitData.push(i)}}}}}()}}},te={class:"content example-md-doc"},ne=l("div",null,[l("p",null,[u("1、你也可以结合 element-ui 组件做日期、数字、下拉等编辑功能"),l("br"),u("2、注意：组件本身可能会和第三方库组件的快捷键冲突，此时你可以通过 "),l("code",null,"cellSelectionOption"),u("去禁用单元格选择功能")])],-1),le=l("pre",null,[l("code",{class:"html"},`<template>
    <div>
        <button class="button-demo" @click="submit()">提交</button>
        <br />
        <br />
        <ve-table
            rowKeyFieldName="rowKey"
            :fixed-header="true"
            :columns="columns"
            :table-data="tableData"
            :cell-selection-option="cellSelectionOption"
            :row-style-option="rowStyleOption"
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
                // submit data
                submitData: [
                    // {
                    //     rowKey: 0,
                    //     field: "",
                    //     value: "",
                    // },
                ],
                cellSelectionOption: {
                    // default true
                    enable: false,
                },
                columns: [
                    {
                        field: "",
                        key: "a",
                        title: "",
                        width: 50,
                        align: "center",
                        operationColumn: true,
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return ++rowIndex;
                        },
                    },
                    {
                        field: "name",
                        key: "name",
                        title: "Name",
                        align: "left",
                        width: "15%",
                    },
                    {
                        field: "date",
                        key: "date",
                        title: "Date",
                        align: "left",
                        width: "15%",
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return (
                                <ElDatePicker
                                    size="small"
                                    modelValue={row["date"]}
                                    onUpdate:modelValue={(val) => {
                                        row["date"] = val;
                                        this.cellDataChange(row, column, val);
                                    }}
                                    type="date"
                                    value-format="yyyy-MM-dd"
                                    placeholder="选择日期"
                                />
                            );
                        },
                    },
                    {
                        field: "age",
                        key: "age",
                        title: "Age",
                        align: "center",
                        width: "30%",
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return (
                                <el-input-number
                                    size="small"
                                    min={1}
                                    modelValue={row["age"]}
                                    onUpdate:modelValue={(val) => {
                                        row["age"] = val;
                                    }}
                                    onChange={(val) => {
                                        this.cellDataChange(row, column, val);
                                    }}
                                ></el-input-number>
                            );
                        },
                    },
                    {
                        field: "gender",
                        key: "gender",
                        title: "Gender",
                        align: "left",
                        width: "40%",
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return (
                                <el-select
                                    size="small"
                                    modelValue={row["gender"]}
                                    onUpdate:modelValue={(val) => {
                                        row["gender"] = val;
                                        this.cellDataChange(row, column, val);
                                    }}
                                    placeholder="请选择"
                                >
                                    <el-option label="female" value="female"></el-option>
                                    <el-option label="male" value="male"></el-option>
                                </el-select>
                            );
                        },
                    },
                ],
                // table data
                tableData: [
                    {
                        name: "John",
                        date: "1900-05-20",
                        age: 17,
                        gender: "female",
                        rowKey: 0,
                    },
                    {
                        name: "Dickerson",
                        date: "1910-06-20",
                        age: 20,
                        gender: "male",
                        rowKey: 1,
                    },
                    {
                        name: "Larsen",
                        date: "2000-07-20",
                        age: 22,
                        gender: "female",
                        rowKey: 2,
                    },
                    {
                        name: "Geneva",
                        date: "2010-08-20",
                        age: 18,
                        gender: "male",
                        rowKey: 3,
                    },
                    {
                        name: "Jami",
                        date: "2020-09-20",
                        age: 29,
                        gender: "female",
                        rowKey: 4,
                    },
                ],
            };
        },
        methods: {
            // submit
            submit() {
                alert(JSON.stringify(this.submitData));
            },

            // cell data change
            cellDataChange(row, column, cellValue) {
                const { submitData } = this;

                let currentCell = submitData.find(
                    (x) => x.rowKey === row["rowKey"] && x.field === column.field,
                );

                if (currentCell) {
                    currentCell.value = cellValue;
                } else {
                    let newCell = {
                        rowKey: row["rowKey"],
                        field: column.field,
                        value: cellValue,
                    };
                    this.submitData.push(newCell);
                }
            },
        },
    };
<\/script>
`)],-1);function oe(e,t,n,d,a,i){const s=c("anchor"),m=c("element-demo0"),r=c("demo-block");return f(),y("section",te,[o(s,{"is-edit":"",label:"结合 element-ui",fileName:"combine-element-ui.md"}),o(r,null,{source:h(()=>[o(m)]),highlight:h(()=>[le]),default:h(()=>[ne]),_:1})])}const ae=b(ee,[["render",oe]]),ie=l("h2",null,"单元格编辑",-1),se=v({name:"BasicMain",__name:"main",setup(e){return(t,n)=>(f(),y("div",null,[ie,o(p(K)),o(p(S)),o(p(U)),o(p(R)),o(p(Z)),o(p(ae)),o(F,{title:"API",anchor:"API",desc:"eidtOption 单元格编辑配置"})]))}});export{se as default};
