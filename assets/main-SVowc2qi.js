import{_ as m,r as o,o as p,c as h,a as t,h as n,w as v,i as g,ac as L}from"./index-_KwaNkJD.js";import{V as $}from"./vue.runtime.esm-bundler-oYPn8qVD.js";const E={},C={class:"content example-md-doc"},V=n("pre",null,[n("code",{class:"language-javascript"},`import Vue from "vue";
import { VeLocale } from "vue-easytable";
// 引入英文语言包
import enUS from "vue-easytable/libs/locale/lang/en-US.js";

VeLocale.use(enUS);
`)],-1),B=n("p",null,"将 veLocale 组件挂载到 Vue 的 prototype 原型上，便于全局调用",-1),N=n("pre",null,[n("code",{class:"language-javascript"},`import Vue from "vue";
import { VeLocale } from "vue-easytable";

Vue.prototype.$veLocale = VeLocale;
`)],-1),k=n("p",null,"调用",-1),F=n("pre",null,[n("code",{class:"language-javascript"},`import enUS from "vue-easytable/libs/locale/lang/en-US.js";
this.$veLocale.use(enUS);
`)],-1);function x(e,u){const c=o("anchor");return p(),h("section",C,[t(c,{"is-edit":"",label:"使用方法",fileName:"usage.md"}),V,t(c,{"is-edit":"",label:"全局使用",fileName:"usage.md"}),B,N,k,F])}const S=m(E,[["render",x]]),U={name:"component-doc",components:{"element-demo0":{render:function(){const{createElementVNode:e,resolveComponent:u,createVNode:c,openBlock:r,createElementBlock:d}=$,_=e("br",null,null,-1),s=e("br",null,null,-1);return function(l,a){const b=u("ve-pagination");return r(),d("div",null,[e("div",null,[e("button",{class:"button-demo",onClick:a[0]||(a[0]=f=>l.englishLang())},"英文"),e("button",{class:"button-demo",onClick:a[1]||(a[1]=f=>l.chineseLang())},"中文"),_,s]),e("div",null,[c(b,{total:600})])])}}(),...function(){return{methods:{englishLang(){this.$veLocale.use(enUS)},chineseLang(){this.$veLocale.use(zhCN)}}}}()}}},D={class:"content example-md-doc"},A=n("p",null,[g("你可以通过 VeLocal 组件实现多语言支持，使用 "),n("code",null,"VeLocal.use"),g(" 方法可以切换当前使用的语言")],-1),y=n("pre",null,[n("code",{class:"html"},`<template>
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
    // TODO zhCN from "vue-easytable/libs/locale/lang/zh-CN";
    // TODO enUS from "vue-easytable/libs/locale/lang/en-US";

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
`)],-1);function w(e,u,c,r,d,_){const s=o("anchor"),i=o("element-demo0"),l=o("demo-block");return p(),h("section",D,[t(s,{"is-edit":"",label:"语言切换",fileName:"switch-lang.md"}),A,t(l,null,{source:v(()=>[t(i)]),highlight:v(()=>[y]),_:1})])}const j=m(U,[["render",w]]),z={name:"component-doc",components:{"element-demo0":{render:function(){const{createElementVNode:e,resolveComponent:u,createVNode:c,openBlock:r,createElementBlock:d}=$,_=e("br",null,null,-1),s=e("br",null,null,-1);return function(l,a){const b=u("ve-pagination");return r(),d("div",null,[e("div",null,[e("button",{class:"button-demo",onClick:a[0]||(a[0]=f=>l.coverLang())},"修改文案"),_,s]),e("div",null,[c(b,{total:600})])])}}(),...function(){return{methods:{coverLang(){const e={pagination:{goto:"跳转到"}};this.$veLocale.update(e)}}}}()}}},O={class:"content example-md-doc"},T=n("p",null,[g("通过 "),n("code",null,"VeLocale.update"),g(" 方法可以实现文案的修改和扩展")],-1),I=n("pre",null,[n("code",{class:"html"},`<template>
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
`)],-1);function P(e,u,c,r,d,_){const s=o("anchor"),i=o("element-demo0"),l=o("demo-block");return p(),h("section",O,[t(s,{"is-edit":"",label:"覆盖语言包",fileName:"cover-lang.md"}),T,t(l,null,{source:v(()=>[t(i)]),highlight:v(()=>[I]),_:1})])}const q=m(z,[["render",P]]),G={},H={class:"content example-md-doc"},J=L('<h3>methods</h3><table class="example-table"><thead><tr><th>方法名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>use</td><td>使用语言包</td><td>语言包</td></tr><tr><td>update</td><td>修改或者扩展语言包</td><td>语言包</td></tr></tbody></table>',2);function K(e,u){const c=o("anchor");return p(),h("section",H,[t(c,{"is-edit":"",label:"API",fileName:"api.md"}),J])}const M=m(G,[["render",K]]),Q={components:{Usage:S,SwitchLang:j,CoverLang:q,Api:M}},R=n("h2",null,"locale 国际化",-1);function W(e,u,c,r,d,_){const s=o("Usage"),i=o("SwitchLang"),l=o("CoverLang"),a=o("Api");return p(),h("div",null,[R,t(s),t(i),t(l),t(a)])}const Z=m(Q,[["render",W]]);export{Z as default};
