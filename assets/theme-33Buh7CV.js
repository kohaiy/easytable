import{_ as t,r as l,o,c as r,a,h as e,ac as n}from"./index-xkG6_mZq.js";const c={},p={class:"content example-md-doc"},u=e("h2",null,"主题定制",-1),i=e("p",null,"默认提供了两套主题，蓝色主题和暗黑主题",-1),m=e("h4",null,"使用蓝色主题",-1),d=e("p",null,"引入蓝色主题样式",-1),h=e("pre",null,[e("code",null,`import "vue-easytable/libs/theme-default/index.css";
`)],-1),b=e("h4",null,"使用暗黑主题",-1),_=e("pre",null,[e("code",null,`import "vue-easytable/libs/theme-dark/index.css";
`)],-1),v=n(`<p>vue-easytable 的样式使用了 Less 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。</p><h4>选择蓝色主题定制</h4><p>如果你需要的主题和蓝色主题接近，你可以选择按照蓝色主题定制。所有蓝色主题样式变量可以在 <strong><a href="https://github.com/huangshuwei/vue-easytable/blob/master/packages/theme-default/var.less">这里找到</a></strong>。</p><p>建创建一个单独的 less 变量文件，例如 vue-easytable-variables.less，引入这个文件覆盖 var.less 里的变量。</p><pre><code>@import &#39;~vue-easytable/packages/theme-default/index.less&#39;; // 引入官方提供的 less 样式入口文件
@import &#39;your-theme-file.less&#39;; // 用于覆盖上面定义的变量
</code></pre><p>之后，在项目的入口文件中，直接引入以上样式文件即可（无需引入 vue-easytable 编译好的 CSS 文件）：</p><pre><code>import Vue from &#39;vue&#39;
import VueEasytable from &#39;vue-easytable&#39;
import &#39;./vue-easytable-variables.less&#39;

Vue.use(VueEasytable)
</code></pre><h4>选择暗黑主题定制</h4><p>如果你需要的主题和暗黑主题接近，你可以选择按照暗黑主题定制。所有暗黑主题样式变量可以在 <strong><a href="https://github.com/huangshuwei/vue-easytable/blob/master/packages/theme-dark/var.less">这里找到</a></strong>。</p><p>建创建一个单独的 less 变量文件，例如 vue-easytable-variables.less，引入这个文件覆盖 var.less 里的变量。</p><pre><code>@import &#39;~vue-easytable/packages/theme-dark/index.less&#39;; // 引入官方提供的 less 样式入口文件
@import &#39;your-theme-file.less&#39;; // 用于覆盖上面定义的变量
</code></pre><p>之后，在项目的入口文件中，直接引入以上样式文件即可（无需引入 vue-easytable 编译好的 CSS 文件）：</p><pre><code>import Vue from &#39;vue&#39;
import VueEasytable from &#39;vue-easytable&#39;
import &#39;./vue-easytable-variables.less&#39;

Vue.use(VueEasytable)
</code></pre>`,13);function y(f,g){const s=l("anchor");return o(),r("section",p,[u,a(s,{"is-edit":"",label:"内置主题",fileName:"theme.md"}),i,m,d,h,b,_,a(s,{"is-edit":"",label:"主题定制",fileName:"theme.md"}),v])}const k=t(c,[["render",y]]);export{k as default};
