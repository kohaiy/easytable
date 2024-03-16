import{_,o as p,c as h,g as T,r as c,a as t,w as a,m as l,p as o}from"./index-BxRg2T26.js";import{V as k}from"./vue.runtime.esm-bundler-Tv19svLr.js";const b={},F={class:"content example-md-doc"},x=T('<div class="tip"><p>1、属性<code>scroll-width</code>为滚动区域的宽度<br> 2、当外层容器宽度小于<code>scroll-width</code>值时，将会出现横向滚动条；当外层容器宽度大于<code>scroll-width</code>值时，将会跟随容器自适应；当<code>scroll-width=0</code>时，滚动条将根据你的列宽度决定<br> 3、列宽可以不设置、或者设置为百分比、或者为像素值（px）<br> 4、设置了<code>scroll-width</code>属性，列宽单位<strong>强烈建议保持一致！</strong><br></p></div>',1),E=[x];function A(i,e){return p(),h("section",F,E)}const D=_(b,[["render",A]]),C={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:i,openBlock:e,createBlock:d}=k;return function(u,m){const n=i("ve-table");return e(),d(n,{style:{width:"900px"},"scroll-width":1200,"border-y":"",columns:u.columns,"table-data":u.tableData},null,8,["columns","table-data"])}}(),...function(){return{data(){return{columns:[{field:"col1",key:"a",title:"Title1",fixed:"left"},{field:"col2",key:"b",title:"Title2",fixed:"left"},{field:"col3",key:"c",title:"Title3"},{field:"col4",key:"d",title:"Title4"},{field:"col5",key:"e",title:"Title5"},{field:"col6",key:"f",title:"Title6"},{field:"col7",key:"g",title:"Title7"},{field:"col8",key:"h",title:"Title8"},{field:"col9",key:"i",title:"Title9"},{field:"col10",key:"j",title:"Title10"}],tableData:[{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"}]}}}}()}}},$={class:"content example-md-doc"},g=l("div",null,[l("p",null,[o("1、通过"),l("code",null,'scroll-width="1200"'),o("设置滚动区域宽度，通过"),l("code",null,'style="width:900px"'),o("设置外层容器宽度"),l("br"),o("2、通过"),l("code",null,'fixed:"left"'),o("设置需要固定的左列")])],-1),w=l("pre",null,[l("code",{class:"html"},`<template>
    <ve-table
        style="width:900px"
        :scroll-width="1200"
        border-y
        :columns="columns"
        :table-data="tableData"
    />
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    { field: "col1", key: "a", title: "Title1", fixed: "left" },
                    { field: "col2", key: "b", title: "Title2", fixed: "left" },
                    { field: "col3", key: "c", title: "Title3" },
                    { field: "col4", key: "d", title: "Title4" },
                    { field: "col5", key: "e", title: "Title5" },
                    { field: "col6", key: "f", title: "Title6" },
                    { field: "col7", key: "g", title: "Title7" },
                    { field: "col8", key: "h", title: "Title8" },
                    { field: "col9", key: "i", title: "Title9" },
                    { field: "col10", key: "j", title: "Title10" },
                ],
                tableData: [
                    {
                        col1: "1",
                        col2: "2",
                        col3: "3",
                        col4: "4",
                        col5: "5",
                        col6: "6",
                        col7: "7",
                        col8: "8",
                        col9: "9",
                        col10: "10",
                    },
                    {
                        col1: "1",
                        col2: "2",
                        col3: "3",
                        col4: "4",
                        col5: "5",
                        col6: "6",
                        col7: "7",
                        col8: "8",
                        col9: "9",
                        col10: "10",
                    },
                    {
                        col1: "1",
                        col2: "2",
                        col3: "3",
                        col4: "4",
                        col5: "5",
                        col6: "6",
                        col7: "7",
                        col8: "8",
                        col9: "9",
                        col10: "10",
                    },
                    {
                        col1: "1",
                        col2: "2",
                        col3: "3",
                        col4: "4",
                        col5: "5",
                        col6: "6",
                        col7: "7",
                        col8: "8",
                        col9: "9",
                        col10: "10",
                    },
                    {
                        col1: "1",
                        col2: "2",
                        col3: "3",
                        col4: "4",
                        col5: "5",
                        col6: "6",
                        col7: "7",
                        col8: "8",
                        col9: "9",
                        col10: "10",
                    },
                ],
            };
        },
    };
<\/script>
`)],-1);function v(i,e,d,f,u,m){const n=c("anchor"),s=c("element-demo0"),r=c("demo-block");return p(),h("section",$,[t(n,{"is-edit":"",label:"左列固定",fileName:"column-fixed-left.md"}),t(r,null,{source:a(()=>[t(s)]),highlight:a(()=>[w]),default:a(()=>[g]),_:1})])}const N=_(C,[["render",v]]),j={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:i,openBlock:e,createBlock:d}=k;return function(u,m){const n=i("ve-table");return e(),d(n,{style:{width:"900px"},"scroll-width":1200,"border-y":"",columns:u.columns,"table-data":u.tableData},null,8,["columns","table-data"])}}(),...function(){return{data(){return{columns:[{field:"col1",key:"a",title:"Title1"},{field:"col2",key:"b",title:"Title2"},{field:"col3",key:"c",title:"Title3"},{field:"col4",key:"d",title:"Title4"},{field:"col5",key:"e",title:"Title5"},{field:"col6",key:"f",title:"Title6"},{field:"col7",key:"g",title:"Title7"},{field:"col8",key:"h",title:"Title8"},{field:"col9",key:"i",title:"Title9",fixed:"right"},{field:"col10",key:"j",title:"Title10",fixed:"right"}],tableData:[{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"}]}}}}()}}},K={class:"content example-md-doc"},L=l("div",null,[l("p",null,[o("1、通过"),l("code",null,'scroll-width="1200"'),o("设置滚动区域宽度，通过"),l("code",null,'style="width:900px"'),o("设置外层容器宽度"),l("br"),o("2、通过"),l("code",null,'fixed:"right"'),o("设置需要固定的右列")])],-1),R=l("pre",null,[l("code",{class:"html"},`<template>
    <ve-table
        style="width:900px"
        :scroll-width="1200"
        border-y
        :columns="columns"
        :table-data="tableData"
    />
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    { field: "col1", key: "a", title: "Title1" },
                    { field: "col2", key: "b", title: "Title2" },
                    { field: "col3", key: "c", title: "Title3" },
                    { field: "col4", key: "d", title: "Title4" },
                    { field: "col5", key: "e", title: "Title5" },
                    { field: "col6", key: "f", title: "Title6" },
                    { field: "col7", key: "g", title: "Title7" },
                    { field: "col8", key: "h", title: "Title8" },
                    {
                        field: "col9",
                        key: "i",
                        title: "Title9",
                        fixed: "right",
                    },
                    {
                        field: "col10",
                        key: "j",
                        title: "Title10",
                        fixed: "right",
                    },
                ],
                tableData: [
                    {
                        col1: "1",
                        col2: "2",
                        col3: "3",
                        col4: "4",
                        col5: "5",
                        col6: "6",
                        col7: "7",
                        col8: "8",
                        col9: "9",
                        col10: "10",
                    },
                    {
                        col1: "1",
                        col2: "2",
                        col3: "3",
                        col4: "4",
                        col5: "5",
                        col6: "6",
                        col7: "7",
                        col8: "8",
                        col9: "9",
                        col10: "10",
                    },
                    {
                        col1: "1",
                        col2: "2",
                        col3: "3",
                        col4: "4",
                        col5: "5",
                        col6: "6",
                        col7: "7",
                        col8: "8",
                        col9: "9",
                        col10: "10",
                    },
                    {
                        col1: "1",
                        col2: "2",
                        col3: "3",
                        col4: "4",
                        col5: "5",
                        col6: "6",
                        col7: "7",
                        col8: "8",
                        col9: "9",
                        col10: "10",
                    },
                    {
                        col1: "1",
                        col2: "2",
                        col3: "3",
                        col4: "4",
                        col5: "5",
                        col6: "6",
                        col7: "7",
                        col8: "8",
                        col9: "9",
                        col10: "10",
                    },
                ],
            };
        },
    };
