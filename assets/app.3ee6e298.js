import{o as i,b as u,l as c,G as s,a5 as l,a6 as f,a7 as d,a8 as m,a9 as h,aa as _,ab as A,ac as y,ad as g,ae as P,$ as v,d as w,u as C,j as b,A as R,af as E,ag as L,ah as D,ai as T}from"./chunks/framework.6af06ac6.js";import{t as r}from"./chunks/theme.68582a31.js";const j={__name:"MyLayout",setup(e){const{Layout:a}=r;return(t,n)=>(i(),u(c(a)))}};const x={...r,Layout:j};function p(e){if(e.extends){const a=p(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const o=p(x),O=w({name:"VitePressApp",setup(){const{site:e}=C();return b(()=>{R(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),E(),L(),D(),o.setup&&o.setup(),()=>T(o.Layout)}});async function S(){const e=B(),a=$();a.provide(f,e);const t=d(e.route);return a.provide(m,t),a.component("Content",h),a.component("ClientOnly",_),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:a,router:e,siteData:A}),{app:a,router:e,data:t}}function $(){return y(O)}function B(){let e=s,a;return g(t=>{let n=P(t);return n?(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),s&&(e=!1),v(()=>import(n),[])):null},o.NotFound)}s&&S().then(({app:e,router:a,data:t})=>{a.go().then(()=>{l(a.route,t.site),e.mount("#app")})});export{S as createApp};
