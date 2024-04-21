import{O as f,a as C}from"./on-footer-cell-TSQrwUzc.js";import{E as N}from"./event-custom-option-props-XtXAK6_6.js";import{_ as v,o as g,c as b,g as x,r as d,a,w as m,m as i}from"./index-lRrbso5P.js";import{V as h}from"./vue.runtime.esm-bundler-PK1gl5UO.js";import"./api-tpl-ctqOjaE3.js";const A={},B={class:"content example-md-doc"},E=x(`<div class="tip"><p>1、<code>eventCustomOption</code> 配置自定义事件<br> 2、支持 body、header、footer 行和列 事件自定义<br> 3、支持以下事件自定义</p><ul><li>click</li><li>dblclick</li><li>contextmen</li><li>mouseenter</li><li>mouseleave</li><li>mousemove</li><li>mouseover</li><li>mousedown</li><li>mouseup</li></ul></div><p>配置代码速览</p><pre><code>eventCustomOption: {
  // body 行事件自定义
  bodyRowEvents: ({ row, rowIndex }) =&gt; {
    return {
      click: (event) =&gt; {},
      dblclick: (event) =&gt; {},
      contextmenu: (event) =&gt; {},
      mouseenter: (event) =&gt; {},
      mouseleave: (event) =&gt; {},
      mousemove: (event) =&gt; {},
      mouseover: (event) =&gt; {},
      mousedown: (event) =&gt; {},
      mouseup: (event) =&gt; {},
    };
  },
  // body 列事件自定义
  bodyCellEvents: ({ row,column,rowIndx }) =&gt; {
    return {
      click: (event) =&gt; {},
      dblclick: (event) =&gt; {},
      contextmenu: (event) =&gt; {},
      mouseenter: (event) =&gt; {},
      mouseleave: (event) =&gt; {},
      mousemove: (event) =&gt; {},
      mouseover: (event) =&gt; {},
      mousedown: (event) =&gt; {},
      mouseup: (event) =&gt; {},
    };
  },
  // header 行事件自定义
  headerRowEvents: ({ rowIndx }) =&gt; {
    return {
      click: (event) =&gt; {},
      dblclick: (event) =&gt; {},
      contextmenu: (event) =&gt; {},
      mouseenter: (event) =&gt; {},
      mouseleave: (event) =&gt; {},
      mousemove: (event) =&gt; {},
      mouseover: (event) =&gt; {},
      mousedown: (event) =&gt; {},
      mouseup: (event) =&gt; {},
    };
  },
  // header 列事件自定义
  headerCellEvents: ({ column,rowIndx }) =&gt; {
    return {
      click: (event) =&gt; {},
      dblclick: (event) =&gt; {},
      contextmenu: (event) =&gt; {},
      mouseenter: (event) =&gt; {},
      mouseleave: (event) =&gt; {},
      mousemove: (event) =&gt; {},
      mouseover: (event) =&gt; {},
      mousedown: (event) =&gt; {},
      mouseup: (event) =&gt; {},
    };
  },
  // footer 行事件自定义
  footerRowEvents: ({ row, rowIndex }) =&gt; {
    return {
      click: (event) =&gt; {},
      dblclick: (event) =&gt; {},
      contextmenu: (event) =&gt; {},
      mouseenter: (event) =&gt; {},
      mouseleave: (event) =&gt; {},
      mousemove: (event) =&gt; {},
      mouseover: (event) =&gt; {},
      mousedown: (event) =&gt; {},
      mouseup: (event) =&gt; {},
    };
  },
  // footer 列事件自定义
  footerCellEvents: ({ row,column,rowIndx }) =&gt; {
    return {
      click: (event) =&gt; {},
      dblclick: (event) =&gt; {},
      contextmenu: (event) =&gt; {},
      mouseenter: (event) =&gt; {},
      mouseleave: (event) =&gt; {},
      mousemove: (event) =&gt; {},
      mouseover: (event) =&gt; {},
      mousedown: (event) =&gt; {},
      mouseup: (event) =&gt; {},
    };
  },
},
</code></pre>`,3),K=[E];function O(o,n){return g(),b("section",B,K)}const $=v(A,[["render",O]]),F={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:o,createVNode:n,createTextVNode:e,openBlock:t,createElementBlock:s}=h;return function(l,r){const c=o("ve-table");return t(),s("div",null,[e(" 打开F12 查看 console 信息 "),n(c,{columns:l.columns,"table-data":l.tableData,"event-custom-option":l.eventCustomOption},null,8,["columns","table-data","event-custom-option"])])}}(),...function(){return{data(){return{eventCustomOption:{bodyRowEvents:({row:o,rowIndex:n})=>({click:e=>{console.log("click::",o,n,e)},dblclick:e=>{console.log("dblclick::",o,n,e)},contextmenu:e=>{console.log("contextmenu::",o,n,e)},mouseenter:e=>{console.log("mouseenter::",o,n,e)},mouseleave:e=>{console.log("mouseleave::",o,n,e)}})},columns:[{field:"",key:"a",title:"",width:50,align:"center",renderBodyCell:({row:o,column:n,rowIndex:e},t)=>++e},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},I={class:"content example-md-doc"},D=i("pre",null,[i("code",{class:"html"},`<template>
    <div>
        打开F12 查看 console 信息
        <ve-table
            :columns="columns"
            :table-data="tableData"
            :event-custom-option="eventCustomOption"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                eventCustomOption: {
                    bodyRowEvents: ({ row, rowIndex }) => {
                        return {
                            click: (event) => {
                                console.log("click::", row, rowIndex, event);
                            },
                            dblclick: (event) => {
                                console.log("dblclick::", row, rowIndex, event);
                            },
                            contextmenu: (event) => {
                                console.log("contextmenu::", row, rowIndex, event);
                            },
                            mouseenter: (event) => {
                                console.log("mouseenter::", row, rowIndex, event);
                            },
                            mouseleave: (event) => {
                                console.log("mouseleave::", row, rowIndex, event);
                            },
                        };
                    },
                },
                columns: [
                    {
                        field: "",
                        key: "a",
                        title: "",
                        width: 50,
                        align: "center",
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return ++rowIndex;
                        },
                    },
                    {
                        field: "name",
                        key: "b",
                        title: "Name",
                        width: 200,
                        align: "left",
                    },
                    {
                        field: "hobby",
                        key: "c",
                        title: "Hobby",
                        width: 300,
                        align: "left",
                    },
                    {
                        field: "address",
                        key: "d",
                        title: "Address",
                        width: "",
                        align: "left",
                    },
                ],
                tableData: [
                    {
                        rowKey: 1001,
                        name: "John",
                        date: "1900-05-20",
                        hobby: "coding",
                        address: "No.1 Century Avenue, Shanghai",
                    },
                    {
                        rowKey: 1002,
                        name: "Dickerson",
                        date: "1910-06-20",
                        hobby: "coding",
                        address: "No.1 Century Avenue, Beijing",
                    },
                    {
                        rowKey: 1003,
                        name: "Larsen",
                        date: "2000-07-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Chongqing",
                    },
                    {
                        rowKey: 1004,
                        name: "Geneva",
                        date: "2010-08-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Xiamen",
                    },
                    {
                        rowKey: 1005,
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
`)],-1);function V(o,n,e,t,s,u){const l=d("anchor"),r=d("element-demo0"),c=d("demo-block");return g(),b("section",I,[a(l,{"is-edit":"",label:"body 行事件自定义",fileName:"on-body-row.md"}),a(c,null,{source:m(()=>[a(r)]),highlight:m(()=>[D]),_:1})])}const S=v(F,[["render",V]]),J={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:o,createVNode:n,createTextVNode:e,openBlock:t,createElementBlock:s}=h;return function(l,r){const c=o("ve-table");return t(),s("div",null,[e(" 打开F12 查看 console 信息 "),n(c,{columns:l.columns,"table-data":l.tableData,"event-custom-option":l.eventCustomOption},null,8,["columns","table-data","event-custom-option"])])}}(),...function(){return{data(){return{eventCustomOption:{bodyCellEvents:({row:o,column:n,rowIndex:e})=>({click:t=>{console.log("click::",o,n,e,t)},dblclick:t=>{console.log("dblclick::",o,n,e,t)},contextmenu:t=>{console.log("contextmenu::",o,n,e,t)},mouseenter:t=>{console.log("mouseenter::",o,n,e,t)},mouseleave:t=>{console.log("mouseleave::",o,n,e,t)}})},columns:[{field:"",key:"a",title:"",width:50,align:"center",renderBodyCell:({row:o,column:n,rowIndex:e},t)=>++e},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},R={class:"content example-md-doc"},H=i("pre",null,[i("code",{class:"html"},`<template>
    <div>
        打开F12 查看 console 信息
        <ve-table
            :columns="columns"
            :table-data="tableData"
            :event-custom-option="eventCustomOption"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                eventCustomOption: {
                    bodyCellEvents: ({ row, column, rowIndex }) => {
                        return {
                            click: (event) => {
                                console.log("click::", row, column, rowIndex, event);
                            },
                            dblclick: (event) => {
                                console.log("dblclick::", row, column, rowIndex, event);
                            },
                            contextmenu: (event) => {
                                console.log("contextmenu::", row, column, rowIndex, event);
                            },
                            mouseenter: (event) => {
                                console.log("mouseenter::", row, column, rowIndex, event);
                            },
                            mouseleave: (event) => {
                                console.log("mouseleave::", row, column, rowIndex, event);
                            },
                        };
                    },
                },

                columns: [
                    {
                        field: "",
                        key: "a",
                        title: "",
                        width: 50,
                        align: "center",
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return ++rowIndex;
                        },
                    },
                    {
                        field: "name",
                        key: "b",
                        title: "Name",
                        width: 200,
                        align: "left",
                    },
                    {
                        field: "hobby",
                        key: "c",
                        title: "Hobby",
                        width: 300,
                        align: "left",
                    },
                    {
                        field: "address",
                        key: "d",
                        title: "Address",
                        width: "",
                        align: "left",
                    },
                ],
                tableData: [
                    {
                        rowKey: 1001,
                        name: "John",
                        date: "1900-05-20",
                        hobby: "coding",
                        address: "No.1 Century Avenue, Shanghai",
                    },
                    {
                        rowKey: 1002,
                        name: "Dickerson",
                        date: "1910-06-20",
                        hobby: "coding",
                        address: "No.1 Century Avenue, Beijing",
                    },
                    {
                        rowKey: 1003,
                        name: "Larsen",
                        date: "2000-07-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Chongqing",
                    },
                    {
                        rowKey: 1004,
                        name: "Geneva",
                        date: "2010-08-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Xiamen",
                    },
                    {
                        rowKey: 1005,
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
`)],-1);function j(o,n,e,t,s,u){const l=d("anchor"),r=d("element-demo0"),c=d("demo-block");return g(),b("section",R,[a(l,{"is-edit":"",label:"body 列事件自定义",fileName:"on-body-cell.md"}),a(c,null,{source:m(()=>[a(r)]),highlight:m(()=>[H]),_:1})])}const q=v(J,[["render",j]]),z={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:o,createVNode:n,createTextVNode:e,openBlock:t,createElementBlock:s}=h;return function(l,r){const c=o("ve-table");return t(),s("div",null,[e(" 打开F12 查看 console 信息 "),n(c,{columns:l.columns,"table-data":l.tableData,"event-custom-option":l.eventCustomOption},null,8,["columns","table-data","event-custom-option"])])}}(),...function(){return{data(){return{eventCustomOption:{headerRowEvents:({rowIndex:o})=>({click:n=>{console.log("click::",o,n)},dblclick:n=>{console.log("dblclick::",o,n)},contextmenu:n=>{console.log("contextmenu::",o,n)},mouseenter:n=>{console.log("mouseenter::",o,n)},mouseleave:n=>{console.log("mouseleave::",o,n)}})},columns:[{field:"",key:"a",title:"",width:50,align:"center",renderBodyCell:({row:o,column:n,rowIndex:e},t)=>++e},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},G={class:"content example-md-doc"},L=i("pre",null,[i("code",{class:"html"},`<template>
    <div>
        打开F12 查看 console 信息
        <ve-table
            :columns="columns"
            :table-data="tableData"
            :event-custom-option="eventCustomOption"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                eventCustomOption: {
                    headerRowEvents: ({ rowIndex }) => {
                        return {
                            click: (event) => {
                                console.log("click::", rowIndex, event);
                            },
                            dblclick: (event) => {
                                console.log("dblclick::", rowIndex, event);
                            },
                            contextmenu: (event) => {
                                console.log("contextmenu::", rowIndex, event);
                            },
                            mouseenter: (event) => {
                                console.log("mouseenter::", rowIndex, event);
                            },
                            mouseleave: (event) => {
                                console.log("mouseleave::", rowIndex, event);
                            },
                        };
                    },
                },
                columns: [
                    {
                        field: "",
                        key: "a",
                        title: "",
                        width: 50,
                        align: "center",
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return ++rowIndex;
                        },
                    },
                    {
                        field: "name",
                        key: "b",
                        title: "Name",
                        width: 200,
                        align: "left",
                    },
                    {
                        field: "hobby",
                        key: "c",
                        title: "Hobby",
                        width: 300,
                        align: "left",
                    },
                    {
                        field: "address",
                        key: "d",
                        title: "Address",
                        width: "",
                        align: "left",
                    },
                ],
                tableData: [
                    {
                        rowKey: 1001,
                        name: "John",
                        date: "1900-05-20",
                        hobby: "coding",
                        address: "No.1 Century Avenue, Shanghai",
                    },
                    {
                        rowKey: 1002,
                        name: "Dickerson",
                        date: "1910-06-20",
                        hobby: "coding",
                        address: "No.1 Century Avenue, Beijing",
                    },
                    {
                        rowKey: 1003,
                        name: "Larsen",
                        date: "2000-07-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Chongqing",
                    },
                    {
                        rowKey: 1004,
                        name: "Geneva",
                        date: "2010-08-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Xiamen",
                    },
                    {
                        rowKey: 1005,
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
`)],-1);function T(o,n,e,t,s,u){const l=d("anchor"),r=d("element-demo0"),c=d("demo-block");return g(),b("section",G,[a(l,{"is-edit":"",label:"header 行事件自定义",fileName:"on-header-row.md"}),a(c,null,{source:m(()=>[a(r)]),highlight:m(()=>[L]),_:1})])}const X=v(z,[["render",T]]),P={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:o,createVNode:n,createTextVNode:e,openBlock:t,createElementBlock:s}=h;return function(l,r){const c=o("ve-table");return t(),s("div",null,[e(" 打开F12 查看 console 信息 "),n(c,{columns:l.columns,"table-data":l.tableData,"event-custom-option":l.eventCustomOption},null,8,["columns","table-data","event-custom-option"])])}}(),...function(){return{data(){return{eventCustomOption:{headerCellEvents:({column:o,rowIndex:n})=>({click:e=>{console.log("click::",o,n,e)},dblclick:e=>{console.log("dblclick::",o,n,e)},contextmenu:e=>{console.log("contextmenu::",o,n,e)},mouseenter:e=>{console.log("mouseenter::",o,n,e)},mouseleave:e=>{console.log("mouseleave::",o,n,e)}})},columns:[{field:"",key:"a",title:"",width:50,align:"center",renderBodyCell:({row:o,column:n,rowIndex:e},t)=>++e},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}}}()}}},M={class:"content example-md-doc"},Q=i("pre",null,[i("code",{class:"html"},`<template>
    <div>
        打开F12 查看 console 信息
        <ve-table
            :columns="columns"
            :table-data="tableData"
            :event-custom-option="eventCustomOption"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                eventCustomOption: {
                    headerCellEvents: ({ column, rowIndex }) => {
                        return {
                            click: (event) => {
                                console.log("click::", column, rowIndex, event);
                            },
                            dblclick: (event) => {
                                console.log("dblclick::", column, rowIndex, event);
                            },
                            contextmenu: (event) => {
                                console.log("contextmenu::", column, rowIndex, event);
                            },
                            mouseenter: (event) => {
                                console.log("mouseenter::", column, rowIndex, event);
                            },
                            mouseleave: (event) => {
                                console.log("mouseleave::", column, rowIndex, event);
                            },
                        };
                    },
                },
                columns: [
                    {
                        field: "",
                        key: "a",
                        title: "",
                        width: 50,
                        align: "center",
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return ++rowIndex;
                        },
                    },
                    {
                        field: "name",
                        key: "b",
                        title: "Name",
                        width: 200,
                        align: "left",
                    },
                    {
                        field: "hobby",
                        key: "c",
                        title: "Hobby",
                        width: 300,
                        align: "left",
                    },
                    {
                        field: "address",
                        key: "d",
                        title: "Address",
                        width: "",
                        align: "left",
                    },
                ],
                tableData: [
                    {
                        rowKey: 1001,
                        name: "John",
                        date: "1900-05-20",
                        hobby: "coding",
                        address: "No.1 Century Avenue, Shanghai",
                    },
                    {
                        rowKey: 1002,
                        name: "Dickerson",
                        date: "1910-06-20",
                        hobby: "coding",
                        address: "No.1 Century Avenue, Beijing",
                    },
                    {
                        rowKey: 1003,
                        name: "Larsen",
                        date: "2000-07-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Chongqing",
                    },
                    {
                        rowKey: 1004,
                        name: "Geneva",
                        date: "2010-08-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Xiamen",
                    },
                    {
                        rowKey: 1005,
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
`)],-1);function U(o,n,e,t,s,u){const l=d("anchor"),r=d("element-demo0"),c=d("demo-block");return g(),b("section",M,[a(l,{"is-edit":"",label:"header 列事件自定义",fileName:"on-header-cell.md"}),a(c,null,{source:m(()=>[a(r)]),highlight:m(()=>[Q]),_:1})])}const W=v(P,[["render",U]]),Y={name:"EventCustom",components:{Explain:$,OnBodyRow:S,OnBodyCell:q,OnHeaderRow:X,OnHeaderCell:W,OnFooterRow:f,OnFooterCell:C,API:N}},Z=i("h2",null,"事件自定义",-1);function ee(o,n,e,t,s,u){const l=d("Explain"),r=d("OnBodyRow"),c=d("OnBodyCell"),y=d("OnHeaderRow"),p=d("OnHeaderCell"),_=d("OnFooterRow"),w=d("OnFooterCell"),k=d("API");return g(),b("div",null,[Z,a(l),a(r),a(c),a(y),a(p),a(_),a(w),a(k,{title:"API",anchor:"API",desc:"eventCustomOption 事件自定义配置"})])}const ae=v(Y,[["render",ee]]);export{ae as default};
