import{L as ae,M as se,N as L,O as re,U,P as B,Q as P,R as $,S as W,T as K,d as x,V as ce,W as de,X as ue,Y as pe,Z as he,j as b,i as F,$ as fe,C as M,a0 as ve,D as me,o as c,c as R,m as p,b as a,G as O,H as ye,e as y,w as T,f as V,a1 as D,s as I,t as g,a2 as be,a as u,a3 as j,a4 as J,n as ge,a5 as we,a6 as Ce,J as Se,a7 as q,a8 as Ie,a9 as Re,aa as ke,p as w,A as H,_ as Oe,r as Q,F as Ee,q as Te,ab as De,ac as Ve,h as Z,B as xe}from"./index-kkwE-wMw.js";import{M as E}from"./mock-gGW0qhnx.js";const _e=ae({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:se},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},inactiveActionIcon:{type:L},activeActionIcon:{type:L},activeIcon:{type:L},inactiveIcon:{type:L},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:re(Function)},id:String,tabindex:{type:[String,Number]},value:{type:[Boolean,String,Number],default:!1},label:{type:String,default:void 0}}),Ae={[U]:e=>B(e)||P(e)||$(e),[W]:e=>B(e)||P(e)||$(e),[K]:e=>B(e)||P(e)||$(e)},Ne=["onClick"],Le=["id","aria-checked","aria-disabled","aria-label","name","true-value","false-value","disabled","tabindex","onKeydown"],Be=["aria-hidden"],Pe=["aria-hidden"],$e=["aria-hidden"],z="ElSwitch",Fe=x({name:z}),Me=x({...Fe,props:_e,emits:Ae,setup(e,{expose:o,emit:i}){const t=e,m=Re(),{formItem:h}=ce(),C=de(),r=ue("switch");(l=>{l.forEach(v=>{Ce({from:v[0],replacement:v[1],scope:z,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},b(()=>{var N;return!!((N=m.vnode.props)!=null&&N[v[2]])}))})})([['"value"','"model-value" or "v-model"',"value"],['"active-color"',"CSS var `--el-switch-on-color`","activeColor"],['"inactive-color"',"CSS var `--el-switch-off-color`","inactiveColor"],['"border-color"',"CSS var `--el-switch-border-color`","borderColor"]]);const{inputId:d}=pe(t,{formItemContext:h}),n=he(b(()=>t.loading)),s=F(t.modelValue!==!1),k=F(),_=F(),ee=b(()=>[r.b(),r.m(C.value),r.is("disabled",n.value),r.is("checked",f.value)]),te=b(()=>[r.e("label"),r.em("label","left"),r.is("active",!f.value)]),oe=b(()=>[r.e("label"),r.em("label","right"),r.is("active",f.value)]),le=b(()=>({width:fe(t.width)}));M(()=>t.modelValue,()=>{s.value=!0}),M(()=>t.value,()=>{s.value=!1});const Y=b(()=>s.value?t.modelValue:t.value),f=b(()=>Y.value===t.activeValue);[t.activeValue,t.inactiveValue].includes(Y.value)||(i(U,t.inactiveValue),i(W,t.inactiveValue),i(K,t.inactiveValue)),M(f,l=>{var v;k.value.checked=l,t.validateEvent&&((v=h==null?void 0:h.validate)==null||v.call(h,"change").catch(N=>ve()))});const A=()=>{const l=f.value?t.inactiveValue:t.activeValue;i(U,l),i(W,l),i(K,l),Se(()=>{k.value.checked=f.value})},G=()=>{if(n.value)return;const{beforeChange:l}=t;if(!l){A();return}const v=l();[q(v),B(v)].includes(!0)||Ie(z,"beforeChange must return type `Promise<boolean>` or `boolean`"),q(v)?v.then(X=>{X&&A()}).catch(X=>{}):v&&A()},ne=b(()=>r.cssVarBlock({...t.activeColor?{"on-color":t.activeColor}:null,...t.inactiveColor?{"off-color":t.inactiveColor}:null,...t.borderColor?{"border-color":t.borderColor}:null})),ie=()=>{var l,v;(v=(l=k.value)==null?void 0:l.focus)==null||v.call(l)};return me(()=>{k.value.checked=f.value}),o({focus:ie,checked:f}),(l,v)=>(c(),R("div",{class:O(a(ee)),style:J(a(ne)),onClick:ge(G,["prevent"])},[p("input",{id:a(d),ref_key:"input",ref:k,class:O(a(r).e("input")),type:"checkbox",role:"switch","aria-checked":a(f),"aria-disabled":a(n),"aria-label":l.label,name:l.name,"true-value":l.activeValue,"false-value":l.inactiveValue,disabled:a(n),tabindex:l.tabindex,onChange:A,onKeydown:ye(G,["enter"])},null,42,Le),!l.inlinePrompt&&(l.inactiveIcon||l.inactiveText)?(c(),R("span",{key:0,class:O(a(te))},[l.inactiveIcon?(c(),y(a(D),{key:0},{default:T(()=>[(c(),y(V(l.inactiveIcon)))]),_:1})):I("v-if",!0),!l.inactiveIcon&&l.inactiveText?(c(),R("span",{key:1,"aria-hidden":a(f)},g(l.inactiveText),9,Be)):I("v-if",!0)],2)):I("v-if",!0),p("span",{ref_key:"core",ref:_,class:O(a(r).e("core")),style:J(a(le))},[l.inlinePrompt?(c(),R("div",{key:0,class:O(a(r).e("inner"))},[l.activeIcon||l.inactiveIcon?(c(),y(a(D),{key:0,class:O(a(r).is("icon"))},{default:T(()=>[(c(),y(V(a(f)?l.activeIcon:l.inactiveIcon)))]),_:1},8,["class"])):l.activeText||l.inactiveText?(c(),R("span",{key:1,class:O(a(r).is("text")),"aria-hidden":!a(f)},g(a(f)?l.activeText:l.inactiveText),11,Pe)):I("v-if",!0)],2)):I("v-if",!0),p("div",{class:O(a(r).e("action"))},[l.loading?(c(),y(a(D),{key:0,class:O(a(r).is("loading"))},{default:T(()=>[u(a(be))]),_:1},8,["class"])):a(f)?j(l.$slots,"active-action",{key:1},()=>[l.activeActionIcon?(c(),y(a(D),{key:0},{default:T(()=>[(c(),y(V(l.activeActionIcon)))]),_:1})):I("v-if",!0)]):a(f)?I("v-if",!0):j(l.$slots,"inactive-action",{key:2},()=>[l.inactiveActionIcon?(c(),y(a(D),{key:0},{default:T(()=>[(c(),y(V(l.inactiveActionIcon)))]),_:1})):I("v-if",!0)])],2)],6),!l.inlinePrompt&&(l.activeIcon||l.activeText)?(c(),R("span",{key:1,class:O(a(oe))},[l.activeIcon?(c(),y(a(D),{key:0},{default:T(()=>[(c(),y(V(l.activeIcon)))]),_:1})):I("v-if",!0),!l.activeIcon&&l.activeText?(c(),R("span",{key:1,"aria-hidden":!a(f)},g(l.activeText),9,$e)):I("v-if",!0)],2)):I("v-if",!0)],14,Ne))}});var Ue=we(Me,[["__file","switch.vue"]]);const We=ke(Ue),Ke=x({name:"Demo",components:{},data(){return{columnWidthResizeOption:{enable:!0},cellSelectionOption:{enable:!1},editOption:{cellValueChange:({row:e,column:o})=>{console.log("cellValueChange row::",e),console.log("cellValueChange column::",o)}},dataRow:5e3,switchActiveColor:"#1890ff",switchInactiveColor:"rgba(0,0,0,.25)",enableColumnFixed:!0,enableLoading:!1,enableExpand:!0,enableRowRadio:!1,enableRowCheckbox:!1,sourceData:[],tableData:[],startRowIndex:0,filterConditions:[],cellStyleOption:{bodyCellClass:({row:e,column:o,rowIndex:i})=>{if(o.field==="proficiency")return"table-body-cell-proficiency"}},virtualScrollOption:{enable:!0,scrolling:this.scrolling},rowStyleOption:{stripe:!0,clickHighlight:!0,hoverHighlight:!0},sortOption:{sortChange:e=>{this.sortChange(e)}},radioOption:{selectedRowChange:({row:e})=>{}},checkboxOption:{selectedRowChange:({row:e,isSelected:o,selectedRowKeys:i})=>{},selectedAllChange:({isSelected:e,selectedRowKeys:o})=>{}},expandOption:{render:({row:e,column:o,rowIndex:i},t)=>u("p",null,[w("Hello everyone, My name is")," ",u("span",{style:"font-weight:bold;"},[e.name]),w(", I'm a"),e.profession,w(". And I'm living in")," ",e.address,w(".")])}}},computed:{currentLocal(){return H.zh.completeDemo.demo1},tableScrollWdith(){let e=0;const{columns:o}=this;return o.length&&o.forEach(i=>{typeof i.width=="number"&&(e+=i.width)}),e},columns(){let e=[{field:"rowIndex",key:"rowIndex",title:"#",width:50,fixed:this.enableColumnFixed?"left":"",renderBodyCell:this.renderRowIndex}];return this.enableRowRadio&&e.push({field:"radio",key:"radio",title:"",width:100,fixed:this.enableColumnFixed?"left":"",type:"radio"}),this.enableRowCheckbox&&e.push({field:"checkbox",key:"checkbox",title:"",width:100,fixed:this.enableColumnFixed?"left":"",type:"checkbox"}),this.enableExpand&&e.push({field:"expand",key:"expand",title:"",width:100,fixed:this.enableColumnFixed?"left":"",type:"expand"}),e=e.concat([{title:"Basic Info",fixed:this.enableColumnFixed?"left":"",width:300,children:[{field:"name",key:"name",title:"Name",width:200,align:"left"},{field:"sex",key:"sex",title:"Sex",width:100,align:"center",sortBy:"",edit:!0,renderBodyCell:({row:o,column:i,rowIndex:t},m)=>{const C=o[i.field]===1?"icon-male":"icon-female";return u("i",{style:"font-size:20px;color:#666;",class:`demo-sex iconfont ${C}`},null)}}]},{title:"Personal Experience",align:"center",width:800,children:[{title:"Profession",field:"profession",key:"profession",width:200,align:"left"},{title:"IT Skills",children:[{field:"proficiency",key:"proficiency",title:"Proficiency",width:300,sortBy:"",edit:!0,renderBodyCell:({row:o,column:i,rowIndex:t},m)=>{const h=o[i.field],C=h>60?"demo-blue":h>30?"demo-orange":"demo-red";return u("div",{class:"proficiency-span-container"},[u("span",{class:`proficiency-span ${C}`,style:`width:${h}%;`},[h,w("%")])])}},{field:"skills",key:"skills",title:"Skills",width:300,align:"left",edit:!0,renderBodyCell:({row:o,column:i,rowIndex:t},m)=>{const h=o[i.field];return[{name:"Javascript",color:"#48a4ef"},{name:"Python",color:"#d8899c"},{name:"java",color:"#a88cd9"}].slice(0,h).map(S=>u("span",{class:"skill-span",style:`background-color:${S.color}`},[S.name]))}}]}]},{field:"address",key:"address",title:"Address",width:350,align:"left"},{field:"status",key:"status",title:"Status",width:100,fixed:this.enableColumnFixed?"right":"",align:"left",filter:{filterList:[{value:0,label:"Working",selected:!1},{value:1,label:"Metting",selected:!1},{value:2,label:"Traveling",selected:!1}],isMultiple:!0,filterConfirm:o=>{const i=o.filter(t=>t.selected).map(t=>t.value);this.searchByNameField(i)},filterReset:o=>{this.searchByNameField([])}},renderBodyCell:({row:o,column:i,rowIndex:t},m)=>{const h=o[i.field],r=[{name:"Working",color:"#48a4ef"},{name:"Meeting",color:"#d8899c"},{name:"Traveling",color:"#a88cd9"}][h];return u("span",{class:"status-span",style:`color:${r.color}`},[r.name])}}]),e}},created(){this.initSourceData()},mounted(){this.loadingInstance=this.$veLoading({target:document.querySelector("#demo-loading-container"),name:"grid"})},unmounted(){},methods:{scrolling({startRowIndex:e,visibleStartIndex:o,visibleEndIndex:i,visibleAboveCount:t,visibleBelowCount:m}){this.startRowIndex=e},renderRowIndex({row:e,column:o,rowIndex:i}){return u("span",null,[i+this.startRowIndex+1])},searchByNameField(e){this.filterConditions=e,this.filter(),this.$refs.tableRef.scrollTo({top:0})},filter(){const e=this.filterConditions;this.tableData=this.sourceData.slice(0).filter(o=>e.length===0||e.includes(o.status))},sortChange(e){const o="sex",i="proficiency";e[o]||e[i]?this.tableData.sort((t,m)=>{if(e[o]){if(e[o]==="asc")return t[o]-m[o];if(e[o]==="desc")return m[o]-t[o]}else if(e[i]){if(e[i]==="asc")return t[i]-m[i];if(e[i]==="desc")return m[i]-t[i]}return 0}):this.resetTableData(),this.$refs.tableRef.scrollTo({top:0})},switchLoading(){this.enableLoading?this.loadingInstance.show():this.loadingInstance.close()},resetTableData(){this.tableData=this.sourceData.slice(0),this.filter()},dataRowChange(){setTimeout(()=>{this.initSourceData(),this.$refs.tableRef.scrollTo({top:0})})},initSourceData(){const e=["Project Manager","User Interface Designer","Front-End Developer","Testor","Product Designer","System Designer"],o=[],i=this.dataRow;for(let t=0;t<i;t++)o.push({rowKey:t,name:E.Random.name(),sex:E.Random.boolean()?1:2,profession:e[E.Random.natural(0,5)],proficiency:E.Random.natural(5,85),skills:E.Random.natural(0,3),address:E.Random.county(!0),status:E.Random.natural(0,2)});this.sourceData=o,this.resetTableData()}}}),ze={class:"normal-data-grid"},He={class:"operation"},Ye={class:"operation-item"},Ge={class:"operation-item"},Xe={class:"operation-item"},je={class:"operation-item"},Je={class:"operation-item"},qe={class:"operation-item"},Qe={class:"table-list"};function Ze(e,o,i,t,m,h){const C=De,r=Ve,S=We,d=Q("ve-table");return c(),R("div",ze,[p("div",He,[p("div",Ye,[w(g(e.currentLocal.dataRows)+" ",1),u(r,{modelValue:e.dataRow,"onUpdate:modelValue":o[0]||(o[0]=n=>e.dataRow=n),style:{width:"60%"},size:"small",onChange:e.dataRowChange},{default:T(()=>[(c(!0),R(Ee,null,Te(e.currentLocal.dataRowsOption,n=>(c(),y(C,{key:n.value,label:n.label,value:n.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"])]),p("div",Ge,[w(g(e.currentLocal.columnFixed)+" ",1),u(S,{modelValue:e.enableColumnFixed,"onUpdate:modelValue":o[1]||(o[1]=n=>e.enableColumnFixed=n),"active-color":e.switchActiveColor,"inactive-color":e.switchInactiveColor},null,8,["modelValue","active-color","inactive-color"])]),p("div",Xe,[w(g(e.currentLocal.expand)+" ",1),u(S,{modelValue:e.enableExpand,"onUpdate:modelValue":o[2]||(o[2]=n=>e.enableExpand=n),"active-color":e.switchActiveColor,"inactive-color":e.switchInactiveColor},null,8,["modelValue","active-color","inactive-color"])]),p("div",je,[w(g(e.currentLocal.loading)+" ",1),u(S,{modelValue:e.enableLoading,"onUpdate:modelValue":o[3]||(o[3]=n=>e.enableLoading=n),"active-color":e.switchActiveColor,"inactive-color":e.switchInactiveColor,onChange:e.switchLoading},null,8,["modelValue","active-color","inactive-color","onChange"])]),p("div",Je,[w(g(e.currentLocal.radio)+" ",1),u(S,{modelValue:e.enableRowRadio,"onUpdate:modelValue":o[4]||(o[4]=n=>e.enableRowRadio=n),"active-color":e.switchActiveColor,"inactive-color":e.switchInactiveColor},null,8,["modelValue","active-color","inactive-color"])]),p("div",qe,[w(g(e.currentLocal.checkbox)+" ",1),u(S,{modelValue:e.enableRowCheckbox,"onUpdate:modelValue":o[5]||(o[5]=n=>e.enableRowCheckbox=n),"active-color":e.switchActiveColor,"inactive-color":e.switchInactiveColor},null,8,["modelValue","active-color","inactive-color"])])]),p("div",Qe,[u(d,{id:"demo-loading-container",ref:"tableRef","fixed-header":"","border-y":"","max-height":500,"scroll-width":0,"sort-option":e.sortOption,"virtual-scroll-option":e.virtualScrollOption,columns:e.columns,"table-data":e.tableData,"row-key-field-name":"rowKey","cell-style-option":e.cellStyleOption,"expand-option":e.expandOption,"radio-option":e.radioOption,"checkbox-option":e.checkboxOption,"row-style-option":e.rowStyleOption,"cell-selection-option":e.cellSelectionOption,"column-width-resize-option":e.columnWidthResizeOption},null,8,["sort-option","virtual-scroll-option","columns","table-data","cell-style-option","expand-option","radio-option","checkbox-option","row-style-option","cell-selection-option","column-width-resize-option"])])])}const et=Oe(Ke,[["render",Ze]]),tt={class:"spreadsheet"},ot=p("br",null,null,-1),lt=p("br",null,null,-1),nt=x({__name:"spreadsheet",setup(e){const o=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],{currentDocLang:i}=Z(),t=xe({startRowIndex:0,columnWidthResizeOption:{enable:!0},virtualScrollOption:{enable:!0,scrolling:r},cellAutofillOption:{directionX:!0,directionY:!0,beforeAutofill:({direction:d,sourceSelectionRangeIndexes:n,targetSelectionRangeIndexes:s,sourceSelectionData:k,targetSelectionData:_})=>{},afterAutofill:({direction:d,sourceSelectionRangeIndexes:n,targetSelectionRangeIndexes:s,sourceSelectionData:k,targetSelectionData:_})=>{}},editOption:{beforeCellValueChange:({row:d,column:n,changeValue:s})=>{},afterCellValueChange:({row:d,column:n,changeValue:s})=>{}},contextmenuHeaderOption:{beforeShow:({isWholeColSelection:d,selectionRangeKeys:n,selectionRangeIndexes:s})=>{},afterMenuClick:({type:d,selectionRangeKeys:n,selectionRangeIndexes:s})=>{},contextmenus:[{type:"CUT"},{type:"COPY"},{type:"SEPARATOR"},{type:"EMPTY_COLUMN"},{type:"SEPARATOR"},{type:"LEFT_FIXED_COLUMN_TO"},{type:"CANCEL_LEFT_FIXED_COLUMN_TO"},{type:"RIGHT_FIXED_COLUMN_TO"},{type:"CANCEL_RIGHT_FIXED_COLUMN_TO"}]},contextmenuBodyOption:{beforeShow:({isWholeRowSelection:d,selectionRangeKeys:n,selectionRangeIndexes:s})=>{console.log("---contextmenu body beforeShow--"),console.log("isWholeRowSelection::",d),console.log("selectionRangeKeys::",n),console.log("selectionRangeIndexes::",s)},afterMenuClick:({type:d,selectionRangeKeys:n,selectionRangeIndexes:s})=>{console.log("---contextmenu body afterMenuClick--"),console.log("type::",d),console.log("selectionRangeKeys::",n),console.log("selectionRangeIndexes::",s)},contextmenus:[{type:"CUT"},{type:"COPY"},{type:"SEPARATOR"},{type:"INSERT_ROW_ABOVE"},{type:"INSERT_ROW_BELOW"},{type:"SEPARATOR"},{type:"REMOVE_ROW"},{type:"EMPTY_ROW"},{type:"EMPTY_CELL"}]},rowStyleOption:{clickHighlight:!1,hoverHighlight:!1},tableData:[]}),m=b(()=>H[i.value].completeDemo.demo2),h=b(()=>[{field:"index",key:"index",operationColumn:!0,title:"",width:55,fixed:"left",renderBodyCell:C},...o.map(n=>({title:n,field:n,key:n,width:90,edit:!0}))]);S();function C({row:d,column:n,rowIndex:s}){return u("span",null,[s+t.startRowIndex+1])}function r({startRowIndex:d,visibleStartIndex:n,visibleEndIndex:s,visibleAboveCount:k,visibleBelowCount:_}){t.startRowIndex=d}function S(){const d=[];for(let n=0;n<5e3;n++){const s={rowKey:n};o.forEach(k=>{s[k]=""}),(n===1||n===3)&&(s.C="YOU",s.D="CAN",s.E="TRY",s.F="ENTER",s.G="SOME",s.H="WORDS",s.I="!!!"),d.push(s)}t.tableData=d}return(d,n)=>{const s=Q("ve-table");return c(),R("div",tt,[p("div",null,[w(g(m.value.description)+" ",1),ot,lt]),u(s,{style:{"word-break":"break-word"},"fixed-header":"","scroll-width":0,"max-height":500,"border-y":"",columns:h.value,"table-data":t.tableData,"row-key-field-name":"rowKey","virtual-scroll-option":t.virtualScrollOption,"cell-autofill-option":t.cellAutofillOption,"edit-option":t.editOption,"contextmenu-body-option":t.contextmenuBodyOption,"contextmenu-header-option":t.contextmenuHeaderOption,"row-style-option":t.rowStyleOption,"column-width-resize-option":t.columnWidthResizeOption},null,8,["columns","table-data","virtual-scroll-option","cell-autofill-option","edit-option","contextmenu-body-option","contextmenu-header-option","row-style-option","column-width-resize-option"])])}}}),it={class:"site-demo-container"},at={class:"demo-title"},st={class:"demo-title-text"},rt={class:"demo-title last"},ct={class:"demo-title-text"},pt=x({name:"Demo",__name:"index",setup(e){const{currentDocLang:o}=Z(),i=b(()=>H[o.value].completeDemo);return(t,m)=>(c(),R("div",null,[p("div",it,[p("div",at,[p("div",st,g(i.value.demo1.selection),1)]),u(et),p("div",rt,[p("div",ct,g(i.value.demo2.selection),1)]),u(nt)])]))}});export{pt as default};
