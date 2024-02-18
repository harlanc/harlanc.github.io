"use strict";(self.webpackChunktauri_docs=self.webpackChunktauri_docs||[]).push([[395],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>f});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),u=a,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},982:(e,t,r)=>{r.d(t,{A:()=>E});var n=r(6540),a=r(53),o=r(6764),c=r(7449),i=r(5068);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",cardImage:"cardImage_G0zJ",cardColumn:"cardColumn_qHzJ"};function s({href:e,children:t}){return n.createElement(c.A,{href:e,className:(0,a.A)("card padding--lg",l.cardContainer)},t)}function p({href:e,icon:t,title:r,description:o,image:c,imageDark:i}){return n.createElement(s,{href:e},c&&n.createElement("div",{className:l.cardImage},n.createElement("img",{src:c+(i?"#gh-light-mode-only":"")}),i&&n.createElement("img",{src:i+"#gh-dark-mode-only"})),n.createElement("div",{className:l.cardColumn},n.createElement("h2",{className:(0,a.A)("text--truncate",l.cardTitle),title:r},c?"":t," ",r),o&&n.createElement("p",{className:(0,a.A)("text--truncate",l.cardDescription),title:o},o)))}function d({item:e}){var t;const r=(0,o._o)(e);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null==(t=e.customProps)?void 0:t.description}):null}function m({item:e}){var t,r,a;const c=(0,i.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,o.cC)(null!=(t=e.docId)?t:void 0);return n.createElement(p,{href:e.href,icon:c,title:e.label,description:null==l?void 0:l.description,image:null==(r=e.customProps)?void 0:r.doc_card_image,imageDark:null==(a=e.customProps)?void 0:a.doc_card_image_dark})}function u({item:e}){switch(e.type){case"link":return n.createElement(m,{item:e});case"category":return n.createElement(d,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var f=Object.defineProperty,y=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,v=(e,t,r)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&v(e,r,t[r]);if(y)for(var r of y(t))g.call(t,r)&&v(e,r,t[r]);return e};function O({className:e}){const t=(0,o.$S)();return n.createElement(E,{items:t.items,className:e})}function E(e){const{items:t,className:r}=e;if(!t)return n.createElement(O,h({},e));const c=(0,o.d1)(t);return n.createElement("section",{className:(0,a.A)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(u,{item:e})))))}},1523:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>g,default:()=>P,frontMatter:()=>b,metadata:()=>v,toc:()=>O});var n=r(5680),a=r(982),o=r(6764),c=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&m(e,r,t[r]);if(s)for(var r of s(t))d.call(t,r)&&m(e,r,t[r]);return e},f=(e,t)=>i(e,l(t)),y=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r};const b={},g="Introduction",v={unversionedId:"docs/httpapi/README",id:"docs/httpapi/README",title:"Introduction",description:"",source:"@site/docs/docs/httpapi/README.md",sourceDirName:"docs/httpapi",slug:"/docs/httpapi/",permalink:"/v0.10.0/docs/httpapi/",draft:!1,editUrl:"https://github.com/harlanc/xiu-doc/edit/dev/docs/docs/httpapi/README.md",tags:[],version:"current",lastUpdatedAt:1708233286,formattedLastUpdatedAt:"Feb 18, 2024",frontMatter:{},sidebar:"docs",previous:{title:"HTTP Callback",permalink:"/v0.10.0/docs/httpcallback/http-callback"},next:{title:"HTTP API",permalink:"/v0.10.0/docs/httpapi/http-api"}},h={},O=[],E={toc:O},w="wrapper";function P(e){var t=e,{components:r}=t,c=y(t,["components"]);return(0,n.yg)(w,f(u(u({},E),c),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h1",u({},{id:"introduction"}),"Introduction"),(0,n.yg)(a.A,{items:(0,o.$S)().items,mdxType:"DocCardList"}))}P.isMDXComponent=!0}}]);