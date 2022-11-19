(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function y(){}const H=t=>t;function nt(t){return t()}function V(){return Object.create(null)}function k(t){t.forEach(nt)}function N(t){return typeof t=="function"}function rt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function _t(t){return Object.keys(t).length===0}function ht(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function yt(t,e,n){t.$$.on_destroy.push(ht(e,n))}function gt(t){return t&&N(t.destroy)?t.destroy:y}const it=typeof window<"u";let ot=it?()=>window.performance.now():()=>Date.now(),J=it?t=>requestAnimationFrame(t):y;const A=new Set;function st(t){A.forEach(e=>{e.c(t)||(A.delete(e),e.f())}),A.size!==0&&J(st)}function ct(t){let e;return A.size===0&&J(st),{promise:new Promise(n=>{A.add(e={c:t,f:n})}),abort(){A.delete(e)}}}function w(t,e){t.appendChild(e)}function lt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Ct(t){const e=O("style");return bt(lt(t),e),e.sheet}function bt(t,e){return w(t.head||t,e),e.sheet}function T(t,e,n){t.insertBefore(e,n||null)}function x(t){t.parentNode&&t.parentNode.removeChild(t)}function wt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function O(t){return document.createElement(t)}function W(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function $t(){return j(" ")}function vt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function g(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function kt(t){return Array.from(t.childNodes)}function xt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function D(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function Et(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,r,e),i}const Z=new Map;let z=0;function At(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ot(t,e){const n={stylesheet:Ct(e),rules:{}};return Z.set(t,n),n}function ut(t,e,n,r,i,o,s,c=0){const f=16.666/r;let l=`{
`;for(let _=0;_<=1;_+=f){const C=e+(n-e)*o(_);l+=_*100+`%{${s(C,1-C)}}
`}const m=l+`100% {${s(n,1-n)}}
}`,u=`__svelte_${At(m)}_${c}`,p=lt(t),{stylesheet:d,rules:h}=Z.get(p)||Ot(p,t);h[u]||(h[u]=!0,d.insertRule(`@keyframes ${u} ${m}`,d.cssRules.length));const a=t.style.animation||"";return t.style.animation=`${a?`${a}, `:""}${u} ${r}ms linear ${i}ms 1 both`,z+=1,u}function G(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),i=n.length-r.length;i&&(t.style.animation=r.join(", "),z-=i,z||Nt())}function Nt(){J(()=>{z||(Z.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&x(e)}),Z.clear())})}let Q;function L(t){Q=t}const S=[],X=[],F=[],Y=[],Mt=Promise.resolve();let K=!1;function St(){K||(K=!0,Mt.then(ft))}function v(t){F.push(t)}const I=new Set;let q=0;function ft(){const t=Q;do{for(;q<S.length;){const e=S[q];q++,L(e),Dt(e.$$)}for(L(null),S.length=0,q=0;X.length;)X.pop()();for(let e=0;e<F.length;e+=1){const n=F[e];I.has(n)||(I.add(n),n())}F.length=0}while(S.length);for(;Y.length;)Y.pop()();K=!1,I.clear(),L(t)}function Dt(t){if(t.fragment!==null){t.update(),k(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(v)}}let M;function at(){return M||(M=Promise.resolve(),M.then(()=>{M=null})),M}function R(t,e,n){t.dispatchEvent(Et(`${e?"intro":"outro"}${n}`))}const P=new Set;let b;function Lt(){b={r:0,c:[],p:b}}function Tt(){b.r||k(b.c),b=b.p}function $(t,e){t&&t.i&&(P.delete(t),t.i(e))}function tt(t,e,n,r){if(t&&t.o){if(P.has(t))return;P.add(t),b.c.push(()=>{P.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const dt={duration:0};function mt(t,e,n){let r=e(t,n),i=!1,o,s,c=0;function f(){o&&G(t,o)}function l(){const{delay:u=0,duration:p=300,easing:d=H,tick:h=y,css:a}=r||dt;a&&(o=ut(t,0,1,p,u,d,a,c++)),h(0,1);const _=ot()+u,C=_+p;s&&s.abort(),i=!0,v(()=>R(t,!0,"start")),s=ct(B=>{if(i){if(B>=C)return h(1,0),R(t,!0,"end"),f(),i=!1;if(B>=_){const U=d((B-_)/p);h(U,1-U)}}return i})}let m=!1;return{start(){m||(m=!0,G(t),N(r)?(r=r(),at().then(l)):l())},invalidate(){m=!1},end(){i&&(f(),i=!1)}}}function qt(t,e,n){let r=e(t,n),i=!0,o;const s=b;s.r+=1;function c(){const{delay:f=0,duration:l=300,easing:m=H,tick:u=y,css:p}=r||dt;p&&(o=ut(t,1,0,l,f,m,p));const d=ot()+f,h=d+l;v(()=>R(t,!1,"start")),ct(a=>{if(i){if(a>=h)return u(0,1),R(t,!1,"end"),--s.r||k(s.c),!1;if(a>=d){const _=m((a-d)/l);u(1-_,_)}}return i})}return N(r)?at().then(()=>{r=r(),c()}):c(),{end(f){f&&r.tick&&r.tick(1,0),i&&(o&&G(t,o),i=!1)}}}const Ft=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Pt(t,e,n,r){const{fragment:i,after_update:o}=t.$$;i&&i.m(e,n),r||v(()=>{const s=t.$$.on_mount.map(nt).filter(N);t.$$.on_destroy?t.$$.on_destroy.push(...s):k(s),t.$$.on_mount=[]}),o.forEach(v)}function jt(t,e){const n=t.$$;n.fragment!==null&&(k(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Zt(t,e){t.$$.dirty[0]===-1&&(S.push(t),St(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function zt(t,e,n,r,i,o,s,c=[-1]){const f=Q;L(t);const l=t.$$={fragment:null,ctx:[],props:o,update:y,not_equal:i,bound:V(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:V(),dirty:c,skip_bound:!1,root:e.target||f.$$.root};s&&s(l.root);let m=!1;if(l.ctx=n?n(t,e.props||{},(u,p,...d)=>{const h=d.length?d[0]:p;return l.ctx&&i(l.ctx[u],l.ctx[u]=h)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](h),m&&Zt(t,u)),p}):[],l.update(),m=!0,k(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){const u=kt(e.target);l.fragment&&l.fragment.l(u),u.forEach(x)}else l.fragment&&l.fragment.c();e.intro&&$(t.$$.fragment),Pt(t,e.target,e.anchor,e.customElement),ft()}L(f)}class Rt{$destroy(){jt(this,1),this.$destroy=y}$on(e,n){if(!N(n))return y;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!_t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function pt(t){const e=t-1;return e*e*e+1}function Bt(t){return--t*t*t*t*t+1}function It(t,{delay:e=0,duration:n=400,easing:r=H}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:o=>`opacity: ${o*i}`}}function Wt(t,{delay:e=0,duration:n=400,easing:r=pt,x:i=0,y:o=0,opacity:s=0}={}){const c=getComputedStyle(t),f=+c.opacity,l=c.transform==="none"?"":c.transform,m=f*(1-s);return{delay:e,duration:n,easing:r,css:(u,p)=>`
			transform: ${l} translate(${(1-u)*i}px, ${(1-u)*o}px);
			opacity: ${f-m*p}`}}const E=[];function Gt(t,e){return{subscribe:Kt(t,e).subscribe}}function Kt(t,e=y){let n;const r=new Set;function i(c){if(rt(t,c)&&(t=c,n)){const f=!E.length;for(const l of r)l[1](),E.push(l,t);if(f){for(let l=0;l<E.length;l+=2)E[l][0](E[l+1]);E.length=0}}}function o(c){i(c(t))}function s(c,f=y){const l=[c,f];return r.add(l),r.size===1&&(n=e(i)||y),c(t),()=>{r.delete(l),r.size===0&&(n(),n=null)}}return{set:i,update:o,subscribe:s}}const Ht="M76.406,30.711C79.395,28.316 83.185,26.881 87.312,26.881C96.957,26.881 104.773,34.701 104.773,44.345C104.773,53.988 96.957,61.806 87.312,61.806C83.185,61.806 79.395,60.372 76.406,57.978C72.411,54.777 69.849,49.862 69.849,44.345C69.849,38.826 72.412,33.912 76.406,30.711ZM87.31,0.688C77.484,0.688 68.415,3.937 61.119,9.417C63.502,11.207 65.694,13.237 67.662,15.468C73.261,11.652 80.025,9.419 87.31,9.419C106.6,9.419 122.238,25.055 122.238,44.343C122.238,63.632 106.6,79.269 87.31,79.269C80.025,79.269 73.261,77.035 67.662,73.22C65.246,71.572 63.047,69.627 61.119,67.441C59.107,65.164 57.388,62.619 56.022,59.87C54.218,62.316 52.002,64.437 49.471,66.129C45.31,68.914 40.307,70.539 34.924,70.539C20.459,70.539 8.731,58.81 8.731,44.345C8.731,29.878 20.459,18.15 34.924,18.15C40.307,18.15 45.31,19.775 49.471,22.56C52.002,24.251 54.218,26.373 56.022,28.819C59.224,33.162 61.119,38.533 61.119,44.345C61.119,50.156 63.012,55.523 66.214,59.869C68.017,62.316 70.234,64.436 72.764,66.129C76.927,68.914 81.929,70.539 87.312,70.539C101.777,70.539 113.506,58.81 113.506,44.345C113.506,29.878 101.777,18.15 87.31,18.15C81.929,18.15 76.927,19.775 72.764,22.56C70.234,24.251 68.017,26.373 66.214,28.819C64.847,26.069 63.129,23.526 61.119,21.246C59.189,19.06 56.99,17.115 54.573,15.468C48.974,11.652 42.21,9.419 34.924,9.419C15.636,9.419 0,25.055 0,44.343C0,63.632 15.636,79.269 34.924,79.269C42.21,79.269 48.974,77.035 54.573,73.22C56.543,75.452 58.734,77.481 61.119,79.271C68.415,84.752 77.484,88 87.31,88C111.422,88 130.968,68.455 130.968,44.343C130.968,20.234 111.422,0.688 87.31,0.688Z ",Jt="M87.31,53.082C92.128,53.082 96.033,49.177 96.033,44.359C96.033,39.543 92.128,35.638 87.31,35.638C82.493,35.638 78.587,39.542 78.587,44.359C78.587,49.177 82.493,53.082 87.31,53.082Z M34.923,53.082C30.107,53.082 26.201,49.177 26.201,44.359C26.201,39.542 30.107,35.638 34.923,35.638C39.742,35.638 43.646,39.542 43.646,44.359C43.646,49.177 39.742,53.082 34.923,53.082ZM45.831,30.711C42.841,28.316 39.052,26.881 34.924,26.881C25.281,26.881 17.461,34.701 17.461,44.345C17.461,53.988 25.281,61.806 34.924,61.806C39.052,61.806 42.841,60.372 45.831,57.978C49.826,54.777 52.386,49.861 52.386,44.345C52.386,38.826 49.826,33.912 45.831,30.711Z";function Qt(t,e){const n=t.getTotalLength();return t.style.strokeDasharray=`${n*e} ${n*(1-e)}`,{update(r){t.style.strokeDasharray=`${n*r} ${n*(1-r)}`}}}function Ut(t,e){const{delay:n=0,duration:r=2,easing:i=pt}=e,o=parseFloat(getComputedStyle(t).strokeWidth);return{delay:n,duration:r,easing:i,css:s=>`opacity: ${s}; stroke-width: ${s*o}`}}const{window:Vt}=Ft;function Xt(t,e,n){const r=t.slice();return r[10]=e[n],r[12]=n,r}function et(t){let e,n;return{c(){e=W("path"),D(e,"stroke","#890c58"),D(e,"fill","#890c58"),D(e,"stroke-width","1.5"),g(e,"d",Jt),g(e,"class","svelte-6suhi7")},m(r,i){T(r,e,i)},p(r,i){},i(r){n||v(()=>{n=mt(e,Ut,{duration:400,delay:1e3,easing:Bt}),n.start()})},o:y,d(r){r&&x(e)}}}function Yt(t){let e,n="GO",r=[];for(let i=0;i<n.length;i+=1)r[i]=ee(Xt(t,n,i));return{c(){e=O("div");for(let i=0;i<r.length;i+=1)r[i].c();g(e,"class","centered svelte-6suhi7")},m(i,o){T(i,e,o);for(let s=0;s<r.length;s+=1)r[s].m(e,null)},p:y,i(i){for(let o=0;o<n.length;o+=1)$(r[o])},o:y,d(i){i&&x(e),wt(r,i)}}}function te(t){let e,n,r,i,o,s;return{c(){e=O("div"),n=O("span"),r=j(t[1]),i=j("s"),g(e,"class","timer-value svelte-6suhi7")},m(c,f){T(c,e,f),w(e,n),w(n,r),w(n,i),s=!0},p(c,f){(!s||f&2)&&xt(r,c[1])},i(c){s||(o&&o.end(1),s=!0)},o(c){o=qt(e,Wt,{y:-20,duration:1e3}),s=!1},d(c){c&&x(e),c&&o&&o.end()}}}function ee(t){let e,n,r;return{c(){e=O("span"),n=j(t[10]),g(e,"class","svelte-6suhi7")},m(i,o){T(i,e,o),w(e,n)},p:y,i(i){r||v(()=>{r=mt(e,It,{delay:1e3+t[12]*150,duration:800}),r.start()})},o:y,d(i){i&&x(e)}}}function ne(t){let e,n,r,i,o,s,c,f,l,m,u=!t[0]&&et();const p=[te,Yt],d=[];function h(a,_){return a[0]?0:1}return s=h(t),c=d[s]=p[s](t),{c(){e=O("div"),n=W("svg"),u&&u.c(),r=W("path"),o=$t(),c.c(),D(r,"stroke","#890c58"),D(r,"stroke-width","1.5"),g(r,"d",Ht),g(r,"class","svelte-6suhi7"),g(n,"align","center"),g(n,"width","100"),g(n,"height","100"),g(n,"xmlns","http://www.w3.org/2000/svg"),g(n,"viewBox","-50 -10 225 105"),g(n,"class","svelte-6suhi7"),g(e,"class","app svelte-6suhi7")},m(a,_){T(a,e,_),w(e,n),u&&u.m(n,null),w(n,r),w(e,o),d[s].m(e,null),f=!0,l||(m=[vt(Vt,"keydown",t[3]),gt(i=Qt.call(null,r,t[2]))],l=!0)},p(a,[_]){a[0]?u&&(u.d(1),u=null):u?(u.p(a,_),_&1&&$(u,1)):(u=et(),u.c(),$(u,1),u.m(n,r)),i&&N(i.update)&&_&4&&i.update.call(null,a[2]);let C=s;s=h(a),s===C?d[s].p(a,_):(Lt(),tt(d[C],1,1,()=>{d[C]=null}),Tt(),c=d[s],c?c.p(a,_):(c=d[s]=p[s](a),c.c()),$(c,1),c.m(e,null))},i(a){f||($(u),$(c),f=!0)},o(a){tt(c),f=!1},d(a){a&&x(e),u&&u.d(),d[s].d(),l=!1,k(m)}}}function re(t,e,n){let r,i,o,s,c,f,m;function u(){n(5,m=new Date().getTime())}const p=Gt(new Date().getTime(),d=>{let h;const a=()=>{d(new Date().getTime()),h=requestAnimationFrame(a)};if(window.requestAnimationFrame)return a(),()=>cancelAnimationFrame(h)});return yt(t,p,d=>n(8,f=d)),t.$$.update=()=>{t.$$.dirty&288&&n(7,r=f-m),t.$$.dirty&128&&n(0,i=4e3-r>0?4e3-r:0),t.$$.dirty&1&&n(2,o=1-i/4e3),t.$$.dirty&1&&n(6,s=Math.floor(i/(60*1e3))),t.$$.dirty&65&&n(1,c=Math.floor((i-s*60*1e3)/1e3))},[i,c,o,u,p,m,s,r,f]}class ie extends Rt{constructor(e){super(),zt(this,e,re,ne,rt,{})}}new ie({target:document.getElementById("app")});