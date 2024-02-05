import{R as K}from"./radio-option-props-XWh8psVz.js";import{_ as h,o as b,c as p,g as k,r as t,a as d,w as s,m as n,p as m}from"./index-LjdMESSP.js";import{V as g}from"./vue.runtime.esm-bundler-q2XkqXEB.js";import"./api-tpl-JMJJBkOO.js";const E={},A={class:"content example-md-doc"},N=k('<div class="tip"><p>1、通过 <code>radioOption</code> 属性开启单选功能。<br> 2、通过在<code>columns</code> 设置<code>type=radio</code>作为单选的列<br> 3、设置<code>rowKeyFieldName</code>属性对应行数据的列名<br> 4、<code>selectedRowChange</code>行改变事件。事件接收 1 个参数，<code>row</code>:当前行数据</p></div>',1),B=[N];function D(e,i){return b(),p("section",A,B)}const R=h(E,[["render",D]]),$={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:e,createVNode:i,openBlock:c,createElementBlock:l}=g;return function(o,r){const a=e("ve-table");return c(),l("div",null,[i(a,{style:{width:"100%"},columns:o.columns,"table-data":o.tableData,"radio-option":o.radioOption,"row-key-field-name":"rowKey"},null,8,["columns","table-data","radio-option"])])}}(),...function(){return{data(){return{radioOption:{selectedRowChange:({row:e})=>{console.log(e)}},columns:[{field:"",key:"a",type:"radio",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},S={class:"content example-md-doc"},F=n("pre",null,[n("code",{class:"html"},`<template>
    <div>
        <ve-table
            style="width:100%"
            :columns="columns"
            :table-data="tableData"
            :radio-option="radioOption"
            row-key-field-name="rowKey"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                radioOption: {
                    // 行选择改变事件
                    selectedRowChange: ({ row }) => {
                        console.log(row);
                    },
                },
                columns: [
                    {
                        field: "",
                        key: "a",
                        // type=radio
                        type: "radio",
                        title: "",
                        width: 50,
                        align: "center",
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
`)],-1);function O(e,i,c,l,y,o){const r=t("anchor"),a=t("element-demo0"),u=t("demo-block");return b(),p("section",S,[d(r,{"is-edit":"",label:"基础功能",fileName:"base.md"}),d(u,null,{source:s(()=>[d(a)]),highlight:s(()=>[F]),_:1})])}const J=h($,[["render",O]]),V={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:e,createVNode:i,openBlock:c,createElementBlock:l}=g;return function(o,r){const a=e("ve-table");return c(),l("div",null,[i(a,{style:{width:"100%"},columns:o.columns,"table-data":o.tableData,"radio-option":o.radioOption,"row-key-field-name":"rowKey"},null,8,["columns","table-data","radio-option"])])}}(),...function(){return{data(){return{radioOption:{selectedRowChange:({row:e})=>{console.log(e)}},columns:[{field:"name",key:"b",type:"radio",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},x={class:"content example-md-doc"},j=n("div",null,[n("p",null,"选择已有的列作为 radio 单选列")],-1),q=n("pre",null,[n("code",{class:"html"},`<template>
    <div>
        <ve-table
            style="width:100%"
            :columns="columns"
            :table-data="tableData"
            :radio-option="radioOption"
            row-key-field-name="rowKey"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                radioOption: {
                    // 行选择改变事件
                    selectedRowChange: ({ row }) => {
                        console.log(row);
                    },
                },
                columns: [
                    {
                        field: "name",
                        key: "b",
                        // type=radio
                        type: "radio",
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
`)],-1);function z(e,i,c,l,y,o){const r=t("anchor"),a=t("element-demo0"),u=t("demo-block");return b(),p("section",x,[d(r,{"is-edit":"",label:"单选列配置",fileName:"radio-column.md"}),d(u,null,{source:s(()=>[d(a)]),highlight:s(()=>[q]),default:s(()=>[j]),_:1})])}const G=h(V,[["render",z]]),H={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:e,createVNode:i,openBlock:c,createElementBlock:l}=g;return function(o,r){const a=e("ve-table");return c(),l("div",null,[i(a,{style:{width:"100%"},columns:o.columns,"table-data":o.tableData,"radio-option":o.radioOption,"row-key-field-name":"rowKey"},null,8,["columns","table-data","radio-option"])])}}(),...function(){return{data(){return{radioOption:{defaultSelectedRowKey:1003,selectedRowChange:({row:e})=>{console.log(e)}},columns:[{field:"",key:"a",type:"radio",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},L={class:"content example-md-doc"},X=n("div",null,[n("p",null,[n("code",null,"defaultSelectedRowKey"),m("设置需要默认选中的 rowKey")])],-1),I=n("pre",null,[n("code",{class:"html"},`<template>
    <div>
        <ve-table
            style="width:100%"
            :columns="columns"
            :table-data="tableData"
            :radio-option="radioOption"
            row-key-field-name="rowKey"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                radioOption: {
                    defaultSelectedRowKey: 1003,
                    // 行选择改变事件
                    selectedRowChange: ({ row }) => {
                        console.log(row);
                    },
                },
                columns: [
                    {
                        field: "",
                        key: "a",
                        // type=radio
                        type: "radio",
                        title: "",
                        width: 50,
                        align: "center",
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
`)],-1);function P(e,i,c,l,y,o){const r=t("anchor"),a=t("element-demo0"),u=t("demo-block");return b(),p("section",L,[d(r,{"is-edit":"",label:"默认选中",fileName:"selected-default.md"}),d(u,null,{source:s(()=>[d(a)]),highlight:s(()=>[I]),default:s(()=>[X]),_:1})])}const M=h(H,[["render",P]]),T={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:e,createVNode:i,openBlock:c,createElementBlock:l}=g;return function(o,r){const a=e("ve-table");return c(),l("div",null,[i(a,{style:{width:"100%"},columns:o.columns,"table-data":o.tableData,"radio-option":o.radioOption,"row-key-field-name":"rowKey"},null,8,["columns","table-data","radio-option"])])}}(),...function(){return{data(){return{radioOption:{disableSelectedRowKeys:[1003,1005],selectedRowChange:({row:e})=>{console.log(e)}},columns:[{field:"",key:"a",type:"radio",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},Q={class:"content example-md-doc"},U=n("div",null,[n("p",null,[n("code",null,"disableSelectedRowKeys"),m("设置需要禁止选中的 rowKey 数组（禁止勾选或者禁止取消勾选）。")])],-1),W=n("pre",null,[n("code",{class:"html"},`<template>
    <div>
        <ve-table
            style="width:100%"
            :columns="columns"
            :table-data="tableData"
            :radio-option="radioOption"
            row-key-field-name="rowKey"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                radioOption: {
                    // 禁用的选择（禁止勾选或者禁止取消勾选）
                    disableSelectedRowKeys: [1003, 1005],
                    // 行选择改变事件
                    selectedRowChange: ({ row }) => {
                        console.log(row);
                    },
                },
                columns: [
                    {
                        field: "",
                        key: "a",
                        // type=radio
                        type: "radio",
                        title: "",
                        width: 50,
                        align: "center",
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
`)],-1);function Y(e,i,c,l,y,o){const r=t("anchor"),a=t("element-demo0"),u=t("demo-block");return b(),p("section",Q,[d(r,{"is-edit":"",label:"禁用选择",fileName:"selected-disable.md"}),d(u,null,{source:s(()=>[d(a)]),highlight:s(()=>[W]),default:s(()=>[U]),_:1})])}const Z=h(T,[["render",Y]]),ee={name:"component-doc",components:{"element-demo0":{render:function(){const{createElementVNode:e,resolveComponent:i,createVNode:c,openBlock:l,createElementBlock:y}=g,o=e("br",null,null,-1),r=e("br",null,null,-1);return function(u,w){const _=i("ve-table");return l(),y("div",null,[e("button",{class:"button-demo",onClick:w[0]||(w[0]=f=>u.selectedSwitch(1002))},"第二行选中切换"),e("button",{class:"button-demo",onClick:w[1]||(w[1]=f=>u.unselected())},"取消选中"),o,r,c(_,{style:{width:"100%"},columns:u.columns,"table-data":u.tableData,"radio-option":u.radioOption,"row-key-field-name":"rowKey"},null,8,["columns","table-data","radio-option"])])}}(),...function(){return{data(){return{radioOption:{selectedRowKey:"",selectedRowChange:({row:e})=>{this.changeSelectedRowKey(e.rowKey)}},columns:[{field:"",key:"a",type:"radio",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{changeSelectedRowKey(e){this.radioOption.selectedRowKey=e},selectedSwitch(e){this.radioOption.selectedRowKey===e?this.radioOption.selectedRowKey="":this.radioOption.selectedRowKey=e},unselected(){this.radioOption.selectedRowKey=""}}}}()}}},ne={class:"content example-md-doc"},oe=n("div",null,[n("p",null,[m("1、"),n("code",null,"selectedRowKey"),m('为单选的"可控属性"，选择后需要在'),n("code",null,"selectedRowChange"),m("事件中做重新赋值处理。通过这个属性可以自定义更多功能"),n("br"),m("2、设置"),n("code",null,"selectedRowKey"),m("属性后 "),n("code",null,"defaultSelectedRowKey"),m("属性将会失效")])],-1),te=n("pre",null,[n("code",{class:"html"},`<template>
    <div>
        <button class="button-demo" @click="selectedSwitch(1002)">第二行选中切换</button>
        <button class="button-demo" @click="unselected()">取消选中</button>
        <br />
        <br />
        <ve-table
            style="width:100%"
            :columns="columns"
            :table-data="tableData"
            :radio-option="radioOption"
            row-key-field-name="rowKey"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                radioOption: {
                    selectedRowKey: "",
                    // 行选择改变事件
                    selectedRowChange: ({ row }) => {
                        this.changeSelectedRowKey(row.rowKey);
                    },
                },
                columns: [
                    {
                        field: "",
                        key: "a",
                        // type=radio
                        type: "radio",
                        title: "",
                        width: 50,
                        align: "center",
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
            changeSelectedRowKey(key) {
                this.radioOption.selectedRowKey = key;
            },
            // 切换选中行
            selectedSwitch(key) {
                let selectedRowKey = this.radioOption.selectedRowKey;

                if (selectedRowKey === key) {
                    this.radioOption.selectedRowKey = "";
                } else {
                    this.radioOption.selectedRowKey = key;
                }
            },
            // 取消选中
            unselected() {
                this.radioOption.selectedRowKey = "";
            },
        },
    };
<\/script>
`)],-1);function de(e,i,c,l,y,o){const r=t("anchor"),a=t("element-demo0"),u=t("demo-block");return b(),p("section",ne,[d(r,{"is-edit":"",label:"可控属性",fileName:"selected-control.md"}),d(u,null,{source:s(()=>[d(a)]),highlight:s(()=>[te]),default:s(()=>[oe]),_:1})])}const ae=h(ee,[["render",de]]),ie={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:e,createVNode:i,openBlock:c,createElementBlock:l}=g;return function(o,r){const a=e("ve-table");return c(),l("div",null,[i(a,{style:{width:"100%"},columns:o.columns,"table-data":o.tableData,"radio-option":o.radioOption,"row-key-field-name":"rowKey","event-custom-option":o.eventCustomOption},null,8,["columns","table-data","radio-option","event-custom-option"])])}}(),...function(){return{data(){return{eventCustomOption:{bodyRowEvents:({row:e,rowIndex:i})=>({click:c=>{const l=e.rowKey;this.changeSelectedRowKeyByRowClick(l)}})},radioOption:{selectedRowKey:"",selectedRowChange:({row:e})=>{this.changeSelectedRowKey(e.rowKey)}},columns:[{field:"",key:"a",type:"radio",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{changeSelectedRowKey(e){this.radioOption.selectedRowKey=e},changeSelectedRowKeyByRowClick(e){this.radioOption.selectedRowKey=e}}}}()}}},le={class:"content example-md-doc"},re=n("p",null,"此示例为行点击触发选中，你也可以通过“事件自定义”实现列点击选中效果",-1),ce=n("div",null,[n("p",null,"可控属性结合“事件自定义”，即可实现点击行触发选中效果")],-1),ue=n("pre",null,[n("code",{class:"html"},`<template>
    <div>
        <ve-table
            style="width:100%"
            :columns="columns"
            :table-data="tableData"
            :radio-option="radioOption"
            row-key-field-name="rowKey"
            :event-custom-option="eventCustomOption"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                eventCustomOption: {
                    bodyRowEvents: ({ row, rowIndex }) => {
                        return {
                            click: (event) => {
                                const currentRowKey = row["rowKey"];
                                this.changeSelectedRowKeyByRowClick(currentRowKey);
                            },
                        };
                    },
                },
                radioOption: {
                    selectedRowKey: "",
                    // 行选择改变事件
                    selectedRowChange: ({ row }) => {
                        this.changeSelectedRowKey(row.rowKey);
                    },
                },
                columns: [
                    {
                        field: "",
                        key: "a",
                        // type=radio
                        type: "radio",
                        title: "",
                        width: 50,
                        align: "center",
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
            changeSelectedRowKey(key) {
                this.radioOption.selectedRowKey = key;
            },
            // 行点击触发
            changeSelectedRowKeyByRowClick(currentRowKey) {
                this.radioOption.selectedRowKey = currentRowKey;
            },
        },
    };
<\/script>
`)],-1);function se(e,i,c,l,y,o){const r=t("anchor"),a=t("element-demo0"),u=t("demo-block");return b(),p("section",le,[d(r,{"is-edit":"",label:"行点击触发选中",fileName:"selected-row-click.md"}),re,d(u,null,{source:s(()=>[d(a)]),highlight:s(()=>[ue]),default:s(()=>[ce]),_:1})])}const ye=h(ie,[["render",se]]),me={name:"BasicMain",components:{Explain:R,Base:J,RadioColumn:G,SelectedDefault:M,SelectedDisable:Z,SelectedControl:ae,SelectedRowClick:ye,API:K}},he=n("h2",null,"行单选",-1);function be(e,i,c,l,y,o){const r=t("Explain"),a=t("Base"),u=t("RadioColumn"),w=t("SelectedDefault"),_=t("SelectedDisable"),f=t("SelectedControl"),C=t("SelectedRowClick"),v=t("API");return b(),p("div",null,[he,d(r),d(a),d(u),d(w),d(_),d(f),d(C),d(v,{title:"API",anchor:"API",desc:"radioOption 行单选配置"})])}const fe=h(me,[["render",be]]);export{fe as default};
