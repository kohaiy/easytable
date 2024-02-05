import{_ as a,r as t,o,c as d,a as s,m as e,p as c}from"./index-xJshVBOS.js";const l={},r={class:"content example-md-doc"},i=e("p",null,[c("引入 "),e("code",null,"VeTable")],-1),u=e("pre",null,[e("code",{class:"language-javascript"},`import Vue from "vue";
import { VeTable } from "vue-easytable";

Vue.use(VeTable);
`)],-1),m=e("p",null,"使用",-1),p=e("pre",null,[e("code",{class:"language-html"},`<script>
export default {
  data() {
    return {
      columns: [
        { field: 'name', key: 'a', title: 'Name', align: 'center' },
        { field: 'date', key: 'b', title: 'Date', align: 'left' },
        { field: 'hobby', key: 'c', title: 'Hobby', align: 'right' },
        { field: 'address', key: 'd', title: 'Address', align: 'left' }
      ],
      tableData: [
        {
          name: 'John',
          date: '1900-05-20',
          hobby: 'coding and coding repeat',
          address: 'No.1 Century Avenue, Shanghai',
        },
        {
          name: 'Dickerson',
          date: '1910-06-20',
          hobby: 'coding and coding repeat',
          address: 'No.1 Century Avenue, Beijing',
        },
        {
          name: 'Larsen',
          date: '2000-07-20',
          hobby: 'coding and coding repeat',
          address: 'No.1 Century Avenue, Chongqing',
        },
        {
          name: 'Geneva',
          date: '2010-08-20',
          hobby: 'coding and coding repeat',
          address: 'No.1 Century Avenue, Xiamen',
        },
        {
          name: 'Jami',
          date: '2020-09-20',
          hobby: 'coding and coding repeat',
          address: 'No.1 Century Avenue, Shenzhen',
        },
      ],
    }
  },
}
<\/script>

<template>
  <ve-table :columns="columns" :table-data="tableData" />
</template>
`)],-1);function b(g,h){const n=t("anchor");return o(),d("section",r,[s(n,{label:"用法"}),i,u,m,p])}const y=a(l,[["render",b]]);export{y as default};
