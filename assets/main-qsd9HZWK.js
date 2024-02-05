import{C as B}from"./column-hidden-option-props-WcQk-xA4.js";import{_ as C,o as f,c as _,m as n,p as s,r as c,a as d,w as h}from"./index-gSu8gfTL.js";import{V as v}from"./vue.runtime.esm-bundler-x7LAIwf8.js";import"./api-tpl-kxZ6q_yZ.js";const w={},g={class:"content example-md-doc"},A=n("div",{class:"tip"},[n("p",null,[s("1、通过 "),n("code",null,"columnHiddenOption"),s(" 实现列隐藏功能"),n("br"),s(" 2、你也可以通过实例方法控制列的隐藏与显示")])],-1),D=[A];function H(e,o){return f(),_("section",g,D)}const E=C(w,[["render",H]]),N={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:e,openBlock:o,createBlock:b}=v;return function(i,y){const u=e("ve-table");return o(),b(u,{columns:i.columns,"table-data":i.tableData,columnHiddenOption:i.columnHiddenOption},null,8,["columns","table-data","columnHiddenOption"])}}(),...function(){return{data(){return{columnHiddenOption:{defaultHiddenColumnKeys:["hobby","name"]},columns:[{field:"name",key:"name",title:"Name"},{field:"date",key:"date",title:"Date"},{field:"hobby",key:"hobby",title:"Hobby"},{field:"address",key:"address",title:"Address"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},F={class:"content example-md-doc"},K=n("p",null,"下面示例默认隐藏 hobby 和 name 列",-1),O=n("div",null,[n("p",null,[s("通过 "),n("code",null,"defaultHiddenColumnKeys"),s("属性设置默认隐藏的列")])],-1),V=n("pre",null,[n("code",{class:"html"},`<template>
    <ve-table :columns="columns" :table-data="tableData" :columnHiddenOption="columnHiddenOption" />
</template>

<script>
    export default {
        data() {
            return {
                columnHiddenOption: {
                    // default hidden column keys
                    defaultHiddenColumnKeys: ["hobby", "name"],
                },
                columns: [
                    { field: "name", key: "name", title: "Name" },
                    { field: "date", key: "date", title: "Date" },
                    { field: "hobby", key: "hobby", title: "Hobby" },
                    { field: "address", key: "address", title: "Address" },
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
`)],-1);function I(e,o,b,p,i,y){const u=c("anchor"),a=c("element-demo0"),m=c("demo-block");return f(),_("section",F,[d(u,{"is-edit":"",label:"默认隐藏列",fileName:"default-hidden-column.md"}),K,d(m,null,{source:h(()=>[d(a)]),highlight:h(()=>[V]),default:h(()=>[O]),_:1})])}const R=C(N,[["render",I]]),P={name:"component-doc",components:{"element-demo0":{render:function(){const{createElementVNode:e,resolveComponent:o,createVNode:b,openBlock:p,createElementBlock:i}=v,y=e("br",null,null,-1),u=e("br",null,null,-1),a=e("br",null,null,-1),m=e("br",null,null,-1);return function(l,t){const $=o("ve-table");return p(),i("div",null,[e("button",{class:"button-demo",onClick:t[0]||(t[0]=r=>l.hideColumns(["col1"]))},"隐藏 col1 列"),e("button",{class:"button-demo",onClick:t[1]||(t[1]=r=>l.hideColumns(["col2"]))},"隐藏 col2 列"),e("button",{class:"button-demo",onClick:t[2]||(t[2]=r=>l.hideColumns(["col3"]))},"隐藏 col3 列"),e("button",{class:"button-demo",onClick:t[3]||(t[3]=r=>l.hideColumns(["col1","col2","col3"]))}," 隐藏 col1、col2、col3 列 "),y,u,e("button",{class:"button-demo",onClick:t[4]||(t[4]=r=>l.showColumns(["col1"]))},"显示 col1 列"),e("button",{class:"button-demo",onClick:t[5]||(t[5]=r=>l.showColumns(["col2"]))},"显示 col2 列"),e("button",{class:"button-demo",onClick:t[6]||(t[6]=r=>l.showColumns(["col3"]))},"显示 col3 列"),e("button",{class:"button-demo",onClick:t[7]||(t[7]=r=>l.showColumns(["col1","col2","col3"]))}," 显示 col1、col2、col3 列 "),a,m,b($,{ref:"tableRef","border-y":"",columns:l.columns,"table-data":l.tableData,columnHiddenOption:l.columnHiddenOption},null,8,["columns","table-data","columnHiddenOption"])])}}(),...function(){return{data(){return{columnHiddenOption:{defaultHiddenColumnKeys:["col8"]},columns:[{field:"col1",key:"col1",title:"col1",width:"10%"},{title:"col2-col3",children:[{field:"col2",key:"col2",title:"col2",width:100},{field:"col3",key:"col3",title:"col3",width:110}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"col4",title:"col4",width:130},{field:"col5",key:"col5",title:"col5",width:140}]},{title:"col6",field:"col6",key:"col6",width:140}]},{field:"col7",key:"col7",title:"col7",width:150},{field:"col8",key:"col8",title:"col8",width:160}],tableData:[]}},methods:{hideColumns(e){this.$refs.tableRef.hideColumnsByKeys(e)},showColumns(e){this.$refs.tableRef.showColumnsByKeys(e)},initTableData(){let e=[];for(let o=0;o<3;o++)e.push({rowKey:o,col1:"col1-"+o,col2:"col2-"+o,col3:"col3-"+o,col4:"col4-"+o,col5:"col5-"+o,col6:"col6-"+o,col7:"col7-"+o,col8:"col8-"+o});this.tableData=e}},created(){this.initTableData()}}}()}}},T={class:"content example-md-doc"},x=n("div",null,[n("p",null,[s("1、通过实例方法 "),n("code",null,"hideColumnsByKeys(keys)"),s("将列隐藏 "),n("br"),s("2、通过实例方法 "),n("code",null,"showColumnsByKeys(keys)"),s("将隐藏的列显示")])],-1),J=n("pre",null,[n("code",{class:"html"},`<template>
    <div>
        <button class="button-demo" @click="hideColumns(['col1'])">隐藏 col1 列</button>
        <button class="button-demo" @click="hideColumns(['col2'])">隐藏 col2 列</button>
        <button class="button-demo" @click="hideColumns(['col3'])">隐藏 col3 列</button>
        <button class="button-demo" @click="hideColumns(['col1','col2','col3'])">
            隐藏 col1、col2、col3 列
        </button>
        <br />
        <br />
        <button class="button-demo" @click="showColumns(['col1'])">显示 col1 列</button>
        <button class="button-demo" @click="showColumns(['col2'])">显示 col2 列</button>
        <button class="button-demo" @click="showColumns(['col3'])">显示 col3 列</button>
        <button class="button-demo" @click="showColumns(['col1','col2','col3'])">
            显示 col1、col2、col3 列
        </button>
        <br />
        <br />
        <ve-table
            ref="tableRef"
            border-y
            :columns="columns"
            :table-data="tableData"
            :columnHiddenOption="columnHiddenOption"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                columnHiddenOption: {
                    // default hidden column keys
                    defaultHiddenColumnKeys: ["col8"],
                },
                columns: [
                    { field: "col1", key: "col1", title: "col1", width: "10%" },
                    {
                        title: "col2-col3",
                        children: [
                            {
                                field: "col2",
                                key: "col2",
                                title: "col2",
                                width: 100,
                            },
                            {
                                field: "col3",
                                key: "col3",
                                title: "col3",
                                width: 110,
                            },
                        ],
                    },
                    {
                        title: "col4-col5-col6",
                        children: [
                            {
                                title: "col4-col5",
                                children: [
                                    {
                                        field: "col4",
                                        key: "col4",
                                        title: "col4",
                                        width: 130,
                                    },
                                    {
                                        field: "col5",
                                        key: "col5",
                                        title: "col5",
                                        width: 140,
                                    },
                                ],
                            },
                            {
                                title: "col6",
                                field: "col6",
                                key: "col6",
                                width: 140,
                            },
                        ],
                    },
                    { field: "col7", key: "col7", title: "col7", width: 150 },
                    { field: "col8", key: "col8", title: "col8", width: 160 },
                ],
                tableData: [],
            };
        },
        methods: {
            // hidden columns
            hideColumns(keys) {
                this.$refs["tableRef"].hideColumnsByKeys(keys);
            },
            // show cloumns
            showColumns(keys) {
                this.$refs["tableRef"].showColumnsByKeys(keys);
            },
            initTableData() {
                let data = [];
                for (let i = 0; i < 3; i++) {
                    data.push({
                        rowKey: i,
                        col1: "col1-" + i,
                        col2: "col2-" + i,
                        col3: "col3-" + i,
                        col4: "col4-" + i,
                        col5: "col5-" + i,
                        col6: "col6-" + i,
                        col7: "col7-" + i,
                        col8: "col8-" + i,
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
`)],-1);function M(e,o,b,p,i,y){const u=c("anchor"),a=c("element-demo0"),m=c("demo-block");return f(),_("section",T,[d(u,{"is-edit":"",label:"实例方法",fileName:"instance-methods.md"}),d(m,null,{source:h(()=>[d(a)]),highlight:h(()=>[J]),default:h(()=>[x]),_:1})])}const S=C(P,[["render",M]]),j={name:"BasicMain",components:{Explain:E,DefaultHiddenColumnKeys:R,InstanceMethods:S,API:B}},q=n("h2",null,"列隐藏",-1);function z(e,o,b,p,i,y){const u=c("Explain"),a=c("DefaultHiddenColumnKeys"),m=c("InstanceMethods"),k=c("API");return f(),_("div",null,[q,d(u),d(a),d(m),d(k,{title:"API",anchor:"API",desc:"columnHidden 列隐藏配置"})])}const U=C(j,[["render",z]]);export{U as default};
