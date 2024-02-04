import{I as _}from"./instance-methods-a7ZoysTu.js";import{_ as b,o as p,c as y,h as n,i as w,r as i,a as d,w as h}from"./index-3l6WcM-u.js";import{V as k}from"./vue.runtime.esm-bundler-BhRfMb4p.js";import"./api-tpl-kFwwUsaH.js";const v={},E={class:"content example-md-doc"},A=n("div",{class:"tip"},[n("p",null,[w("1、实例方法可以直接通过 "),n("a",{href:"https://cn.vuejs.org/v2/guide/components-edge-cases.html#%E8%AE%BF%E9%97%AE%E5%AD%90%E7%BB%84%E4%BB%B6%E5%AE%9E%E4%BE%8B%E6%88%96%E5%AD%90%E5%85%83%E7%B4%A0"},"ref"),w(" 访问")])],-1),K=[A];function C(l,e){return p(),y("section",E,K)}const x=b(v,[["render",C]]),$={name:"component-doc",components:{"element-demo0":{render:function(){const{createElementVNode:l,resolveComponent:e,createVNode:s,openBlock:u,createElementBlock:a}=k,m={style:{"margin-bottom":"20px","line-height":"3.0"}};return function(t,o){const f=e("ve-table");return u(),a("div",null,[l("div",m,[l("button",{class:"button-demo",onClick:o[0]||(o[0]=c=>t.scrollY(1e3))},"垂直滚动到1000px"),l("button",{class:"button-demo",onClick:o[1]||(o[1]=c=>t.scrollY(500))},"垂直滚动到500px"),l("button",{class:"button-demo",onClick:o[2]||(o[2]=c=>t.scrollY(0))},"垂直滚动到0px"),l("button",{class:"button-demo",onClick:o[3]||(o[3]=c=>t.scrollX(500))},"水平滚动到300px"),l("button",{class:"button-demo",onClick:o[4]||(o[4]=c=>t.scrollX(300))},"水平滚动到200px"),l("button",{class:"button-demo",onClick:o[5]||(o[5]=c=>t.scrollX(0))},"水平滚动到0px")]),s(f,{ref:"tableRef",style:{width:"1000px"},"scroll-width":1600,"max-height":350,"border-y":"",columns:t.columns,"table-data":t.tableData,rowKeyFieldName:"rowKey"},null,8,["columns","table-data"])])}}(),...function(){return{data(){return{columns:[{field:"col1",key:"a",title:"col1",width:50,fixed:"left"},{title:"col2-col3",fixed:"left",children:[{field:"col2",key:"b",title:"col2",width:50},{field:"col3",key:"c",title:"col3",width:50}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"d",title:"col4",width:130},{field:"col5",key:"e",title:"col5",width:140}]},{title:"col6",field:"col6",key:"f",width:140}]},{title:"col7",fixed:"right",children:[{title:"col7-1",field:"col7",key:"g",width:50}]},{field:"col8",key:"h",title:"col8",width:50,fixed:"right"}]}},methods:{initTableData(){let l=[];for(let e=0;e<80;e++)l.push({rowKey:e,col1:e,col2:e,col3:e,col4:e,col5:e,col6:e,col7:e,col8:e});this.tableData=l},scrollY(l){this.$refs.tableRef.scrollTo({top:l,behavior:"smooth"})},scrollX(l){this.$refs.tableRef.scrollTo({left:l,behavior:"smooth"})}},created(){this.initTableData()}}}()}}},g={class:"content example-md-doc"},D=n("div",null,[n("p",null,[w("1、将表格滚动到指定位置（px）"),n("br"),w("2、参数请参考 "),n("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollTo"},"scrollTo")])],-1),T=n("pre",null,[n("code",{class:"html"},`<template>
    <div>
        <div style="margin-bottom:20px;line-height:3.0;">
            <button class="button-demo" @click="scrollY(1000)">垂直滚动到1000px</button>
            <button class="button-demo" @click="scrollY(500)">垂直滚动到500px</button>
            <button class="button-demo" @click="scrollY(0)">垂直滚动到0px</button>
            <button class="button-demo" @click="scrollX(500)">水平滚动到300px</button>
            <button class="button-demo" @click="scrollX(300)">水平滚动到200px</button>
            <button class="button-demo" @click="scrollX(0)">水平滚动到0px</button>
        </div>
        <ve-table
            ref="tableRef"
            style="width:1000px"
            :scroll-width="1600"
            :max-height="350"
            border-y
            :columns="columns"
            :table-data="tableData"
            rowKeyFieldName="rowKey"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        field: "col1",
                        key: "a",
                        title: "col1",
                        width: 50,
                        fixed: "left",
                    },
                    {
                        title: "col2-col3",
                        fixed: "left",
                        children: [
                            {
                                field: "col2",
                                key: "b",
                                title: "col2",
                                width: 50,
                            },
                            {
                                field: "col3",
                                key: "c",
                                title: "col3",
                                width: 50,
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
                                        key: "d",
                                        title: "col4",
                                        width: 130,
                                    },
                                    {
                                        field: "col5",
                                        key: "e",
                                        title: "col5",
                                        width: 140,
                                    },
                                ],
                            },
                            {
                                title: "col6",
                                field: "col6",
                                key: "f",
                                width: 140,
                            },
                        ],
                    },
                    {
                        title: "col7",
                        fixed: "right",
                        children: [
                            {
                                title: "col7-1",
                                field: "col7",
                                key: "g",
                                width: 50,
                            },
                        ],
                    },
                    {
                        field: "col8",
                        key: "h",
                        title: "col8",
                        width: 50,
                        fixed: "right",
                    },
                ],
            };
        },
        methods: {
            initTableData() {
                let data = [];
                for (let i = 0; i < 80; i++) {
                    data.push({
                        rowKey: i,
                        col1: i,
                        col2: i,
                        col3: i,
                        col4: i,
                        col5: i,
                        col6: i,
                        col7: i,
                        col8: i,
                    });
                }
                this.tableData = data;
            },
            // scroll y
            scrollY(val) {
                this.$refs["tableRef"].scrollTo({ top: val, behavior: "smooth" });
            },
            // scroll x
            scrollX(val) {
                this.$refs["tableRef"].scrollTo({ left: val, behavior: "smooth" });
            },
        },
        created() {
            this.initTableData();
        },
    };
<\/script>
`)],-1);function B(l,e,s,u,a,m){const r=i("anchor"),t=i("element-demo0"),o=i("demo-block");return p(),y("section",g,[d(r,{"is-edit":"",label:"scrollTo 滚动方法",fileName:"scroll-to.md"}),d(o,null,{source:h(()=>[d(t)]),highlight:h(()=>[T]),default:h(()=>[D]),_:1})])}const R=b($,[["render",B]]),F={name:"component-doc",components:{"element-demo0":{render:function(){const{createElementVNode:l,resolveComponent:e,createVNode:s,openBlock:u,createElementBlock:a}=k,m={style:{"margin-bottom":"20px","line-height":"3.0"}};return function(t,o){const f=e("ve-table");return u(),a("div",null,[l("div",m,[l("button",{class:"button-demo",onClick:o[0]||(o[0]=c=>t.scrollToColKey("col4"))},"滚动到col4列"),l("button",{class:"button-demo",onClick:o[1]||(o[1]=c=>t.scrollToColKey("col5"))},"滚动到col5列"),l("button",{class:"button-demo",onClick:o[2]||(o[2]=c=>t.scrollToColKey("col6"))},"滚动到col6列")]),s(f,{ref:"tableRef",style:{width:"1000px"},"scroll-width":1600,"max-height":350,"border-y":"",columns:t.columns,"table-data":t.tableData,rowKeyFieldName:"rowKey"},null,8,["columns","table-data"])])}}(),...function(){return{data(){return{columns:[{field:"col1",key:"a",title:"col1",width:50,fixed:"left"},{title:"col2-col3",fixed:"left",children:[{field:"col2",key:"b",title:"col2",width:50},{field:"col3",key:"c",title:"col3",width:50}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"col4",title:"col4",width:130},{field:"col5",key:"col5",title:"col5",width:140}]},{title:"col6",field:"col6",key:"col6",width:140}]},{title:"col7",fixed:"right",children:[{title:"col7-1",field:"col7",key:"g",width:50}]},{field:"col8",key:"h",title:"col8",width:50,fixed:"right"}]}},methods:{initTableData(){let l=[];for(let e=0;e<80;e++)l.push({rowKey:e,col1:e,col2:e,col3:e,col4:e,col5:e,col6:e,col7:e,col8:e});this.tableData=l},scrollToColKey(l){this.$refs.tableRef.scrollToColKey({colKey:l})}},created(){this.initTableData()}}}()}}},N={class:"content example-md-doc"},V=n("p",null,"当存在固定列时，可以通过此方法将指定的列显示在可视区域",-1),S=n("div",null,[n("p",null,"1、滚动到指定 column 位置")],-1),I=n("pre",null,[n("code",{class:"html"},`<template>
    <div>
        <div style="margin-bottom:20px;line-height:3.0;">
            <button class="button-demo" @click="scrollToColKey('col4')">滚动到col4列</button>
            <button class="button-demo" @click="scrollToColKey('col5')">滚动到col5列</button>
            <button class="button-demo" @click="scrollToColKey('col6')">滚动到col6列</button>
        </div>
        <ve-table
            ref="tableRef"
            style="width:1000px"
            :scroll-width="1600"
            :max-height="350"
            border-y
            :columns="columns"
            :table-data="tableData"
            rowKeyFieldName="rowKey"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        field: "col1",
                        key: "a",
                        title: "col1",
                        width: 50,
                        fixed: "left",
                    },
                    {
                        title: "col2-col3",
                        fixed: "left",
                        children: [
                            {
                                field: "col2",
                                key: "b",
                                title: "col2",
                                width: 50,
                            },
                            {
                                field: "col3",
                                key: "c",
                                title: "col3",
                                width: 50,
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
                    {
                        title: "col7",
                        fixed: "right",
                        children: [
                            {
                                title: "col7-1",
                                field: "col7",
                                key: "g",
                                width: 50,
                            },
                        ],
                    },
                    {
                        field: "col8",
                        key: "h",
                        title: "col8",
                        width: 50,
                        fixed: "right",
                    },
                ],
            };
        },
        methods: {
            initTableData() {
                let data = [];
                for (let i = 0; i < 80; i++) {
                    data.push({
                        rowKey: i,
                        col1: i,
                        col2: i,
                        col3: i,
                        col4: i,
                        col5: i,
                        col6: i,
                        col7: i,
                        col8: i,
                    });
                }
                this.tableData = data;
            },
            // scroll y
            scrollToColKey(colKey) {
                this.$refs["tableRef"].scrollToColKey({ colKey });
            },
        },
        created() {
            this.initTableData();
        },
    };
<\/script>
`)],-1);function X(l,e,s,u,a,m){const r=i("anchor"),t=i("element-demo0"),o=i("demo-block");return p(),y("section",N,[d(r,{"is-edit":"",label:"scrollToColKey 列滚动方法",fileName:"scroll-to-col-key.md"}),V,d(o,null,{source:h(()=>[d(t)]),highlight:h(()=>[I]),default:h(()=>[S]),_:1})])}const Y=b(F,[["render",X]]),M={name:"component-doc",components:{"element-demo0":{render:function(){const{createElementVNode:l,resolveComponent:e,createVNode:s,openBlock:u,createElementBlock:a}=k,m={style:{"margin-bottom":"20px","line-height":"3.0"}};return function(t,o){const f=e("ve-table");return u(),a("div",null,[l("div",m,[l("button",{class:"button-demo",onClick:o[0]||(o[0]=c=>t.scrollToRowKey(9999))}," 滚动到rowKey为9999的行 "),l("button",{class:"button-demo",onClick:o[1]||(o[1]=c=>t.scrollToRowKey(9989))}," 滚动到rowKey为9989的行 "),l("button",{class:"button-demo",onClick:o[2]||(o[2]=c=>t.scrollToRowKey(5e3))}," 滚动到rowKey为5000的行 "),l("button",{class:"button-demo",onClick:o[3]||(o[3]=c=>t.scrollToRowKey(0))},"滚动到rowKey为0的行")]),s(f,{ref:"tableRef",style:{width:"1000px"},"scroll-width":1600,"max-height":400,"border-y":"",columns:t.columns,"table-data":t.tableData,rowKeyFieldName:"rowKey","virtual-scroll-option":t.virtualScrollOption},null,8,["columns","table-data","virtual-scroll-option"])])}}(),...function(){return{data(){return{virtualScrollOption:{enable:!0,minRowHeight:40},columns:[{field:"col1",key:"a",title:"col1",width:50,fixed:"left"},{title:"col2-col3",fixed:"left",children:[{field:"col2",key:"b",title:"col2",width:50},{field:"col3",key:"c",title:"col3",width:50}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"d",title:"col4",width:130},{field:"col5",key:"e",title:"col5",width:140}]},{title:"col6",field:"col6",key:"f",width:140}]},{title:"col7",fixed:"right",children:[{title:"col7-1",field:"col7",key:"g",width:50}]},{field:"col8",key:"h",title:"col8",width:50,fixed:"right"}]}},methods:{getRandom(l,e){return Math.floor(Math.random()*(e-l)+l)},initTableData(){let l=[];for(let e=0;e<1e4;e++)e%2===0&&this.getRandom(2,3),l.push({rowKey:e,col1:e,col2:e,col3:e,col4:e,col5:e,col6:e,col7:e,col8:e});this.tableData=l},scrollToRowKey(l){this.$refs.tableRef.scrollToRowKey({rowKey:l})}},created(){this.initTableData()}}}()}}},P={class:"content example-md-doc"},O=n("div",null,[n("p",null,"1、将表格滚动到指定行的位置")],-1),z=n("pre",null,[n("code",{class:"html"},`<template>
    <div>
        <div style="margin-bottom:20px;line-height:3.0;">
            <button class="button-demo" @click="scrollToRowKey(9999)">
                滚动到rowKey为9999的行
            </button>
            <button class="button-demo" @click="scrollToRowKey(9989)">
                滚动到rowKey为9989的行
            </button>
            <button class="button-demo" @click="scrollToRowKey(5000)">
                滚动到rowKey为5000的行
            </button>
            <button class="button-demo" @click="scrollToRowKey(0)">滚动到rowKey为0的行</button>
        </div>
        <ve-table
            ref="tableRef"
            style="width:1000px"
            :scroll-width="1600"
            :max-height="400"
            border-y
            :columns="columns"
            :table-data="tableData"
            rowKeyFieldName="rowKey"
            :virtual-scroll-option="virtualScrollOption"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                virtualScrollOption: {
                    // 是否开启
                    enable: true,
                    minRowHeight: 40,
                },
                columns: [
                    {
                        field: "col1",
                        key: "a",
                        title: "col1",
                        width: 50,
                        fixed: "left",
                    },
                    {
                        title: "col2-col3",
                        fixed: "left",
                        children: [
                            {
                                field: "col2",
                                key: "b",
                                title: "col2",
                                width: 50,
                            },
                            {
                                field: "col3",
                                key: "c",
                                title: "col3",
                                width: 50,
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
                                        key: "d",
                                        title: "col4",
                                        width: 130,
                                    },
                                    {
                                        field: "col5",
                                        key: "e",
                                        title: "col5",
                                        width: 140,
                                    },
                                ],
                            },
                            {
                                title: "col6",
                                field: "col6",
                                key: "f",
                                width: 140,
                            },
                        ],
                    },
                    {
                        title: "col7",
                        fixed: "right",
                        children: [
                            {
                                title: "col7-1",
                                field: "col7",
                                key: "g",
                                width: 50,
                            },
                        ],
                    },
                    {
                        field: "col8",
                        key: "h",
                        title: "col8",
                        width: 50,
                        fixed: "right",
                    },
                ],
            };
        },
        methods: {
            getRandom(min, max) {
                return Math.floor(Math.random() * (max - min) + min);
            },
            initTableData() {
                let data = [];
                for (let i = 0; i < 10000; i++) {
                    let value = "";
                    if (i % 2 === 0) {
                        const rowCount = this.getRandom(2, 3);

                        for (let i = 0; i < rowCount; i++) {
                            value += \`this is the long word.<br />\`;
                        }
                    } else {
                        value = \`name\${i}\`;
                    }

                    data.push({
                        rowKey: i,
                        col1: i,
                        col2: i,
                        col3: i,
                        col4: i,
                        col5: i,
                        col6: i,
                        col7: i,
                        col8: i,
                    });
                }
                this.tableData = data;
            },
            // scroll y
            scrollToRowKey(rowKey) {
                this.$refs["tableRef"].scrollToRowKey({ rowKey: rowKey });
            },
        },
        created() {
            this.initTableData();
        },
    };
<\/script>
`)],-1);function H(l,e,s,u,a,m){const r=i("anchor"),t=i("element-demo0"),o=i("demo-block");return p(),y("section",P,[d(r,{"is-edit":"",label:"scrollToRowKey 行滚动方法",fileName:"scroll-to-row-key.md"}),d(o,null,{source:h(()=>[d(t)]),highlight:h(()=>[z]),default:h(()=>[O]),_:1})])}const j=b(M,[["render",H]]),W={name:"BasicMain",components:{Explain:x,ScrollTo:R,ScrollToColKey:Y,ScrollToRowKey:j,API:_}},q=n("h2",null,"实例方法",-1);function G(l,e,s,u,a,m){const r=i("Explain"),t=i("ScrollTo"),o=i("ScrollToColKey"),f=i("ScrollToRowKey"),c=i("API");return p(),y("div",null,[q,d(r),d(t),d(o),d(f),d(c,{title:"API",anchor:"API",desc:"实例方法"})])}const Z=b(W,[["render",G]]);export{Z as default};
