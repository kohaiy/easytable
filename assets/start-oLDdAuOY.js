import{V as h}from"./vue.runtime.esm-bundler-20duM4zf.js";import{_ as b,r as a,o as g,c as y,a as t,w as l,m as e,p as i}from"./index-xJshVBOS.js";const F={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:s,openBlock:o,createBlock:d}=h;return function(u,r){const n=s("ve-table");return o(),d(n,{columns:u.columns,"table-data":u.tableData},null,8,["columns","table-data"])}}(),...function(){return{data(){return{columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"right"},{field:"address",key:"d",title:"Address"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},_={class:"content example-md-doc"},v=e("h2",null,"快速开始",-1),E=e("pre",null,[e("code",{class:"language-bash"},`npm install @easytable/vue
`)],-1),C=e("p",null,"或者",-1),f=e("pre",null,[e("code",{class:"language-bash"},`pnpm add @easytable/vue
`)],-1),A=e("p",null,"或者",-1),B=e("pre",null,[e("code",{class:"language-bash"},`yarn add @easytable/vue
`)],-1),k=e("h4",null,"完整引入",-1),V=e("p",null,"在 main.js 中写入以下内容：",-1),N=e("pre",null,[e("code",{class:"language-javascript"},`import { createApp } from "vue";
// 引入样式
import "@easytable/vue/libs/theme-default/index.css";
// 引入组件库
import { useVeTable } from "@easytable/vue";

createApp({
  render: (h) => h(App),
})
.use(useVeTable())
.mount('#app')
`)],-1),D=e("p",null,"以上代码便完成了 @easytable/vue 的引入。别忘了引入样式文件。",-1),j=e("h4",null,"按需引入",-1),x=e("p",null,"在 main.js 中写入以下内容：",-1),L=e("pre",null,[e("code",{class:"language-javascript"},`import { createApp } from "vue";
// 引入样式
import "@easytable/vue/libs/theme-default/index.css";
// 引入组件库
import { VeTable, VePagination, VeIcon, VeLoading, VeLocale } from "@easytable/vue";

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
`)],-1),T=e("h4",null,"示例",-1),J=e("pre",null,[e("code",{class:"html"},`<template>
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
`)],-1),S=e("p",null,[i("通过 "),e("a",{href:"https://unpkg.com/@easytable/vue/"},"https://unpkg.com/@easytable/vue/"),i(" 可以看到 @easytable/vue 最新版本的资源，也可以切换版本选择需要的资源，在页面上引入 js 和 css 文件即可开始使用：")],-1),$=e("pre",null,[e("code",{class:"language-html"},`<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/@easytable/vue/libs/theme-default/index.css">
<!-- 引入Vue -->
<script src="https://cdn.jsdelivr.net/npm/vue@3"><\/script>
<!-- 引入组件库 -->
<script src="https://unpkg.com/@easytable/vue/libs/umd/index.js"><\/script>
`)],-1),q=e("h4",null,"示例",-1),w=e("pre",null,[e("code",{class:"language-html"},`<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <!-- 引入样式 -->
        <link
            rel="stylesheet"
            href="https://unpkg.com/@easytable/vue/libs/theme-default/index.css"
        />
    </head>
    <body>
        <div id="app">
            <ve-table :columns="columns" :table-data="tableData"></ve-table>
        </div>
    </body>
    <!-- 引入 Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue@3"><\/script>
    <!-- 引入组件库 -->
    <script src="https://unpkg.com/@easytable/vue/libs/umd/easytable-vue.js"><\/script>
    <script>
        const { createApp } = Vue
        const { useVeTable } = EasytableVue

        createApp({
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
        })
        .use(useVeTable())
        .mount("#app");
    <\/script>
</html>
`)],-1),z=e("p",null,"默认支持现代浏览器和 IE11 及以上",-1);function G(s,o,d,c,u,r){const n=a("anchor"),p=a("element-demo0"),m=a("demo-block");return g(),y("section",_,[v,t(n,{"is-edit":"",label:"npm & yarn 安装",fileName:"start.md"}),E,C,f,A,B,t(n,{"is-edit":"",label:"使用",fileName:"start.md"}),k,V,N,D,j,x,L,T,t(m,null,{source:l(()=>[t(p)]),highlight:l(()=>[J]),_:1}),t(n,{"is-edit":"",label:"CDN 方式使用",fileName:"start.md"}),S,$,q,w,t(n,{"is-edit":"",label:"浏览器兼容",fileName:"start.md"}),z])}const P=b(F,[["render",G]]);export{P as default};
