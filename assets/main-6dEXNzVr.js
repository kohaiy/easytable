import{_ as b,r as l,o as h,c as _,a as o,m as n,w as r,p as t,d as y,e as B,q as F,t as k,F as E,g as A,b as f}from"./index-OafSkC6h.js";import{V as v}from"./vue.runtime.esm-bundler-Y-OwEadg.js";const w={},N={class:"content example-md-doc"},L=n("p",null,"在你需要的地方引用",-1),I=n("pre",null,[n("code",{class:"language-javascript"},`import Vue from "vue";
import { veLoading } from "vue-easytable";
`)],-1),D=n("p",null,"调用",-1),S=n("pre",null,[n("code",{class:"language-javascript"},`veLoading({
    target: "#loading-1",
    name: "grid",
    tip: "loading...",
});
`)],-1),x=n("p",null,"将 veLoading 组件挂载到 Vue 的 prototype 原型上，便于全局调用",-1),V=n("pre",null,[n("code",{class:"language-javascript"},`import Vue from "vue";
import { veLoading } from "vue-easytable";

Vue.prototype.$veLoading = veLoading;
`)],-1),q=n("p",null,"调用",-1),j=n("pre",null,[n("code",{class:"language-javascript"},`this.$veLoading({
    target: "#loading-1",
    name: "grid",
    tip: "loading...",
});
`)],-1);function M(e,c){const d=l("anchor");return h(),_("section",N,[o(d,{"is-edit":"",label:"使用方法",fileName:"usage.md"}),L,I,D,S,o(d,{"is-edit":"",label:"全局使用",fileName:"usage.md"}),x,V,q,j])}const J=b(w,[["render",M]]),O={name:"component-doc",components:{"element-demo0":{render:function(){const{createElementVNode:e,resolveComponent:c,createVNode:d,openBlock:g,createElementBlock:m}=v,i=e("br",null,null,-1),u=e("br",null,null,-1);return function(a,p){const C=c("ve-table");return g(),m("div",null,[e("button",{class:"button-demo",onClick:p[0]||(p[0]=$=>a.show())},"开启 Loading"),e("button",{class:"button-demo",onClick:p[1]||(p[1]=$=>a.close())},"关闭 Loading"),i,u,d(C,{id:"loading-container",columns:a.columns,"table-data":a.tableData},null,8,["columns","table-data"])])}}(),...function(){return{data(){return{loadingInstance:null,columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"right"},{field:"address",key:"d",title:"Address"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{show(){this.loadingInstance.show()},close(){this.loadingInstance.close()}},mounted(){this.loadingInstance=this.$veLoading({target:document.querySelector("#loading-container"),name:"wave"}),this.show()},destroyed(){this.loadingInstance.destroy()}}}()}}},P={class:"content example-md-doc"},T=n("p",null,"在表格等容器中显示 Loading 效果",-1),z=n("div",null,[n("p",null,[t("1、通过 "),n("code",null,"target"),t(" 参数指定 Loading 的容器。"),n("code",null,"target"),t("为 DOM 对象或 字符串选择器（可以通过"),n("code",null,"document.querySelector"),t("获取的字符串）"),n("br"),t("2、"),n("code",null,"name"),t("参数指定加载效果类型名称"),n("br"),t("3、Loading 实例包含"),n("code",null,"show"),t("、"),n("code",null,"close"),t("、"),n("code",null,"destroy"),t("3 个方法")])],-1),G=n("pre",null,[n("code",{class:"html"},`<template>
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
`)],-1);function H(e,c,d,g,m,i){const u=l("anchor"),s=l("element-demo0"),a=l("demo-block");return h(),_("section",P,[o(u,{"is-edit":"",label:"区域加载",fileName:"container.md"}),T,o(a,null,{source:r(()=>[o(s)]),highlight:r(()=>[G]),default:r(()=>[z]),_:1})])}const X=b(O,[["render",H]]),U={name:"component-doc",components:{"element-demo0":{render:function(){const{createElementVNode:e,openBlock:c,createElementBlock:d}=v;return function(m,i){return c(),d("div",null,[e("button",{class:"button-demo",onClick:i[0]||(i[0]=u=>m.show())},"开启 Loading")])}}(),...function(){return{data(){return{loadingInstance:null}},methods:{show(){this.loadingInstance.show(),setTimeout(()=>{this.loadingInstance.close()},2e3)}},mounted(){this.loadingInstance=this.$veLoading({fullscreen:!0,name:"bounce",lock:!0})},destroyed(){this.loadingInstance.destroy()}}}()}}},K={class:"content example-md-doc"},Q=n("div",null,[n("p",null,[t("1、通过"),n("code",null,"fullscreen"),t("参数，指定 Loading 全屏展示"),n("br"),t("2、通过"),n("code",null,"lock"),t("参数，指定禁止鼠标滚动")])],-1),R=n("pre",null,[n("code",{class:"html"},`<template>
    <div>
        <button class="button-demo" @click="show()">开启 Loading</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                loadingInstance: null,
            };
        },
        methods: {
            show() {
                this.loadingInstance.show();

                setTimeout(() => {
                    this.loadingInstance.close();
                }, 2000);
            },
        },
        mounted() {
            this.loadingInstance = this.$veLoading({
                fullscreen: true,
                name: "bounce",
                lock: true,
            });
        },
        destroyed() {
            this.loadingInstance.destroy();
        },
    };
<\/script>
`)],-1);function W(e,c,d,g,m,i){const u=l("anchor"),s=l("element-demo0"),a=l("demo-block");return h(),_("section",K,[o(u,{"is-edit":"",label:"整屏加载",fileName:"fullscreen.md"}),o(a,null,{source:r(()=>[o(s)]),highlight:r(()=>[R]),default:r(()=>[Q]),_:1})])}const Y=b(U,[["render",W]]),Z={name:"component-doc",components:{"element-demo0":{render:function(){const{createElementVNode:e,openBlock:c,createElementBlock:d}=v,g=e("br",null,null,-1),m=e("br",null,null,-1),i=e("div",{id:"custom-loading-container",style:{width:"100%",height:"250px","background-color":"#2980b9"}},null,-1);return function(s,a){return c(),d("div",null,[e("button",{class:"button-demo",onClick:a[0]||(a[0]=p=>s.show())},"开启 Loading"),e("button",{class:"button-demo",onClick:a[1]||(a[1]=p=>s.close())},"关闭 Loading"),g,m,i])}}(),...function(){return{data(){return{loadingInstance:null}},methods:{show(){this.loadingInstance.show()},close(){this.loadingInstance.close()}},mounted(){this.loadingInstance=this.$veLoading({target:document.querySelector("#custom-loading-container"),name:"wave",color:"#fff",tip:"loading...",overlayBackgroundColor:"rgba(255, 255, 255, 0.1)"}),this.show()},destroyed(){this.loadingInstance.destroy()}}}()}}},nn={class:"content example-md-doc"},en=n("p",null,"你还可以自定义加载文案、背景色、大小",-1),tn=n("div",null,[n("p",null,[t("1、"),n("code",null,"color"),t(" 设置加载效果的颜色"),n("br"),t("2、"),n("code",null,"tip"),t("设置加载文案"),n("br"),t("2、"),n("code",null,"overlayBackgroundColor"),t("设置遮罩背景色，可以指定 "),n("a",{href:"https://www.w3schools.com/cssref/func_rgba.asp"},"rgba"),t("，让背景变得透明")])],-1),on=n("pre",null,[n("code",{class:"html"},`<template>
    <div>
        <button class="button-demo" @click="show()">开启 Loading</button>
        <button class="button-demo" @click="close()">关闭 Loading</button>
        <br />
        <br />
        <div
            id="custom-loading-container"
            style="width:100%;height:250px;background-color:#2980b9;"
        />
    </div>
</template>
<script>
    export default {
        data() {
            return {
                loadingInstance: null,
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
                target: document.querySelector("#custom-loading-container"),
                name: "wave",
                color: "#fff",
                tip: "loading...",
                overlayBackgroundColor: "rgba(255, 255, 255, 0.1)",
            });
            this.show();
        },
        destroyed() {
            this.loadingInstance.destroy();
        },
    };
<\/script>
`)],-1);function dn(e,c,d,g,m,i){const u=l("anchor"),s=l("element-demo0"),a=l("demo-block");return h(),_("section",nn,[o(u,{"is-edit":"",label:"自定义",fileName:"custom.md"}),en,o(a,null,{source:r(()=>[o(s)]),highlight:r(()=>[on]),default:r(()=>[tn]),_:1})])}const an=b(Z,[["render",dn]]),sn=y({data(){return{SPIN_NAMES:["plane","grid","wave","flow","bounce","pulse"]}},mounted(){this.SPIN_NAMES.forEach(e=>{this.$veLoading({target:`#loading-${e}`,name:e}).show()})}}),cn={class:"loading-container"},ln=["id"],un={class:"loading-name"};function rn(e,c,d,g,m,i){const u=l("anchor");return h(),B(u,{label:"loading 集合","is-edit":!1},{default:r(()=>[n("div",cn,[(h(!0),_(E,null,F(Object.values(e.SPIN_NAMES),s=>(h(),_("div",{key:s,class:"loading-item"},[n("div",{id:`loading-${s}`,class:"loading-item-spin"},null,8,ln),n("span",un,k(s),1)]))),128))])]),_:1})}const mn=b(sn,[["render",rn],["__scopeId","data-v-c4dfcd53"]]),hn={},gn={class:"content example-md-doc"},_n=A('<h3>props</h3><table class="example-table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>加载效果类型名称</td><td><code>String</code></td><td>见“Loading 集合”示例</td><td>&quot;plane&quot;</td></tr><tr><td>target</td><td>DOM 对象 或 可以通过 document.querySelector 获取的字符串</td><td><code>Object | String</code></td><td>-</td><td>-</td></tr><tr><td>fullscreen</td><td>是否全屏展示</td><td><code>Boolean</code></td><td>-</td><td>false</td></tr><tr><td>tip</td><td>加载文案</td><td><code>String</code></td><td>-</td><td>-</td></tr><tr><td>color</td><td>加载图标的颜色</td><td><code>String</code></td><td>-</td><td>&quot;#1890ff&quot;</td></tr><tr><td>overlayBackgroundColor</td><td>遮罩背景色</td><td><code>String</code></td><td>-</td><td>&quot;rgba(255, 255, 255, 0.5)&quot;</td></tr><tr><td>height</td><td>加载图标的高度</td><td><code>String | Number</code></td><td>-</td><td>40</td></tr><tr><td>width</td><td>加载图标的宽度</td><td><code>String | Number</code></td><td>-</td><td>40</td></tr></tbody></table><h3>methods</h3><table class="example-table"><thead><tr><th>方法名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>show</td><td>展示 Loading 效果</td><td>-</td></tr><tr><td>close</td><td>关闭 Loading 效果</td><td>-</td></tr><tr><td>destroy</td><td>默认关闭不会销毁，需要手动调用销毁 Loading</td><td>-</td></tr></tbody></table>',4);function pn(e,c){const d=l("anchor");return h(),_("section",gn,[o(d,{"is-edit":"",label:"API",fileName:"api.md"}),_n])}const bn=b(hn,[["render",pn]]),fn=n("h2",null,"Loading 加载",-1),Cn=y({__name:"main",setup(e){return(c,d)=>(h(),_("div",null,[fn,o(f(J)),o(f(X)),o(f(Y)),o(f(an)),o(mn),o(f(bn))]))}});export{Cn as default};
