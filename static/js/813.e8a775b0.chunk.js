(self.webpackChunkmodular_app=self.webpackChunkmodular_app||[]).push([[813],{5813:function(e,t,a){"use strict";a.r(t),a.d(t,{startRender:function(){return I}});a(8282);var n=a(1168),l=a(7313),r=a(6352),o=a(3560),c=a(1413),i=a(3830),s=a(8058);var d=a.p+"static/media/left-arrow.2371d25ae4da5666885314488cd7e031.svg";var m=a.p+"static/media/burger.95ad86a68af36a771a941051e6301463.svg",u=a(6609);var f=a.p+"static/media/it.7ee7a27e030791474f5325883a3a0b5d.svg";var p=a.p+"static/media/fr.8a07eb7d76b133b1d7e7eb5f58090ee3.svg";var v=a.p+"static/media/en.47367165e20d8ee8fd695ad9809c5bed.svg";var h=a.p+"static/media/de.0c498278a03bc745b591ddb0eba4f00e.svg";var x=a.p+"static/media/es.cc5d62ae82786953f93d0e5a21888e19.svg",b=a(6417),g=(0,b.jsx)("img",{alt:"",src:u,width:100,height:100}),E=(0,b.jsx)("img",{alt:"",src:d}),k=(0,b.jsx)("img",{alt:"",src:m,width:60}),w={it:(0,b.jsx)("img",{alt:"",width:20,height:20,src:f}),de:(0,b.jsx)("img",{alt:"",width:20,height:20,src:h}),fr:(0,b.jsx)("img",{alt:"",width:20,height:20,src:p}),es:(0,b.jsx)("img",{alt:"",width:20,height:20,src:x}),en:(0,b.jsx)("img",{alt:"",width:20,height:20,src:v})},C=a(3687),N=function(){var e=(0,r.I0)(),t=(0,r.v9)(s.getAppName),a=(0,r.v9)(s.isHomePage),n=(0,r.v9)(s.getHomePage),l=(0,r.v9)(s.isInDarkMode);return(0,b.jsxs)("div",{className:"flex flex-row items-center mt-14 mb-5 ml-1",children:[(0,b.jsx)(C.zx,{"aria-label":"drawer button",onClick:function(){e((0,s.openDrawer)())},unstyled:!0,className:"inline-flex outline-none",children:(0,b.jsx)("div",{className:"p-1 sm:p-2 md:p-2 lg:p-2 xl:p-2",children:k})}),(0,b.jsx)(C.zx,{"aria-label":"back button",onClick:function(){e((0,s.requestRoute)(n))},unstyled:!0,className:"overflow-auto ml-1 outline-none",hide:a,children:E}),(0,b.jsxs)("div",{className:"m-auto flex flex-row",children:[(0,b.jsx)("div",{className:"m-auto mr-1 md:mr-2 lg:mr-2 xl:mr-2 2xl:mr-2 3xl:mr-2",children:g}),(0,b.jsx)("div",{className:"flex flex-col",children:(0,b.jsx)(C.rU,{newTab:!0,dark:l,to:"https://github.com/CianciarusoCataldo/modular-ui",className:"m-auto",children:(0,b.jsx)("p",{className:"text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl 2xl:text-4xl 3xl:text-4xl 4xl:text-4xl",children:t})})})]})]})},y=function(){return(0,b.jsxs)("div",{className:"flex flex-col items-center my-2",children:[(0,b.jsxs)("div",{className:"flex flex-row mb-1",children:[(0,b.jsx)("img",{alt:"",className:"p-1",src:"https://img.shields.io/npm/l/@cianciarusocataldo/modular-ui?label=License",height:"25"}),(0,b.jsx)("img",{alt:"",className:"p-1",src:"https://img.shields.io/npm/v/@cianciarusocataldo/modular-ui?color=blue&label=Latest%20version",height:"25"})]}),(0,b.jsxs)("div",{className:"flex flex-row",children:[(0,b.jsx)("img",{alt:"",className:"p-1",src:"https://img.shields.io/codecov/c/github/CianciarusoCataldo/modular-ui?label=Codecov%20coverage",height:"25"}),(0,b.jsx)("img",{alt:"",className:"p-1",src:"https://github.com/CianciarusoCataldo/modular-ui/actions/workflows/modular-ui.yml/badge.svg?branch=main)](https://github.com/CianciarusoCataldo/modular-ui/actions/workflows/modular-ui.yml",height:"25"})]})]})},_=a(3433),j=a(4511),M=function(){var e=(0,r.v9)(s.getAppName),t=(0,s.driveWithDarkMode)(C.rU);return(0,b.jsxs)("div",{className:"flex flex-row",children:[g,(0,b.jsx)(t,{to:"https://github.com/CianciarusoCataldo/modular-ui",className:"ml-1 text-lg",newTab:!0,children:e})]})},P=function(){var e=(0,r.I0)(),t=(0,r.v9)(s.getPages),a=(0,r.v9)(s.geti18nConfig),n=(0,r.v9)(s.isDrawerOpen),o=(0,r.v9)(s.getHomePage),i=(0,j.$)(a.PAGES_NAMESPACE).t,d=(0,c.Z)((0,c.Z)({},t),{},{HOME_PAGE:o});l.useEffect((function(){if(n){var t=document.getElementById("modular-drawer");document.getElementById("app-container").onclick=function(a){t&&!t.contains(a.target)&&e((0,s.closeDrawer)())}}else document.getElementById("app-container").onclick=null}),[e,n]);var m=(0,s.driveWithDarkMode)(C.dy);return(0,b.jsx)(m,{logo:(0,b.jsx)(M,{}),hide:!n,elements:(0,_.Z)(Object.keys(d).sort().map((function(t){return{text:i(t),actionCallback:function(){e((0,s.requestRoute)(d[t])),e((0,s.closeDrawer)())},isActiveCallback:function(){return(0,s.isActualRoute)(d[t])}}}))),onClose:function(){e((0,s.closeDrawer)())}})},L={DEFAULT:(0,b.jsx)("div",{})},O=function(){var e=(0,r.I0)(),t=(0,l.useCallback)((function(){e((0,s.closeModal)())}),[e]),a=(0,r.v9)(s.getModalType),n=(0,r.v9)(s.isModalVisible),o=(0,r.v9)(s.geti18nConfig),c=a&&L[a]?L[a]:(0,b.jsx)("div",{}),i=(0,j.$)(o.MODALS_NAMESPACE||"modal-titles").t,d=(0,s.driveWithDarkMode)(C.u_);return(0,b.jsx)(d,{onClose:t,title:a?i(a):"",hide:!n,children:c})},B=function(){var e=(0,r.I0)(),t=(0,r.v9)(s.getLanguage),a=Object.keys(w);return(0,b.jsx)(C.Lt,{dark:!1,value:a.findIndex((function(e){return e===t})),shadow:!0,onChange:function(t){e((0,s.changeLanguage)(a[t]))},content:Object.keys(w).map((function(e){return{name:e,icon:w[e]}}))})},z=function(){var e=(0,r.I0)(),t=(0,r.v9)(s.isInDarkMode),a=(0,l.useCallback)((function(){e((0,s.setDarkMode)(!t))}),[e,t]);return(0,b.jsx)(C.ZD,{shadow:!0,value:t,onChange:a,className:"mx-1"})},T=function(e){var t=e.history,n=(0,r.v9)(s.getPages),o=(0,r.v9)(s.getHomePage),d=(0,r.v9)(s.isInDarkMode),m=(0,c.Z)((0,c.Z)({},n),{},{HOME_PAGE:o}),u=!0===d?"#eaebec":"#1d232e",f=(0,s.driveWithDarkMode)(C.W2);return(0,b.jsxs)("div",{id:"app-container",children:[(0,b.jsx)(O,{}),(0,b.jsx)(P,{}),(0,b.jsxs)("div",{className:"fixed top-0 right-1 flex flex-row",style:{zIndex:"9"},children:[(0,b.jsx)(B,{}),(0,b.jsx)(z,{})]}),(0,b.jsx)(f,{wrapper:"header",className:"fixed overflow-hidden h-44 top-0 w-full border-b-2",style:{borderColor:u,zIndex:"8"},children:(0,b.jsx)(N,{})}),(0,b.jsx)(f,{wrapper:"footer",className:"fixed overflow-hidden h-24 bottom-0 w-full border-t-2",style:{borderColor:u,zIndex:"8"},children:(0,b.jsx)(y,{})}),(0,b.jsx)("div",{className:"h-44"}),(0,b.jsx)(f,{unstyled:!0,className:"overflow-auto",children:(0,b.jsx)(i.F0,{history:t,children:(0,b.jsxs)(i.rs,{children:[Object.keys(m).map((function(e){return(0,b.jsx)(i.AW,{component:(0,l.lazy)((function(){return a(9711)("./".concat(e))})),exact:!0,path:n[e]},e)})),(0,b.jsx)(i.l_,{to:o})]})})}),(0,b.jsx)("div",{className:"h-24"})]})},I=function(e,t){(0,n.render)((0,b.jsxs)(l.Suspense,{fallback:(0,b.jsx)("div",{className:"preloader"}),children:[(0,b.jsx)(o.Ix,{}),(0,b.jsx)(r.zt,{store:e,children:(0,b.jsx)(T,{history:t})})]}),document.getElementById("root"));var a=document.getElementById("preloader");a&&(a.style.visibility="hidden")}},9711:function(e,t,a){var n={"./Button":[5052,325,989],"./Button/":[5052,325,989],"./Button/index":[5052,325,989],"./Button/index.tsx":[5052,325,989],"./Card":[5689,325,115],"./Card/":[5689,325,115],"./Card/index":[5689,325,115],"./Card/index.tsx":[5689,325,115],"./Carousel":[7749,325,61],"./Carousel/":[7749,325,61],"./Carousel/index":[7749,325,61],"./Carousel/index.tsx":[7749,325,61],"./CheckBox":[2396,325,180],"./CheckBox/":[2396,325,180],"./CheckBox/index":[2396,325,180],"./CheckBox/index.tsx":[2396,325,180],"./CodeBox":[8958,325,784],"./CodeBox/":[8958,325,784],"./CodeBox/index":[8958,325,784],"./CodeBox/index.tsx":[8958,325,784],"./Container":[7926,325,403],"./Container/":[7926,325,403],"./Container/index":[7926,325,403],"./Container/index.tsx":[7926,325,403],"./Counter":[6321,325,805],"./Counter/":[6321,325,805],"./Counter/index":[6321,325,805],"./Counter/index.tsx":[6321,325,805],"./Divider":[2662,325,368],"./Divider/":[2662,325,368],"./Divider/index":[2662,325,368],"./Divider/index.tsx":[2662,325,368],"./Dropdown":[276,325,608],"./Dropdown/":[276,325,608],"./Dropdown/index":[276,325,608],"./Dropdown/index.tsx":[276,325,608],"./Form":[4559,325,498],"./Form/":[4559,325,498],"./Form/index":[4559,325,498],"./Form/index.tsx":[4559,325,498],"./HOME_PAGE":[6853,853],"./HOME_PAGE/":[6853,853],"./HOME_PAGE/index":[6853,853],"./HOME_PAGE/index.tsx":[6853,853],"./Input":[3539,325,918],"./Input/":[3539,325,918],"./Input/index":[3539,325,918],"./Input/index.tsx":[3539,325,918],"./Label":[694,325,237],"./Label/":[694,325,237],"./Label/index":[694,325,237],"./Label/index.tsx":[694,325,237],"./Link":[5022,325,767],"./Link/":[5022,325,767],"./Link/index":[5022,325,767],"./Link/index.tsx":[5022,325,767],"./Modal":[6668,325,255],"./Modal/":[6668,325,255],"./Modal/index":[6668,325,255],"./Modal/index.tsx":[6668,325,255],"./Rater":[4684,325,378],"./Rater/":[4684,325,378],"./Rater/index":[4684,325,378],"./Rater/index.tsx":[4684,325,378],"./Table":[5034,325,703],"./Table/":[5034,325,703],"./Table/index":[5034,325,703],"./Table/index.tsx":[5034,325,703],"./Toggle":[5108,325,691],"./Toggle/":[5108,325,691],"./Toggle/index":[5108,325,691],"./Toggle/index.tsx":[5108,325,691]};function l(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],l=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a(l)}))}l.keys=function(){return Object.keys(n)},l.id=9711,e.exports=l},6609:function(e,t,a){"use strict";e.exports=a.p+"static/media/logo.f75eb98212c8f4007cea.png"},3687:function(e,t,a){"use strict";a.d(t,{zx:function(){return d},Zb:function(){return C},lr:function(){return y},Jg:function(){return m},wh:function(){return v},W2:function(){return w},AT:function(){return h},iz:function(){return x},dy:function(){return _},Lt:function(){return j},l0:function(){return M},II:function(){return b},__:function(){return g},rU:function(){return E},u_:function(){return P},gK:function(){return L},iA:function(){return O},ZD:function(){return k}});var n=a(7313),l=a(6123),r=function(){return r=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},r.apply(this,arguments)};function o(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a}function c(e,t){for(var a=0,n=t.length,l=e.length;a<n;a++,l++)e[l]=t[a];return e}var i=function(e){var t=e.name,a=e.Component,o=e.commonProps,c=e.additionalProps,i=e.wrapper||"div";return n.createElement(i,r({"data-id":o.id,id:t,className:l(o.className,{dark:o.dark,"component-hidden":o.hide,shadowed:o.shadow,styled:!o.unstyled}),style:o.style},c),a)},s=function(e){var t=e.value,a=e.defaultValue,c=e.label,s=e.callBack,d=t||a,m=n.useState(d),u=m[0],f=m[1];n.useEffect((function(){void 0!==t&&null!==t&&f(t)}),[t]);var p=s(u,f),v=p.commonProps,h=p.additionalProps,x=o(p,["commonProps","additionalProps"]);return i(r(r({},x),{commonProps:r(r({},v),{shadow:!1,className:void 0}),Component:n.createElement("div",{className:"box-component"},c&&n.createElement("div",{className:"box-label"},c),n.createElement("div",r({className:l(v.className,{shadowed:v.shadow},"container")},h),x.Component))}))},d=function(e){var t=e.disabled,a=e.children,r=e.onClick,c=e.className,s=e.onMouseEnter,d=e.onMouseLeave,m=o(e,["disabled","children","onClick","className","onMouseEnter","onMouseLeave"]);return i({name:"modular-button",Component:n.createElement("button",{"data-id":m.id,disabled:t,onClick:r,onMouseEnter:s,onMouseLeave:d,className:l(c,{disabled:t,enabled:!t})},a),commonProps:m})},m=function(e){var t=e.value,a=e.onChange,l=e.label;e.icon;var r=o(e,["value","onChange","label","icon"]);return s({callBack:function(e,t){return{name:"modular-checkbox",Component:e&&n.createElement("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1171.000000 1280.000000",preserveAspectRatio:"xMidYMid meet",fill:"var(--modular-link-color)"},n.createElement("g",{transform:"translate(0.000000,1280.000000) scale(0.100000,-0.100000)",stroke:"none"},n.createElement("path",{d:"M11555 12694 c-1288 -888 -2591 -2076 -3945 -3594 -1475 -1656 -3026\n-3783 -4315 -5918 -72 -119 -115 -180 -123 -177 -8 3 -716 474 -1575 1048\n-859 574 -1568 1047 -1576 1052 -11 6 -10 2 2 -16 98 -140 3704 -5078 3709\n-5079 3 0 34 66 68 148 1225 2918 2422 5234 3838 7427 1148 1777 2481 3497\n3899 5028 91 97 163 177 161 177 -2 0 -67 -43 -143 -96z"}))),commonProps:r,additionalProps:{onClick:function(){a&&a(!e),t(!e)}}}},value:t,defaultValue:!1,label:l})},u={common:{DEFAULT_VALUE:"#FFFFF",STRING:"#f6713c"},javascript:{import:"#d81313",from:"#d81313",if:"#d81313",else:"#d81313",try:"#d81313",catch:"#d81313",while:"#d81313",export:"#d81313",default:"#3b82f6",const:"#2432f5",COMPONENT_DECLARATION:"#3b82f6"},python:{pip:"#5b9306"},terminal:{sh:"#5b9306",npm:"#5b9306",node:"#5b9306",git:"#5b9306","gh-pages":"#5b9306",docker:"#5b9306"}},f={javascript:null,common:null,python:null,terminal:null},p=function(e,t){return function(e,t){var a=t,n=[];return e.filter((function(e){return e.code.length>0})).forEach((function(e){e.color?n.push(e):e.code.split(" ").forEach((function(e){n.push({color:u[a][e]||u.common[e]||u.common.DEFAULT_VALUE,code:"".concat(e," ")})}))})),n}(function(e,t){var a=[];return e.split(/(\'.+?\')/g).forEach((function(e,n){n%2!==0?a.push({code:e,color:u.common.STRING}):e.split(/(\".+?\")/g).forEach((function(e,n){n%2!==0?a.push({code:e,color:u.common.STRING}):t?t(e).forEach((function(e){return a.push(e)})):a.push({code:e,color:null})}))})),a}(e,f[t]),t)},v=function(e){var t=e.value,a=e.enhanced,l=e.environment,r=e.label,c=o(e,["value","enhanced","environment","label"]);return s({defaultValue:"",value:t,label:r,callBack:function(e,t){var r=l||"terminal";return{name:"modular-codebox",Component:n.createElement("div",null,a&&n.createElement("div",{key:"key_icon",className:"copy-icon"},n.createElement(d,{unstyled:!0,onClick:function(){return navigator.clipboard.writeText(e)}},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 60 60",width:"25px",height:"25px",version:"1.0"},n.createElement("rect",{strokeLinejoin:"round",fillRule:"evenodd",stroke:"#4c4c4c",strokeWidth:"3.125",fill:"#ccc",rx:"2.4745",height:"36.513",width:"34.732",y:"4.5767",x:"5.0385"}),n.createElement("rect",{strokeLinejoin:"round",fillRule:"evenodd",stroke:"#4c4c4c",strokeWidth:"3.125",fill:"#b3b3b3",rx:"2.4745",height:"36.513",width:"34.732",y:"20.161",x:"20.178"}),n.createElement("path",{strokeLinejoin:"round",fillRule:"evenodd",stroke:"#333",strokeLinecap:"round",strokeWidth:"3.125",fill:"#7f7f7f",d:"M10.971 22.475C19.445 41.064 33.797 36.69 33.934 36.69v-6.15l8.269 9.459-8.338 8.788v-6.219s-19.887 4.647-22.894-20.093z"})))),n.createElement("code",{key:"code",className:"code"},a?p(e,r).map((function(e,t){return n.createElement("span",{key:"code-block_".concat(r,"_").concat(t),style:{color:e.color}},"".concat(e.code))})):e)),commonProps:c}}})},h=function(e){var t=e.onChange,a=e.value,l=e.placeholder,r=e.readOnly,c=e.label,i=o(e,["onChange","value","placeholder","readOnly","label"]);return s({callBack:function(e,a){return{name:"modular-counterbox",Component:n.createElement("input",{type:"number",value:e,placeholder:l,className:"input-box",readOnly:r,onChange:function(e){if(!r){var n=e.target.value?Number.parseInt(e.target.value):0;t&&t(n),a(n)}}}),commonProps:i}},defaultValue:a||0,value:a,label:c})},x=function(e){return i({name:"modular-divider",commonProps:e})},b=function(e){var t=e.onChange,a=void 0===t?function(){}:t,l=e.value,r=e.placeholder,c=e.readOnly,i=e.label,d=o(e,["onChange","value","placeholder","readOnly","label"]);return s({callBack:function(e,t){return{name:"modular-inputbox",Component:n.createElement("input",{type:"text",value:e,placeholder:r,className:"input-box",readOnly:c,onChange:function(e){if(!c){var n=e.target.value?e.target.value:"";a(n),t(n)}}}),commonProps:d}},defaultValue:l||"",value:l,label:i})},g=function(e){var t=e.children,a=o(e,["children"]);return i({name:"modular-label",Component:t,wrapper:"p",commonProps:a})},E=function(e){var t=e.to,a=e.children,n=e.newTab,l=o(e,["to","children","newTab"]);return i({name:"modular-link",Component:a,commonProps:l,additionalProps:{href:t,target:n?"_blank":void 0},wrapper:"a"})},k=function(e){var t=e.value,a=e.icon,r=e.onChange,c=e.className,i=e.shadow,d=e.label,m=o(e,["value","icon","onChange","className","shadow","label"]),u=a||n.createElement("svg",{x:0,y:0,viewBox:"0 0 64 64",xmlSpace:"preserve",width:"30px",height:"30px"},n.createElement("circle",{cx:32,cy:32,r:32,fill:"var(--svgexternalcolor)"}),n.createElement("g",{className:"wrapper"},n.createElement("path",{className:"external",d:"M32 52c-9.9 0-18-8.1-18-18 0-6.4 3.4-12.3 8.9-15.5 1-.6 2.2-.2 2.7.7.6 1 .2 2.2-.7 2.7C20.7 24.4 18 29.1 18 34c0 7.7 6.3 14 14 14s14-6.3 14-14c0-5.1-2.7-9.7-7.2-12.2-1-.5-1.3-1.8-.8-2.7.5-1 1.8-1.3 2.7-.8C46.5 21.5 50 27.5 50 34c0 9.9-8.1 18-18 18z"})),n.createElement("g",{className:"wrapper"},n.createElement("path",{className:"external",d:"M32 36c-1.1 0-2-.9-2-2V14c0-1.1.9-2 2-2s2 .9 2 2v20c0 1.1-.9 2-2 2z"})),n.createElement("path",{className:"internal",d:"M39.8 18c4.9 2.7 8.2 8 8.2 14 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-5.9 3.2-11 7.9-13.8M32 32V12"}));return s({callBack:function(e,t){return{name:"modular-toggle",Component:n.createElement("div",{className:l("toggle-icon",{flip:!e,"flip-back":e})},u),commonProps:m,additionalProps:{onClick:function(){r&&r(!e),t(e)},className:l("container",c,{off:!e,shadowed:i})}}},defaultValue:!0,value:t,label:d})},w=function(e){var t=e.children,a=e.wrapper,n=e.animated,c=o(e,["children","wrapper","animated"]);return i({name:"modular-container",Component:t,commonProps:r(r({},c),{className:l(c.className,{animated:n&&!c.hide})}),wrapper:a})},C=function(e){var t=e.icon,a=e.header,l=e.body,c=e.footer,i=e.children;e.className;var d=e.label;e.value;var m=o(e,["icon","header","body","footer","children","className","label","value"]);return s({callBack:function(){return{name:"modular-card",Component:[a&&n.createElement("div",{key:"modular_card_header"},n.createElement("div",{className:"container-header"},t,n.createElement("div",{className:"header"},a)),n.createElement(x,null)),n.createElement("div",{className:"body",key:"modular_card_body"},l),i,c&&n.createElement("div",{key:"modular_card_footer"},n.createElement(x,null),n.createElement("div",{className:"footer"},c))],commonProps:r({},m)}},defaultValue:"",label:d})},N={star:{FULL:n.createElement("svg",{viewBox:"0 0 194.22 184.73",width:"30px",height:"30px",className:"icon"},n.createElement("path",{d:"M157.096 184.718l-60.01-31.565-60.025 31.542 11.476-66.828-48.546-47.34 67.103-9.737L97.115-.008l29.997 60.811 67.099 9.764-48.564 47.319z",fill:"#fc0"}),n.createElement("path",{d:"M127.315 60.416l-30.72 41.819 97.411-31.899z",fill:"#ffe680"}),n.createElement("path",{d:"M97.095 101.346v51.942l-60.63 31.117zM97.095 101.346l59.613 81.476-11.189-65.984z",fill:"#fd5"}),n.createElement("path",{d:"M.385 70.406L97.1 101.348 67.218 60.506z",fill:"#ffe680"}),n.createElement("path",{d:"M97.095 101.346V.126l29.83 60.357z",fill:"#fd5"}),n.createElement("path",{d:"M37.085 183.566l11.261-66.541 48.757-15.679z",fill:"#ffd42a"})),EMPTY:n.createElement("svg",{viewBox:"0 0 122.88 117.42",width:"30px",height:"30px",className:"icon"},n.createElement("path",{d:"M66.71 3.55L81.1 37.26l36.58 3.28v-.01c1.55.13 2.91.89 3.85 2.01a5.663 5.663 0 011.32 4.13v.01a5.673 5.673 0 01-1.69 3.57c-.12.13-.25.25-.39.36L93.25 74.64l8.19 35.83c.35 1.53.05 3.06-.73 4.29a5.652 5.652 0 01-3.54 2.52l-.14.03c-.71.14-1.43.15-2.12.02v.01c-.75-.13-1.47-.42-2.11-.84l-.05-.03-31.3-18.71-31.55 18.86a5.664 5.664 0 01-7.79-1.96c-.38-.64-.62-1.33-.73-2.02-.1-.63-.09-1.27.02-1.89.02-.13.04-.27.08-.4l8.16-35.7c-9.24-8.07-18.74-16.1-27.83-24.3l-.08-.08a5.64 5.64 0 01-1.72-3.7c-.1-1.45.36-2.93 1.4-4.12l.12-.13.08-.08a5.668 5.668 0 013.77-1.72h.06l36.34-3.26 14.44-33.8c.61-1.44 1.76-2.5 3.11-3.05 1.35-.54 2.9-.57 4.34.04.69.29 1.3.71 1.8 1.22.53.53.94 1.15 1.22 1.82l.02.06zm10.19 37.2L61.85 5.51a.42.42 0 00-.09-.14.42.42 0 00-.14-.09.427.427 0 00-.35 0c-.1.04-.19.12-.24.24L45.98 40.75c-.37.86-1.18 1.49-2.18 1.58l-37.9 3.4c-.08.01-.16.02-.24.02-.06 0-.13.02-.18.05-.03.01-.05.03-.07.05l-.1.12c-.05.08-.07.17-.06.26.01.09.04.18.09.25.06.05.13.11.19.17l28.63 25c.77.61 1.17 1.62.94 2.65l-8.51 37.22-.03.14c-.01.06-.02.12-.01.17a.454.454 0 00.33.36c.12.03.24.02.34-.04l32.85-19.64c.8-.5 1.85-.54 2.72-.02L95.43 112c.08.04.16.09.24.14.05.03.1.05.16.06v.01c.04.01.09.01.14 0l.04-.01c.12-.03.22-.1.28-.2.06-.09.08-.21.05-.33L87.8 74.28a2.6 2.6 0 01.83-2.55l28.86-25.2c.04-.03.07-.08.1-.13.02-.04.03-.1.04-.17a.497.497 0 00-.09-.33.48.48 0 00-.3-.15v-.01c-.01 0-.03 0-.03-.01l-37.97-3.41c-1-.01-1.93-.6-2.34-1.57z",fill:"#ffcf00"}))},circle:{FULL:n.createElement("svg",{viewBox:"0 0 640 480",width:"30px",height:"30px",className:"icon"},n.createElement("defs",null,n.createElement("linearGradient",{id:"prefix__a"},n.createElement("stop",{stopColor:"#fff",offset:0}),n.createElement("stop",{stopColor:"#fff",stopOpacity:0,offset:1})),n.createElement("linearGradient",{y2:.892,x2:.5,y1:0,x1:.5,id:"prefix__b",xlinkHref:"#prefix__a"})),n.createElement("g",{fill:"#fff"},n.createElement("path",{d:"M223.68 193.958h225.4V389h-225.4z"}),n.createElement("path",{d:"M178.596 215.074s156.274-108.026 156.35-109.797c.075-1.772 151.033 106.496 151.033 106.496l-307.383 3.301z"})),n.createElement("circle",{fill:"#ff7f00",cx:330,cy:242,r:230}),n.createElement("path",{opacity:.75,fill:"url(#prefix__b)",fillRule:"evenodd",d:"M527.64 189.227a196.774 157.93 0 11-393.549 0 196.774 157.93 0 11393.55 0z"})),EMPTY:n.createElement("svg",{viewBox:"0 0 400 400",width:"30px",height:"30px",className:"icon"},n.createElement("path",{d:"M349.417 199.627c0 82.844-67.16 150.003-150.004 150.003S49.41 282.471 49.41 199.627 116.57 49.624 199.413 49.624s150.004 67.158 150.004 150.003z",fill:"#999"}),n.createElement("path",{transform:"matrix(2.7878 0 0 2.7878 -647.405 -765.254)",d:"M356.79 346.11c0 29.291-23.745 53.036-53.036 53.036s-53.036-23.745-53.036-53.036 23.745-53.036 53.036-53.036 53.036 23.745 53.036 53.036z",fill:"url(#prefix__b)"}),n.createElement("path",{transform:"matrix(2.53784 0 0 2.53784 -571.472 -678.737)",d:"M356.79 346.11c0 29.291-23.745 53.036-53.036 53.036s-53.036-23.745-53.036-53.036 23.745-53.036 53.036-53.036 53.036 23.745 53.036 53.036z",fill:"#ececec",filter:"url(#prefix__c)"}),n.createElement("path",{transform:"translate(-540.441 -643.38) scale(2.43566)",d:"M356.79 346.11c0 29.291-23.745 53.036-53.036 53.036s-53.036-23.745-53.036-53.036 23.745-53.036 53.036-53.036 53.036 23.745 53.036 53.036z",fill:"#999",filter:"url(#prefix__c)"}),n.createElement("path",{transform:"matrix(2.34121 0 0 2.34121 -511.747 -610.697)",d:"M356.79 346.11c0 29.291-23.745 53.036-53.036 53.036s-53.036-23.745-53.036-53.036 23.745-53.036 53.036-53.036 53.036 23.745 53.036 53.036z",fill:"url(#prefix__e)"}),n.createElement("path",{d:"M193.79 862.76c-13.331.3-26.186 7.358-33.336 19.742-7.69 13.32-6.714 29.266 1.155 41.331.853-26.532 21.132-46.515 46.324-45.054 8.258.48 16.054 3.2 22.859 7.59a39.222 39.222 0 00-16.394-18.326 39.368 39.368 0 00-20.608-5.282z",fill:"url(#prefix__e)",opacity:.318,transform:"translate(-366.51 -2423.6) scale(2.9052)"}))}},y=function(e){var t=e.elements,a=e.label,r=e.onChange;e.value;var c=o(e,["elements","label","onChange","value"]),i=n.createElement("svg",{viewBox:"0 0 250 250",width:"2em",height:"2em"},n.createElement("path",{d:"M186.1 70.6c2.5-3.1 1.6-4.3-2-2.6L65.2 122c-3.6 1.6-3.6 4.3 0 6l118.9 54c3.6 1.6 4.5.5 2-2.6l-39.8-48.2c-2.5-3.1-2.5-8.1-.1-11.2l39.9-49.4z"})),m=n.useState(""),u=m[0],f=m[1],p=n.useState(null),v=p[0],h=p[1];return s({callBack:function(e,a){var o=[],s=[],m=t||[],p=function(e){r&&r(e),a(e)};return m&&m.length>0&&m.forEach((function(t,a){var r;s.push(n.createElement("div",{key:"carousel_element_".concat(a),className:l("element",(r={"component-hidden":a!==e},r[u]=a===e,r))},t)),o.push(n.createElement(d,{className:"dot",unstyled:!0,id:"dot_".concat(a),key:"dot_".concat(a),onMouseEnter:function(){return h(a)},onMouseLeave:function(){return h(null)},onClick:function(){f(a>e?"from-right":"from-left"),p(a)}},a===e||null!=v&&a===v?N.circle.FULL:N.circle.EMPTY))})),{name:"modular-carousel",Component:[n.createElement("div",{className:"elements",key:"modular_carousel_elements"},n.createElement(d,{dark:c.dark,id:"left_arrow",className:"arrow prev",unstyled:!0,disabled:0===e,onClick:function(){f("from-left"),p(e-1)}},i),s,n.createElement(d,{dark:c.dark,unstyled:!0,className:"arrow next",id:"right_arrow",disabled:e===m.length-1,onClick:function(){f("from-right"),p(e+1)}},i)),n.createElement("div",{key:"modular_carousel_dots"},n.createElement("div",{className:"dots"},o))],commonProps:c}},label:a,defaultValue:0})},_=function(e){var t=e.children,a=e.elements,c=e.onClose,s=e.logo,m=e.hide,u=e.className,f=o(e,["children","elements","onClose","logo","hide","className"]),p=n.useState(!1),v=p[0],h=p[1];return i({name:"modular-drawer",commonProps:r(r({},f),{className:l({"ease-in":!m,"ease-out":v&&m,"component-hidden":!v&&m},u)}),Component:n.createElement("div",{className:"container-internal"},n.createElement("div",{className:"buttons-panel"},s,n.createElement(d,{dark:f.dark,unstyled:!0,id:"drawer_close_button",onClick:function(){h(!0),c()},className:"close-button"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"37",viewBox:"0 0 11 18"},n.createElement("path",{d:"M8.6812.1963l2.1208928 2.120293-8.484 8.4864L.1972 8.6827z"}),n.createElement("path",{d:"M10.8032656 15.0470656l-2.1213 2.1213-8.4852-8.4852 2.1213-2.1213z"})))),n.createElement("div",{className:"elements"},n.createElement("div",null,a&&a.map((function(e,t){var a=e.isActiveCallback&&e.isActiveCallback();return n.createElement("div",{key:"drawer_element_".concat(t),"data-id":"drawer_element_".concat(t),className:"element"},n.createElement(d,{unstyled:!0,id:"drawer_button_".concat(t),onClick:e.actionCallback},n.createElement("div",{className:"button"},n.createElement("div",{className:"icon"},e.icon),n.createElement("div",{className:l("text",{active:a,inactive:!a})},e.text))),n.createElement(x,{dark:f.dark}))})),t)))})},j=function(e){var t=e.content,a=void 0===t?[]:t,r=e.onChange,c=e.shadow,i=e.value;e.label,e.icon;var m=o(e,["content","onChange","shadow","value","label","icon"]),u=n.useState(!1),f=u[0],p=u[1];return s({defaultValue:0,value:i,callBack:function(e,t){var o=a[e]||{name:"",icon:n.createElement("div",null)};return{name:"modular-dropdown",Component:[n.createElement(d,{unstyled:!0,onClick:function(){p(!f)},shadow:c,dark:m.dark,className:"button",id:"options-menu",key:"options-menu"},n.createElement("div",{key:"label",className:"label"},n.createElement("div",{className:"label"},o.icon),n.createElement("div",{className:"label"},o.name)),n.createElement("div",{key:"icon",className:l("icon",{rotate:f,"rotate-back":!f})},n.createElement("p",null,n.createElement("i",{className:"arrow-icon"})))),n.createElement("div",{key:"options",className:l("options",{"component-hidden":!f,shadowed:c})},a.map((function(e,o){return n.createElement("div",{key:"dropdown_option_".concat(o),className:"option"},n.createElement(d,{unstyled:!0,id:"dropdown_option_".concat(o),onClick:function(){r&&r(o),t(o),p(!1)},key:"item_".concat(o),className:l("regular",{first:0===o,last:o===a.length-1})},e.icon,n.createElement("div",{className:"label"},e.name)))})))],commonProps:m}}})},M=function(e){var t=e.title,a=e.fields,i=e.onSubmit,m=e.submitLabel,u=e.label,f=o(e,["title","fields","onSubmit","submitLabel","label"]),p=a?Object.keys(a).reduce((function(e,t){var a;return r(r({},e),((a={})[t]="",a))}),{}):{},v=Object.keys(p).reduce((function(e,t){var n;return r(r({},e),((n={})[t]=a[t].required||a[t].validate&&!a[t].validate("")||!1,n))}),{}),h=n.useState(p),x=h[0],g=h[1],E=n.useState(v),k=E[0],w=E[1],C=!(Object.keys(k).length>1)||!Object.values(k).find((function(e){return!0===e}));return s({callBack:function(){return{name:"modular-form",Component:c(c([n.createElement("p",{key:"form_title",className:"title"},t)],Object.keys(p).map((function(e,t){var o=e;return n.createElement("div",{className:"field",key:"form_field_".concat(t)},n.createElement(b,{label:n.createElement("span",{className:"header"},a[e].header),value:x[o]||"",id:"form-field-".concat(t),placeholder:a[e].placeholder,onChange:function(t){var n=r({},x),l=r({},k);n[o]=t,t.length<1&&a[e].required?l[o]=!0:l[o]=!!a[e].validate&&!a[e].validate(t),w(l),g(n)},className:l({"field-error":k[o],"form-input":!k[o]})}),n.createElement("div",{className:"error-box"},k[o]&&n.createElement("p",{className:"error-label"},a[e].error)))}))),[n.createElement(d,{disabled:!C,className:"submit-button",key:"form_submit_button",id:"form-submit-button",onClick:function(){i&&i(x)}},m)]),commonProps:f}},label:u})},P=function(e){var t=e.children,a=e.onClose,l=e.title,c=e.overlayClassName,i=o(e,["children","onClose","title","overlayClassName"]);return s({callBack:function(){return{name:"modular-modal",Component:[n.createElement("div",{className:"header",key:"modal_header"},n.createElement("div",{className:"title"},l),n.createElement(d,{dark:i.dark,unstyled:!0,className:"close-button",onClick:a},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 400 400",version:"1.0",height:"1.6rem",width:"1.6rem"},n.createElement("path",{fill:"var(--modular-text-color)",d:"m119.7496 67.5187-52.186 52.186 69.5301 69.5012c5.9668 5.9667 5.9668 15.5958 0 21.5625l-69.53 69.53 52.186 52.186 69.53-69.53c5.9667-5.9668 15.5958-5.9668 21.5625 0l69.53 69.53 52.186-52.186-69.53-69.53c-5.9668-5.9667-5.9668-15.5958 0-21.5625l69.53-69.5013-52.186-52.186-69.53 69.5013c-5.9667 5.9667-15.5958 5.9667-21.5625 0l-69.53-69.5012z"})))),n.createElement("div",{className:"content",key:"modal_content"},t)],commonProps:r(r({},i),{className:c})}}})},L=function(e){var t=e.value,a=e.max,c=e.type,i=e.onChange;e.className;var m=e.vertical;e.icon;var u=e.label,f=o(e,["value","max","type","onChange","className","vertical","icon","label"]),p=c||"star",v=a||5;return s({callBack:function(e,t){var o=n.useState(null),c=o[0],s=o[1],u=n.useState(v),h=u[0],x=u[1];n.useEffect((function(){a&&x(Number.parseInt(String(a)))}),[a]);for(var b=[],g=function(a){var l="EMPTY";l=c||0===c?c>=a?"FULL":"EMPTY":a+1<=e?"FULL":"EMPTY",b.push(n.createElement(d,{unstyled:!0,onClick:function(){t(a+1),i&&i(a+1)},onMouseEnter:function(){return s(a)},onMouseLeave:function(){return s(null)},id:"vote_".concat(a),key:"vote_".concat(a)},N[p][l]))},E=0;E<h;++E)g(E);return{name:"modular-ratebox",Component:b.map((function(e){return e})),commonProps:r(r({},f),{className:l({vertical:m,horizontal:!m})})}},value:t,defaultValue:0,label:u})},O=function(e){var t=e.label,a=e.headers,r=e.rows,c=void 0===r?[]:r,i=o(e,["label","headers","rows"]),d="",m="",u=[];if(c&&c.length>0){u=c.map((function(e,t){return e.map((function(e,r){return n.createElement("div",{key:"element_".concat(t,"_").concat(r),className:l({header:a&&0===t,element:!a||t>0})},e)}))}));for(var f=0;f<c.length;f++)d+=" auto";for(f=0;f<c[0].length;f++)m+=" auto"}return s({callBack:function(){return{name:"modular-table",Component:n.createElement("div",{className:"rows",style:{gridTemplateRows:d,gridTemplateColumns:m}},u),commonProps:i}},label:t})}}}]);