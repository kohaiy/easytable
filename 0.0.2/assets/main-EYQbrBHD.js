import{F as D}from"./filter-props-FK0clgRC.js";import{_ as f,o as b,c as y,g as k,r as l,a as o,w as r,m as s,p as m}from"./index-wizmyTnN.js";import{V as g}from"./vue.runtime.esm-bundler-eTwiQ2m-.js";import"./api-tpl-4K4FBVzq.js";const C={},w={class:"content example-md-doc"},F=k('<div class="tip"><p>1、通过 <code>column</code> 对象的 <code>filter</code>属性设置筛选功能<br> 2、 <code>filterList</code> 设置你的筛选条件。包含<code>label</code>、<code>value</code>、<code>selected</code> 3 个属性<br> 3、 <code>isMultiple</code> 开启筛选项多选，默认为 false<br> 4、 <code>filterConfirm</code> 筛选确认函数<br> 5、 <code>filterReset</code> 筛选重置函数<br></p></div>',1),x=[F];function A(n,t){return b(),y("section",w,x)}const N=f(C,[["render",A]]),B={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:n,openBlock:t,createBlock:e}=g;return function(a,h){const i=n("ve-table");return t(),e(i,{"max-height":300,"fixed-header":!0,columns:a.columns,"table-data":a.tableData},null,8,["columns","table-data"])}}(),...function(){return{data(){return{columns:[{field:"name",key:"a",title:"Name",align:"left",width:"15%"},{field:"date",key:"b",title:"Date",align:"left",width:"15%",filter:{filterList:[{value:0,label:"1900-05-20",selected:!1},{value:1,label:"1910-06-20",selected:!1},{value:2,label:"2000-07-20",selected:!1},{value:3,label:"2010-08-20",selected:!1},{value:4,label:"2020-09-20",selected:!1}],filterConfirm:n=>{const t=n.filter(e=>e.selected).map(e=>e.label);this.searchByDateField(t)},filterReset:n=>{this.searchByDateField([])}}},{field:"hobby",key:"c",title:"Hobby",align:"center",width:"30%"},{field:"address",key:"d",title:"Address",align:"left",width:"40%"}],tableData:[],sourceData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai",rowKey:0},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing",rowKey:1},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing",rowKey:2},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen",rowKey:3},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen",rowKey:4}]}},methods:{searchByDateField(n){this.tableData=this.sourceData.filter(t=>n.length===0||n.includes(t.date))}},created(){this.tableData=this.sourceData.slice(0)}}}()}}},L={class:"content example-md-doc"},E=s("pre",null,[s("code",{class:"html"},`<template>
    <ve-table :max-height="300" :fixed-header="true" :columns="columns" :table-data="tableData" />
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        field: "name",
                        key: "a",
                        title: "Name",
                        align: "left",
                        width: "15%",
                    },
                    {
                        field: "date",
                        key: "b",
                        title: "Date",
                        align: "left",
                        width: "15%",
                        // filter
                        filter: {
                            filterList: [
                                {
                                    value: 0,
                                    label: "1900-05-20",
                                    selected: false,
                                },
                                {
                                    value: 1,
                                    label: "1910-06-20",
                                    selected: false,
                                },
                                {
                                    value: 2,
                                    label: "2000-07-20",
                                    selected: false,
                                },
                                {
                                    value: 3,
                                    label: "2010-08-20",
                                    selected: false,
                                },
                                {
                                    value: 4,
                                    label: "2020-09-20",
                                    selected: false,
                                },
                            ],
                            // filter confirm hook
                            filterConfirm: (filterList) => {
                                const labels = filterList
                                    .filter((x) => x.selected)
                                    .map((x) => x.label);
                                this.searchByDateField(labels);
                            },
                            // filter reset hook
                            filterReset: (filterList) => {
                                this.searchByDateField([]);
                            },
                        },
                    },
                    {
                        field: "hobby",
                        key: "c",
                        title: "Hobby",
                        align: "center",
                        width: "30%",
                    },
                    {
                        field: "address",
                        key: "d",
                        title: "Address",
                        align: "left",
                        width: "40%",
                    },
                ],
                // real table data
                tableData: [],
                // source data
                sourceData: [
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
            // search by date field
            searchByDateField(labels) {
                this.tableData = this.sourceData.filter(
                    (x) => labels.length === 0 || labels.includes(x.date),
                );
            },
        },
        created() {
            this.tableData = this.sourceData.slice(0);
        },
    };
