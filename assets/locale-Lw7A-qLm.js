import{_ as n,r as c,o as s,c as o,a as l,m as e,p as t,g as d}from"./index-lRrbso5P.js";const r={},i={class:"content example-md-doc"},p=e("h2",null,"国际化",-1),u=e("p",null,[t("你可以通过 "),e("code",null,"VeLocal"),t(" 组件实现多语言支持，使用 "),e("code",null,"VeLocal.use"),t(" 方法可以切换当前使用的语言。")],-1),b=e("pre",null,[e("code",{class:"language-javascript"},`import { VeLocale } from "vue-easytable";
// 引入英文语言包
import enUS from "vue-easytable/libs/locale/lang/en-US.js";

VeLocale.use(enUS);
`)],-1),m=e("p",null,[t("通过 "),e("code",null,"VeLocale.update"),t(" 方法可以实现文案的修改和扩展。")],-1),_=e("pre",null,[e("code",{class:"language-javascript"},`import { VeLocale } from "vue-easytable";

const lang = {
    pagination: {
        goto: "跳转到",
    },
};

VeLocale.update(lang);
`)],-1),h=e("div",{class:"tip"},[e("p",null,[t("1、从目录 “//unpkg.com/vue-easytable/libs/locale/lang/” 目录下引用需要的语言包"),e("br"),t(" 2、使用 "),e("code",null,"VETable.VeLocale.use"),t(" 方法使用和切换语言包"),e("br"),t(" 3、语言包固定格式为 "),e("code",null,"VETable.lang.[语言包名称]"),t("，[语言包名称] 不包含‘-’符号，具体见下面示例"),e("br")])],-1),g=e("pre",null,[e("code",null,`<script src="//unpkg.com/vue"><\/script>
<script src="//unpkg.com/vue-easytable"><\/script>
<script src="//unpkg.com/vue-easytable/libs/locale/lang/en-US.js"><\/script>
<script src="//unpkg.com/vue-easytable/libs/locale/lang/zh-CN.js"><\/script>

<script>
  // 切换到英文
  VETable.VeLocale.use(VETable.lang.enUS);

  /*
  切换中文
  VETable.VeLocale.use(VETable.lang.zhCN);
  */
<\/script>
`)],-1),V=d('<p>目前支持以下语言：</p><table class="example-table"><thead><tr><th>语言</th><th>文件名</th></tr></thead><tbody><tr><td>简体中文</td><td>zh-CN</td></tr><tr><td>繁體中文（中国台湾）</td><td>zh-TW</td></tr><tr><td>英语（en）</td><td>en-US</td></tr><tr><td>南非（荷兰语）</td><td>af-ZA</td></tr><tr><td>南非（ZA）</td><td>zu-ZA</td></tr><tr><td>法语（FR）</td><td>fr-FR</td></tr><tr><td>巴西葡萄牙语</td><td>pt-BR</td></tr><tr><td>韩文(KR)</td><td>ko-KR</td></tr><tr><td>俄语(RU)</td><td>ru-RU</td></tr></tbody></table><p>如果你需要使用其他的语言，欢迎贡献 PR：只需在 <a href="https://github.com/huangshuwei/vue-easytable/tree/master/packages/src/locale/lang">这里</a> 添加一个语言配置文件即可。</p>',3);function f(v,N){const a=c("anchor");return s(),o("section",i,[p,l(a,{"is-edit":"",label:"语言切换",fileName:"locale.md"}),u,b,l(a,{"is-edit":"",label:"修改语言包",fileName:"locale.md"}),m,_,l(a,{"is-edit":"",label:"CDN 方式加载语言文件",fileName:"locale.md"}),h,g,l(a,{"is-edit":"",label:"语言包",fileName:"locale.md"}),V])}const L=n(r,[["render",f]]);export{L as default};
