(self.webpackChunkmodular_app=self.webpackChunkmodular_app||[]).push([[397,637],{565:function(e,a,t){"use strict";t.d(a,{Z:function(){return T}});var n=t(7313),l=t(1413),o=t(6123),r=t.n(o);var c=t.p+"static/media/left-arrow.2371d25ae4da5666885314488cd7e031.svg";var i=t.p+"static/media/burger.95ad86a68af36a771a941051e6301463.svg",s=t(6609);var d=t.p+"static/media/dark-mode.a64ce9a42aec862c162723ef488c3922.svg";var m=t.p+"static/media/light-mode.69c05ba156fdcd0e12357c70b4a0164a.svg";var u=t.p+"static/media/docs.529f9fc3bab79c2d6dd0ee9199d50eb9.svg";var f=t.p+"static/media/it.7ee7a27e030791474f5325883a3a0b5d.svg";var p=t.p+"static/media/fr.8a07eb7d76b133b1d7e7eb5f58090ee3.svg";var h=t.p+"static/media/en.47367165e20d8ee8fd695ad9809c5bed.svg";var v=t.p+"static/media/de.0c498278a03bc745b591ddb0eba4f00e.svg";var x=t.p+"static/media/es.cc5d62ae82786953f93d0e5a21888e19.svg",g=t(6417),b=(0,g.jsx)("img",{alt:"",src:s,width:100,height:100}),E=(0,g.jsx)("img",{alt:"",src:u,width:30,height:30}),k=(0,g.jsx)("img",{alt:"",src:c}),C=(0,g.jsx)("img",{alt:"",src:i,width:60}),w=(0,g.jsx)("img",{alt:"",src:d,width:30}),N=(0,g.jsx)("img",{alt:"",src:m,width:30}),y={it:(0,g.jsx)("img",{alt:"",width:20,height:20,src:f}),de:(0,g.jsx)("img",{alt:"",width:20,height:20,src:v}),fr:(0,g.jsx)("img",{alt:"",width:20,height:20,src:p}),es:(0,g.jsx)("img",{alt:"",width:20,height:20,src:x}),en:(0,g.jsx)("img",{alt:"",width:20,height:20,src:h})},_=t(9196),j=t(1084),M=t(8629),L=t(5005),P=function(){return(0,g.jsxs)("div",{className:"flex flex-col items-center my-2",children:[(0,g.jsxs)("div",{className:"flex flex-row mb-1",children:[(0,g.jsx)("img",{alt:"",className:"p-1",src:"https://img.shields.io/npm/l/@cianciarusocataldo/modular-ui?label=License",height:"25"}),(0,g.jsx)("img",{alt:"",className:"p-1",src:"https://img.shields.io/npm/v/@cianciarusocataldo/modular-ui?color=blue&label=Latest%20version",height:"25"})]}),(0,g.jsxs)("div",{className:"flex flex-row",children:[(0,g.jsx)("img",{alt:"",className:"p-1",src:"https://img.shields.io/codecov/c/github/CianciarusoCataldo/modular-ui?label=Codecov%20coverage",height:"25"}),(0,g.jsx)("img",{alt:"",className:"p-1",src:"https://github.com/CianciarusoCataldo/modular-ui/actions/workflows/modular-ui.yml/badge.svg?branch=main)](https://github.com/CianciarusoCataldo/modular-ui/actions/workflows/modular-ui.yml",height:"25"})]})]})},B=t(6036),O=t(3687),T={pagesRendering:function(e){return(0,n.lazy)((function(){return t(717)("./".concat(e))}))},modals:{},darkMode:!0,useQueryParams:!0,preloader:function(){return(0,g.jsx)("div",{children:(0,g.jsx)("div",{className:"preloader"})})},header:function(){var e=(0,j.useDispatch)(),a=(0,j.useSelector)(_.getAppName),t=(0,j.useSelector)(_.isHomePage),l=(0,j.useSelector)(_.getHomePage),o=(0,j.useSelector)(_.isInDarkMode),r=(0,n.useCallback)((function(){e((0,_.setDarkMode)(!o))}),[e,o]),c=(0,j.useSelector)(_.getLanguage),i=Object.keys(y),s=(0,B.M)();return(0,g.jsxs)("div",{className:"flex flex-col",children:[(0,g.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end"},children:(0,g.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,g.jsxs)("div",{className:"flex flex-row m-auto pr-4",children:[(0,g.jsx)(O.rU,{to:"https://cianciarusocataldo.github.io/modular-ui/docs",className:"m-auto",newTab:!0,children:E}),(0,g.jsx)(O.rU,{dark:o,to:"https://cianciarusocataldo.github.io/modular-ui/docs",className:"m-auto",newTab:!0,children:s("docs")})]}),(0,g.jsx)(O.Lt,{dark:!1,value:i.findIndex((function(e){return e===c})),shadow:!0,onChange:function(a){e((0,_.changeLanguage)(i[a]))},content:Object.keys(y).map((function(e){return{name:e,icon:y[e]}}))}),(0,g.jsx)(O.ZD,{onIcon:N,offIcon:w,shadow:!0,dark:o,value:!o,onChange:r,className:"mx-1"})]})}),(0,g.jsxs)("div",{className:"flex flex-row",children:[(0,g.jsx)("div",{className:"my-auto",children:(0,g.jsx)(O.zx,{"aria-label":"drawer button",onClick:function(){e((0,_.openDrawer)())},unstyled:!0,className:"outline-none",children:(0,g.jsx)("div",{className:"p-1 sm:p-2 md:p-2 lg:p-2 xl:p-2",children:C})})}),(0,g.jsx)("div",{className:"my-auto",children:(0,g.jsx)(O.zx,{"aria-label":"back button",onClick:function(){e((0,_.requestRoute)(l))},unstyled:!0,className:"overflow-auto ml-1 outline-none",hide:t,children:k})}),(0,g.jsxs)("div",{className:"m-auto flex flex-row p-2",children:[(0,g.jsxs)("div",{className:"mr-2 my-auto",children:[" ",b]}),(0,g.jsx)("div",{className:"flex flex-col my-auto",children:(0,g.jsx)(O.rU,{dark:o,newTab:!0,to:"https://github.com/CianciarusoCataldo/modular-ui",children:(0,g.jsx)("p",{className:"break-words text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl 2xl:text-4xl 3xl:text-4xl 4xl:text-4xl",children:a})})})]})]})]})},footer:P,drawer:{content:function(){var e=(0,j.useDispatch)(),a=(0,j.useSelector)(_.getPages),t=(0,j.useSelector)(_.geti18nConfig),n=(0,j.useSelector)(_.getHomePage),o=(0,j.useSelector)(_.isInDarkMode),c=(0,M.$)(t.pagesNamespace).t,i=(0,l.Z)((0,l.Z)({},a),{},{HOME_PAGE:n});return(0,g.jsx)("div",{children:Object.keys(i).sort().map((function(a,t){return(0,g.jsxs)("div",{className:"mt-1 mb-3",children:[(0,g.jsx)(L.Button,{unstyled:!0,onClick:function(){e((0,_.requestRoute)(i[a])),e((0,_.closeDrawer)())},className:r()({"text-white":o,"text-gray-600":!o},"hover:text-orange-500 text-xl"),children:c(a)}),(0,g.jsx)(L.Divider,{dark:o})]},"drawer_app_element_".concat(t))}))})},logo:function(){var e=(0,j.useSelector)(_.getAppName),a=(0,_.driveWithDarkMode)(L.Link);return(0,g.jsxs)("div",{className:"flex flex-row",children:[b,(0,g.jsx)(a,{to:"https://github.com/CianciarusoCataldo/modular-app",className:"ml-1 text-lg break-all",newTab:!0,children:e})]})},elements:[]}}},6637:function(e,a,t){"use strict";t.r(a);a.default={appName:"Modular-ui",redux:{modal:!1,ui:!0,epics:[],reducers:{},preload:{},darkMode:!0},router:{basename:"/modular-ui",homePage:"/",pages:{Button:"/components/atoms/Button",Card:"/components/molecules/Card",Carousel:"/components/molecules/Carousel",CheckBox:"/components/atoms/CheckBox",CodeBox:"/components/atoms/CodeBox",Container:"/components/molecules/Container",Counter:"/components/molecules/Counter",Divider:"/components/atoms/Divider",Dropdown:"/components/molecules/Dropdown",Form:"/components/molecules/Form",Input:"/components/atoms/Input",Label:"/components/atoms/Label",Link:"/components/atoms/Link",Modal:"/components/atoms/Modal",Rater:"/components/molecules/Rater",Table:"/components/molecules/Table",Toggle:"/components/atoms/Toggle"}},i18n:{fallbackLanguage:"en",supportedLanguages:["en","it","es","fr","de"],namespaces:["overview","common"],defaultNamespace:"common",loadPath:"/modular-ui/locales/{{lng}}/{{ns}}.json",pagesNamespace:"titles",modalsNamespace:"forms"}}},6036:function(e,a,t){"use strict";t.d(a,{M:function(){return l},v:function(){return o}});var n=t(8629),l=function(){return(0,n.$)("common").t},o=function(){return(0,n.$)("overview").t}},717:function(e,a,t){var n={"./Button":[4047,9,325,554],"./Button/":[4047,9,325,554],"./Button/index":[4047,9,325,554],"./Button/index.tsx":[4047,9,325,554],"./Card":[3990,9,325,930],"./Card/":[3990,9,325,930],"./Card/index":[3990,9,325,930],"./Card/index.tsx":[3990,9,325,930],"./Carousel":[5177,9,325,827],"./Carousel/":[5177,9,325,827],"./Carousel/elem0.png":[7507,1,60],"./Carousel/elem1.png":[969,1,969],"./Carousel/elem2.png":[8084,1,84],"./Carousel/index":[5177,9,325,827],"./Carousel/index.tsx":[5177,9,325,827],"./CheckBox":[609,9,325,787],"./CheckBox/":[609,9,325,787],"./CheckBox/index":[609,9,325,787],"./CheckBox/index.tsx":[609,9,325,787],"./CodeBox":[9555,9,325,822],"./CodeBox/":[9555,9,325,822],"./CodeBox/index":[9555,9,325,822],"./CodeBox/index.tsx":[9555,9,325,822],"./Container":[6479,9,325,334],"./Container/":[6479,9,325,334],"./Container/index":[6479,9,325,334],"./Container/index.tsx":[6479,9,325,334],"./Counter":[8434,9,325,291],"./Counter/":[8434,9,325,291],"./Counter/index":[8434,9,325,291],"./Counter/index.tsx":[8434,9,325,291],"./Divider":[6602,9,325,721],"./Divider/":[6602,9,325,721],"./Divider/index":[6602,9,325,721],"./Divider/index.tsx":[6602,9,325,721],"./Dropdown":[2075,9,325,722],"./Dropdown/":[2075,9,325,722],"./Dropdown/index":[2075,9,325,722],"./Dropdown/index.tsx":[2075,9,325,722],"./Form":[3554,9,325,488],"./Form/":[3554,9,325,488],"./Form/index":[3554,9,325,488],"./Form/index.tsx":[3554,9,325,488],"./HOME_PAGE":[1439,9,439],"./HOME_PAGE/":[1439,9,439],"./HOME_PAGE/index":[1439,9,439],"./HOME_PAGE/index.tsx":[1439,9,439],"./Input":[2113,9,325,405],"./Input/":[2113,9,325,405],"./Input/index":[2113,9,325,405],"./Input/index.tsx":[2113,9,325,405],"./Label":[3715,9,325,420],"./Label/":[3715,9,325,420],"./Label/index":[3715,9,325,420],"./Label/index.tsx":[3715,9,325,420],"./Link":[9870,9,325,162],"./Link/":[9870,9,325,162],"./Link/index":[9870,9,325,162],"./Link/index.tsx":[9870,9,325,162],"./Modal":[5183,9,325,122],"./Modal/":[5183,9,325,122],"./Modal/index":[5183,9,325,122],"./Modal/index.tsx":[5183,9,325,122],"./Rater":[1052,9,325,507],"./Rater/":[1052,9,325,507],"./Rater/index":[1052,9,325,507],"./Rater/index.tsx":[1052,9,325,507],"./Table":[3726,9,325,320],"./Table/":[3726,9,325,320],"./Table/index":[3726,9,325,320],"./Table/index.tsx":[3726,9,325,320],"./Toggle":[7473,9,325,795],"./Toggle/":[7473,9,325,795],"./Toggle/index":[7473,9,325,795],"./Toggle/index.tsx":[7473,9,325,795],"./Toggle/off.svg":[791,1,791],"./Toggle/on.svg":[8993,1,993]};function l(e){if(!t.o(n,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=n[e],l=a[0];return Promise.all(a.slice(2).map(t.e)).then((function(){return t.t(l,16|a[1])}))}l.keys=function(){return Object.keys(n)},l.id=717,e.exports=l},6609:function(e,a,t){"use strict";e.exports=t.p+"static/media/logo.f75eb98212c8f4007cea.png"},3687:function(e,a,t){"use strict";t.d(a,{zx:function(){return d},Zb:function(){return w},lr:function(){return y},Jg:function(){return m},wh:function(){return h},W2:function(){return _},AT:function(){return v},iz:function(){return x},Lt:function(){return j},l0:function(){return M},II:function(){return g},__:function(){return b},rU:function(){return E},u_:function(){return L},gK:function(){return P},iA:function(){return B},ZD:function(){return C}});var n=t(7313),l=t(6123),o=function(){return o=Object.assign||function(e){for(var a,t=1,n=arguments.length;t<n;t++)for(var l in a=arguments[t])Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l]);return e},o.apply(this,arguments)};function r(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)a.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(t[n[l]]=e[n[l]])}return t}function c(e,a,t){if(t||2===arguments.length)for(var n,l=0,o=a.length;l<o;l++)!n&&l in a||(n||(n=Array.prototype.slice.call(a,0,l)),n[l]=a[l]);return e.concat(n||Array.prototype.slice.call(a))}var i=function(e){var a=e.name,t=e.Component,r=e.commonProps,c=e.additionalProps,i=e.wrapper||"div";return n.createElement(i,o({"data-id":r.id,id:a,className:l(r.className,{dark:r.dark,"component-hidden":r.hide,shadowed:r.shadow,styled:!r.unstyled}),style:r.style},c),t)},s=function(e){var a=e.value,t=e.defaultValue,c=e.label,s=e.callBack,d=a||t,m=n.useState(d),u=m[0],f=m[1];n.useEffect((function(){void 0!==a&&null!==a&&f(a)}),[a]);var p=s(u,f),h=p.commonProps,v=p.additionalProps,x=r(p,["commonProps","additionalProps"]);return i(o(o({},x),{commonProps:o(o({},h),{shadow:!1,className:void 0}),Component:n.createElement("div",{className:"box-component"},c&&n.createElement("div",{className:"box-label"},c),n.createElement("div",o({className:l(h.className,{shadowed:h.shadow},"container")},v),x.Component))}))},d=function(e){var a=e.disabled,t=e.children,o=e.onClick,c=e.className,s=e.onMouseEnter,d=e.onMouseLeave,m=r(e,["disabled","children","onClick","className","onMouseEnter","onMouseLeave"]);return i({name:"modular-button",Component:n.createElement("button",{"data-id":m.id,disabled:a,onClick:o,onMouseEnter:s,onMouseLeave:d,className:l(c,{disabled:a,enabled:!a})},t),commonProps:m})},m=function(e){var a=e.value,t=e.onChange,l=e.label;e.icon;var o=r(e,["value","onChange","label","icon"]);return s({callBack:function(e,a){return{name:"modular-checkbox",Component:e&&n.createElement("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1171.000000 1280.000000",preserveAspectRatio:"xMidYMid meet",fill:"var(--modular-link-color)"},n.createElement("g",{transform:"translate(0.000000,1280.000000) scale(0.100000,-0.100000)",stroke:"none"},n.createElement("path",{d:"M11555 12694 c-1288 -888 -2591 -2076 -3945 -3594 -1475 -1656 -3026\n-3783 -4315 -5918 -72 -119 -115 -180 -123 -177 -8 3 -716 474 -1575 1048\n-859 574 -1568 1047 -1576 1052 -11 6 -10 2 2 -16 98 -140 3704 -5078 3709\n-5079 3 0 34 66 68 148 1225 2918 2422 5234 3838 7427 1148 1777 2481 3497\n3899 5028 91 97 163 177 161 177 -2 0 -67 -43 -143 -96z"}))),commonProps:o,additionalProps:{onClick:function(){t&&t(!e),a(!e)}}}},value:a,defaultValue:!1,label:l})},u={common:{DEFAULT_VALUE:"#FFFFF",STRING:"#f6713c"},javascript:{import:"#d81313",from:"#d81313",if:"#d81313",else:"#d81313",try:"#d81313",catch:"#d81313",while:"#d81313",export:"#d81313",default:"#3b82f6",const:"#2432f5",COMPONENT_DECLARATION:"#3b82f6"},python:{pip:"#5b9306"},terminal:{sh:"#5b9306",npm:"#5b9306",node:"#5b9306",git:"#5b9306","gh-pages":"#5b9306",docker:"#5b9306"}},f={javascript:null,common:null,python:null,terminal:null},p=function(e,a){return function(e,a){var t=a,n=[];return e.filter((function(e){return e.code.length>0})).forEach((function(e){e.color?n.push(e):e.code.split(" ").forEach((function(e){n.push({color:u[t][e]||u.common[e]||u.common.DEFAULT_VALUE,code:"".concat(e," ")})}))})),n}(function(e,a){var t=[];return e.split(/(\'.+?\')/g).forEach((function(e,n){n%2!==0?t.push({code:e,color:u.common.STRING}):e.split(/(\".+?\")/g).forEach((function(e,n){n%2!==0?t.push({code:e,color:u.common.STRING}):a?a(e).forEach((function(e){return t.push(e)})):t.push({code:e,color:null})}))})),t}(e,f[a]),a)},h=function(e){var a=e.value,t=e.enhanced,l=e.environment,o=e.label,c=r(e,["value","enhanced","environment","label"]);return s({defaultValue:"",value:a,label:o,callBack:function(e,a){var o=l||"terminal";return{name:"modular-codebox",Component:n.createElement("div",null,t&&n.createElement("div",{key:"key_icon",className:"copy-icon"},n.createElement(d,{unstyled:!0,onClick:function(){return navigator.clipboard.writeText(e)}},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 60 60",width:"25px",height:"25px",version:"1.0"},n.createElement("rect",{strokeLinejoin:"round",fillRule:"evenodd",stroke:"#4c4c4c",strokeWidth:"3.125",fill:"#ccc",rx:"2.4745",height:"36.513",width:"34.732",y:"4.5767",x:"5.0385"}),n.createElement("rect",{strokeLinejoin:"round",fillRule:"evenodd",stroke:"#4c4c4c",strokeWidth:"3.125",fill:"#b3b3b3",rx:"2.4745",height:"36.513",width:"34.732",y:"20.161",x:"20.178"}),n.createElement("path",{strokeLinejoin:"round",fillRule:"evenodd",stroke:"#333",strokeLinecap:"round",strokeWidth:"3.125",fill:"#7f7f7f",d:"M10.971 22.475C19.445 41.064 33.797 36.69 33.934 36.69v-6.15l8.269 9.459-8.338 8.788v-6.219s-19.887 4.647-22.894-20.093z"})))),n.createElement("code",{key:"code",className:"code"},t?p(e,o).map((function(e,a){return n.createElement("span",{key:"code-block_".concat(o,"_").concat(a),style:{color:e.color}},"".concat(e.code))})):e)),commonProps:c}}})},v=function(e){var a=e.onChange,t=e.value,l=e.placeholder,o=e.readOnly,c=e.label,i=r(e,["onChange","value","placeholder","readOnly","label"]);return s({callBack:function(e,t){return{name:"modular-counterbox",Component:n.createElement("input",{type:"number",value:e,placeholder:l,className:"input-box",readOnly:o,onChange:function(e){if(!o){var n=e.target.value?Number.parseInt(e.target.value):0;a&&a(n),t(n)}}}),commonProps:i}},defaultValue:t||0,value:t,label:c})},x=function(e){return i({name:"modular-divider",commonProps:e})},g=function(e){var a=e.onChange,t=void 0===a?function(){}:a,l=e.value,o=e.placeholder,c=e.readOnly,i=e.label,d=r(e,["onChange","value","placeholder","readOnly","label"]);return s({callBack:function(e,a){return{name:"modular-inputbox",Component:n.createElement("input",{type:"text",value:e,placeholder:o,className:"input-box",readOnly:c,onChange:function(e){if(!c){var n=e.target.value?e.target.value:"";t(n),a(n)}}}),commonProps:d}},defaultValue:l||"",value:l,label:i})},b=function(e){var a=e.children,t=r(e,["children"]);return i({name:"modular-label",Component:a,wrapper:"p",commonProps:t})},E=function(e){var a=e.to,t=e.children,n=e.newTab,l=r(e,["to","children","newTab"]);return i({name:"modular-link",Component:t,commonProps:l,additionalProps:{href:a,target:n?"_blank":void 0},wrapper:"a"})},k=n.createElement("svg",{x:0,y:0,viewBox:"0 0 64 64",xmlSpace:"preserve",width:"30px",height:"30px"},n.createElement("circle",{cx:32,cy:32,r:32,fill:"var(--svgexternalcolor)"}),n.createElement("g",{className:"wrapper"},n.createElement("path",{className:"external",d:"M32 52c-9.9 0-18-8.1-18-18 0-6.4 3.4-12.3 8.9-15.5 1-.6 2.2-.2 2.7.7.6 1 .2 2.2-.7 2.7C20.7 24.4 18 29.1 18 34c0 7.7 6.3 14 14 14s14-6.3 14-14c0-5.1-2.7-9.7-7.2-12.2-1-.5-1.3-1.8-.8-2.7.5-1 1.8-1.3 2.7-.8C46.5 21.5 50 27.5 50 34c0 9.9-8.1 18-18 18z"})),n.createElement("g",{className:"wrapper"},n.createElement("path",{className:"external",d:"M32 36c-1.1 0-2-.9-2-2V14c0-1.1.9-2 2-2s2 .9 2 2v20c0 1.1-.9 2-2 2z"})),n.createElement("path",{className:"internal",d:"M39.8 18c4.9 2.7 8.2 8 8.2 14 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-5.9 3.2-11 7.9-13.8M32 32V12"})),C=function(e){var a=e.value,t=e.icon,o=e.onChange,c=e.className,i=e.shadow,d=e.label,m=e.offIcon,u=e.onIcon,f=r(e,["value","icon","onChange","className","shadow","label","offIcon","onIcon"]),p=t||k,h=!0===a?u||p:m||p;return s({callBack:function(e,a){return{name:"modular-toggle",Component:n.createElement("div",{className:l("toggle-icon",{flip:!e,"flip-back":e})},h),commonProps:f,additionalProps:{onClick:function(){o&&o(!e),a(e)},className:l("container",c,{off:!e,shadowed:i})}}},defaultValue:!0,value:a,label:d})},w=function(e){var a=e.icon,t=e.header,l=e.body,c=e.footer,i=e.children;e.className;var d=e.label,m=r(e,["icon","header","body","footer","children","className","label"]);return s({callBack:function(){return{name:"modular-card",Component:[t&&n.createElement("div",{key:"modular_card_header"},n.createElement("div",{className:"container-header"},a,n.createElement("div",{className:"header"},t)),n.createElement(x,null)),n.createElement("div",{className:"body",key:"modular_card_body"},l),i,c&&n.createElement("div",{key:"modular_card_footer"},n.createElement(x,null),n.createElement("div",{className:"footer"},c))],commonProps:o({},m)}},defaultValue:"",label:d})},N={star:{FULL:n.createElement("svg",{viewBox:"0 0 194.22 184.73",width:"30px",height:"30px",className:"icon"},n.createElement("path",{d:"M157.096 184.718l-60.01-31.565-60.025 31.542 11.476-66.828-48.546-47.34 67.103-9.737L97.115-.008l29.997 60.811 67.099 9.764-48.564 47.319z",fill:"#fc0"}),n.createElement("path",{d:"M127.315 60.416l-30.72 41.819 97.411-31.899z",fill:"#ffe680"}),n.createElement("path",{d:"M97.095 101.346v51.942l-60.63 31.117zM97.095 101.346l59.613 81.476-11.189-65.984z",fill:"#fd5"}),n.createElement("path",{d:"M.385 70.406L97.1 101.348 67.218 60.506z",fill:"#ffe680"}),n.createElement("path",{d:"M97.095 101.346V.126l29.83 60.357z",fill:"#fd5"}),n.createElement("path",{d:"M37.085 183.566l11.261-66.541 48.757-15.679z",fill:"#ffd42a"})),EMPTY:n.createElement("svg",{viewBox:"0 0 122.88 117.42",width:"30px",height:"30px",className:"icon"},n.createElement("path",{d:"M66.71 3.55L81.1 37.26l36.58 3.28v-.01c1.55.13 2.91.89 3.85 2.01a5.663 5.663 0 011.32 4.13v.01a5.673 5.673 0 01-1.69 3.57c-.12.13-.25.25-.39.36L93.25 74.64l8.19 35.83c.35 1.53.05 3.06-.73 4.29a5.652 5.652 0 01-3.54 2.52l-.14.03c-.71.14-1.43.15-2.12.02v.01c-.75-.13-1.47-.42-2.11-.84l-.05-.03-31.3-18.71-31.55 18.86a5.664 5.664 0 01-7.79-1.96c-.38-.64-.62-1.33-.73-2.02-.1-.63-.09-1.27.02-1.89.02-.13.04-.27.08-.4l8.16-35.7c-9.24-8.07-18.74-16.1-27.83-24.3l-.08-.08a5.64 5.64 0 01-1.72-3.7c-.1-1.45.36-2.93 1.4-4.12l.12-.13.08-.08a5.668 5.668 0 013.77-1.72h.06l36.34-3.26 14.44-33.8c.61-1.44 1.76-2.5 3.11-3.05 1.35-.54 2.9-.57 4.34.04.69.29 1.3.71 1.8 1.22.53.53.94 1.15 1.22 1.82l.02.06zm10.19 37.2L61.85 5.51a.42.42 0 00-.09-.14.42.42 0 00-.14-.09.427.427 0 00-.35 0c-.1.04-.19.12-.24.24L45.98 40.75c-.37.86-1.18 1.49-2.18 1.58l-37.9 3.4c-.08.01-.16.02-.24.02-.06 0-.13.02-.18.05-.03.01-.05.03-.07.05l-.1.12c-.05.08-.07.17-.06.26.01.09.04.18.09.25.06.05.13.11.19.17l28.63 25c.77.61 1.17 1.62.94 2.65l-8.51 37.22-.03.14c-.01.06-.02.12-.01.17a.454.454 0 00.33.36c.12.03.24.02.34-.04l32.85-19.64c.8-.5 1.85-.54 2.72-.02L95.43 112c.08.04.16.09.24.14.05.03.1.05.16.06v.01c.04.01.09.01.14 0l.04-.01c.12-.03.22-.1.28-.2.06-.09.08-.21.05-.33L87.8 74.28a2.6 2.6 0 01.83-2.55l28.86-25.2c.04-.03.07-.08.1-.13.02-.04.03-.1.04-.17a.497.497 0 00-.09-.33.48.48 0 00-.3-.15v-.01c-.01 0-.03 0-.03-.01l-37.97-3.41c-1-.01-1.93-.6-2.34-1.57z",fill:"#ffcf00"}))},circle:{FULL:n.createElement("svg",{viewBox:"0 0 640 480",width:"30px",height:"30px",className:"icon"},n.createElement("defs",null,n.createElement("linearGradient",{id:"prefix__a"},n.createElement("stop",{stopColor:"#fff",offset:0}),n.createElement("stop",{stopColor:"#fff",stopOpacity:0,offset:1})),n.createElement("linearGradient",{y2:.892,x2:.5,y1:0,x1:.5,id:"prefix__b",xlinkHref:"#prefix__a"})),n.createElement("g",{fill:"#fff"},n.createElement("path",{d:"M223.68 193.958h225.4V389h-225.4z"}),n.createElement("path",{d:"M178.596 215.074s156.274-108.026 156.35-109.797c.075-1.772 151.033 106.496 151.033 106.496l-307.383 3.301z"})),n.createElement("circle",{fill:"#ff7f00",cx:330,cy:242,r:230}),n.createElement("path",{opacity:.75,fill:"url(#prefix__b)",fillRule:"evenodd",d:"M527.64 189.227a196.774 157.93 0 11-393.549 0 196.774 157.93 0 11393.55 0z"})),EMPTY:n.createElement("svg",{viewBox:"0 0 400 400",width:"30px",height:"30px",className:"icon"},n.createElement("path",{d:"M349.417 199.627c0 82.844-67.16 150.003-150.004 150.003S49.41 282.471 49.41 199.627 116.57 49.624 199.413 49.624s150.004 67.158 150.004 150.003z",fill:"#999"}),n.createElement("path",{transform:"matrix(2.7878 0 0 2.7878 -647.405 -765.254)",d:"M356.79 346.11c0 29.291-23.745 53.036-53.036 53.036s-53.036-23.745-53.036-53.036 23.745-53.036 53.036-53.036 53.036 23.745 53.036 53.036z",fill:"url(#prefix__b)"}),n.createElement("path",{transform:"matrix(2.53784 0 0 2.53784 -571.472 -678.737)",d:"M356.79 346.11c0 29.291-23.745 53.036-53.036 53.036s-53.036-23.745-53.036-53.036 23.745-53.036 53.036-53.036 53.036 23.745 53.036 53.036z",fill:"#ececec",filter:"url(#prefix__c)"}),n.createElement("path",{transform:"translate(-540.441 -643.38) scale(2.43566)",d:"M356.79 346.11c0 29.291-23.745 53.036-53.036 53.036s-53.036-23.745-53.036-53.036 23.745-53.036 53.036-53.036 53.036 23.745 53.036 53.036z",fill:"#999",filter:"url(#prefix__c)"}),n.createElement("path",{transform:"matrix(2.34121 0 0 2.34121 -511.747 -610.697)",d:"M356.79 346.11c0 29.291-23.745 53.036-53.036 53.036s-53.036-23.745-53.036-53.036 23.745-53.036 53.036-53.036 53.036 23.745 53.036 53.036z",fill:"url(#prefix__e)"}),n.createElement("path",{d:"M193.79 862.76c-13.331.3-26.186 7.358-33.336 19.742-7.69 13.32-6.714 29.266 1.155 41.331.853-26.532 21.132-46.515 46.324-45.054 8.258.48 16.054 3.2 22.859 7.59a39.222 39.222 0 00-16.394-18.326 39.368 39.368 0 00-20.608-5.282z",fill:"url(#prefix__e)",opacity:.318,transform:"translate(-366.51 -2423.6) scale(2.9052)"}))}},y=function(e){var a=e.elements,t=e.label,o=e.onChange;e.value;var c=r(e,["elements","label","onChange","value"]),i=n.createElement("svg",{viewBox:"0 0 250 250",width:"2em",height:"2em"},n.createElement("path",{d:"M186.1 70.6c2.5-3.1 1.6-4.3-2-2.6L65.2 122c-3.6 1.6-3.6 4.3 0 6l118.9 54c3.6 1.6 4.5.5 2-2.6l-39.8-48.2c-2.5-3.1-2.5-8.1-.1-11.2l39.9-49.4z"})),m=n.useState(""),u=m[0],f=m[1],p=n.useState(null),h=p[0],v=p[1];return s({callBack:function(e,t){var r=[],s=[],m=a||[],p=function(e){o&&o(e),t(e)};return m&&m.length>0&&m.forEach((function(a,t){var o;s.push(n.createElement("div",{key:"carousel_element_".concat(t),className:l("element",(o={"component-hidden":t!==e},o[u]=t===e,o))},a)),r.push(n.createElement(d,{className:"dot",unstyled:!0,id:"dot_".concat(t),key:"dot_".concat(t),onMouseEnter:function(){return v(t)},onMouseLeave:function(){return v(null)},onClick:function(){f(t>e?"from-right":"from-left"),p(t)}},t===e||null!=h&&t===h?N.circle.FULL:N.circle.EMPTY))})),{name:"modular-carousel",Component:[n.createElement("div",{className:"elements",key:"modular_carousel_elements"},n.createElement(d,{dark:c.dark,id:"left_arrow",className:"arrow prev",unstyled:!0,disabled:0===e,onClick:function(){f("from-left"),p(e-1)}},i),s,n.createElement(d,{dark:c.dark,unstyled:!0,className:"arrow next",id:"right_arrow",disabled:e===m.length-1,onClick:function(){f("from-right"),p(e+1)}},i)),n.createElement("div",{key:"modular_carousel_dots"},n.createElement("div",{className:"dots"},r))],commonProps:c}},label:t,defaultValue:0})},_=function(e){var a=e.children,t=e.wrapper,n=e.animated,c=r(e,["children","wrapper","animated"]);return i({name:"modular-container",Component:a,commonProps:o(o({},c),{className:l(c.className,{animated:n&&!c.hide})}),wrapper:t})},j=function(e){var a=e.content,t=void 0===a?[]:a,o=e.onChange,c=e.shadow,i=e.value;e.label,e.icon;var m=r(e,["content","onChange","shadow","value","label","icon"]),u=n.useState(!1),f=u[0],p=u[1];return s({defaultValue:0,value:i,callBack:function(e,a){var r=t[e]||{name:"",icon:n.createElement("div",null)};return{name:"modular-dropdown",Component:[n.createElement(d,{unstyled:!0,onClick:function(){p(!f)},shadow:c,dark:m.dark,className:"button",id:"options-menu",key:"options-menu"},n.createElement("div",{key:"label",className:"label"},n.createElement("div",{className:"label"},r.icon),n.createElement("div",{className:"label"},r.name)),n.createElement("div",{key:"icon",className:l("icon",{rotate:f,"rotate-back":!f})},n.createElement("p",null,n.createElement("i",{className:"arrow-icon"})))),n.createElement("div",{key:"options",className:l("options",{"component-hidden":!f,shadowed:c})},t.map((function(e,r){return n.createElement("div",{key:"dropdown_option_".concat(r),className:"option"},n.createElement(d,{unstyled:!0,id:"dropdown_option_".concat(r),onClick:function(){o&&o(r),a(r),p(!1)},key:"item_".concat(r),className:l("regular",{first:0===r,last:r===t.length-1})},e.icon,n.createElement("div",{className:"label"},e.name)))})))],commonProps:m}}})},M=function(e){var a=e.title,t=e.fields,i=e.onSubmit,m=e.submitLabel,u=e.label,f=r(e,["title","fields","onSubmit","submitLabel","label"]),p=t?Object.keys(t).reduce((function(e,a){var t;return o(o({},e),((t={})[a]="",t))}),{}):{},h=Object.keys(p).reduce((function(e,a){var n;return o(o({},e),((n={})[a]=t[a].required||t[a].validate&&!t[a].validate("")||!1,n))}),{}),v=n.useState(p),x=v[0],b=v[1],E=n.useState(h),k=E[0],C=E[1],w=!(Object.keys(k).length>1)||!Object.values(k).find((function(e){return!0===e}));return s({callBack:function(){return{name:"modular-form",Component:c(c([n.createElement("p",{key:"form_title",className:"title"},a)],Object.keys(p).map((function(e,a){var r=e;return n.createElement("div",{className:"field",key:"form_field_".concat(a)},n.createElement(g,{label:n.createElement("span",{className:"header"},t[e].header),value:x[r]||"",id:"form-field-".concat(a),placeholder:t[e].placeholder,onChange:function(a){var n=o({},x),l=o({},k);n[r]=a,a.length<1&&t[e].required?l[r]=!0:l[r]=!!t[e].validate&&!t[e].validate(a),C(l),b(n)},className:l({"field-error":k[r],"form-input":!k[r]})}),n.createElement("div",{className:"error-box"},k[r]&&n.createElement("p",{className:"error-label"},t[e].error)))})),!0),[n.createElement(d,{disabled:!w,className:"submit-button",key:"form_submit_button",id:"form-submit-button",onClick:function(){i&&i(x)}},m)],!1),commonProps:f}},label:u})},L=function(e){var a=e.children,t=e.onClose,l=e.title,c=e.overlayClassName,i=r(e,["children","onClose","title","overlayClassName"]);return s({callBack:function(){return{name:"modular-modal",Component:[n.createElement("div",{className:"header",key:"modal_header"},n.createElement("div",{className:"title"},l),n.createElement(d,{dark:i.dark,unstyled:!0,className:"close-button",onClick:t},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 400 400",version:"1.0",height:"1.6rem",width:"1.6rem"},n.createElement("path",{fill:"var(--modular-text-color)",d:"m119.7496 67.5187-52.186 52.186 69.5301 69.5012c5.9668 5.9667 5.9668 15.5958 0 21.5625l-69.53 69.53 52.186 52.186 69.53-69.53c5.9667-5.9668 15.5958-5.9668 21.5625 0l69.53 69.53 52.186-52.186-69.53-69.53c-5.9668-5.9667-5.9668-15.5958 0-21.5625l69.53-69.5013-52.186-52.186-69.53 69.5013c-5.9667 5.9667-15.5958 5.9667-21.5625 0l-69.53-69.5012z"})))),n.createElement("div",{className:"content",key:"modal_content"},a)],commonProps:o(o({},i),{className:c})}}})},P=function(e){var a=e.value,t=e.max,c=e.type,i=e.onChange;e.className;var m=e.vertical;e.icon;var u=e.label,f=r(e,["value","max","type","onChange","className","vertical","icon","label"]),p=c||"star",h=t||5;return s({callBack:function(e,a){var r=n.useState(null),c=r[0],s=r[1],u=n.useState(h),v=u[0],x=u[1];n.useEffect((function(){t&&x(Number.parseInt(String(t)))}),[t]);for(var g=[],b=function(t){var l="EMPTY";l=c||0===c?c>=t?"FULL":"EMPTY":t+1<=e?"FULL":"EMPTY",g.push(n.createElement(d,{unstyled:!0,onClick:function(){a(t+1),i&&i(t+1)},onMouseEnter:function(){return s(t)},onMouseLeave:function(){return s(null)},id:"vote_".concat(t),key:"vote_".concat(t)},N[p][l]))},E=0;E<v;++E)b(E);return{name:"modular-ratebox",Component:g.map((function(e){return e})),commonProps:o(o({},f),{className:l({vertical:m,horizontal:!m})})}},value:a,defaultValue:0,label:u})},B=function(e){var a=e.label,t=e.headers,o=e.rows,c=r(e,["label","headers","rows"]),i="",d="",m=o||[],u=m.map((function(e,a){return e.map((function(e,o){return n.createElement("div",{key:"element_".concat(a,"_").concat(o),className:l({header:t&&0===a,element:!t||a>0})},e)}))}));if(m.length>0){for(var f=0;f<o.length;f++)i+=" auto";for(f=0;f<o[0].length;f++)d+=" auto"}return s({callBack:function(){return{name:"modular-table",Component:n.createElement("div",{className:"rows",style:{gridTemplateRows:i,gridTemplateColumns:d}},u),commonProps:c}},label:a})}}}]);