(this["webpackJsonpmodular-ui-playground"]=this["webpackJsonpmodular-ui-playground"]||[]).push([[9],{11:function(e,t,n){},25:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return o}));var a=n(12),c=n(7),r={HOME:Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(11)]).then(n.bind(null,64))})),Form:Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(16)]).then(n.bind(null,33))})),Card:Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,29))})),Dropdown:Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,32))})),Button:Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,28))})),Divider:Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(15)]).then(n.bind(null,31))})),Link:Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(17)]).then(n.bind(null,34))})),Modal:Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,44))})),Table:Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(18)]).then(n.bind(null,30))}))},i=function(e){return Object.keys(e).map((function(t){return{component:r[t],key:e[t],exact:!0,path:e[t]}}))},l=function(e){var t=Object(a.a)({},e.ROUTER.ROUTES_PATHS);return Object.keys(t).forEach((function(n){t[n]="".concat(e.ROUTER.BASENAME).concat(t[n])})),t},o=function(e){return Object.fromEntries(Object.keys(e).map((function(t,n){return[e[t],t]})))}},39:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var a=n(35),c=Object(a.b)("@@ui/OPEN_DRAWER"),r=Object(a.b)("@@ui/CLOSE_DRAWER"),i=Object(a.b)("@@ui/CHANGE_LANGUAGE",(function(e){return{payload:{language:e}}}))},4:function(e,t,n){"use strict";n.r(t),n.d(t,"startRender",(function(){return U}));n(92),n(93);var a=n(61),c=n(12),r=n(7),i=n.n(r),l=n(121),o=n(82),s=n(15),u=n.n(s),d=n(41),m=n(25),b=n(8),f=(n.p,n.p+"static/media/burger.95ad86a6.svg"),j=n.p+"static/media/home.64303f45.svg",v=(n.p,n.p+"static/media/logo.f75eb982.png"),O=n.p+"static/media/it.7ee7a27e.svg",h=n.p+"static/media/fr.8a07eb7d.svg",p=n.p+"static/media/en.47367165.svg",E=n.p+"static/media/de.0c498278.svg",N=n.p+"static/media/es.cc5d62ae.svg",g=n(6),x=Object(g.jsx)("img",{alt:"",src:v,width:100,height:100}),y=Object(g.jsx)("img",{alt:"",src:f,width:60}),w=Object(g.jsx)("img",{alt:"",src:j,width:30}),k={it:Object(g.jsx)("img",{alt:"",width:20,height:20,src:O}),de:Object(g.jsx)("img",{alt:"",width:20,height:20,src:E}),fr:Object(g.jsx)("img",{alt:"",width:20,height:20,src:h}),es:Object(g.jsx)("img",{alt:"",width:20,height:20,src:N}),en:Object(g.jsx)("img",{alt:"",width:20,height:20,src:p})},C=n(40),_=n(39),P=n(24),S=Object(P.a)((function(e){return e.ui}),(function(e){return e})),A=Object(P.a)(S,(function(e){return e.isDrawerOpen})),R=Object(P.a)(S,(function(e){return e.isHomePage})),T=Object(P.a)(S,(function(e){return e.language})),z=function(e){var t=e.history,n=Object(o.c)(d.c),a=Object(o.b)(),r=Object(o.c)(R),s=Object(o.c)(A);i.a.useEffect((function(){if(s){var e=document.getElementById("modular-drawer");document.getElementById("app-container").onclick=function(t){e&&!e.contains(t.target)&&a(Object(_.b)())}}else document.getElementById("app-container").onclick=null}),[a,s]);var f=Object(m.c)(n),j=function(){var e=Object(o.b)(),t=Object(o.c)(T);return Object(g.jsx)("div",{style:{zIndex:999},className:"fixed right-2 top-0 bg-gray-700",children:Object(g.jsx)(b.e,{className:"text-sm",defaultValue:Object(g.jsxs)("div",{className:"flex flex-row text-lg",children:[k[t],Object(g.jsx)("div",{className:"ml-1",children:t})]}),content:Object.keys(k).map((function(t){return{name:t,action:function(){return e(Object(_.a)(t))},icon:k[t]}}))})})},v=Object(g.jsxs)("div",{className:" flex flex-row items-center mt-14 mb-5 ml-1",children:[Object(g.jsx)(j,{}),Object(g.jsx)(b.a,{"aria-label":"back button",onClick:function(){a(Object(C.c)(n.HOME))},noStyles:!0,className:u()("fixed top-2 overflow-auto py-0 ml-1 mr-3 outline-none",{hidden:r}),children:w}),Object(g.jsx)(b.a,{"aria-label":"drawer button",onClick:function(){a(Object(_.c)())},noStyles:!0,className:"inline-flex py-0 outline-none",children:Object(g.jsx)("div",{className:"p-1 sm:p-2 md:p-2 lg:p-2 xl:p-2",children:y})}),Object(g.jsxs)("div",{className:"m-auto flex flex-row text-white",children:[Object(g.jsx)("div",{className:"m-auto mr-1 md:mr-2 lg:mr-2 xl:mr-2 2xl:mr-2 3xl:mr-2",children:x}),Object(g.jsx)("div",{className:"flex flex-col m-auto mb-3",children:Object(g.jsxs)("div",{className:"m-auto hover:text-blue-400",children:[Object(g.jsx)("a",{href:"https://github.com/CianciarusoCataldo/modular-ui",children:Object(g.jsx)("p",{className:"text-4xl",children:"Modular-ui"})}),Object(g.jsx)("div",{className:"mt-2",children:Object(g.jsx)("a",{href:"https://www.npmjs.com/package/@cianciarusocataldo/modular-ui",style:{height:"25px"},children:Object(g.jsx)("img",{alt:"npm",src:"https://img.shields.io/npm/v/@cianciarusocataldo/modular-ui?label=latest version",height:"25"})})})]})})]})]});return Object(g.jsxs)("div",{id:"app-container",children:[Object(g.jsx)(b.g,{content:v}),Object(g.jsx)(b.d,{isOpen:s,elements:Object.keys(n).map((function(e){return{text:e,actionCallback:function(){a(Object(C.c)(n[e])),a(Object(_.b)())},isActiveCallback:function(){return window.location.pathname===n[e]||window.location.pathname.substring(0,window.location.pathname.length-1)===n[e]||"".concat(window.location.pathname,"/")===n[e]}}})),onClose:function(){a(Object(_.b)())}}),Object(g.jsx)("div",{style:{marginTop:"10rem",position:"absolute",left:"0"},children:Object(g.jsx)(l.c,{history:t,children:Object(g.jsxs)(l.d,{children:[f.map((function(e){return Object(g.jsx)(l.b,Object(c.a)({},e))})),Object(g.jsx)(l.a,{to:"/"})]})})})]})},U=function(e,t){Object(a.render)(Object(g.jsx)(r.Suspense,{fallback:Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"preloader-header"}),Object(g.jsx)("div",{className:"preloader"})]}),children:Object(g.jsx)(o.a,{store:e,children:Object(g.jsx)(z,{history:t})})}),document.getElementById("root"));var n=document.getElementById("preloader");n&&(n.style.visibility="hidden")}},40:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l}));var a=n(35),c=n(55),r=function(e){return Object(c.c)(e)},i=Object(a.b)("@@router/CHECK_ROUTE",(function(e){return{payload:{isHomePage:e}}})),l=Object(a.b)("@@router/LOCATION_CHANGE")},41:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return s}));var a=n(24),c=Object(a.a)((function(e){return e.config}),(function(e){return e})),r=Object(a.a)(c,(function(e){return e.ROUTER})),i=Object(a.a)(c,(function(e){return e.I18N})),l=Object(a.a)(c,(function(e){return e.APP_NAME})),o=(Object(a.a)(c,(function(e){return e.ROUTER.BASENAME})),Object(a.a)(i,(function(e){return e.SUPPORTED_LANGUAGES})),Object(a.a)(r,(function(e){return e.ROUTES_PATHS}))),s=Object(a.a)(r,(function(e){return e.ROUTES_MAP}))},8:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return m})),n.d(t,"g",(function(){return b})),n.d(t,"h",(function(){return o})),n.d(t,"i",(function(){return f})),n.d(t,"j",(function(){return j})),n.d(t,"k",(function(){return v}));n(11);var a=n(7),c=n(15),r=function(){return r=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e},r.apply(this,arguments)};var i=function(e){var t,n=e.disabled,i=void 0!==n&&n,l=e.children,o=e.onClick,s=e.className,u=e.noStyles,d=e.id,m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n}(e,["disabled","children","onClick","className","noStyles","id"]),b=c("styled ",{disabled:i,enabled:!i});return a.createElement("div",{id:"modular-button"},a.createElement("button",r({"data-id":d,disabled:i,onClick:o,className:c(s,(t={unstyled:u},t[b]=!u,t))},m),l))},l=function(e){var t=e.className;return a.createElement("div",{id:"modular-divider",className:t})},o=function(e){var t=e.label,n=e.className;return a.createElement("p",{id:"modular-link",className:n},t)},s=function(e){var t=e.title,n=e.className,r=e.icon,i=e.header,o=e.body,s=e.footer,u=e.titleClassName,d=void 0===u?"title-default":u,m=e.headerClassName,b=void 0===m?"header-default":m,f=e.bodyClassName,j=void 0===f?"body-default":f,v=e.footerClassName,O=void 0===v?"footer-default":v;return a.createElement("div",{id:"modular-card"},a.createElement("div",{className:c("container-full",n)},a.createElement("p",{className:c("title",d)},t),a.createElement("div",{className:"container-main"},a.createElement("div",{className:"container-header"},r,a.createElement("div",{className:c("header",b)},i)),a.createElement(l,null),a.createElement("div",{className:c("body",j)},o),a.createElement(l,null),a.createElement("div",{className:c("footer",O)},s))))},u=function(e){var t=e.elements,n=e.className,r=e.isOpen,o=e.onClose;return a.createElement("div",{id:"modular-drawer"},a.createElement("div",{className:c("container",{"ease-in":r,"ease-out":!r},n)},a.createElement("div",{className:"container-internal"},a.createElement("div",{className:"buttons-panel"},a.createElement("button",{onClick:o,className:"close-button"},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"37",viewBox:"0 0 11 18"},a.createElement("path",{fill:"#999",d:"M8.6812.1963l2.1208928 2.120293-8.484 8.4864L.1972 8.6827z"}),a.createElement("path",{fill:"#999",d:"M10.8032656 15.0470656l-2.1213 2.1213-8.4852-8.4852 2.1213-2.1213z"})))),a.createElement("div",{className:"elements"},a.createElement("div",null,t&&t.map((function(e,t){var n=e.isActiveCallback&&e.isActiveCallback();return a.createElement("div",{key:"drawer_element_".concat(t),"data-id":"drawer_element_".concat(t),className:"element"},a.createElement(i,{noStyles:!0,id:"drawer_button_".concat(t),onClick:e.actionCallback},a.createElement("div",{className:"button"},a.createElement("div",{className:"icon"},e.icon),a.createElement("div",{className:c("text",{active:n,inactive:!n})},e.text))),a.createElement(l,null))})))))))},d=function(e){var t=e.className,n=e.content,r=void 0===n?[]:n,i=e.defaultValue,l=void 0===i?"":i,o=a.useState(!1),s=o[0],u=o[1];return a.createElement("div",{id:"modular-dropdown",className:t},a.createElement("div",{className:"container"},a.createElement("button",{type:"button",onClick:function(){return u(!s)},className:"button",id:"options-menu","data-id":"options-menu","aria-haspopup":"true","aria-expanded":"true"},a.createElement("div",{className:"label"},l),a.createElement("div",{className:c("icon",{"icon-visible":s})},a.createElement("p",null,a.createElement("i",{className:"icon-img down"})))),a.createElement("div",{className:c({"options-hidden":!s,options:s})},r.map((function(e,t){return a.createElement("div",{key:"dropdown_option_".concat(t),className:"option"},a.createElement("button",{"data-id":"dropdown_option_".concat(t),onClick:function(){u(!1),e.action()},key:"item_".concat(t),className:c("regular",{last:t===r.length-1})},a.createElement("div",{className:"box"},e.icon,a.createElement("div",{className:"label"},e.name))))})))))},m=function(e){var t=e.title,n=e.fields,i=e.onSubmit,l=e.className,o=e.submitLabel,s=a.useState({}),u=s[0],d=s[1],m=a.useState({}),b=m[0],f=m[1],j=Object.keys(b).length>1&&!Object.values(b).find((function(e){return!0===e}))||!1;return a.createElement("div",{id:"modular-form",className:l},a.createElement("p",{className:"title"},t),n&&n.map((function(e,t){var n=e.name;return a.createElement("div",{className:"field",key:"form_field_".concat(t)},a.createElement("p",{className:"header"},e.header),a.createElement("input",{value:u[n]||"",type:"text","data-id":"form-field-".concat(t),placeholder:e.placeholder,onChange:function(t){var a=r({},u),c=r({},b);a[n]=t.target.value,t.target.value.length<1&&e.required?c[n]=!0:c[n]=!!e.validate&&!e.validate(t.target.value),f(c),d(a)},className:c("input",{error:b[n],"no-error":!b[n]})}),a.createElement("div",{className:"error-box"},b[n]&&a.createElement("p",{className:"error-label"},e.error)))})),a.createElement("button",{disabled:!j,"data-id":"form-submit-button",onClick:function(){var e=r({},u);i&&i(e)},className:c("submit",{allowed:j,"not-allowed":!j})},o))},b=function(e){var t=e.content,n=void 0===t?a.createElement("div",null):t,r=e.className;return a.createElement("header",{className:c("modular-header",r)},n)},f=function(e){var t=e.isVisible,n=void 0!==t&&t,r=e.Content,i=e.onClose,l=e.title,o=e.className,s=e.overlayClassName;return a.createElement("div",{id:"modular-modal","data-id":"modular-modal",className:c({hidden:!n,default:n},s)},a.createElement("div",{"data-id":"modular-modal-container",className:c("container",o)},a.createElement("div",{className:"header"},a.createElement("div",{className:"title"},l),a.createElement("button",{className:"close-button",onClick:i},"X")),a.createElement("div",{className:"content"},r)))},j=function(e){var t=e.children,n=e.orientation,r=void 0===n?"vertical":n,i=e.className;return a.createElement("div",{className:c(r,"modular-page",i)},t)},v=function(e){var t=e.headers,n=e.rows,r="",i="",l=[];if(n){l=n.map((function(e,n){return e.map((function(e,r){return a.createElement("div",{key:"element_".concat(r),className:c("element",{header:t&&0===n,element:!t||n>0})},e)}))}));for(var o=0;o<n.length;o++)r+=" auto";for(o=0;o<n[0].length;o++)i+=" auto"}return a.createElement("div",{id:"modular-table"},a.createElement("div",{className:"rows",style:{gridTemplateRows:r,gridTemplateColumns:i}},l))}},93:function(e,t,n){}}]);