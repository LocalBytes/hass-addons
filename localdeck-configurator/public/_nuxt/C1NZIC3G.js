const __vite__fileDeps=["./BMlmL9JQ.js","./BJF8kZ9b.js","./entry.CvMW8SiK.css","./DeckIconPicker.B6Ng0A8O.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var ne=Object.defineProperty;var oe=(e,t,o)=>t in e?ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var D=(e,t,o)=>(oe(e,typeof t!="symbol"?t+"":t,o),o);import{_ as se}from"./DWKOeoZV.js";import{n as ae,_ as ie}from"./CsMIMFB5.js";import{m as w,n as A,r as y,q as U,s as de,o as f,c as b,v as g,x as C,a as n,F as Q,y as ue,u as r,z as R,A as P,B as N,C as F,D as j,E as q,G as re,l as Y,i as ce,H as me,g as S,I as x,J as k,K as T,d as V,t as I,L as pe,b as $,w as M,M as B,N as fe,O as ve,P as be,Q as ge,R as G,S as he}from"./BJF8kZ9b.js";import{u as J}from"./CAIfvWfc.js";const _e={class:"dropdown-menu dropdown-menu-bottom-right gap-1 w-auto max-h-[400px] overflow-y-auto"},ye=["onClick"],xe=["innerHTML"],Ve=["innerHTML"],$e={key:0,class:"dropdown-item disabled"},we=n("span",{class:"text-lg"},"No results",-1),ke=[we],Ce=w({__name:"DeckButtonConfigTypeahead",props:A({typeahead:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=e,o=y(),l=y(!1),s=U(e,"modelValue"),i=de(()=>{var m;return(m=t.typeahead)==null?void 0:m.filter(a=>a.id.includes(s.value??"")||a.name.includes(s.value??""))}),p=m=>{s.value=m.id,l.value=!1},u=(m,a)=>{const d=m==null?void 0:m.replace(/[&<>"']/g,_=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[_]??_);if(!d||!a)return d;const c=d.toLowerCase().indexOf(a==null?void 0:a.toLowerCase());return c<0?d:d.substring(0,c)+'<span class="font-extrabold">'+d.substring(c,c+a.length)+"</span>"+d.substring(c+a.length)};return(m,a)=>(f(),b("div",{ref_key:"inputRef",ref:o,class:P([{"dropdown dropdown-open":r(l)},"w-full"]),onFocusout:a[2]||(a[2]=d=>l.value=!1),onFocusinOnce:a[3]||(a[3]=d=>l.value=!0)},[g(n("input",{"onUpdate:modelValue":a[0]||(a[0]=d=>s.value=d),class:"input w-full",type:"text",onInput:a[1]||(a[1]=d=>l.value=!0)},null,544),[[C,s.value]]),n("div",_e,[(f(!0),b(Q,null,ue(r(i),d=>(f(),b("div",{key:d.id,class:"dropdown-item",onClick:c=>p(d)},[n("span",{class:"text-lg",innerHTML:u(d.name,s.value)},null,8,xe),n("span",{innerHTML:u(d.id,s.value)},null,8,Ve)],8,ye))),128)),r(i).length==0?(f(),b("div",$e,ke)):R("",!0)])],34))}}),Ue=Symbol.for("nuxt:client-only"),O=new WeakMap;function Ae(e){if(O.has(e))return O.get(e);const t={...e};return t.render?t.render=(o,l,s,i,p,u)=>{var m;if(i.mounted$??o.mounted$){const a=(m=e.render)==null?void 0:m.bind(o)(o,l,s,i,p,u);return a.children===null||typeof a.children=="string"?N(a):F(a)}else{const a=j(o._.vnode.el??null)??["<div></div>"];return q(a.join(""),a.length)}}:t.template&&(t.template=`
      <template v-if="mounted$">${e.template}</template>
      <template v-else><div></div></template>
    `),t.setup=(o,l)=>{var m;const s=Y(),i={...s.attrs},p=De(s);for(const a in i)delete s.attrs[a];const u=y(!1);return re(()=>{Object.assign(s.attrs,i),s.vnode.dirs=p,u.value=!0}),Promise.resolve(((m=e.setup)==null?void 0:m.call(e,o,l))||{}).then(a=>typeof a!="function"?(a=a||{},a.mounted$=u,a):(...d)=>{if(u.value){const c=a(...d);return c.children===null||typeof c.children=="string"?N(c):F(c)}else{const c=j((s==null?void 0:s.vnode.el)??null)??["<div></div>"];return q(c.join(""),c.length)}})},O.set(e,t),t}function De(e){if(!e||!e.vnode.dirs)return null;const t=e.vnode.dirs;return e.vnode.dirs=null,t}const Me="data-n-ids",Te="-";function Z(e){var s,i,p,u,m,a;if(typeof e!="string")throw new TypeError("[nuxt] [useId] key must be a string.");e=`n${e.slice(1)}`;const t=me(),o=Y();if(!o)throw new TypeError("[nuxt] `useId` must be called within a component setup function.");t._id||(t._id=0),o._nuxtIdIndex||(o._nuxtIdIndex={}),(s=o._nuxtIdIndex)[e]||(s[e]=0);const l=e+Te+o._nuxtIdIndex[e]++;if(t.payload.serverRendered&&t.isHydrating&&!ce(Ue,!1)){const d=((i=o.vnode.el)==null?void 0:i.nodeType)===8&&((u=(p=o.vnode.el)==null?void 0:p.nextElementSibling)!=null&&u.getAttribute)?(m=o.vnode.el)==null?void 0:m.nextElementSibling:o.vnode.el,c=JSON.parse(((a=d==null?void 0:d.getAttribute)==null?void 0:a.call(d,Me))||"{}");if(c[l])return c[l]}return e+"_"+t._id++}const Ee=["id"],Re=["for"],Ie={class:"min-h-0"},Le=w({__name:"RippleUiCollapse",props:A({title:{type:String,default:null}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=U(e,"modelValue"),o=y(t.value);S(t,s=>o.value=s),S(o,s=>t.value=s);const l=Z("$dQcX7pmGiU");return(s,i)=>(f(),b("div",{class:P([r(o)&&"overflow-visible","accordion shadow"])},[g(n("input",{id:r(l),"onUpdate:modelValue":i[0]||(i[0]=p=>k(o)?o.value=p:null),class:"accordion-toggle",type:"checkbox"},null,8,Ee),[[x,r(o)]]),n("label",{for:r(l),class:"accordion-title px-4 bg-transparent"},[T(s.$slots,"title",{},()=>[V(I(e.title),1)])],8,Re),n("div",{class:P([r(o)&&"overflow-visible","accordion-content"])},[n("div",Ie,[T(s.$slots,"default")])],2)],2))}}),Oe={class:"p-2 gap-2 flex flex-col"},Pe=n("p",null,"Actions",-1),Se={class:"flex gap-2"},Be=n("span",null,"Expose to HomeAssistant",-1),ze={class:"flex gap-2"},He=["disabled"],Ne=n("span",null,"Flash LED on press",-1),Fe={class:"flex flex-col gap-2"},je={class:"form-field"},qe=n("span",{class:"label-text"},"Entity",-1),Ge={class:"flex gap-2"},Je=["disabled"],Qe=n("span",null,"Toggle Entity",-1),Ye={class:"flex gap-2"},Ze=["disabled"],Ke=n("span",null,"Follow State (On/Off)",-1),We={class:"flex gap-2"},Xe=["disabled"],et=n("span",null,"Follow Brightness",-1),tt={class:"flex gap-2"},lt=["disabled"],nt=n("span",null,"Follow Color",-1),ot=w({__name:"DeckButtonConfigActions",props:A({typeahead:{type:Array,default:null}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){U(e,"modelValue");const t=y(!0);return(o,l)=>{const s=Ce,i=Le,p=pe("maska");return f(),b("div",Oe,[Pe,n("label",Se,[g(n("input",{"onUpdate:modelValue":l[0]||(l[0]=u=>e.modelValue.component.expose=u),class:"checkbox",type:"checkbox"},null,512),[[x,e.modelValue.component.expose]]),Be]),n("label",ze,[g(n("input",{"onUpdate:modelValue":l[1]||(l[1]=u=>e.modelValue.component.blip_on_press=u),disabled:e.modelValue.component.ha_entity&&e.modelValue.component.follow_state,class:"checkbox",type:"checkbox"},null,8,He),[[x,e.modelValue.component.blip_on_press]]),Ne]),$(i,{modelValue:r(t),"onUpdate:modelValue":l[8]||(l[8]=u=>k(t)?t.value=u:null),title:"HomeAssistant Integration"},{default:M(()=>[n("div",Fe,[n("label",je,[qe,e.typeahead?(f(),B(s,{key:0,modelValue:e.modelValue.component.ha_entity,"onUpdate:modelValue":l[2]||(l[2]=u=>e.modelValue.component.ha_entity=u),typeahead:e.typeahead},null,8,["modelValue","typeahead"])):g((f(),b("input",{key:1,"onUpdate:modelValue":l[3]||(l[3]=u=>e.modelValue.component.ha_entity=u),class:"input input-bordered","data-maska":"D.E","data-maska-tokens":"D:[a-zA-Z0-9]:multiple|E:[a-zA-Z0-9_]:multiple",placeholder:"eg: light.livingroom_light",type:"text"},null,512)),[[C,e.modelValue.component.ha_entity],[p]])]),n("label",Ge,[g(n("input",{"onUpdate:modelValue":l[4]||(l[4]=u=>e.modelValue.component.toggle=u),disabled:!e.modelValue.component.ha_entity,checked:!0,class:"checkbox",type:"checkbox"},null,8,Je),[[x,e.modelValue.component.toggle]]),Qe]),n("label",Ye,[g(n("input",{"onUpdate:modelValue":l[5]||(l[5]=u=>e.modelValue.component.follow_state=u),disabled:!e.modelValue.component.ha_entity,checked:!0,class:"checkbox",type:"checkbox"},null,8,Ze),[[x,e.modelValue.component.follow_state]]),Ke]),n("label",We,[g(n("input",{"onUpdate:modelValue":l[6]||(l[6]=u=>e.modelValue.component.follow_brightness=u),disabled:!e.modelValue.component.ha_entity||!e.modelValue.component.follow_state,checked:!0,class:"checkbox",type:"checkbox"},null,8,Xe),[[x,e.modelValue.component.follow_brightness]]),et]),n("label",tt,[g(n("input",{"onUpdate:modelValue":l[7]||(l[7]=u=>e.modelValue.component.follow_color=u),disabled:!e.modelValue.component.ha_entity||!e.modelValue.component.follow_state,checked:!0,class:"checkbox",type:"checkbox"},null,8,lt),[[x,e.modelValue.component.follow_color]]),nt])])]),_:1},8,["modelValue"])])}}}),st=fe(()=>ve(()=>import("./BMlmL9JQ.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(e=>e.default||e).then(e=>Ae(e))),at={class:"rounded p-2 shadow grow flex flex-col gap-2"},it=n("h3",{class:"pb-2"},"Label",-1),dt={class:"flex"},ut={class:"flex gap-2"},rt=["disabled"],ct=["disabled"],mt=w({__name:"DeckButtonConfigLabel",props:{modelValue:{required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(e){const t=U(e,"modelValue");return(o,l)=>{const s=st;return f(),b("div",at,[it,n("div",dt,[$(s,{modelValue:t.value.label,"onUpdate:modelValue":l[0]||(l[0]=i=>t.value.label=i),class:"flex-grow"},null,8,["modelValue"]),t.value.label.icon?(f(),b("button",{key:0,class:"btn btn-outline-danger",type:"button",onClick:l[1]||(l[1]=i=>t.value.label.icon=null)}," X ")):R("",!0)]),g(n("textarea",{"onUpdate:modelValue":l[2]||(l[2]=i=>t.value.label.text=i),class:"textarea",placeholder:"Type here",rows:"3",type:"text"},null,512),[[C,t.value.label.text]]),n("label",null,[V(" Size "),n("span",ut,[g(n("input",{"onUpdate:modelValue":l[3]||(l[3]=i=>t.value.label.fontSize=i),disabled:!t.value.label.text,class:"input",max:"20",min:"4",type:"range"},null,8,rt),[[C,t.value.label.fontSize]]),g(n("input",{"onUpdate:modelValue":l[4]||(l[4]=i=>t.value.label.fontSize=i),disabled:!t.value.label.text,class:"input w-[5rem]",max:"20",min:"4",type:"number"},null,8,ct),[[C,t.value.label.fontSize]])])])])}}}),pt={class:"grow"},ft={class:"pb-2"},vt=w({__name:"DeckButtonConfig",props:A({typeahead:{type:Array,default:null}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=U(e,"modelValue");return(o,l)=>{const s=ot,i=mt;return f(),b(Q,null,[n("div",pt,[n("h3",ft,"Editing button "+I(e.modelValue.keyNum),1),$(s,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=p=>t.value=p),typeahead:e.typeahead},null,8,["modelValue","typeahead"])]),$(i,{modelValue:t.value,"onUpdate:modelValue":l[1]||(l[1]=p=>t.value=p)},null,8,["modelValue"])],64)}}}),bt=["id","disabled"],gt={class:"modal"},ht=["for"],_t={class:"modal-content flex flex-col gap-5"},yt=["for"],xt={class:"text-xl"},Vt=w({__name:"RippleUiModal",props:A({title:{type:String,default:null},isDismissible:{type:Boolean,default:!0}},{modelValue:{type:Boolean,default:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=U(e,"modelValue"),o=Z("$RHP0JLa5QA");return(l,s)=>(f(),b("div",null,[g(n("input",{id:r(o),ref:r(o),"onUpdate:modelValue":s[0]||(s[0]=i=>t.value=i),disabled:!e.isDismissible,class:"modal-state",type:"checkbox"},null,8,bt),[[x,t.value]]),n("div",gt,[n("label",{for:r(o),class:"modal-overlay"},null,8,ht),n("div",_t,[e.isDismissible?(f(),b("label",{key:0,for:r(o),class:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2"},"✕",8,yt)):R("",!0),T(l.$slots,"title",{},()=>[n("h2",xt,I(e.title),1)]),T(l.$slots,"default")])])]))}}),E={get:(e,t)=>{let o=e;for(let l of t)if(o=o[l],typeof o>"u")return;return o},set:(e,t,o)=>{let l=e;for(let s of t.slice(0,-1))(typeof l[s]>"u"||l[s]==null)&&(l[s]={}),l=l[s];l[t[t.length-1]]=o},unset:(e,t)=>{const o=t[0];t.length===1?delete e[o]:(E.unset(e[o],t.slice(1)),Object.keys(e[o]).length===0&&delete e[o])}},K=(e=[],t,o)=>({path:e,get(l,s){if(s=="isProxy")return!0;const i=l[s];if(!(typeof i>"u"))return typeof i=="object"&&i!=null&&!i.isProxy&&(l[s]=new Proxy(i,K([...e,s],t,o))),typeof i=="object"&&i!=null?l[s]:E.get(t.changes,[...e,s])??l[s]},set(l,s,i){return E.set(t.changes,[...e,s],i),o(e),!0}});class $t{constructor(){D(this,"changes",{});D(this,"defaultConfig",ae());D(this,"notify",()=>{})}editor(){return new Proxy(this.defaultConfig,K([],this,this.notify))}getChanges(){return this.changes}setChanges(t){this.changes=t,this.notify([])}resetChanges(t=""){return t===""?(this.changes={},!0):(E.unset(this.changes,t.split(".")),!0)}}const wt={class:"container py-5 mx-auto"},kt={class:"my-2 text-sm"},Ct=n("h1",{class:"mb-2"},"LocalDeck Configurator",-1),Ut={class:"form-control my-2"},At={class:"flex flex-wrap justify-center gap-10 py-2"},Dt=n("h2",null,"GUI",-1),Mt={key:1,class:"basis-2 grow"},Tt=n("p",null,[V(" This will reset all button configurations to their default values."),n("br"),V(" It will "),n("b",null,"not"),V(" save your changes by itself, so you will need to click the save button after resetting! ")],-1),Et={class:"flex justify-end gap-2"},Rt={key:0},It=n("div",{class:"spinner-simple"},null,-1),Lt=n("p",null," Please wait while your changes are being saved. ",-1),Ot=[It,Lt],Pt={key:1},St=n("p",null," Your changes have been saved, please go to ESPHome to install! ",-1),Bt=[St],qt=w({__name:"editor",async setup(e){let t,o;const l=be(),s=ge(),{data:i,status:p}=([t,o]=G(()=>J("/api/editor",{query:{filename:s.query.filename}},"$m9W7Ywy1Ad")),t=await t,o(),t),{data:u}=([t,o]=G(()=>J("/api/entities",{server:!1},"$H0zmqLdjAr")),t=await t,o(),t),m=new $t,a=y(2),d=y(!1),c=y(m.editor()),_=y();m.notify=()=>he(c),S(p,()=>{var L;p.value==="success"&&(L=i.value)!=null&&L.config&&m.setChanges(i.value.config)},{immediate:!0});const z=async()=>{a.value=0,await $fetch("/api/editor",{method:"POST",body:{editor:m.getChanges()},query:{filename:s.query.filename}}).finally(()=>a.value=1)},W=async()=>{await z(),a.value=2,await l.push({name:"print",query:{filename:s.query.filename}})},X=()=>{confirm("Are you sure you want to reset?")&&(m.resetChanges(),d.value=!1)};return(L,v)=>{const ee=se,te=ie,le=vt,H=Vt;return f(),b("div",wt,[n("div",kt,[$(ee,{to:"/"},{default:M(()=>[V("Configurator")]),_:1}),V(" → "+I(r(s).query.filename),1)]),Ct,n("div",Ut,[g(n("input",{"onUpdate:modelValue":v[0]||(v[0]=h=>r(c).title=h),class:"input border-secondary inline-block",pattern:"[a-zA-Z0-9]+",placeholder:"Project Name",type:"text"},null,512),[[C,r(c).title]]),n("button",{class:"btn btn-primary",type:"button",onClick:z},"Save"),n("button",{class:"btn btn-secondary",type:"button",onClick:v[1]||(v[1]=h=>d.value=!0)},"Reset"),n("button",{class:"btn btn-outline-primary",type:"button",onClick:W},"Print")]),n("div",At,[n("div",null,[Dt,r(c)?(f(),B(te,{key:0,modelValue:r(c),"onUpdate:modelValue":v[2]||(v[2]=h=>k(c)?c.value=h:null),editing:r(_),"onUpdate:editing":v[3]||(v[3]=h=>k(_)?_.value=h:null),class:"mx-auto"},null,8,["modelValue","editing"])):R("",!0)]),r(_)?(f(),B(le,{key:0,modelValue:r(_),"onUpdate:modelValue":v[4]||(v[4]=h=>k(_)?_.value=h:null),typeahead:r(u)},null,8,["modelValue","typeahead"])):(f(),b("div",Mt))]),$(H,{modelValue:r(d),"onUpdate:modelValue":v[6]||(v[6]=h=>k(d)?d.value=h:null),title:"Are you sure?"},{default:M(()=>[Tt,n("div",Et,[n("button",{class:"btn btn-outline-error",onClick:X},"Reset"),n("button",{class:"btn btn-primary",onClick:v[5]||(v[5]=h=>d.value=!1)},"Cancel")])]),_:1},8,["modelValue"]),$(H,{"is-dismissible":r(a)==1,"model-value":r(a)!=2,title:"Saving...","onUpdate:modelValue":v[7]||(v[7]=h=>a.value=h?1:2)},{default:M(()=>[r(a)==0?(f(),b("div",Rt,Ot)):(f(),b("div",Pt,Bt))]),_:1},8,["is-dismissible","model-value"])])}}});export{qt as default};