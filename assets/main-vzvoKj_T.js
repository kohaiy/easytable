import{S as w}from"./sort-option-props-R_Y0EvvS.js";import{_ as m,o as p,c as b,ac as C,r,a as i,w as c,h as a,i as l}from"./index-_KwaNkJD.js";import{V as y}from"./vue.runtime.esm-bundler-oYPn8qVD.js";import"./api-tpl-fb_IdC4u.js";const A={},B={class:"content example-md-doc"},k=C('<div class="tip"><p>1、通过 <code>sortBy</code>属性，设置需要排序的列。<code>sortBy=&quot;asc&quot;</code>：默认当前列升序；<code>sortBy=&quot;desc&quot;</code>：默认当前列降序；<code>sortBy=&quot;&quot;</code>：允许排序但无排序规则<br> 2、通过 <code>sortOption</code>对象，设置更多排序功能。排序功能需要配合<code>sortChange(param)</code>回调函数实现，回调参数包含列的排序规则</p></div>',1),v=[k];function N(e,t){return p(),b("section",B,v)}const F=m(A,[["render",N]]),D={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:e,openBlock:t,createBlock:n}=y;return function(o,h){const s=e("ve-table");return t(),n(s,{columns:o.columns,"table-data":o.tableData,"sort-option":o.sortOption,"border-y":""},null,8,["columns","table-data","sort-option"])}}(),...function(){return{data(){return{sortOption:{sortChange:e=>{console.log("sortChange::",e),this.sortChange(e)}},columns:[{field:"name",key:"a",title:"Name",align:"left"},{field:"age",key:"b",title:"Age",align:"center",sortBy:""},{field:"weight",key:"c",title:"Weight(kg)",align:"center",sortBy:"asc"},{field:"hobby",key:"d",title:"Hobby",align:"center"},{field:"address",key:"e",title:"Address",align:"left"}],tableData:[{name:"John",age:25,weight:66,hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",age:20,weight:70,hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",age:18,weight:65,hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",age:17,weight:80,hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",age:26,weight:72,hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{sortChange(e){this.tableData.sort((t,n)=>{if(e.age)return e.age==="asc"?t.age-n.age:e.age==="desc"?n.age-t.age:0;if(e.weight)return e.weight==="asc"?t.weight-n.weight:e.weight==="desc"?n.weight-t.weight:0})}}}}()}}},$={class:"content example-md-doc"},S=a("div",null,[a("p",null,[l("1、默认为单字段排序"),a("br"),l("2、"),a("code",null,"sortChange(params)"),l("回调函数接收列的排序规则")])],-1),E=a("pre",null,[a("code",{class:"html"},`<template>
    <ve-table :columns="columns" :table-data="tableData" :sort-option="sortOption" border-y />
</template>

<script>
    export default {
        data() {
            return {
                sortOption: {
                    sortChange: (params) => {
                        console.log("sortChange::", params);
                        this.sortChange(params);
                    },
                },
                columns: [
                    { field: "name", key: "a", title: "Name", align: "left" },
                    {
                        field: "age",
                        key: "b",
                        title: "Age",
                        align: "center",
                        sortBy: "",
                    },
                    {
                        field: "weight",
                        key: "c",
                        title: "Weight(kg)",
                        align: "center",
                        sortBy: "asc",
                    },
                    {
                        field: "hobby",
                        key: "d",
                        title: "Hobby",
                        align: "center",
                    },
                    {
                        field: "address",
                        key: "e",
                        title: "Address",
                        align: "left",
                    },
                ],
                tableData: [
                    {
                        name: "John",
                        age: 25,
                        weight: 66,
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Shanghai",
                    },
                    {
                        name: "Dickerson",
                        age: 20,
                        weight: 70,
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Beijing",
                    },
                    {
                        name: "Larsen",
                        age: 18,
                        weight: 65,
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Chongqing",
                    },
                    {
                        name: "Geneva",
                        age: 17,
                        weight: 80,
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Xiamen",
                    },
                    {
                        name: "Jami",
                        age: 26,
                        weight: 72,
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Shenzhen",
                    },
                ],
            };
        },
        methods: {
            sortChange(params) {
                this.tableData.sort((a, b) => {
                    if (params.age) {
                        if (params.age === "asc") {
                            return a.age - b.age;
                        } else if (params.age === "desc") {
                            return b.age - a.age;
                        } else {
                            return 0;
                        }
                    } else if (params.weight) {
                        if (params.weight === "asc") {
                            return a.weight - b.weight;
                        } else if (params.weight === "desc") {
                            return b.weight - a.weight;
                        } else {
                            return 0;
                        }
                    }
                });
            },
        },
    };
<\/script>
`)],-1);function O(e,t,n,d,o,h){const s=r("anchor"),g=r("element-demo0"),u=r("demo-block");return p(),b("section",$,[i(s,{"is-edit":"",label:"单字段排序",fileName:"single-sort.md"}),i(u,null,{source:c(()=>[i(g)]),highlight:c(()=>[E]),default:c(()=>[S]),_:1})])}const x=m(D,[["render",O]]),q={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:e,openBlock:t,createBlock:n}=y;return function(o,h){const s=e("ve-table");return t(),n(s,{columns:o.columns,"table-data":o.tableData,"sort-option":o.sortOption,"border-y":""},null,8,["columns","table-data","sort-option"])}}(),...function(){return{data(){return{sortOption:{multipleSort:!0,sortChange:e=>{console.log("sortChange::",e),this.sortChange(e)}},columns:[{field:"name",key:"a",title:"Name",align:"left"},{field:"age",key:"b",title:"Age",align:"center",sortBy:""},{field:"weight",key:"c",title:"Weight(kg)",align:"center",sortBy:"asc"},{field:"hobby",key:"d",title:"Hobby",align:"center"},{field:"address",key:"e",title:"Address",align:"left"}],tableData:[{name:"John",age:25,weight:66,hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",age:20,weight:70,hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",age:18,weight:65,hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",age:17,weight:80,hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",age:26,weight:72,hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{sortChange(e){let t=this.tableData.slice(0);t.sort((n,d)=>{if(e.age)return e.age==="asc"?n.age-d.age:e.age==="desc"?d.age-n.age:0}),t.sort((n,d)=>{if(e.weight)return e.weight==="asc"?n.weight-d.weight:e.weight==="desc"?d.weight-n.weight:0}),this.tableData=t}}}}()}}},J={class:"content example-md-doc"},j=a("div",null,[a("p",null,[l("1、通过"),a("code",null,"multipleSort=true"),l("开启多字段排序"),a("br"),l("2、排序字段的优先级需要自己指定，此处只是示例，具体逻辑自行实现（一般由后端服务返回）")])],-1),z=a("pre",null,[a("code",{class:"html"},`<template>
    <ve-table :columns="columns" :table-data="tableData" :sort-option="sortOption" border-y />
</template>

<script>
    export default {
        data() {
            return {
                sortOption: {
                    // 是否开启多字段排序
                    multipleSort: true,
                    sortChange: (params) => {
                        console.log("sortChange::", params);
                        this.sortChange(params);
                    },
                },
                columns: [
                    { field: "name", key: "a", title: "Name", align: "left" },
                    {
                        field: "age",
                        key: "b",
                        title: "Age",
                        align: "center",
                        sortBy: "",
                    },
                    {
                        field: "weight",
                        key: "c",
                        title: "Weight(kg)",
                        align: "center",
                        sortBy: "asc",
                    },
                    {
                        field: "hobby",
                        key: "d",
                        title: "Hobby",
                        align: "center",
                    },
                    {
                        field: "address",
                        key: "e",
                        title: "Address",
                        align: "left",
                    },
                ],
                tableData: [
                    {
                        name: "John",
                        age: 25,
                        weight: 66,
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Shanghai",
                    },
                    {
                        name: "Dickerson",
                        age: 20,
                        weight: 70,
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Beijing",
                    },
                    {
                        name: "Larsen",
                        age: 18,
                        weight: 65,
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Chongqing",
                    },
                    {
                        name: "Geneva",
                        age: 17,
                        weight: 80,
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Xiamen",
                    },
                    {
                        name: "Jami",
                        age: 26,
                        weight: 72,
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Shenzhen",
                    },
                ],
            };
        },
        methods: {
            sortChange(params) {
                let data = this.tableData.slice(0);

                data.sort((a, b) => {
                    if (params.age) {
                        if (params.age === "asc") {
                            return a.age - b.age;
                        } else if (params.age === "desc") {
                            return b.age - a.age;
                        } else {
                            return 0;
                        }
                    }
                });

                data.sort((a, b) => {
                    if (params.weight) {
                        if (params.weight === "asc") {
                            return a.weight - b.weight;
                        } else if (params.weight === "desc") {
                            return b.weight - a.weight;
                        } else {
                            return 0;
                        }
                    }
                });

                this.tableData = data;
            },
        },
    };
<\/script>
`)],-1);function G(e,t,n,d,o,h){const s=r("anchor"),g=r("element-demo0"),u=r("demo-block");return p(),b("section",J,[i(s,{"is-edit":"",label:"多字段排序",fileName:"multi-sort.md"}),i(u,null,{source:c(()=>[i(g)]),highlight:c(()=>[z]),default:c(()=>[j]),_:1})])}const H=m(q,[["render",G]]),L={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:e,openBlock:t,createBlock:n}=y;return function(o,h){const s=e("ve-table");return t(),n(s,{columns:o.columns,"table-data":o.tableData,"sort-option":o.sortOption,"border-y":""},null,8,["columns","table-data","sort-option"])}}(),...function(){return{data(){return{sortOption:{sortAlways:!0,sortChange:e=>{console.log("sortChange::",e),this.sortChange(e)}},columns:[{field:"name",key:"a",title:"Name",align:"left"},{field:"age",key:"b",title:"Age",align:"center",sortBy:""},{field:"weight",key:"c",title:"Weight(kg)",align:"center",sortBy:"asc"},{field:"hobby",key:"d",title:"Hobby",align:"center"},{field:"address",key:"e",title:"Address",align:"left"}],tableData:[{name:"John",age:25,weight:66,hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",age:20,weight:70,hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",age:18,weight:65,hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",age:17,weight:80,hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",age:26,weight:72,hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{sortChange(e){this.tableData.sort((t,n)=>{if(e.age)return e.age==="asc"?t.age-n.age:e.age==="desc"?n.age-t.age:0;if(e.weight)return e.weight==="asc"?t.weight-n.weight:e.weight==="desc"?n.weight-t.weight:0})}}}}()}}},V={class:"content example-md-doc"},W=a("div",null,[a("p",null,[l("1、通过"),a("code",null,"sortAlways=true"),l("允许排序只在升序和降序切换")])],-1),X=a("pre",null,[a("code",{class:"html"},`<template>
    <ve-table :columns="columns" :table-data="tableData" :sort-option="sortOption" border-y />
</template>

<script>
    export default {
        data() {
            return {
                sortOption: {
                    // sort always
                    sortAlways: true,
                    sortChange: (params) => {
                        console.log("sortChange::", params);
                        this.sortChange(params);
                    },
                },
                columns: [
                    { field: "name", key: "a", title: "Name", align: "left" },
                    {
                        field: "age",
                        key: "b",
                        title: "Age",
                        align: "center",
                        sortBy: "",
                    },
                    {
                        field: "weight",
                        key: "c",
                        title: "Weight(kg)",
                        align: "center",
                        sortBy: "asc",
                    },
                    {
                        field: "hobby",
                        key: "d",
                        title: "Hobby",
                        align: "center",
                    },
                    {
                        field: "address",
                        key: "e",
                        title: "Address",
                        align: "left",
                    },
                ],
                tableData: [
                    {
                        name: "John",
                        age: 25,
                        weight: 66,
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Shanghai",
                    },
                    {
                        name: "Dickerson",
                        age: 20,
                        weight: 70,
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Beijing",
                    },
                    {
                        name: "Larsen",
                        age: 18,
                        weight: 65,
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Chongqing",
                    },
                    {
                        name: "Geneva",
                        age: 17,
                        weight: 80,
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Xiamen",
                    },
                    {
                        name: "Jami",
                        age: 26,
                        weight: 72,
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Shenzhen",
                    },
                ],
            };
        },
        methods: {
            sortChange(params) {
                this.tableData.sort((a, b) => {
                    if (params.age) {
                        if (params.age === "asc") {
                            return a.age - b.age;
                        } else if (params.age === "desc") {
                            return b.age - a.age;
                        } else {
                            return 0;
                        }
                    } else if (params.weight) {
                        if (params.weight === "asc") {
                            return a.weight - b.weight;
                        } else if (params.weight === "desc") {
                            return b.weight - a.weight;
                        } else {
                            return 0;
                        }
                    }
                });
            },
        },
    };
<\/script>
`)],-1);function I(e,t,n,d,o,h){const s=r("anchor"),g=r("element-demo0"),u=r("demo-block");return p(),b("section",V,[i(s,{"is-edit":"",label:"排序切换",fileName:"sort-always.md"}),i(u,null,{source:c(()=>[i(g)]),highlight:c(()=>[X]),default:c(()=>[W]),_:1})])}const P=m(L,[["render",I]]),M={name:"BasicMain",components:{Explain:F,SingleSort:x,MultiSort:H,SortAlways:P,API:w}},T=a("h2",null,"排序",-1);function K(e,t,n,d,o,h){const s=r("Explain"),g=r("SingleSort"),u=r("MultiSort"),f=r("SortAlways"),_=r("API");return p(),b("div",null,[T,i(s),i(g),i(u),i(f),i(_,{title:"API",anchor:"API",desc:"sortOption 排序配置"})])}const Z=m(M,[["render",K]]);export{Z as default};