<\/script>
`)],-1);function V(i,e,d,f,u,m){const n=c("anchor"),s=c("element-demo0"),r=c("demo-block");return p(),h("section",K,[t(n,{"is-edit":"",label:"右列固定",fileName:"column-fixed-right.md"}),t(r,null,{source:a(()=>[t(s)]),highlight:a(()=>[R]),default:a(()=>[L]),_:1})])}const W=_(j,[["render",V]]),M={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:i,openBlock:e,createBlock:d}=k;return function(u,m){const n=i("ve-table");return e(),d(n,{style:{width:"900px"},"scroll-width":1200,"border-y":"",columns:u.columns,"table-data":u.tableData},null,8,["columns","table-data"])}}(),...function(){return{data(){return{columns:[{field:"col1",key:"a",title:"Title1",fixed:"left"},{field:"col2",key:"b",title:"Title2",fixed:"left"},{field:"col3",key:"c",title:"Title3"},{field:"col4",key:"d",title:"Title4"},{field:"col5",key:"e",title:"Title5"},{field:"col6",key:"f",title:"Title6"},{field:"col7",key:"g",title:"Title7"},{field:"col8",key:"h",title:"Title8"},{field:"col9",key:"i",title:"Title9",fixed:"right"},{field:"col10",key:"j",title:"Title10",fixed:"right"}],tableData:[{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"}]}}}}()}}},S={class:"content example-md-doc"},q=l("div",null,[l("p",null,[o("1、通过"),l("code",null,'scroll-width="1200"'),o("设置滚动区域宽度，通过"),l("code",null,'style="width:900px"'),o("设置外层容器宽度"),l("br"),o("2、通过"),l("code",null,'fixed:"left"'),o("设置需要固定的左列;通过"),l("code",null,'fixed:"right"'),o("设置需要固定的右列")])],-1),z=l("pre",null,[l("code",{class:"html"},`<template>
    <ve-table
        style="width:900px"
        :scroll-width="1200"
        border-y
        :columns="columns"
        :table-data="tableData"
    />
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    { field: "col1", key: "a", title: "Title1", fixed: "left" },
                    { field: "col2", key: "b", title: "Title2", fixed: "left" },
                    { field: "col3", key: "c", title: "Title3" },
                    { field: "col4", key: "d", title: "Title4" },
                    { field: "col5", key: "e", title: "Title5" },
                    { field: "col6", key: "f", title: "Title6" },
                    { field: "col7", key: "g", title: "Title7" },
                    { field: "col8", key: "h", title: "Title8" },
                    {
                        field: "col9",
                        key: "i",
                        title: "Title9",
                        fixed: "right",
                    },
                    {
                        field: "col10",
                        key: "j",
                        title: "Title10",
                        fixed: "right",
                    },
                ],
                tableData: [
                    {
                        col1: "1",
                        col2: "2",
                        col3: "3",
                        col4: "4",
                        col5: "5",
                        col6: "6",
                        col7: "7",
                        col8: "8",
                        col9: "9",
                        col10: "10",
                    },
                    {
                        col1: "1",
                        col2: "2",
                        col3: "3",
                        col4: "4",
                        col5: "5",
                        col6: "6",
                        col7: "7",
                        col8: "8",
                        col9: "9",
                        col10: "10",
                    },
                    {
                        col1: "1",
                        col2: "2",
                        col3: "3",
                        col4: "4",
                        col5: "5",
                        col6: "6",
                        col7: "7",
                        col8: "8",
                        col9: "9",
                        col10: "10",
                    },
                    {
                        col1: "1",
                        col2: "2",
                        col3: "3",
                        col4: "4",
                        col5: "5",
                        col6: "6",
                        col7: "7",
                        col8: "8",
                        col9: "9",
                        col10: "10",
                    },
                    {
                        col1: "1",
                        col2: "2",
                        col3: "3",
                        col4: "4",
                        col5: "5",
                        col6: "6",
                        col7: "7",
                        col8: "8",
                        col9: "9",
                        col10: "10",
                    },
                ],
            };
        },
    };