<\/script>
`)],-1);function $(n,t,e,d,a,h){const i=l("anchor"),c=l("element-demo0"),u=l("demo-block");return b(),y("section",L,[o(i,{"is-edit":"",label:"单条件筛选",fileName:"single-filter.md"}),o(u,null,{source:r(()=>[o(c)]),highlight:r(()=>[E]),_:1})])}const K=f(B,[["render",$]]),S={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:n,openBlock:t,createBlock:e}=g;return function(a,h){const i=n("ve-table");return t(),e(i,{"max-height":300,"fixed-header":!0,columns:a.columns,"table-data":a.tableData},null,8,["columns","table-data"])}}(),...function(){return{data(){return{columns:[{field:"name",key:"a",title:"Name",align:"left",width:"15%",filter:{filterList:[{value:0,label:"John",selected:!1},{value:1,label:"Dickerson",selected:!1},{value:2,label:"Larsen",selected:!1},{value:3,label:"Geneva",selected:!1},{value:4,label:"Jami",selected:!1}],isMultiple:!0,filterConfirm:n=>{const t=n.filter(e=>e.selected).map(e=>e.label);this.searchByNameField(t)},filterReset:n=>{this.searchByNameField([])},maxHeight:120}},{field:"date",key:"b",title:"Date",align:"left",width:"15%"},{field:"hobby",key:"c",title:"Hobby",align:"center",width:"30%"},{field:"address",key:"d",title:"Address",align:"left",width:"40%"}],tableData:[],sourceData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai",rowKey:0},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing",rowKey:1},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing",rowKey:2},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen",rowKey:3},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen",rowKey:4}]}},methods:{searchByNameField(n){this.tableData=this.sourceData.filter(t=>n.length===0||n.includes(t.name))}},created(){this.tableData=this.sourceData.slice(0)}}}()}}},I={class:"content example-md-doc"},J=s("div",null,[s("p",null,[m("当筛选框内容很多时，"),s("code",null,"maxHeight"),m(" 属性设置筛选框的最大高度")])],-1),R=s("pre",null,[s("code",{class:"html"},`<template>
    <ve-table :max-height="300" :fixed-header="true" :columns="columns" :table-data="tableData" />
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        field: "name",
                        key: "a",
                        title: "Name",
                        align: "left",
                        width: "15%",
                        // filter
                        filter: {
                            filterList: [
                                { value: 0, label: "John", selected: false },
                                {
                                    value: 1,
                                    label: "Dickerson",
                                    selected: false,
                                },
                                { value: 2, label: "Larsen", selected: false },
                                { value: 3, label: "Geneva", selected: false },
                                { value: 4, label: "Jami", selected: false },
                            ],
                            isMultiple: true,
                            // filter confirm hook
                            filterConfirm: (filterList) => {
                                const labels = filterList
                                    .filter((x) => x.selected)
                                    .map((x) => x.label);
                                this.searchByNameField(labels);
                            },
                            // filter reset hook
                            filterReset: (filterList) => {
                                this.searchByNameField([]);
                            },
                            // max height
                            maxHeight: 120,
                        },
                    },
                    {
                        field: "date",
                        key: "b",
                        title: "Date",
                        align: "left",
                        width: "15%",
                    },
                    {
                        field: "hobby",
                        key: "c",
                        title: "Hobby",
                        align: "center",
                        width: "30%",
                    },
                    {
                        field: "address",
                        key: "d",
                        title: "Address",
                        align: "left",
                        width: "40%",
                    },
                ],
                // real table data
                tableData: [],
                // source data
                sourceData: [
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
            // search by name field
            searchByNameField(labels) {
                this.tableData = this.sourceData.filter(
                    (x) => labels.length === 0 || labels.includes(x.name),
                );
            },
        },
        created() {
            this.tableData = this.sourceData.slice(0);
        },
    };
