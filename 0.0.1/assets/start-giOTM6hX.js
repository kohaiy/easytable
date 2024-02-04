import{V as h}from"./vue.runtime.esm-bundler-WXcYj9kA.js";import{_ as b,r as a,o as g,c as y,a as t,w as l,h as e,i}from"./index-N-xeINNQ.js";const F={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:o,openBlock:s,createBlock:d}=h;return function(u,r){const n=o("ve-table");return s(),d(n,{columns:u.columns,"table-data":u.tableData},null,8,["columns","table-data"])}}(),...function(){return{data(){return{columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"right"},{field:"address",key:"d",title:"Address"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},_={class:"content example-md-doc"},E=e("h2",null,"快速开始",-1),v=e("pre",null,[e("code",{class:"language-bash"},`npm install vue-easytable
`)],-1),C=e("p",null,"或者",-1),f=e("pre",null,[e("code",{class:"language-bash"},`yarn add vue-easytable
`)],-1),B=e("h4",null,"完整引入",-1),V=e("p",null,"在 main.js 中写入以下内容：",-1),k=e("pre",null,[e("code",{class:"language-javascript"},`import Vue from "vue";
// 引入样式
import "vue-easytable/libs/theme-default/index.css";
// 引入组件库
import VueEasytable from "vue-easytable";

Vue.use(VueEasytable);

new Vue({
    el: "#app",
    render: (h) => h(App),
});
`)],-1),A=e("p",null,"以上代码便完成了 vue-easytable 的引入。别忘了引入样式文件。",-1),N=e("h4",null,"按需引入",-1),D=e("p",null,"在 main.js 中写入以下内容：",-1),j=e("pre",null,[e("code",{class:"language-javascript"},`import Vue from "vue";
// 引入样式
import "vue-easytable/libs/theme-default/index.css";
// 引入组件库
import { VeTable, VePagination, VeIcon, VeLoading, VeLocale } from "vue-easytable";

Vue.use(VeTable);
Vue.use(VePagination);
Vue.use(VeIcon);
Vue.use(VeLoading);

Vue.prototype.$veLoading = VeLoading;
Vue.prototype.$veLocale = VeLocale;

new Vue({
    el: "#app",
    render: (h) => h(App),
});
`)],-1),x=e("h4",null,"示例",-1),L=e("pre",null,[e("code",{class:"html"},`<template>
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
                    {
                        field: "address",
                        key: "d",
                        title: "Address",
                    },
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
`)],-1),J=e("p",null,[i("通过 "),e("a",{href:"https://unpkg.com/vue-easytable/"},"https://unpkg.com/vue-easytable/"),i(" 可以看到 vue-easytable 最新版本的资源，也可以切换版本选择需要的资源，在页面上引入 js 和 css 文件即可开始使用：")],-1),S=e("pre",null,[e("code",{class:"language-html"},`<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/vue-easytable/libs/theme-default/index.css">
<!-- 引入Vue -->
<script src="https://cdn.jsdelivr.net/npm/vue@2"><\/script>
<!-- 引入组件库 -->
<script src="https://unpkg.com/vue-easytable/libs/umd/index.js"><\/script>
`)],-1),$=e("h4",null,"示例",-1),w=e("pre",null,[e("code",{class:"language-html"},`<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <!-- 引入样式 -->
        <link
            rel="stylesheet"
            href="https://unpkg.com/vue-easytable/libs/theme-default/index.css"
        />
    </head>
    <body>
        <div id="app">
            <ve-table :columns="columns" :table-data="tableData"></ve-table>
        </div>
    </body>
    <!-- 引入 Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2"><\/script>
    <!-- 引入组件库 -->
    <script src="https://unpkg.com/vue-easytable/libs/umd/index.js"><\/script>
    <script>
        new Vue({
            el: "#app",
            data: function () {
                return {
                    columns: [
                        {
                            field: "name",
                            key: "a",
                            title: "Name",
                            align: "center",
                        },
                        {
                            field: "date",
                            key: "b",
                            title: "Date",
                            align: "left",
                        },
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
        });
    <\/script>
</html>
`)],-1),T=e("p",null,"默认支持现代浏览器和 IE10 及以上",-1);function q(o,s,d,c,u,r){const n=a("anchor"),m=a("element-demo0"),p=a("demo-block");return g(),y("section",_,[E,t(n,{"is-edit":"",label:"npm & yarn 安装",fileName:"start.md"}),v,C,f,t(n,{"is-edit":"",label:"使用",fileName:"start.md"}),B,V,k,A,N,D,j,x,t(p,null,{source:l(()=>[t(m)]),highlight:l(()=>[L]),_:1}),t(n,{"is-edit":"",label:"CDN 方式使用",fileName:"start.md"}),J,S,$,w,t(n,{"is-edit":"",label:"浏览器兼容",fileName:"start.md"}),T])}const H=b(F,[["render",q]]);export{H as default};
