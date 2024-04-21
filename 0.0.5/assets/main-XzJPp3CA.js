import{_ as b,o as g,c as h,m as o,p as y,r as n,a as t,w as s}from"./index-kkwE-wMw.js";import{V as p}from"./vue.runtime.esm-bundler-jTagk_49.js";const N={},B={class:"content example-md-doc"},$=o("div",{class:"tip"},[o("p",null,[y("1、通过"),o("code",null,"border-around=true"),y(" 设置外边框"),o("br"),y(" 2、通过"),o("code",null,"border-x=true"),y(" 设置横向边框"),o("br"),y(" 3、通过"),o("code",null,"border-y=true"),y(" 设置纵向边框")])],-1),D=[$];function x(d,r){return g(),h("section",B,D)}const J=b(N,[["render",x]]),S={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:d,openBlock:r,createBlock:c}=p;return function(a,m){const e=d("ve-table");return r(),c(e,{columns:a.columns,"table-data":a.tableData},null,8,["columns","table-data"])}}(),...function(){return{data(){return{columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"right"},{field:"address",key:"d",title:"Address"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},X={class:"content example-md-doc"},j=o("div",null,[o("p",null,"默认外边框和横向边框")],-1),q=o("pre",null,[o("code",{class:"html"},`<template>
    <ve-table :columns="columns" :table-data="tableData" />
</template>

<script>
    export default {
        data() {
            return {
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
    };
<\/script>
`)],-1);function z(d,r,c,u,a,m){const e=n("anchor"),i=n("element-demo0"),l=n("demo-block");return g(),h("section",X,[t(e,{"is-edit":"",label:"默认",fileName:"default.md"}),t(l,null,{source:s(()=>[t(i)]),highlight:s(()=>[q]),default:s(()=>[j]),_:1})])}const G=b(S,[["render",z]]),H={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:d,openBlock:r,createBlock:c}=p;return function(a,m){const e=d("ve-table");return r(),c(e,{columns:a.columns,"table-data":a.tableData,"border-around":!1,"border-x":!0,"border-y":!1},null,8,["columns","table-data"])}}(),...function(){return{data(){return{columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"right"},{field:"address",key:"d",title:"Address"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},L={class:"content example-md-doc"},F=o("pre",null,[o("code",{class:"html"},`<template>
    <ve-table
        :columns="columns"
        :table-data="tableData"
        :border-around="false"
        :border-x="true"
        :border-y="false"
    />
</template>

<script>
    export default {
        data() {
            return {
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
    };
<\/script>
`)],-1);function E(d,r,c,u,a,m){const e=n("anchor"),i=n("element-demo0"),l=n("demo-block");return g(),h("section",L,[t(e,{"is-edit":"",label:"横向边框",fileName:"border-x.md"}),t(l,null,{source:s(()=>[t(i)]),highlight:s(()=>[F]),_:1})])}const Y=b(H,[["render",E]]),V={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:d,openBlock:r,createBlock:c}=p;return function(a,m){const e=d("ve-table");return r(),c(e,{columns:a.columns,"table-data":a.tableData,"border-around":!1,"border-x":!1,"border-y":!0},null,8,["columns","table-data"])}}(),...function(){return{data(){return{columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"right"},{field:"address",key:"d",title:"Address"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},R={class:"content example-md-doc"},w=o("pre",null,[o("code",{class:"html"},`<template>
    <ve-table
        :columns="columns"
        :table-data="tableData"
        :border-around="false"
        :border-x="false"
        :border-y="true"
    />
</template>

<script>
    export default {
        data() {
            return {
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
    };
<\/script>
`)],-1);function T(d,r,c,u,a,m){const e=n("anchor"),i=n("element-demo0"),l=n("demo-block");return g(),h("section",R,[t(e,{"is-edit":"",label:"纵向边框",fileName:"border-y.md"}),t(l,null,{source:s(()=>[t(i)]),highlight:s(()=>[w]),_:1})])}const I=b(V,[["render",T]]),K={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:d,openBlock:r,createBlock:c}=p;return function(a,m){const e=d("ve-table");return r(),c(e,{columns:a.columns,"table-data":a.tableData,"border-around":!0,"border-x":!1,"border-y":!1},null,8,["columns","table-data"])}}(),...function(){return{data(){return{columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"right"},{field:"address",key:"d",title:"Address"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},M={class:"content example-md-doc"},O=o("pre",null,[o("code",{class:"html"},`<template>
    <ve-table
        :columns="columns"
        :table-data="tableData"
        :border-around="true"
        :border-x="false"
        :border-y="false"
    />
</template>

<script>
    export default {
        data() {
            return {
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
    };
<\/script>
`)],-1);function P(d,r,c,u,a,m){const e=n("anchor"),i=n("element-demo0"),l=n("demo-block");return g(),h("section",M,[t(e,{"is-edit":"",label:"外边框",fileName:"border-around.md"}),t(l,null,{source:s(()=>[t(i)]),highlight:s(()=>[O]),_:1})])}const Q=b(K,[["render",P]]),U={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:d,openBlock:r,createBlock:c}=p;return function(a,m){const e=d("ve-table");return r(),c(e,{columns:a.columns,"table-data":a.tableData,"border-x":!0,"border-y":!0},null,8,["columns","table-data"])}}(),...function(){return{data(){return{columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"right"},{field:"address",key:"d",title:"Address"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},W={class:"content example-md-doc"},Z=o("pre",null,[o("code",{class:"html"},`<template>
    <ve-table :columns="columns" :table-data="tableData" :border-x="true" :border-y="true" />
</template>

<script>
    export default {
        data() {
            return {
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
    };
<\/script>
`)],-1);function ee(d,r,c,u,a,m){const e=n("anchor"),i=n("element-demo0"),l=n("demo-block");return g(),h("section",W,[t(e,{"is-edit":"",label:"全边框",fileName:"border-all.md"}),t(l,null,{source:s(()=>[t(i)]),highlight:s(()=>[Z]),_:1})])}const ne=b(U,[["render",ee]]),te={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:d,openBlock:r,createBlock:c}=p;return function(a,m){const e=d("ve-table");return r(),c(e,{columns:a.columns,"table-data":a.tableData,"border-around":!0,"border-x":!0,"border-y":!1},null,8,["columns","table-data"])}}(),...function(){return{data(){return{columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"right"},{field:"address",key:"d",title:"Address"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},ae={class:"content example-md-doc"},oe=o("pre",null,[o("code",{class:"html"},`<template>
    <ve-table
        :columns="columns"
        :table-data="tableData"
        :border-around="true"
        :border-x="true"
        :border-y="false"
    />
</template>

<script>
    export default {
        data() {
            return {
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
    };
<\/script>
`)],-1);function de(d,r,c,u,a,m){const e=n("anchor"),i=n("element-demo0"),l=n("demo-block");return g(),h("section",ae,[t(e,{"is-edit":"",label:"外边框+横向边框",fileName:"around-x.md"}),t(l,null,{source:s(()=>[t(i)]),highlight:s(()=>[oe]),_:1})])}const re=b(te,[["render",de]]),ce={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:d,openBlock:r,createBlock:c}=p;return function(a,m){const e=d("ve-table");return r(),c(e,{columns:a.columns,"table-data":a.tableData,"border-around":!0,"border-x":!1,"border-y":!0},null,8,["columns","table-data"])}}(),...function(){return{data(){return{columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"right"},{field:"address",key:"d",title:"Address"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},ie={class:"content example-md-doc"},le=o("pre",null,[o("code",{class:"html"},`<template>
    <ve-table
        :columns="columns"
        :table-data="tableData"
        :border-around="true"
        :border-x="false"
        :border-y="true"
    />
</template>

<script>
    export default {
        data() {
            return {
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
    };
<\/script>
`)],-1);function se(d,r,c,u,a,m){const e=n("anchor"),i=n("element-demo0"),l=n("demo-block");return g(),h("section",ie,[t(e,{"is-edit":"",label:"外边框+纵向边框",fileName:"around-y.md"}),t(l,null,{source:s(()=>[t(i)]),highlight:s(()=>[le]),_:1})])}const ue=b(ce,[["render",se]]),me={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:d,openBlock:r,createBlock:c}=p;return function(a,m){const e=d("ve-table");return r(),c(e,{style:{"border-radius":"10px"},columns:a.columns,"table-data":a.tableData},null,8,["columns","table-data"])}}(),...function(){return{data(){return{columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"right"},{field:"address",key:"d",title:"Address"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},be={class:"content example-md-doc"},ge=o("pre",null,[o("code",{class:"html"},`<template>
    <ve-table style="border-radius:10px;" :columns="columns" :table-data="tableData" />
</template>

<script>
    export default {
        data() {
            return {
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
    };
<\/script>
`)],-1);function he(d,r,c,u,a,m){const e=n("anchor"),i=n("element-demo0"),l=n("demo-block");return g(),h("section",be,[t(e,{"is-edit":"",label:"边框圆角",fileName:"border-radius.md"}),t(l,null,{source:s(()=>[t(i)]),highlight:s(()=>[ge]),_:1})])}const pe=b(me,[["render",he]]),ye={name:"Border",components:{Explain:J,DefaultBorder:G,BorderX:Y,BorderY:I,BorderAround:Q,BorderAll:ne,AroundX:re,AroundY:ue,BorderRadius:pe}},_e=o("h2",null,"边框",-1);function fe(d,r,c,u,a,m){const e=n("Explain"),i=n("DefaultBorder"),l=n("BorderX"),_=n("BorderY"),f=n("BorderAround"),v=n("BorderAll"),k=n("AroundX"),A=n("AroundY"),C=n("BorderRadius");return g(),h("div",null,[_e,t(e),t(i),t(l),t(_),t(f),t(v),t(k),t(A),t(C)])}const Ae=b(ye,[["render",fe]]);export{Ae as default};
