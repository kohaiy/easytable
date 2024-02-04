import{_ as m,r as n,o as s,c as p,a as o,h as e,i as b,w as _,ac as g}from"./index-ktVylMVm.js";import{V as v}from"./vue.runtime.esm-bundler-oE0CmIyJ.js";const f={},T={class:"content example-md-doc"},$=e("p",null,[b("引入 "),e("code",null,"VeContextmenu")],-1),A=e("pre",null,[e("code",{class:"language-javascript"},`import Vue from "vue";
import { VeContextmenu } from "vue-easytable";

Vue.use(VeContextmenu);
`)],-1),R=e("p",null,"使用",-1),k=e("pre",null,[e("code",{class:"language-javascript"},`<template>
    <div>
         <div id="contextmenu-target" ref="contextmenuTargetRef">
            <div>右键点击此区域</div>
        </div>
        <ve-contextmenu eventTarget="#contextmenu-target" :options="options" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            eventTarget:"",
            options: [
              [
                    {
                        label: "menu1",
                        type: "menu1-type",
                    },
                    {
                        label: "menu2",
                        type: "menu2-type",
                        children: [
                            {
                                label: "menu2-1",
                                type: "menu2-1-type",
                            },
                            {
                                label: "menu2-2",
                                type: "menu2-2-type",
                            },
                        ],
                    },
                    {
                        type: "SEPARATOR",
                    },
                    {
                        label: "menu3",
                        type: "menu3-type",
                    },
            ],
        };
    },
     mounted() {
            /*
            eventTarget can be the following case:
            1、this.eventTarget = "#contextmenu-target";
            2、this.eventTarget = document.querySelector('#contextmenu-target');
            3、this.eventTarget = this.$refs["contextmenuTargetRef"];
            */
            this.eventTarget = this.$refs["contextmenuTargetRef"];
    },
};
<\/script>
`)],-1);function E(t,l){const d=n("anchor");return s(),p("section",T,[o(d,{"is-edit":"",label:"使用方法",fileName:"usage.md"}),$,A,R,k])}const B=m(f,[["render",E]]),C={name:"component-doc",components:{"element-demo0":{render:function(){const{createElementVNode:t,toDisplayString:l,resolveComponent:d,createVNode:i,openBlock:h,createElementBlock:y}=v,a={id:"contextmenu-target",ref:"contextmenuTargetRef"},c=t("div",null,"右键点击此区域",-1),r={style:{"font-size":"30px",color:"red"}};return function(u,H){const x=d("ve-contextmenu");return h(),y("div",null,[t("div",a,[c,t("div",r,l(u.contextmenuType),1)],512),i(x,{eventTarget:u.eventTarget,options:u.options,onOnNodeClick:u.contextmenuClick},null,8,["eventTarget","options","onOnNodeClick"])])}}(),...function(){return{data(){return{eventTarget:"",contextmenuType:"",options:[{label:"menu1",type:"menu1-type"},{label:"menu2",type:"menu2-type",children:[{label:"menu2-1",type:"menu2-1-type"},{label:"menu2-2",type:"menu2-2"}]},{type:"SEPARATOR"},{label:"menu3",type:"menu3-type"},{label:"menu4",disabled:!0,children:[{label:"menu4-1",type:"menu4-1-type"}]},{label:"menu5",type:"menu5-type",children:[{label:"menu5-1",type:"menu5-1-type",children:[{label:"menu5-1-1",type:"menu5-1-1-type",children:[{label:"menu5-1-1-1",type:"menu5-1-1-1-type"},{label:"menu5-1-1-2",type:"menu5-1-1-2-type"}]},{label:"menu5-2-2",type:"menu5-2-2-type"}]},{label:"menu5-2",disabled:!0},{type:"SEPARATOR"},{label:"menu5-3",type:"menu5-3-type"}]},{label:"menu6",type:"menu6-type",disabled:!0}]}},methods:{contextmenuClick(t){this.contextmenuType=t}},mounted(){this.eventTarget=this.$refs.contextmenuTargetRef}}}()}}},S={class:"content example-md-doc"},V=e("div",null,[e("p",null,[e("code",null,"type=SEPARATOR"),b("为分割线")])],-1),N=e("pre",null,[e("code",{class:"html"},`<template>
    <div>
        <div id="contextmenu-target" ref="contextmenuTargetRef">
            <div>右键点击此区域</div>
            <div style="font-size:30px;color:red;">{{contextmenuType}}</div>
        </div>

        <ve-contextmenu
            :eventTarget="eventTarget"
            :options="options"
            @on-node-click="contextmenuClick"
        ></ve-contextmenu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                eventTarget: "",
                // contextmenu type
                contextmenuType: "",
                // contextmenu options
                options: [
                    {
                        label: "menu1",
                        type: "menu1-type",
                    },
                    {
                        label: "menu2",
                        type: "menu2-type",
                        children: [
                            {
                                label: "menu2-1",
                                type: "menu2-1-type",
                            },
                            {
                                label: "menu2-2",
                                type: "menu2-2",
                            },
                        ],
                    },
                    {
                        type: "SEPARATOR",
                    },
                    {
                        label: "menu3",
                        type: "menu3-type",
                    },
                    {
                        label: "menu4",
                        disabled: true,
                        children: [
                            {
                                label: "menu4-1",
                                type: "menu4-1-type",
                            },
                        ],
                    },
                    {
                        label: "menu5",
                        type: "menu5-type",
                        children: [
                            {
                                label: "menu5-1",
                                type: "menu5-1-type",
                                children: [
                                    {
                                        label: "menu5-1-1",
                                        type: "menu5-1-1-type",
                                        children: [
                                            {
                                                label: "menu5-1-1-1",
                                                type: "menu5-1-1-1-type",
                                            },
                                            {
                                                label: "menu5-1-1-2",
                                                type: "menu5-1-1-2-type",
                                            },
                                        ],
                                    },
                                    {
                                        label: "menu5-2-2",
                                        type: "menu5-2-2-type",
                                    },
                                ],
                            },
                            {
                                label: "menu5-2",
                                disabled: true,
                            },
                            {
                                type: "SEPARATOR",
                            },
                            {
                                label: "menu5-3",
                                type: "menu5-3-type",
                            },
                        ],
                    },
                    {
                        label: "menu6",
                        type: "menu6-type",
                        disabled: true,
                    },
                ],
            };
        },
        methods: {
            contextmenuClick(type) {
                this.contextmenuType = type;
            },
        },
        mounted() {
            /*
            eventTarget can be the following case:
            1、this.eventTarget = "#contextmenu-target";
            2、this.eventTarget = document.querySelector('#contextmenu-target');
            3、this.eventTarget = this.$refs["contextmenuTargetRef"];
            */
            this.eventTarget = this.$refs["contextmenuTargetRef"];
        },
    };
<\/script>
<style>
    #contextmenu-target {
        display: flex;
        flex-direction: column;
        width: 300px;
        height: 300px;
        justify-content: center;
        align-items: center;
        background: #eee;
        border: 3px dashed #666;
        border-radius: 8px;
    }
</style>
`)],-1);function O(t,l,d,i,h,y){const a=n("anchor"),c=n("element-demo0"),r=n("demo-block");return s(),p("section",S,[o(a,{"is-edit":"",label:"基础示例",fileName:"base.md"}),o(r,null,{source:_(()=>[o(c)]),highlight:_(()=>[N]),default:_(()=>[V]),_:1})])}const P=m(C,[["render",O]]),F={},w={class:"content example-md-doc"},j=g('<h3>props</h3><table class="example-table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>eventTarget</td><td>设置右键菜单作用的元素</td><td><code>HTMLElement | String</code></td><td>-</td><td>-</td></tr><tr><td>options</td><td>右键菜单项。支持无限层级树形结构，具体结构如下</td><td><code>Array</code></td><td>-</td><td>-</td></tr></tbody></table><h3>options</h3><table class="example-table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>展示的菜单名称</td><td><code>String</code></td><td>-</td><td>-</td></tr><tr><td>type</td><td>菜单类型，内置分隔符类型为‘SEPARATOR’。将会作为点击后回调的参数</td><td><code>String</code></td><td>-</td><td>-</td></tr><tr><td>disabled</td><td>禁用当前菜单，点击无效</td><td><code>Boolean</code></td><td>-</td><td>-</td></tr></tbody></table><h3>Event</h3><table class="example-table"><thead><tr><th>事件名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>on-node-click</td><td>菜单点击回调</td><td>当前点击的菜单类型</td></tr></tbody></table><h3>Instance Methods</h3><table class="example-table"><thead><tr><th>实例名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>hideContextmenu</td><td>隐藏当前右键菜单</td><td>-</td></tr></tbody></table>',8);function D(t,l){const d=n("anchor");return s(),p("section",w,[o(d,{"is-edit":"",label:"API",fileName:"api.md"}),j])}const U=m(F,[["render",D]]),q={components:{Usage:B,Base:P,Api:U}},z=e("h2",null,"Contextmenu 右键菜单",-1);function I(t,l,d,i,h,y){const a=n("Usage"),c=n("Base"),r=n("Api");return s(),p("div",null,[z,o(a),o(c),o(r)])}const J=m(q,[["render",I]]);export{J as default};
