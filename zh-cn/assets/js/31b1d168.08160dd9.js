"use strict";(self.webpackChunktauri_docs=self.webpackChunktauri_docs||[]).push([[923],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>f});var n=r(6540);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),p=c,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=r.length,a=new Array(o);a[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:c,a[1]=i;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},982:(e,t,r)=>{r.d(t,{A:()=>E});var n=r(6540),c=r(53),o=r(6764),a=r(7449),i=r(5068);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",cardImage:"cardImage_G0zJ",cardColumn:"cardColumn_qHzJ"};function s({href:e,children:t}){return n.createElement(a.A,{href:e,className:(0,c.A)("card padding--lg",l.cardContainer)},t)}function u({href:e,icon:t,title:r,description:o,image:a,imageDark:i}){return n.createElement(s,{href:e},a&&n.createElement("div",{className:l.cardImage},n.createElement("img",{src:a+(i?"#gh-light-mode-only":"")}),i&&n.createElement("img",{src:i+"#gh-dark-mode-only"})),n.createElement("div",{className:l.cardColumn},n.createElement("h2",{className:(0,c.A)("text--truncate",l.cardTitle),title:r},a?"":t," ",r),o&&n.createElement("p",{className:(0,c.A)("text--truncate",l.cardDescription),title:o},o)))}function m({item:e}){var t;const r=(0,o._o)(e);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null==(t=e.customProps)?void 0:t.description}):null}function d({item:e}){var t,r,c;const a=(0,i.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,o.cC)(null!=(t=e.docId)?t:void 0);return n.createElement(u,{href:e.href,icon:a,title:e.label,description:null==l?void 0:l.description,image:null==(r=e.customProps)?void 0:r.doc_card_image,imageDark:null==(c=e.customProps)?void 0:c.doc_card_image_dark})}function p({item:e}){switch(e.type){case"link":return n.createElement(d,{item:e});case"category":return n.createElement(m,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var f=Object.defineProperty,y=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,v=(e,t,r)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,O=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&v(e,r,t[r]);if(y)for(var r of y(t))b.call(t,r)&&v(e,r,t[r]);return e};function h({className:e}){const t=(0,o.$S)();return n.createElement(E,{items:t.items,className:e})}function E(e){const{items:t,className:r}=e;if(!t)return n.createElement(h,O({},e));const a=(0,o.d1)(t);return n.createElement("section",{className:(0,c.A)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(p,{item:e})))))}},7779:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>O,contentTitle:()=>b,default:()=>j,frontMatter:()=>g,metadata:()=>v,toc:()=>h});var n=r(5680),c=r(982),o=r(6764),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&d(e,r,t[r]);if(s)for(var r of s(t))m.call(t,r)&&d(e,r,t[r]);return e},f=(e,t)=>i(e,l(t)),y=(e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r};const g={},b="\u5e94\u7528\u573a\u666f",v={unversionedId:"docs/scenarios/README",id:"docs/scenarios/README",title:"\u5e94\u7528\u573a\u666f",description:"\u672c\u6587\u5217\u4e3e\u4e86\u4e00\u4e9b\u5e94\u7528\u573a\u666f\uff0c\u5e76\u7ed9\u51fa\u5404\u4e2a\u573a\u666f\u4e0b\u7684\u8be6\u7ec6\u64cd\u4f5c\u6b65\u9aa4\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/scenarios/README.md",sourceDirName:"docs/scenarios",slug:"/docs/scenarios/",permalink:"/zh-cn/v0.10.0/docs/scenarios/",draft:!1,editUrl:"https://github.com/harlanc/xiu-doc/edit/dev/docs/docs/scenarios/README.md",tags:[],version:"current",lastUpdatedAt:1708384924,formattedLastUpdatedAt:"2024\u5e742\u670819\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"\u4ecb\u7ecd",permalink:"/zh-cn/v0.10.0/docs/remuxers/introduction"},next:{title:"RTMP",permalink:"/zh-cn/v0.10.0/docs/scenarios/rtmp"}},O={},h=[],E={toc:h},w="wrapper";function j(e){var t=e,{components:r}=t,a=y(t,["components"]);return(0,n.yg)(w,f(p(p({},E),a),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h1",p({},{id:"\u5e94\u7528\u573a\u666f"}),"\u5e94\u7528\u573a\u666f"),(0,n.yg)("p",null,"\u672c\u6587\u5217\u4e3e\u4e86\u4e00\u4e9b\u5e94\u7528\u573a\u666f\uff0c\u5e76\u7ed9\u51fa\u5404\u4e2a\u573a\u666f\u4e0b\u7684\u8be6\u7ec6\u64cd\u4f5c\u6b65\u9aa4\u3002"),(0,n.yg)(c.A,{items:(0,o.$S)().items,mdxType:"DocCardList"}))}j.isMDXComponent=!0}}]);