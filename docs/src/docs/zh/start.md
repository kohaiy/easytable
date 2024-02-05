## 快速开始

:::anchor npm & yarn 安装

```bash
npm install @easytable/vue
```

或者

```bash
pnpm add @easytable/vue
```

或者

```bash
yarn add @easytable/vue
```

:::anchor 使用

#### 完整引入

在 main.js 中写入以下内容：

```javascript
import { createApp } from "vue";
// 引入样式
import "@easytable/vue/libs/theme-default/index.css";
// 引入组件库
import { useVeTable } from "@easytable/vue";

createApp({
  render: (h) => h(App),
})
.use(useVeTable())
.mount('#app')
```

以上代码便完成了 @easytable/vue 的引入。别忘了引入样式文件。

#### 按需引入

在 main.js 中写入以下内容：

```javascript
import { createApp } from "vue";
// 引入样式
import "@easytable/vue/libs/theme-default/index.css";
// 引入组件库
import { VeTable, VePagination, VeIcon, VeLoading, VeLocale } from "@easytable/vue";

Vue.use(VeTable);
Vue.use(VePagination);
Vue.use(VeIcon);
Vue.use(VeLoading);

Vue.prototype.$veLoading = VeLoading;
Vue.prototype.$veLocale = VeLocale;

new Vue({
    el: "#app",
    render: (h) => h(App),
});
```

#### 示例

:::demo

```html
<template>
    <ve-table :columns="columns" :table-data="tableData" />
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    { field: "name", key: "a", title: "Name", align: "center" },
                    { field: "date", key: "b", title: "Date", align: "left" },
                    {
                        field: "hobby",
                        key: "c",
                        title: "Hobby",
                        align: "right",
                    },
                    {
                        field: "address",
                        key: "d",
                        title: "Address",
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
</script>
```

:::

:::anchor CDN 方式使用

通过 [https://unpkg.com/@easytable/vue/](https://unpkg.com/@easytable/vue/) 可以看到 @easytable/vue 最新版本的资源，也可以切换版本选择需要的资源，在页面上引入 js 和 css 文件即可开始使用：

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/@easytable/vue/libs/theme-default/index.css">
<!-- 引入Vue -->
<script src="https://cdn.jsdelivr.net/npm/vue@3"></script>
<!-- 引入组件库 -->
<script src="https://unpkg.com/@easytable/vue/libs/umd/index.js"></script>
```

#### 示例

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <!-- 引入样式 -->
        <link
            rel="stylesheet"
            href="https://unpkg.com/@easytable/vue/libs/theme-default/index.css"
        />
    </head>
    <body>
        <div id="app">
            <ve-table :columns="columns" :table-data="tableData"></ve-table>
        </div>
    </body>
    <!-- 引入 Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue@3"></script>
    <!-- 引入组件库 -->
    <script src="https://unpkg.com/@easytable/vue/libs/umd/easytable-vue.js"></script>
    <script>
        const { createApp } = Vue
        const { useVeTable } = EasytableVue

        createApp({
            data: function () {
                return {
                    columns: [
                        {
                            field: "name",
                            key: "a",
                            title: "Name",
                            align: "center",
                        },
                        {
                            field: "date",
                            key: "b",
                            title: "Date",
                            align: "left",
                        },
                        {
                            field: "hobby",
                            key: "c",
                            title: "Hobby",
                            align: "right",
                        },
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
        })
        .use(useVeTable())
        .mount("#app");
    </script>
</html>
```

:::anchor 浏览器兼容
默认支持现代浏览器和 IE11 及以上