<\/script>
`)],-1);function G(i,e,d,f,u,m){const n=c("anchor"),s=c("element-demo0"),r=c("demo-block");return p(),h("section",S,[t(n,{"is-edit":"",label:"左右列固定",fileName:"column-fixed-left-right.md"}),t(r,null,{source:a(()=>[t(s)]),highlight:a(()=>[z]),default:a(()=>[q]),_:1})])}const H=_(M,[["render",G]]),I={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:i,openBlock:e,createBlock:d}=k;return function(u,m){const n=i("ve-table");return e(),d(n,{"scroll-width":1600,"border-y":"",columns:u.columns,"table-data":u.tableData,rowKeyFieldName:"rowKey"},null,8,["columns","table-data"])}}(),...function(){return{data(){return{columns:[{field:"col1",key:"a",title:"Title1",fixed:"left"},{field:"col2",key:"b",title:"Title2",fixed:"left"},{field:"col3",key:"c",title:"Title3"},{field:"col4",key:"d",title:"Title4"},{field:"col5",key:"e",title:"Title5"},{field:"col6",key:"f",title:"Title6"},{field:"col7",key:"g",title:"Title7"},{field:"col8",key:"h",title:"Title8"},{field:"col9",key:"i",title:"Title9",fixed:"right"},{field:"col10",key:"j",title:"Title10",fixed:"right"}]}},methods:{initTableData(){let i=[];for(let e=0;e<10;e++)i.push({rowKey:e,col1:e,col2:e,col3:e,col4:e,col5:e,col6:e,col7:e,col8:e,col9:e,col10:e});this.tableData=i}},created(){this.initTableData()}}}()}}},J={class:"content example-md-doc"},O=l("div",null,[l("p",null,[o("1、通过"),l("code",null,'scroll-width="1600"'),o("设置滚动区域宽度"),l("br"),o("2、不设置外层容器宽度。等同于设置"),l("code",null,'style="width:100%"'),l("br"),o("3、改变浏览器宽度试试看。当容器宽度小于"),l("code",null,"scroll-width"),o("时，出滚动条；大于"),l("code",null,"scroll-width"),o("时，将会跟随容器自适应")])],-1),P=l("pre",null,[l("code",{class:"html"},`<template>
    <ve-table
        :scroll-width="1600"
        border-y
        :columns="columns"
        :table-data="tableData"
        rowKeyFieldName="rowKey"
    />
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    { field: "col1", key: "a", title: "Title1", fixed: "left" },
                    { field: "col2", key: "b", title: "Title2", fixed: "left" },
                    { field: "col3", key: "c", title: "Title3" },
                    { field: "col4", key: "d", title: "Title4" },
                    { field: "col5", key: "e", title: "Title5" },
                    { field: "col6", key: "f", title: "Title6" },
                    { field: "col7", key: "g", title: "Title7" },
                    { field: "col8", key: "h", title: "Title8" },
                    {
                        field: "col9",
                        key: "i",
                        title: "Title9",
                        fixed: "right",
                    },
                    {
                        field: "col10",
                        key: "j",
                        title: "Title10",
                        fixed: "right",
                    },
                ],
            };
        },
        methods: {
            initTableData() {
                let data = [];
                for (let i = 0; i < 10; i++) {
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
                        col9: i,
                        col10: i,
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
`)],-1);function Q(i,e,d,f,u,m){const n=c("anchor"),s=c("element-demo0"),r=c("demo-block");return p(),h("section",J,[t(n,{"is-edit":"",label:"‘容器自适应’列固定",fileName:"column-fixed-auto-width.md"}),t(r,null,{source:a(()=>[t(s)]),highlight:a(()=>[P]),default:a(()=>[O]),_:1})])}const U=_(I,[["render",Q]]),X={name:"BasicMain",components:{Explain:D,ColumnFixedLeft:N,ColumnFixedRight:W,ColumnFixedLeftRight:H,ColumnFixedAutoWidth:U}},Y=l("h2",null,"列固定",-1);function Z(i,e,d,f,u,m){const n=c("Explain"),s=c("ColumnFixedLeft"),r=c("ColumnFixedRight"),y=c("ColumnFixedLeftRight"),B=c("ColumnFixedAutoWidth");return p(),h("div",null,[Y,t(n),t(s),t(r),t(y),t(B)])}const ol=_(X,[["render",Z]]);export{ol as default};
