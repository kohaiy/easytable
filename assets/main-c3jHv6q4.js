import{V as f}from"./vue.runtime.esm-bundler-SqYzIWQ-.js";import{_ as h,r as c,o as v,c as b,a as o,w as _,h as n,ac as $}from"./index-OvRFtLym.js";const V={name:"component-doc",components:{"element-demo0":{render:function(){const{createElementVNode:t,resolveComponent:s,withCtx:r,openBlock:u,createBlock:a}=f,i=t("div",{style:{color:"blue",cursor:"pointer"}},"点击这里",-1);return function(e,l){const p=s("ve-dropdown");return u(),a(p,{hideByItemClick:"",modelValue:e.options,"onUpdate:modelValue":l[0]||(l[0]=m=>e.options=m)},{default:r(()=>[i]),_:1},8,["modelValue"])}}(),...function(){return{data(){return{options:[{value:0,label:"张三"},{value:1,label:"李四",selected:!0},{value:2,label:"王二"}]}}}}()},"element-demo1":{render:function(){const{createElementVNode:t,resolveComponent:s,withCtx:r,openBlock:u,createBlock:a}=f,i=t("div",{style:{color:"blue",cursor:"pointer"}},"点击这里",-1);return function(e,l){const p=s("ve-dropdown");return u(),a(p,{showRadio:"",modelValue:e.options,"onUpdate:modelValue":l[0]||(l[0]=m=>e.options=m)},{default:r(()=>[i]),_:1},8,["modelValue"])}}(),...function(){return{data(){return{options:[{value:0,label:"张三"},{value:1,label:"李四"},{value:2,label:"王二"}]}}}}()}}},w={class:"content example-md-doc"},k=n("p",null,"单选",-1),x=n("pre",null,[n("code",{class:"html"},`<template>
    <ve-dropdown hideByItemClick v-model="options">
        <div style="color:blue;cursor: pointer;">点击这里</div>
    </ve-dropdown>
</template>
<script>
    export default {
        data() {
            return {
                options: [
                    { value: 0, label: "张三" },
                    { value: 1, label: "李四", selected: true },
                    { value: 2, label: "王二" },
                ],
            };
        },
    };
<\/script>
`)],-1),E=n("p",null,"单选 配合 radio",-1),g=n("pre",null,[n("code",{class:"html"},`<template>
    <ve-dropdown showRadio v-model="options">
        <div style="color:blue;cursor: pointer;">点击这里</div>
    </ve-dropdown>
</template>
<script>
    export default {
        data() {
            return {
                options: [
                    { value: 0, label: "张三" },
                    { value: 1, label: "李四" },
                    { value: 2, label: "王二" },
                ],
            };
        },
    };
<\/script>
`)],-1);function F(t,s,r,u,a,i){const d=c("element-demo0"),e=c("demo-block"),l=c("element-demo1");return v(),b("section",w,[k,o(e,null,{source:_(()=>[o(d)]),highlight:_(()=>[x]),_:1}),E,o(e,null,{source:_(()=>[o(l)]),highlight:_(()=>[g]),_:1})])}const y=h(V,[["render",F]]),D={name:"component-doc",components:{"element-demo0":{render:function(){const{createElementVNode:t,resolveComponent:s,withCtx:r,openBlock:u,createBlock:a}=f,i=t("div",{style:{color:"blue",cursor:"pointer"}},"点击这里",-1);return function(e,l){const p=s("ve-dropdown");return u(),a(p,{modelValue:e.options,"onUpdate:modelValue":l[0]||(l[0]=m=>e.options=m),"is-multiple":""},{default:r(()=>[i]),_:1},8,["modelValue"])}}(),...function(){return{data(){return{options:[{value:0,label:"张三",selected:!0},{value:1,label:"李四",selected:!0},{value:2,label:"王二"}]}}}}()}}},N={class:"content example-md-doc"},S=n("p",null,"多选",-1),A=n("pre",null,[n("code",{class:"html"},`<template>
    <ve-dropdown v-model="options" is-multiple>
        <div style="color:blue;cursor: pointer;">点击这里</div>
    </ve-dropdown>
</template>
<script>
    export default {
        data() {
            return {
                options: [
                    { value: 0, label: "张三", selected: true },
                    { value: 1, label: "李四", selected: true },
                    { value: 2, label: "王二" },
                ],
            };
        },
    };
<\/script>
`)],-1);function I(t,s,r,u,a,i){const d=c("element-demo0"),e=c("demo-block");return v(),b("section",N,[S,o(e,null,{source:_(()=>[o(d)]),highlight:_(()=>[A]),_:1})])}const R=h(D,[["render",I]]),M={name:"component-doc",components:{"element-demo0":{render:function(){const{createElementVNode:t,resolveComponent:s,withCtx:r,openBlock:u,createBlock:a}=f,i=t("div",{style:{color:"blue",cursor:"pointer"}},"点击这里",-1);return function(e,l){const p=s("ve-dropdown");return u(),a(p,{modelValue:e.options,"onUpdate:modelValue":l[0]||(l[0]=m=>e.options=m),"show-operation":"",confirmFilterText:"筛选",resetFilterText:"重置","is-multiple":"",onOnFilterConfirm:e.filterConfirm,onOnFilterReset:e.filterReset},{default:r(()=>[i]),_:1},8,["modelValue","onOnFilterConfirm","onOnFilterReset"])}}(),...function(){return{data(){return{options:[{value:0,label:"张三"},{value:1,label:"李四",selected:!0},{value:2,label:"王二"}]}},methods:{filterConfirm(t){console.log(t)},filterReset(t){console.log(t)}}}}()}}},O={class:"content example-md-doc"},T=n("p",null,"包含操作",-1),U=n("pre",null,[n("code",{class:"html"},`<template>
    <ve-dropdown
        v-model="options"
        show-operation
        confirmFilterText="筛选"
        resetFilterText="重置"
        is-multiple
        @on-filter-confirm="filterConfirm"
        @on-filter-reset="filterReset"
    >
        <div style="color:blue;cursor: pointer;">点击这里</div>
    </ve-dropdown>
</template>
<script>
    export default {
        data() {
            return {
                options: [
                    { value: 0, label: "张三" },
                    { value: 1, label: "李四", selected: true },
                    { value: 2, label: "王二" },
                ],
            };
        },
        methods: {
            filterConfirm(items) {
                console.log(items);
            },
            filterReset(items) {
                console.log(items);
            },
        },
    };
<\/script>
`)],-1);function P(t,s,r,u,a,i){const d=c("element-demo0"),e=c("demo-block");return v(),b("section",O,[T,o(e,null,{source:_(()=>[o(d)]),highlight:_(()=>[U]),_:1})])}const q=h(M,[["render",P]]),W={name:"component-doc",components:{"element-demo0":{render:function(){const{createElementVNode:t,resolveComponent:s,withCtx:r,openBlock:u,createBlock:a}=f,i=t("div",{style:{color:"blue",cursor:"pointer"}},"点击这里",-1),d=t("div",null,"这是自定义内容",-1);return function(l,p){const m=s("ve-dropdown");return u(),a(m,{isCustomContent:"",modelValue:l.options,"onUpdate:modelValue":p[0]||(p[0]=C=>l.options=C)},{"custom-content":r(()=>[d]),default:r(()=>[i]),_:1},8,["modelValue"])}}(),...function(){return{data(){return{options:[{value:0,label:"张三"},{value:1,label:"李四"},{value:2,label:"王二"}]}}}}()}}},j={class:"content example-md-doc"},z=n("p",null,"自定义内容",-1),G=n("pre",null,[n("code",{class:"html"},`<template>
    <ve-dropdown isCustomContent v-model="options">
        <div style="color:blue;cursor: pointer;">点击这里</div>
        <template #custom-content>
            <div>这是自定义内容</div>
        </template>
    </ve-dropdown>
</template>
<script>
    export default {
        data() {
            return {
                options: [
                    { value: 0, label: "张三" },
                    { value: 1, label: "李四" },
                    { value: 2, label: "王二" },
                ],
            };
        },
    };
<\/script>
`)],-1);function H(t,s,r,u,a,i){const d=c("element-demo0"),e=c("demo-block");return v(),b("section",j,[z,o(e,null,{source:_(()=>[o(d)]),highlight:_(()=>[G]),_:1})])}const J=h(W,[["render",H]]),K={name:"component-doc",components:{"element-demo0":{render:function(){const{createElementVNode:t,resolveComponent:s,withCtx:r,openBlock:u,createBlock:a}=f,i=t("div",{style:{color:"blue",cursor:"pointer"}},"点击这里",-1);return function(e,l){const p=s("ve-dropdown");return u(),a(p,{hideByItemClick:"",beforeVisibleChange:e.beforeVisibleChange,modelValue:e.options,"onUpdate:modelValue":l[0]||(l[0]=m=>e.options=m)},{default:r(()=>[i]),_:1},8,["beforeVisibleChange","modelValue"])}}(),...function(){return{data(){return{options:[{value:0,label:"张三"},{value:1,label:"李四"},{value:2,label:"王二"}]}},methods:{beforeVisibleChange({nextVisible:t}){console.log("nextVisible::",t)}}}}()}}},L={class:"content example-md-doc"},Q=n("p",null,"回调函数",-1),X=n("pre",null,[n("code",{class:"html"},`<template>
    <ve-dropdown hideByItemClick :beforeVisibleChange="beforeVisibleChange" v-model="options">
        <div style="color:blue;cursor: pointer;">点击这里</div>
    </ve-dropdown>
</template>
<script>
    export default {
        data() {
            return {
                options: [
                    { value: 0, label: "张三" },
                    { value: 1, label: "李四" },
                    { value: 2, label: "王二" },
                ],
            };
        },
        methods: {
            beforeVisibleChange({ nextVisible }) {
                console.log("nextVisible::", nextVisible);
            },
        },
    };
<\/script>
`)],-1);function Y(t,s,r,u,a,i){const d=c("element-demo0"),e=c("demo-block");return v(),b("section",L,[Q,o(e,null,{source:_(()=>[o(d)]),highlight:_(()=>[X]),_:1})])}const Z=h(K,[["render",Y]]),ee={},te={class:"content example-md-doc"},oe=$('<h3>props</h3><table class="example-table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue</td><td>v-model 输入值</td><td><code>Array</code></td><td>-</td><td>-</td></tr><tr><td>isSelect</td><td>是否供 select 组件使用</td><td><code>Boolean</code></td><td>-</td><td>false</td></tr><tr><td>showOperation</td><td>展示操作按钮</td><td><code>Boolean</code></td><td>-</td><td>false</td></tr><tr><td>width</td><td>下拉组件最小宽度</td><td><code>Number</code></td><td>-</td><td>90</td></tr><tr><td>maxWidth</td><td>下拉组件最大宽度</td><td><code>Number</code></td><td>-</td><td>1000</td></tr><tr><td>isMultiple</td><td>是否是多选下拉</td><td><code>Boolean</code></td><td>-</td><td>false</td></tr><tr><td>textAlign</td><td>下拉项居中方式</td><td><code>String</code></td><td>-</td><td>&quot;left&quot;</td></tr><tr><td>isInput</td><td>是否包含 input</td><td><code>Boolean</code></td><td>-</td><td>false</td></tr><tr><td>confirmFilterText</td><td>确认按钮文本</td><td><code>String</code></td><td>-</td><td>-</td></tr><tr><td>resetFilterText</td><td>重置按钮文本</td><td><code>String</code></td><td>-</td><td>-</td></tr><tr><td>hideByItemClick</td><td>点击选项时，是否隐藏下拉框</td><td><code>Boolean</code></td><td>-</td><td>false</td></tr><tr><td>showRadio</td><td>是否展示 radio，当是单选时生效</td><td><code>Boolean</code></td><td>-</td><td>false</td></tr><tr><td>visible</td><td>下拉框是否展示，当 isControlled=true 生效</td><td><code>Boolean</code></td><td>-</td><td>false</td></tr><tr><td>isControlled</td><td>是否是可控组件</td><td><code>Boolean</code></td><td>-</td><td>false</td></tr><tr><td>isCustomContent</td><td>是否自定义下拉内容</td><td><code>Boolean</code></td><td>-</td><td>false</td></tr><tr><td>instance</td><td>下拉面板和触发元素的距离</td><td><code>Number</code></td><td>-</td><td>12</td></tr><tr><td>beforeVisibleChange({nextVisible})</td><td>显示状态变更之前的回调方法，返回<code>false</code>则阻止显示状态变更</td><td><code>Function</code></td><td>-</td><td>12</td></tr></tbody></table><h3>Event</h3><table class="example-table"><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>on-item-select-change</td><td>选项改变时触发的事件</td><td>options</td></tr><tr><td>on-filter-confirm</td><td>点击确认按钮时的回调</td><td>options</td></tr><tr><td>on-filter-reset</td><td>点击重置按钮时的回调</td><td>options</td></tr><tr><td>on-dropdown-visible-change</td><td>下拉显示切换回调</td><td>isVisible</td></tr></tbody></table>',4);function ne(t,s){const r=c("anchor");return v(),b("section",te,[o(r,{label:"API"}),oe])}const de=h(ee,[["render",ne]]),le={components:{SingleSelect:y,MultipleSelect:R,Operation:q,CustomContent:J,CallbackMethods:Z,API:de}},re=n("h2",null,"dropdown 下拉",-1);function ce(t,s,r,u,a,i){const d=c("anchor"),e=c("SingleSelect"),l=c("MultipleSelect"),p=c("Operation"),m=c("CustomContent"),C=c("CallbackMethods"),B=c("API");return v(),b("div",null,[re,n("div",null,[o(d,{label:"单选功能"}),o(e)]),n("div",null,[o(d,{label:"多选功能"}),o(l)]),n("div",null,[o(d,{label:"操作"}),o(p)]),n("div",null,[o(d,{label:"自定义下拉内容"}),o(m)]),n("div",null,[o(d,{label:"回调函数"}),o(C)]),o(B)])}const ae=h(le,[["render",ce]]);export{ae as default};
