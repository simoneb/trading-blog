(self.webpackChunktrading_blog=self.webpackChunktrading_blog||[]).push([[217],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>m,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=s(n),p=r,g=u["".concat(i,".").concat(p)]||u[p]||d[p]||o;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9058:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var a=n(7294),r=n(6010),o=n(2921),l=n(7524),c=n(9960),i=n(5999);const s={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function m(e){let{sidebar:t}=e;return a.createElement("aside",{className:"col col--3"},a.createElement("nav",{className:(0,r.Z)(s.sidebar,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,r.Z)(s.sidebarItemTitle,"margin-bottom--md")},t.title),a.createElement("ul",{className:(0,r.Z)(s.sidebarItemList,"clean-list")},t.items.map((e=>a.createElement("li",{key:e.permalink,className:s.sidebarItem},a.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:s.sidebarItemLink,activeClassName:s.sidebarItemLinkActive},e.title)))))))}var u=n(3102);function d(e){let{sidebar:t}=e;return a.createElement("ul",{className:"menu__list"},t.items.map((e=>a.createElement("li",{key:e.permalink,className:"menu__list-item"},a.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function p(e){return a.createElement(u.Zo,{component:d,props:e})}function g(e){let{sidebar:t}=e;const n=(0,l.i)();return t?.items.length?"mobile"===n?a.createElement(p,{sidebar:t}):a.createElement(m,{sidebar:t}):null}function f(e){const{sidebar:t,toc:n,children:l,...c}=e,i=t&&t.items.length>0;return a.createElement(o.Z,c,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement(g,{sidebar:t}),a.createElement("main",{className:(0,r.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},l),n&&a.createElement("div",{className:"col col--2"},n))))}},7978:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Ue});var a=n(7294),r=n(6010),o=n(9460),l=n(4996);function c(e){let{children:t,className:n}=e;const{frontMatter:r,assets:c}=(0,o.C)(),{withBaseUrl:i}=(0,l.C)(),s=c.image??r.image;return a.createElement("article",{className:n,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},s&&a.createElement("meta",{itemProp:"image",content:i(s,{absolute:!0})}),t)}var i=n(9960);const s={title:"title_f1Hy"};function m(e){let{className:t}=e;const{metadata:n,isBlogPostPage:l}=(0,o.C)(),{permalink:c,title:m}=n,u=l?"h1":"h2";return a.createElement(u,{className:(0,r.Z)(s.title,t),itemProp:"headline"},l?m:a.createElement(i.Z,{itemProp:"url",to:c},m))}var u=n(5999),d=n(8824);const p={container:"container_mt6G"};function g(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,d.c)();return t=>{const n=Math.ceil(t);return e(n,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return a.createElement(a.Fragment,null,n(t))}function f(e){let{date:t,formattedDate:n}=e;return a.createElement("time",{dateTime:t,itemProp:"datePublished"},n)}function h(){return a.createElement(a.Fragment,null," \xb7 ")}function b(e){let{className:t}=e;const{metadata:n}=(0,o.C)(),{date:l,formattedDate:c,readingTime:i}=n;return a.createElement("div",{className:(0,r.Z)(p.container,"margin-vert--md",t)},a.createElement(f,{date:l,formattedDate:c}),void 0!==i&&a.createElement(a.Fragment,null,a.createElement(h,null),a.createElement(g,{readingTime:i})))}function y(e){return e.href?a.createElement(i.Z,e):a.createElement(a.Fragment,null,e.children)}function E(e){let{author:t,className:n}=e;const{name:o,title:l,url:c,imageURL:i,email:s}=t,m=c||s&&`mailto:${s}`||void 0;return a.createElement("div",{className:(0,r.Z)("avatar margin-bottom--sm",n)},i&&a.createElement(y,{href:m,className:"avatar__photo-link"},a.createElement("img",{className:"avatar__photo",src:i,alt:o})),o&&a.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},a.createElement("div",{className:"avatar__name"},a.createElement(y,{href:m,itemProp:"url"},a.createElement("span",{itemProp:"name"},o))),l&&a.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}const v={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function k(e){let{className:t}=e;const{metadata:{authors:n},assets:l}=(0,o.C)();if(0===n.length)return null;const c=n.every((e=>{let{name:t}=e;return!t}));return a.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",c?v.imageOnlyAuthorRow:"row",t)},n.map(((e,t)=>a.createElement("div",{className:(0,r.Z)(!c&&"col col--6",c?v.imageOnlyAuthorCol:v.authorCol),key:t},a.createElement(E,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})))))}function N(){return a.createElement("header",null,a.createElement(m,null),a.createElement(b,null),a.createElement(k,null))}var C=n(8780),w=n(3905),Z=n(7462),_=n(5742);var T=n(2389),B=n(2949),P=n(6668);function L(){const{prism:e}=(0,P.L)(),{colorMode:t}=(0,B.I)(),n=e.theme,a=e.darkTheme||n;return"dark"===t?a:n}var O=n(5281),x=n(7594),j=n.n(x);const I=/title=(?<quote>["'])(?<title>.*?)\1/,S=/\{(?<range>[\d,-]+)\}/,A={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function M(e,t){const n=e.map((e=>{const{start:n,end:a}=A[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${a})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function z(e,t){let n=e.replace(/\n$/,"");const{language:a,magicComments:r,metastring:o}=t;if(o&&S.test(o)){const e=o.match(S).groups.range;if(0===r.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=r[0].className,a=j()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(a),code:n}}if(void 0===a)return{lineClassNames:{},code:n};const l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return M(["js","jsBlock"],t);case"jsx":case"tsx":return M(["js","jsBlock","jsx"],t);case"html":return M(["js","jsBlock","html"],t);case"python":case"py":case"bash":return M(["bash"],t);case"markdown":case"md":return M(["html","jsx","bash"],t);default:return M(Object.keys(A),t)}}(a,r),c=n.split("\n"),i=Object.fromEntries(r.map((e=>[e.className,{start:0,range:""}]))),s=Object.fromEntries(r.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),m=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let p=0;p<c.length;){const e=c[p].match(l);if(!e){p+=1;continue}const t=e.slice(1).find((e=>void 0!==e));s[t]?i[s[t]].range+=`${p},`:m[t]?i[m[t]].start=p:u[t]&&(i[u[t]].range+=`${i[u[t]].start}-${p-1},`),c.splice(p,1)}n=c.join("\n");const d={};return Object.entries(i).forEach((e=>{let[t,{range:n}]=e;j()(n).forEach((e=>{d[e]??=[],d[e].push(t)}))})),{lineClassNames:d,code:n}}const R={codeBlockContainer:"codeBlockContainer_Ckt0"};function D(e){let{as:t,...n}=e;const o=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[a,r]=e;const o=t[a];o&&"string"==typeof r&&(n[o]=r)})),n}(L());return a.createElement(t,(0,Z.Z)({},n,{style:o,className:(0,r.Z)(n.className,R.codeBlockContainer,O.k.common.codeBlock)}))}const F={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function H(e){let{children:t,className:n}=e;return a.createElement(D,{as:"pre",tabIndex:0,className:(0,r.Z)(F.codeBlockStandalone,"thin-scrollbar",n)},a.createElement("code",{className:F.codeBlockLines},t))}var W=n(902);const $={attributes:!0,characterData:!0,childList:!0,subtree:!0};function V(e,t){const[n,r]=(0,a.useState)(),o=(0,a.useCallback)((()=>{r(e.current?.closest("[role=tabpanel][hidden]"))}),[e,r]);(0,a.useEffect)((()=>{o()}),[o]),function(e,t,n){void 0===n&&(n=$);const r=(0,W.zX)(t),o=(0,W.Ql)(n);(0,a.useEffect)((()=>{const t=new MutationObserver(r);return e&&t.observe(e,o),()=>t.disconnect()}),[e,r,o])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const U={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var q={Prism:n(7410).Z,theme:U};function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Y(){return Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Y.apply(this,arguments)}var Q=/\r\n|\r|\n/,X=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},J=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)};function K(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var ee=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),G(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=Y({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=Y({},n,{backgroundColor:null}),r}(e.theme,e.language):void 0;return t.themeDict=n})),G(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=Y({},K(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?Y({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),G(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var l=a?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),G(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,l=Y({},K(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?Y({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),G(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,l=0,c=[],i=[c];l>-1;){for(;(o=a[l]++)<r[l];){var s=void 0,m=t[l],u=n[l][o];if("string"==typeof u?(m=l>0?m:["plain"],s=u):(m=J(m,u.type),u.alias&&(m=J(m,u.alias)),s=u.content),"string"==typeof s){var d=s.split(Q),p=d.length;c.push({types:m,content:d[0]});for(var g=1;g<p;g++)X(c),i.push(c=[]),c.push({types:m,content:d[g]})}else l++,t.push(m),n.push(s),a.push(0),r.push(s.length)}l--,t.pop(),n.pop(),a.pop(),r.pop()}return X(c),i}(void 0!==l?this.tokenize(t,a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);const te=ee,ne={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function ae(e){let{line:t,classNames:n,showLineNumbers:o,getLineProps:l,getTokenProps:c}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=l({line:t,className:(0,r.Z)(n,o&&ne.codeLine)}),s=t.map(((e,t)=>a.createElement("span",(0,Z.Z)({key:t},c({token:e,key:t})))));return a.createElement("span",i,o?a.createElement(a.Fragment,null,a.createElement("span",{className:ne.codeLineNumber}),a.createElement("span",{className:ne.codeLineContent},s)):s,a.createElement("br",null))}function re(e){return a.createElement("svg",(0,Z.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"}))}function oe(e){return a.createElement("svg",(0,Z.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))}const le={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function ce(e){let{code:t,className:n}=e;const[o,l]=(0,a.useState)(!1),c=(0,a.useRef)(void 0),i=(0,a.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const a=document.createElement("textarea"),r=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const o=document.getSelection(),l=o.rangeCount>0&&o.getRangeAt(0);n.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}a.remove(),l&&(o.removeAllRanges(),o.addRange(l)),r&&r.focus()}(t),l(!0),c.current=window.setTimeout((()=>{l(!1)}),1e3)}),[t]);return(0,a.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),a.createElement("button",{type:"button","aria-label":o?(0,u.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,u.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,u.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,r.Z)("clean-btn",n,le.copyButton,o&&le.copyButtonCopied),onClick:i},a.createElement("span",{className:le.copyButtonIcons,"aria-hidden":"true"},a.createElement(re,{className:le.copyButtonIcon}),a.createElement(oe,{className:le.copyButtonSuccessIcon})))}function ie(e){return a.createElement("svg",(0,Z.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"}))}const se={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function me(e){let{className:t,onClick:n,isEnabled:o}=e;const l=(0,u.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:n,className:(0,r.Z)("clean-btn",t,o&&se.wordWrapButtonEnabled),"aria-label":l,title:l},a.createElement(ie,{className:se.wordWrapButtonIcon,"aria-hidden":"true"}))}function ue(e){let{children:t,className:n="",metastring:o,title:l,showLineNumbers:c,language:i}=e;const{prism:{defaultLanguage:s,magicComments:m}}=(0,P.L)(),u=i??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??s,d=L(),p=function(){const[e,t]=(0,a.useState)(!1),[n,r]=(0,a.useState)(!1),o=(0,a.useRef)(null),l=(0,a.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),c=(0,a.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");r(n)}),[o]);return V(o,c),(0,a.useEffect)((()=>{c()}),[e,c]),(0,a.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:l}}(),g=function(e){return e?.match(I)?.groups.title??""}(o)||l,{lineClassNames:f,code:h}=z(t,{metastring:o,language:u,magicComments:m}),b=c??function(e){return Boolean(e?.includes("showLineNumbers"))}(o);return a.createElement(D,{as:"div",className:(0,r.Z)(n,u&&!n.includes(`language-${u}`)&&`language-${u}`)},g&&a.createElement("div",{className:F.codeBlockTitle},g),a.createElement("div",{className:F.codeBlockContent},a.createElement(te,(0,Z.Z)({},q,{theme:d,code:h,language:u??"text"}),(e=>{let{className:t,tokens:n,getLineProps:o,getTokenProps:l}=e;return a.createElement("pre",{tabIndex:0,ref:p.codeBlockRef,className:(0,r.Z)(t,F.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,r.Z)(F.codeBlockLines,b&&F.codeBlockLinesWithNumbering)},n.map(((e,t)=>a.createElement(ae,{key:t,line:e,getLineProps:o,getTokenProps:l,classNames:f[t],showLineNumbers:b})))))})),a.createElement("div",{className:F.buttonGroup},(p.isEnabled||p.isCodeScrollable)&&a.createElement(me,{className:F.codeButton,onClick:()=>p.toggle(),isEnabled:p.isEnabled}),a.createElement(ce,{className:F.codeButton,code:h}))))}function de(e){let{children:t,...n}=e;const r=(0,T.Z)(),o=function(e){return a.Children.toArray(e).some((e=>(0,a.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof o?ue:H;return a.createElement(l,(0,Z.Z)({key:String(r)},n),o)}var pe=n(7186);const ge={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function fe(e){return!!e&&("SUMMARY"===e.tagName||fe(e.parentElement))}function he(e,t){return!!e&&(e===t||he(e.parentElement,t))}function be(e){let{summary:t,children:n,...o}=e;const l=(0,T.Z)(),c=(0,a.useRef)(null),{collapsed:i,setCollapsed:s}=(0,pe.u)({initialState:!o.open}),[m,u]=(0,a.useState)(o.open),d=a.isValidElement(t)?t:a.createElement("summary",null,t??"Details");return a.createElement("details",(0,Z.Z)({},o,{ref:c,open:m,"data-collapsed":i,className:(0,r.Z)(ge.details,l&&ge.isBrowser,o.className),onMouseDown:e=>{fe(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;fe(t)&&he(t,c.current)&&(e.preventDefault(),i?(s(!1),u(!0)):s(!0))}}),d,a.createElement(pe.z,{lazy:!1,collapsed:i,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{s(e),u(!e)}},a.createElement("div",{className:ge.collapsibleContent},n)))}const ye={details:"details_b_Ee"},Ee="alert alert--info";function ve(e){let{...t}=e;return a.createElement(be,(0,Z.Z)({},t,{className:(0,r.Z)(Ee,ye.details,t.className)}))}const ke={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function Ne(e){let{as:t,id:n,...o}=e;const{navbar:{hideOnScroll:l}}=(0,P.L)();if("h1"===t||!n)return a.createElement(t,(0,Z.Z)({},o,{id:void 0}));const c=(0,u.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof o.children?o.children:n});return a.createElement(t,(0,Z.Z)({},o,{className:(0,r.Z)("anchor",l?ke.anchorWithHideOnScrollNavbar:ke.anchorWithStickyNavbar,o.className),id:n}),o.children,a.createElement(i.Z,{className:"hash-link",to:`#${n}`,"aria-label":c,title:c},"\u200b"))}function Ce(e){return a.createElement(Ne,e)}const we={containsTaskList:"containsTaskList_mC6p"};const Ze={img:"img_ev3q"};const _e="admonition_LlT9",Te="admonitionHeading_tbUL",Be="admonitionIcon_kALy",Pe="admonitionContent_S0QG";const Le={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(u.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(u.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(u.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(u.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(u.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},Oe={secondary:"note",important:"info",success:"tip",warning:"danger"};function xe(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),r=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:r}}(e.children);return{...e,title:e.title??t,children:n}}const je={head:function(e){const t=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...r}=e.props;return a.createElement(e.props.originalType,r)}return e}(e):e));return a.createElement(_.Z,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props?.mdxType)))?a.createElement("code",e):a.createElement(de,e)},a:function(e){return a.createElement(i.Z,e)},pre:function(e){return a.createElement(de,(0,a.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=a.Children.toArray(e.children),n=t.find((e=>a.isValidElement(e)&&"summary"===e.props?.mdxType)),r=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(ve,(0,Z.Z)({},e,{summary:n}),r)},ul:function(e){return a.createElement("ul",(0,Z.Z)({},e,{className:(t=e.className,(0,r.Z)(t,t?.includes("contains-task-list")&&we.containsTaskList))}));var t},img:function(e){return a.createElement("img",(0,Z.Z)({loading:"lazy"},e,{className:(t=e.className,(0,r.Z)(t,Ze.img))}));var t},h1:e=>a.createElement(Ce,(0,Z.Z)({as:"h1"},e)),h2:e=>a.createElement(Ce,(0,Z.Z)({as:"h2"},e)),h3:e=>a.createElement(Ce,(0,Z.Z)({as:"h3"},e)),h4:e=>a.createElement(Ce,(0,Z.Z)({as:"h4"},e)),h5:e=>a.createElement(Ce,(0,Z.Z)({as:"h5"},e)),h6:e=>a.createElement(Ce,(0,Z.Z)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:o,icon:l}=xe(e),c=function(e){const t=Oe[e]??e,n=Le[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),Le.info)}(n),i=o??c.label,{iconComponent:s}=c,m=l??a.createElement(s,null);return a.createElement("div",{className:(0,r.Z)(O.k.common.admonition,O.k.common.admonitionType(e.type),"alert",`alert--${c.infimaClassName}`,_e)},a.createElement("div",{className:Te},a.createElement("span",{className:Be},m),i),a.createElement("div",{className:Pe},t))},mermaid:n(1875).Z};function Ie(e){let{children:t}=e;return a.createElement(w.Zo,{components:je},t)}function Se(e){let{children:t,className:n}=e;const{isBlogPostPage:l}=(0,o.C)();return a.createElement("div",{id:l?C.blogPostContainerID:void 0,className:(0,r.Z)("markdown",n),itemProp:"articleBody"},a.createElement(Ie,null,t))}const Ae={iconEdit:"iconEdit_Z9Sw"};function Me(e){let{className:t,...n}=e;return a.createElement("svg",(0,Z.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(Ae.iconEdit,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function ze(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:O.k.common.editThisPage},a.createElement(Me,null),a.createElement(u.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var Re=n(3008);const De={tags:"tags_jXut",tag:"tag_QGVx"};function Fe(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(u.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,r.Z)(De.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:De.tag},a.createElement(Re.Z,{label:t,permalink:n}))}))))}function He(){return a.createElement("b",null,a.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function We(e){const{blogPostTitle:t,...n}=e;return a.createElement(i.Z,(0,Z.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},n),a.createElement(He,null))}const $e={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function Ve(){const{metadata:e,isBlogPostPage:t}=(0,o.C)(),{tags:n,title:l,editUrl:c,hasTruncateMarker:i}=e,s=!t&&i,m=n.length>0;return m||s||c?a.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",t&&$e.blogPostFooterDetailsFull)},m&&a.createElement("div",{className:(0,r.Z)("col",{"col--9":s})},a.createElement(Fe,{tags:n})),t&&c&&a.createElement("div",{className:"col margin-top--sm"},a.createElement(ze,{editUrl:c})),s&&a.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":m})},a.createElement(We,{blogPostTitle:l,to:e.permalink}))):null}function Ue(e){let{children:t,className:n}=e;const l=function(){const{isBlogPostPage:e}=(0,o.C)();return e?void 0:"margin-bottom--xl"}();return a.createElement(c,{className:(0,r.Z)(l,n)},a.createElement(N,null),a.createElement(Se,null,t),a.createElement(Ve,null))}},2244:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(7294),r=n(6010),o=n(9960);function l(e){const{permalink:t,title:n,subLabel:l,isNext:c}=e;return a.createElement(o.Z,{className:(0,r.Z)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&a.createElement("div",{className:"pagination-nav__sublabel"},l),a.createElement("div",{className:"pagination-nav__label"},n))}},3008:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(7294),r=n(6010),o=n(9960);const l={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function c(e){let{permalink:t,label:n,count:c}=e;return a.createElement(o.Z,{href:t,className:(0,r.Z)(l.tag,c?l.tagWithCount:l.tagRegular)},n,c&&a.createElement("span",null,c))}},9460:(e,t,n)=>{"use strict";n.d(t,{C:()=>c,n:()=>l});var a=n(7294),r=n(902);const o=a.createContext(null);function l(e){let{children:t,content:n,isBlogPostPage:r=!1}=e;const l=function(e){let{content:t,isBlogPostPage:n}=e;return(0,a.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:n})),[t,n])}({content:n,isBlogPostPage:r});return a.createElement(o.Provider,{value:l},t)}function c(){const e=(0,a.useContext)(o);if(null===e)throw new r.i6("BlogPostProvider");return e}},8824:(e,t,n)=>{"use strict";n.d(t,{c:()=>s});var a=n(7294),r=n(2263);const o=["zero","one","two","few","many","other"];function l(e){return o.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function s(){const e=i();return{selectMessage:(t,n)=>function(e,t,n){const a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const r=n.select(t),o=n.pluralForms.indexOf(r);return a[Math.min(o,a.length-1)]}(n,t,e)}}},7594:(e,t)=>{function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);