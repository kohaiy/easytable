import{_ as h,o as p,c as _,m as e,p as m,r as o,a,w as l}from"./index-lRrbso5P.js";import{V as k}from"./vue.runtime.esm-bundler-PK1gl5UO.js";const N={},D={class:"content example-md-doc"},E=e("div",{class:"tip"},[e("p",null,[m("1、当列宽不设置时，单元格宽度按照内容自动缩放"),e("br"),m(" 2、当列宽设置百分比，单元格宽度按照百分比缩放"),e("br"),m(" 3、当列宽设置像素值（px），单元格宽度按照像素比缩放"),e("br"),m(" 4、表格的固定宽度，需要设置外层容器宽度")])],-1),w=[E];function x(n,r){return p(),_("section",D,w)}const $=h(N,[["render",x]]),S={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:n,openBlock:r,createBlock:d}=k;return function(u,b){const t=n("ve-table");return r(),d(t,{columns:u.columns,"table-data":u.tableData,"border-around":!0,"border-x":!0,"border-y":!0},null,8,["columns","table-data"])}}(),...function(){return{data(){return{columns:[{field:"name",key:"a",title:"Name"},{field:"date",key:"b",title:"Date"},{field:"hobby",key:"c",title:"Hobby"},{field:"address",key:"d",title:"Address"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},J={class:"content example-md-doc"},z=e("div",null,[e("p",null,"当列宽不设置时，单元格宽度按照内容自动缩放")],-1),V=e("pre",null,[e("code",{class:"html"},`<template>
    <ve-table
        :columns="columns"
        :table-data="tableData"
        :border-around="true"
        :border-x="true"
        :border-y="true"
    />
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    { field: "name", key: "a", title: "Name" },
                    { field: "date", key: "b", title: "Date" },
                    { field: "hobby", key: "c", title: "Hobby" },
                    { field: "address", key: "d", title: "Address" },
                ],
                tableData: [
                    {
                        name: "John",
                        date: "1900-05-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Shanghai",
                    },
                    {
                        name: "Dickerson",
                        date: "1910-06-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Beijing",
                    },
                    {
                        name: "Larsen",
                        date: "2000-07-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Chongqing",
                    },
                    {
                        name: "Geneva",
                        date: "2010-08-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Xiamen",
                    },
                    {
                        name: "Jami",
                        date: "2020-09-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Shenzhen",
                    },
                ],
            };
        },
    };
<\/script>
`)],-1);function W(n,r,d,i,u,b){const t=o("anchor"),c=o("element-demo0"),s=o("demo-block");return p(),_("section",J,[a(t,{"is-edit":"",label:"列宽不设置",fileName:"no-width.md"}),a(s,null,{source:l(()=>[a(c)]),highlight:l(()=>[V]),default:l(()=>[z]),_:1})])}const T=h(S,[["render",W]]),L={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:n,openBlock:r,createBlock:d}=k;return function(u,b){const t=n("ve-table");return r(),d(t,{columns:u.columns,"table-data":u.tableData,"border-around":!0,"border-x":!0,"border-y":!0},null,8,["columns","table-data"])}}(),...function(){return{data(){return{columns:[{field:"name",key:"a",title:"Name 40%",width:"40%"},{field:"date",key:"b",title:"Tel 20%",width:"20%"},{field:"hobby",key:"c",title:"Hobby 20%",width:"20%"},{field:"address",key:"d",title:"Address 20%",width:"20%"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},H={class:"content example-md-doc"},X=e("div",null,[e("p",null,"当列宽设置百分比，单元格宽度按照百分比缩放")],-1),j=e("pre",null,[e("code",{class:"html"},`<template>
    <ve-table
        :columns="columns"
        :table-data="tableData"
        :border-around="true"
        :border-x="true"
        :border-y="true"
    />
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        field: "name",
                        key: "a",
                        title: "Name 40%",
                        width: "40%",
                    },
                    { field: "date", key: "b", title: "Tel 20%", width: "20%" },
                    {
                        field: "hobby",
                        key: "c",
                        title: "Hobby 20%",
                        width: "20%",
                    },
                    {
                        field: "address",
                        key: "d",
                        title: "Address 20%",
                        width: "20%",
                    },
                ],
                tableData: [
                    {
                        name: "John",
                        date: "1900-05-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Shanghai",
                    },
                    {
                        name: "Dickerson",
                        date: "1910-06-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Beijing",
                    },
                    {
                        name: "Larsen",
                        date: "2000-07-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Chongqing",
                    },
                    {
                        name: "Geneva",
                        date: "2010-08-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Xiamen",
                    },
                    {
                        name: "Jami",
                        date: "2020-09-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Shenzhen",
                    },
                ],
            };
        },
    };
<\/script>
`)],-1);function q(n,r,d,i,u,b){const t=o("anchor"),c=o("element-demo0"),s=o("demo-block");return p(),_("section",H,[a(t,{"is-edit":"",label:"列宽百分比",fileName:"percent-width.md"}),a(s,null,{source:l(()=>[a(c)]),highlight:l(()=>[j]),default:l(()=>[X]),_:1})])}const G=h(L,[["render",q]]),P={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:n,openBlock:r,createBlock:d}=k;return function(u,b){const t=n("ve-table");return r(),d(t,{columns:u.columns,"table-data":u.tableData,"border-around":!0,"border-x":!0,"border-y":!0},null,8,["columns","table-data"])}}(),...function(){return{data(){return{columns:[{field:"name",key:"a",title:"Name 400px",width:400},{field:"date",key:"b",title:"Tel 200px",width:200},{field:"hobby",key:"c",title:"Hobby 200px",width:200},{field:"address",key:"d",title:"Address 200px",width:200}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},M={class:"content example-md-doc"},U=e("div",null,[e("p",null,[m("1、当列宽设置素值（px），单元格宽度按照像素比缩放。如果不希望缩放，需要设置外层容器宽度"),e("br"),m("2、设置像素值，记得不要加单位")])],-1),I=e("pre",null,[e("code",{class:"html"},`<template>
    <ve-table
        :columns="columns"
        :table-data="tableData"
        :border-around="true"
        :border-x="true"
        :border-y="true"
    />
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        field: "name",
                        key: "a",
                        title: "Name 400px",
                        width: 400,
                    },
                    { field: "date", key: "b", title: "Tel 200px", width: 200 },
                    {
                        field: "hobby",
                        key: "c",
                        title: "Hobby 200px",
                        width: 200,
                    },
                    {
                        field: "address",
                        key: "d",
                        title: "Address 200px",
                        width: 200,
                    },
                ],
                tableData: [
                    {
                        name: "John",
                        date: "1900-05-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Shanghai",
                    },
                    {
                        name: "Dickerson",
                        date: "1910-06-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Beijing",
                    },
                    {
                        name: "Larsen",
                        date: "2000-07-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Chongqing",
                    },
                    {
                        name: "Geneva",
                        date: "2010-08-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Xiamen",
                    },
                    {
                        name: "Jami",
                        date: "2020-09-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Shenzhen",
                    },
                ],
            };
        },
    };
<\/script>
`)],-1);function K(n,r,d,i,u,b){const t=o("anchor"),c=o("element-demo0"),s=o("demo-block");return p(),_("section",M,[a(t,{"is-edit":"",label:"列宽像素值",fileName:"px-width.md"}),a(s,null,{source:l(()=>[a(c)]),highlight:l(()=>[I]),default:l(()=>[U]),_:1})])}const O=h(P,[["render",K]]),Q={name:"component-doc",components:{"element-demo0":{render:function(){const{createTextVNode:n,resolveComponent:r,withCtx:d,createVNode:i,createElementVNode:u,normalizeStyle:b,openBlock:t,createElementBlock:c}=k,s=u("br",null,null,-1),C=u("br",null,null,-1);return function(y,B){const g=r("el-radio-button"),v=r("el-radio-group"),A=r("ve-table");return t(),c("div",null,[n(" word-break： "),i(v,{size:"small",modelValue:y.wordBreak,"onUpdate:modelValue":B[0]||(B[0]=F=>y.wordBreak=F)},{default:d(()=>[i(g,{label:"normal"},{default:d(()=>[n("normal")]),_:1}),i(g,{label:"keep-all"},{default:d(()=>[n("keep-all")]),_:1}),i(g,{label:"break-all"},{default:d(()=>[n("break-all")]),_:1}),i(g,{label:"break-word"},{default:d(()=>[n("break-word")]),_:1})]),_:1},8,["modelValue"]),s,C,i(A,{style:b({"word-break":y.wordBreak}),columns:y.columns,"table-data":y.tableData,"border-around":!0,"border-x":!0,"border-y":!0},null,8,["style","columns","table-data"])])}}(),...function(){return{data(){return{wordBreak:"normal",columns:[{field:"name",key:"a",title:"Name 40%",width:"40%"},{field:"date",key:"b",title:"Tel 20%",width:"20%"},{field:"hobby",key:"c",title:"Hobby 20%",width:"20%"},{field:"address",key:"d",title:"Address 20%",width:"20%"}],tableData:[{name:"John",date:"1900-05-20",hobby:"Honorificabilitudinitatibus califragilisticexpialidocious Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu 大江东去浪淘尽千古风流人物故垒西边人道是三国周郎赤壁乱石穿空惊涛拍岸卷起千堆雪江山如画一时多少豪杰",address:"No.1 Century Avenue, Xiamen"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},R={class:"content example-md-doc"},Y=e("div",null,[e("p",null,[m("1、当单元格文本内容过多时会破坏布局，此时可以通过样式 "),e("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-break"},"word-break"),m(" 控制"),e("br"),m("2、你也可以结合"),e("a",{href:"#/zh/doc/table/cell-ellipsis"},"单元格省略"),m("功能一起使用")])],-1),Z=e("pre",null,[e("code",{class:"html"},`<template>
    <div>
        word-break：
        <el-radio-group size="small" v-model="wordBreak">
            <el-radio-button label="normal">normal</el-radio-button>
            <el-radio-button label="keep-all">keep-all</el-radio-button>
            <el-radio-button label="break-all">break-all</el-radio-button>
            <el-radio-button label="break-word">break-word</el-radio-button>
        </el-radio-group>
        <br />
        <br />
        <ve-table
            :style="{'word-break':wordBreak}"
            :columns="columns"
            :table-data="tableData"
            :border-around="true"
            :border-x="true"
            :border-y="true"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                wordBreak: "normal",
                columns: [
                    {
                        field: "name",
                        key: "a",
                        title: "Name 40%",
                        width: "40%",
                    },
                    { field: "date", key: "b", title: "Tel 20%", width: "20%" },
                    {
                        field: "hobby",
                        key: "c",
                        title: "Hobby 20%",
                        width: "20%",
                        /*   ellipsis: {
              showTitle: true,
              lineClamp: 5,
            }, */
                    },
                    {
                        field: "address",
                        key: "d",
                        title: "Address 20%",
                        width: "20%",
                    },
                ],
                tableData: [
                    {
                        name: "John",
                        date: "1900-05-20",
                        hobby: "Honorificabilitudinitatibus califragilisticexpialidocious Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu 大江东去浪淘尽千古风流人物故垒西边人道是三国周郎赤壁乱石穿空惊涛拍岸卷起千堆雪江山如画一时多少豪杰",
                        address: "No.1 Century Avenue, Xiamen",
                    },
                    {
                        name: "Dickerson",
                        date: "1910-06-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Beijing",
                    },
                    {
                        name: "Larsen",
                        date: "2000-07-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Chongqing",
                    },
                    {
                        name: "Geneva",
                        date: "2010-08-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Xiamen",
                    },
                    {
                        name: "Jami",
                        date: "2020-09-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Shenzhen",
                    },
                ],
            };
        },
    };
<\/script>
`)],-1);function ee(n,r,d,i,u,b){const t=o("anchor"),c=o("element-demo0"),s=o("demo-block");return p(),_("section",R,[a(t,{"is-edit":"",label:"长文本破坏布局",fileName:"long-word.md"}),a(s,null,{source:l(()=>[a(c)]),highlight:l(()=>[Z]),default:l(()=>[Y]),_:1})])}const ne=h(Q,[["render",ee]]),te={name:"BasicMain",components:{Explain:$,NoWidth:T,PercentWidth:G,PxWidth:O,LongWord:ne}},oe=e("h2",null,"列宽设置",-1);function ae(n,r,d,i,u,b){const t=o("Explain"),c=o("NoWidth"),s=o("PercentWidth"),C=o("PxWidth"),f=o("LongWord");return p(),_("div",null,[oe,a(t),a(c),a(s),a(C),a(f)])}const re=h(te,[["render",ae]]);export{re as default};
