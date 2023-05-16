import{c as H,k as V,u as E,E as D,l as z,_ as T,m as k,i as O}from"./base-d3b25083.js";import{t as J,_ as Q}from"./RingoHeader-80a62627.js";import{K as R,k as h,l as A,d as y,g as _,o as g,q as S,w as v,u,c as x,x as b,n as N,A as Y,r as X,e as m,y as G,T as U,i as j,f as I,j as w,L as W,M as Z,z as M,N as ee,I as te,O as ne,P as se,b as C,F as B,Q as oe,t as re,_ as ae}from"./index-29342792.js";const P=Symbol("rowContextKey"),le={visibilityHeight:{type:Number,default:200},target:{type:String,default:""},right:{type:Number,default:40},bottom:{type:Number,default:40}},ce={click:c=>c instanceof MouseEvent},ue=(c,s,o)=>{const t=R(),a=R(),l=h(!1),e=()=>{t.value&&(l.value=t.value.scrollTop>=c.visibilityHeight)},d=n=>{var r;(r=t.value)==null||r.scrollTo({top:0,behavior:"smooth"}),s("click",n)},f=V(e,300,!0);return H(a,"scroll",f),A(()=>{var n;a.value=document,t.value=document.documentElement,c.target&&(t.value=(n=document.querySelector(c.target))!=null?n:void 0,t.value||J(o,`target does not exist: ${c.target}`),a.value=t.value)}),{visible:l,handleClick:d}},K="ElBacktop",ie=y({name:K}),pe=y({...ie,props:le,emits:ce,setup(c,{emit:s}){const o=c,t=E("backtop"),{handleClick:a,visible:l}=ue(o,s,K),e=_(()=>({right:`${o.right}px`,bottom:`${o.bottom}px`}));return(d,f)=>(g(),S(U,{name:`${u(t).namespace.value}-fade-in`},{default:v(()=>[u(l)?(g(),x("div",{key:0,style:b(u(e)),class:N(u(t).b()),onClick:f[0]||(f[0]=Y((...n)=>u(a)&&u(a)(...n),["stop"]))},[X(d.$slots,"default",{},()=>[m(u(D),{class:N(u(t).e("icon"))},{default:v(()=>[m(u(z))]),_:1},8,["class"])])],6)):G("v-if",!0)]),_:3},8,["name"]))}});var de=T(pe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/backtop/src/backtop.vue"]]);const me=j(de),fe=I({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:w([Number,Object]),default:()=>k({})},sm:{type:w([Number,Object]),default:()=>k({})},md:{type:w([Number,Object]),default:()=>k({})},lg:{type:w([Number,Object]),default:()=>k({})},xl:{type:w([Number,Object]),default:()=>k({})}}),_e=y({name:"ElCol"}),ge=y({..._e,props:fe,setup(c){const s=c,{gutter:o}=W(P,{gutter:_(()=>0)}),t=E("col"),a=_(()=>{const e={};return o.value&&(e.paddingLeft=e.paddingRight=`${o.value/2}px`),e}),l=_(()=>{const e=[];return["span","offset","pull","push"].forEach(n=>{const r=s[n];O(r)&&(n==="span"?e.push(t.b(`${s[n]}`)):r>0&&e.push(t.b(`${n}-${s[n]}`)))}),["xs","sm","md","lg","xl"].forEach(n=>{O(s[n])?e.push(t.b(`${n}-${s[n]}`)):Z(s[n])&&Object.entries(s[n]).forEach(([r,p])=>{e.push(r!=="span"?t.b(`${n}-${r}-${p}`):t.b(`${n}-${p}`))})}),o.value&&e.push(t.is("guttered")),[t.b(),e]});return(e,d)=>(g(),S(M(e.tag),{class:N(u(l)),style:b(u(a))},{default:v(()=>[X(e.$slots,"default")]),_:3},8,["class","style"]))}});var ve=T(ge,[["__file","/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]);const ye=j(ve),he=["start","center","end","space-around","space-between","space-evenly"],be=["top","middle","bottom"],ke=I({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:he,default:"start"},align:{type:String,values:be,default:"top"}}),we=y({name:"ElRow"}),$e=y({...we,props:ke,setup(c){const s=c,o=E("row"),t=_(()=>s.gutter);ee(P,{gutter:t});const a=_(()=>{const e={};return s.gutter&&(e.marginRight=e.marginLeft=`-${s.gutter/2}px`),e}),l=_(()=>[o.b(),o.is(`justify-${s.justify}`,s.justify!=="start"),o.is(`align-${s.align}`,s.align!=="top")]);return(e,d)=>(g(),S(M(e.tag),{class:N(u(l)),style:b(u(a))},{default:v(()=>[X(e.$slots,"default")]),_:3},8,["class","style"]))}});var xe=T($e,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);const Ne=j(xe);const Ce=`# 如何使用\r
 __写在前面：所有插件都不是我写的，除了光遇插件__\r
\r
## 基础功能（不绑ck）\r
- 面板功能，戳一戳功能，大部分不需要角色数据的攻略 （包括了kokomi大佬写的喵喵插件和xiaoyao大佬写的图鉴插件）\r
   \r
   - #面板#更新面板               \r
  查看已经获取面板信息的角色列表\r
   - #XX面板#XX伤害             \r
  查看角色详细面板及伤害信息\r
   - #圣遗物列表#XX圣遗物    \r
  您查看圣遗物列表/评分详情\r
  - #刻晴#心海                      \r
  你的原神角色卡片\r
  - #老婆#老公                      \r
  查看老婆、老公\r
  - #老公/婆设置XX               \r
  设置老婆列表，也可设置随机\r
  - #XX天赋#XX命座             \r
  查看角色的天赋与命座资料\r
  - #XX攻略                           \r
  西风驿站攻略 \r
  - #人物图鉴#武器名字         \r
  角色武器图鉴\r
  - #绑定123456789             \r
  绑定uid（非ck）\r
\r
    **我真的好懒啊有没有人给我整理一下变成文字我不想打字我不想打字我不想打字我不想打字我不想打字我不想打字我不想打字我不想打字我不想打字**\r
\r
## 进阶（绑定ck）\r
- #体力#体力帮助               \r
  查询体力，绑定Cookie帮助\r
会给你一个腾讯文档（应该是yunzai作者乐神写的\r
  - #角色#角色卡片#探索      \r
    你的原神账号数据,数据来自米游社\r
  - #深渊配队                        \r
  根据你的角色池推荐组队\r
  - #深渊#深渊12层             \r
   深渊数据，打完请2小时后查询\r
  - #五星#武器#今日素材      \r
  你的原神角色详情数据\r
  - #练度统计                        \r
  角色列表数据\r
  - #上传深渊数据                 \r
  上传您的深渊数据用于数据统计\r
  - #签到                               \r
  米游社原神签到\r
\r
- 要是体力的ck绑不上，就用图鉴的体力（这个是xiaoyao大佬写的图鉴插件）\r
  - 私发#扫码登录\r
**注意是私发**\r
\r
## 其他（原神有关，需要ck）\r
- #星铁帮助\r
你可以获得崩坏·星穹铁道的帮助\r
\r
## 其他（原神无关）\r
- 卧槽 woc\r
就是卧槽然后发好多美图\r
- 答案之书\r
为什么不问问答案之书呢\r
<!-- - 光遇每日任务 -->\r
`,Ee={class:"docs"},Te=["onClick"],Se=y({__name:"docs",setup(c){te();const s=Ce,o=h(""),t=h([]),a=h("10rem");A(async()=>{d(),a.value=window.screen.height-320+"px"});const l=h(),e=h(),d=async()=>{o.value=s,await ne();const n=l.value.$el.querySelectorAll("h1,h2,h3,h4,h5,h6"),r=Array.from(n).filter(i=>!!i.innerText.trim());if(!r.length){t.value=[];return}const p=Array.from(new Set(r.map(i=>i.tagName))).sort();t.value=r.map(i=>({title:i.innerText,lineIndex:i.getAttribute("data-v-md-line"),indent:p.indexOf(i.tagName)}))},f=n=>{const{lineIndex:r}=n,p=l.value.$el.querySelector(`[data-v-md-line="${r}"]`);p&&(console.log(l.value),l.value.scrollToTarget({target:p,scrollContainer:e.value.$el||window,top:0}))};return(n,r)=>{const p=Q,i=ye,L=se("v-md-preview"),q=Ne,F=me;return g(),x(B,null,[m(p),C("div",Ee,[m(q,{gutter:20},{default:v(()=>[m(i,{xs:24,sm:24,md:8,lg:4},{default:v(()=>[C("div",{class:"",style:b({cursor:"pointer",height:a.value,padding:"0.5rem 0.25rem 0.25rem 0"})},[(g(!0),x(B,null,oe(t.value,$=>(g(),x("div",{key:$,class:"list-group-item",style:b({padding:`0.5rem 0 0.5rem ${$.indent*1.25}rem`}),onClick:Xe=>f($)},[C("span",null,re($.title),1)],12,Te))),128))],4)]),_:1}),m(i,{xs:24,sm:24,md:16,lg:20,style:b({height:a.value,overflowY:"scroll"}),ref_key:"scrollOut",ref:e},{default:v(()=>[m(L,{text:o.value,ref_key:"preview",ref:l,class:"item"},null,8,["text"])]),_:1},8,["style"])]),_:1}),m(F,{right:2,bottom:10,"visibility-height":100})])],64)}}});const Be=ae(Se,[["__scopeId","data-v-02173402"]]);export{Be as default};
