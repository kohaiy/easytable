import{F as $}from"./virtual-scroll-sv93Rnu2.js";import{V as B}from"./virtual-scroll-option-props-0xX1aPHl.js";import{_ as b,o as f,c as y,ac as A,r,a as l,w as m,h as i,i as h,c6 as I}from"./index-kyOjLoEk.js";import{V as g}from"./vue.runtime.esm-bundler-VZ5SBavP.js";import{M as S}from"./mock--3KxpRbf.js";import"./api-tpl-v9mAOBA5.js";const N={},O={class:"content example-md-doc"},R=A('<div class="tip"><p>1、属性<code>virtualScrollOption</code>开启虚拟滚动。建议当一次性需要展示 <strong>1000 以上</strong> 数据时使用，可以支撑 <strong>20 万以上</strong>数据<br> 2、属性<code>maxHeight</code>设置虚拟滚动区域的最大高度。<code>maxHeight</code>为必传属性<br> 3、<code>rowKeyFieldName</code>为必传属性。<code>rowKeyFieldName</code>属性对应行数据的列名<br> 4、<strong>开启虚拟滚动功能后，其他功能依然可用</strong></p></div>',1),V=[R];function K(n,e){return f(),y("section",O,V)}const T=b(N,[["render",K]]),H={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:n,createVNode:e,openBlock:t,createElementBlock:d}=g;return function(o,u){const a=n("ve-table");return t(),d("div",null,[e(a,{"max-height":500,"virtual-scroll-option":o.virtualScrollOption,columns:o.columns,"table-data":o.tableData,"row-key-field-name":"rowKey"},null,8,["virtual-scroll-option","columns","table-data"])])}}(),...function(){return{data(){return{virtualScrollOption:{enable:!0},columns:[{field:"index",key:"a",title:"#",width:100,align:"left"},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},methods:{initData(){let n=[];for(let e=0;e<1e4;e++)n.push({rowKey:e,index:e,name:`name${e}`,hobby:`hobby${e}`,address:`address${e}`});this.tableData=n}},created(){this.initData()}}}()}}},P={class:"content example-md-doc"},M=i("pre",null,[i("code",{class:"html"},`<template>
    <div>
        <ve-table
            :max-height="500"
            :virtual-scroll-option="virtualScrollOption"
            :columns="columns"
            :table-data="tableData"
            row-key-field-name="rowKey"
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
                },
                columns: [
                    {
                        field: "index",
                        key: "a",
                        title: "#",
                        width: 100,
                        align: "left",
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
                tableData: [],
            };
        },
        methods: {
            initData() {
                let data = [];
                for (let i = 0; i < 10000; i++) {
                    data.push({
                        rowKey: i,
                        index: i,
                        name: \`name\${i}\`,
                        hobby: \`hobby\${i}\`,
                        address: \`address\${i}\`,
                    });
                }

                this.tableData = data;
            },
        },
        created() {
            this.initData();
        },
    };
<\/script>
`)],-1);function z(n,e,t,d,c,o){const u=r("anchor"),a=r("element-demo0"),s=r("demo-block");return f(),y("section",P,[l(u,{"is-edit":"",label:"基础功能",fileName:"base.md"}),l(s,null,{source:m(()=>[l(a)]),highlight:m(()=>[M]),_:1})])}const L=b(H,[["render",z]]),G={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:n,createVNode:e,openBlock:t,createElementBlock:d}=g;return function(o,u){const a=n("ve-table");return t(),d("div",null,[e(a,{"fixed-header":"","max-height":500,"virtual-scroll-option":o.virtualScrollOption,columns:o.columns,"table-data":o.tableData,"row-key-field-name":"rowKey"},null,8,["virtual-scroll-option","columns","table-data"])])}}(),...function(){return{data(){return{virtualScrollOption:{enable:!0},columns:[{field:"index",key:"a",title:"#",width:100,align:"left"},{field:"name",key:"b",title:"Name",width:200,align:"left",renderBodyCell:({row:n},e)=>l("span",{innerHTML:n.name},null)},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},methods:{getRandom(n,e){return Math.floor(Math.random()*(e-n)+n)},initData(){let n=[];for(let e=0;e<1e4;e++){let t="";if(e%2===0){const d=this.getRandom(3,5);for(let c=0;c<d;c++)t+="this is the long word.<br />"}else t=`name${e}`;n.push({rowKey:e,index:e,name:t,hobby:`hobby${e}`,address:`address${e}`})}this.tableData=n}},created(){this.initData()}}}()}}},j={class:"content example-md-doc"},q=i("div",null,[i("p",null,"支持非固定行高")],-1),U=i("pre",null,[i("code",{class:"html"},`<template>
    <div>
        <ve-table
            fixed-header
            :max-height="500"
            :virtual-scroll-option="virtualScrollOption"
            :columns="columns"
            :table-data="tableData"
            row-key-field-name="rowKey"
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
                },
                columns: [
                    {
                        field: "index",
                        key: "a",
                        title: "#",
                        width: 100,
                        align: "left",
                    },
                    {
                        field: "name",
                        key: "b",
                        title: "Name",
                        width: 200,
                        align: "left",
                        renderBodyCell: ({ row }, h) => {
                            return <span innerHTML={row.name}></span>;
                        },
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
                tableData: [],
            };
        },
        methods: {
            getRandom(min, max) {
                return Math.floor(Math.random() * (max - min) + min);
            },
            initData() {
                let data = [];
                for (let i = 0; i < 10000; i++) {
                    let value = "";
                    if (i % 2 === 0) {
                        const rowCount = this.getRandom(3, 5);

                        for (let i = 0; i < rowCount; i++) {
                            value += \`this is the long word.<br />\`;
                        }
                    } else {
                        value = \`name\${i}\`;
                    }

                    data.push({
                        rowKey: i,
                        index: i,
                        name: value,
                        hobby: \`hobby\${i}\`,
                        address: \`address\${i}\`,
                    });
                }

                this.tableData = data;
            },
        },
        created() {
            this.initData();
        },
    };
<\/script>
`)],-1);function J(n,e,t,d,c,o){const u=r("anchor"),a=r("element-demo0"),s=r("demo-block");return f(),y("section",j,[l(u,{"is-edit":"",label:"任意行高",fileName:"auto-height.md"}),l(s,null,{source:m(()=>[l(a)]),highlight:m(()=>[U]),default:m(()=>[q]),_:1})])}const Q=b(G,[["render",J]]),W={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:n,createVNode:e,openBlock:t,createElementBlock:d}=g;return function(o,u){const a=n("ve-table");return t(),d("div",null,[e(a,{"fixed-header":"","max-height":500,"virtual-scroll-option":o.virtualScrollOption,"checkbox-option":o.checkboxOption,columns:o.columns,"table-data":o.tableData,"row-key-field-name":"rowKey"},null,8,["virtual-scroll-option","checkbox-option","columns","table-data"])])}}(),...function(){return{data(){return{virtualScrollOption:{enable:!0},checkboxOption:{selectedRowChange:({row:n,isSelected:e,selectedRowKeys:t})=>{console.log(n,e,t)},selectedAllChange:({isSelected:n,selectedRowKeys:e})=>{console.log(n,e)}},columns:[{field:"",key:"a",type:"checkbox",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left",renderBodyCell:({row:n},e)=>l("span",{innerHTML:n.name},null)},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},methods:{initData(){let n=[];for(let e=0;e<1e4;e++)n.push({rowKey:e,name:`name${e}`,hobby:`hobby${e}`,address:`address${e}`});this.tableData=n}},created(){this.initData()}}}()}}},X={class:"content example-md-doc"},Y=i("div",null,[i("p",null,[h("行多选，要指定属性"),i("code",null,"rowKeyFieldName")])],-1),Z=i("pre",null,[i("code",{class:"html"},`<template>
    <div>
        <ve-table
            fixed-header
            :max-height="500"
            :virtual-scroll-option="virtualScrollOption"
            :checkbox-option="checkboxOption"
            :columns="columns"
            :table-data="tableData"
            row-key-field-name="rowKey"
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
                },
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
                        renderBodyCell: ({ row }, h) => {
                            return <span innerHTML={row.name}></span>;
                        },
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
                tableData: [],
            };
        },
        methods: {
            initData() {
                let data = [];
                for (let i = 0; i < 10000; i++) {
                    data.push({
                        rowKey: i,
                        name: \`name\${i}\`,
                        hobby: \`hobby\${i}\`,
                        address: \`address\${i}\`,
                    });
                }

                this.tableData = data;
            },
        },
        created() {
            this.initData();
        },
    };
<\/script>
`)],-1);function ee(n,e,t,d,c,o){const u=r("anchor"),a=r("element-demo0"),s=r("demo-block");return f(),y("section",X,[l(u,{"is-edit":"",label:"结合行多选",fileName:"row-checkbox.md"}),l(s,null,{source:m(()=>[l(a)]),highlight:m(()=>[Z]),default:m(()=>[Y]),_:1})])}const ne=b(W,[["render",ee]]),te={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:n,createVNode:e,openBlock:t,createElementBlock:d}=g;return function(o,u){const a=n("ve-table");return t(),d("div",null,[e(a,{"fixed-header":"","max-height":500,"virtual-scroll-option":o.virtualScrollOption,"radio-option":o.radioOption,columns:o.columns,"table-data":o.tableData,"row-key-field-name":"rowKey"},null,8,["virtual-scroll-option","radio-option","columns","table-data"])])}}(),...function(){return{data(){return{virtualScrollOption:{enable:!0},radioOption:{selectedRowChange:({row:n})=>{console.log(n)}},columns:[{field:"",key:"a",type:"radio",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left",renderBodyCell:({row:n},e)=>l("span",{innerHTML:n.name},null)},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},methods:{initData(){let n=[];for(let e=0;e<1e4;e++)n.push({rowKey:e,name:`name${e}`,hobby:`hobby${e}`,address:`address${e}`});this.tableData=n}},created(){this.initData()}}}()}}},oe={class:"content example-md-doc"},le=i("div",null,[i("p",null,[h("行单选，要指定属性"),i("code",null,"rowKeyFieldName")])],-1),ae=i("pre",null,[i("code",{class:"html"},`<template>
    <div>
        <ve-table
            fixed-header
            :max-height="500"
            :virtual-scroll-option="virtualScrollOption"
            :radio-option="radioOption"
            :columns="columns"
            :table-data="tableData"
            row-key-field-name="rowKey"
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
                },
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
                        renderBodyCell: ({ row }, h) => {
                            return <span innerHTML={row.name}></span>;
                        },
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
                tableData: [],
            };
        },
        methods: {
            initData() {
                let data = [];
                for (let i = 0; i < 10000; i++) {
                    data.push({
                        rowKey: i,
                        name: \`name\${i}\`,
                        hobby: \`hobby\${i}\`,
                        address: \`address\${i}\`,
                    });
                }

                this.tableData = data;
            },
        },
        created() {
            this.initData();
        },
    };
<\/script>
`)],-1);function ie(n,e,t,d,c,o){const u=r("anchor"),a=r("element-demo0"),s=r("demo-block");return f(),y("section",oe,[l(u,{"is-edit":"",label:"结合行单选",fileName:"row-radio.md"}),l(s,null,{source:m(()=>[l(a)]),highlight:m(()=>[ae]),default:m(()=>[le]),_:1})])}const de=b(te,[["render",ie]]),re={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:n,createVNode:e,openBlock:t,createElementBlock:d}=g;return function(o,u){const a=n("ve-table");return t(),d("div",null,[e(a,{"fixed-header":"","max-height":500,"virtual-scroll-option":o.virtualScrollOption,"expand-option":o.expandOption,columns:o.columns,"table-data":o.tableData,"row-key-field-name":"rowKey"},null,8,["virtual-scroll-option","expand-option","columns","table-data"])])}}(),...function(){return{data(){return{virtualScrollOption:{enable:!0},expandOption:{render:({row:n,column:e,rowIndex:t},d)=>l("p",null,[h("My name is "),l("span",{style:"color:#1890ff;"},[n.name]),h(",I'm living in "),n.address])},columns:[{field:"",key:"a",type:"expand",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left",renderBodyCell:({row:n},e)=>l("span",{innerHTML:n.name},null)},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},methods:{initData(){let n=[];for(let e=0;e<1e4;e++)n.push({rowKey:e,name:`name${e}`,hobby:`hobby${e}`,address:`address${e}`});this.tableData=n}},created(){this.initData()}}}()}}},ce={class:"content example-md-doc"},ue=i("pre",null,[i("code",{class:"html"},`<template>
    <div>
        <ve-table
            fixed-header
            :max-height="500"
            :virtual-scroll-option="virtualScrollOption"
            :expand-option="expandOption"
            :columns="columns"
            :table-data="tableData"
            row-key-field-name="rowKey"
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
                },
                expandOption: {
                    render: ({ row, column, rowIndex }, h) => {
                        return (
                            <p>
                                My name is <span style="color:#1890ff;">{row.name}</span>
                                ,I'm living in {row.address}
                            </p>
                        );
                    },
                },

                columns: [
                    {
                        field: "",
                        key: "a",
                        // type=expand
                        type: "expand",
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
                        renderBodyCell: ({ row }, h) => {
                            return <span innerHTML={row.name}></span>;
                        },
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
                tableData: [],
            };
        },
        methods: {
            initData() {
                let data = [];
                for (let i = 0; i < 10000; i++) {
                    data.push({
                        rowKey: i,
                        name: \`name\${i}\`,
                        hobby: \`hobby\${i}\`,
                        address: \`address\${i}\`,
                    });
                }

                this.tableData = data;
            },
        },
        created() {
            this.initData();
        },
    };
<\/script>
`)],-1);function se(n,e,t,d,c,o){const u=r("anchor"),a=r("element-demo0"),s=r("demo-block");return f(),y("section",ce,[l(u,{"is-edit":"",label:"结合行展开",fileName:"row-expand.md"}),l(s,null,{source:m(()=>[l(a)]),highlight:m(()=>[ue]),_:1})])}const me=b(re,[["render",se]]),he={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:n,createVNode:e,openBlock:t,createElementBlock:d}=g;return function(o,u){const a=n("ve-table");return t(),d("div",null,[e(a,{"fixed-header":"","max-height":500,"virtual-scroll-option":o.virtualScrollOption,"expand-option":o.expandOption,columns:o.columns,"table-data":o.tableData,"row-key-field-name":"rowKey"},null,8,["virtual-scroll-option","expand-option","columns","table-data"])])}}(),...function(){const n={name:"ChildTableComp",template:`
        <div class="child-table-comp">
            <span style="font-weight:bold;">Table Name:{{row.name}}</span>
            <ve-table
              :max-height="300"
              :fixed-header="true"
              style="width:100%"
              :columns="columns"
              :table-data="tableData"
              :virtual-scroll-option="{
                  enable: false,
              }"
            />
        </div>
    `,props:{row:Object},data(){return{columns:[{field:"col1",key:"a",title:"Col1"},{field:"col2",key:"b",title:"Col2"},{field:"col3",key:"c",title:"Col3"},{field:"col4",key:"d",title:"Col4"},{field:"col5",key:"e",title:"Col5"}],tableData:[{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5"}]}}};return{data(){return{virtualScrollOption:{enable:!0},expandOption:{defaultExpandedRowKeys:[2],render:({row:e,column:t,rowIndex:d},c)=>l(n,{row:e},null)},columns:[{field:"",key:"a",type:"expand",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left",renderBodyCell:({row:e},t)=>l("span",{innerHTML:e.name},null)},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},methods:{initData(){let e=[];for(let t=0;t<1e4;t++)e.push({rowKey:t,name:`name${t}`,hobby:`hobby${t}`,address:`address${t}`});this.tableData=e}},created(){this.initData()}}}()}}},pe={class:"content example-md-doc"},be=i("pre",null,[i("code",{class:"html"},`<template>
    <div>
        <ve-table
            fixed-header
            :max-height="500"
            :virtual-scroll-option="virtualScrollOption"
            :expand-option="expandOption"
            :columns="columns"
            :table-data="tableData"
            row-key-field-name="rowKey"
        />
    </div>
</template>

<script>
    // 此示例是在组件内部定义了一个子组件。你当然也可以通过 \`import\`关键字导入一个组件
    const ChildTableComp = {
        name: "ChildTableComp",
        template: \`
        <div class="child-table-comp">
            <span style="font-weight:bold;">Table Name:{{row.name}}</span>
            <ve-table
              :max-height="300"
              :fixed-header="true"
              style="width:100%"
              :columns="columns"
              :table-data="tableData"
              :virtual-scroll-option="{
                  enable: false,
              }"
            />
        </div>
    \`,
        props: {
            row: Object,
        },
        data() {
            return {
                columns: [
                    { field: "col1", key: "a", title: "Col1" },
                    { field: "col2", key: "b", title: "Col2" },
                    { field: "col3", key: "c", title: "Col3" },
                    { field: "col4", key: "d", title: "Col4" },
                    { field: "col5", key: "e", title: "Col5" },
                ],
                tableData: [
                    {
                        col1: "1",
                        col2: "2",
                        col3: "3",
                        col4: "4",
                        col5: "5",
                    },
                    {
                        col1: "1",
                        col2: "2",
                        col3: "3",
                        col4: "4",
                        col5: "5",
                    },
                    {
                        col1: "1",
                        col2: "2",
                        col3: "3",
                        col4: "4",
                        col5: "5",
                    },
                    {
                        col1: "1",
                        col2: "2",
                        col3: "3",
                        col4: "4",
                        col5: "5",
                    },
                ],
            };
        },
    };

    export default {
        data() {
            return {
                virtualScrollOption: {
                    // 是否开启
                    enable: true,
                },
                expandOption: {
                    defaultExpandedRowKeys: [2],
                    render: ({ row, column, rowIndex }, h) => {
                        return <ChildTableComp row={row} />;
                    },
                },

                columns: [
                    {
                        field: "",
                        key: "a",
                        // type=expand
                        type: "expand",
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
                        renderBodyCell: ({ row }, h) => {
                            return <span innerHTML={row.name}></span>;
                        },
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
                tableData: [],
            };
        },
        methods: {
            initData() {
                let data = [];
                for (let i = 0; i < 10000; i++) {
                    data.push({
                        rowKey: i,
                        name: \`name\${i}\`,
                        hobby: \`hobby\${i}\`,
                        address: \`address\${i}\`,
                    });
                }

                this.tableData = data;
            },
        },
        created() {
            this.initData();
        },
    };
<\/script>
`)],-1);function fe(n,e,t,d,c,o){const u=r("anchor"),a=r("element-demo0"),s=r("demo-block");return f(),y("section",pe,[l(u,{"is-edit":"",label:"结合行展开表格",fileName:"row-expand-table.md"}),l(s,null,{source:m(()=>[l(a)]),highlight:m(()=>[be]),_:1})])}const ye=b(he,[["render",fe]]),_e={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:n,createVNode:e,openBlock:t,createElementBlock:d}=g;return function(o,u){const a=n("ve-table");return t(),d("div",null,[e(a,{"fixed-header":"","border-y":"","max-height":500,"scroll-width":1600,"virtual-scroll-option":o.virtualScrollOption,columns:o.columns,"table-data":o.tableData,"row-key-field-name":"rowKey"},null,8,["virtual-scroll-option","columns","table-data"])])}}(),...function(){return{data(){return{virtualScrollOption:{enable:!0},columns:[{field:"col1",key:"a",title:"col1",width:50,fixed:"left"},{title:"col2-col3",fixed:"left",children:[{field:"col2",key:"b",title:"col2",width:50},{field:"col3",key:"c",title:"col3",width:50}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"d",title:"col4",width:130},{field:"col5",key:"e",title:"col5",width:140}]},{title:"col6",field:"col6",key:"f",width:140}]},{field:"col7",key:"g",title:"col7",width:50,fixed:"right"},{field:"col8",key:"h",title:"col8",width:50,fixed:"right"}],tableData:[]}},methods:{initData(){let n=[];for(let e=0;e<1e4;e++)n.push({rowKey:e,col1:e,col2:e,col3:e,col4:e,col5:e,col6:e,col7:e,col8:e,col9:e,col10:e});this.tableData=n}},created(){this.initData()}}}()}}},we={class:"content example-md-doc"},ge=i("pre",null,[i("code",{class:"html"},`<template>
    <div>
        <ve-table
            fixed-header
            border-y
            :max-height="500"
            :scroll-width="1600"
            :virtual-scroll-option="virtualScrollOption"
            :columns="columns"
            :table-data="tableData"
            row-key-field-name="rowKey"
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
                },
                columns: [
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
                                key: "c",
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
                                        key: "d",
                                        title: "col4",
                                        width: 130,
                                    },
                                    {
                                        field: "col5",
                                        key: "e",
                                        title: "col5",
                                        width: 140,
                                    },
                                ],
                            },
                            {
                                title: "col6",
                                field: "col6",
                                key: "f",
                                width: 140,
                            },
                        ],
                    },
                    {
                        field: "col7",
                        key: "g",
                        title: "col7",
                        width: 50,
                        fixed: "right",
                    },
                    {
                        field: "col8",
                        key: "h",
                        title: "col8",
                        width: 50,
                        fixed: "right",
                    },
                ],
                tableData: [],
            };
        },
        methods: {
            initData() {
                let data = [];
                for (let i = 0; i < 10000; i++) {
                    data.push({
                        rowKey: i,
                        col1: i,
                        col2: i,
                        col3: i,
                        col4: i,
                        col5: i,
                        col6: i,
                        col7: i,
                        col8: i,
                        col9: i,
                        col10: i,
                    });
                }

                this.tableData = data;
            },
        },
        created() {
            this.initData();
        },
    };
<\/script>
`)],-1);function xe(n,e,t,d,c,o){const u=r("anchor"),a=r("element-demo0"),s=r("demo-block");return f(),y("section",we,[l(u,{"is-edit":"",label:"结合固定列",fileName:"column-fixed.md"}),l(s,null,{source:m(()=>[l(a)]),highlight:m(()=>[ge]),_:1})])}const ve=b(_e,[["render",xe]]),De={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:n,createVNode:e,createTextVNode:t,withCtx:d,createElementVNode:c,openBlock:o,createElementBlock:u}=g,a=c("br",null,null,-1),s=c("br",null,null,-1);return function(p,v){const w=n("el-input"),x=n("el-button"),D=n("ve-table");return o(),u("div",null,[e(w,{style:{width:"250px"},modelValue:p.searchValue,"onUpdate:modelValue":v[0]||(v[0]=k=>p.searchValue=k),placeholder:"search name"},null,8,["modelValue"]),e(x,{type:"primary",onClick:p.search},{default:d(()=>[t("Search")]),_:1},8,["onClick"]),a,s,e(D,{"max-height":500,"virtual-scroll-option":p.virtualScrollOption,columns:p.columns,"table-data":p.tableData,"row-key-field-name":"rowKey"},null,8,["virtual-scroll-option","columns","table-data"])])}}(),...function(){return{data(){return{searchValue:"",startRowIndex:0,virtualScrollOption:{enable:!0,scrolling:this.scrolling},columns:[{field:"index",key:"index",title:"#",width:200,align:"left",renderBodyCell:this.renderRowIndex},{field:"name",key:"name",title:"Name",width:200,align:"left"},{field:"hobby",key:"hobby",title:"Hobby",width:300,align:"left"},{field:"address",key:"address",title:"Address",width:"",align:"left"}],tableData:[],sourceData:[]}},methods:{scrolling({startRowIndex:n,visibleStartIndex:e,visibleEndIndex:t,visibleAboveCount:d,visibleBelowCount:c}){this.startRowIndex=n,console.log("startRowIndex::",n),console.log("visibleStartIndex::",e),console.log("visibleEndIndex::",t),console.log("visibleAboveCount::",d),console.log("visibleBelowCount::",c)},renderRowIndex({row:n,column:e,rowIndex:t}){return l("span",{class:"text-bold",style:"color:#1890ff;"},[t+this.startRowIndex+1])},search(){const n=this.searchValue;this.tableData=this.sourceData.filter(e=>!n.length||e.name.toLowerCase().includes(n.toLowerCase()))},initData(){let n=[];for(let e=0;e<1e3;e++)n.push({rowKey:e,name:S.Random.name(),hobby:"hobby",address:"address"});this.sourceData=n,this.tableData=this.sourceData.slice(0)}},created(){this.initData()}}}()}}},ke={class:"content example-md-doc"},Ce=i("p",null,"开启虚拟滚动后，行号可以通过服务端返回。如果表格存在客户端查询的情况，需要需要我们做一些处理。具体见下面示例",-1),Fe=i("div",null,[i("p",null,[h("1、滚动时会触发"),i("code",null,"scrolling({ startRowIndex, visibleStartIndex, visibleEndIndex, visibleAboveCount, visibleBelowCount})"),h("。"),i("code",null,"startRowIndex"),h("为当前开始渲染的行号，"),i("code",null,"visibleStartIndex"),h("为当前可见区域的开始行号，"),i("code",null,"visibleEndIndex"),h("为当前可见区域的结束行号，"),i("code",null,"visibleAboveCount"),h("为当前可见区域上方渲染的数量，"),i("code",null,"visibleBelowCount"),h("为当前可见区域下方渲染的数量"),i("br"),h("2、通过"),i("code",null,"scrolling"),h("方法结合"),i("code",null,"renderBodyCell({ row, column, rowIndex })"),h("方法返回的"),i("code",null,"rowIndex"),h(" 算出当前虚拟滚动的真实序号，为"),i("code",null,"rowIndex + startRowIndex + 1")])],-1),Ee=i("pre",null,[i("code",{class:"html"},`<template>
    <div>
        <el-input style="width:250px" v-model="searchValue" placeholder="search name"></el-input>
        <el-button type="primary" @click="search">Search</el-button>
        <br />
        <br />
        <ve-table
            :max-height="500"
            :virtual-scroll-option="virtualScrollOption"
            :columns="columns"
            :table-data="tableData"
            row-key-field-name="rowKey"
        />
    </div>
</template>

<script>
    import Mock from "mockjs";
    export default {
        data() {
            return {
                // search value
                searchValue: "",
                // start row index
                startRowIndex: 0,
                virtualScrollOption: {
                    // 是否开启
                    enable: true,
                    scrolling: this.scrolling,
                },
                // columns
                columns: [
                    {
                        field: "index",
                        key: "index",
                        title: "#",
                        width: 200,
                        align: "left",
                        renderBodyCell: this.renderRowIndex,
                    },
                    {
                        field: "name",
                        key: "name",
                        title: "Name",
                        width: 200,
                        align: "left",
                    },
                    {
                        field: "hobby",
                        key: "hobby",
                        title: "Hobby",
                        width: 300,
                        align: "left",
                    },
                    {
                        field: "address",
                        key: "address",
                        title: "Address",
                        width: "",
                        align: "left",
                    },
                ],
                // real table data
                tableData: [],
                // source data
                sourceData: [],
            };
        },
        methods: {
            // virtual scrolling
            scrolling({
                startRowIndex,
                visibleStartIndex,
                visibleEndIndex,
                visibleAboveCount,
                visibleBelowCount,
            }) {
                this.startRowIndex = startRowIndex;
                console.log("startRowIndex::", startRowIndex);
                console.log("visibleStartIndex::", visibleStartIndex);
                console.log("visibleEndIndex::", visibleEndIndex);
                console.log("visibleAboveCount::", visibleAboveCount);
                console.log("visibleBelowCount::", visibleBelowCount);
            },
            // render row index
            renderRowIndex({ row, column, rowIndex }) {
                return (
                    <span class="text-bold" style="color:#1890ff;">
                        {rowIndex + this.startRowIndex + 1}
                    </span>
                );
            },

            // search
            search() {
                const searchValue = this.searchValue;
                this.tableData = this.sourceData.filter(
                    (x) =>
                        !searchValue.length ||
                        x.name.toLowerCase().includes(searchValue.toLowerCase()),
                );
            },

            initData() {
                let data = [];
                for (let i = 0; i < 1000; i++) {
                    data.push({
                        rowKey: i,
                        name: Mock.Random.name(),
                        hobby: \`hobby\`,
                        address: \`address\`,
                    });
                }

                this.sourceData = data;
                this.tableData = this.sourceData.slice(0);
            },
        },
        created() {
            this.initData();
        },
    };
<\/script>
`)],-1);function $e(n,e,t,d,c,o){const u=r("anchor"),a=r("element-demo0"),s=r("demo-block");return f(),y("section",ke,[l(u,{"is-edit":"",label:"行序号问题",fileName:"row-index.md"}),Ce,l(s,null,{source:m(()=>[l(a)]),highlight:m(()=>[Ee]),default:m(()=>[Fe]),_:1})])}const Be=b(De,[["render",$e]]),Ae={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:n,createVNode:e,openBlock:t,createElementBlock:d}=g;return function(o,u){const a=n("ve-table");return t(),d("div",null,[e(a,{"max-height":500,"virtual-scroll-option":o.virtualScrollOption,columns:o.columns,"table-data":o.tableData,"row-key-field-name":"rowKey"},null,8,["virtual-scroll-option","columns","table-data"])])}}(),...function(){return{data(){return{virtualScrollOption:{enable:!0,scrolling:this.scrolling},columns:[{field:"index",key:"a",title:"#",width:100,align:"left"},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[],remoteData:[],pagingInfo:{pageSize:20,totalPage:500,totalCount:1e4},debounceTime:150,debounceGetDataByPageIndex:null}},methods:{initEmptyData(){let n=[];const e=this.pagingInfo.totalCount;for(let t=0;t<e;t++)n.push({rowKey:"prefix"+t,index:t,name:"",hobby:"",address:""});this.tableData=n},getDataByPageIndex(n,e){const{remoteData:t,pagingInfo:d}=this,{pageSize:c}=d,o=(n-1)*c,u=(e-1)*c;if(t.find(s=>s.index===o)&&t.find(s=>s.index===u))return!1;const a=n!==e;this.getRemoteData(o,a).then(s=>{Array.isArray(s)&&s.length&&(this.remoteData=this.remoteData.concat(s),s.forEach(_=>{this.tableData.splice(_.index,1,_)}))})},getRemoteData(n,e){console.log(`send request by ${e?"double":"single"} page. start index:${n}`);const{pagingInfo:t}=this,{pageSize:d,totalCount:c}=t;return new Promise((o,u)=>{const a=e?d*2:d;let s=[];setTimeout(()=>{for(let _=0;_<a;_++){const p=n+_,v={rowKey:"prefix"+p,index:p,name:"name"+p,hobby:"hobby"+p,address:"address"+p};p<c&&s.push(v)}o(s)},200)})},scrolling({startRowIndex:n,visibleStartIndex:e,visibleEndIndex:t,visibleAboveCount:d,visibleBelowCount:c}){const{pageSize:o}=this.pagingInfo,u=Math.floor(e/o)+1,a=Math.floor(t/o)+1;this.debounceGetDataByPageIndex(u,a)}},created(){this.initEmptyData(),this.debounceGetDataByPageIndex=I.debounce(this.getDataByPageIndex,this.debounceTime)}}}()}}},Ie={class:"content example-md-doc"},Se=i("p",null,[h("有些场景由于网络带宽或者请求限制每次只能分页请求数据，但又希望使用虚拟滚动提高渲染性能，这时你可以通过 "),i("code",null,"scrolling"),h("实现虚拟滚动和懒加载的功能。以下为模拟数据，具体根据实际请求为准")],-1),Ne=i("pre",null,[i("code",{class:"html"},`<template>
    <div>
        <ve-table
            :max-height="500"
            :virtual-scroll-option="virtualScrollOption"
            :columns="columns"
            :table-data="tableData"
            row-key-field-name="rowKey"
        />
    </div>
</template>

<script>
    import { debounce } from "lodash";
    export default {
        data() {
            return {
                virtualScrollOption: {
                    enable: true,
                    scrolling: this.scrolling,
                },
                columns: [
                    {
                        field: "index",
                        key: "a",
                        title: "#",
                        width: 100,
                        align: "left",
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
                tableData: [],
                remoteData: [],
                // pageing info by request
                pagingInfo: {
                    pageSize: 20,
                    totalPage: 500,
                    totalCount: 10000,
                },
                // scrolling event delay request event
                debounceTime: 150,
                debounceGetDataByPageIndex: null,
            };
        },
        methods: {
            initEmptyData() {
                let data = [];
                const totalCount = this.pagingInfo.totalCount;
                for (let i = 0; i < totalCount; i++) {
                    data.push({
                        rowKey: "prefix" + i,
                        index: i,
                        name: "",
                        hobby: "",
                        address: "",
                    });
                }

                this.tableData = data;
            },
            // get data by page index
            getDataByPageIndex(currentPageIndex, nextPageIndex) {
                const { remoteData, pagingInfo } = this;
                const { pageSize } = pagingInfo;

                const currentStartIndex = (currentPageIndex - 1) * pageSize;
                const nextStartIndex = (nextPageIndex - 1) * pageSize;

                if (
                    remoteData.find((x) => x.index === currentStartIndex) &&
                    remoteData.find((x) => x.index === nextStartIndex)
                ) {
                    return false;
                }

                // whether to request 2 pages of data at one time
                const isDouble = currentPageIndex !== nextPageIndex;

                this.getRemoteData(currentStartIndex, isDouble).then((resData) => {
                    if (Array.isArray(resData) && resData.length) {
                        this.remoteData = this.remoteData.concat(resData);
                        resData.forEach((item) => {
                            this.tableData.splice(item.index, 1, item);
                        });
                    }
                });
            },
            // get remote data
            getRemoteData(startIndex, isDouble) {
                console.log(
                    \`send request by \${
                        isDouble ? "double" : "single"
                    } page. start index:\${startIndex}\`,
                );
                const { pagingInfo } = this;
                const { pageSize, totalCount } = pagingInfo;

                return new Promise((resolve, reject) => {
                    // mock your remote server
                    const realPageSize = isDouble ? pageSize * 2 : pageSize;
                    let pageData = [];
                    setTimeout(() => {
                        for (let i = 0; i < realPageSize; i++) {
                            const index = startIndex + i;

                            const dataItem = {
                                rowKey: "prefix" + index,
                                index: index,
                                name: "name" + index,
                                hobby: "hobby" + index,
                                address: "address" + index,
                            };
                            //
                            if (index < totalCount) {
                                pageData.push(dataItem);
                            }
                        }
                        resolve(pageData);
                    }, 200);
                });
            },
            scrolling({
                startRowIndex,
                visibleStartIndex,
                visibleEndIndex,
                visibleAboveCount,
                visibleBelowCount,
            }) {
                const { pageSize } = this.pagingInfo;
                const currentPageIndex = Math.floor(visibleStartIndex / pageSize) + 1;
                const nextPageIndex = Math.floor(visibleEndIndex / pageSize) + 1;
                this.debounceGetDataByPageIndex(currentPageIndex, nextPageIndex);
            },
        },
        created() {
            this.initEmptyData();
            this.debounceGetDataByPageIndex = debounce(this.getDataByPageIndex, this.debounceTime);
        },
    };
<\/script>
`)],-1);function Oe(n,e,t,d,c,o){const u=r("anchor"),a=r("element-demo0"),s=r("demo-block");return f(),y("section",Ie,[l(u,{"is-edit":"",label:"结合懒加载",fileName:"combine-lazy-load.md"}),Se,l(s,null,{source:m(()=>[l(a)]),highlight:m(()=>[Ne]),_:1})])}const Re=b(Ae,[["render",Oe]]),Ve={name:"component-doc",components:{"element-demo0":{render:function(){const{createTextVNode:n,resolveComponent:e,withCtx:t,createVNode:d,createElementVNode:c,toDisplayString:o,openBlock:u,createElementBlock:a}=g,s=c("br",null,null,-1),_=c("br",null,null,-1),p=c("br",null,null,-1);return function(w,x){const D=e("el-button"),k=e("ve-table");return u(),a("div",null,[d(D,{onClick:x[0]||(x[0]=C=>w.switchVirtual(1))},{default:t(()=>[n("开启虚拟滚动")]),_:1}),d(D,{onClick:x[1]||(x[1]=C=>w.switchVirtual(0))},{default:t(()=>[n("禁用虚拟滚动")]),_:1}),s,_,c("div",null,"虚拟滚动状态："+o(w.virtualScrollOption.enable?"已开启":"已禁用"),1),p,d(k,{"max-height":500,"virtual-scroll-option":w.virtualScrollOption,columns:w.columns,"table-data":w.tableData,"row-key-field-name":"rowKey"},null,8,["virtual-scroll-option","columns","table-data"])])}}(),...function(){return{data(){return{virtualScrollOption:{enable:!1},columns:[{field:"index",key:"a",title:"#",width:100,align:"left"},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},methods:{switchVirtual(n){this.virtualScrollOption.enable=!!n},createTableData(){let n=[];for(let e=0;e<100;e++)n.push({rowKey:e,index:e,name:`name${e}`,hobby:`hobby${e}`,address:`address${e}`});this.tableData=n}},mounted(){this.createTableData()}}}()}}},Ke={class:"content example-md-doc"},Te=i("p",null,[h("如果你存在动态开启或者关闭虚拟滚动的需求，那么只需要修改"),i("code",null,"virtualScrollOption.enable"),h("即可。F12 查看渲染结果")],-1),He=i("pre",null,[i("code",{class:"html"},`<template>
    <div>
        <el-button @click="switchVirtual(1)">开启虚拟滚动</el-button>
        <el-button @click="switchVirtual(0)">禁用虚拟滚动</el-button>
        <br />
        <br />
        <div>虚拟滚动状态：{{ virtualScrollOption.enable ? "已开启" : "已禁用" }}</div>
        <br />
        <ve-table
            :max-height="500"
            :virtual-scroll-option="virtualScrollOption"
            :columns="columns"
            :table-data="tableData"
            row-key-field-name="rowKey"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                virtualScrollOption: {
                    // 是否开启
                    enable: false,
                },
                columns: [
                    {
                        field: "index",
                        key: "a",
                        title: "#",
                        width: 100,
                        align: "left",
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
                tableData: [],
            };
        },
        methods: {
            // switch virtual scroll
            switchVirtual(enable) {
                this.virtualScrollOption.enable = enable ? true : false;
            },
            // createTableData
            createTableData() {
                let data = [];
                for (let i = 0; i < 100; i++) {
                    data.push({
                        rowKey: i,
                        index: i,
                        name: \`name\${i}\`,
                        hobby: \`hobby\${i}\`,
                        address: \`address\${i}\`,
                    });
                }

                this.tableData = data;
            },
        },

        mounted() {
            this.createTableData();
        },
    };
<\/script>
`)],-1);function Pe(n,e,t,d,c,o){const u=r("anchor"),a=r("element-demo0"),s=r("demo-block");return f(),y("section",Ke,[l(u,{"is-edit":"",label:"动态开启或关闭虚拟滚动",fileName:"dynamic-enable.md"}),Te,l(s,null,{source:m(()=>[l(a)]),highlight:m(()=>[He]),_:1})])}const Me=b(Ve,[["render",Pe]]),ze={name:"BasicMain",components:{Explain:T,Base:L,AutoHeight:Q,RowCheckbox:ne,RowRadio:de,RowExpand:me,RowExpandTable:ye,ColumnFixed:ve,FooterSummary:$,RowIndex:Be,CombineLazyLoad:Re,DynamicEnable:Me,API:B}},Le=i("h2",null,"虚拟滚动",-1);function Ge(n,e,t,d,c,o){const u=r("Explain"),a=r("Base"),s=r("AutoHeight"),_=r("RowIndex"),p=r("RowCheckbox"),v=r("RowRadio"),w=r("RowExpand"),x=r("RowExpandTable"),D=r("ColumnFixed"),k=r("FooterSummary"),C=r("CombineLazyLoad"),F=r("DynamicEnable"),E=r("API");return f(),y("div",null,[Le,l(u),l(a),l(s),l(_),l(p),l(v),l(w),l(x),l(D),l(k),l(C),l(F),l(E,{title:"API",anchor:"API",desc:"virtualScrollOption 虚拟滚动配置"})])}const Xe=b(ze,[["render",Ge]]);export{Xe as default};
