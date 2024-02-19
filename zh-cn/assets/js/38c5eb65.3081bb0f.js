"use strict";(self.webpackChunktauri_docs=self.webpackChunktauri_docs||[]).push([[848],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,y=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(y,c(c({ref:t},p),{},{components:r})):n.createElement(y,c({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},944:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>b,default:()=>w,frontMatter:()=>y,metadata:()=>m,toc:()=>O});var n=r(5680),o=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))l.call(t,r)&&p(e,r,t[r]);return e},d=(e,t)=>a(e,c(t)),f=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const y={sidebar_position:4},b="WEBRTC",m={unversionedId:"docs/scenarios/webrtc",id:"docs/scenarios/webrtc",title:"WEBRTC",description:"OBS\u63a8\u6d41",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/scenarios/webrtc.md",sourceDirName:"docs/scenarios",slug:"/docs/scenarios/webrtc",permalink:"/zh-cn/v0.10.0/docs/scenarios/webrtc",draft:!1,editUrl:"https://github.com/harlanc/xiu-doc/edit/dev/docs/docs/scenarios/webrtc.md",tags:[],version:"current",lastUpdatedAt:1708384924,formattedLastUpdatedAt:"2024\u5e742\u670819\u65e5",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"RTSP",permalink:"/zh-cn/v0.10.0/docs/scenarios/rtsp"},next:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/zh-cn/v0.10.0/docs/faq"}},g={},O=[{value:"OBS\u63a8\u6d41",id:"obs\u63a8\u6d41",level:2},{value:"\u64ad\u653e",id:"\u64ad\u653e",level:3}],v={toc:O},h="wrapper";function w(e){var t=e,{components:o}=t,a=f(t,["components"]);return(0,n.yg)(h,d(u(u({},v),a),{components:o,mdxType:"MDXLayout"}),(0,n.yg)("h1",u({},{id:"webrtc"}),"WEBRTC"),(0,n.yg)("h2",u({},{id:"obs\u63a8\u6d41"}),"OBS\u63a8\u6d41"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Push WHIP",src:r(2629).A,width:"1782",height:"1284"})),(0,n.yg)("p",null,"\u56fe\u7247\u5c55\u793a\u7684\u63a8\u6d41\u914d\u7f6eapp name\u4e3alive\uff0cstream name\u4e3atest\uff0ctoken\u4e3a123\uff0c\u5206\u522b\u586b\u5165\u5230\u4e0b\u9762\u63d0\u5230\u7684\u64ad\u653e\u754c\u9762\u4e2d\u8fdb\u884c\u64ad\u653e\u3002"),(0,n.yg)("admonition",u({},{type:"caution"}),(0,n.yg)("p",{parentName:"admonition"},"OBS\u7248\u672c\u53f7\u9700\u8981>=3.0")),(0,n.yg)("h3",u({},{id:"\u64ad\u653e"}),"\u64ad\u653e"),(0,n.yg)("p",null,"\u53ef\u4ee5\u7528WHEP\u534f\u8bae\u5728\u7f51\u9875\u4e0a\u64ad\u653e\u6b64\u76f4\u64ad\u6d41\uff0c\u6309\u7167\u5982\u4e0b\u6b65\u9aa4\u8fdb\u884c\u64cd\u4f5c:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u628a\u6587\u4ef6\u5939xiu/protocol/webrtc/src/clients/\u4e0b\u7684\u6587\u4ef6\u62f7\u8d1d\u5230\u540c\u53ef\u6267\u884c\u6587\u4ef6xiu\u540c\u7ea7\u76ee\u5f55\u4e0b."),(0,n.yg)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u5730\u5740http://localhost:8900(\u7aef\u53e3\u53f7\u4e3awebrtc\u534f\u8bae\u76d1\u542c\u7aef\u53e3)\uff0c\u4f1a\u51fa\u73b0\u5982\u4e0b\u754c\u9762\uff1a")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Play Whep",src:r(4156).A,width:"1002",height:"736"})),(0,n.yg)("p",null,"\u586b\u5165\u6b63\u786e\u7684app name/stream name/token\u8fdb\u884c\u64ad\u653e\u3002"))}w.isMDXComponent=!0},2629:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/obs_whip_push-31d7be43d9648fb99c5d75b27c939541.png"},4156:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/play_whep-297af6c77c3dfda15a34a9003ffb3561.png"}}]);