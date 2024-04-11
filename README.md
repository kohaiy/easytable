[![npm](https://img.shields.io/npm/v/@easytable/vue.svg)](https://www.npmjs.com/package/@easytable/vue)
[![vue3.2](https://img.shields.io/badge/vue-3.2+-brightgreen.svg)](https://vuejs.org/)
[![NPM downloads](https://img.shields.io/npm/dm/@easytable/vue.svg?style=flat)](https://npmjs.org/package/@easytable/vue)
[![license](https://img.shields.io/npm/l/@easytable/vue.svg?maxAge=2592000)](http://www.opensource.org/licenses/mit-license.php)

# @easytable/vue

> [!WARNING]
> 本仓库迁移自 [vue-easytable](https://github.com/huangshuwei/vue-easytable) Vue.js 2.x ，基于 Vue.js 3.x 重构中，目前基本完成。

[English](./README-EN.md) | **中文**

## 介绍

一个强大的 vue3.x 表格组件。你可以将它用做数据表、微软 excel 或者 goole sheet. 支持虚拟滚动、单元格编辑等功能。

> [!IMPORTANT]
> 如果您正在使用 Vue2.x ，请使用 [vue-easytable](https://github.com/huangshuwei/vue-easytable) 组件库。

## 特点

-   采用虚拟滚动技术，支持 30 万行数据展示
-   永久免费。当然你也可以选择捐赠

## API & 文档

-   [官方文档](https://easytable.kohai.top/)
-   [官方文档 (GitHub Pages)](https://kohaiy.github.io/easytable/)

## 功能支持

**基础组件**

-   [x] [Loading 加载组件](https://easytable.kohai.top/#/zh/doc/base/loading)
-   [x] [Pagination 分页组件](https://easytable.kohai.top/#/zh/doc/base/pagination)
-   [x] [Contextmenu 右键菜单组件](https://easytable.kohai.top/#/zh/doc/base/contextmenu)
-   [x] [Icon 图标组件](https://easytable.kohai.top/#/zh/doc/base/icon)
-   [x] [Locale 国际化组件](https://easytable.kohai.top/#/zh/doc/base/locale)

**Table 组件**

-   [x] [国际化](https://easytable.kohai.top/#/zh/doc/locale)
-   [x] [主题定制 & 内置主题](https://easytable.kohai.top/#/zh/doc/theme)
-   [x] [虚拟滚动](https://easytable.kohai.top/#/zh/doc/table/virtual-scroll)
-   [x] [列固定](https://easytable.kohai.top/#/zh/doc/table/column-fixed)
-   [x] [列隐藏](https://easytable.kohai.top/#/zh/doc/table/column-hidden)
-   [x] [表头固定](https://easytable.kohai.top/#/zh/doc/table/header-fixed)
-   [x] [表头分组](https://easytable.kohai.top/#/zh/doc/table/header-grouping)
-   [x] [筛选](https://easytable.kohai.top/#/zh/doc/table/header-filter)
-   [x] [排序](https://easytable.kohai.top/#/zh/doc/table/header-sort)
-   [x] [列宽拖动](https://happy-coding-clans.github.io/vue-easytable/#/zh/doc/table/column-resize)
-   [x] [单元格样式](https://easytable.kohai.top/#/zh/doc/table/cell-style)
-   [x] [单元格自定义](https://easytable.kohai.top/#/zh/doc/table/cell-custom)
-   [x] [单元格合并](https://easytable.kohai.top/#/zh/doc/table/cell-span)
-   [x] [单元格选择（键盘操作）](https://easytable.kohai.top/#/zh/doc/table/cell-selection)
-   [x] [单元格自动填充](https://easytable.kohai.top/#/zh/doc/table/cell-autofill)
-   [x] [单元格编辑](https://easytable.kohai.top/#/zh/doc/table/cell-edit)
-   [x] [剪贴板](https://easytable.kohai.top/#/zh/doc/table/clipboard)
-   [x] [右键菜单](https://easytable.kohai.top/#/zh/doc/table/contextmenu)
-   [x] [单元格省略](https://easytable.kohai.top/#/zh/doc/table/cell-ellipsis)
-   [x] [行单选](https://easytable.kohai.top/#/zh/doc/table/row-radio)
-   [x] [行多选](https://easytable.kohai.top/#/zh/doc/table/row-checkbox)
-   [x] [行展开](https://easytable.kohai.top/#/zh/doc/table/row-expand)
-   [x] [行样式](https://easytable.kohai.top/#/zh/doc/table/row-style)
-   [x] [footer 汇总](https://easytable.kohai.top/#/zh/doc/table/footer-summary)
-   [x] [自定义事件](https://easytable.kohai.top/#/zh/doc/table/event-custom)
-   [更多](https://easytable.kohai.top)

如果没有你想要的的功能
，[请告诉我们](http://happy-coding-clans.github.io/issue-template-generater/#/zh)

## 安装

```sh
pnpm install @easytable/vue
```

or

```sh
yarn add @easytable/vue
```

## 使用

Write the following in main.js:

```javascript
import { createApp } from 'vue';
import '@easytable/vue/libs/theme-default/index.css';
import { useVeTable } from '@easytable/vue';

createApp({
  render: (h) => h(App),
})
.use(useVeTable())
.mount('#app');
```

Example:

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
          { field: "hobby", key: "c", title: "Hobby", align: "right" },
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
</script>
```

## 开发计划

[正在做的事情](https://github.com/kohaiy/easytable/projects)

## 支持环境

-   现代浏览器和 IE11 及以上

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE11, Edge                                                                                                                                                                                                      | last 2 versions                                                                                                                                                                                                   | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                           |

## 如何贡献

如果你希望参与贡献，欢迎
[Pull Request](https://github.com/kohaiy/easytable/pulls)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=kohaiy/easytable&type=Date)](https://star-history.com/#kohaiy/easytable&Date)

## 贡献者们

感谢原组件库作者 [huangshuwei](https://github.com/huangshuwei)

同时感谢以下小伙伴们做出的贡献 🙏

<a href="https://github.com/kohaiy/easytable/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=kohaiy/easytable" />
</a>

## License

http://www.opensource.org/licenses/mit-license.php
