# @easytable/vue

> [!IMPORTANT]
> 本仓库迁移自 [vue-easytable](https://github.com/huangshuwei/vue-easytable) Vue.js 2.x ，基于 Vue.js 3.x 重构中……

## Introduction

A powerful data table based on vue2.x You can use it as data grid、Microsoft Excel or Google sheets. It supports virtual scroll、cell edit etc.

## Characteristics

-   Support 300000 rows of data display through virtual scroll
-   Free forever. Of course, you can also choose to donate

## API & Examples

-   [Official documents (Github)](http://happy-coding-clans.github.io/vue-easytable/)
-   [Official documents (China)](http://huangshuwei.gitee.io/vue-easytable/)

## Features

**Base components**

-   [x] [Loading component](https://happy-coding-clans.github.io/vue-easytable/#/en/doc/base/loading)
-   [ ] [Pagination component](https://happy-coding-clans.github.io/vue-easytable/#/en/doc/base/pagination)
-   [ ] [Contextmenu component](https://happy-coding-clans.github.io/vue-easytable/#/en/doc/base/contextmenu)
-   [x] [Icon component](https://happy-coding-clans.github.io/vue-easytable/#/en/doc/base/icon)
-   [ ] [Locale component](https://happy-coding-clans.github.io/vue-easytable/#/en/doc/base/locale)

**Table component**

-   [ ] [Internationalization](http://happy-coding-clans.github.io/vue-easytable/#/en/doc/locale)
-   [ ] [Theme Custom & Built in theme](http://happy-coding-clans.github.io/vue-easytable/#/en/doc/theme)
-   [ ] [Virtual Scroll](http://happy-coding-clans.github.io/vue-easytable/#/en/doc/table/virtual-scroll)
-   [ ] [Column Fixed](http://happy-coding-clans.github.io/vue-easytable/#/en/doc/table/column-fixed)
-   [ ] [Column Hidden](http://happy-coding-clans.github.io/vue-easytable/#/en/doc/table/column-hidden)
-   [ ] [Header Fixed](http://happy-coding-clans.github.io/vue-easytable/#/en/doc/table/header-fixed)
-   [ ] [Header Grouping](http://happy-coding-clans.github.io/vue-easytable/#/en/doc/table/header-grouping)
-   [ ] [Filter](http://happy-coding-clans.github.io/vue-easytable/#/en/doc/table/header-filter)
-   [ ] [Sort](http://happy-coding-clans.github.io/vue-easytable/#/en/doc/table/header-sort)
-   [ ] [Column Resize](https://happy-coding-clans.github.io/vue-easytable/#/en/doc/table/column-resize)
-   [ ] [Cell Style](http://happy-coding-clans.github.io/vue-easytable/#/en/doc/table/cell-style)
-   [ ] [Cell Custom](http://happy-coding-clans.github.io/vue-easytable/#/en/doc/table/cell-custom)
-   [ ] [Cell Span](http://happy-coding-clans.github.io/vue-easytable/#/en/doc/table/cell-span)
-   [ ] [Cell Selection(keyboard operation)](http://happy-coding-clans.github.io/vue-easytable/#/en/doc/table/cell-selection)
-   [ ] [Cell Autofill](http://happy-coding-clans.github.io/vue-easytable/#/en/doc/table/cell-autofill)
-   [ ] [Cell Edit](http://happy-coding-clans.github.io/vue-easytable/#/en/doc/table/cell-edit)
-   [ ] [Clipboard](http://happy-coding-clans.github.io/vue-easytable/#/en/doc/table/clipboard)
-   [ ] [Contextmenu](http://happy-coding-clans.github.io/vue-easytable/#/en/doc/table/contextmenu)
-   [ ] [Cell Ellipsis](http://happy-coding-clans.github.io/vue-easytable/#/en/doc/table/cell-ellipsis)
-   [ ] [Row Radio](http://happy-coding-clans.github.io/vue-easytable/#/en/doc/table/row-radio)
-   [ ] [Row Checkbox](http://happy-coding-clans.github.io/vue-easytable/#/en/doc/table/row-checkbox)
-   [ ] [Row Expand](http://happy-coding-clans.github.io/vue-easytable/#/en/doc/table/row-expand)
-   [ ] [Row Style](http://happy-coding-clans.github.io/vue-easytable/#/en/doc/table/row-style)
-   [ ] [Footer Summary](http://happy-coding-clans.github.io/vue-easytable/#/en/doc/table/footer-summary)
-   [ ] [Event Custom](http://happy-coding-clans.github.io/vue-easytable/#/en/doc/table/event-custom)
-   [More](http://happy-coding-clans.github.io/vue-easytable)

If there is no feature you want,
[Please Tell Us](http://happy-coding-clans.github.io/issue-template-generater/#/en)

## Install

```
npm install vue-easytable
```

or

```
yarn add vue-easytable
```

## Usage

Write the following in main.js:

```javascript
import Vue from "vue";
import "vue-easytable/libs/theme-default/index.css";
import VueEasytable from "vue-easytable";

Vue.use(VueEasytable);

new Vue({
    el: "#app",
    render: (h) => h(App),
});
```

Example:

```javascript
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

## Todo List

[What are we doing](https://github.com/Happy-Coding-Clans/vue-easytable/projects)

## Environment Support

-   Modern browser and ie11 and above

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE11, Edge                                                                                                                                                                                                      | last 2 versions                                                                                                                                                                                                   | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                           |

## How to contribute

If you want to contribute,just create a
[Pull Request](https://github.com/huangshuwei/vue-easytable/pulls)

## Contributors

Thanks to the following friends for their contributions 🙏

<a href="https://github.com/Happy-Coding-Clans/vue-easytable/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Happy-Coding-Clans/vue-easytable" />
</a>

## Discussion group

-   [Join In Gitter Chat Room](https://gitter.im/vue-easytable/community)
-   [Join In Discord Chat Room](https://discord.gg/gBm3k6r)

## License

http://www.opensource.org/licenses/mit-license.php
