(this["webpackJsonpmodular-ui-playground"]=this["webpackJsonpmodular-ui-playground"]||[]).push([[10],{120:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n(60),o=n.n(r),c=n(18),a=n.n(c),i=n(7),u=n(35);function s(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"===typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var f={};function l(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"===typeof t[0]&&f[t[0]]||("string"===typeof t[0]&&(f[t[0]]=new Date),s.apply(void 0,t))}function p(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function d(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return l("i18n.languages were undefined or empty",t.languages),!0;var r=t.languages[0],o=!!t.options&&t.options.fallbackLng,c=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||(!t.services.backendConnector.backend||!(!a(r,e)||o&&!a(c,e))))}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,r=Object(i.useContext)(u.a)||{},c=r.i18n,a=r.defaultNS,s=n||c||Object(u.d)();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new u.b),!s){l("You will need to pass in an i18next instance by using initReactI18next");var f=function(e){return Array.isArray(e)?e[e.length-1]:e},b=[f,{},!1];return b.t=f,b.i18n={},b.ready=!1,b}s.options.react&&void 0!==s.options.react.wait&&l("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var j=O(O(O({},Object(u.c)()),s.options.react),t),v=j.useSuspense,y=j.keyPrefix,x=e||a||s.options&&s.options.defaultNS;x="string"===typeof x?[x]:x||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(x);var g=(s.isInitialized||s.initializedStoreOnce)&&x.every((function(e){return d(e,s,j)}));function m(){return s.getFixedT(null,"fallback"===j.nsMode?x:x[0],y)}var h=Object(i.useState)(m),N=o()(h,2),S=N[0],E=N[1],A=Object(i.useRef)(!0);Object(i.useEffect)((function(){var e=j.bindI18n,t=j.bindI18nStore;function n(){A.current&&E(m)}return A.current=!0,g||v||p(s,x,(function(){A.current&&E(m)})),e&&s&&s.on(e,n),t&&s&&s.store.on(t,n),function(){A.current=!1,e&&s&&e.split(" ").forEach((function(e){return s.off(e,n)})),t&&s&&t.split(" ").forEach((function(e){return s.store.off(e,n)}))}}),[s,x.join()]);var w=Object(i.useRef)(!0);Object(i.useEffect)((function(){A.current&&!w.current&&E(m),w.current=!1}),[s]);var P=[S,s,g];if(P.t=S,P.i18n=s,P.ready=g,g)return P;if(!g&&!v)return P;throw new Promise((function(e){p(s,x,(function(){e()}))}))}},18:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},24:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(19),o=Object(r.a)((function(e){return e.config}),(function(e){return e})),c=Object(r.a)(o,(function(e){return e.ROUTER})),a=Object(r.a)(o,(function(e){return e.I18N})),i=Object(r.a)(o,(function(e){return e.APP_NAME})),u=(Object(r.a)(o,(function(e){return e.ROUTER.BASENAME})),Object(r.a)(a,(function(e){return e.SUPPORTED_LANGUAGES})),Object(r.a)(c,(function(e){return e.ROUTES_PATHS}))),s=Object(r.a)(c,(function(e){return e.ROUTES_MAP}))},28:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},29:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e},e.exports.default=e.exports,e.exports.__esModule=!0},35:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return O})),n.d(t,"b",(function(){return j})),n.d(t,"d",(function(){return v})),n.d(t,"e",(function(){return y}));var r=n(28),o=n.n(r),c=n(29),a=n.n(c),i=n(18),u=n.n(i),s=n(7);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p,d={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0},b=n.n(s).a.createContext();function O(){return d}var j=function(){function e(){o()(this,e),this.usedNamespaces={}}return a()(e,[{key:"addUsedNamespaces",value:function(e){var t=this;e.forEach((function(e){t.usedNamespaces[e]||(t.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function v(){return p}var y={type:"3rdParty",init:function(e){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};d=l(l({},d),e)}(e.options.react),function(e){p=e}(e)}}},60:function(e,t,n){var r=n(61),o=n(62),c=n(63),a=n(65);e.exports=function(e,t){return r(e)||o(e,t)||c(e,t)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},61:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},62:function(e,t){e.exports=function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);a=!0);}catch(u){i=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(i)throw o}}return c}},e.exports.default=e.exports,e.exports.__esModule=!0},63:function(e,t,n){var r=n(64);e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},64:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},65:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},8:function(e,t,n){"use strict";n.d(t,"i",(function(){return c})),n.d(t,"g",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"h",(function(){return u})),n.d(t,"a",(function(){return s})),n.d(t,"k",(function(){return f})),n.d(t,"l",(function(){return l})),n.d(t,"f",(function(){return p})),n.d(t,"m",(function(){return d})),n.d(t,"j",(function(){return b})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return j})),n.d(t,"e",(function(){return v}));var r=n(120),o=n(0),c=function(){return Object(r.a)(o.I18N.NAMESPACES[0]).t},a=function(){return Object(r.a)(o.I18N.NAMESPACES[1]).t},i=function(){return Object(r.a)(o.I18N.NAMESPACES[2]).t},u=function(){return Object(r.a)(o.I18N.NAMESPACES[3]).t},s=function(){return Object(r.a)(o.I18N.NAMESPACES[4]).t},f=function(){return Object(r.a)(o.I18N.NAMESPACES[5]).t},l=function(){return Object(r.a)(o.I18N.NAMESPACES[6]).t},p=function(){return Object(r.a)(o.I18N.NAMESPACES[7]).t},d=function(){return Object(r.a)(o.I18N.NAMESPACES[8]).t},b=function(){return Object(r.a)(o.I18N.NAMESPACES[9]).t},O=function(){return Object(r.a)(o.I18N.NAMESPACES[10]).t},j=function(){return Object(r.a)(o.I18N.NAMESPACES[11]).t},v=function(){return Object(r.a)(o.I18N.NAMESPACES[12]).t}},80:function(e,t,n){"use strict";n.r(t);var r=n(76),o=n(12),c=n(8),a=n(24),i=n(93),u=function(e,t){return'\n"flex '.concat(t," lg:").concat(e," xl:").concat(e," 2xl:").concat(e," 3xl:").concat(e," 4xl:").concat(e)},s={COLS_ROWS:"flex ".concat(u("flex-col","flex-row")),ROWS_COLS:"flex ".concat(u("flex-row","flex-col"))},f=n(6);t.default=function(){var e=Object(c.i)(),t=Object(r.c)(a.c),n=function(e){var t=e.split("#CODE");return Object(f.jsx)("div",{children:t.map((function(e,t){if(t%2!==0){var n=e.split("#LANG");return Object(f.jsx)("div",{className:"my-2",children:Object(f.jsx)(o.d,{environment:n.length>1&&n[1],code:n.length>1?n[2]:n[0],enhanced:!0,dark:!0})},"parsed_code_".concat(t))}return Object(f.jsx)("div",{className:"my-2",children:e},"parsed_code_".concat(t))}))})},u=function(e){var t=e.split("#LINK");return Object(f.jsx)("div",{className:"",children:t.map((function(e,t){if(t%2!==0){var n=e.split("#");return Object(f.jsx)(o.k,{to:n[0],newTab:!0,children:n[1]},"parsed_link_".concat(t))}return Object(f.jsx)("span",{children:e},"parsed_link_".concat(t))}))})}(e("description")),l=n(e("installation",{context:"body"}));return Object(f.jsxs)(o.m,{children:[Object(f.jsx)("p",{className:"text-4xl mt-12 mb-5 ml-3 text-white",children:e("title")},"homepage_header"),Object(f.jsxs)("div",{className:s.ROWS_COLS,children:[Object(f.jsxs)("div",{children:[Object(f.jsx)(o.b,{body:u}),Object(f.jsx)(o.b,{title:e("installation",{context:"title"}),titleClassName:"text-2xl text-white",body:l,bodyClassName:"p-2"})]}),Object(f.jsx)(o.b,{header:e("componentsList_header"),body:Object(f.jsx)("div",{className:"flex flex-col",children:Object.keys(t).slice(1).map((function(e,n){return Object(f.jsx)("li",{children:Object(f.jsx)(i.a,{className:"text-blue-400 hover:text-blue-700 py-1 text-lg",to:t[e],children:e})},"link_".concat(n))}))})})]},"homepage_container")]})}},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var r=n(10),o=n(59),c=n(7),a=n.n(c),i=n(78),u=(n(39),n(25)),s=n(31),f=n(55);a.a.Component;a.a.Component;var l=function(e,t){return"function"===typeof e?e(t):e},p=function(e,t){return"string"===typeof e?Object(i.c)(e,null,null,t):e},d=function(e){return e},b=a.a.forwardRef;"undefined"===typeof b&&(b=d);var O=b((function(e,t){var n=e.innerRef,r=e.navigate,o=e.onClick,c=Object(s.a)(e,["innerRef","navigate","onClick"]),i=c.target,f=Object(u.a)({},c,{onClick:function(e){try{o&&o(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||i&&"_self"!==i||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return f.ref=d!==b&&t||n,a.a.createElement("a",f)}));var j=b((function(e,t){var n=e.component,o=void 0===n?O:n,c=e.replace,j=e.to,v=e.innerRef,y=Object(s.a)(e,["component","replace","to","innerRef"]);return a.a.createElement(r.e.Consumer,null,(function(e){e||Object(f.a)(!1);var n=e.history,r=p(l(j,e.location),e.location),s=r?n.createHref(r):"",O=Object(u.a)({},y,{href:s,navigate:function(){var t=l(j,e.location),r=Object(i.e)(e.location)===Object(i.e)(p(t));(c||r?n.replace:n.push)(t)}});return d!==b?O.ref=t||v:O.innerRef=v,a.a.createElement(o,O)}))})),v=function(e){return e},y=a.a.forwardRef;"undefined"===typeof y&&(y=v);var x=y((function(e,t){var n=e["aria-current"],o=void 0===n?"page":n,c=e.activeClassName,i=void 0===c?"active":c,d=e.activeStyle,b=e.className,O=e.exact,x=e.isActive,g=e.location,m=e.sensitive,h=e.strict,N=e.style,S=e.to,E=e.innerRef,A=Object(s.a)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return a.a.createElement(r.e.Consumer,null,(function(e){e||Object(f.a)(!1);var n=g||e.location,c=p(l(S,n),n),s=c.pathname,w=s&&s.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),P=w?Object(r.f)(n.pathname,{path:w,exact:O,sensitive:m,strict:h}):null,C=!!(x?x(P,n):P),_="function"===typeof b?b(C):b,I="function"===typeof N?N(C):N;C&&(_=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(_,i),I=Object(u.a)({},I,d));var M=Object(u.a)({"aria-current":C&&o||null,className:_,style:I,to:c},A);return v!==y?M.ref=t||E:M.innerRef=E,a.a.createElement(j,M)}))}))}}]);