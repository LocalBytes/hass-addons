import{i as d,u as c,r as i,f as h,g as p,h as v,j as m,k as y,l as b}from"./BJF8kZ9b.js";let g;function j(){return g}function w(e){return typeof e=="function"?e():c(e)}function s(e,a=""){if(e instanceof Promise)return e;const t=w(e);return!e||!t?t:Array.isArray(t)?t.map(n=>s(n,a)):typeof t=="object"?Object.fromEntries(Object.entries(t).map(([n,r])=>n==="titleTemplate"||n.startsWith("on")?[n,c(r)]:[n,s(r,n)])):t}const _="usehead",u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},f="__unhead_injection_handler__";function H(){if(f in u)return u[f]();const e=d(_);return e||j()}function T(e,a={}){const t=a.head||H();if(t)return t.ssr?t.push(e,a):U(t,e,a)}function U(e,a,t={}){const n=i(!1),r=i({});h(()=>{r.value=n.value?{}:s(a)});const o=e.push(r.value,t);return p(r,l=>{o.patch(l)}),b()&&(v(()=>{o.dispose()}),m(()=>{n.value=!0}),y(()=>{n.value=!1})),o}export{T as u};
