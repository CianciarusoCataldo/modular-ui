(this["webpackJsonpmodular-ui-playground"]=this["webpackJsonpmodular-ui-playground"]||[]).push([[0],{10:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return g})),t.d(n,"c",(function(){return u})),t.d(n,"d",(function(){return v})),t.d(n,"e",(function(){return h})),t.d(n,"f",(function(){return k})),t.d(n,"g",(function(){return y})),t.d(n,"h",(function(){return w})),t.d(n,"i",(function(){return S})),t.d(n,"j",(function(){return E})),t.d(n,"k",(function(){return N})),t.d(n,"l",(function(){return O})),t.d(n,"m",(function(){return A})),t.d(n,"n",(function(){return P})),t.d(n,"o",(function(){return C}));t(58);var a,r=t(7),o=t(33),c=function(){return c=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},c.apply(this,arguments)};function l(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t}function i(e,n){for(var t=0,a=n.length,r=e.length;t<a;t++,r++)e[r]=n[t];return e}!function(e){e.DIV="div",e.A="a",e.HEADER="header",e.BUTTON="button"}(a||(a={}));var s=function(e){var n=e.name,t=e.Component,a=e.commonProps,l=e.additionalProps,i=e.wrapper||"div";return r.createElement(i,c({"data-id":a.id,id:n,className:o(a.className,{dark:a.dark,"component-hidden":a.hide,shadowed:a.shadow})},l),t)},m=function(e){var n,t=e.disabled,a=void 0!==t&&t,c=e.children,i=e.onClick,m=e.className,u=e.noStyles,d=e.id,f=l(e,["disabled","children","onClick","className","noStyles","id"]),p=o("styled ",{disabled:a,enabled:!a});return s({name:"modular-button",Component:r.createElement("button",{"data-id":d,disabled:a,onClick:i,className:o(m,(n={unstyled:u},n[p]=!u,n))},c),commonProps:f})},u=function(e){var n=e.value,t=e.onChange;e.onClick;var a=l(e,["value","onChange","onClick"]),i=r.useState(n||!1),m=i[0],u=i[1];return s({name:"modular-checkbox",Component:m&&r.createElement("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1171.000000 1280.000000",preserveAspectRatio:"xMidYMid meet",fill:"var(--svgcolor)"},r.createElement("g",{transform:"translate(0.000000,1280.000000) scale(0.100000,-0.100000)",stroke:"none"},r.createElement("path",{d:"M11555 12694 c-1288 -888 -2591 -2076 -3945 -3594 -1475 -1656 -3026\n-3783 -4315 -5918 -72 -119 -115 -180 -123 -177 -8 3 -716 474 -1575 1048\n-859 574 -1568 1047 -1576 1052 -11 6 -10 2 2 -16 98 -140 3704 -5078 3709\n-5079 3 0 34 66 68 148 1225 2918 2422 5234 3838 7427 1148 1777 2481 3497\n3899 5028 91 97 163 177 161 177 -2 0 -67 -43 -143 -96z"}))),commonProps:c(c({},a),{className:o(a.className,"check"),shadow:!0}),additionalProps:{onClick:function(){t&&t(!m),u(!m)}}})},d={common:{DEFAULT_VALUE:"#FFFFF",STRING:"#f6713c"},javascript:{import:"#d81313",from:"#d81313",if:"#d81313",else:"#d81313",try:"#d81313",catch:"#d81313",while:"#d81313",export:"#d81313",default:"#3b82f6",const:"#2432f5",COMPONENT_DECLARATION:"#3b82f6"},python:{pip:"#5b9306"},terminal:{sh:"#5b9306",npm:"#5b9306",node:"#5b9306",git:"#5b9306","gh-pages":"#5b9306",docker:"#5b9306"}},f={javascript:null,common:null,python:null,terminal:null},p=function(e,n){return function(e,n){var t=n,a=[];return e.filter((function(e){return e.code.length>0})).forEach((function(e){e.color?a.push(e):e.code.split(" ").forEach((function(e){a.push({color:d[t][e]||d.common[e]||d.common.DEFAULT_VALUE,code:"".concat(e," ")})}))})),a}(function(e,n){var t=[];return e.split(/(\'.+?\')/g).forEach((function(e,a){a%2!==0?t.push({code:e,color:d.common.STRING}):e.split(/(\".+?\")/g).forEach((function(e,a){a%2!==0?t.push({code:e,color:d.common.STRING}):n?n(e).forEach((function(e){return t.push(e)})):t.push({code:e,color:null})}))})),t}(e,f[n]),n)},v=function(e){var n=e.code,t=e.enhanced,a=e.environment,o=l(e,["code","enhanced","environment"]),c=a||"terminal";return s({name:"modular-codebox",Component:[t&&r.createElement("div",{key:"key_icon",className:"copy-icon"},r.createElement("button",{onClick:function(){return navigator.clipboard.writeText(n)}},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 60 60",width:"25px",height:"25px",version:"1.0"},r.createElement("rect",{strokeLinejoin:"round",fillRule:"evenodd",stroke:"#4c4c4c",strokeWidth:"3.125",fill:"#ccc",rx:"2.4745",height:"36.513",width:"34.732",y:"4.5767",x:"5.0385"}),r.createElement("rect",{strokeLinejoin:"round",fillRule:"evenodd",stroke:"#4c4c4c",strokeWidth:"3.125",fill:"#b3b3b3",rx:"2.4745",height:"36.513",width:"34.732",y:"20.161",x:"20.178"}),r.createElement("path",{strokeLinejoin:"round",fillRule:"evenodd",stroke:"#333",strokeLinecap:"round",strokeWidth:"3.125",fill:"#7f7f7f",d:"M10.971 22.475C19.445 41.064 33.797 36.69 33.934 36.69v-6.15l8.269 9.459-8.338 8.788v-6.219s-19.887 4.647-22.894-20.093z"})))),r.createElement("code",{key:"code",className:"code"},t?p(n,c).map((function(e,n){return r.createElement("span",{key:"code-block_".concat(c,"_").concat(n),style:{color:e.color}},"".concat(e.code))})):n)],commonProps:o})},h=function(e){var n=e.className,t=l(e,["className"]);return s({name:"modular-divider",commonProps:c(c({},t),{className:o(n,"container"),shadow:!1})})},E=function(e){var n=e.onChange,t=void 0===n?function(){}:n,a=e.numeric,o=e.value;e.onClick;var c=e.placeholder,i=e.readOnly,m=l(e,["onChange","numeric","value","onClick","placeholder","readOnly"]),u=a&&o&&"number"===typeof o?o:0,d=!a&&o&&"string"===typeof o?o:"",f=r.useState(d),p=f[0],v=f[1],h=r.useState(u),E=h[0],N=h[1];return s({name:"modular-input",Component:r.createElement("input",{type:a?"number":"text",value:a?E:p,placeholder:c,className:"input-box",readOnly:i,onChange:function(e){a?(t(Number.parseInt(e.target.value)),N(Number.parseInt(e.target.value))):(t(e.target.value),v(e.target.value))}}),commonProps:m})},N=function(e){var n=e.to,t=e.children,r=e.newTab,o=l(e,["to","children","newTab"]);return s({name:"modular-link",Component:t,commonProps:o,additionalProps:{href:n,target:r?"_blank":void 0},wrapper:a.A})},b={on:"off",off:"on"},C=function(e){var n=e.value,t=e.onClick,a=l(e,["value","onClick"]),c=r.useState(n||"on"),i=c[0],m=c[1];return s({name:"modular-toggle",Component:r.createElement("div",{className:o("toggle-icon",{flip:"off"===i,"flip-back":"on"===i})},r.createElement("svg",{id:"prefix__Layer_1",x:0,y:0,viewBox:"0 0 64 64",xmlSpace:"preserve",width:"30px",height:"30px"},r.createElement("circle",{cx:32,cy:32,r:32,fill:"var(--svgexternalcolor)"}),r.createElement("g",{className:"wrapper"},r.createElement("path",{className:"external",d:"M32 52c-9.9 0-18-8.1-18-18 0-6.4 3.4-12.3 8.9-15.5 1-.6 2.2-.2 2.7.7.6 1 .2 2.2-.7 2.7C20.7 24.4 18 29.1 18 34c0 7.7 6.3 14 14 14s14-6.3 14-14c0-5.1-2.7-9.7-7.2-12.2-1-.5-1.3-1.8-.8-2.7.5-1 1.8-1.3 2.7-.8C46.5 21.5 50 27.5 50 34c0 9.9-8.1 18-18 18z"})),r.createElement("g",{className:"wrapper"},r.createElement("path",{className:"external",d:"M32 36c-1.1 0-2-.9-2-2V14c0-1.1.9-2 2-2s2 .9 2 2v20c0 1.1-.9 2-2 2z"})),r.createElement("path",{className:"internal",d:"M39.8 18c4.9 2.7 8.2 8 8.2 14 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-5.9 3.2-11 7.9-13.8M32 32V12"}))),commonProps:a,additionalProps:{onClick:function(){t&&t(b[i]),m(b[i])}}})},g=function(e){var n=e.title,t=e.icon,a=e.header,i=e.body,m=e.footer,u=e.children,d=e.titleClassName,f=e.headerClassName,p=e.bodyClassName,v=e.footerClassName,E=e.unstyled,N=l(e,["title","icon","header","body","footer","children","titleClassName","headerClassName","bodyClassName","footerClassName","unstyled"]);return s({name:"modular-card",Component:[r.createElement("p",{key:"card_title",className:o(d,{title:!E})},n),r.createElement("div",{key:"card-container",className:o("container-main",{shadowed:N.shadow})},a&&r.createElement("div",null,r.createElement("div",{className:"container-header"},t,r.createElement("div",{className:o(f,{header:!E})},a)),r.createElement(h,null)),r.createElement("div",{className:o(p,{body:!E})},i),u,m&&r.createElement("div",null,r.createElement(h,null),r.createElement("div",{className:o(v,{footer:!E})},m)))],commonProps:c(c({},N),{shadow:!1})})},k=function(e){var n=e.children,t=e.elements;e.isOpen;var a=e.onClose,i=e.logo,u=e.hide,d=e.className,f=l(e,["children","elements","isOpen","onClose","logo","hide","className"]);return s({name:"modular-drawer",commonProps:c(c({},f),{className:o({"ease-in":!u,"ease-out":u},d)}),Component:r.createElement("div",{className:"container-internal"},r.createElement("div",{className:"buttons-panel"},i,r.createElement("button",{onClick:a,className:"close-button"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"37",viewBox:"0 0 11 18"},r.createElement("path",{fill:"#999",d:"M8.6812.1963l2.1208928 2.120293-8.484 8.4864L.1972 8.6827z"}),r.createElement("path",{fill:"#999",d:"M10.8032656 15.0470656l-2.1213 2.1213-8.4852-8.4852 2.1213-2.1213z"})))),r.createElement("div",{className:"elements"},r.createElement("div",null,t&&t.map((function(e,n){var t=e.isActiveCallback&&e.isActiveCallback();return r.createElement("div",{key:"drawer_element_".concat(n),"data-id":"drawer_element_".concat(n),className:"element"},r.createElement(m,{noStyles:!0,id:"drawer_button_".concat(n),onClick:e.actionCallback},r.createElement("div",{className:"button"},r.createElement("div",{className:"icon"},e.icon),r.createElement("div",{className:o("text",{active:t,inactive:!t})},e.text))),r.createElement(h,null))})),n)))})},y=function(e){var n=e.actualValue,t=e.content,a=void 0===t?[]:t,i=e.placeholder,m=void 0===i?"":i,u=e.onChange,d=l(e,["actualValue","content","placeholder","onChange"]),f=r.useState(!1),p=f[0],v=f[1],h=r.useState(a[n]||{name:m||"",icon:r.createElement("div",null)}),E=h[0],N=h[1];return s({name:"modular-dropdown",Component:[r.createElement("button",{type:"button",onClick:function(){v(!p)},className:"button",id:"options-menu",key:"options-menu","data-id":"options-menu","aria-haspopup":"true","aria-expanded":"true"},r.createElement("div",{key:"label",className:"label"},r.createElement("div",{className:"label"},E.icon),r.createElement("div",{className:"label"},E.name)),r.createElement("div",{key:"icon",className:o("icon",{rotate:p,"rotate-back":!p})},r.createElement("p",null,r.createElement("i",{className:"arrow-icon"})))),r.createElement("div",{key:"options",className:o("options",{"component-hidden":!p})},a.map((function(e,n){return r.createElement("div",{key:"dropdown_option_".concat(n),className:"option"},r.createElement("button",{"data-id":"dropdown_option_".concat(n),onClick:function(){u&&u(e.name,n),N(c({},e)),v(!1)},key:"item_".concat(n),className:o("regular",{first:0===n,last:n===a.length-1})},e.icon,r.createElement("div",{className:"label"},e.name)))})))],commonProps:d})},w=function(e){var n=e.title,t=e.fields,a=e.onSubmit,u=e.submitLabel,d=l(e,["title","fields","onSubmit","submitLabel"]),f=t?Object.keys(t).reduce((function(e,n){var t;return c(c({},e),((t={})[n]="",t))}),{}):{},p=Object.keys(f).reduce((function(e,n){var a;return c(c({},e),((a={})[n]=t[n].required||t[n].validate&&!t[n].validate("")||!1,a))}),{}),v=r.useState(f),h=v[0],N=v[1],b=r.useState(p),C=b[0],g=b[1],k=!(Object.keys(C).length>1)||!Object.values(C).find((function(e){return!0===e}));return s({name:"modular-form",Component:i(i([r.createElement("p",{key:"form_title",className:"title"},n)],Object.keys(f).map((function(e,n){var a=e;return r.createElement("div",{className:"field",key:"form_field_".concat(n)},r.createElement("p",{className:"header"},t[e].header),r.createElement(E,{value:h[a]||"",id:"form-field-".concat(n),placeholder:t[e].placeholder,onChange:function(n){var r=c({},h),o=c({},C);r[a]=n,n.length<1&&t[e].required?o[a]=!0:o[a]=!!t[e].validate&&!t[e].validate(n),g(o),N(r)},className:o({"field-error":C[a],"form-input":!C[a]})}),r.createElement("div",{className:"error-box"},C[a]&&r.createElement("p",{className:"error-label"},t[e].error)))}))),[r.createElement(m,{disabled:!k,className:"submit-button",key:"form_submit_button",id:"form-submit-button",onClick:function(){a&&a(h)}},u)]),commonProps:d})},S=function(e){var n=e.children,t=l(e,["children"]);return s({name:"modular-header",Component:n,commonProps:t,wrapper:a.HEADER})},O=function(e){var n=e.children,t=e.onClose,a=e.title,i=e.overlayClassName,m=e.className,u=l(e,["children","onClose","title","overlayClassName","className"]);return s({name:"modular-modal",Component:r.createElement("div",{"data-id":"container",className:o("container",m)},r.createElement("div",{className:"header"},r.createElement("div",{className:"title"},a),r.createElement("button",{className:"close-button",onClick:t},"X")),r.createElement("div",{className:"content"},n)),commonProps:c(c({},u),{className:i})})},A=function(e){var n=e.children,t=e.orientation,a=void 0===t?"vertical":t,r=l(e,["children","orientation"]);return s({name:"modular-page",Component:n,commonProps:c(c({},r),{className:o(r.className,a)})})},P=function(e){var n=e.headers,t=e.rows,a=void 0===t?[]:t,c=l(e,["headers","rows"]),i="",m="",u=[];if(a&&a.length>0){u=a.map((function(e,t){return e.map((function(e,a){return r.createElement("div",{key:"element_".concat(a),className:o("element",{header:n&&0===t,element:!n||t>0})},e)}))}));for(var d=0;d<a.length;d++)i+=" auto";for(d=0;d<a[0].length;d++)m+=" auto"}return s({name:"modular-table",Component:r.createElement("div",{className:"rows",style:{gridTemplateRows:i,gridTemplateColumns:m}},u),commonProps:c})}},12:function(e,n,t){"use strict";t.d(n,"i",(function(){return o})),t.d(n,"g",(function(){return c})),t.d(n,"b",(function(){return l})),t.d(n,"h",(function(){return i})),t.d(n,"a",(function(){return s})),t.d(n,"k",(function(){return m})),t.d(n,"l",(function(){return u})),t.d(n,"f",(function(){return d})),t.d(n,"m",(function(){return f})),t.d(n,"j",(function(){return p})),t.d(n,"c",(function(){return v})),t.d(n,"d",(function(){return h})),t.d(n,"n",(function(){return E})),t.d(n,"e",(function(){return N}));var a=t(120),r=t(0),o=function(){return Object(a.a)(r.I18N.NAMESPACES[0]).t},c=function(){return Object(a.a)(r.I18N.NAMESPACES[1]).t},l=function(){return Object(a.a)(r.I18N.NAMESPACES[2]).t},i=function(){return Object(a.a)(r.I18N.NAMESPACES[3]).t},s=function(){return Object(a.a)(r.I18N.NAMESPACES[4]).t},m=function(){return Object(a.a)(r.I18N.NAMESPACES[5]).t},u=function(){return Object(a.a)(r.I18N.NAMESPACES[6]).t},d=function(){return Object(a.a)(r.I18N.NAMESPACES[7]).t},f=function(){return Object(a.a)(r.I18N.NAMESPACES[8]).t},p=function(){return Object(a.a)(r.I18N.NAMESPACES[9]).t},v=function(){return Object(a.a)(r.I18N.NAMESPACES[10]).t},h=function(){return Object(a.a)(r.I18N.NAMESPACES[11]).t},E=function(){return Object(a.a)(r.I18N.NAMESPACES[12]).t},N=function(){return Object(a.a)(r.I18N.NAMESPACES[13]).t}},13:function(e,n,t){"use strict";var a=t(23),r=t(10),o=t(6);n.a=function(e){var n=e.children,t=Object(a.a)(r.m);return Object(o.jsx)(t,{children:n})}},58:function(e,n,t){}}]);