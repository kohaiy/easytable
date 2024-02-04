import{_ as h,o as y,c as b,h as e,i as p,r as l,a as t,w as m}from"./index-OvRFtLym.js";import{V as _}from"./vue.runtime.esm-bundler-SqYzIWQ-.js";const g={},f={class:"content example-md-doc"},w=e("div",{class:"tip"},[e("p",null,[p("1、虚拟滚动的行序号 "),e("a",{href:"#/zh/doc/table/virtual-scroll?anchor=xing-xu-hao-wen-ti"},"参考这里")])],-1),v=[w];function k(a,d){return y(),b("section",f,v)}const C=h(g,[["render",k]]),N={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:a,createVNode:d,openBlock:n,createElementBlock:i}=_;return function(r,s){const c=a("ve-table");return n(),i("div",null,[d(c,{columns:r.columns,"table-data":r.tableData},null,8,["columns","table-data"])])}}(),...function(){return{data(){return{columns:[{field:"",key:"a",title:"",width:50,align:"center",renderBodyCell:({row:a,column:d,rowIndex:n},i)=>++n},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},A={class:"content example-md-doc"},B=e("div",null,[e("p",null,[p("行序号没有提供 API,而是通过"),e("code",null,"renderBodyCell"),p("渲染函数的方式实现，这样会更灵活")])],-1),$=e("pre",null,[e("code",{class:"html"},`<template>
    <div>
        <ve-table :columns="columns" :table-data="tableData" />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        field: "",
                        key: "a",
                        title: "",
                        width: 50,
                        align: "center",
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return ++rowIndex;
                        },
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
`)],-1);function x(a,d,n,i,o,r){const s=l("anchor"),c=l("element-demo0"),u=l("demo-block");return y(),b("section",A,[t(s,{"is-edit":"",label:"基础功能",fileName:"base.md"}),t(u,null,{source:m(()=>[t(c)]),highlight:m(()=>[$]),default:m(()=>[B]),_:1})])}const K=h(N,[["render",x]]),D={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:a,createVNode:d,openBlock:n,createElementBlock:i}=_;return function(r,s){const c=a("ve-table");return n(),i("div",null,[d(c,{columns:r.columns,"table-data":r.tableData},null,8,["columns","table-data"])])}}(),...function(){return{data(){return{columns:[{field:"",key:"a",title:"Ranking",width:50,align:"center",renderBodyCell:({row:a,column:d,rowIndex:n},i)=>{let o;return n===0?o="#ffcc00":n===1?o="#d9d9d9":n===2&&(o="#ad6800"),o?t("i",{style:{color:o},class:"iconfont icon-jiangpai"},null):++n}},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},F={class:"content example-md-doc"},E=e("pre",null,[e("code",{class:"html"},`<template>
    <div>
        <ve-table :columns="columns" :table-data="tableData" />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        field: "",
                        key: "a",
                        title: "Ranking",
                        width: 50,
                        align: "center",
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            let color;

                            if (rowIndex === 0) {
                                color = "#ffcc00";
                            } else if (rowIndex === 1) {
                                color = "#d9d9d9";
                            } else if (rowIndex === 2) {
                                color = "#ad6800";
                            }

                            if (color) {
                                const props = {
                                    style: { color: color },
                                    class: "iconfont icon-jiangpai",
                                };
                                return <i {...props} />;
                            }
                            return ++rowIndex;
                        },
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
`)],-1);function V(a,d,n,i,o,r){const s=l("anchor"),c=l("element-demo0"),u=l("demo-block");return y(),b("section",F,[t(s,{"is-edit":"",label:"排名场景",fileName:"ranking.md"}),t(u,null,{source:m(()=>[t(c)]),highlight:m(()=>[E]),_:1})])}const J=h(D,[["render",V]]),S={name:"BasicMain",components:{Explain:C,Base:K,Ranking:J}},j=e("h2",null,"行序号",-1);function z(a,d,n,i,o,r){const s=l("Explain"),c=l("Base"),u=l("Ranking");return y(),b("div",null,[j,t(s),t(c),t(u)])}const q=h(S,[["render",z]]);export{q as default};
