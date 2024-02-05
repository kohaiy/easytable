import{V as E}from"./vue.runtime.esm-bundler-yaRY9uGK.js";import{_ as A,r as b,o as G,c as B,a as h,w as x,m as u,g as S}from"./index-RZxYTv8K.js";const I={name:"component-doc",components:{"element-demo0":{render:function(){const{createElementVNode:e,resolveComponent:l,createVNode:n,toDisplayString:i,createTextVNode:s,withCtx:a,openBlock:c,createElementBlock:r}=E,m=e("div",{class:"bold"},"单选",-1),v=e("div",{class:"bold"},"单选禁用",-1),g=e("div",{class:"bold"},"半选状态",-1),D=e("div",{class:"bold"},"受控属性",-1);return function(o,k){const V=l("ve-checkbox");return c(),r("div",null,[e("div",null,[m,n(V,{onOnCheckedChange:o.checkedChange,modelValue:o.checkboxValue1,"onUpdate:modelValue":k[0]||(k[0]=d=>o.checkboxValue1=d),label:"哈密瓜"},null,8,["onOnCheckedChange","modelValue"]),e("div",null,i(o.checkboxValue1),1)]),e("div",null,[v,n(V,{disabled:"",modelValue:o.checkboxValue2,"onUpdate:modelValue":k[1]||(k[1]=d=>o.checkboxValue2=d)},{default:a(()=>[s("哈密瓜")]),_:1},8,["modelValue"]),e("div",null,i(o.checkboxValue2),1),n(V,{disabled:"",modelValue:o.checkboxValue3,"onUpdate:modelValue":k[2]||(k[2]=d=>o.checkboxValue3=d)},{default:a(()=>[s("哈密瓜")]),_:1},8,["modelValue"]),e("div",null,i(o.checkboxValue3),1)]),e("div",null,[g,n(V,{indeterminate:""},{default:a(()=>[s("哈密瓜")]),_:1})]),e("div",null,[D,n(V,{isControlled:"",isSelected:o.isSelected,onOnCheckedChange:o.checkedChangeControl},{default:a(()=>[s(" 哈密瓜 ")]),_:1},8,["isSelected","onOnCheckedChange"]),e("div",null,i(o.isSelected),1)])])}}(),...function(){return{data(){return{checkboxValue1:!0,checkboxValue2:!1,checkboxValue3:!0,isSelected:!0}},methods:{checkedChange(e){console.log("isChecked::",e)},checkedChangeControl(e){this.isSelected=e}}}}()}}},O={class:"content example-md-doc"},F=u("div",null,[u("p",null,"单选功能")],-1),N=u("pre",null,[u("code",{class:"html"},`<template>
    <div>
        <div>
            <div class="bold">单选</div>
            <ve-checkbox
                @on-checked-change="checkedChange"
                v-model="checkboxValue1"
                label="哈密瓜"
            />
            <div>{{checkboxValue1}}</div>
        </div>

        <div>
            <div class="bold">单选禁用</div>
            <ve-checkbox disabled v-model="checkboxValue2">哈密瓜</ve-checkbox>
            <div>{{checkboxValue2}}</div>

            <ve-checkbox disabled v-model="checkboxValue3">哈密瓜</ve-checkbox>
            <div>{{checkboxValue3}}</div>
        </div>

        <div>
            <div class="bold">半选状态</div>
            <ve-checkbox indeterminate>哈密瓜</ve-checkbox>
        </div>

        <div>
            <div class="bold">受控属性</div>
            <ve-checkbox
                isControlled
                :isSelected="isSelected"
                @on-checked-change="checkedChangeControl"
            >
                哈密瓜
            </ve-checkbox>
            <div>{{isSelected}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                checkboxValue1: true,
                checkboxValue2: false,
                checkboxValue3: true,
                isSelected: true,
            };
        },
        methods: {
            checkedChange(isChecked) {
                console.log("isChecked::", isChecked);
            },
            checkedChangeControl(isChecked) {
                this.isSelected = isChecked;
            },
        },
    };
<\/script>
`)],-1);function y(e,l,n,i,s,a){const c=b("element-demo0"),r=b("demo-block");return G(),B("section",O,[h(r,null,{source:x(()=>[h(c)]),highlight:x(()=>[N]),default:x(()=>[F]),_:1})])}const U=A(I,[["render",y]]),P={name:"component-doc",components:{"element-demo0":{render:function(){const{createElementVNode:e,resolveComponent:l,createVNode:n,withCtx:i,toDisplayString:s,createTextVNode:a,renderList:c,Fragment:r,openBlock:m,createElementBlock:v,createBlock:g}=E,D=e("div",{class:"bold"},"多选",-1),M=e("div",{class:"bold"},"全选",-1),o=e("br",null,null,-1),k=e("br",null,null,-1),V=e("br",null,null,-1);return function(t,C){const _=l("ve-checkbox"),f=l("ve-checkbox-group");return m(),v("div",null,[e("div",null,[D,n(f,{modelValue:t.checkboxGroupDefaultValue1,"onUpdate:modelValue":C[0]||(C[0]=p=>t.checkboxGroupDefaultValue1=p)},{default:i(()=>[n(_,{label:"南瓜"}),n(_,{disabled:"",label:"西红柿"}),n(_,{label:"哈密瓜"}),n(_,{label:"水蜜桃"})]),_:1},8,["modelValue"]),a(" ["+s(t.checkboxGroupDefaultValue1.join())+"] ",1)]),e("div",null,[M,e("div",null,[n(_,{onOnCheckedChange:t.handleCheckAll,indeterminate:t.indeterminate,modelValue:t.checkedAllModel,"onUpdate:modelValue":C[1]||(C[1]=p=>t.checkedAllModel=p),label:"全选"},null,8,["onOnCheckedChange","indeterminate","modelValue"]),o,k]),n(f,{modelValue:t.checkboxGroupDefaultValue2,"onUpdate:modelValue":C[2]||(C[2]=p=>t.checkboxGroupDefaultValue2=p),onOnCheckedChange:t.handleCheckGroupChange},{default:i(()=>[(m(!0),v(r,null,c(t.checkboxGroupInitValues,(p,$)=>(m(),g(_,{onOnCheckedChange:t.checkedChange,disabled:p.disabled,label:p.label,key:$},null,8,["onOnCheckedChange","disabled","label"]))),128))]),_:1},8,["modelValue","onOnCheckedChange"]),V,a(" ["+s(t.checkboxGroupDefaultValue2.join())+"] ",1)])])}}(),...function(){return{data(){return{checkboxGroupDefaultValue1:["西红柿","哈密瓜"],checkboxGroupInitValues:[{disabled:!1,label:"南瓜"},{disabled:!1,label:"西红柿"},{disabled:!1,label:"哈密瓜"},{disabled:!1,label:"水蜜桃"}],checkboxGroupDefaultValue2:["南瓜","哈密瓜","水蜜桃"],indeterminate:!0,checkedAllModel:!1}},computed:{hasAllChecked(){return this.checkboxGroupInitValues.every(e=>this.checkboxGroupDefaultValue2.indexOf(e.label)>-1)},hasPartChecked(){return this.checkboxGroupInitValues.some(e=>this.checkboxGroupDefaultValue2.indexOf(e.label)>-1)}},methods:{checkAll(){let e=this.checkboxGroupInitValues.map(l=>l.label);this.checkboxGroupDefaultValue2=e},unCheckAll(){this.checkboxGroupDefaultValue2=[]},handleCheckAll(){this.checkedAllModel?this.checkAll():this.unCheckAll(),this.indeterminate=!1},handleCheckGroupChange(e){console.log("checkgroupChange1::",e),this.hasAllChecked?(this.checkedAllModel=!0,this.indeterminate=!1):this.hasPartChecked?this.indeterminate=!0:(this.indeterminate=!1,this.checkedAllModel=!1)},checkedChange(e){console.log("checkedChange1::",e)}}}}()}}},w={class:"content example-md-doc"},j=u("div",null,[u("p",null,"多选功能")],-1),T=u("pre",null,[u("code",{class:"html"},`<template>
    <div>
        <div>
            <div class="bold">多选</div>
            <ve-checkbox-group v-model="checkboxGroupDefaultValue1">
                <ve-checkbox label="南瓜" />
                <ve-checkbox disabled label="西红柿" />
                <ve-checkbox label="哈密瓜" />
                <ve-checkbox label="水蜜桃" />
            </ve-checkbox-group>
            [{{checkboxGroupDefaultValue1.join()}}]
        </div>
        <div>
            <div class="bold">全选</div>

            <div>
                <ve-checkbox
                    @on-checked-change="handleCheckAll"
                    :indeterminate="indeterminate"
                    v-model="checkedAllModel"
                    label="全选"
                />
                <br />
                <br />
            </div>

            <ve-checkbox-group
                v-model="checkboxGroupDefaultValue2"
                @on-checked-change="handleCheckGroupChange"
            >
                <ve-checkbox
                    @on-checked-change="checkedChange"
                    v-for="(item,index) in checkboxGroupInitValues"
                    :disabled="item.disabled"
                    :label="item.label"
                    :key="index"
                ></ve-checkbox>
            </ve-checkbox-group>
            <br />
            [{{checkboxGroupDefaultValue2.join()}}]
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                checkboxGroupDefaultValue1: ["西红柿", "哈密瓜"],

                checkboxGroupInitValues: [
                    { disabled: false, label: "南瓜" },
                    { disabled: false, label: "西红柿" },
                    { disabled: false, label: "哈密瓜" },
                    { disabled: false, label: "水蜜桃" },
                ],

                checkboxGroupDefaultValue2: ["南瓜", "哈密瓜", "水蜜桃"],

                indeterminate: true,
                checkedAllModel: false,
            };
        },

        computed: {
            // 是否全部选中
            hasAllChecked() {
                return this.checkboxGroupInitValues.every((x) => {
                    return this.checkboxGroupDefaultValue2.indexOf(x.label) > -1;
                });
            },

            // 判断是否有部分选中
            hasPartChecked() {
                return this.checkboxGroupInitValues.some((x) => {
                    return this.checkboxGroupDefaultValue2.indexOf(x.label) > -1;
                });
            },
        },

        methods: {
            // 全选
            checkAll() {
                let all = this.checkboxGroupInitValues.map((item) => {
                    return item.label;
                });

                this.checkboxGroupDefaultValue2 = all;
            },

            unCheckAll() {
                this.checkboxGroupDefaultValue2 = [];
            },

            handleCheckAll() {
                if (this.checkedAllModel) {
                    this.checkAll();
                } else {
                    this.unCheckAll();
                }

                this.indeterminate = false;
            },

            // checkbox-group change
            handleCheckGroupChange(val) {
                console.log("checkgroupChange1::", val);

                if (this.hasAllChecked) {
                    this.checkedAllModel = true;
                    this.indeterminate = false;
                } else if (this.hasPartChecked) {
                    this.indeterminate = true;
                } else {
                    this.indeterminate = false;
                    this.checkedAllModel = false;
                }
            },

            checkedChange(val) {
                console.log("checkedChange1::", val);
            },
        },
    };
<\/script>
`)],-1);function L(e,l,n,i,s,a){const c=b("element-demo0"),r=b("demo-block");return G(),B("section",w,[h(r,null,{source:x(()=>[h(c)]),highlight:x(()=>[T]),default:x(()=>[j]),_:1})])}const q=A(P,[["render",L]]),z={name:"component-doc",components:{"element-demo0":{render:function(){const{createElementVNode:e,resolveComponent:l,createVNode:n,renderList:i,Fragment:s,openBlock:a,createElementBlock:c,createBlock:r,withCtx:m,toDisplayString:v,createTextVNode:g}=E,D=e("div",{class:"bold"},"全选",-1),M=e("br",null,null,-1),o=e("br",null,null,-1),k=e("br",null,null,-1);return function(d,t){const C=l("ve-checkbox"),_=l("ve-checkbox-group");return a(),c("div",null,[e("div",null,[D,e("div",null,[n(C,{onOnCheckedChange:d.handleCheckAll,indeterminate:d.indeterminate,modelValue:d.checkedAllModel,"onUpdate:modelValue":t[0]||(t[0]=f=>d.checkedAllModel=f),label:"全选"},null,8,["onOnCheckedChange","indeterminate","modelValue"]),M,o]),n(_,{modelValue:d.checkboxGroupDefaultValue,"onUpdate:modelValue":t[1]||(t[1]=f=>d.checkboxGroupDefaultValue=f),onOnCheckedChange:d.handleCheckGroupChange},{default:m(()=>[(a(!0),c(s,null,i(d.checkboxGroupInitValues,(f,p)=>(a(),r(C,{disabled:f.disabled,label:f.label,key:p},null,8,["disabled","label"]))),128))]),_:1},8,["modelValue","onOnCheckedChange"]),k,g(" ["+v(d.checkboxGroupDefaultValue.join())+"] ",1)])])}}(),...function(){return{data(){return{checkboxGroupInitValues:[{disabled:!1,label:"南瓜"},{disabled:!0,label:"西红柿"},{disabled:!1,label:"哈密瓜"},{disabled:!1,label:"水蜜桃"},{disabled:!0,label:"哈密瓜2"},{disabled:!1,label:"水蜜桃2"}],checkboxGroupDefaultValue:["南瓜","哈密瓜","水蜜桃","哈密瓜2"],indeterminate:!0,checkedAllModel:!1}},computed:{hasAllChecked(){return this.checkboxGroupInitValues.every(e=>this.checkboxGroupDefaultValue.indexOf(e.label)>-1)},hasPartChecked(){return this.checkboxGroupInitValues.some(e=>this.checkboxGroupDefaultValue.indexOf(e.label)>-1)},disabledChecked(){let e=[];return this.checkboxGroupInitValues.filter(l=>{l.disabled&&this.checkboxGroupDefaultValue.indexOf(l.label)>-1&&e.push(l.label)}),e},disabledUnChecked(){let e=[];return this.checkboxGroupInitValues.filter(l=>{l.disabled&&this.checkboxGroupDefaultValue.indexOf(l.label)===-1&&e.push(l.label)}),e}},methods:{checkAll(){let e=this.checkboxGroupInitValues.map(l=>l.label);this.disabledUnChecked.length>0?(e=e.filter(l=>this.disabledUnChecked.indexOf(l)===-1),this.indeterminate=!0,this.checkedAllModel=!1):(this.indeterminate=!1,this.checkedAllModel=!0),this.checkboxGroupDefaultValue=e},unCheckAll(){this.checkboxGroupDefaultValue=this.disabledChecked,this.disabledChecked.length>0?this.indeterminate=!0:this.indeterminate=!1,this.checkedAllModel=!1},handleCheckAll(){this.checkedAllModel?this.checkAll():this.unCheckAll()},handleCheckGroupChange(){console.log(1111),this.hasAllChecked?(this.checkedAllModel=!0,this.indeterminate=!1):this.hasPartChecked?this.indeterminate=!0:(this.indeterminate=!1,this.checkedAllModel=!1)}}}}()}}},H={class:"content example-md-doc"},J=u("div",null,[u("p",null,"禁用情况下的全选")],-1),K=u("pre",null,[u("code",{class:"html"},`<template>
    <div>
        <div>
            <div class="bold">全选</div>

            <div>
                <ve-checkbox
                    @on-checked-change="handleCheckAll"
                    :indeterminate="indeterminate"
                    v-model="checkedAllModel"
                    label="全选"
                ></ve-checkbox>
                <br />
                <br />
            </div>

            <ve-checkbox-group
                v-model="checkboxGroupDefaultValue"
                @on-checked-change="handleCheckGroupChange"
            >
                <ve-checkbox
                    v-for="(item,index) in checkboxGroupInitValues"
                    :disabled="item.disabled"
                    :label="item.label"
                    :key="index"
                ></ve-checkbox>
            </ve-checkbox-group>
            <br />
            [{{checkboxGroupDefaultValue.join()}}]
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                checkboxGroupInitValues: [
                    { disabled: false, label: "南瓜" },
                    { disabled: true, label: "西红柿" },
                    { disabled: false, label: "哈密瓜" },
                    { disabled: false, label: "水蜜桃" },
                    { disabled: true, label: "哈密瓜2" },
                    { disabled: false, label: "水蜜桃2" },
                ],

                checkboxGroupDefaultValue: ["南瓜", "哈密瓜", "水蜜桃", "哈密瓜2"],

                indeterminate: true,
                checkedAllModel: false,
            };
        },

        computed: {
            // 是否全部选中
            hasAllChecked() {
                return this.checkboxGroupInitValues.every((x) => {
                    return this.checkboxGroupDefaultValue.indexOf(x.label) > -1;
                });
            },

            // 判断是否有部分选中
            hasPartChecked() {
                return this.checkboxGroupInitValues.some((x) => {
                    return this.checkboxGroupDefaultValue.indexOf(x.label) > -1;
                });
            },

            // 禁用已选中的复选框
            disabledChecked() {
                let result = [];

                this.checkboxGroupInitValues.filter((x) => {
                    if (x.disabled && this.checkboxGroupDefaultValue.indexOf(x.label) > -1) {
                        result.push(x.label);
                    }
                });
                return result;
            },

            // 禁用未选中的复选框集合
            disabledUnChecked() {
                let result = [];

                this.checkboxGroupInitValues.filter((x) => {
                    if (x.disabled && this.checkboxGroupDefaultValue.indexOf(x.label) === -1) {
                        result.push(x.label);
                    }
                });
                return result;
            },
        },

        methods: {
            // 全选
            checkAll() {
                let all = this.checkboxGroupInitValues.map((item) => {
                    return item.label;
                });

                // 排除禁用不选中的
                if (this.disabledUnChecked.length > 0) {
                    all = all.filter((x) => {
                        return this.disabledUnChecked.indexOf(x) === -1;
                    });
                    this.indeterminate = true;
                    this.checkedAllModel = false;
                } else {
                    this.indeterminate = false;
                    this.checkedAllModel = true;
                }

                this.checkboxGroupDefaultValue = all;
            },

            unCheckAll() {
                this.checkboxGroupDefaultValue = this.disabledChecked;

                if (this.disabledChecked.length > 0) {
                    this.indeterminate = true;
                } else {
                    this.indeterminate = false;
                }

                this.checkedAllModel = false;
            },

            handleCheckAll() {
                if (this.checkedAllModel) {
                    this.checkAll();
                } else {
                    this.unCheckAll();
                }
            },

            // checkbox-group change
            handleCheckGroupChange() {
                console.log(1111);
                if (this.hasAllChecked) {
                    this.checkedAllModel = true;
                    this.indeterminate = false;
                } else if (this.hasPartChecked) {
                    this.indeterminate = true;
                } else {
                    this.indeterminate = false;
                    this.checkedAllModel = false;
                }
            },
        },
    };
<\/script>
`)],-1);function Q(e,l,n,i,s,a){const c=b("element-demo0"),r=b("demo-block");return G(),B("section",H,[h(r,null,{source:x(()=>[h(c)]),highlight:x(()=>[K]),default:x(()=>[J]),_:1})])}const R=A(z,[["render",Q]]),W={},X={class:"content example-md-doc"},Y=S('<h3>props</h3><table class="example-table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue</td><td><code>v-model</code>绑定的值</td><td><code>String | Number | Boolean</code></td><td>-</td><td>-</td></tr><tr><td>label</td><td>checkbox label</td><td><code>String</code></td><td>-</td><td>-</td></tr><tr><td>disabled</td><td>是否禁止选择</td><td><code>Boolean</code></td><td>-</td><td>false</td></tr><tr><td>indeterminate</td><td>是否是半选</td><td><code>Boolean</code></td><td>-</td><td>false</td></tr><tr><td>isControlled</td><td>是否为可控组件，配合 <code>isSelected</code> 使用</td><td><code>Boolean</code></td><td>-</td><td>false</td></tr><tr><td>isSelected</td><td>是否选中。当 isControlled 为 true 时生效</td><td><code>Boolean</code></td><td>-</td><td>false</td></tr></tbody></table><h3>Event</h3><table class="example-table"><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>on-checked-change</td><td>选中改变时回调</td><td>isChecked</td></tr></tbody></table>',4);function Z(e,l){const n=b("anchor");return G(),B("section",X,[h(n,{label:"API"}),Y])}const ee=A(W,[["render",Z]]),le={components:{CheckboxSingle:U,CheckboxMultipleAdvanced:R,CheckboxMultipleSimple:q,API:ee}};function ne(e,l,n,i,s,a){const c=b("anchor"),r=b("CheckboxSingle"),m=b("CheckboxMultipleSimple"),v=b("CheckboxMultipleAdvanced"),g=b("API");return G(),B("div",null,[u("div",null,[h(c,{label:"单选功能"}),h(r)]),u("div",null,[h(c,{label:"多选功能普通用法"}),h(m)]),u("div",null,[h(c,{label:"多选功能高级用法"}),h(v)]),h(g)])}const ce=A(le,[["render",ne]]);export{ce as default};
