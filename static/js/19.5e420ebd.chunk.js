(this["webpackJsonpmodular-ui-playground"]=this["webpackJsonpmodular-ui-playground"]||[]).push([[19],{10:function(e,t,a){},11:function(e,t,a){"use strict";a.d(t,"g",(function(){return l})),a.d(t,"e",(function(){return c})),a.d(t,"b",(function(){return i})),a.d(t,"f",(function(){return o})),a.d(t,"a",(function(){return s})),a.d(t,"h",(function(){return d})),a.d(t,"i",(function(){return u})),a.d(t,"d",(function(){return m})),a.d(t,"j",(function(){return f})),a.d(t,"c",(function(){return v}));var n=a(117),r=a(0),l=function(){return Object(n.a)(r.I18N.NAMESPACES[0]).t},c=function(){return Object(n.a)(r.I18N.NAMESPACES[1]).t},i=function(){return Object(n.a)(r.I18N.NAMESPACES[2]).t},o=function(){return Object(n.a)(r.I18N.NAMESPACES[3]).t},s=function(){return Object(n.a)(r.I18N.NAMESPACES[4]).t},d=function(){return Object(n.a)(r.I18N.NAMESPACES[5]).t},u=function(){return Object(n.a)(r.I18N.NAMESPACES[6]).t},m=function(){return Object(n.a)(r.I18N.NAMESPACES[7]).t},f=function(){return Object(n.a)(r.I18N.NAMESPACES[8]).t},v=function(){return Object(n.a)(r.I18N.NAMESPACES[9]).t}},75:function(e,t,a){"use strict";a.r(t),a.d(t,"TableWrapper",(function(){return i}));var n=a(18),r=a(9),l=a(11),c=a(7),i=function(){return Object(c.jsx)(n.b,{label:"Table",props:{Rows:Object(n.c)(1),Headers:Object(n.a)(!0)},children:function(e){var t=[];e.Headers&&t.push(["Table header 1","Table header 2","Table header 3"]);for(var a=0;a<e.Rows;a++)t.push(["Table cell","Table cell","Table cell"]);return Object(c.jsx)(r.k,{rows:t,headers:e.Headers})}})};t.default=function(){var e=Object(l.j)(),t=Object(l.c)();return Object(c.jsxs)(r.j,{children:[Object(c.jsx)("p",{className:"text-4xl mt-12 mb-5 ml-3 text-white",children:"".concat(t("molecules")," - ").concat(e("title"))}),Object(c.jsx)("div",{className:"flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ",children:Object(c.jsx)(i,{})})]})}},9:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return d})),a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return u})),a.d(t,"e",(function(){return m})),a.d(t,"f",(function(){return f})),a.d(t,"g",(function(){return v})),a.d(t,"h",(function(){return s})),a.d(t,"i",(function(){return b})),a.d(t,"j",(function(){return N})),a.d(t,"k",(function(){return E}));a(10);var n=a(6),r=a(13),l=function(){return l=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},l.apply(this,arguments)};function c(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a}var i=function(e){var t,a=e.disabled,i=void 0!==a&&a,o=e.children,s=e.onClick,d=e.className,u=e.noStyles,m=e.id,f=c(e,["disabled","children","onClick","className","noStyles","id"]),v=r("styled ",{disabled:i,enabled:!i});return n.createElement("div",{id:"modular-button"},n.createElement("button",l({"data-id":m,disabled:i,onClick:s,className:r(d,(t={unstyled:u},t[v]=!u,t))},f),o))},o=function(e){var t=e.className;return n.createElement("div",{id:"modular-divider",className:t})},s=function(e){var t=e.className,a=e.children,r=e.to,i=c(e,["className","children","to"]);return n.createElement("a",l({id:"modular-link",className:t,href:r},i),a)},d=function(e){var t=e.title,a=e.className,l=e.icon,c=e.header,i=e.body,s=e.footer,d=e.titleClassName,u=void 0===d?"title-default":d,m=e.headerClassName,f=void 0===m?"header-default":m,v=e.bodyClassName,b=void 0===v?"body-default":v,N=e.footerClassName,E=void 0===N?"footer-default":N;return n.createElement("div",{id:"modular-card"},n.createElement("div",{className:r("container-full",a)},n.createElement("p",{className:r("title",u)},t),n.createElement("div",{className:"container-main"},c&&n.createElement("div",null,n.createElement("div",{className:"container-header"},l,n.createElement("div",{className:r("header",f)},c)),n.createElement(o,null)),n.createElement("div",{className:r("body",b)},i),s&&n.createElement("div",null,n.createElement(o,null),n.createElement("div",{className:r("footer",E)},s)))))},u=function(e){var t=e.elements,a=e.className,l=e.isOpen,c=e.onClose,s=e.logo;return n.createElement("div",{id:"modular-drawer"},n.createElement("div",{className:r("container",{"ease-in":l,"ease-out":!l},a)},n.createElement("div",{className:"container-internal"},n.createElement("div",{className:"buttons-panel"},s,n.createElement("button",{onClick:c,className:"close-button"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"37",viewBox:"0 0 11 18"},n.createElement("path",{fill:"#999",d:"M8.6812.1963l2.1208928 2.120293-8.484 8.4864L.1972 8.6827z"}),n.createElement("path",{fill:"#999",d:"M10.8032656 15.0470656l-2.1213 2.1213-8.4852-8.4852 2.1213-2.1213z"})))),n.createElement("div",{className:"elements"},n.createElement("div",null,t&&t.map((function(e,t){var a=e.isActiveCallback&&e.isActiveCallback();return n.createElement("div",{key:"drawer_element_".concat(t),"data-id":"drawer_element_".concat(t),className:"element"},n.createElement(i,{noStyles:!0,id:"drawer_button_".concat(t),onClick:e.actionCallback},n.createElement("div",{className:"button"},n.createElement("div",{className:"icon"},e.icon),n.createElement("div",{className:r("text",{active:a,inactive:!a})},e.text))),n.createElement(o,null))})))))))},m=function(e){var t=e.className,a=e.content,l=void 0===a?[]:a,c=e.defaultValue,i=void 0===c?"":c,o=n.useState(!1),s=o[0],d=o[1];return n.createElement("div",{id:"modular-dropdown",className:t},n.createElement("div",{className:"container"},n.createElement("button",{type:"button",onClick:function(){return d(!s)},className:"button",id:"options-menu","data-id":"options-menu","aria-haspopup":"true","aria-expanded":"true"},n.createElement("div",{className:"label"},i),n.createElement("div",{className:r("icon",{"icon-visible":s})},n.createElement("p",null,n.createElement("i",{className:"icon-img down"})))),n.createElement("div",{className:r({"options-hidden":!s,options:s})},l.map((function(e,t){return n.createElement("div",{key:"dropdown_option_".concat(t),className:"option"},n.createElement("button",{"data-id":"dropdown_option_".concat(t),onClick:function(){d(!1),e.action()},key:"item_".concat(t),className:r("regular",{last:t===l.length-1})},n.createElement("div",{className:"box"},e.icon,n.createElement("div",{className:"label"},e.name))))})))))},f=function(e){var t=e.title,a=e.fields,c=e.onSubmit,i=e.className,o=e.submitLabel,s=n.useState({}),d=s[0],u=s[1],m=n.useState({}),f=m[0],v=m[1],b=Object.keys(f).length>1&&!Object.values(f).find((function(e){return!0===e}))||!1;return n.createElement("div",{id:"modular-form",className:i},n.createElement("p",{className:"title"},t),a&&a.map((function(e,t){var a=e.name;return n.createElement("div",{className:"field",key:"form_field_".concat(t)},n.createElement("p",{className:"header"},e.header),n.createElement("input",{value:d[a]||"",type:"text","data-id":"form-field-".concat(t),placeholder:e.placeholder,onChange:function(t){var n=l({},d),r=l({},f);n[a]=t.target.value,t.target.value.length<1&&e.required?r[a]=!0:r[a]=!!e.validate&&!e.validate(t.target.value),v(r),u(n)},className:r("input",{error:f[a],"no-error":!f[a]})}),n.createElement("div",{className:"error-box"},f[a]&&n.createElement("p",{className:"error-label"},e.error)))})),n.createElement("button",{disabled:!b,"data-id":"form-submit-button",onClick:function(){var e=l({},d);c&&c(e)},className:r("submit",{allowed:b,"not-allowed":!b})},o))},v=function(e){var t=e.content,a=void 0===t?n.createElement("div",null):t,l=e.className;return n.createElement("header",{className:r("modular-header",l)},a)},b=function(e){var t=e.isVisible,a=void 0!==t&&t,l=e.Content,c=e.onClose,i=e.title,o=e.className,s=e.overlayClassName;return n.createElement("div",{id:"modular-modal","data-id":"modular-modal",className:r({hidden:!a,default:a},s)},n.createElement("div",{"data-id":"modular-modal-container",className:r("container",o)},n.createElement("div",{className:"header"},n.createElement("div",{className:"title"},i),n.createElement("button",{className:"close-button",onClick:c},"X")),n.createElement("div",{className:"content"},l)))},N=function(e){var t=e.children,a=e.orientation,l=void 0===a?"vertical":a,c=e.className;return n.createElement("div",{className:r(l,"modular-page",c)},t)},E=function(e){var t=e.headers,a=e.rows,l="",c="",i=[];if(a){i=a.map((function(e,a){return e.map((function(e,l){return n.createElement("div",{key:"element_".concat(l),className:r("element",{header:t&&0===a,element:!t||a>0})},e)}))}));for(var o=0;o<a.length;o++)l+=" auto";for(o=0;o<a[0].length;o++)c+=" auto"}return n.createElement("div",{id:"modular-table"},n.createElement("div",{className:"rows",style:{gridTemplateRows:l,gridTemplateColumns:c}},i))}}}]);