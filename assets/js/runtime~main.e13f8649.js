(()=>{"use strict";var e,t,a,r,o,f={},n={};function c(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={id:e,loaded:!1,exports:{}};return f[e].call(a.exports,a,a.exports,c),a.loaded=!0,a.exports}c.m=f,c.c=n,e=[],c.O=(t,a,r,o)=>{if(!a){var f=1/0;for(b=0;b<e.length;b++){a=e[b][0],r=e[b][1],o=e[b][2];for(var n=!0,d=0;d<a.length;d++)(!1&o||f>=o)&&Object.keys(c.O).every((e=>c.O[e](a[d])))?a.splice(d--,1):(n=!1,o<f&&(f=o));if(n){e.splice(b--,1);var i=r();void 0!==i&&(t=i)}}return t}o=o||0;for(var b=e.length;b>0&&e[b-1][2]>o;b--)e[b]=e[b-1];e[b]=[a,r,o]},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);c.r(o);var f={};t=t||[null,a({}),a([]),a(a)];for(var n=2&r&&e;"object"==typeof n&&!~t.indexOf(n);n=a(n))Object.getOwnPropertyNames(n).forEach((t=>f[t]=()=>e[t]));return f.default=()=>e,c.d(o,f),o},c.d=(e,t)=>{for(var a in t)c.o(t,a)&&!c.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,a)=>(c.f[a](e,t),t)),[])),c.u=e=>"assets/js/"+({3:"925b3f96",13:"01a85c17",65:"384bb757",89:"a6aa9e1f",103:"ccc49370",159:"d0144f24",195:"37aff360",267:"59362658",345:"ba8ef991",362:"e273c56f",373:"f9fc7abc",387:"c6b4e99a",452:"aac47508",459:"f0aab7b7",514:"73664a40",535:"814f3328",608:"9e4087bc",610:"6875c492",623:"ad411c5b",636:"f4f34a3a",642:"7661071f",666:"e884840a",771:"bb130f79",836:"f3ae5a66",914:"d9f32620",918:"725c2f98",930:"88504d1d",948:"8717b14a"}[e]||e)+"."+{3:"a744ba8b",13:"686927d4",65:"36ae719a",89:"15818859",103:"a7b4fb07",159:"aa5a7f77",195:"9c428a44",217:"99fc3d51",267:"d610502f",345:"728a86bf",362:"becf3dc7",373:"da81f41e",387:"3d3075cf",452:"fd983d56",459:"cee85f8b",514:"6ad077bc",535:"b8cfcef7",608:"1a1dbf3a",610:"3935d282",623:"d0b328cf",636:"2379b8c5",642:"a63eec9f",666:"3fb8d245",771:"7a4b907f",836:"75af1e42",914:"72c1d863",918:"d55de105",930:"72faf69d",948:"5b7e216c",972:"d4e4d76d"}[e]+".js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},o="trading-blog:",c.l=(e,t,a,f)=>{if(r[e])r[e].push(t);else{var n,d;if(void 0!==a)for(var i=document.getElementsByTagName("script"),b=0;b<i.length;b++){var l=i[b];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==o+a){n=l;break}}n||(d=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,c.nc&&n.setAttribute("nonce",c.nc),n.setAttribute("data-webpack",o+a),n.src=e),r[e]=[t];var u=(t,a)=>{n.onerror=n.onload=null,clearTimeout(s);var o=r[e];if(delete r[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(a))),t)return t(a)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=u.bind(null,n.onerror),n.onload=u.bind(null,n.onload),d&&document.head.appendChild(n)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/trading-blog/",c.gca=function(e){return e={59362658:"267","925b3f96":"3","01a85c17":"13","384bb757":"65",a6aa9e1f:"89",ccc49370:"103",d0144f24:"159","37aff360":"195",ba8ef991:"345",e273c56f:"362",f9fc7abc:"373",c6b4e99a:"387",aac47508:"452",f0aab7b7:"459","73664a40":"514","814f3328":"535","9e4087bc":"608","6875c492":"610",ad411c5b:"623",f4f34a3a:"636","7661071f":"642",e884840a:"666",bb130f79:"771",f3ae5a66:"836",d9f32620:"914","725c2f98":"918","88504d1d":"930","8717b14a":"948"}[e]||e,c.p+c.u(e)},(()=>{var e={303:0,532:0};c.f.j=(t,a)=>{var r=c.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise(((a,o)=>r=e[t]=[a,o]));a.push(r[2]=o);var f=c.p+c.u(t),n=new Error;c.l(f,(a=>{if(c.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),f=a&&a.target&&a.target.src;n.message="Loading chunk "+t+" failed.\n("+o+": "+f+")",n.name="ChunkLoadError",n.type=o,n.request=f,r[1](n)}}),"chunk-"+t,t)}},c.O.j=t=>0===e[t];var t=(t,a)=>{var r,o,f=a[0],n=a[1],d=a[2],i=0;if(f.some((t=>0!==e[t]))){for(r in n)c.o(n,r)&&(c.m[r]=n[r]);if(d)var b=d(c)}for(t&&t(a);i<f.length;i++)o=f[i],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return c.O(b)},a=self.webpackChunktrading_blog=self.webpackChunktrading_blog||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})()})();