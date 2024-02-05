import{V as B}from"./vue.runtime.esm-bundler-q2XkqXEB.js";import{_ as f,r as u,o as b,c as C,a as m,w as _,m as t,g as k}from"./index-LjdMESSP.js";const N={name:"component-doc",components:{"element-demo0":{render:function(){const{createElementVNode:e,createTextVNode:d,resolveComponent:l,withCtx:i,createVNode:r,toDisplayString:s,openBlock:n,createElementBlock:a}=B,h=e("div",{class:"bold"},"单选",-1),g=e("div",{class:"bold"},"单选禁用",-1),$=e("div",{class:"bold"},"单选禁用",-1);return function(o,c){const V=l("ve-radio");return n(),a("div",null,[e("div",null,[h,r(V,{onOnRadioChange:o.radioChange,modelValue:o.radioVal,"onUpdate:modelValue":c[0]||(c[0]=p=>o.radioVal=p)},{default:i(()=>[d("Radio")]),_:1},8,["onOnRadioChange","modelValue"]),e("div",null,s(o.radioVal),1)]),e("div",null,[g,r(V,{disabled:"",modelValue:o.radioVal2,"onUpdate:modelValue":c[1]||(c[1]=p=>o.radioVal2=p)},{default:i(()=>[d("Radio")]),_:1},8,["modelValue"]),e("div",null,s(o.radioVal2),1)]),e("div",null,[$,r(V,{disabled:"",modelValue:o.radioVal3,"onUpdate:modelValue":c[2]||(c[2]=p=>o.radioVal3=p)},{default:i(()=>[d("Radio")]),_:1},8,["modelValue"]),e("div",null,s(o.radioVal3),1)])])}}(),...function(){return{data(){return{radioVal:!1,radioVal2:!1,radioVal3:!0}},methods:{radioChange(e){console.log("radioChange::",e)}}}}()}}},R={class:"content example-md-doc"},S=t("div",null,[t("p",null,"单选功能")],-1),x=t("pre",null,[t("code",{class:"html"},`<template>
    <div>
        <div>
            <div class="bold">单选</div>
            <ve-radio @on-radio-change="radioChange" v-model="radioVal">Radio</ve-radio>
            <div>{{radioVal}}</div>
        </div>

        <div>
            <div class="bold">单选禁用</div>
            <ve-radio disabled v-model="radioVal2">Radio</ve-radio>
            <div>{{radioVal2}}</div>
        </div>

        <div>
            <div class="bold">单选禁用</div>
            <ve-radio disabled v-model="radioVal3">Radio</ve-radio>
            <div>{{radioVal3}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                radioVal: false,
                radioVal2: false,
                radioVal3: true,
            };
        },
        methods: {
            radioChange(val) {
                console.log("radioChange::", val);
            },
        },
    };
<\/script>
`)],-1);function E(e,d,l,i,r,s){const n=u("element-demo0"),a=u("demo-block");return b(),C("section",R,[m(a,null,{source:_(()=>[m(n)]),highlight:_(()=>[x]),default:_(()=>[S]),_:1})])}const D=f(N,[["render",E]]),y={name:"component-doc",components:{"element-demo0":{render:function(){const{createElementVNode:e,createTextVNode:d,resolveComponent:l,withCtx:i,createVNode:r,toDisplayString:s,openBlock:n,createElementBlock:a}=B,h=e("div",{class:"bold"},"受控单选",-1),g=e("br",null,null,-1);return function(v,o){const c=l("ve-radio");return n(),a("div",null,[e("div",null,[h,e("button",{class:"button-demo",onClick:o[0]||(o[0]=V=>v.test())},"测试"),g,r(c,{isControlled:"",onOnRadioChange:v.radioChange,isSelected:v.radioVal},{default:i(()=>[d(" Radio ")]),_:1},8,["onOnRadioChange","isSelected"]),e("div",null,s(v.radioVal),1)])])}}(),...function(){return{data(){return{radioVal:!1}},methods:{radioChange(e){this.radioVal=e,console.log("radioChange::",e)},test(){this.radioVal=!this.radioVal}}}}()}}},w={class:"content example-md-doc"},A=t("div",null,[t("p",null,"单选功能")],-1),F=t("pre",null,[t("code",{class:"html"},`<template>
    <div>
        <div>
            <div class="bold">受控单选</div>
            <button class="button-demo" @click="test()">测试</button>
            <br />
            <ve-radio isControlled @on-radio-change="radioChange" :isSelected="radioVal">
                Radio
            </ve-radio>
            <div>{{radioVal}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                radioVal: false,
            };
        },
        methods: {
            radioChange(val) {
                this.radioVal = val;
                console.log("radioChange::", val);
            },
            test() {
                this.radioVal = !this.radioVal;
            },
        },
    };
<\/script>
`)],-1);function I(e,d,l,i,r,s){const n=u("element-demo0"),a=u("demo-block");return b(),C("section",w,[m(a,null,{source:_(()=>[m(n)]),highlight:_(()=>[F]),default:_(()=>[A]),_:1})])}const O=f(y,[["render",I]]),P={},T={class:"content example-md-doc"},U=k('<h3>props</h3><table class="example-table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue</td><td><code>v-model</code> 绑定的值</td><td><code>Boolean</code></td><td>-</td><td>false</td></tr><tr><td>disabled</td><td>禁用选择</td><td><code>Boolean</code></td><td>-</td><td>false</td></tr><tr><td>label</td><td>label</td><td><code>String</code></td><td>-</td><td>-</td></tr><tr><td>isControlled</td><td>是否为可控组件，配合 <code>isSelected</code> 使用</td><td><code>Boolean</code></td><td>-</td><td>false</td></tr><tr><td>isSelected</td><td>是否选中。当 isControlled 为 true 时生效</td><td><code>Boolean</code></td><td>-</td><td>false</td></tr></tbody></table><h3>Event</h3><table class="example-table"><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>on-radio-change</td><td>选择切换事件</td><td>isChecked</td></tr></tbody></table>',4);function j(e,d){const l=u("anchor");return b(),C("section",T,[m(l,{label:"API"}),U])}const q=f(P,[["render",j]]),z={components:{Base:D,Controlled:O,API:q}},G=t("h3",null,"基础功能",-1),H=t("h3",null,"可控属性",-1);function J(e,d,l,i,r,s){const n=u("Base"),a=u("Controlled"),h=u("API");return b(),C("div",null,[t("div",null,[G,m(n)]),t("div",null,[H,m(a)]),m(h)])}const M=f(z,[["render",J]]);export{M as default};
