var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function s(e){try{l(n.next(e))}catch(t){i(t)}}function o(e){try{l(n["throw"](e))}catch(t){i(t)}}function l(e){e.done?r(e.value):a(e.value).then(s,o)}l((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;a=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(s[0]===6&&r.label<i[1]){r.label=i[1];i=s;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(s);break}if(i[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(o){s=[6,o];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),a=0,t=0;t<r;t++)for(var i=arguments[t],s=0,o=i.length;s<o;s++,a++)n[a]=i[s];return n};System.register([],(function(e,t){"use strict";return{execute:function(){var r=this;var n="carage";var a=0;var i=false;var s;var o;var l;var f=false;var $=false;var u=false;var c=false;var v=window;var d=document;var h={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)}};var m=function(){return!!d.documentElement.attachShadow}();var p=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var g=new WeakMap;var y=function(e){return g.get(e)};var b=e("r",(function(e,t){return g.set(t.$lazyInstance$=e,t)}));var w=function(e){var t={$flags$:0,$hostElement$:e,$instanceValues$:new Map};{t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return g.set(e,t)};var R=function(e,t){return t in e};var S=function(e){return console.error(e)};var _=new Map;var N=function(e,r,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=_.get(i);if(s){return s[a]}return t.import("./"+i+".entry.js"+"").then((function(e){{_.set(i,e)}return e[a]}),S)};var x=new Map;var T=[];var E=[];var j=[];var C=function(e,t){return function(r){e.push(r);if(!i){i=true;if(t&&h.$flags$&4){O(A)}else{h.raf(A)}}}};var k=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(r){S(r)}}e.length=0};var L=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(a){S(a)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var A=function(){a++;k(T);var e=(h.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;L(E,e);L(j,e);if(E.length>0){j.push.apply(j,E);E.length=0}if(i=T.length+E.length+j.length>0){h.raf(A)}else{a=0}};var O=function(e){return Promise.resolve().then(e)};var U=C(E,true);var P={};var B=function(e){return e!=null};var M=function(e){e=typeof e;return e==="object"||e==="function"};var I=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var H=e("a",(function(){if(!(v.CSS&&v.CSS.supports&&v.CSS.supports("color","var(--c)"))){return t.import("./p-a614138e.system.js").then((function(){h.$cssShim$=v.__stencil_cssshim;if(h.$cssShim$){return h.$cssShim$.initShim()}}))}return Promise.resolve()}));var z=e("p",(function(){return __awaiter(r,void 0,void 0,(function(){var e,r,a,i,s;return __generator(this,(function(o){switch(o.label){case 0:{h.$cssShim$=v.__stencil_cssshim}e=t.meta.url;r=new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)");a=Array.from(d.querySelectorAll("script")).find((function(e){return r.test(e.src)||e.getAttribute("data-stencil-namespace")===n}));i=a["data-opts"];if(!(e!==""))return[3,1];return[2,Object.assign(Object.assign({},i),{resourcesUrl:new URL(".",e).href})];case 1:s=new URL(".",new URL(a.getAttribute("data-resources-url")||a.src,v.location.href));q(s.href);if(!!window.customElements)return[3,3];return[4,t.import("./p-5b416380.system.js")];case 2:o.sent();o.label=3;case 3:return[2,Object.assign(Object.assign({},i),{resourcesUrl:s.href})]}}))}))}));var q=function(e){var t=I(n);try{v[t]=new Function("w","return import(w);//"+Math.random())}catch(a){var r=new Map;v[t]=function(n){var a=new URL(n,e).href;var i=r.get(a);if(!i){var s=d.createElement("script");s.type="module";s.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+t+".m = m;"],{type:"application/javascript"}));i=new Promise((function(e){s.onload=function(){e(v[t].m);s.remove()}}));r.set(a,i);d.head.appendChild(s)}return i}}};var V=function(e,t){if(e!=null&&!M(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};var F="hydrated";var W=function(e,t){if(t===void 0){t=""}{return function(){return}}};var G=function(e,t){{return function(){return}}};var Q=new WeakMap;var D=function(e,t,r){var n=x.get(e);if(p&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}x.set(e,n)};var J=function(e,t,r,n){var a=X(t.$tagName$);var i=x.get(a);e=e.nodeType===11?e:d;if(i){if(typeof i==="string"){e=e.head||e;var s=Q.get(e);var o=void 0;if(!s){Q.set(e,s=new Set)}if(!s.has(a)){{if(h.$cssShim$){o=h.$cssShim$.createHostStyle(n,a,i,!!(t.$flags$&10));var l=o["s-sc"];if(l){a=l;s=null}}else{o=d.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var K=function(e,t,r){var n=W("attachStyles",t.$tagName$);var a=J(m&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t,r,e);if(t.$flags$&10){e["s-sc"]=a;e.classList.add(a+"-h")}n()};var X=function(e,t){return"sc-"+e};var Y=e("h",(function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=null;var s=false;var o=false;var l=[];var f=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(s=typeof e!=="function"&&!M(a)){a=String(a)}if(s&&o){l[l.length-1].$text$+=a}else{l.push(s?Z(null,a):a)}o=s}}};f(r);if(t){if(t.name){i=t.name}{var $=t.className||t.class;if($){t.class=typeof $!=="object"?$:Object.keys($).filter((function(e){return $[e]})).join(" ")}}}if(typeof e==="function"){return e(t,l,re)}var u=Z(e,null);u.$attrs$=t;if(l.length>0){u.$children$=l}{u.$name$=i}return u}));var Z=function(e,t){var r={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{r.$attrs$=null}{r.$name$=null}return r};var ee=e("H",{});var te=function(e){return e&&e.$tag$===ee};var re={forEach:function(e,t){return e.map(ne).forEach(t)},map:function(e,t){return e.map(ne).map(t).map(ae)}};var ne=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var ae=function(e){var t=Z(e.vtag,e.vtext);t.$attrs$=e.vattrs;t.$children$=e.vchildren;t.$key$=e.vkey;t.$name$=e.vname;return t};var ie=function(e,t,r,n,a,i){if(r===n){return}var s=R(e,t);var o=t.toLowerCase();if(t==="class"){var l=e.classList;var f=oe(r);var $=oe(n);l.remove.apply(l,f.filter((function(e){return e&&!$.includes(e)})));l.add.apply(l,$.filter((function(e){return e&&!f.includes(e)})))}else if(!s&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(R(v,o)){t=o.slice(2)}else{t=o[2]+t.slice(3)}if(r){h.rel(e,t,r,false)}if(n){h.ael(e,t,n,false)}}else{var u=M(n);if((s||u&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var c=n==null?"":n;if(t==="list"){s=false}else if(r==null||e[t]!=c){e[t]=c}}else{e[t]=n}}catch(d){}}if(n==null||n===false){{e.removeAttribute(t)}}else if((!s||i&4||a)&&!u){n=n===true?"":n;{e.setAttribute(t,n)}}}};var se=/\s/;var oe=function(e){return!e?[]:e.split(se)};var le=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||P;var s=t.$attrs$||P;{for(n in i){if(!(n in s)){ie(a,n,i[n],undefined,r,t.$flags$)}}}for(n in s){ie(a,n,i[n],s[n],r,t.$flags$)}};var fe=function(e,t,r,n){var a=t.$children$[r];var i=0;var $;var v;var h;if(!f){u=true;if(a.$tag$==="slot"){if(s){n.classList.add(s+"-s")}a.$flags$|=a.$children$?2:1}}if(a.$text$!==null){$=a.$elm$=d.createTextNode(a.$text$)}else if(a.$flags$&1){$=a.$elm$=d.createTextNode("")}else{$=a.$elm$=d.createElement(a.$flags$&2?"slot-fb":a.$tag$);{le(null,a,c)}if(B(s)&&$["s-si"]!==s){$.classList.add($["s-si"]=s)}if(a.$children$){for(i=0;i<a.$children$.length;++i){v=fe(e,a,i,$);if(v){$.appendChild(v)}}}}{$["s-hn"]=l;if(a.$flags$&(2|1)){$["s-sr"]=true;$["s-cr"]=o;$["s-sn"]=a.$name$||"";h=e&&e.$children$&&e.$children$[r];if(h&&h.$tag$===a.$tag$&&e.$elm$){$e(e.$elm$,false)}}}return $};var $e=function(e,t){h.$flags$|=1;var r=e.childNodes;for(var n=r.length-1;n>=0;n--){var a=r[n];if(a["s-hn"]!==l&&a["s-ol"]){me(a).insertBefore(a,he(a));a["s-ol"].remove();a["s-ol"]=undefined;u=true}if(t){$e(a,t)}}h.$flags$&=~1};var ue=function(e,t,r,n,a,i){var s=e["s-cr"]&&e["s-cr"].parentNode||e;var o;if(s.shadowRoot&&s.tagName===l){s=s.shadowRoot}for(;a<=i;++a){if(n[a]){o=fe(null,r,a,e);if(o){n[a].$elm$=o;s.insertBefore(o,he(t))}}}};var ce=function(e,t,r,n,a){for(;t<=r;++t){if(n=e[t]){a=n.$elm$;{$=true;if(a["s-ol"]){a["s-ol"].remove()}else{$e(a,true)}}a.remove()}}};var ve=function(e,t,r,n){var a=0;var i=0;var s=t.length-1;var o=t[0];var l=t[s];var f=n.length-1;var $=n[0];var u=n[f];var c;while(a<=s&&i<=f){if(o==null){o=t[++a]}else if(l==null){l=t[--s]}else if($==null){$=n[++i]}else if(u==null){u=n[--f]}else if(de(o,$)){pe(o,$);o=t[++a];$=n[++i]}else if(de(l,u)){pe(l,u);l=t[--s];u=n[--f]}else if(de(o,u)){if(o.$tag$==="slot"||u.$tag$==="slot"){$e(o.$elm$.parentNode,false)}pe(o,u);e.insertBefore(o.$elm$,l.$elm$.nextSibling);o=t[++a];u=n[--f]}else if(de(l,$)){if(o.$tag$==="slot"||u.$tag$==="slot"){$e(l.$elm$.parentNode,false)}pe(l,$);e.insertBefore(l.$elm$,o.$elm$);l=t[--s];$=n[++i]}else{{c=fe(t&&t[i],r,i,e);$=n[++i]}if(c){{me(o.$elm$).insertBefore(c,he(o.$elm$))}}}}if(a>s){ue(e,n[f+1]==null?null:n[f+1].$elm$,r,n,i,f)}else if(i>f){ce(t,a,s)}};var de=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}return true}return false};var he=function(e){return e&&e["s-ol"]||e};var me=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var pe=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;var i;if(t.$text$===null){{if(t.$tag$==="slot");else{le(e,t,c)}}if(n!==null&&a!==null){ve(r,n,t,a)}else if(a!==null){if(e.$text$!==null){r.textContent=""}ue(r,null,t,a,0,a.length-1)}else if(n!==null){ce(n,0,n.length-1)}}else if(i=r["s-cr"]){i.parentNode.textContent=t.$text$}else if(e.$text$!==t.$text$){r.data=t.$text$}};var ge=function(e){var t=e.childNodes;var r;var n;var a;var i;var s;var o;for(n=0,a=t.length;n<a;n++){r=t[n];if(r.nodeType===1){if(r["s-sr"]){s=r["s-sn"];r.hidden=false;for(i=0;i<a;i++){if(t[i]["s-hn"]!==r["s-hn"]){o=t[i].nodeType;if(s!==""){if(o===1&&s===t[i].getAttribute("slot")){r.hidden=true;break}}else{if(o===1||o===3&&t[i].textContent.trim()!==""){r.hidden=true;break}}}}}ge(r)}}};var ye=[];var be=function(e){var t=e.childNodes;var r=t.length;var n=0;var a=0;var i=0;var s;var o;var l;var f;for(r=t.length;n<r;n++){s=t[n];if(s["s-sr"]&&(o=s["s-cr"])){l=o.parentNode.childNodes;f=s["s-sn"];for(a=l.length-1;a>=0;a--){o=l[a];if(!o["s-cn"]&&!o["s-nr"]&&o["s-hn"]!==s["s-hn"]){i=o.nodeType;if((i===3||i===8)&&f===""||i===1&&o.getAttribute("slot")===null&&f===""||i===1&&o.getAttribute("slot")===f){if(!ye.some((function(e){return e.$nodeToRelocate$===o}))){$=true;o["s-sn"]=f;ye.push({$slotRefNode$:s,$nodeToRelocate$:o})}}}}}if(s.nodeType===1){be(s)}}};var we=function(e,t,r,n){l=e.tagName;var a=t.$vnode$||Z(null,null);var i=te(n)?n:Y(null,null,n);if(r.$attrsToReflect$){i.$attrs$=i.$attrs$||{};r.$attrsToReflect$.forEach((function(t){var r=t[0],n=t[1];return i.$attrs$[n]=e[r]}))}i.$tag$=null;i.$flags$|=4;t.$vnode$=i;i.$elm$=a.$elm$=e.shadowRoot||e;{s=e["s-sc"]}{o=e["s-cr"];f=m&&(r.$flags$&1)!==0;$=false}pe(a,i);{if(u){be(i.$elm$);for(var c=0;c<ye.length;c++){var v=ye[c];if(!v.$nodeToRelocate$["s-ol"]){var p=d.createTextNode("");p["s-nr"]=v.$nodeToRelocate$;v.$nodeToRelocate$.parentNode.insertBefore(v.$nodeToRelocate$["s-ol"]=p,v.$nodeToRelocate$)}}h.$flags$|=1;for(var c=0;c<ye.length;c++){var v=ye[c];var g=v.$slotRefNode$.parentNode;var y=v.$slotRefNode$.nextSibling;var p=v.$nodeToRelocate$["s-ol"];while(p=p.previousSibling){var b=p["s-nr"];if(b&&b["s-sn"]===v.$nodeToRelocate$["s-sn"]&&g===b.parentNode){b=b.nextSibling;if(!b||!b["s-nr"]){y=b;break}}}if(!y&&g!==v.$nodeToRelocate$.parentNode||v.$nodeToRelocate$.nextSibling!==y){if(v.$nodeToRelocate$!==y){g.insertBefore(v.$nodeToRelocate$,y)}}}h.$flags$&=~1}if($){ge(i.$elm$)}ye.length=0}};var Re=function(e,t){if(t&&!e.$onRenderResolve$){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))}};var Se=function(e,t,r,n){{t.$flags$|=16}if(t.$flags$&4){t.$flags$|=512;return}var a=W("scheduleUpdate",r.$tagName$);var i=t.$ancestorComponent$;var s=t.$lazyInstance$;var o=function(){return _e(e,t,r,s,n)};Re(t,i);var l;if(n){{l=Ee(s,"componentWillLoad")}}a();return je(l,(function(){return U(o)}))};var _e=function(e,t,r,n,a){var i=W("update",r.$tagName$);var s=e["s-rc"];if(a){K(e,r,t.$modeName$)}var o=W("render",r.$tagName$);{{try{we(e,t,r,n.render())}catch($){S($)}}}if(h.$cssShim$){h.$cssShim$.updateHost(e)}{t.$flags$&=~16}{t.$flags$|=2}if(s){s.forEach((function(e){return e()}));e["s-rc"]=undefined}o();i();{var l=e["s-p"];var f=function(){return Ne(e,t,r)};if(l.length===0){f()}else{Promise.all(l).then(f);t.$flags$|=4;l.length=0}}};var Ne=function(e,t,r){var n=W("postUpdate",r.$tagName$);var a=t.$ancestorComponent$;if(!(t.$flags$&64)){t.$flags$|=64;{e.classList.add(F)}n();{t.$onReadyResolve$(e);if(!a){Te()}}}else{n()}{if(t.$onRenderResolve$){t.$onRenderResolve$();t.$onRenderResolve$=undefined}if(t.$flags$&512){O((function(){return Se(e,t,r,false)}))}t.$flags$&=~(4|512)}};var xe=function(e,t){{var r=y(e);if((r.$flags$&(2|16))===2){Se(e,r,t,false)}}};var Te=function(e){{d.documentElement.classList.add(F)}{h.$flags$|=2}};var Ee=function(e,t,r){if(e&&e[t]){try{return e[t](r)}catch(n){S(n)}}return undefined};var je=function(e,t){return e&&e.then?e.then(t):t()};var Ce=function(e,t){return y(e).$instanceValues$.get(t)};var ke=function(e,t,r,n){var a=y(e);var i=a.$hostElement$;var s=a.$instanceValues$.get(t);var o=a.$flags$;var l=a.$lazyInstance$;r=V(r,n.$members$[t][0]);if(r!==s&&(!(o&8)||s===undefined)){a.$instanceValues$.set(t,r);if(l){if((o&(2|16))===2){Se(i,a,n,false)}}}};var Le=function(e,t,r){if(t.$members$){var n=Object.entries(t.$members$);var a=e.prototype;n.forEach((function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return Ce(this,n)},set:function(e){ke(this,n,e,t)},configurable:true,enumerable:true})}}));if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=this;h.jmp((function(){var t=i.get(e);n[t]=r===null&&typeof n[t]==="boolean"?false:r}))};e.observedAttributes=n.filter((function(e){var t=e[0],r=e[1];return r[0]&15})).map((function(e){var r=e[0],n=e[1];var a=n[1]||r;i.set(a,r);if(n[0]&512){t.$attrsToReflect$.push([r,a])}return a}))}}return e};var Ae=function(e,n,a,i,s){return __awaiter(r,void 0,void 0,(function(){var r,i,o,l,f,$,u;return __generator(this,(function(c){switch(c.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;s=N(a);if(!s.then)return[3,2];r=G();return[4,s];case 1:s=c.sent();r();c.label=2;case 2:if(!s.isProxied){Le(s,a,2);s.isProxied=true}i=W("createInstance",a.$tagName$);{n.$flags$|=8}try{new s(n)}catch(v){S(v)}{n.$flags$&=~8}i();o=X(a.$tagName$);if(!(!x.has(o)&&s.style))return[3,5];l=W("registerStyles",a.$tagName$);f=s.style;if(!(a.$flags$&8))return[3,4];return[4,t.import("./p-ed968002.system.js").then((function(e){return e.scopeCss(f,o,false)}))];case 3:f=c.sent();c.label=4;case 4:D(o,f,!!(a.$flags$&1));l();c.label=5;case 5:$=n.$ancestorComponent$;u=function(){return Se(e,n,a,true)};if($&&$["s-rc"]){$["s-rc"].push(u)}else{u()}return[2]}}))}))};var Oe=function(e,t){if((h.$flags$&1)===0){var r=W("connectedCallback",t.$tagName$);var n=y(e);if(!(n.$flags$&1)){n.$flags$|=1;var a=void 0;if(!a){if(t.$flags$&4||t.$flags$&8){Ue(e)}}{var i=e;while(i=i.parentNode||i.host){if(i["s-p"]){Re(n,n.$ancestorComponent$=i);break}}}if(t.$members$){Object.entries(t.$members$).forEach((function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}}))}{O((function(){return Ae(e,n,t)}))}}r()}};var Ue=function(e){var t="";var r=e["s-cr"]=d.createComment(t);r["s-cn"]=true;e.insertBefore(r,e.firstChild)};var Pe=function(e){if((h.$flags$&1)===0){var t=y(e);if(h.$cssShim$){h.$cssShim$.removeHost(e)}}};var Be=e("b",(function(e,t){if(t===void 0){t={}}var r=W();var n=[];var a=t.exclude||[];var i=d.head;var s=v.customElements;var o=i.querySelector("meta[charset]");var l=d.createElement("style");var f=[];var $;var u=true;Object.assign(h,t);h.$resourcesUrl$=new URL(t.resourcesUrl||"./",d.baseURI).href;if(t.syncQueue){h.$flags$|=4}e.forEach((function(e){return e[1].forEach((function(t){var r={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{r.$members$=t[2]}{r.$attrsToReflect$=[]}if(!m&&r.$flags$&1){r.$flags$|=8}var i=r.$tagName$;var o=function(e){__extends(t,e);function t(t){var n=e.call(this,t)||this;t=n;w(t);if(r.$flags$&1){if(m){t.attachShadow({mode:"open"})}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return n}t.prototype.connectedCallback=function(){var e=this;if($){clearTimeout($);$=null}if(u){f.push(this)}else{h.jmp((function(){return Oe(e,r)}))}};t.prototype.disconnectedCallback=function(){var e=this;h.jmp((function(){return Pe(e)}))};t.prototype["s-hmr"]=function(e){};t.prototype.forceUpdate=function(){xe(this,r)};t.prototype.componentOnReady=function(){return y(this).$onReadyPromise$};return t}(HTMLElement);r.$lazyBundleIds$=e[0];if(!a.includes(i)&&!s.get(i)){n.push(i);s.define(i,Le(o,r,1))}}))}));l.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}";l.setAttribute("data-styles","");i.insertBefore(l,o?o.nextSibling:i.firstChild);u=false;if(f.length>0){f.forEach((function(e){return e.connectedCallback()}))}else{h.jmp((function(){return $=setTimeout(Te,30,"timeout")}))}r()}));var Me=e("c",(function(e,t,r){var n=Ie(e);return{emit:function(e){return n.dispatchEvent(new CustomEvent(t,{bubbles:!!(r&4),composed:!!(r&2),cancelable:!!(r&1),detail:e}))}}}));var Ie=function(e){return y(e).$hostElement$}}}}));