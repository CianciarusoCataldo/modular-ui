(this["webpackJsonpmodular-ui-playground"]=this["webpackJsonpmodular-ui-playground"]||[]).push([[8],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.d(t,"g",(function(){return o})),n.d(t,"e",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"f",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"h",(function(){return s})),n.d(t,"i",(function(){return d})),n.d(t,"d",(function(){return f})),n.d(t,"j",(function(){return m})),n.d(t,"c",(function(){return p}));var r=n(117),a=n(0),o=function(){return Object(r.a)(a.I18N.NAMESPACES[0]).t},c=function(){return Object(r.a)(a.I18N.NAMESPACES[1]).t},i=function(){return Object(r.a)(a.I18N.NAMESPACES[2]).t},l=function(){return Object(r.a)(a.I18N.NAMESPACES[3]).t},u=function(){return Object(r.a)(a.I18N.NAMESPACES[4]).t},s=function(){return Object(r.a)(a.I18N.NAMESPACES[5]).t},d=function(){return Object(r.a)(a.I18N.NAMESPACES[6]).t},f=function(){return Object(r.a)(a.I18N.NAMESPACES[7]).t},m=function(){return Object(r.a)(a.I18N.NAMESPACES[8]).t},p=function(){return Object(r.a)(a.I18N.NAMESPACES[9]).t}},117:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(62),a=n.n(r),o=n(20),c=n.n(o),i=n(6),l=n(37);function u(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"===typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var s={};function d(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"===typeof t[0]&&s[t[0]]||("string"===typeof t[0]&&(s[t[0]]=new Date),u.apply(void 0,t))}function f(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function m(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return d("i18n.languages were undefined or empty",t.languages),!0;var r=t.languages[0],a=!!t.options&&t.options.fallbackLng,o=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var c=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!c(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||(!t.services.backendConnector.backend||!(!c(r,e)||a&&!c(o,e))))}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,r=Object(i.useContext)(l.a)||{},o=r.i18n,c=r.defaultNS,u=n||o||Object(l.d)();if(u&&!u.reportNamespaces&&(u.reportNamespaces=new l.b),!u){d("You will need to pass in an i18next instance by using initReactI18next");var s=function(e){return Array.isArray(e)?e[e.length-1]:e},p=[s,{},!1];return p.t=s,p.i18n={},p.ready=!1,p}u.options.react&&void 0!==u.options.react.wait&&d("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var b=v(v(v({},Object(l.c)()),u.options.react),t),y=b.useSuspense,N=b.keyPrefix,E=e||c||u.options&&u.options.defaultNS;E="string"===typeof E?[E]:E||["translation"],u.reportNamespaces.addUsedNamespaces&&u.reportNamespaces.addUsedNamespaces(E);var O=(u.isInitialized||u.initializedStoreOnce)&&E.every((function(e){return m(e,u,b)}));function g(){return u.getFixedT(null,"fallback"===b.nsMode?E:E[0],N)}var h=Object(i.useState)(g),j=a()(h,2),x=j[0],w=j[1],S=Object(i.useRef)(!0);Object(i.useEffect)((function(){var e=b.bindI18n,t=b.bindI18nStore;function n(){S.current&&w(g)}return S.current=!0,O||y||f(u,E,(function(){S.current&&w(g)})),e&&u&&u.on(e,n),t&&u&&u.store.on(t,n),function(){S.current=!1,e&&u&&e.split(" ").forEach((function(e){return u.off(e,n)})),t&&u&&t.split(" ").forEach((function(e){return u.store.off(e,n)}))}}),[u,E.join()]);var C=Object(i.useRef)(!0);Object(i.useEffect)((function(){S.current&&!C.current&&w(g),C.current=!1}),[u]);var k=[x,u,O];if(k.t=x,k.i18n=u,k.ready=O,O)return k;if(!O&&!y)return k;throw new Promise((function(e){f(u,E,(function(){e()}))}))}},20:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},26:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return u}));var r=n(21),a=Object(r.a)((function(e){return e.config}),(function(e){return e})),o=Object(r.a)(a,(function(e){return e.ROUTER})),c=Object(r.a)(a,(function(e){return e.I18N})),i=Object(r.a)(a,(function(e){return e.APP_NAME})),l=(Object(r.a)(a,(function(e){return e.ROUTER.BASENAME})),Object(r.a)(c,(function(e){return e.SUPPORTED_LANGUAGES})),Object(r.a)(o,(function(e){return e.ROUTES_PATHS}))),u=Object(r.a)(o,(function(e){return e.ROUTES_MAP}))},30:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},31:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e},e.exports.default=e.exports,e.exports.__esModule=!0},37:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return v})),n.d(t,"b",(function(){return b})),n.d(t,"d",(function(){return y})),n.d(t,"e",(function(){return N}));var r=n(30),a=n.n(r),o=n(31),c=n.n(o),i=n(20),l=n.n(i),u=n(6);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f,m={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0},p=n.n(u).a.createContext();function v(){return m}var b=function(){function e(){a()(this,e),this.usedNamespaces={}}return c()(e,[{key:"addUsedNamespaces",value:function(e){var t=this;e.forEach((function(e){t.usedNamespaces[e]||(t.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function y(){return f}var N={type:"3rdParty",init:function(e){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};m=d(d({},m),e)}(e.options.react),function(e){f=e}(e)}}},61:function(e,t,n){"use strict";n.r(t);var r=n(76),a=n(9),o=n(11),c=n(26),i=n(91),l=n(7);t.default=function(){var e=Object(o.g)(),t=Object(r.c)(c.c);return Object(l.jsxs)(a.j,{children:[Object(l.jsx)("p",{className:"text-4xl mt-12 mb-5 ml-3 text-white",children:e("title")}),Object(l.jsx)(a.b,{body:function(e){var t=e.split("#LINK");return Object(l.jsx)("div",{children:t.map((function(e,t){if(t%2!==0){var n=e.split("#");return Object(l.jsx)(a.h,{to:n[0],target:"_blank",children:n[1]},"parsed_link_".concat(t))}return e}))})}(e("description"))}),Object(l.jsx)(a.b,{header:e("componentsList_header"),body:Object(l.jsx)("div",{className:"flex flex-col",children:Object.keys(t).slice(1).map((function(e,n){return Object(l.jsx)(i.a,{className:"text-blue-400 hover:text-blue-700",to:t[e],children:e},"link_".concat(n))}))})})]})}},62:function(e,t,n){var r=n(63),a=n(64),o=n(65),c=n(67);e.exports=function(e,t){return r(e)||a(e,t)||o(e,t)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},63:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},64:function(e,t){e.exports=function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);c=!0);}catch(l){i=!0,a=l}finally{try{c||null==n.return||n.return()}finally{if(i)throw a}}return o}},e.exports.default=e.exports,e.exports.__esModule=!0},65:function(e,t,n){var r=n(66);e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},66:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},67:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},9:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return f})),n.d(t,"f",(function(){return m})),n.d(t,"g",(function(){return p})),n.d(t,"h",(function(){return u})),n.d(t,"i",(function(){return v})),n.d(t,"j",(function(){return b})),n.d(t,"k",(function(){return y}));n(10);var r=n(6),a=n(13),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)};function c(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}var i=function(e){var t,n=e.disabled,i=void 0!==n&&n,l=e.children,u=e.onClick,s=e.className,d=e.noStyles,f=e.id,m=c(e,["disabled","children","onClick","className","noStyles","id"]),p=a("styled ",{disabled:i,enabled:!i});return r.createElement("div",{id:"modular-button"},r.createElement("button",o({"data-id":f,disabled:i,onClick:u,className:a(s,(t={unstyled:d},t[p]=!d,t))},m),l))},l=function(e){var t=e.className;return r.createElement("div",{id:"modular-divider",className:t})},u=function(e){var t=e.className,n=e.children,a=e.to,i=c(e,["className","children","to"]);return r.createElement("a",o({id:"modular-link",className:t,href:a},i),n)},s=function(e){var t=e.title,n=e.className,o=e.icon,c=e.header,i=e.body,u=e.footer,s=e.titleClassName,d=void 0===s?"title-default":s,f=e.headerClassName,m=void 0===f?"header-default":f,p=e.bodyClassName,v=void 0===p?"body-default":p,b=e.footerClassName,y=void 0===b?"footer-default":b;return r.createElement("div",{id:"modular-card"},r.createElement("div",{className:a("container-full",n)},r.createElement("p",{className:a("title",d)},t),r.createElement("div",{className:"container-main"},c&&r.createElement("div",null,r.createElement("div",{className:"container-header"},o,r.createElement("div",{className:a("header",m)},c)),r.createElement(l,null)),r.createElement("div",{className:a("body",v)},i),u&&r.createElement("div",null,r.createElement(l,null),r.createElement("div",{className:a("footer",y)},u)))))},d=function(e){var t=e.elements,n=e.className,o=e.isOpen,c=e.onClose,u=e.logo;return r.createElement("div",{id:"modular-drawer"},r.createElement("div",{className:a("container",{"ease-in":o,"ease-out":!o},n)},r.createElement("div",{className:"container-internal"},r.createElement("div",{className:"buttons-panel"},u,r.createElement("button",{onClick:c,className:"close-button"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"37",viewBox:"0 0 11 18"},r.createElement("path",{fill:"#999",d:"M8.6812.1963l2.1208928 2.120293-8.484 8.4864L.1972 8.6827z"}),r.createElement("path",{fill:"#999",d:"M10.8032656 15.0470656l-2.1213 2.1213-8.4852-8.4852 2.1213-2.1213z"})))),r.createElement("div",{className:"elements"},r.createElement("div",null,t&&t.map((function(e,t){var n=e.isActiveCallback&&e.isActiveCallback();return r.createElement("div",{key:"drawer_element_".concat(t),"data-id":"drawer_element_".concat(t),className:"element"},r.createElement(i,{noStyles:!0,id:"drawer_button_".concat(t),onClick:e.actionCallback},r.createElement("div",{className:"button"},r.createElement("div",{className:"icon"},e.icon),r.createElement("div",{className:a("text",{active:n,inactive:!n})},e.text))),r.createElement(l,null))})))))))},f=function(e){var t=e.className,n=e.content,o=void 0===n?[]:n,c=e.defaultValue,i=void 0===c?"":c,l=r.useState(!1),u=l[0],s=l[1];return r.createElement("div",{id:"modular-dropdown",className:t},r.createElement("div",{className:"container"},r.createElement("button",{type:"button",onClick:function(){return s(!u)},className:"button",id:"options-menu","data-id":"options-menu","aria-haspopup":"true","aria-expanded":"true"},r.createElement("div",{className:"label"},i),r.createElement("div",{className:a("icon",{"icon-visible":u})},r.createElement("p",null,r.createElement("i",{className:"icon-img down"})))),r.createElement("div",{className:a({"options-hidden":!u,options:u})},o.map((function(e,t){return r.createElement("div",{key:"dropdown_option_".concat(t),className:"option"},r.createElement("button",{"data-id":"dropdown_option_".concat(t),onClick:function(){s(!1),e.action()},key:"item_".concat(t),className:a("regular",{last:t===o.length-1})},r.createElement("div",{className:"box"},e.icon,r.createElement("div",{className:"label"},e.name))))})))))},m=function(e){var t=e.title,n=e.fields,c=e.onSubmit,i=e.className,l=e.submitLabel,u=r.useState({}),s=u[0],d=u[1],f=r.useState({}),m=f[0],p=f[1],v=Object.keys(m).length>1&&!Object.values(m).find((function(e){return!0===e}))||!1;return r.createElement("div",{id:"modular-form",className:i},r.createElement("p",{className:"title"},t),n&&n.map((function(e,t){var n=e.name;return r.createElement("div",{className:"field",key:"form_field_".concat(t)},r.createElement("p",{className:"header"},e.header),r.createElement("input",{value:s[n]||"",type:"text","data-id":"form-field-".concat(t),placeholder:e.placeholder,onChange:function(t){var r=o({},s),a=o({},m);r[n]=t.target.value,t.target.value.length<1&&e.required?a[n]=!0:a[n]=!!e.validate&&!e.validate(t.target.value),p(a),d(r)},className:a("input",{error:m[n],"no-error":!m[n]})}),r.createElement("div",{className:"error-box"},m[n]&&r.createElement("p",{className:"error-label"},e.error)))})),r.createElement("button",{disabled:!v,"data-id":"form-submit-button",onClick:function(){var e=o({},s);c&&c(e)},className:a("submit",{allowed:v,"not-allowed":!v})},l))},p=function(e){var t=e.content,n=void 0===t?r.createElement("div",null):t,o=e.className;return r.createElement("header",{className:a("modular-header",o)},n)},v=function(e){var t=e.isVisible,n=void 0!==t&&t,o=e.Content,c=e.onClose,i=e.title,l=e.className,u=e.overlayClassName;return r.createElement("div",{id:"modular-modal","data-id":"modular-modal",className:a({hidden:!n,default:n},u)},r.createElement("div",{"data-id":"modular-modal-container",className:a("container",l)},r.createElement("div",{className:"header"},r.createElement("div",{className:"title"},i),r.createElement("button",{className:"close-button",onClick:c},"X")),r.createElement("div",{className:"content"},o)))},b=function(e){var t=e.children,n=e.orientation,o=void 0===n?"vertical":n,c=e.className;return r.createElement("div",{className:a(o,"modular-page",c)},t)},y=function(e){var t=e.headers,n=e.rows,o="",c="",i=[];if(n){i=n.map((function(e,n){return e.map((function(e,o){return r.createElement("div",{key:"element_".concat(o),className:a("element",{header:t&&0===n,element:!t||n>0})},e)}))}));for(var l=0;l<n.length;l++)o+=" auto";for(l=0;l<n[0].length;l++)c+=" auto"}return r.createElement("div",{id:"modular-table"},r.createElement("div",{className:"rows",style:{gridTemplateRows:o,gridTemplateColumns:c}},i))}},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var r=n(12),a=n(60),o=n(6),c=n.n(o),i=n(78),l=(n(41),n(27)),u=n(33),s=n(56);c.a.Component;c.a.Component;var d=function(e,t){return"function"===typeof e?e(t):e},f=function(e,t){return"string"===typeof e?Object(i.c)(e,null,null,t):e},m=function(e){return e},p=c.a.forwardRef;"undefined"===typeof p&&(p=m);var v=p((function(e,t){var n=e.innerRef,r=e.navigate,a=e.onClick,o=Object(u.a)(e,["innerRef","navigate","onClick"]),i=o.target,s=Object(l.a)({},o,{onClick:function(e){try{a&&a(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||i&&"_self"!==i||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return s.ref=m!==p&&t||n,c.a.createElement("a",s)}));var b=p((function(e,t){var n=e.component,a=void 0===n?v:n,o=e.replace,b=e.to,y=e.innerRef,N=Object(u.a)(e,["component","replace","to","innerRef"]);return c.a.createElement(r.e.Consumer,null,(function(e){e||Object(s.a)(!1);var n=e.history,r=f(d(b,e.location),e.location),u=r?n.createHref(r):"",v=Object(l.a)({},N,{href:u,navigate:function(){var t=d(b,e.location),r=Object(i.e)(e.location)===Object(i.e)(f(t));(o||r?n.replace:n.push)(t)}});return m!==p?v.ref=t||y:v.innerRef=y,c.a.createElement(a,v)}))})),y=function(e){return e},N=c.a.forwardRef;"undefined"===typeof N&&(N=y);var E=N((function(e,t){var n=e["aria-current"],a=void 0===n?"page":n,o=e.activeClassName,i=void 0===o?"active":o,m=e.activeStyle,p=e.className,v=e.exact,E=e.isActive,O=e.location,g=e.sensitive,h=e.strict,j=e.style,x=e.to,w=e.innerRef,S=Object(u.a)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return c.a.createElement(r.e.Consumer,null,(function(e){e||Object(s.a)(!1);var n=O||e.location,o=f(d(x,n),n),u=o.pathname,C=u&&u.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),k=C?Object(r.f)(n.pathname,{path:C,exact:v,sensitive:g,strict:h}):null,A=!!(E?E(k,n):k),P="function"===typeof p?p(A):p,_="function"===typeof j?j(A):j;A&&(P=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(P,i),_=Object(l.a)({},_,m));var I=Object(l.a)({"aria-current":A&&a||null,className:P,style:_,to:o},S);return y!==N?I.ref=t||w:I.innerRef=w,c.a.createElement(b,I)}))}))}}]);