import{_ as g,o as h,c as b,h as n,i as p,r as a,a as d,w as _}from"./index-N-xeINNQ.js";import{V as v}from"./vue.runtime.esm-bundler-WXcYj9kA.js";const C={},k={class:"content example-md-doc"},N=n("div",{class:"tip"},[n("p",null,[p("1、Table 组件开启 Loading 效果是非常简单的，请求数据时开启 Loading 即可"),n("br")])],-1),$=[N];function B(e,s){return h(),b("section",k,$)}const A=g(C,[["render",B]]),E={name:"component-doc",components:{"element-demo0":{render:function(){const{createElementVNode:e,resolveComponent:s,createVNode:l,openBlock:r,createElementBlock:u}=v,m=e("br",null,null,-1),o=e("br",null,null,-1);return function(t,c){const y=s("ve-table");return r(),u("div",null,[e("button",{class:"button-demo",onClick:c[0]||(c[0]=f=>t.show())},"开启 Loading"),e("button",{class:"button-demo",onClick:c[1]||(c[1]=f=>t.close())},"关闭 Loading"),m,o,l(y,{id:"loading-container",columns:t.columns,"table-data":t.tableData},null,8,["columns","table-data"])])}}(),...function(){return{data(){return{loadingInstance:null,columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"right"},{field:"address",key:"d",title:"Address"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{show(){this.loadingInstance.show()},close(){this.loadingInstance.close()}},mounted(){this.loadingInstance=this.$veLoading({target:document.querySelector("#loading-container"),name:"wave"}),this.show()},destroyed(){this.loadingInstance.destroy()}}}()}}},L={class:"content example-md-doc"},w=n("p",null,[p("更多 Loading 使用方法，请参考 "),n("a",{href:"#/zh/doc/base/loading"},"Loading 组件")],-1),x=n("pre",null,[n("code",{class:"html"},`<template>
    <div>
        <button class="button-demo" @click="show()">开启 Loading</button>
        <button class="button-demo" @click="close()">关闭 Loading</button>
        <br />
        <br />
        <ve-table id="loading-container" :columns="columns" :table-data="tableData" />
    </div>
</template>
<script>
    export default {
        data() {
            return {
                loadingInstance: null,
                columns: [
                    { field: "name", key: "a", title: "Name", align: "center" },
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
                    },
                    {
                        name: "Dickerson",
                        date: "1910-06-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Beijing",
                    },
                    {
                        name: "Larsen",
                        date: "2000-07-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Chongqing",
                    },
                    {
                        name: "Geneva",
                        date: "2010-08-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Xiamen",
                    },
                    {
                        name: "Jami",
                        date: "2020-09-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Shenzhen",
                    },
                ],
            };
        },
        methods: {
            show() {
                this.loadingInstance.show();
            },
            close() {
                this.loadingInstance.close();
            },
        },
        mounted() {
            this.loadingInstance = this.$veLoading({
                target: document.querySelector("#loading-container"),
                // 等同于
                // target:"#loading-container"
                name: "wave",
            });
            this.show();
        },
        destroyed() {
            this.loadingInstance.destroy();
        },
    };
<\/script>
`)],-1);function D(e,s,l,r,u,m){const o=a("anchor"),i=a("element-demo0"),t=a("demo-block");return h(),b("section",L,[d(o,{"is-edit":"",label:"示例",fileName:"basic.md"}),w,d(t,null,{source:_(()=>[d(i)]),highlight:_(()=>[x]),_:1})])}const F=g(E,[["render",D]]),I={name:"BasicMain",components:{Explain:A,Basic:F}},V=n("h2",null,"结合 Loading 组件",-1);function S(e,s,l,r,u,m){const o=a("Explain"),i=a("Basic");return h(),b("div",null,[V,d(o),d(i)])}const z=g(I,[["render",S]]);export{z as default};
