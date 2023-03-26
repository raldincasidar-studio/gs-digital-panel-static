import{h as b,q as w,s as S,v as y,x as N,r as _,i as q,y as A,z as C,a as I,A as P,m as B,o as R,b as T,f as m,t as g,e as z,w as E,k as j,B as L,C as V}from"./entry.4aa60264.js";import{u as U}from"./composables.2c6b83b4.js";const x=globalThis.requestIdleCallback||(e=>{const a=Date.now(),t={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-a))};return setTimeout(()=>{e(t)},1)}),D=globalThis.cancelIdleCallback||(e=>{clearTimeout(e)}),H=e=>{const a=b();a.isHydrating?a.hooks.hookOnce("app:suspense:resolve",()=>{x(e)}):x(e)};async function k(e,a=w()){if(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(e))return;const t=a._preloadPromises=a._preloadPromises||[];if(t.length>4)return Promise.all(t).then(()=>k(e,a));a._routePreloaded.add(e);const r=a.resolve(e).matched.map(n=>{var o;return(o=n.components)==null?void 0:o.default}).filter(n=>typeof n=="function");for(const n of r){const o=Promise.resolve(n()).catch(()=>{}).finally(()=>t.splice(t.indexOf(o)));t.push(o)}await Promise.all(t)}const M=(...e)=>e.find(a=>a!==void 0),O="noopener noreferrer";function $(e){const a=e.componentName||"NuxtLink";return S({name:a,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(t,{slots:r}){const n=w(),o=y(()=>t.to||t.href||""),u=y(()=>t.external||t.target&&t.target!=="_self"?!0:typeof o.value=="object"?!1:o.value===""||N(o.value,!0)),v=_(!1),l=_(null);if(t.prefetch!==!1&&t.noPrefetch!==!0&&typeof o.value=="string"&&t.target!=="_blank"&&!X()){const d=b();let c,s=null;q(()=>{const h=G();H(()=>{c=x(()=>{var f;(f=l==null?void 0:l.value)!=null&&f.tagName&&(s=h.observe(l.value,async()=>{s==null||s(),s=null,await Promise.all([d.hooks.callHook("link:prefetch",o.value).catch(()=>{}),!u.value&&k(o.value,n).catch(()=>{})]),v.value=!0}))})})}),A(()=>{c&&D(c),s==null||s(),s=null})}return()=>{var h,f;if(!u.value)return C(I("RouterLink"),{ref:p=>{l.value=p==null?void 0:p.$el},to:o.value,...v.value&&!t.custom?{class:t.prefetchedClass||e.prefetchedClass}:{},activeClass:t.activeClass||e.activeClass,exactActiveClass:t.exactActiveClass||e.exactActiveClass,replace:t.replace,ariaCurrentValue:t.ariaCurrentValue,custom:t.custom},r.default);const i=typeof o.value=="object"?((h=n.resolve(o.value))==null?void 0:h.href)??null:o.value||null,d=t.target||null,c=t.noRel?null:M(t.rel,e.externalRelAttribute,i?O:"")||null,s=()=>P(i,{replace:t.replace});return t.custom?r.default?r.default({href:i,navigate:s,route:n.resolve(i),rel:c,target:d,isExternal:u.value,isActive:!1,isExactActive:!1}):null:C("a",{ref:l,href:i,rel:c,target:d},(f=r.default)==null?void 0:f.call(r))}}})}const F=$({componentName:"NuxtLink"});function G(){const e=b();if(e._observer)return e._observer;let a=null;const t=new Map,r=(o,u)=>(a||(a=new IntersectionObserver(v=>{for(const l of v){const i=t.get(l.target);(l.isIntersecting||l.intersectionRatio>0)&&i&&i()}})),t.set(o,u),a.observe(o),()=>{t.delete(o),a.unobserve(o),t.size===0&&(a.disconnect(),a=null)});return e._observer={observe:r}}function X(){const e=navigator.connection;return!!(e&&(e.saveData||/2g/.test(e.effectiveType)))}const J=e=>(L("data-v-30d2164e"),e=e(),V(),e),K={class:"font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"},Q=J(()=>m("div",{class:"fixed left-0 right-0 spotlight z-10"},null,-1)),W={class:"max-w-520px text-center z-20"},Y=["textContent"],Z=["textContent"],ee={class:"w-full flex items-center justify-center"},te={__name:"error-404",props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:Number,default:404},statusMessage:{type:String,default:"Not Found"},description:{type:String,default:"Sorry, the page you are looking for could not be found."},backHome:{type:String,default:"Go back home"}},setup(e){const a=e;return U({title:`${a.statusCode} - ${a.statusMessage} | ${a.appName}`,script:[],style:[{children:'*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}'}]}),(t,r)=>{const n=F;return R(),T("div",K,[Q,m("div",W,[m("h1",{class:"text-8xl sm:text-10xl font-medium mb-8",textContent:g(e.statusCode)},null,8,Y),m("p",{class:"text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight",textContent:g(e.description)},null,8,Z),m("div",ee,[z(n,{to:"/",class:"gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"},{default:E(()=>[j(g(e.backHome),1)]),_:1})])])])}}},ne=B(te,[["__scopeId","data-v-30d2164e"]]);export{ne as default};
