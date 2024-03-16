import{_ as C,o as m,c as u,m as l,p as b,r as _,a as c,w,d as V,b as $}from"./index-1-5pqjkO.js";import{V as v}from"./vue.runtime.esm-bundler-BRNTKtdd.js";const x={},D={class:"content example-md-doc"},B=l("div",{class:"tip"},[l("p",null,[b("1、表头默认是显示的，你可以用过 "),l("code",null,':fixed-header="false"'),b("隐藏表头")])],-1),N=[B];function E(o,e){return m(),u("section",D,N)}const R=C(x,[["render",E]]),T={name:"component-doc",components:{"element-demo0":{render:function(){const{createTextVNode:o,resolveComponent:e,withCtx:t,createVNode:n,createElementVNode:d,openBlock:h,createElementBlock:i}=v,r=d("br",null,null,-1),s=d("br",null,null,-1);return function(a,p){const f=e("el-radio"),k=e("el-radio-group"),H=e("ve-table");return h(),i("div",null,[n(k,{modelValue:a.showHeaderRadio,"onUpdate:modelValue":p[0]||(p[0]=y=>a.showHeaderRadio=y)},{default:t(()=>[n(f,{label:"Show"},{default:t(()=>[o("Show")]),_:1}),n(f,{label:"Hidden"},{default:t(()=>[o("Hidden")]),_:1})]),_:1},8,["modelValue"]),r,s,n(H,{"show-header":a.showHeader,columns:a.columns,"table-data":a.tableData},null,8,["show-header","columns","table-data"])])}}(),...function(){return{data(){return{showHeaderRadio:"Hidden",columns:[{field:"col1",key:"col1",title:"Col1"},{field:"col2",key:"col2",title:"Col2"},{field:"col3",key:"col3",title:"Col3"},{field:"col4",key:"col4",title:"Col4"},{field:"col5",key:"col5",title:"Col5"},{field:"col6",key:"col6",title:"Col6"}],tableData:[]}},computed:{showHeader(){return this.showHeaderRadio==="Show"}},methods:{initTableData(){let o=[];for(let e=0;e<8;e++)o.push({rowKey:e,col1:`A${e+1}`,col2:`B${e+1}`,col3:`C${e+1}`,col4:`D${e+1}`,col5:`E${e+1}`,col6:`F${e+1}`,col7:`G${e+1}`,col8:`H${e+1}`});this.tableData=o}},created(){this.initTableData()}}}()}}},g={class:"content example-md-doc"},S=l("pre",null,[l("code",{class:"html"},`<template>
    <div>
        <el-radio-group v-model="showHeaderRadio">
            <el-radio label="Show">Show</el-radio>
            <el-radio label="Hidden">Hidden</el-radio>
        </el-radio-group>
        <br />
        <br />
        <ve-table :show-header="showHeader" :columns="columns" :table-data="tableData" />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showHeaderRadio: "Hidden",
                columns: [
                    { field: "col1", key: "col1", title: "Col1" },
                    { field: "col2", key: "col2", title: "Col2" },
                    { field: "col3", key: "col3", title: "Col3" },
                    { field: "col4", key: "col4", title: "Col4" },
                    { field: "col5", key: "col5", title: "Col5" },
                    { field: "col6", key: "col6", title: "Col6" },
                ],
                tableData: [],
            };
        },
        computed: {
            showHeader() {
                return this.showHeaderRadio === "Show";
            },
        },
        methods: {
            initTableData() {
                let data = [];
                for (let i = 0; i < 8; i++) {
                    data.push({
                        rowKey: i,
                        col1: \`A\${i + 1}\`,
                        col2: \`B\${i + 1}\`,
                        col3: \`C\${i + 1}\`,
                        col4: \`D\${i + 1}\`,
                        col5: \`E\${i + 1}\`,
                        col6: \`F\${i + 1}\`,
                        col7: \`G\${i + 1}\`,
                        col8: \`H\${i + 1}\`,
                    });
                }
                this.tableData = data;
            },
        },
        created() {
            this.initTableData();
        },
    };
<\/script>
`)],-1);function F(o,e,t,n,d,h){const i=_("anchor"),r=_("element-demo0"),s=_("demo-block");return m(),u("section",g,[c(i,{"is-edit":"",label:"隐藏表头",fileName:"base.md"}),c(s,null,{source:w(()=>[c(r)]),highlight:w(()=>[S]),_:1})])}const A=C(T,[["render",F]]),G=l("h2",null,"表头隐藏",-1),j=V({name:"BasicMain",__name:"main",setup(o){return(e,t)=>(m(),u("div",null,[G,c($(R)),c($(A))]))}});export{j as default};
