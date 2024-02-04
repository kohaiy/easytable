import{_ as u,o as m,c as y,h as l,i as g,r as c,a as d,w as h}from"./index-xkG6_mZq.js";import{V as _}from"./vue.runtime.esm-bundler-KVmUbhes.js";const f={},C={class:"content example-md-doc"},S=l("div",{class:"tip"},[l("p",null,[g("1、表格组件和分页组件是分开的"),l("br"),g(" 2、下面的示例为模拟数据，通常分页都是要结合后端服务的"),l("br"),g(" 3、数据量很大，但又不想使用分页，你也可以使用虚拟滚动"),l("br")])],-1),K=[S];function k(t,e){return m(),y("section",C,K)}const D=u(f,[["render",k]]),R={name:"component-doc",components:{"element-demo0":{render:function(){const{resolveComponent:t,createVNode:e,createElementVNode:n,openBlock:o,createElementBlock:s}=_,p={class:"table-pagination"};return function(i,a){const w=t("ve-table"),b=t("ve-pagination");return o(),s("div",null,[e(w,{columns:i.columns,"table-data":i.tableData},null,8,["columns","table-data"]),n("div",p,[e(b,{total:i.totalCount,"page-index":i.pageIndex,"page-size":i.pageSize,onOnPageNumberChange:i.pageNumberChange,onOnPageSizeChange:i.pageSizeChange},null,8,["total","page-index","page-size","onOnPageNumberChange","onOnPageSizeChange"])])])}}(),...function(){let t=[];return{data(){return{pageIndex:1,pageSize:10,columns:[{field:"",key:"a",title:"#",align:"center",renderBodyCell:({row:e,column:n,rowIndex:o},s)=>(this.pageIndex-1)*this.pageSize+o+1},{field:"name",key:"b",title:"Name",align:"center"},{field:"date",key:"c",title:"Date",align:"left"},{field:"hobby",key:"d",title:"Hobby",align:"left"},{field:"address",key:"e",title:"Address",width:""}]}},computed:{tableData(){const{pageIndex:e,pageSize:n}=this;return t.slice((e-1)*n,e*n)},totalCount(){return t.length}},methods:{pageNumberChange(e){this.pageIndex=e},pageSizeChange(e){this.pageIndex=1,this.pageSize=e},initDatabase(){t=[];for(let e=0;e<1e3;e++)t.push({name:"John"+e,date:"1900-05-20",hobby:"coding and coding repeat"+e,address:"No.1 Century Avenue, Shanghai"+e})}},created(){this.initDatabase()}}}()}}},z={class:"content example-md-doc"},A=l("pre",null,[l("code",{class:"html"},`<template>
    <div>
        <ve-table :columns="columns" :table-data="tableData" />
        <div class="table-pagination">
            <ve-pagination
                :total="totalCount"
                :page-index="pageIndex"
                :page-size="pageSize"
                @on-page-number-change="pageNumberChange"
                @on-page-size-change="pageSizeChange"
            />
        </div>
    </div>
</template>

<style>
    .table-pagination {
        margin-top: 20px;
        text-align: right;
    }
</style>

<script>
    // Simulation table data from database
    let DB_DATA = [];

    export default {
        data() {
            return {
                // page index
                pageIndex: 1,
                // page size
                pageSize: 10,
                columns: [
                    {
                        field: "",
                        key: "a",
                        title: "#",
                        align: "center",
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return (this.pageIndex - 1) * this.pageSize + rowIndex + 1;
                        },
                    },
                    { field: "name", key: "b", title: "Name", align: "center" },
                    { field: "date", key: "c", title: "Date", align: "left" },
                    { field: "hobby", key: "d", title: "Hobby", align: "left" },
                    { field: "address", key: "e", title: "Address", width: "" },
                ],
            };
        },
        computed: {
            // table data
            tableData() {
                const { pageIndex, pageSize } = this;
                return DB_DATA.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);
            },
            // total count
            totalCount() {
                return DB_DATA.length;
            },
        },
        methods: {
            // page number change
            pageNumberChange(pageIndex) {
                this.pageIndex = pageIndex;
            },

            // page size change
            pageSizeChange(pageSize) {
                this.pageIndex = 1;
                this.pageSize = pageSize;
            },

            // Simulation table data
            initDatabase() {
                DB_DATA = [];
                for (let i = 0; i < 1000; i++) {
                    DB_DATA.push({
                        name: "John" + i,
                        date: "1900-05-20",
                        hobby: "coding and coding repeat" + i,
                        address: "No.1 Century Avenue, Shanghai" + i,
                    });
                }
            },
        },
        created() {
            this.initDatabase();
        },
    };
<\/script>
`)],-1);function v(t,e,n,o,s,p){const r=c("anchor"),i=c("element-demo0"),a=c("demo-block");return m(),y("section",z,[d(r,{"is-edit":"",label:"示例",fileName:"basic.md"}),d(a,null,{source:h(()=>[d(i)]),highlight:h(()=>[A]),_:1})])}const B=u(R,[["render",v]]),I={name:"component-doc",components:{"element-demo0":{render:function(){const{toDisplayString:t,createElementVNode:e,resolveComponent:n,createVNode:o,openBlock:s,createElementBlock:p}=_,r={class:"table-pagination"};return function(a,w){const b=n("ve-table"),x=n("ve-pagination");return s(),p("div",null,[e("div",null,"当前选中的行key："+t(a.selectedRowKeysCollection),1),o(b,{columns:a.columns,"table-data":a.currentPageData,"checkbox-option":a.checkboxOption,"row-key-field-name":"rowKey"},null,8,["columns","table-data","checkbox-option"]),e("div",r,[o(x,{total:a.totalCount,"page-index":a.pageIndex,"page-size":a.pageSize,onOnPageNumberChange:a.pageNumberChange,onOnPageSizeChange:a.pageSizeChange},null,8,["total","page-index","page-size","onOnPageNumberChange","onOnPageSizeChange"])])])}}(),...function(){let t=[];return{data(){return{pageIndex:1,pageSize:10,selectedRowKeysCollection:[],checkboxOption:{selectedRowKeys:[],selectedRowChange:({row:e,isSelected:n,selectedRowKeys:o})=>{this.changeSelectedRowKeys(e,n)},selectedAllChange:({isSelected:e,selectedRowKeys:n})=>{this.changeSelectAll(e,n)}},columns:[{field:"",key:"a",title:"#",align:"center",renderBodyCell:({row:e,column:n,rowIndex:o},s)=>(this.pageIndex-1)*this.pageSize+o+1},{field:"",key:"checkbox",type:"checkbox",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",align:"center"},{field:"date",key:"c",title:"Date",align:"left"},{field:"hobby",key:"d",title:"Hobby",align:"left"},{field:"address",key:"e",title:"Address",width:""}]}},computed:{currentPageData(){const{pageIndex:e,pageSize:n}=this;return t.slice((e-1)*n,e*n)},totalCount(){return t.length}},methods:{changeSelectedRowKeys(e,n){const o=e.rowKey;if(n)this.checkboxOption.selectedRowKeys.push(o),this.selectedRowKeysCollection.push(o);else{const s=this.checkboxOption.selectedRowKeys.indexOf(o);this.checkboxOption.selectedRowKeys.splice(s,1),this.selectedRowKeysCollection.splice(s,1)}},changeSelectAll(e,n){this.checkboxOption.selectedRowKeys=n,e?this.selectedRowKeysCollection=this.selectedRowKeysCollection.concat(n):this.currentPageData.forEach(o=>{selectedRowKeysCollection.indexOf(o.rowKey)>-1&&this.selectedRowKeysCollection.splice(index,1)})},resetSelectedRowKeys(){this.checkboxOption.selectedRowKeys=[];const e=this.selectedRowKeysCollection;e.length&&this.currentPageData.forEach(n=>{e.indexOf(n.rowKey)>-1&&this.checkboxOption.selectedRowKeys.push(n.rowKey)})},pageNumberChange(e){this.pageIndex=e,this.resetSelectedRowKeys()},pageSizeChange(e){this.pageIndex=1,this.pageSize=e,this.resetSelectedRowKeys()},initDatabase(){t=[];for(let e=0;e<1e3;e++)t.push({rowKey:e,name:"John"+e,date:"1900-05-20",hobby:"coding and coding repeat"+e,address:"No.1 Century Avenue, Shanghai"+e})}},created(){this.initDatabase()}}}()}}},N={class:"content example-md-doc"},O=l("div",null,[l("p",null,[g("此示例多选逻辑可以参考 "),l("a",{href:"https://mail.google.com/"},"mail.google.com")])],-1),E=l("pre",null,[l("code",{class:"html"},`<template>
    <div>
        <div>当前选中的行key：{{selectedRowKeysCollection}}</div>
        <ve-table
            :columns="columns"
            :table-data="currentPageData"
            :checkbox-option="checkboxOption"
            row-key-field-name="rowKey"
        />
        <div class="table-pagination">
            <ve-pagination
                :total="totalCount"
                :page-index="pageIndex"
                :page-size="pageSize"
                @on-page-number-change="pageNumberChange"
                @on-page-size-change="pageSizeChange"
            />
        </div>
    </div>
</template>

<style>
    .table-pagination {
        margin-top: 20px;
        text-align: right;
    }
</style>

<script>
    // Simulation table data from database
    let DB_DATA = [];

    export default {
        data() {
            return {
                // page index
                pageIndex: 1,
                // page size
                pageSize: 10,
                // selected row keys collection
                selectedRowKeysCollection: [],
                // checkbox option
                checkboxOption: {
                    // 可控属性
                    selectedRowKeys: [],
                    // 行选择改变事件
                    selectedRowChange: ({ row, isSelected, selectedRowKeys }) => {
                        this.changeSelectedRowKeys(row, isSelected);
                    },
                    // 全选改变事件
                    selectedAllChange: ({ isSelected, selectedRowKeys }) => {
                        this.changeSelectAll(isSelected, selectedRowKeys);
                    },
                },
                columns: [
                    {
                        field: "",
                        key: "a",
                        title: "#",
                        align: "center",
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return (this.pageIndex - 1) * this.pageSize + rowIndex + 1;
                        },
                    },
                    {
                        field: "",
                        key: "checkbox",
                        // type=checkbox
                        type: "checkbox",
                        title: "",
                        width: 50,
                        align: "center",
                    },

                    { field: "name", key: "b", title: "Name", align: "center" },
                    { field: "date", key: "c", title: "Date", align: "left" },
                    { field: "hobby", key: "d", title: "Hobby", align: "left" },
                    { field: "address", key: "e", title: "Address", width: "" },
                ],
            };
        },
        computed: {
            // table data
            currentPageData() {
                const { pageIndex, pageSize } = this;
                return DB_DATA.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);
            },
            // total count
            totalCount() {
                return DB_DATA.length;
            },
        },
        methods: {
            // selected rowKeys change
            changeSelectedRowKeys(row, isSelected) {
                const rowKey = row.rowKey;

                if (isSelected) {
                    this.checkboxOption.selectedRowKeys.push(rowKey);
                    this.selectedRowKeysCollection.push(rowKey);
                } else {
                    const index = this.checkboxOption.selectedRowKeys.indexOf(rowKey);
                    this.checkboxOption.selectedRowKeys.splice(index, 1);
                    this.selectedRowKeysCollection.splice(index, 1);
                }
            },

            // select all change
            changeSelectAll(isSelected, selectedRowKeys) {
                this.checkboxOption.selectedRowKeys = selectedRowKeys;

                if (isSelected) {
                    this.selectedRowKeysCollection =
                        this.selectedRowKeysCollection.concat(selectedRowKeys);
                } else {
                    this.currentPageData.forEach((item) => {
                        if (selectedRowKeysCollection.indexOf(item.rowKey) > -1) {
                            this.selectedRowKeysCollection.splice(index, 1);
                        }
                    });
                }
            },

            // reset selectedRowKeys
            resetSelectedRowKeys() {
                this.checkboxOption.selectedRowKeys = [];

                const selectedRowKeysCollection = this.selectedRowKeysCollection;

                if (selectedRowKeysCollection.length) {
                    this.currentPageData.forEach((item) => {
                        if (selectedRowKeysCollection.indexOf(item.rowKey) > -1) {
                            this.checkboxOption.selectedRowKeys.push(item.rowKey);
                        }
                    });
                }
            },

            // page number change
            pageNumberChange(pageIndex) {
                this.pageIndex = pageIndex;
                this.resetSelectedRowKeys();
            },

            // page size change
            pageSizeChange(pageSize) {
                this.pageIndex = 1;
                this.pageSize = pageSize;
                this.resetSelectedRowKeys();
            },

            // Simulation table data
            initDatabase() {
                DB_DATA = [];
                for (let i = 0; i < 1000; i++) {
                    DB_DATA.push({
                        rowKey: i,
                        name: "John" + i,
                        date: "1900-05-20",
                        hobby: "coding and coding repeat" + i,
                        address: "No.1 Century Avenue, Shanghai" + i,
                    });
                }
            },
        },
        created() {
            this.initDatabase();
        },
    };
<\/script>
`)],-1);function $(t,e,n,o,s,p){const r=c("anchor"),i=c("element-demo0"),a=c("demo-block");return m(),y("section",N,[d(r,{"is-edit":"",label:"结合行多选",fileName:"checkbox.md"}),d(a,null,{source:h(()=>[d(i)]),highlight:h(()=>[E]),default:h(()=>[O]),_:1})])}const P=u(I,[["render",$]]),T={name:"BasicMain",components:{Explain:D,Basic:B,Checkbox:P}},V=l("h2",null,"结合分页",-1);function F(t,e,n,o,s,p){const r=c("Explain"),i=c("Basic"),a=c("Checkbox");return m(),y("div",null,[V,d(r),d(i),d(a)])}const M=u(T,[["render",F]]);export{M as default};
