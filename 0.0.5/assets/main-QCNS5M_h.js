import{_ as u,o as r,c as _,m as e,r as t,a as o,p as l,w as h,e as v,F as g,t as E,q as R,g as B}from"./index-kkwE-wMw.js";import{V as x}from"./vue.runtime.esm-bundler-jTagk_49.js";const O={},w={class:"content example-md-doc"},F=e("div",{class:"tip"},[e("p",null,"内置了一些图标供你选择")],-1),T=[F];function A(a,n){return r(),_("section",w,T)}const C=u(O,[["render",A]]),V={},I={class:"content example-md-doc"},k=e("p",null,[l("引入 "),e("code",null,"VeIcon")],-1),N=e("pre",null,[e("code",{class:"language-javascript"},`import Vue from "vue";
import { VeIcon } from "vue-easytable";

Vue.use(VeIcon);
`)],-1),W=e("p",null,"使用",-1),S=e("pre",null,[e("code",{class:"language-javascript"},`<template>
    <ve-icon name="double-right-arrow" />;
</template>
`)],-1);function L(a,n){const s=t("anchor");return r(),_("section",I,[o(s,{"is-edit":"",label:"使用方法",fileName:"usage.md"}),k,N,W,S])}const P=u(V,[["render",L]]),y={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:a,createVNode:n,openBlock:s,createElementBlock:m}=x;return function(f,i){const c=a("ve-icon");return s(),m("div",null,[n(c,{name:"double-right-arrow"}),n(c,{name:"double-right-arrow",color:"red"}),n(c,{name:"double-right-arrow",size:40})])}}(),...function(){return{}}()}}},U={class:"content example-md-doc"},z=e("div",null,[e("p",null,[l("1、"),e("code",null,"name"),l("属性设置图标的名称"),e("br"),l(" 2、"),e("code",null,"size"),l("属性设置图标的大小"),e("br"),l(" 3、"),e("code",null,"color"),l("属性设置图标的颜色")])],-1),D=e("pre",null,[e("code",{class:"html"},`<template>
    <div>
        <ve-icon name="double-right-arrow" />
        <ve-icon name="double-right-arrow" color="red" />
        <ve-icon name="double-right-arrow" :size="40" />
    </div>
</template>
`)],-1);function j(a,n,s,m,p,f){const i=t("anchor"),c=t("element-demo0"),d=t("demo-block");return r(),_("section",U,[o(i,{"is-edit":"",label:"使用",fileName:"base.md"}),o(d,null,{source:h(()=>[o(c)]),highlight:h(()=>[D]),default:h(()=>[z]),_:1})])}const H=u(y,[["render",j]]),G={data(){return{icons:{FILTER:"filter",DOUBLE_RIGHT_ARROW:"double-right-arrow",DOUBLE_LEFT_ARROW:"double-left-arrow",TOP_ARROW:"top-arrow",RIGHT_ARROW:"right-arrow",BOTTOM_ARROW:"bottom-arrow",LEFT_ARROW:"left-arrow",SORT_TOP_ARROW:"sort-top-arrow",SORT_BOTTOM_ARROW:"sort-bottom-arrow",SEARCH:"search"}}}},M={class:"icon-container"},q={class:"icon-item-comp"},J={class:"icon-name"};function K(a,n,s,m,p,f){const i=t("ve-icon"),c=t("anchor");return r(),v(c,{label:"图标集合","is-edit":!1},{default:h(()=>[e("div",M,[(r(!0),_(g,null,R(Object.values(p.icons),d=>(r(),_("div",{key:d,class:"icon-item"},[e("div",q,[o(i,{name:d},null,8,["name"])]),e("span",J,E(d),1)]))),128))])]),_:1})}const Q=u(G,[["render",K],["__scopeId","data-v-bea89ddb"]]),X={},Y={class:"content example-md-doc"},Z=B('<h3>props</h3><table class="example-table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>图标名称</td><td><code>String</code></td><td>见示例</td><td>-</td></tr><tr><td>size</td><td>图标大小</td><td><code>Number</code></td><td>-</td><td>-</td></tr><tr><td>color</td><td>图标颜色</td><td><code>String</code></td><td>-</td><td>-</td></tr></tbody></table>',2);function ee(a,n){const s=t("anchor");return r(),_("section",Y,[o(s,{"is-edit":"",label:"API",fileName:"api.md"}),Z])}const te=u(X,[["render",ee]]),oe={components:{Explain:C,Usage:P,Base:H,Collection:Q,API:te}},ne=e("h2",null,"Icon 图标",-1);function ce(a,n,s,m,p,f){const i=t("Explain"),c=t("Usage"),d=t("Base"),$=t("Collection"),b=t("API");return r(),_("div",null,[ne,o(i),o(c),o(d),o($),o(b)])}const ae=u(oe,[["render",ce]]);export{ae as default};
