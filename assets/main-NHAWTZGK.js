import{_ as u,o as p,c as b,m as s,r as o,a,w as y}from"./index-1-5pqjkO.js";import{V as v}from"./vue.runtime.esm-bundler-BRNTKtdd.js";const w={},k={class:"content example-md-doc"},E=s("div",{class:"tip"},[s("p",null,"1、空数据效果，组件本身没有提供接口，你可以自己实现，这样会更灵活一些")],-1),N=[E];function C(e,d){return p(),b("section",k,N)}const D=u(w,[["render",C]]),$={name:"component-doc",components:{"element-demo0":{render:function(){const{createElementVNode:e,resolveComponent:d,createVNode:c,vShow:l,withDirectives:r,openBlock:m,createElementBlock:n}=v,t=e("br",null,null,-1),h=e("br",null,null,-1),g={class:"empty-data"};return function(i,_){const f=d("ve-table");return m(),n("div",null,[e("button",{class:"button-demo",onClick:_[0]||(_[0]=z=>i.request())},"切换请求"),t,h,c(f,{columns:i.columns,"table-data":i.tableData,"border-y":""},null,8,["columns","table-data"]),r(e("div",g,"暂无数据",512),[[l,i.showEmpty]])])}}(),...function(){return{data(){return{columns:[{field:"name",key:"a",title:"Name",align:"center",width:"20%"},{field:"date",key:"b",title:"Date",align:"left",width:"20%"},{field:"hobby",key:"c",title:"Hobby",align:"center",width:"30%"},{field:"address",key:"d",title:"Address",align:"left",width:"30%"}],tableData:[],showEmpty:!1}},methods:{request(){setTimeout(()=>{this.tableData=this.tableData.length>0?[]:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}],this.tableData.length===0?this.showEmpty=!0:this.showEmpty=!1})}},created(){this.request()}}}()}}},A={class:"content example-md-doc"},x=s("pre",null,[s("code",{class:"html"},`<template>
    <div>
        <button class="button-demo" @click="request()">切换请求</button>
        <br />
        <br />
        <ve-table :columns="columns" :table-data="tableData" border-y />
        <div v-show="showEmpty" class="empty-data">暂无数据</div>
    </div>
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
                        align: "center",
                        width: "20%",
                    },
                    {
                        field: "date",
                        key: "b",
                        title: "Date",
                        align: "left",
                        width: "20%",
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
                        width: "30%",
                    },
                ],
                tableData: [],
                // show empty
                showEmpty: false,
            };
        },
        methods: {
            request() {
                setTimeout(() => {
                    this.tableData =
                        this.tableData.length > 0
                            ? []
                            : [
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
                              ];

                    if (this.tableData.length === 0) {
                        this.showEmpty = true;
                    } else {
                        this.showEmpty = false;
                    }
                });
            },
        },
        created() {
            this.request();
        },
    };
<\/script>

<style>
    .empty-data {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 200px;
        width: 100%;
        color: #666;
        font-size: 16px;
        border: 1px solid #eee;
        border-top: 0;
    }
</style>
`)],-1);function B(e,d,c,l,r,m){const n=o("anchor"),t=o("element-demo0"),h=o("demo-block");return p(),b("section",A,[a(n,{"is-edit":"",label:"空数据",fileName:"basic.md"}),a(h,null,{source:y(()=>[a(t)]),highlight:y(()=>[x]),_:1})])}const q=u($,[["render",B]]),V={name:"DataEmpty",components:{Explain:D,Basic:q}},S=s("h2",null,"空数据",-1);function J(e,d,c,l,r,m){const n=o("Explain"),t=o("Basic");return p(),b("div",null,[S,a(n),a(t)])}const L=u(V,[["render",J]]);export{L as default};
