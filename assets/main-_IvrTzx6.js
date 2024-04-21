import{_ as v,r as l,o as _,c as g,a as n,m as e,p as d,w as u,g as $,d as E,b as h}from"./index-lRrbso5P.js";import{V as f}from"./vue.runtime.esm-bundler-PK1gl5UO.js";const C={},B={class:"content example-md-doc"},k=e("p",null,[d("引入 "),e("code",null,"VePagination")],-1),x=e("pre",null,[e("code",{class:"language-javascript"},`import Vue from "vue";
import { VePagination } from "vue-easytable";

Vue.use(VePagination);
`)],-1),F=e("p",null,"使用",-1),A=e("pre",null,[e("code",{class:"language-javascript"},`<template>
  <ve-pagination :total="600" />
</template>
`)],-1);function z(t,a){const o=l("anchor");return _(),g("section",B,[n(o,{"is-edit":"",label:"使用方法",fileName:"usage.md"}),k,x,F,A])}const N=v(C,[["render",z]]),y={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:t,openBlock:a,createBlock:o}=f;return function(s,p){const c=t("ve-pagination");return a(),o(c,{total:600})}}(),...function(){return{}}()}}},S={class:"content example-md-doc"},V=e("pre",null,[e("code",{class:"html"},`<template>
    <ve-pagination :total="600" />
</template>
`)],-1);function P(t,a,o,i,s,p){const c=l("anchor"),r=l("element-demo0"),m=l("demo-block");return _(),g("section",S,[n(c,{"is-edit":"",label:"基础示例",fileName:"base-usage.md"}),n(m,null,{source:u(()=>[n(r)]),highlight:u(()=>[V]),_:1})])}const j=v(y,[["render",P]]),D={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:t,openBlock:a,createBlock:o}=f;return function(s,p){const c=t("ve-pagination");return a(),o(c,{total:600,"page-index":2})}}(),...function(){return{}}()}}},O={class:"content example-md-doc"},I=e("div",null,[e("p",null,[e("code",null,"page-index"),d(" 属性设置当前页码")])],-1),T=e("pre",null,[e("code",{class:"html"},`<template>
    <ve-pagination :total="600" :page-index="2" />
</template>
`)],-1);function w(t,a,o,i,s,p){const c=l("anchor"),r=l("element-demo0"),m=l("demo-block");return _(),g("section",O,[n(c,{"is-edit":"",label:"当前页码",fileName:"page-index.md"}),n(m,null,{source:u(()=>[n(r)]),highlight:u(()=>[T]),default:u(()=>[I]),_:1})])}const L=v(D,[["render",w]]),U={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:t,openBlock:a,createBlock:o}=f;return function(s,p){const c=t("ve-pagination");return a(),o(c,{total:600,"page-size":30})}}(),...function(){return{}}()}}},q={class:"content example-md-doc"},H=e("div",null,[e("p",null,[e("code",null,"page-size"),d(" 属性设置每页大小")])],-1),M=e("pre",null,[e("code",{class:"html"},`<template>
    <ve-pagination :total="600" :page-size="30" />
</template>
`)],-1);function G(t,a,o,i,s,p){const c=l("anchor"),r=l("element-demo0"),m=l("demo-block");return _(),g("section",q,[n(c,{"is-edit":"",label:"每页大小",fileName:"page-size.md"}),n(m,null,{source:u(()=>[n(r)]),highlight:u(()=>[M]),default:u(()=>[H]),_:1})])}const J=v(U,[["render",G]]),K={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:t,openBlock:a,createBlock:o}=f;return function(s,p){const c=t("ve-pagination");return a(),o(c,{total:600,"paging-count":6})}}(),...function(){return{}}()}}},Q={class:"content example-md-doc"},R=e("div",null,[e("p",null,[e("code",null,"pagingCount"),d(" 属性设置向前 5 页和向后 5 页，其中间按钮的个数分页按钮个数")])],-1),W=e("pre",null,[e("code",{class:"html"},`<template>
    <ve-pagination :total="600" :paging-count="6" />
</template>
`)],-1);function X(t,a,o,i,s,p){const c=l("anchor"),r=l("element-demo0"),m=l("demo-block");return _(),g("section",Q,[n(c,{"is-edit":"",label:"分页按钮个数",fileName:"paging-buttons.md"}),n(m,null,{source:u(()=>[n(r)]),highlight:u(()=>[W]),default:u(()=>[R]),_:1})])}const Y=v(K,[["render",X]]),Z={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:t,openBlock:a,createBlock:o}=f;return function(s,p){const c=t("ve-pagination");return a(),o(c,{total:600,"page-size-option":[5,10,15],"page-size":5})}}(),...function(){return{}}()}}},ee={class:"content example-md-doc"},te=e("div",null,[e("p",null,[e("code",null,"pageSizeOption"),d(" 属性设置分页下拉配置")])],-1),ne=e("pre",null,[e("code",{class:"html"},`<template>
    <ve-pagination :total="600" :page-size-option="[5,10,15]" :page-size="5" />
</template>
`)],-1);function oe(t,a,o,i,s,p){const c=l("anchor"),r=l("element-demo0"),m=l("demo-block");return _(),g("section",ee,[n(c,{"is-edit":"",label:"分页下拉配置",fileName:"paging-configuration.md"}),n(m,null,{source:u(()=>[n(r)]),highlight:u(()=>[ne]),default:u(()=>[te]),_:1})])}const ce=v(Z,[["render",oe]]),ae={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:t,openBlock:a,createBlock:o}=f;return function(s,p){const c=t("ve-pagination");return a(),o(c,{total:600,onOnPageNumberChange:s.pageNumberChange,onOnPageSizeChange:s.pageSizeChange},null,8,["onOnPageNumberChange","onOnPageSizeChange"])}}(),...function(){return{methods:{pageNumberChange(t){console.log(t)},pageSizeChange(t){console.log(t)}}}}()}}},le={class:"content example-md-doc"},ue=e("div",null,[e("p",null,[d("1、"),e("code",null,"on-page-number-change"),d("Page number change callback event"),e("br"),d("2、"),e("code",null,"on-page-size-change"),d("Change callback events under each page")])],-1),de=e("pre",null,[e("code",{class:"html"},`<template>
    <ve-pagination
        :total="600"
        @on-page-number-change="pageNumberChange"
        @on-page-size-change="pageSizeChange"
    />
</template>
<script>
    export default {
        methods: {
            pageNumberChange(pageIndex) {
                console.log(pageIndex);
            },

            pageSizeChange(pageSize) {
                console.log(pageSize);
            },
        },
    };
<\/script>
`)],-1);function se(t,a,o,i,s,p){const c=l("anchor"),r=l("element-demo0"),m=l("demo-block");return _(),g("section",le,[n(c,{"is-edit":"",label:"Callback Events",fileName:"callback-events.md"}),n(m,null,{source:u(()=>[n(r)]),highlight:u(()=>[de]),default:u(()=>[ue]),_:1})])}const re=v(ae,[["render",se]]),ie={name:"component-doc",components:{"element-demo0":{render:function(){const{createElementVNode:t,resolveComponent:a,createVNode:o,openBlock:i,createElementBlock:s}=f,p=t("div",{class:"mb20 bold"},"不显示页码按钮",-1),c=t("div",{class:"mt30 mb20 bold"},"调整显示顺序",-1),r=t("div",{class:"mt30 mb20 bold"},"完整布局",-1);return function(Be,ke){const b=a("ve-pagination");return i(),s("div",null,[t("div",null,[p,o(b,{total:600,layout:["total","prev","next","sizer","jumper"]})]),t("div",null,[c,o(b,{total:600,layout:["total","sizer","prev","pager","next","jumper"]})]),t("div",null,[r,o(b,{total:600,layout:["total","prev","pager","next","sizer","jumper"]})])])}}(),...function(){return{}}()}}},pe={class:"content example-md-doc"},me=e("div",null,[e("p",null,[d("1、通过设置 "),e("code",null,"layout"),d(" 属性，改变布局。"),e("br"),d("2、"),e("code",null,"layout"),d(" 属性支持以下配置项："),e("br"),e("code",null,"total"),d("：显示总条数、"),e("code",null,"prev"),d("：显示上一页按钮、"),e("code",null,"pager"),d("：显示页码按钮、"),e("code",null,"next"),d("：显示下一页按钮、"),e("code",null,"sizer"),d("：显示每页大小设置、"),e("code",null,"jumper"),d("：显示跳转文本框")])],-1),_e=e("pre",null,[e("code",{class:"html"},`<template>
    <div>
        <div>
            <div class="mb20 bold">不显示页码按钮</div>
            <ve-pagination :total="600" :layout="['total', 'prev', 'next', 'sizer', 'jumper']" />
        </div>
        <div>
            <div class="mt30 mb20 bold">调整显示顺序</div>
            <ve-pagination
                :total="600"
                :layout="['total', 'sizer', 'prev', 'pager', 'next', 'jumper']"
            />
        </div>

        <div>
            <div class="mt30 mb20 bold">完整布局</div>
            <ve-pagination
                :total="600"
                :layout="['total', 'prev', 'pager', 'next', 'sizer', 'jumper']"
            />
        </div>
    </div>
</template>
`)],-1);function ge(t,a,o,i,s,p){const c=l("anchor"),r=l("element-demo0"),m=l("demo-block");return _(),g("section",pe,[n(c,{"is-edit":"",label:"布局设置",fileName:"layout-settings.md"}),n(m,null,{source:u(()=>[n(r)]),highlight:u(()=>[_e]),default:u(()=>[me]),_:1})])}const he=v(ie,[["render",ge]]),ve={},fe={class:"content example-md-doc"},be=$('<h3>props</h3><table class="example-table"><thead><tr><th>参数</th><th>描述</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>layout</td><td>布局设置</td><td><code>Array</code></td><td>[&#39;total&#39;, &#39;prev&#39;, &#39;pager&#39;, &#39;next&#39;, &#39;sizer&#39;, &#39;jumper&#39;]</td><td>[&#39;total&#39;, &#39;prev&#39;, &#39;pager&#39;, &#39;next&#39;, &#39;sizer&#39;, &#39;jumper&#39;]</td></tr><tr><td>total</td><td>总数量</td><td><code>Number</code></td><td>-</td><td>-</td></tr><tr><td>pageIndex</td><td>当前页码</td><td><code>Number</code></td><td>-</td><td>1</td></tr><tr><td>pagingCount</td><td>前 5 页和后 5 页中间的按钮数</td><td><code>Number</code></td><td>-</td><td>5</td></tr><tr><td>pageSize</td><td>每页大小</td><td><code>Number</code></td><td>-</td><td>10</td></tr><tr><td>pageSizeOption</td><td>每页大小下拉配置</td><td><code>Array</code></td><td>-</td><td>[10, 20, 30]</td></tr><tr><td>popperAppendTo</td><td>下拉弹层需要渲染的父节点 。默认渲染到 <code>body</code> 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。<a href="https://codesandbox.io/s/vue-easytable-2-15-0-example-forked-q9k3m0?file=/Example.vue">示例</a></td><td><code>String | HTMLElement</code></td><td>-</td><td>document.body</td></tr></tbody></table><h3>Event</h3><table class="example-table"><thead><tr><th>事件名称</th><th>描述</th><th>回调参数</th></tr></thead><tbody><tr><td>on-page-number-change</td><td>页码改变回调事件</td><td>当前页码</td></tr><tr><td>on-page-size-change</td><td>每页大小回调</td><td>每页大小</td></tr></tbody></table>',4);function $e(t,a){const o=l("anchor");return _(),g("section",fe,[n(o,{"is-edit":"",label:"API",fileName:"api.md"}),be])}const Ee=v(ve,[["render",$e]]),Ce=e("h2",null,"Pagination 分页",-1),Ae=E({__name:"main",setup(t){return(a,o)=>(_(),g("div",null,[Ce,n(h(N)),n(h(j)),n(h(L)),n(h(J)),n(h(Y)),n(h(ce)),n(h(re)),n(h(he)),n(h(Ee))]))}});export{Ae as default};