<\/script>
`)],-1);function M(n,t,e,d,a,h){const i=l("anchor"),c=l("element-demo0"),u=l("demo-block");return b(),y("section",I,[o(i,{"is-edit":"",label:"多条件筛选",fileName:"mutil-filter.md"}),o(u,null,{source:r(()=>[o(c)]),highlight:r(()=>[R]),default:r(()=>[J]),_:1})])}const T=f(S,[["render",M]]),G={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:n,openBlock:t,createBlock:e}=g;return function(a,h){const i=n("ve-table");return t(),e(i,{"max-height":300,"fixed-header":!0,columns:a.columns,"table-data":a.tableData},null,8,["columns","table-data"])}}(),...function(){const n=[{value:0,label:"John",selected:!0},{value:1,label:"Dickerson",selected:!0},{value:2,label:"Larsen",selected:!1},{value:3,label:"Geneva",selected:!0},{value:4,label:"Jami",selected:!1}],t=[{value:0,label:"1900-05-20",selected:!1},{value:1,label:"1910-06-20",selected:!1},{value:2,label:"2000-07-20",selected:!1},{value:3,label:"2010-08-20",selected:!1},{value:4,label:"2020-09-20",selected:!1}];return{data(){return{searchData:{names:[],date:""},columns:[{field:"name",key:"a",title:"Name",align:"left",width:"15%",filter:{filterList:n,isMultiple:!0,filterConfirm:e=>{const d=e.filter(a=>a.selected).map(a=>a.label);this.searchData.names=d},filterReset:e=>{this.searchData.names=[]}}},{field:"date",key:"b",title:"Date",align:"left",width:"15%",filter:{filterList:t,filterConfirm:e=>{const d=e.find(a=>a.selected);this.searchData.date=d?d.label:""},filterReset:e=>{this.searchData.date=""}}},{field:"hobby",key:"c",title:"Hobby",align:"center",width:"30%"},{field:"address",key:"d",title:"Address",align:"left",width:"40%"}],tableData:[],sourceData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai",rowKey:0},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing",rowKey:1},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing",rowKey:2},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen",rowKey:3},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen",rowKey:4}]}},watch:{searchData:{handler:function(){this.search()},immediate:!0,deep:!0}},methods:{search(){const{names:e,date:d}=this.searchData;this.tableData=this.sourceData.filter(a=>(d===""||d===a.date)&&(e.length===0||e.includes(a.name)))}},created(){this.searchData.names=n.filter(e=>e.selected).map(e=>e.label)}}}()}}},H={class:"content example-md-doc"},j=s("p",null,"根据不同的业务场景，任意搭配使用",-1),q=s("div",null,[s("p",null,[m("你可以通过"),s("code",null,"selected=true"),m(" 设置默认选中的项")])],-1),z=s("pre",null,[s("code",{class:"html"},`<template>
    <ve-table :max-height="300" :fixed-header="true" :columns="columns" :table-data="tableData" />
</template>

