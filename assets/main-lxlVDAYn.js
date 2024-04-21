import{V as _}from"./vue.runtime.esm-bundler-KaaX9MVw.js";import{_ as i,r,o as h,c as v,m as o,a as e,w as u,g as C}from"./index-UgqV6vM2.js";const g={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:a,openBlock:s,createBlock:c}=_;return function(t,n){const l=a("ve-select");return s(),c(l,{modelValue:t.selectItems1,"onUpdate:modelValue":n[0]||(n[0]=d=>t.selectItems1=d),placeholder:"姓名"},null,8,["modelValue"])}}(),...function(){return{data(){return{selectItems1:[{value:0,label:"张三"},{value:1,label:"李四"},{value:2,label:"王二"}]}}}}()},"element-demo1":{render:function(){const{resolveComponent:a,openBlock:s,createBlock:c}=_;return function(t,n){const l=a("ve-select");return s(),c(l,{modelValue:t.selectItems1,"onUpdate:modelValue":n[0]||(n[0]=d=>t.selectItems1=d),placeholder:"姓名",width:120},null,8,["modelValue"])}}(),...function(){return{data(){return{selectItems1:[{value:0,label:"张三"},{value:1,label:"李四"},{value:2,label:"王二"}]}}}}()},"element-demo2":{render:function(){const{resolveComponent:a,openBlock:s,createBlock:c}=_;return function(t,n){const l=a("ve-select");return s(),c(l,{modelValue:t.selectItems2,"onUpdate:modelValue":n[0]||(n[0]=d=>t.selectItems2=d),"is-multiple":"",placeholder:"姓名"},null,8,["modelValue"])}}(),...function(){return{data(){return{selectItems2:[{value:0,label:"张三"},{value:1,label:"李四"},{value:2,label:"王二"}]}}}}()},"element-demo3":{render:function(){const{resolveComponent:a,openBlock:s,createBlock:c}=_;return function(t,n){const l=a("ve-select");return s(),c(l,{modelValue:t.selectItems3,"onUpdate:modelValue":n[0]||(n[0]=d=>t.selectItems3=d),placeholder:"姓名",isInput:""},null,8,["modelValue"])}}(),...function(){return{data(){return{selectItems3:[{value:0,label:"张三"},{value:1,label:"李四"},{value:2,label:"王二"}]}}}}()},"element-demo4":{render:function(){const{resolveComponent:a,openBlock:s,createBlock:c}=_;return function(t,n){const l=a("ve-select");return s(),c(l,{modelValue:t.selectItems1,"onUpdate:modelValue":n[0]||(n[0]=d=>t.selectItems1=d),placeholder:"姓名",onOnSelectChange:t.selectChange},null,8,["modelValue","onOnSelectChange"])}}(),...function(){return{data(){return{selectItems1:[{value:0,label:"张三"},{value:1,label:"李四"},{value:2,label:"王二"}]}},methods:{selectChange(a){console.log("items::",a)}}}}()}}},k={class:"content example-md-doc"},E=o("pre",null,[o("code",{class:"html"},`<template>
    <ve-select v-model="selectItems1" placeholder="姓名" />
</template>
<script>
    export default {
        data() {
            return {
                selectItems1: [
                    { value: 0, label: "张三" },
                    { value: 1, label: "李四" },
                    { value: 2, label: "王二" },
                ],
            };
        },
    };
<\/script>
`)],-1),V=o("pre",null,[o("code",{class:"html"},`<template>
    <ve-select v-model="selectItems1" placeholder="姓名" :width="120" />
</template>
<script>
    export default {
        data() {
            return {
                selectItems1: [
                    { value: 0, label: "张三" },
                    { value: 1, label: "李四" },
                    { value: 2, label: "王二" },
                ],
            };
        },
    };
<\/script>
`)],-1),D=o("pre",null,[o("code",{class:"html"},`<template>
    <ve-select v-model="selectItems2" is-multiple placeholder="姓名" />
</template>
<script>
    export default {
        data() {
            return {
                selectItems2: [
                    { value: 0, label: "张三" },
                    { value: 1, label: "李四" },
                    { value: 2, label: "王二" },
                ],
            };
        },
    };
<\/script>
`)],-1),$=o("pre",null,[o("code",{class:"html"},`<template>
    <ve-select v-model="selectItems3" placeholder="姓名" isInput />
</template>
<script>
    export default {
        data() {
            return {
                selectItems3: [
                    { value: 0, label: "张三" },
                    { value: 1, label: "李四" },
                    { value: 2, label: "王二" },
                ],
            };
        },
    };
<\/script>
`)],-1),F=o("pre",null,[o("code",{class:"html"},`<template>
    <ve-select v-model="selectItems1" placeholder="姓名" @on-select-change="selectChange" />
</template>
<script>
    export default {
        data() {
            return {
                selectItems1: [
                    { value: 0, label: "张三" },
                    { value: 1, label: "李四" },
                    { value: 2, label: "王二" },
                ],
            };
        },
        methods: {
            selectChange(items) {
                console.log("items::", items);
            },
        },
    };
<\/script>
`)],-1);function x(a,s,c,m,t,n){const l=r("anchor"),d=r("element-demo0"),p=r("demo-block"),b=r("element-demo1"),B=r("element-demo2"),f=r("element-demo3"),I=r("element-demo4");return h(),v("section",k,[o("p",null,[e(l,{label:"基本功能"})]),e(p,null,{source:u(()=>[e(d)]),highlight:u(()=>[E]),_:1}),o("p",null,[e(l,{label:"设置 width"})]),e(p,null,{source:u(()=>[e(b)]),highlight:u(()=>[V]),_:1}),o("p",null,[e(l,{label:"多选功能"})]),e(p,null,{source:u(()=>[e(B)]),highlight:u(()=>[D]),_:1}),o("p",null,[e(l,{label:"input 文本框下拉"})]),e(p,null,{source:u(()=>[e(f)]),highlight:u(()=>[$]),_:1}),o("p",null,[e(l,{label:"事件"})]),e(p,null,{source:u(()=>[e(I)]),highlight:u(()=>[F]),_:1})])}const A=i(g,[["render",x]]),w={},y={class:"content example-md-doc"},N=C('<h3>props</h3><table class="example-table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue</td><td><code>v-model</code>绑定的值</td><td><code>Array</code></td><td>-</td><td>-</td></tr><tr><td>width</td><td>宽度</td><td><code>Number</code></td><td>-</td><td>90</td></tr><tr><td>maxWidth</td><td>最大宽度</td><td><code>Number</code></td><td>-</td><td>-</td></tr><tr><td>isMultiple</td><td>是否是多选下拉</td><td><code>Boolean</code></td><td>-</td><td>false</td></tr><tr><td>placeholder</td><td>placeholder 文本</td><td><code>String</code></td><td>-</td><td>&quot;请选择&quot;</td></tr><tr><td>textAlign</td><td>文本居中方式</td><td><code>String</code></td><td>-</td><td>&quot;left&quot;</td></tr><tr><td>isInput</td><td>是否支持输入 input</td><td><code>Boolean</code></td><td>-</td><td>false</td></tr></tbody></table><h3>Event</h3><table class="example-table"><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>on-select-change</td><td>选择项改变事件</td><td>options</td></tr></tbody></table>',4);function S(a,s){const c=r("anchor");return h(),v("section",y,[e(c,{label:"API"}),N])}const U=i(w,[["render",S]]),q={components:{Base:A,API:U},data(){return{selectItems1:[{value:0,label:"张三"},{value:1,label:"李四"},{value:2,label:"王二"}],selectItems2:[{value:0,label:"张三"},{value:1,label:"李四"},{value:2,label:"王二"}],selectItems3:[{value:0,label:"张三"},{value:1,label:"李四"},{value:2,label:"王二"}]}}};function P(a,s,c,m,t,n){const l=r("Base"),d=r("API");return h(),v("div",null,[e(l),e(d)])}const W=i(q,[["render",P]]);export{W as default};
