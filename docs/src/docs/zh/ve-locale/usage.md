:::anchor 使用方法

```javascript
import { createApp } from "vue";
import { useVeTable } from "@easytable/vue";
// 引入英文语言包
import enUS from "vue-easytable/libs/locale/lang/en-US";

createApp(App).use(useVeTable({
    locale: enUS
}))
```

:::anchor 全局使用
使用 useVeTable 会自动将 veLocale 组件挂载到 Vue 的 prototype 原型上，便于全局调用

```javascript
import enUS from "vue-easytable/libs/locale/lang/en-US";
this.$veLocale.use(enUS);
```
