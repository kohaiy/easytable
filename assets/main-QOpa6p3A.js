import{_,r as o,o as p,c as h,a as t,m as n,ad as E,ae as L,w as v,p as g,g as C}from"./index-lRrbso5P.js";import{V as f}from"./vue.runtime.esm-bundler-PK1gl5UO.js";const B={},N={class:"content example-md-doc"},V=n("pre",null,[n("code",{class:"language-javascript"},`import { createApp } from "vue";
import { useVeTable } from "@easytable/vue";
// 引入英文语言包
import enUS from "vue-easytable/libs/locale/lang/en-US";

createApp(App).use(useVeTable({
    locale: enUS
}))
`)],-1),k=n("p",null,"使用 useVeTable 会自动将 veLocale 组件挂载到 Vue 的 prototype 原型上，便于全局调用",-1),F=n("pre",null,[n("code",{class:"language-javascript"},`import enUS from "vue-easytable/libs/locale/lang/en-US";
this.$veLocale.use(enUS);
`)],-1);function x(e,u){const c=o("anchor");return p(),h("section",N,[t(c,{"is-edit":"",label:"使用方法",fileName:"usage.md"}),V,t(c,{"is-edit":"",label:"全局使用",fileName:"usage.md"}),k,F])}const A=_(B,[["render",x]]),S={name:"component-doc",components:{"element-demo0":{render:function(){const{createElementVNode:e,resolveComponent:u,createVNode:c,openBlock:r,createElementBlock:d}=f,m=e("br",null,null,-1),l=e("br",null,null,-1);return function(a,s){const b=u("ve-pagination");return r(),d("div",null,[e("div",null,[e("button",{class:"button-demo",onClick:s[0]||(s[0]=$=>a.englishLang())},"英文"),e("button",{class:"button-demo",onClick:s[1]||(s[1]=$=>a.chineseLang())},"中文"),m,l]),e("div",null,[c(b,{total:600})])])}}(),...function(){return{methods:{englishLang(){this.$veLocale.use(E)},chineseLang(){this.$veLocale.use(L)}}}}()}}},U={class:"content example-md-doc"},D=n("p",null,[g("你可以通过 VeLocal 组件实现多语言支持，使用 "),n("code",null,"VeLocal.use"),g(" 方法可以切换当前使用的语言")],-1),y=n("pre",null,[n("code",{class:"html"},`<template>
    <div>
        <div>
            <button class="button-demo" @click="englishLang()">英文</button>
            <button class="button-demo" @click="chineseLang()">中文</button>
            <br />
            <br />
        </div>
        <div>
            <ve-pagination :total="600" />
        </div>
    </div>
</template>
<script>
    import zhCN from "@easytable/vue/libs/locale/lang/zh-CN";
    import enUS from "@easytable/vue/libs/locale/lang/en-US";

    export default {
        methods: {
            englishLang() {
                this.$veLocale.use(enUS);
            },
            chineseLang() {
                this.$veLocale.use(zhCN);
            },
        },
    };
<\/script>
`)],-1);function w(e,u,c,r,d,m){const l=o("anchor"),i=o("element-demo0"),a=o("demo-block");return p(),h("section",U,[t(l,{"is-edit":"",label:"语言切换",fileName:"switch-lang.md"}),D,t(a,null,{source:v(()=>[t(i)]),highlight:v(()=>[y]),_:1})])}const z=_(S,[["render",w]]),T={name:"component-doc",components:{"element-demo0":{render:function(){const{createElementVNode:e,resolveComponent:u,createVNode:c,openBlock:r,createElementBlock:d}=f,m=e("br",null,null,-1),l=e("br",null,null,-1);return function(a,s){const b=u("ve-pagination");return r(),d("div",null,[e("div",null,[e("button",{class:"button-demo",onClick:s[0]||(s[0]=$=>a.coverLang())},"修改文案"),m,l]),e("div",null,[c(b,{total:600})])])}}(),...function(){return{methods:{coverLang(){const e={pagination:{goto:"跳转到"}};this.$veLocale.update(e)}}}}()}}},j={class:"content example-md-doc"},I=n("p",null,[g("通过 "),n("code",null,"VeLocale.update"),g(" 方法可以实现文案的修改和扩展")],-1),P=n("pre",null,[n("code",{class:"html"},`<template>
    <div>
        <div>
            <button class="button-demo" @click="coverLang()">修改文案</button>
            <br />
            <br />
        </div>
        <div>
            <ve-pagination :total="600" />
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            coverLang() {
                const lang = {
                    pagination: {
                        goto: "跳转到",
                    },
                };
                this.$veLocale.update(lang);
            },
        },
    };
<\/script>
`)],-1);function q(e,u,c,r,d,m){const l=o("anchor"),i=o("element-demo0"),a=o("demo-block");return p(),h("section",j,[t(l,{"is-edit":"",label:"覆盖语言包",fileName:"cover-lang.md"}),I,t(a,null,{source:v(()=>[t(i)]),highlight:v(()=>[P]),_:1})])}const G=_(T,[["render",q]]),H={},J={class:"content example-md-doc"},K=C('<h3>methods</h3><table class="example-table"><thead><tr><th>方法名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>use</td><td>使用语言包</td><td>语言包</td></tr><tr><td>update</td><td>修改或者扩展语言包</td><td>语言包</td></tr></tbody></table>',2);function M(e,u){const c=o("anchor");return p(),h("section",J,[t(c,{"is-edit":"",label:"API",fileName:"api.md"}),K])}const O=_(H,[["render",M]]),Q={components:{Usage:A,SwitchLang:z,CoverLang:G,Api:O}},R=n("h2",null,"locale 国际化",-1);function W(e,u,c,r,d,m){const l=o("Usage"),i=o("SwitchLang"),a=o("CoverLang"),s=o("Api");return p(),h("div",null,[R,t(l),t(i),t(a),t(s)])}const Z=_(Q,[["render",W]]);export{Z as default};
