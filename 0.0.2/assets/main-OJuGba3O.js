import{F as _}from"./filter-custom-props--vxuCNdG.js";import{_ as f,o as p,c as b,m as a,p as o,a as n,r as s,w as h}from"./index-wizmyTnN.js";import{V as g}from"./vue.runtime.esm-bundler-eTwiQ2m-.js";import"./api-tpl-4K4FBVzq.js";const C={},v={class:"content example-md-doc"},D=a("div",{class:"tip"},[a("p",null,[o("1、为了满足更多场景的需求，开放了筛选自定义功能。筛选自定义需要自行实现交互逻辑"),a("br"),o(" 2、通过 "),a("code",null,"column"),o(" 对象的 "),a("code",null,"filterCustom"),o("属性设置筛选自定义功能"),a("br")])],-1),w=[D];function F(e,t){return p(),b("section",v,w)}const k=f(C,[["render",F]]),A={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:e,openBlock:t,createBlock:r}=g;return function(i,m){const c=e("ve-table");return t(),r(c,{"max-height":300,"fixed-header":!0,columns:i.columns,"table-data":i.tableData},null,8,["columns","table-data"])}}(),...function(){return{data(){return{searchValue:"",columns:[{field:"name",key:"a",title:"Name",align:"left",width:"15%",filterCustom:{defaultVisible:!0,render:({showFn:e,closeFn:t},r)=>n("div",{class:"custom-name-filter"},[n("input",{value:this.searchValue,onInput:l=>this.searchValue=l.target.value,placeholder:"Search name"},null),n("div",{class:"custom-name-filter-operation"},[n("span",{class:"name-filter-cancel",onClick:()=>this.searchCancel(t)},[o("取消")]),n("span",{class:"name-filter-confirm",onClick:()=>this.searchConfirm(t)},[o("查询")])])])}},{field:"date",key:"b",title:"Date",align:"left",width:"15%"},{field:"hobby",key:"c",title:"Hobby",align:"center",width:"30%"},{field:"address",key:"d",title:"Address",align:"left",width:"40%"}],tableData:[],sourceData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai",rowKey:0},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing",rowKey:1},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing",rowKey:2},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen",rowKey:3},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen",rowKey:4}]}},methods:{search(){const e=this.searchValue;this.tableData=this.sourceData.filter(t=>!e.length||t.name.toLowerCase().includes(e.toLowerCase()))},searchCancel(e){e()},searchConfirm(e){this.search(),e()}},created(){this.tableData=this.sourceData.slice(0)}}}()}}},E={class:"content example-md-doc"},B=a("div",null,[a("p",null,[o("1、"),a("code",null,"defaultVisible"),o("指定是否默认展开"),a("br"),o("2、"),a("code",null,"render"),o("渲染函数，指定筛选自定义的内容。参数"),a("code",null,"showFn"),o("为展开下拉函数、"),a("code",null,"closeFn"),o("为关闭下拉函数")])],-1),x=a("pre",null,[a("code",{class:"html"},`<template>
    <ve-table :max-height="300" :fixed-header="true" :columns="columns" :table-data="tableData" />
</template>

<script>
    export default {
        data() {
            return {
                searchValue: "",
                columns: [
                    {
                        field: "name",
                        key: "a",
                        title: "Name",
                        align: "left",
                        width: "15%",
                        // filter custom
                        filterCustom: {
                            defaultVisible: true,
                            render: ({ showFn, closeFn }, h) => {
                                return (
                                    <div class="custom-name-filter">
                                        <input
                                            value={this.searchValue}
                                            onInput={(e) => (this.searchValue = e.target.value)}
                                            placeholder="Search name"
                                        />
                                        <div class="custom-name-filter-operation">
                                            <span
                                                class="name-filter-cancel"
                                                onClick={() => this.searchCancel(closeFn)}
                                            >
                                                取消
                                            </span>
                                            <span
                                                class="name-filter-confirm"
                                                onClick={() => this.searchConfirm(closeFn)}
                                            >
                                                查询
                                            </span>
                                        </div>
                                    </div>
                                );
                            },
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
            // search
            search() {
                const searchValue = this.searchValue;
                this.tableData = this.sourceData.filter(
                    (x) =>
                        !searchValue.length ||
                        x.name.toLowerCase().includes(searchValue.toLowerCase()),
                );
            },

            // search cancel
            searchCancel(closeFn) {
                closeFn();
            },

            // search cancel
            searchConfirm(closeFn) {
                this.search();
                closeFn();
            },
        },
        created() {
            this.tableData = this.sourceData.slice(0);
        },
    };
<\/script>

<style>
    .custom-name-filter {
        padding: 10px;

        .custom-name-filter-operation {
            cursor: pointer;

            margin: 10px 10px 0px 0;
            .name-filter-cancel,
            .name-filter-confirm {
                &:hover {
                    color: #1890ff;
                }
            }

            .name-filter-cancel {
                float: left;
            }

            .name-filter-confirm {
                float: right;
            }
        }
    }
</style>
`)],-1);function V(e,t,r,l,i,m){const c=s("anchor"),u=s("element-demo0"),d=s("demo-block");return p(),b("section",E,[n(c,{"is-edit":"",label:"单条件筛选",fileName:"single-filter.md"}),n(d,null,{source:h(()=>[n(u)]),highlight:h(()=>[x]),default:h(()=>[B]),_:1})])}const N=f(A,[["render",V]]),$={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:e,openBlock:t,createBlock:r}=g;return function(i,m){const c=e("ve-table");return t(),r(c,{"max-height":300,"fixed-header":!0,columns:i.columns,"table-data":i.tableData},null,8,["columns","table-data"])}}(),...function(){return{data(){return{searchValue:"",columns:[{field:"name",key:"a",title:"Name",align:"left",width:"15%",filterCustom:{defaultVisible:!1,render:({showFn:e,closeFn:t},r)=>n("div",{class:"custom-name-filter"},[n("input",{value:this.searchValue,onInput:l=>this.searchValue=l.target.value,placeholder:"Search name"},null),n("div",{class:"custom-name-filter-operation"},[n("span",{class:"name-filter-cancel",onClick:()=>this.searchCancel(t)},[o("取消")]),n("span",{class:"name-filter-confirm",onClick:()=>this.searchConfirm(t)},[o("查询")])])]),filterIcon:()=>n(s("ve-icon"),{name:"search"},null)}},{field:"date",key:"b",title:"Date",align:"left",width:"15%"},{field:"hobby",key:"c",title:"Hobby",align:"center",width:"30%"},{field:"address",key:"d",title:"Address",align:"left",width:"40%"}],tableData:[],sourceData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai",rowKey:0},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing",rowKey:1},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing",rowKey:2},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen",rowKey:3},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen",rowKey:4}]}},methods:{search(){const e=this.searchValue;this.tableData=this.sourceData.filter(t=>!e.length||t.name.toLowerCase().includes(e.toLowerCase()))},searchCancel(e){e()},searchConfirm(e){this.search(),e()}},created(){this.tableData=this.sourceData.slice(0)}}}()}}},K={class:"content example-md-doc"},I=a("p",null,[o("filterIcon 回调函数，支持返回自定义的 icon。此处使用了内置的 "),a("code",null,'<ve-icon name="search" />'),o(" 图标，你也可以其他图标库")],-1),S=a("pre",null,[a("code",{class:"html"},`<template>
    <ve-table :max-height="300" :fixed-header="true" :columns="columns" :table-data="tableData" />
</template>

<script>
    export default {
        data() {
            return {
                searchValue: "",
                columns: [
                    {
                        field: "name",
                        key: "a",
                        title: "Name",
                        align: "left",
                        width: "15%",
                        // filter custom
                        filterCustom: {
                            defaultVisible: false,
                            render: ({ showFn, closeFn }, h) => {
                                return (
                                    <div class="custom-name-filter">
                                        <input
                                            value={this.searchValue}
                                            onInput={(e) => (this.searchValue = e.target.value)}
                                            placeholder="Search name"
                                        />
                                        <div class="custom-name-filter-operation">
                                            <span
                                                class="name-filter-cancel"
                                                onClick={() => this.searchCancel(closeFn)}
                                            >
                                                取消
                                            </span>
                                            <span
                                                class="name-filter-confirm"
                                                onClick={() => this.searchConfirm(closeFn)}
                                            >
                                                查询
                                            </span>
                                        </div>
                                    </div>
                                );
                            },
                            // custom filter icon
                            filterIcon: () => {
                                return <ve-icon name="search" />;
                            },
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
            // search
            search() {
                const searchValue = this.searchValue;
                this.tableData = this.sourceData.filter(
                    (x) =>
                        !searchValue.length ||
                        x.name.toLowerCase().includes(searchValue.toLowerCase()),
                );
            },

            // search cancel
            searchCancel(closeFn) {
                closeFn();
            },

            // search cancel
            searchConfirm(closeFn) {
                this.search();
                closeFn();
            },
        },
        created() {
            this.tableData = this.sourceData.slice(0);
        },
    };
<\/script>

<style>
    .custom-name-filter {
        padding: 10px;

        .custom-name-filter-operation {
            cursor: pointer;

            margin: 10px 10px 0px 0;
            .name-filter-cancel,
            .name-filter-confirm {
                &:hover {
                    color: #1890ff;
                }
            }

            .name-filter-cancel {
                float: left;
            }

            .name-filter-confirm {
                float: right;
            }
        }
    }
</style>
`)],-1);function L(e,t,r,l,i,m){const c=s("anchor"),u=s("element-demo0"),d=s("demo-block");return p(),b("section",K,[n(c,{"is-edit":"",label:"自定义图标",fileName:"custom-icon.md"}),I,n(d,null,{source:h(()=>[n(u)]),highlight:h(()=>[S]),_:1})])}const J=f($,[["render",L]]),P={name:"BasicMain",components:{Explain:k,SingleFilter:N,CustomIcon:J,API:_}},j=a("h2",null,"筛选自定义",-1);function q(e,t,r,l,i,m){const c=s("Explain"),u=s("SingleFilter"),d=s("CustomIcon"),y=s("API");return p(),b("div",null,[j,n(c),n(u),n(d),n(y,{title:"API",anchor:"API",desc:"filterCustom 自定义筛选配置"})])}const M=f(P,[["render",q]]);export{M as default};