<script>
    // name fiter list
    const NAME_FILTER_LIST = [
        { value: 0, label: "John", selected: true },
        { value: 1, label: "Dickerson", selected: true },
        { value: 2, label: "Larsen", selected: false },
        { value: 3, label: "Geneva", selected: true },
        { value: 4, label: "Jami", selected: false },
    ];

    // date fiter list
    const Date_FILTER_LIST = [
        { value: 0, label: "1900-05-20", selected: false },
        { value: 1, label: "1910-06-20", selected: false },
        { value: 2, label: "2000-07-20", selected: false },
        { value: 3, label: "2010-08-20", selected: false },
        { value: 4, label: "2020-09-20", selected: false },
    ];

    export default {
        data() {
            return {
                // search data
                searchData: {
                    names: [],
                    date: "",
                },
                columns: [
                    {
                        field: "name",
                        key: "a",
                        title: "Name",
                        align: "left",
                        width: "15%",
                        // filter
                        filter: {
                            filterList: NAME_FILTER_LIST,
                            isMultiple: true,
                            // filter confirm hook
                            filterConfirm: (filterList) => {
                                const labels = filterList
                                    .filter((x) => x.selected)
                                    .map((x) => x.label);
                                this.searchData.names = labels;
                            },
                            // filter reset hook
                            filterReset: (filterList) => {
                                this.searchData.names = [];
                            },
                        },
                    },
                    {
                        field: "date",
                        key: "b",
                        title: "Date",
                        align: "left",
                        width: "15%",
                        // filter
                        filter: {
                            filterList: Date_FILTER_LIST,
                            // filter confirm hook
                            filterConfirm: (filterList) => {
                                const item = filterList.find((x) => x.selected);
                                this.searchData.date = item ? item.label : "";
                            },
                            // filter reset hook
                            filterReset: (filterList) => {
                                this.searchData.date = "";
                            },
                        },
                    },
                    {
                        field: "hobby",
                        key: "c",
                        title: "Hobby",
                        align: "center",
                        width: "30%",
                    },
                    {
                        field: "address",
                        key: "d",
                        title: "Address",
                        align: "left",
                        width: "40%",
                    },
                ],
                // real table data
                tableData: [],
                // source data
                sourceData: [
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
        watch: {
            searchData: {
                handler: function () {
                    this.search();
                },
                immediate: true,
                deep: true,
            },
        },
        methods: {
            // search
            search() {
                const { names, date } = this.searchData;
                this.tableData = this.sourceData.filter(
                    (x) =>
                        (date === "" || date === x.date) &&
                        (names.length === 0 || names.includes(x.name)),
                );
            },
        },
        created() {
            // default search by names
            this.searchData.names = NAME_FILTER_LIST.filter((x) => x.selected).map((x) => x.label);
        },
    };
<\/script>
`)],-1);function X(n,t,e,d,a,h){const i=l("anchor"),c=l("element-demo0"),u=l("demo-block");return b(),y("section",H,[o(i,{"is-edit":"",label:"混合使用",fileName:"mixture-filter.md"}),j,o(u,null,{source:r(()=>[o(c)]),highlight:r(()=>[z]),default:r(()=>[q]),_:1})])}const P=f(G,[["render",X]]),V={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:n,openBlock:t,createBlock:e}=g;return function(a,h){const i=n("ve-table");return t(),e(i,{"max-height":300,"fixed-header":!0,columns:a.columns,"table-data":a.tableData},null,8,["columns","table-data"])}}(),...function(){return{data(){return{columns:[{field:"name",key:"a",title:"Name",align:"left",width:"15%"},{field:"date",key:"b",title:"Date",align:"left",width:"15%",filter:{filterList:[{value:0,label:"1900-05-20",selected:!1},{value:1,label:"1910-06-20",selected:!1},{value:2,label:"2000-07-20",selected:!1},{value:3,label:"2010-08-20",selected:!1},{value:4,label:"2020-09-20",selected:!1}],filterConfirm:n=>{const t=n.filter(e=>e.selected).map(e=>e.label);this.searchByDateField(t)},filterReset:n=>{this.searchByDateField([])},filterIcon:()=>o(l("ve-icon"),{name:"search"},null)}},{field:"hobby",key:"c",title:"Hobby",align:"center",width:"30%"},{field:"address",key:"d",title:"Address",align:"left",width:"40%"}],tableData:[],sourceData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai",rowKey:0},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing",rowKey:1},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing",rowKey:2},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen",rowKey:3},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen",rowKey:4}]}},methods:{searchByDateField(n){this.tableData=this.sourceData.filter(t=>n.length===0||n.includes(t.date))}},created(){this.tableData=this.sourceData.slice(0)}}}()}}},O={class:"content example-md-doc"},Q=s("p",null,[m("filterIcon 回调函数，支持返回自定义的 icon。此处使用了内置的 "),s("code",null,'<ve-icon name="search" />'),m(" 图标，你也可以其他图标库")],-1),U=s("pre",null,[s("code",{class:"html"},`<template>
    <ve-table :max-height="300" :fixed-header="true" :columns="columns" :table-data="tableData" />
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        field: "name",
                        key: "a",
                        title: "Name",
                        align: "left",
                        width: "15%",
                    },
                    {
                        field: "date",
                        key: "b",
                        title: "Date",
                        align: "left",
                        width: "15%",
                        // filter
                        filter: {
                            filterList: [
                                {
                                    value: 0,
                                    label: "1900-05-20",
                                    selected: false,
                                },
                                {
                                    value: 1,
                                    label: "1910-06-20",
                                    selected: false,
                                },
                                {
                                    value: 2,
                                    label: "2000-07-20",
                                    selected: false,
                                },
                                {
                                    value: 3,
                                    label: "2010-08-20",
                                    selected: false,
                                },
                                {
                                    value: 4,
                                    label: "2020-09-20",
                                    selected: false,
                                },
                            ],
                            // filter confirm hook
                            filterConfirm: (filterList) => {
                                const labels = filterList
                                    .filter((x) => x.selected)
                                    .map((x) => x.label);
                                this.searchByDateField(labels);
                            },
                            // filter reset hook
                            filterReset: (filterList) => {
                                this.searchByDateField([]);
                            },
                            // custom filter icon
                            filterIcon: () => {
                                return <ve-icon name="search" />;
                            },
                        },
                    },
                    {
                        field: "hobby",
                        key: "c",
                        title: "Hobby",
                        align: "center",
                        width: "30%",
                    },
                    {
                        field: "address",
                        key: "d",
                        title: "Address",
                        align: "left",
                        width: "40%",
                    },
                ],
                // real table data
                tableData: [],
                // source data
                sourceData: [
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
            // search by date field
            searchByDateField(labels) {
                this.tableData = this.sourceData.filter(
                    (x) => labels.length === 0 || labels.includes(x.date),
                );
            },
        },
        created() {
            this.tableData = this.sourceData.slice(0);
        },
    };
<\/script>
`)],-1);function W(n,t,e,d,a,h){const i=l("anchor"),c=l("element-demo0"),u=l("demo-block");return b(),y("section",O,[o(i,{"is-edit":"",label:"自定义图标",fileName:"custom-icon.md"}),Q,o(u,null,{source:r(()=>[o(c)]),highlight:r(()=>[U]),_:1})])}const Y=f(V,[["render",W]]),Z={name:"BasicMain",components:{Explain:N,SingleFilter:K,MutilFilter:T,MixtureFilter:P,CustomIcon:Y,API:D}},ee=s("h2",null,"筛选",-1);function ne(n,t,e,d,a,h){const i=l("Explain"),c=l("SingleFilter"),u=l("MutilFilter"),p=l("MixtureFilter"),_=l("CustomIcon"),v=l("API");return b(),y("div",null,[ee,o(i),o(c),o(u),o(p),o(_),o(v,{title:"API",anchor:"API",desc:"filter 筛选配置"})])}const se=f(Z,[["render",ne]]);export{se as default};
