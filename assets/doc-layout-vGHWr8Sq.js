import{_ as F,o as a,c as r,g as P,d as z,h as M,i as R,j as G,k as J,l as $,v as b,b as i,m as e,t as p,n as A,p as O,F as w,q as I,s as U,x as Y,y as Q,z as W,A as X,B as Z,u as ee,C as te,D as ae,E as oe,r as K,e as k,w as q,G as V,H as E,a as x,f as N,K as se,I as ne,J as j}from"./index-gSu8gfTL.js";const ce={},le={class:"main-footer"},ie=P('<div data-v-1d06dfe9><span data-v-1d06dfe9><i class="iconfont icon-github" data-v-1d06dfe9></i><a href="https://github.com/huangshuwei/vue-easytable" data-v-1d06dfe9> vue-easytable </a> for Vue2 </span>   <span data-v-1d06dfe9><a href="https://github.com/huangshuwei" data-v-1d06dfe9>@huangshuwei</a></span>        <span data-v-1d06dfe9><i class="iconfont icon-github" data-v-1d06dfe9></i><a href="https://github.com/kohaiy/easytable" data-v-1d06dfe9> @easytable/vue </a></span>   <span data-v-1d06dfe9><a href="https://github.com/kohaiy" data-v-1d06dfe9>@kohaiy</a></span></div>',1),re=[ie];function de(c,_){return a(),r("div",le,re)}const ue=F(ce,[["render",de],["__scopeId","data-v-1d06dfe9"]]),he=c=>(Q("data-v-a8da4959"),c=c(),W(),c),pe={key:0,class:"catalog-container"},_e={class:"catalog-ul"},ve=he(()=>e("i",{class:"catalog-li-title-down icon iconfont icon-shouqi1"},null,-1)),me=["title"],fe=["onClick"],ke=z({__name:"catalog",props:{catalogData:{type:Array,required:!0},showCatalogList:{type:Boolean,default:!0}},setup(c){const _=c,{currentDocLang:C}=M(),l=R(_.showCatalogList),m=G(()=>X[C.value].anchorCatalogTitle),D=J();function T(g){Y(D,g)}function f(){l.value=!l.value}return(g,v)=>c.catalogData&&c.catalogData.length>0?(a(),r("div",pe,[$(e("div",{class:"catalog-corner",onClick:v[0]||(v[0]=A(d=>f(),["stop"]))},[e("span",null,p(i(m)),1)],512),[[b,!i(l)]]),$(e("ul",_e,[e("li",{class:"catalog-li-title",onClick:v[1]||(v[1]=A(d=>f(),["stop"]))},[O(p(i(m))+" ",1),ve]),(a(!0),r(w,null,I(c.catalogData,(d,o)=>(a(),r("li",{key:o,title:d.label,class:"catalog-li"},[e("a",{href:"javascript:void(0);",onClick:A(s=>T(d.id),["stop"])},p(d.label),9,fe)],8,me))),128))],512),[[b,i(l)]])])):U("",!0)}}),ge=F(ke,[["__scopeId","data-v-a8da4959"]]),ye={class:"main-wrapper"},we={class:"main-wrapper-sidebar"},$e={class:"menu-root"},be={class:"main-wrapper-sidebar-link",href:"javascript:javascript:void(0);"},Ce={class:"menu-sub"},De=["onClick","onKeypress"],Te=["href"],Be=["onClick","onKeypress"],Le=["href"],Ae={class:"main-wrapper-container"},qe={class:"main-back-top"},Se=z({__name:"doc-layout",setup(c){const{currentDocLang:_}=M(),C=J(),l=Z({showBackTop:!1,catalogData:[],showHide:!1}),m=R(),D=G(()=>ne[_.value]);function T(){window.scroll(0,0)}function f(){const o=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop||window.scrollHeight;l.showBackTop=o>600}function g(o){const s=o.query;s&&s.anchor&&j(()=>{Y(C,s.anchor)}),j(()=>{var t;const u=(t=m.value)==null?void 0:t.querySelectorAll(".anchor-link"),y=[];if(u&&u.length>0)for(let h=0,n=u.length;h<n;h++)y.push({id:u[h].id,label:u[h].getAttribute("label")});l.catalogData=y})}function v(o){const s=o.query;s.showHide&&s.showHide==="1"&&(l.showHide=!0)}const d=ee();return te(d,(o,s)=>{g(o),v(o)},{immediate:!0}),ae(()=>{document.addEventListener("scroll",f)}),oe(()=>{document.removeEventListener("scroll",f)}),(o,s)=>{const u=K("router-link"),y=K("router-view");return a(),r("div",{ref_key:"el",ref:m},[e("div",ye,[e("div",we,[e("ul",$e,[(a(!0),r(w,null,I(i(D),(t,h)=>(a(),r(w,null,[t.children?(a(),r("li",{key:h},[e("a",be,p(t.name),1),e("ul",Ce,[(a(!0),r(w,null,I(t.children,(n,B)=>(a(),k(u,{key:B,custom:"",to:`/${i(_)}/doc/${t.path}/${n.path}`},{default:q(({isActive:L,href:S,navigate:H})=>[e("li",{class:V({active:L}),role:"link",onClick:H,onKeypress:E(xe=>H(),["enter"])},[e("a",{href:S},[O(p(n.name)+" ",1),$(e("span",{class:"version"},p(n.meta&&n.meta.version),513),[[b,n.meta&&n.meta.version]])],8,Te)],42,De)]),_:2},1032,["to"]))),128))])])):!t.meta||!t.meta.hide?(a(),k(u,{key:`hide${h}`,to:`/${i(_)}/doc/${t.path}`,custom:""},{default:q(({navigate:n,href:B,isActive:L})=>[e("li",{class:V(["no-child",{active:L}]),role:"link",onClick:n,onKeypress:E(S=>n(),["enter"])},[e("a",{href:B},p(t.name),9,Le)],42,Be)]),_:2},1032,["to"])):U("",!0)],64))),256))])]),e("div",Ae,[x(y,null,{default:q(({Component:t})=>[i(d).meta.keepAlive?(a(),k(se,{key:0},[(a(),k(N(t)))],1024)):(a(),k(N(t),{key:1}))]),_:1})]),x(ue)]),e("div",null,[$(e("div",qe,[e("i",{class:"icon iconfont icon-huidaodingbu-copy main-back-top-icon",onClick:s[0]||(s[0]=t=>T())})],512),[[b,i(l).showBackTop]])]),e("div",null,[x(ge,{"catalog-data":i(l).catalogData},null,8,["catalog-data"])])],512)}}});export{Se as default};
