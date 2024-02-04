import{_ as b,o as p,c as _,h as e,i as s,r as t,a as o,w as u}from"./index-ktVylMVm.js";import{V as y}from"./vue.runtime.esm-bundler-oE0CmIyJ.js";const C={},f={class:"content example-md-doc"},v=e("div",{class:"tip"},[e("p",null,[s("1、表格宽度可以设置固定值。如："),e("code",null,'style="width:900px;"'),e("br"),s(" 2、表格宽度可以设置动态值。如："),e("code",null,'style="width:calc(100vh - 210px)"'),s(" 或者 "),e("code",null,'style="width:80%"'),e("br")])],-1),A=[v];function k(d,c){return p(),_("section",f,A)}const N=b(C,[["render",k]]),w={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:d,openBlock:c,createBlock:i}=y;return function(a,h){const n=d("ve-table");return c(),i(n,{columns:a.columns,"table-data":a.tableData},null,8,["columns","table-data"])}}(),...function(){return{data(){return{columns:[{field:"name",key:"a",title:"Name",width:100},{field:"date",key:"b",title:"Tel",width:200},{field:"hobby",key:"c",title:"Hobby",width:300},{field:"address",key:"d",title:"Address",width:300}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},D={class:"content example-md-doc"},E=e("div",null,[e("p",null,[s("如果不设置表格宽度，等同于"),e("code",null,'style="width:100%;"')])],-1),$=e("pre",null,[e("code",{class:"html"},`<template>
    <ve-table :columns="columns" :table-data="tableData" />
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    { field: "name", key: "a", title: "Name", width: 100 },
                    { field: "date", key: "b", title: "Tel", width: 200 },
                    { field: "hobby", key: "c", title: "Hobby", width: 300 },
                    { field: "address", key: "d", title: "Address", width: 300 },
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
`)],-1);function F(d,c,i,m,a,h){const n=t("anchor"),l=t("element-demo0"),r=t("demo-block");return p(),_("section",D,[o(n,{"is-edit":"",label:"表格自动宽度",fileName:"auto-width.md"}),o(r,null,{source:u(()=>[o(l)]),highlight:u(()=>[$]),default:u(()=>[E]),_:1})])}const x=b(w,[["render",F]]),S={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:d,openBlock:c,createBlock:i}=y;return function(a,h){const n=d("ve-table");return c(),i(n,{style:{width:"900px"},columns:a.columns,"table-data":a.tableData},null,8,["columns","table-data"])}}(),...function(){return{data(){return{columns:[{field:"name",key:"a",title:"Name",width:100},{field:"date",key:"b",title:"Tel",width:200},{field:"hobby",key:"c",title:"Hobby",width:300},{field:"address",key:"d",title:"Address",width:300}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},J={class:"content example-md-doc"},W=e("div",null,[e("p",null,[s("表格的固定宽度，需要设置外层容器宽度。可以通过"),e("code",null,'style="width:900px"'),s("方式设置。此处容器宽度为 900px")])],-1),z=e("pre",null,[e("code",{class:"html"},`<template>
    <ve-table style="width:900px;" :columns="columns" :table-data="tableData" />
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    { field: "name", key: "a", title: "Name", width: 100 },
                    { field: "date", key: "b", title: "Tel", width: 200 },
                    { field: "hobby", key: "c", title: "Hobby", width: 300 },
                    { field: "address", key: "d", title: "Address", width: 300 },
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
`)],-1);function T(d,c,i,m,a,h){const n=t("anchor"),l=t("element-demo0"),r=t("demo-block");return p(),_("section",J,[o(n,{"is-edit":"",label:"表格宽度固定",fileName:"fixed-width.md"}),o(r,null,{source:u(()=>[o(l)]),highlight:u(()=>[z]),default:u(()=>[W]),_:1})])}const j=b(S,[["render",T]]),q={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:d,openBlock:c,createBlock:i}=y;return function(a,h){const n=d("ve-table");return c(),i(n,{style:{width:"calc(55vw - 10px)"},columns:a.columns,"table-data":a.tableData},null,8,["columns","table-data"])}}(),...function(){return{data(){return{columns:[{field:"name",key:"a",title:"Name",width:100},{field:"date",key:"b",title:"Tel",width:200},{field:"hobby",key:"c",title:"Hobby",width:300},{field:"address",key:"d",title:"Address",width:300}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},G={class:"content example-md-doc"},H=e("div",null,[e("p",null,[s("1、你可以使用 "),e("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/calc()"},"calc css 函数"),s(" 实现表格动态宽度"),e("br"),s("2、试试改变浏览器宽度查看效果")])],-1),L=e("pre",null,[e("code",{class:"html"},`<template>
    <ve-table style="width:calc(55vw - 10px);" :columns="columns" :table-data="tableData" />
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    { field: "name", key: "a", title: "Name", width: 100 },
                    { field: "date", key: "b", title: "Tel", width: 200 },
                    { field: "hobby", key: "c", title: "Hobby", width: 300 },
                    { field: "address", key: "d", title: "Address", width: 300 },
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
`)],-1);function X(d,c,i,m,a,h){const n=t("anchor"),l=t("element-demo0"),r=t("demo-block");return p(),_("section",G,[o(n,{"is-edit":"",label:"表格动态宽度（calc css 函数）",fileName:"calc-width.md"}),o(r,null,{source:u(()=>[o(l)]),highlight:u(()=>[L]),default:u(()=>[H]),_:1})])}const V=b(q,[["render",X]]),P={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:d,openBlock:c,createBlock:i}=y;return function(a,h){const n=d("ve-table");return c(),i(n,{style:{width:"80%"},columns:a.columns,"table-data":a.tableData},null,8,["columns","table-data"])}}(),...function(){return{data(){return{columns:[{field:"name",key:"a",title:"Name",width:100},{field:"date",key:"b",title:"Tel",width:200},{field:"hobby",key:"c",title:"Hobby",width:300},{field:"address",key:"d",title:"Address",width:300}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},M={class:"content example-md-doc"},U=e("div",null,[e("p",null,[s("1、你可以使用百分比实现表格动态宽度"),e("br"),s("2、试试改变浏览器宽度查看效果")])],-1),I=e("pre",null,[e("code",{class:"html"},`<template>
    <ve-table style="width:80%" :columns="columns" :table-data="tableData" />
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    { field: "name", key: "a", title: "Name", width: 100 },
                    { field: "date", key: "b", title: "Tel", width: 200 },
                    { field: "hobby", key: "c", title: "Hobby", width: 300 },
                    { field: "address", key: "d", title: "Address", width: 300 },
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
`)],-1);function K(d,c,i,m,a,h){const n=t("anchor"),l=t("element-demo0"),r=t("demo-block");return p(),_("section",M,[o(n,{"is-edit":"",label:"表格动态宽度（百分比）",fileName:"percent-width.md"}),o(r,null,{source:u(()=>[o(l)]),highlight:u(()=>[I]),default:u(()=>[U]),_:1})])}const O=b(P,[["render",K]]),Q={name:"BasicMain",components:{Explain:N,AutoWidth:x,FixedWidth:j,CalcWidth:V,PercentWidth:O}},R=e("h2",null,"表格宽度",-1);function Y(d,c,i,m,a,h){const n=t("Explain"),l=t("AutoWidth"),r=t("FixedWidth"),g=t("CalcWidth"),B=t("PercentWidth");return p(),_("div",null,[R,o(n),o(l),o(r),o(g),o(B)])}const ne=b(Q,[["render",Y]]);export{ne as default};
