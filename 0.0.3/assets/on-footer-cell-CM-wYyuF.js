import{V as b}from"./vue.runtime.esm-bundler-AG1yb8Xo.js";import{_ as h,r,o as f,c as p,a as d,w as c,m}from"./index-oTVSIYj-.js";const y={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:n,createVNode:e,createTextVNode:t,openBlock:o,createElementBlock:i}=b;return function(a,s){const l=n("ve-table");return o(),i("div",null,[t(" 打开F12 查看 console 信息 "),e(l,{"border-y":"","fixed-header":"","max-height":300,columns:a.columns,"table-data":a.tableData,"footer-data":a.footerData,rowKeyFieldName:"rowKey","event-custom-option":a.eventCustomOption},null,8,["columns","table-data","footer-data","event-custom-option"])])}}(),...function(){return{data(){return{eventCustomOption:{footerRowEvents:({row:n,rowIndex:e})=>({click:t=>{console.log("click::",n,e,t)},dblclick:t=>{console.log("dblclick::",n,e,t)},contextmenu:t=>{console.log("contextmenu::",n,e,t)},mouseenter:t=>{console.log("mouseenter::",n,e,t)},mouseleave:t=>{console.log("mouseleave::",n,e,t)}})},columns:[{field:"",key:"a",title:"",width:50,align:"center",renderBodyCell:({row:n,column:e,rowIndex:t},o)=>++t},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},methods:{initTableData(){let n=[];for(let e=0;e<15;e++)n.push({rowKey:e,name:e,date:e,hobby:e,address:e});this.tableData=n},initFooterData(){this.footerData=[{rowKey:0,name:"平均值",date:213,hobby:355,address:189},{rowKey:1,name:"汇总值",date:1780,hobby:890,address:2988}]}},created(){this.initTableData(),this.initFooterData()}}}()}}},v={class:"content example-md-doc"},w=m("pre",null,[m("code",{class:"html"},`<template>
    <div>
        打开F12 查看 console 信息
        <ve-table
            border-y
            fixed-header
            :max-height="300"
            :columns="columns"
            :table-data="tableData"
            :footer-data="footerData"
            rowKeyFieldName="rowKey"
            :event-custom-option="eventCustomOption"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                eventCustomOption: {
                    footerRowEvents: ({ row, rowIndex }) => {
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
                tableData: [],
            };
        },
        methods: {
            initTableData() {
                let data = [];
                for (let i = 0; i < 15; i++) {
                    data.push({
                        rowKey: i,
                        name: i,
                        date: i,
                        hobby: i,
                        address: i,
                    });
                }
                this.tableData = data;
            },

            initFooterData() {
                this.footerData = [
                    {
                        rowKey: 0,
                        name: "平均值",
                        date: 213,
                        hobby: 355,
                        address: 189,
                    },
                    {
                        rowKey: 1,
                        name: "汇总值",
                        date: 1780,
                        hobby: 890,
                        address: 2988,
                    },
                ];
            },
        },
        created() {
            this.initTableData();
            this.initFooterData();
        },
    };
<\/script>
`)],-1);function _(n,e,t,o,i,u){const a=r("anchor"),s=r("element-demo0"),l=r("demo-block");return f(),p("section",v,[d(a,{"is-edit":"",label:"footer 行事件自定义",fileName:"on-footer-row.md"}),d(l,null,{source:c(()=>[d(s)]),highlight:c(()=>[w]),_:1})])}const B=h(y,[["render",_]]),k={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:n,createVNode:e,createTextVNode:t,openBlock:o,createElementBlock:i}=b;return function(a,s){const l=n("ve-table");return o(),i("div",null,[t(" 打开F12 查看 console 信息 "),e(l,{"border-y":"","fixed-header":"","max-height":300,columns:a.columns,"table-data":a.tableData,"footer-data":a.footerData,rowKeyFieldName:"rowKey","event-custom-option":a.eventCustomOption},null,8,["columns","table-data","footer-data","event-custom-option"])])}}(),...function(){return{data(){return{eventCustomOption:{footerCellEvents:({row:n,column:e,rowIndex:t})=>({click:o=>{console.log("click::",n,e,t,o)},dblclick:o=>{console.log("dblclick::",n,e,t,o)},contextmenu:o=>{console.log("contextmenu::",n,e,t,o)},mouseenter:o=>{console.log("mouseenter::",n,e,t,o)},mouseleave:o=>{console.log("mouseleave::",n,e,t,o)}})},columns:[{field:"",key:"a",title:"",width:50,align:"center",renderBodyCell:({row:n,column:e,rowIndex:t},o)=>++t},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},methods:{initTableData(){let n=[];for(let e=0;e<15;e++)n.push({rowKey:e,name:e,date:e,hobby:e,address:e});this.tableData=n},initFooterData(){this.footerData=[{rowKey:0,name:"平均值",date:213,hobby:355,address:189},{rowKey:1,name:"汇总值",date:1780,hobby:890,address:2988}]}},created(){this.initTableData(),this.initFooterData()}}}()}}},g={class:"content example-md-doc"},D=m("pre",null,[m("code",{class:"html"},`<template>
    <div>
        打开F12 查看 console 信息
        <ve-table
            border-y
            fixed-header
            :max-height="300"
            :columns="columns"
            :table-data="tableData"
            :footer-data="footerData"
            rowKeyFieldName="rowKey"
            :event-custom-option="eventCustomOption"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                eventCustomOption: {
                    footerCellEvents: ({ row, column, rowIndex }) => {
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
                tableData: [],
            };
        },
        methods: {
            initTableData() {
                let data = [];
                for (let i = 0; i < 15; i++) {
                    data.push({
                        rowKey: i,
                        name: i,
                        date: i,
                        hobby: i,
                        address: i,
                    });
                }
                this.tableData = data;
            },

            initFooterData() {
                this.footerData = [
                    {
                        rowKey: 0,
                        name: "平均值",
                        date: 213,
                        hobby: 355,
                        address: 189,
                    },
                    {
                        rowKey: 1,
                        name: "汇总值",
                        date: 1780,
                        hobby: 890,
                        address: 2988,
                    },
                ];
            },
        },
        created() {
            this.initTableData();
            this.initFooterData();
        },
    };
<\/script>
`)],-1);function x(n,e,t,o,i,u){const a=r("anchor"),s=r("element-demo0"),l=r("demo-block");return f(),p("section",g,[d(a,{"is-edit":"",label:"footer 列事件自定义",fileName:"on-footer-cell.md"}),d(l,null,{source:c(()=>[d(s)]),highlight:c(()=>[D]),_:1})])}const E=h(k,[["render",x]]);export{B as O,E as a};
