import{aA as S,a4 as R,av as W,R as A,X as x,v as U,ad as Y,W as q,ai as b,f as X,aB as z,h as f,aC as P,ay as D,j as g,i as N,o as u,at as w,aD as J,aE as K,e as j,aF as I,aG as C,au as Q,aH as Z,aI as ee,ap as te,aj as re,aJ as ae,m as ne,C as oe,G as ie,c as se}from"./utils.DP17rWUW.js";function Ee(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ue=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ge(e){return ue.includes(e)}const le={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject"};function we(e){return e=e.toLowerCase(),le[e]??e}const de=["touchstart","touchmove"];function ce(e){return de.includes(e)}const fe=["textarea","script","style","title"];function Te(e){return fe.includes(e)}function _e(e){var t=W,r=A;S(null),R(null);try{return e()}finally{S(t),R(r)}}const H=new Set,M=new Set;function ve(e,t,r,o){function n(a){if(o.capture||T.call(t,a),!a.cancelBubble)return _e(()=>r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?U(()=>{t.addEventListener(e,n,o)}):t.addEventListener(e,n,o),n}function be(e,t,r,o,n){var a={capture:o,passive:n},i=ve(e,t,r,a);(t===document.body||t===window||t===document)&&x(()=>{t.removeEventListener(e,i,a)})}function Ne(e){for(var t=0;t<e.length;t++)H.add(e[t]);for(var r of M)r(e)}function T(e){var V;var t=this,r=t.ownerDocument,o=e.type,n=((V=e.composedPath)==null?void 0:V.call(e))||[],a=n[0]||e.target,i=0,_=e.__root;if(_){var d=n.indexOf(_);if(d!==-1&&(t===document||t===window)){e.__root=t;return}var y=n.indexOf(t);if(y===-1)return;d<=y&&(i=d)}if(a=n[i]||e.target,a!==t){Y(e,"currentTarget",{configurable:!0,get(){return a||r}});var k=W,v=A;S(null),R(null);try{for(var s,l=[];a!==null;){var p=a.assignedSlot||a.parentNode||a.host||null;try{var m=a["__"+o];if(m!==void 0&&!a.disabled)if(q(m)){var[$,...G]=m;$.apply(a,[e,...G])}else m.call(a,e)}catch(L){s?l.push(L):s=L}if(e.cancelBubble||p===t||p===null)break;a=p}if(s){for(let L of l)queueMicrotask(()=>{throw L});throw s}}finally{e.__root=t,delete e.currentTarget,S(k),R(v)}}}let c;function he(){c=void 0}function Ae(e){let t=null,r=f;var o;if(f){for(t=u,c===void 0&&(c=w(document.head));c!==null&&(c.nodeType!==8||c.data!==P);)c=D(c);c===null?g(!1):c=N(D(c))}f||(o=document.head.appendChild(b()));try{X(()=>e(o),z)}finally{r&&(g(!0),c=u,N(t))}}function B(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function h(e,t){var r=A;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function Le(e,t){var r=(t&J)!==0,o=(t&K)!==0,n,a=!e.startsWith("<!>");return()=>{if(f)return h(u,null),u;n===void 0&&(n=B(a?e:"<!>"+e),r||(n=w(n)));var i=o?document.importNode(n,!0):n.cloneNode(!0);if(r){var _=w(i),d=i.lastChild;h(_,d)}else h(i,i);return i}}function Se(e,t,r="svg"){var o=!e.startsWith("<!>"),n=`<${r}>${o?e:"<!>"+e}</${r}>`,a;return()=>{if(f)return h(u,null),u;if(!a){var i=B(n),_=w(i);a=w(_)}var d=a.cloneNode(!0);return h(d,d),d}}function Re(e=""){if(!f){var t=b(e+"");return h(t,t),t}var r=u;return r.nodeType!==3&&(r.before(r=b()),N(r)),h(r,r),r}function ke(){if(f)return h(u,null),u;var e=document.createDocumentFragment(),t=document.createComment(""),r=b();return e.append(t,r),h(t,r),e}function Ce(e,t){if(f){A.nodes_end=u,j();return}e!==null&&e.before(t)}function De(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function pe(e,t){return F(e,t)}function Ie(e,t){I(),t.intro=t.intro??!1;const r=t.target,o=f,n=u;try{for(var a=w(r);a&&(a.nodeType!==8||a.data!==P);)a=D(a);if(!a)throw C;g(!0),N(a),j();const i=F(e,{...t,anchor:a});if(u===null||u.nodeType!==8||u.data!==Q)throw Z(),C;return g(!1),i}catch(i){if(i===C)return t.recover===!1&&ee(),I(),te(r),g(!1),pe(e,t);throw i}finally{g(o),N(n),he()}}const E=new Map;function F(e,{target:t,anchor:r,props:o={},events:n,context:a,intro:i=!0}){I();var _=new Set,d=v=>{for(var s=0;s<v.length;s++){var l=v[s];if(!_.has(l)){_.add(l);var p=ce(l);t.addEventListener(l,T,{passive:p});var m=E.get(l);m===void 0?(document.addEventListener(l,T,{passive:p}),E.set(l,1)):E.set(l,m+1)}}};d(re(H)),M.add(d);var y=void 0,k=ae(()=>{var v=r??t.appendChild(b());return ne(()=>{if(a){oe({});var s=se;s.c=a}n&&(o.$$events=n),f&&h(v,null),y=e(v,o)||{},f&&(A.nodes_end=u),a&&ie()}),()=>{var p;for(var s of _){t.removeEventListener(s,T);var l=E.get(s);--l===0?(document.removeEventListener(s,T),E.delete(s)):E.set(s,l)}M.delete(d),v!==r&&((p=v.parentNode)==null||p.removeChild(v))}});return O.set(y,k),y}let O=new WeakMap;function Me(e,t){const r=O.get(e);return r?(O.delete(e),r(t)):Promise.resolve()}const me="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(me);export{Ce as a,Re as b,ke as c,ve as d,Ne as e,ge as f,Ae as g,Ie as h,Ee as i,h as j,Te as k,be as l,pe as m,we as n,Se as o,De as s,Le as t,Me as u};
