import{C as E}from"./custom-cell-WfnTdLQI.js";import{V as C}from"./vue.runtime.esm-bundler-GrE_vstH.js";import{a as o,p as u,_ as b,r,o as p,c as y,w as i,m as e}from"./index-LkC73w2Y.js";const f={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:n,openBlock:t,createBlock:a}=C;return function(d,h){const l=n("ve-table");return t(),a(l,{style:{width:"100%"},"border-y":"",columns:d.columns,"table-data":d.tableData},null,8,["columns","table-data"])}}(),...function(){return{data(){return{columns:[{field:"",key:"a",title:"#",align:"center",renderBodyCell:({row:n,column:t,rowIndex:a},s)=>o("span",{class:"text-bold",style:"color:#1890ff;"},[++a])},{field:"date",key:"b",title:"Date",align:"center"},{field:"hobby",key:"c",title:"Hobby",align:"left",renderBodyCell:({row:n,column:t,rowIndex:a},s)=>{const d=n[t.field];return o("span",null,[o("a",{class:"test-text",href:"http://github.com",style:"color:#1890ff;cursor:pointer;"},[d]),u(" are my hobbies")])}},{field:"address",key:"d",title:"Address",width:"",align:"left",renderBodyCell:({row:n,column:t,rowIndex:a},s)=>{const d=n[t.field];return o("input",{style:"width:100%",value:d},null)}},{field:"",key:"e",title:"Action",width:"",center:"left",renderBodyCell:({row:n,column:t,rowIndex:a},s)=>o("span",null,[o("button",{class:"button-demo",onClick:()=>this.editRow(a)},[u("Edit")]),u(" "),o("button",{class:"button-demo",onClick:()=>this.deleteRow(a)},[u("Delete")])])}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{editRow(n){alert(`eidt row number:${n}`)},deleteRow(n){this.tableData.splice(n,1)}}}}()}}},w={class:"content example-md-doc"},_=e("div",null,[e("p",null,[u("1、"),e("code",null,"column"),u("配置中，支持通过属性 "),e("code",null,"renderBodyCell({row,column,rowIndex},h)"),u("传入渲染函数，此处为 jsx 语法,书写和模板语法接近。更多 jsx 知识请参考"),e("a",{href:"https://vuejs.org/v2/guide/render-function.html#JSX"},"Vue.js 考官方文档"),e("br"),u("2、渲染函数接收三个参数，"),e("code",null,"row"),u(":当前行数据、"),e("code",null,"column"),u(":当前列配置、"),e("code",null,"rowIndex"),u(":行索引")])],-1),F=e("pre",null,[e("code",{class:"html"},`<template>
    <ve-table style="width:100%" border-y :columns="columns" :table-data="tableData" />
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        field: "",
                        key: "a",
                        title: "#",
                        align: "center",
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return (
                                <span class="text-bold" style="color:#1890ff;">
                                    {++rowIndex}
                                </span>
                            );
                        },
                    },
                    {
                        field: "date",
                        key: "b",
                        title: "Date",
                        align: "center",
                    },
                    {
                        field: "hobby",
                        key: "c",
                        title: "Hobby",
                        align: "left",
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            const text = row[column.field];
                            return (
                                <span>
                                    <a
                                        class="test-text"
                                        href="http://github.com"
                                        style="color:#1890ff;cursor:pointer;"
                                    >
                                        {text}
                                    </a>
                                    &nbsp;are my hobbies
                                </span>
                            );
                        },
                    },
                    {
                        field: "address",
                        key: "d",
                        title: "Address",
                        width: "",
                        align: "left",
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            const text = row[column.field];
                            return <input style="width:100%" value={text}></input>;
                        },
                    },
                    {
                        field: "",
                        key: "e",
                        title: "Action",
                        width: "",
                        center: "left",
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return (
                                <span>
                                    <button
                                        class="button-demo"
                                        onClick={() => this.editRow(rowIndex)}
                                    >
                                        Edit
                                    </button>
                                    &nbsp;
                                    <button
                                        class="button-demo"
                                        onClick={() => this.deleteRow(rowIndex)}
                                    >
                                        Delete
                                    </button>
                                </span>
                            );
                        },
                    },
                ],
                tableData: [
                    {
                        name: "John",
                        date: "1900-05-20",
                        hobby: "coding",
                        address: "No.1 Century Avenue, Shanghai",
                    },
                    {
                        name: "Dickerson",
                        date: "1910-06-20",
                        hobby: "coding",
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
        methods: {
            editRow(rowIndex) {
                alert(\`eidt row number:\${rowIndex}\`);
            },
            deleteRow(rowIndex) {
                this.tableData.splice(rowIndex, 1);
            },
        },
    };
<\/script>

<style>
    .text-bold {
        font-weight: bold;
    }
</style>
`)],-1);function A(n,t,a,s,d,h){const l=r("anchor"),c=r("element-demo0"),m=r("demo-block");return p(),y("section",w,[o(l,{"is-edit":"",label:"body 自定义单元格",fileName:"body-cell.md"}),o(m,null,{source:i(()=>[o(c)]),highlight:i(()=>[F]),default:i(()=>[_]),_:1})])}const B=b(f,[["render",A]]),v={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:n,openBlock:t,createBlock:a}=C;return function(d,h){const l=n("ve-table");return t(),a(l,{style:{width:"100%"},"border-y":"",columns:d.columns,"table-data":d.tableData.filter(c=>!d.searchText||c.name.toLowerCase().includes(d.searchText.toLowerCase()))},null,8,["columns","table-data"])}}(),...function(){return{data(){return{columns:[{field:"name",key:"a",title:"Name",width:200,align:"center",renderHeaderCell:({column:n},t)=>o("input",{value:this.searchText,onInput:this.searchInputChange,style:"width:90%",placeholder:"请输入名称关键字"},null)},{field:"date",key:"b",title:"Date",width:200,align:"center",renderHeaderCell:({column:n},t)=>o("span",{class:"text-bold",style:"color:#1890ff;"},[n.title])},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}],searchText:""}},methods:{searchInputChange(n){this.searchText=n.target.value}}}}()}}},x={class:"content example-md-doc"},D=e("div",null,[e("p",null,[u("1、"),e("code",null,"column"),u("配置中，支持通过属性 "),e("code",null,"renderHeaderCell"),u("传入渲染函数，与 body 自定义单元格用法一致。"),e("code",null,"renderHeaderCell"),u("在表头分组中一样适用"),e("br"),u("2、渲染函数接收一个参数，"),e("code",null,"column"),u(":当前列配置")])],-1),k=e("pre",null,[e("code",{class:"html"},`<template>
    <ve-table
        style="width:100%"
        border-y
        :columns="columns"
        :table-data="tableData.filter(item=>!searchText || item.name.toLowerCase().includes(searchText.toLowerCase()))"
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
                        title: "Name",
                        width: 200,
                        align: "center",
                        renderHeaderCell: ({ column }, h) => {
                            return (
                                <input
                                    // jsx 不能直接使用 v-model。此处为 jsx 实现 v-model，了解更多查看官方文档
                                    value={this.searchText}
                                    onInput={this.searchInputChange}
                                    style="width:90%"
                                    placeholder="请输入名称关键字"
                                />
                            );
                        },
                    },
                    {
                        field: "date",
                        key: "b",
                        title: "Date",
                        width: 200,
                        align: "center",
                        renderHeaderCell: ({ column }, h) => {
                            return (
                                <span class="text-bold" style="color:#1890ff;">
                                    {column.title}
                                </span>
                            );
                        },
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
                        name: "John",
                        date: "1900-05-20",
                        hobby: "coding",
                        address: "No.1 Century Avenue, Shanghai",
                    },
                    {
                        name: "Dickerson",
                        date: "1910-06-20",
                        hobby: "coding",
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
                // 搜索
                searchText: "",
            };
        },
        methods: {
            // search input change event
            searchInputChange(e) {
                this.searchText = e.target.value;
            },
        },
    };
<\/script>

<style>
    .text-bold {
        font-weight: bold;
    }
</style>
`)],-1);function N(n,t,a,s,d,h){const l=r("anchor"),c=r("element-demo0"),m=r("demo-block");return p(),y("section",x,[o(l,{"is-edit":"",label:"header 自定义单元格",fileName:"header-cell.md"}),o(m,null,{source:i(()=>[o(c)]),highlight:i(()=>[k]),default:i(()=>[D]),_:1})])}const $=b(v,[["render",N]]),I={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:n,openBlock:t,createBlock:a}=C;return function(d,h){const l=n("ve-table");return t(),a(l,{style:{width:"100%"},"border-y":"",columns:d.columns,"table-data":d.tableData},null,8,["columns","table-data"])}}(),...function(){const n={name:"OtherComp",template:`
        <div class="other-comp">
            <span style="color:#1890ff;">row index: {{rowIndex}}</span>
        </div>
    `,props:{row:Object,column:Object,rowIndex:Number}};return{data(){return{columns:[{field:"",key:"a",title:"Row Number",width:200,align:"center",renderBodyCell:({row:t,column:a,rowIndex:s},d)=>o(n,{row:t,column:a,rowIndex:s},null)},{field:"date",key:"b",title:"Date",width:200,align:"center"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{editRow(t){alert(`eidt row number:${t}`)},deleteRow(t){this.tableData.splice(t,1)}}}}()}}},j={class:"content example-md-doc"},H=e("div",{class:"tip"},[e("p",null,[u("1、 当然你也可以通过外部组件自定义单元格内容，此示例是在组件内部定义了一个"),e("code",null,"OtherComp"),u("组件，你也可以通过 "),e("code",null,"import"),u("关键字导入一个组件作为自定义组件"),e("br"),u(" 2、 "),e("code",null,"renderBodyCell"),u("、"),e("code",null,"renderHeaderCell"),u("等一样适用"),e("br")])],-1),R=e("div",null,[e("p",null,"通过外部组件自定义")],-1),J=e("pre",null,[e("code",{class:"html"},`<template>
    <ve-table style="width:100%" border-y :columns="columns" :table-data="tableData" />
</template>

<script>
    // 此示例是在组件内部定义了一个子组件。你当然也可以通过 \`import\`关键字导入一个组件
    const OtherComp = {
        name: "OtherComp",
        template: \`
        <div class="other-comp">
            <span style="color:#1890ff;">row index: {{rowIndex}}</span>
        </div>
    \`,
        props: {
            row: Object,
            column: Object,
            rowIndex: Number,
        },
    };

    export default {
        data() {
            return {
                columns: [
                    {
                        field: "",
                        key: "a",
                        title: "Row Number",
                        width: 200,
                        align: "center",
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return <OtherComp row={row} column={column} rowIndex={rowIndex} />;
                        },
                    },
                    {
                        field: "date",
                        key: "b",
                        title: "Date",
                        width: 200,
                        align: "center",
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
                        name: "John",
                        date: "1900-05-20",
                        hobby: "coding",
                        address: "No.1 Century Avenue, Shanghai",
                    },
                    {
                        name: "Dickerson",
                        date: "1910-06-20",
                        hobby: "coding",
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
        methods: {
            editRow(rowIndex) {
                alert(\`eidt row number:\${rowIndex}\`);
            },
            deleteRow(rowIndex) {
                this.tableData.splice(rowIndex, 1);
            },
        },
    };
<\/script>

<style>
    .text-bold {
        font-weight: bold;
    }
</style>
`)],-1);function S(n,t,a,s,d,h){const l=r("anchor"),c=r("element-demo0"),m=r("demo-block");return p(),y("section",j,[o(l,{"is-edit":"",label:"通过外部组件自定义",fileName:"more.md"}),H,o(m,null,{source:i(()=>[o(c)]),highlight:i(()=>[J]),default:i(()=>[R]),_:1})])}const T=b(I,[["render",S]]),L={name:"CustomCell",components:{BodyCell:B,HeaderCell:$,FooterCell:E,More:T}},O=e("h2",null,"自定义列",-1);function X(n,t,a,s,d,h){const l=r("BodyCell"),c=r("HeaderCell"),m=r("FooterCell"),g=r("More");return p(),y("div",null,[O,o(l),o(c),o(m),o(g)])}const V=b(L,[["render",X]]);export{V as default};
