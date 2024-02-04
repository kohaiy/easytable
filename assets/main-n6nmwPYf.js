import{C as v}from"./checkbox-option-props-tYrxGsWo.js";import{_ as m,o as b,c as p,ac as E,r as c,a as l,w as r,h as t,i as y}from"./index-ktVylMVm.js";import{V as g}from"./vue.runtime.esm-bundler-oE0CmIyJ.js";import"./api-tpl-MJq6hhFC.js";const A={},x={class:"content example-md-doc"},B=E('<div class="tip"><p>1、通过 <code>checkboxOption</code> 属性开启多选功能。<br> 2、通过在<code>columns</code> 设置<code>type=checkbox</code>作为多选的列<br> 3、设置<code>rowKeyFieldName</code>属性对应行数据的列名<br> 4、<code>selectedRowChange</code>行改变事件。事件接收 3 个参数，<code>row</code>:当前行数据，<code>isSelected</code>当前行是否选中，<code>selectedRowKeys</code>所有选中的 rowKey 信息。<br> 5、<code>selectedAllChange</code>全选事件。事件接收 2 个参数，<code>isSelected</code>是否全选。<code>selectedRowKeys</code>所有选中的 rowKey 信息</p></div>',1),D=[B];function N(e,n){return b(),p("section",x,D)}const R=m(A,[["render",N]]),S={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:e,createVNode:n,openBlock:o,createElementBlock:s}=g;return function(d,u){const a=e("ve-table");return o(),s("div",null,[n(a,{style:{width:"100%"},columns:d.columns,"table-data":d.tableData,"row-key-field-name":"rowKey","checkbox-option":d.checkboxOption},null,8,["columns","table-data","checkbox-option"])])}}(),...function(){return{data(){return{checkboxOption:{selectedRowChange:({row:e,isSelected:n,selectedRowKeys:o})=>{console.log(e,n,o)},selectedAllChange:({isSelected:e,selectedRowKeys:n})=>{console.log(e,n)}},columns:[{field:"",key:"a",type:"checkbox",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},F={class:"content example-md-doc"},$=t("pre",null,[t("code",{class:"html"},`<template>
    <div>
        <ve-table
            style="width:100%"
            :columns="columns"
            :table-data="tableData"
            row-key-field-name="rowKey"
            :checkbox-option="checkboxOption"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                checkboxOption: {
                    // 行选择改变事件
                    selectedRowChange: ({ row, isSelected, selectedRowKeys }) => {
                        console.log(row, isSelected, selectedRowKeys);
                    },
                    // 全选改变事件
                    selectedAllChange: ({ isSelected, selectedRowKeys }) => {
                        console.log(isSelected, selectedRowKeys);
                    },
                },

                columns: [
                    {
                        field: "",
                        key: "a",
                        // type=checkbox
                        type: "checkbox",
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
`)],-1);function O(e,n,o,s,h,d){const u=c("anchor"),a=c("element-demo0"),i=c("demo-block");return b(),p("section",F,[l(u,{"is-edit":"",label:"基础功能",fileName:"base.md"}),l(i,null,{source:r(()=>[l(a)]),highlight:r(()=>[$]),_:1})])}const J=m(S,[["render",O]]),V={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:e,createVNode:n,openBlock:o,createElementBlock:s}=g;return function(d,u){const a=e("ve-table");return o(),s("div",null,[n(a,{style:{width:"100%"},columns:d.columns,"table-data":d.tableData,"row-key-field-name":"rowKey","checkbox-option":d.checkboxOption},null,8,["columns","table-data","checkbox-option"])])}}(),...function(){return{data(){return{checkboxOption:{defaultSelectedRowKeys:[1001,1003,1004],selectedRowChange:({row:e,isSelected:n,selectedRowKeys:o})=>{console.log(e,n,o)},selectedAllChange:({isSelected:e,selectedRowKeys:n})=>{console.log(e,n)}},columns:[{field:"",key:"a",type:"checkbox",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},H={class:"content example-md-doc"},j=t("div",null,[t("p",null,[y("1、"),t("code",null,"defaultSelectedRowKeys"),y("设置需要默认选中的 rowKey 数组。"),t("br"),y("2、"),t("code",null,"defaultSelectedAllRows"),y("默认选中全部。")])],-1),q=t("pre",null,[t("code",{class:"html"},`<template>
    <div>
        <ve-table
            style="width:100%"
            :columns="columns"
            :table-data="tableData"
            row-key-field-name="rowKey"
            :checkbox-option="checkboxOption"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                checkboxOption: {
                    defaultSelectedRowKeys: [1001, 1003, 1004],
                    // 行选择改变事件
                    selectedRowChange: ({ row, isSelected, selectedRowKeys }) => {
                        console.log(row, isSelected, selectedRowKeys);
                    },
                    // 全选改变事件
                    selectedAllChange: ({ isSelected, selectedRowKeys }) => {
                        console.log(isSelected, selectedRowKeys);
                    },
                },

                columns: [
                    {
                        field: "",
                        key: "a",
                        // type=checkbox
                        type: "checkbox",
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
`)],-1);function z(e,n,o,s,h,d){const u=c("anchor"),a=c("element-demo0"),i=c("demo-block");return b(),p("section",H,[l(u,{"is-edit":"",label:"默认选中",fileName:"selected-default.md"}),l(i,null,{source:r(()=>[l(a)]),highlight:r(()=>[q]),default:r(()=>[j]),_:1})])}const G=m(V,[["render",z]]),I={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:e,createVNode:n,openBlock:o,createElementBlock:s}=g;return function(d,u){const a=e("ve-table");return o(),s("div",null,[n(a,{style:{width:"100%"},columns:d.columns,"table-data":d.tableData,"row-key-field-name":"rowKey","checkbox-option":d.checkboxOption},null,8,["columns","table-data","checkbox-option"])])}}(),...function(){return{data(){return{checkboxOption:{selectedRowChange:({row:e,isSelected:n,selectedRowKeys:o})=>{console.log(e,n,o)},selectedAllChange:({isSelected:e,selectedRowKeys:n})=>{console.log(e,n)}},columns:[{field:"name",key:"b",type:"checkbox",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},L={class:"content example-md-doc"},X=t("div",null,[t("p",null,"选择已有的列作为 checkbox 多选列")],-1),P=t("pre",null,[t("code",{class:"html"},`<template>
    <div>
        <ve-table
            style="width:100%"
            :columns="columns"
            :table-data="tableData"
            row-key-field-name="rowKey"
            :checkbox-option="checkboxOption"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                checkboxOption: {
                    // 行选择改变事件
                    selectedRowChange: ({ row, isSelected, selectedRowKeys }) => {
                        console.log(row, isSelected, selectedRowKeys);
                    },
                    // 全选改变事件
                    selectedAllChange: ({ isSelected, selectedRowKeys }) => {
                        console.log(isSelected, selectedRowKeys);
                    },
                },

                columns: [
                    {
                        field: "name",
                        key: "b",
                        type: "checkbox",
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
`)],-1);function M(e,n,o,s,h,d){const u=c("anchor"),a=c("element-demo0"),i=c("demo-block");return b(),p("section",L,[l(u,{"is-edit":"",label:"多选列配置",fileName:"selected-column.md"}),l(i,null,{source:r(()=>[l(a)]),highlight:r(()=>[P]),default:r(()=>[X]),_:1})])}const T=m(I,[["render",M]]),Q={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:e,createVNode:n,openBlock:o,createElementBlock:s}=g;return function(d,u){const a=e("ve-table");return o(),s("div",null,[n(a,{style:{width:"100%"},columns:d.columns,"table-data":d.tableData,"row-key-field-name":"rowKey","checkbox-option":d.checkboxOption},null,8,["columns","table-data","checkbox-option"])])}}(),...function(){return{data(){return{checkboxOption:{disableSelectedRowKeys:[1002,1005],defaultSelectedRowKeys:[1001,1003,1004,1005],selectedRowChange:({row:e,isSelected:n,selectedRowKeys:o})=>{console.log(e,n,o)},selectedAllChange:({isSelected:e,selectedRowKeys:n})=>{console.log(e,n)}},columns:[{field:"",key:"a",type:"checkbox",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},U={class:"content example-md-doc"},W=t("div",null,[t("p",null,[t("code",null,"disableSelectedRowKeys"),y("设置需要禁止选中的 rowKey 数组（禁止勾选或者禁止取消勾选）。")])],-1),Y=t("pre",null,[t("code",{class:"html"},`<template>
    <div>
        <ve-table
            style="width:100%"
            :columns="columns"
            :table-data="tableData"
            row-key-field-name="rowKey"
            :checkbox-option="checkboxOption"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                checkboxOption: {
                    // 禁用的选择（禁止勾选或者禁止取消勾选）
                    disableSelectedRowKeys: [1002, 1005],
                    // 默认选择
                    defaultSelectedRowKeys: [1001, 1003, 1004, 1005],
                    // 行选择改变事件
                    selectedRowChange: ({ row, isSelected, selectedRowKeys }) => {
                        console.log(row, isSelected, selectedRowKeys);
                    },
                    // 全选改变事件
                    selectedAllChange: ({ isSelected, selectedRowKeys }) => {
                        console.log(isSelected, selectedRowKeys);
                    },
                },

                columns: [
                    {
                        field: "",
                        key: "a",
                        // type=checkbox
                        type: "checkbox",
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
`)],-1);function Z(e,n,o,s,h,d){const u=c("anchor"),a=c("element-demo0"),i=c("demo-block");return b(),p("section",U,[l(u,{"is-edit":"",label:"禁止选中",fileName:"selected-disable.md"}),l(i,null,{source:r(()=>[l(a)]),highlight:r(()=>[Y]),default:r(()=>[W]),_:1})])}const ee=m(Q,[["render",Z]]),ne={name:"component-doc",components:{"element-demo0":{render:function(){const{createElementVNode:e,resolveComponent:n,createVNode:o,openBlock:s,createElementBlock:h}=g,d=e("br",null,null,-1),u=e("br",null,null,-1);return function(i,w){const _=n("ve-table");return s(),h("div",null,[e("button",{class:"button-demo",onClick:w[0]||(w[0]=k=>i.selectedSwitch(1002))},"第二行选中切换"),e("button",{class:"button-demo",onClick:w[1]||(w[1]=k=>i.selectedAll())},"选中全部"),e("button",{class:"button-demo",onClick:w[2]||(w[2]=k=>i.unselectedAll())},"取消选中全部"),d,u,o(_,{style:{width:"100%"},columns:i.columns,"table-data":i.tableData,"row-key-field-name":"rowKey","checkbox-option":i.checkboxOption},null,8,["columns","table-data","checkbox-option"])])}}(),...function(){return{data(){return{checkboxOption:{selectedRowKeys:[1003],selectedRowChange:({row:e,isSelected:n,selectedRowKeys:o})=>{this.changeSelectedRowKeys(o)},selectedAllChange:({isSelected:e,selectedRowKeys:n})=>{this.changeSelectedRowKeys(n)}},columns:[{field:"",key:"a",type:"checkbox",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{changeSelectedRowKeys(e){this.checkboxOption.selectedRowKeys=e},selectedSwitch(e){let n=this.checkboxOption.selectedRowKeys;const o=n.indexOf(e);o>-1?n.splice(o,1):n.push(e)},selectedAll(){this.checkboxOption.selectedRowKeys=this.tableData.map(e=>e.rowKey)},unselectedAll(){this.checkboxOption.selectedRowKeys=[]}}}}()}}},oe={class:"content example-md-doc"},te=t("div",null,[t("p",null,[y("1、"),t("code",null,"selectedRowKeys"),y('为多选的"可控属性"，选择后需要在'),t("code",null,"selectedRowChange"),y("事件和"),t("code",null,"selectedAllChange"),y("事件中做重新赋值处理。通过这个属性可以自定义更多功能"),t("br"),y("2、设置"),t("code",null,"selectedRowKeys"),y("属性后"),t("code",null,"defaultSelectedRowKeys"),y("和"),t("code",null,"defaultSelectedAllRows"),y("属性将会失效")])],-1),de=t("pre",null,[t("code",{class:"html"},`<template>
    <div>
        <button class="button-demo" @click="selectedSwitch(1002)">第二行选中切换</button>
        <button class="button-demo" @click="selectedAll()">选中全部</button>
        <button class="button-demo" @click="unselectedAll()">取消选中全部</button>
        <br />
        <br />
        <ve-table
            style="width:100%"
            :columns="columns"
            :table-data="tableData"
            row-key-field-name="rowKey"
            :checkbox-option="checkboxOption"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                checkboxOption: {
                    // 可控属性
                    selectedRowKeys: [1003],
                    // 行选择改变事件
                    selectedRowChange: ({ row, isSelected, selectedRowKeys }) => {
                        this.changeSelectedRowKeys(selectedRowKeys);
                    },
                    // 全选改变事件
                    selectedAllChange: ({ isSelected, selectedRowKeys }) => {
                        this.changeSelectedRowKeys(selectedRowKeys);
                    },
                },

                columns: [
                    {
                        field: "",
                        key: "a",
                        // type=checkbox
                        type: "checkbox",
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
            // 给可控属性重新赋值
            changeSelectedRowKeys(keys) {
                this.checkboxOption.selectedRowKeys = keys;
            },
            // 切换选中行
            selectedSwitch(key) {
                let selectedRowKeys = this.checkboxOption.selectedRowKeys;

                const rowKeyIndex = selectedRowKeys.indexOf(key);

                if (rowKeyIndex > -1) {
                    selectedRowKeys.splice(rowKeyIndex, 1);
                } else {
                    selectedRowKeys.push(key);
                }
            },
            // 选中全部
            selectedAll() {
                this.checkboxOption.selectedRowKeys = this.tableData.map((x) => x.rowKey);
            },
            // 取消选中全部
            unselectedAll() {
                this.checkboxOption.selectedRowKeys = [];
            },
        },
    };
<\/script>
`)],-1);function ce(e,n,o,s,h,d){const u=c("anchor"),a=c("element-demo0"),i=c("demo-block");return b(),p("section",oe,[l(u,{"is-edit":"",label:"可控属性",fileName:"selected-control.md"}),l(i,null,{source:r(()=>[l(a)]),highlight:r(()=>[de]),default:r(()=>[te]),_:1})])}const le=m(ne,[["render",ce]]),ae={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:e,createVNode:n,openBlock:o,createElementBlock:s}=g;return function(d,u){const a=e("ve-table");return o(),s("div",null,[n(a,{style:{width:"100%"},columns:d.columns,"table-data":d.tableData,"row-key-field-name":"rowKey","checkbox-option":d.checkboxOption,"event-custom-option":d.eventCustomOption},null,8,["columns","table-data","checkbox-option","event-custom-option"])])}}(),...function(){return{data(){return{eventCustomOption:{bodyRowEvents:({row:e,rowIndex:n})=>({click:o=>{const s=e.rowKey;this.changeSelectedRowKeysByRowClick(s)}})},checkboxOption:{selectedRowKeys:[1003],selectedRowChange:({row:e,isSelected:n,selectedRowKeys:o})=>{},selectedAllChange:({isSelected:e,selectedRowKeys:n})=>{this.changeSelectedRowKeys(n)}},columns:[{field:"",key:"a",type:"checkbox",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{changeSelectedRowKeys(e){this.checkboxOption.selectedRowKeys=e},changeSelectedRowKeysByRowClick(e){const{selectedRowKeys:n}=this.checkboxOption;if(n.includes(e)){const o=n.indexOf(e);n.splice(o,1)}else n.push(e)}}}}()}}},se={class:"content example-md-doc"},ue=t("p",null,"此示例为行点击触发选中，你也可以通过“事件自定义”实现列点击选中效果",-1),ie=t("div",null,[t("p",null,"可控属性结合“事件自定义”，即可实现点击行触发选中效果")],-1),re=t("pre",null,[t("code",{class:"html"},`<template>
    <div>
        <ve-table
            style="width:100%"
            :columns="columns"
            :table-data="tableData"
            row-key-field-name="rowKey"
            :checkbox-option="checkboxOption"
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
                                this.changeSelectedRowKeysByRowClick(currentRowKey);
                            },
                        };
                    },
                },
                checkboxOption: {
                    // 可控属性
                    selectedRowKeys: [1003],
                    // 行选择改变事件
                    selectedRowChange: ({ row, isSelected, selectedRowKeys }) => {},
                    // 全选改变事件
                    selectedAllChange: ({ isSelected, selectedRowKeys }) => {
                        this.changeSelectedRowKeys(selectedRowKeys);
                    },
                },

                columns: [
                    {
                        field: "",
                        key: "a",
                        // type=checkbox
                        type: "checkbox",
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
            // 给可控属性重新赋值
            changeSelectedRowKeys(keys) {
                this.checkboxOption.selectedRowKeys = keys;
            },
            // 行点击触发
            changeSelectedRowKeysByRowClick(currentRowKey) {
                const { selectedRowKeys } = this.checkboxOption;

                if (selectedRowKeys.includes(currentRowKey)) {
                    const rowKeyIndex = selectedRowKeys.indexOf(currentRowKey);
                    selectedRowKeys.splice(rowKeyIndex, 1);
                } else {
                    selectedRowKeys.push(currentRowKey);
                }
            },
        },
    };
<\/script>
`)],-1);function he(e,n,o,s,h,d){const u=c("anchor"),a=c("element-demo0"),i=c("demo-block");return b(),p("section",se,[l(u,{"is-edit":"",label:"行点击触发选中",fileName:"selected-row-click.md"}),ue,l(i,null,{source:r(()=>[l(a)]),highlight:r(()=>[re]),default:r(()=>[ie]),_:1})])}const ye=m(ae,[["render",he]]),me={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:e,createVNode:n,openBlock:o,createElementBlock:s}=g;return function(d,u){const a=e("ve-table");return o(),s("div",null,[n(a,{style:{width:"100%"},columns:d.columns,"table-data":d.tableData,"row-key-field-name":"rowKey","checkbox-option":d.checkboxOption},null,8,["columns","table-data","checkbox-option"])])}}(),...function(){return{data(){return{checkboxOption:{hideSelectAll:!0,selectedRowChange:({row:e,isSelected:n,selectedRowKeys:o})=>{console.log(e,n,o)},selectedAllChange:({isSelected:e,selectedRowKeys:n})=>{console.log(e,n)}},columns:[{field:"",key:"a",type:"checkbox",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},be={class:"content example-md-doc"},pe=t("div",null,[t("p",null,[y("通过"),t("code",null,"hideSelectAll=true"),y("隐藏全选按钮")])],-1),we=t("pre",null,[t("code",{class:"html"},`<template>
    <div>
        <ve-table
            style="width:100%"
            :columns="columns"
            :table-data="tableData"
            row-key-field-name="rowKey"
            :checkbox-option="checkboxOption"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                checkboxOption: {
                    hideSelectAll: true,
                    // 行选择改变事件
                    selectedRowChange: ({ row, isSelected, selectedRowKeys }) => {
                        console.log(row, isSelected, selectedRowKeys);
                    },
                    // 全选改变事件
                    selectedAllChange: ({ isSelected, selectedRowKeys }) => {
                        console.log(isSelected, selectedRowKeys);
                    },
                },

                columns: [
                    {
                        field: "",
                        key: "a",
                        // type=checkbox
                        type: "checkbox",
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
`)],-1);function ge(e,n,o,s,h,d){const u=c("anchor"),a=c("element-demo0"),i=c("demo-block");return b(),p("section",be,[l(u,{"is-edit":"",label:"隐藏全选",fileName:"selected-all-hide.md"}),l(i,null,{source:r(()=>[l(a)]),highlight:r(()=>[we]),default:r(()=>[pe]),_:1})])}const ke=m(me,[["render",ge]]),_e={name:"BasicMain",components:{Explain:R,Base:J,SelectedDefault:G,SelectedColumn:T,SelectedDisable:ee,SelectedControl:le,SelectedRowClick:ye,SelectedAllHide:ke,API:v}},fe=t("h2",null,"行多选",-1);function Ce(e,n,o,s,h,d){const u=c("Explain"),a=c("Base"),i=c("SelectedColumn"),w=c("SelectedDefault"),_=c("SelectedDisable"),k=c("SelectedControl"),f=c("SelectedRowClick"),C=c("SelectedAllHide"),K=c("API");return b(),p("div",null,[fe,l(u),l(a),l(i),l(w),l(_),l(k),l(f),l(C),l(K,{title:"API",anchor:"API",desc:"checkboxOption 行多选配置"})])}const xe=m(_e,[["render",Ce]]);export{xe as default};
