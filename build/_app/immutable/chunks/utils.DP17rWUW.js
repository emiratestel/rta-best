var Mn=Array.isArray,Ln=Array.from,qn=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,Qt=Object.getOwnPropertyDescriptors,Hn=Object.prototype,Yn=Array.prototype,Wt=Object.getPrototypeOf;function jn(t){return typeof t=="function"}const Xt=()=>{};function Bn(t){return t()}function tn(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,yt=4,B=8,lt=16,A=32,J=64,tt=128,O=256,K=512,d=1024,x=2048,P=4096,k=8192,F=16384,nn=32768,wt=65536,Un=1<<17,rn=1<<19,mt=1<<20,pt=Symbol("$state"),Vn=Symbol("legacy props"),Gn=Symbol("");function Tt(t){return t===this.v}function en(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function At(t){return!en(t,this.v)}function sn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ln(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function an(t){throw new Error("https://svelte.dev/e/effect_orphan")}function un(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Kn(){throw new Error("https://svelte.dev/e/hydration_failed")}function $n(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Zn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function zn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function on(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function fn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Q=!1;function Jn(){Q=!0}const Qn=1,Wn=2,Xn=4,tr=8,nr=16,rr=1,er=2,sr=4,lr=8,ar=16,ur=1,or=2,_n="[",cn="[!",vn="]",gt={},ir=Symbol(),fr="http://www.w3.org/2000/svg";function at(t,n){var r={f:0,v:t,reactions:null,equals:Tt,version:0};return r}function _r(t){return pn(at(t))}function cr(t,n=!1){var e;const r=at(t);return n||(r.equals=At),Q&&o!==null&&o.l!==null&&((e=o.l).s??(e.s=[])).push(r),r}function pn(t){return i!==null&&i.f&y&&(T===null?Dn([t]):T.push(t)),t}function xt(t,n){return i!==null&&ft()&&i.f&(y|lt)&&(T===null||!T.includes(t))&&fn(),hn(t,n)}function hn(t,n){return t.equals(n)||(t.v=n,t.version=Ut(),St(t,x),ft()&&u!==null&&u.f&d&&!(u.f&A)&&(h!==null&&h.includes(t)?(m(u,x),X(u)):g===null?In([t]):g.push(t))),n}function St(t,n){var r=t.reactions;if(r!==null)for(var e=ft(),s=r.length,l=0;l<s;l++){var a=r[l],f=a.f;f&x||!e&&a===u||(m(a,n),f&(d|O)&&(f&y?St(a,P):X(a)))}}function Rt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let D=!1;function vr(t){D=t}let w;function q(t){if(t===null)throw Rt(),gt;return w=t}function pr(){return q(C(w))}function hr(t){if(D){if(C(w)!==null)throw Rt(),gt;w=t}}function dr(t=1){if(D){for(var n=t,r=w;n--;)r=C(r);w=r}}function Er(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===vn){if(t===0)return n;t-=1}else(r===_n||r===cn)&&(t+=1)}var e=C(n);n.remove(),n=e}}var ht,dn,Dt,It;function yr(){if(ht===void 0){ht=window,dn=document;var t=Element.prototype,n=Node.prototype;Dt=vt(n,"firstChild").get,It=vt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function nt(t=""){return document.createTextNode(t)}function rt(t){return Dt.call(t)}function C(t){return It.call(t)}function wr(t,n){if(!D)return rt(t);var r=rt(w);if(r===null)r=w.appendChild(nt());else if(n&&r.nodeType!==3){var e=nt();return r==null||r.before(e),q(e),e}return q(r),r}function mr(t,n){if(!D){var r=rt(t);return r instanceof Comment&&r.data===""?C(r):r}return w}function Tr(t,n=1,r=!1){let e=D?w:t;for(var s;n--;)s=e,e=C(e);if(!D)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=nt();return e===null?s==null||s.after(a):e.before(a),q(a),a}return q(e),e}function Ar(t){t.textContent=""}function En(t){var n=y|x;u===null?n|=O:u.f|=mt;var r=i!==null&&i.f&y?i:null;const e={children:null,ctx:o,deps:null,equals:Tt,f:n,fn:t,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function gr(t){const n=En(t);return n.equals=At,n}function Ot(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?ut(e):I(e)}}}function yn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function Ct(t){var n,r=u;z(yn(t));try{Ot(t),n=Vt(t)}finally{z(r)}return n}function Nt(t){var n=Ct(t),r=(R||t.f&O)&&t.deps!==null?P:d;m(t,r),t.equals(n)||(t.v=n,t.version=Ut())}function ut(t){Ot(t),j(t,0),m(t,F),t.v=t.children=t.deps=t.ctx=t.reactions=null}function bt(t){u===null&&i===null&&an(),i!==null&&i.f&O&&ln(),it&&sn()}function wn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function M(t,n,r,e=!0){var s=(t&J)!==0,l=u,a={ctx:o,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|x,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var f=N;try{dt(!0),U(a),a.f|=nn}catch(c){throw I(a),c}finally{dt(f)}}else n!==null&&X(a);var _=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&mt)===0;if(!_&&!s&&e&&(l!==null&&wn(a,l),i!==null&&i.f&y)){var p=i;(p.children??(p.children=[])).push(a)}return a}function xr(t){const n=M(B,null,!1);return m(n,d),n.teardown=t,n}function Sr(t){bt();var n=u!==null&&(u.f&A)!==0&&o!==null&&!o.m;if(n){var r=o;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:i})}else{var e=kt(t);return e}}function Rr(t){return bt(),ot(t)}function Dr(t){const n=M(J,t,!0);return(r={})=>new Promise(e=>{r.outro?An(n,()=>{I(n),e(void 0)}):(I(n),e(void 0))})}function kt(t){return M(yt,t,!1)}function Ir(t,n){var r=o,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=ot(()=>{t(),!e.ran&&(e.ran=!0,xt(r.l.r2,!0),Jt(n))})}function Or(){var t=o;ot(()=>{if(zt(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&d&&m(r,P),L(r)&&U(r),n.ran=!1}t.l.r2.v=!1}})}function ot(t){return M(B,t,!0)}function Cr(t){return mn(t)}function mn(t,n=0){return M(B|lt|n,t,!0)}function Nr(t,n=!0){return M(B|A,t,!0,n)}function Pt(t){var n=t.teardown;if(n!==null){const r=it,e=i;Et(!0),Z(null);try{n.call(null)}finally{Et(r),Z(e)}}}function Ft(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ut(n[r])}}function Mt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;I(r,n),r=e}}function Tn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&A||I(n),n=r}}function I(t,n=!0){var r=!1;if((n||t.f&rn)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:C(e);e.remove(),e=l}r=!0}Mt(t,n&&!r),Ft(t),j(t,0),m(t,F);var a=t.transitions;if(a!==null)for(const _ of a)_.stop();Pt(t);var f=t.parent;f!==null&&f.first!==null&&Lt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Lt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function An(t,n){var r=[];qt(t,r,!0),gn(r,()=>{I(t),n&&n()})}function gn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function qt(t,n,r){if(!(t.f&k)){if(t.f^=k,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&wt)!==0||(e.f&A)!==0;qt(e,n,l?r:!1),e=s}}}function br(t){Ht(t,!0)}function Ht(t,n){if(t.f&k){L(t)&&U(t),t.f^=k;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&wt)!==0||(r.f&A)!==0;Ht(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let $=!1,et=[];function Yt(){$=!1;const t=et.slice();et=[],tn(t)}function kr(t){$||($=!0,queueMicrotask(Yt)),et.push(t)}function xn(){$&&Yt()}function Sn(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const jt=0,Rn=1;let V=!1,G=jt,H=!1,Y=null,N=!1,it=!1;function dt(t){N=t}function Et(t){it=t}let S=[],b=0;let i=null;function Z(t){i=t}let u=null;function z(t){u=t}let T=null;function Dn(t){T=t}let h=null,E=0,g=null;function In(t){g=t}let Bt=1,R=!1,o=null;function Ut(){return++Bt}function ft(){return!Q||o!==null&&o.l===null}function L(t){var p;var n=t.f;if(n&x)return!0;if(n&P){var r=t.deps,e=(n&O)!==0;if(r!==null){var s,l,a=(n&K)!==0,f=e&&u!==null&&!R,_=r.length;if(a||f){for(s=0;s<_;s++)l=r[s],(p=l==null?void 0:l.reactions)!=null&&p.includes(t)||(l.reactions??(l.reactions=[])).push(t);a&&(t.f^=K)}for(s=0;s<_;s++)if(l=r[s],L(l)&&Nt(l),l.version>t.version)return!0}(!e||u!==null&&!R)&&m(t,d)}return!1}function On(t,n){for(var r=n;r!==null;){if(r.f&tt)try{r.fn(t);return}catch{r.f^=tt}r=r.parent}throw V=!1,t}function Cn(t){return(t.f&F)===0&&(t.parent===null||(t.parent.f&tt)===0)}function W(t,n,r,e){if(V){if(r===null&&(V=!1),Cn(n))throw t;return}r!==null&&(V=!0);{On(t,n);return}}function Vt(t){var ct;var n=h,r=E,e=g,s=i,l=R,a=T,f=o,_=t.f;h=null,E=0,g=null,i=_&(A|J)?null:t,R=!N&&(_&O)!==0,T=null,o=t.ctx;try{var p=(0,t.fn)(),c=t.deps;if(h!==null){var v;if(j(t,E),c!==null&&E>0)for(c.length=E+h.length,v=0;v<h.length;v++)c[E+v]=h[v];else t.deps=c=h;if(!R)for(v=E;v<c.length;v++)((ct=c[v]).reactions??(ct.reactions=[])).push(t)}else c!==null&&E<c.length&&(j(t,E),c.length=E);return p}finally{h=n,E=r,g=e,i=s,R=l,T=a,o=f}}function Nn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&y&&(h===null||!h.includes(n))&&(m(n,P),n.f&(O|K)||(n.f^=K),j(n,0))}function j(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Nn(t,r[e])}function U(t){var n=t.f;if(!(n&F)){m(t,d);var r=u,e=o;u=t;try{n&lt?Tn(t):Mt(t),Ft(t),Pt(t);var s=Vt(t);t.teardown=typeof s=="function"?s:null,t.version=Bt}catch(l){W(l,t,r,e||t.ctx)}finally{u=r}}}function Gt(){if(b>1e3){b=0;try{un()}catch(t){if(Y!==null)W(t,Y,null);else throw t}}b++}function Kt(t){var n=t.length;if(n!==0){Gt();var r=N;N=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&d||(s.f^=d);var l=[];$t(s,l),bn(l)}}finally{N=r}}}function bn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(F|k)))try{L(e)&&(U(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Lt(e):e.fn=null))}catch(s){W(s,e,null,e.ctx)}}}function kn(){if(H=!1,b>1001)return;const t=S;S=[],Kt(t),H||(b=0,Y=null)}function X(t){G===jt&&(H||(H=!0,queueMicrotask(kn))),Y=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(J|A)){if(!(r&d))return;n.f^=d}}S.push(n)}function $t(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&A)!==0,a=l&&(s&d)!==0,f=r.next;if(!a&&!(s&k))if(s&B){if(l)r.f^=d;else try{L(r)&&U(r)}catch(v){W(v,r,null,r.ctx)}var _=r.first;if(_!==null){r=_;continue}}else s&yt&&e.push(r);if(f===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var p=v.next;if(p!==null){r=p;continue t}v=v.parent}}r=f}for(var c=0;c<e.length;c++)_=e[c],n.push(_),$t(_,n)}function Zt(t){var n=G,r=S;try{Gt();const s=[];G=Rn,S=s,H=!1,Kt(r);var e=t==null?void 0:t();return xn(),(S.length>0||s.length>0)&&Zt(),b=0,Y=null,e}finally{G=n,S=r}}async function Pr(){await Promise.resolve(),Zt()}function zt(t){var c;var n=t.f,r=(n&y)!==0;if(r&&n&F){var e=Ct(t);return ut(t),e}if(i!==null){T!==null&&T.includes(t)&&on();var s=i.deps;h===null&&s!==null&&s[E]===t?E++:h===null?h=[t]:h.push(t),g!==null&&u!==null&&u.f&d&&!(u.f&A)&&g.includes(t)&&(m(u,x),X(u))}else if(r&&t.deps===null)for(var l=t,a=l.parent,f=l;a!==null;)if(a.f&y){var _=a;f=_,a=_.parent}else{var p=a;(c=p.deriveds)!=null&&c.includes(f)||(p.deriveds??(p.deriveds=[])).push(f);break}return r&&(l=t,L(l)&&Nt(l)),t.v}function Jt(t){const n=i;try{return i=null,t()}finally{i=n}}const Pn=~(x|P|d);function m(t,n){t.f=t.f&Pn|n}function Fr(t){return _t().get(t)}function Mr(t,n){return _t().set(t,n),n}function Lr(t){return _t().has(t)}function _t(t){return o===null&&Sn(),o.c??(o.c=new Map(Fn(o)||void 0))}function Fn(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function qr(t,n=1){var r=zt(t),e=n===1?r++:r--;return xt(t,r),e}function Hr(t,n=!1,r){o={p:o,c:null,e:null,m:!1,s:t,x:null,l:null},Q&&!n&&(o.l={s:null,u:null,r1:[],r2:at(!1)})}function Yr(t){const n=o;if(n!==null){const a=n.e;if(a!==null){var r=u,e=i;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];z(l.effect),Z(l.reaction),kt(l.fn)}}finally{z(r),Z(e)}}o=n.p,n.m=!0}return{}}function jr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(pt in t)st(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&pt in r&&st(r)}}}function st(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{st(t[e],n)}catch{}const r=Wt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Qt(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}function Br(t,n,r){if(t==null)return n(void 0),r&&r(void 0),Xt;const e=Jt(()=>t.subscribe(n,r));return e.unsubscribe?()=>e.unsubscribe():e}export{sr as $,En as A,Jn as B,Hr as C,mr as D,wt as E,Cr as F,Yr as G,cn as H,wr as I,hr as J,Tr as K,Hn as L,Yn as M,at as N,Zn as O,xt as P,vt as Q,u as R,pt as S,zn as T,ir as U,Wt as V,Mn as W,xr as X,cr as Y,$n as Z,Un as _,en as a,At as a0,qr as a1,A as a2,J as a3,z as a4,rr as a5,er as a6,lr as a7,Vn as a8,gr as a9,Z as aA,rn as aB,_n as aC,ur as aD,or as aE,yr as aF,gt as aG,Rt as aH,Kn as aI,Dr as aJ,fr as aK,Mr as aL,Lr as aM,Fr as aN,Ir as aO,Or as aP,dr as aQ,jn as aa,ar as ab,Zt as ac,qn as ad,Pr as ae,_r as af,Gn as ag,Qt as ah,nt as ai,Ln as aj,k as ak,Qn as al,hn as am,Wn as an,qt as ao,Ar as ap,gn as aq,I as ar,Xn as as,rt as at,vn as au,i as av,tr as aw,nr as ax,C as ay,dn as az,Q as b,o as c,Jt as d,pr as e,mn as f,Er as g,D as h,q as i,vr as j,br as k,Sn as l,Nr as m,Xt as n,w as o,An as p,kt as q,tn as r,Br as s,ot as t,Sr as u,kr as v,Rr as w,Bn as x,zt as y,jr as z};