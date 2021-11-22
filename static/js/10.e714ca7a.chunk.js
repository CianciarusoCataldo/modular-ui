(this["webpackJsonpmodular-ui-playground"]=this["webpackJsonpmodular-ui-playground"]||[]).push([[10],{11:function(e,t,n){},19:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(23);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,l=void 0;try{for(var c,o=e[Symbol.iterator]();!(a=(c=o.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(i){r=!0,l=i}finally{try{a||null==o.return||o.return()}finally{if(r)throw l}}return n}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},22:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}n.d(t,"a",(function(){return a}))},23:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(22);function r(e,t){if(e){if("string"===typeof e)return Object(a.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a.a)(e,t):void 0}}},32:function(e,t,n){"use strict";n.r(t),n.d(t,"DropdownWrapper",(function(){return s}));var a=n(19),r=n(13),l=n(9),c=n(8),o=n(7),i=n.n(o),u=n(6),s=function(){var e=i.a.useState(0),t=Object(a.a)(e,2),n=t[0],l=t[1],o=[{name:"Dropdown Element 1",action:function(){l(0)}},{name:"Dropdown Element 2",action:function(){l(1)}}];return Object(u.jsx)(r.d,{label:"Dropdown",children:Object(u.jsx)(c.e,{className:"mx-6 my-8",defaultValue:o[n].name,content:o})})};t.default=function(){var e=Object(l.e)(),t=Object(l.c)();return Object(u.jsxs)(c.j,{children:[Object(u.jsx)("p",{className:"text-4xl mt-12 mb-5 ml-3 text-white",children:"".concat(t("molecules")," - ").concat(e("title"))}),Object(u.jsx)("div",{className:"flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ",children:Object(u.jsx)(s,{})})]})}},8:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return m})),n.d(t,"g",(function(){return f})),n.d(t,"h",(function(){return i})),n.d(t,"i",(function(){return v})),n.d(t,"j",(function(){return b})),n.d(t,"k",(function(){return N}));n(11);var a=n(7),r=n(15),l=function(){return l=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},l.apply(this,arguments)};var c=function(e){var t,n=e.disabled,c=void 0!==n&&n,o=e.children,i=e.onClick,u=e.className,s=e.noStyles,d=e.id,m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["disabled","children","onClick","className","noStyles","id"]),f=r("styled ",{disabled:c,enabled:!c});return a.createElement("div",{id:"modular-button"},a.createElement("button",l({"data-id":d,disabled:c,onClick:i,className:r(u,(t={unstyled:s},t[f]=!s,t))},m),o))},o=function(e){var t=e.className;return a.createElement("div",{id:"modular-divider",className:t})},i=function(e){var t=e.label,n=e.className;return a.createElement("p",{id:"modular-link",className:n},t)},u=function(e){var t=e.title,n=e.className,l=e.icon,c=e.header,i=e.body,u=e.footer,s=e.titleClassName,d=void 0===s?"title-default":s,m=e.headerClassName,f=void 0===m?"header-default":m,v=e.bodyClassName,b=void 0===v?"body-default":v,N=e.footerClassName,E=void 0===N?"footer-default":N;return a.createElement("div",{id:"modular-card"},a.createElement("div",{className:r("container-full",n)},a.createElement("p",{className:r("title",d)},t),a.createElement("div",{className:"container-main"},a.createElement("div",{className:"container-header"},l,a.createElement("div",{className:r("header",f)},c)),a.createElement(o,null),a.createElement("div",{className:r("body",b)},i),a.createElement(o,null),a.createElement("div",{className:r("footer",E)},u))))},s=function(e){var t=e.elements,n=e.className,l=e.isOpen,i=e.onClose;return a.createElement("div",{id:"modular-drawer"},a.createElement("div",{className:r("container",{"ease-in":l,"ease-out":!l},n)},a.createElement("div",{className:"container-internal"},a.createElement("div",{className:"buttons-panel"},a.createElement("button",{onClick:i,className:"close-button"},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"37",viewBox:"0 0 11 18"},a.createElement("path",{fill:"#999",d:"M8.6812.1963l2.1208928 2.120293-8.484 8.4864L.1972 8.6827z"}),a.createElement("path",{fill:"#999",d:"M10.8032656 15.0470656l-2.1213 2.1213-8.4852-8.4852 2.1213-2.1213z"})))),a.createElement("div",{className:"elements"},a.createElement("div",null,t&&t.map((function(e,t){var n=e.isActiveCallback&&e.isActiveCallback();return a.createElement("div",{key:"drawer_element_".concat(t),"data-id":"drawer_element_".concat(t),className:"element"},a.createElement(c,{noStyles:!0,id:"drawer_button_".concat(t),onClick:e.actionCallback},a.createElement("div",{className:"button"},a.createElement("div",{className:"icon"},e.icon),a.createElement("div",{className:r("text",{active:n,inactive:!n})},e.text))),a.createElement(o,null))})))))))},d=function(e){var t=e.className,n=e.content,l=void 0===n?[]:n,c=e.defaultValue,o=void 0===c?"":c,i=a.useState(!1),u=i[0],s=i[1];return a.createElement("div",{id:"modular-dropdown",className:t},a.createElement("div",{className:"container"},a.createElement("button",{type:"button",onClick:function(){return s(!u)},className:"button",id:"options-menu","data-id":"options-menu","aria-haspopup":"true","aria-expanded":"true"},a.createElement("div",{className:"label"},o),a.createElement("div",{className:r("icon",{"icon-visible":u})},a.createElement("p",null,a.createElement("i",{className:"icon-img down"})))),a.createElement("div",{className:r({"options-hidden":!u,options:u})},l.map((function(e,t){return a.createElement("div",{key:"dropdown_option_".concat(t),className:"option"},a.createElement("button",{"data-id":"dropdown_option_".concat(t),onClick:function(){s(!1),e.action()},key:"item_".concat(t),className:r("regular",{last:t===l.length-1})},a.createElement("div",{className:"box"},e.icon,a.createElement("div",{className:"label"},e.name))))})))))},m=function(e){var t=e.title,n=e.fields,c=e.onSubmit,o=e.className,i=e.submitLabel,u=a.useState({}),s=u[0],d=u[1],m=a.useState({}),f=m[0],v=m[1],b=Object.keys(f).length>1&&!Object.values(f).find((function(e){return!0===e}))||!1;return a.createElement("div",{id:"modular-form",className:o},a.createElement("p",{className:"title"},t),n&&n.map((function(e,t){var n=e.name;return a.createElement("div",{className:"field",key:"form_field_".concat(t)},a.createElement("p",{className:"header"},e.header),a.createElement("input",{value:s[n]||"",type:"text","data-id":"form-field-".concat(t),placeholder:e.placeholder,onChange:function(t){var a=l({},s),r=l({},f);a[n]=t.target.value,t.target.value.length<1&&e.required?r[n]=!0:r[n]=!!e.validate&&!e.validate(t.target.value),v(r),d(a)},className:r("input",{error:f[n],"no-error":!f[n]})}),a.createElement("div",{className:"error-box"},f[n]&&a.createElement("p",{className:"error-label"},e.error)))})),a.createElement("button",{disabled:!b,"data-id":"form-submit-button",onClick:function(){var e=l({},s);c&&c(e)},className:r("submit",{allowed:b,"not-allowed":!b})},i))},f=function(e){var t=e.content,n=void 0===t?a.createElement("div",null):t,l=e.className;return a.createElement("header",{className:r("modular-header",l)},n)},v=function(e){var t=e.isVisible,n=void 0!==t&&t,l=e.Content,c=e.onClose,o=e.title,i=e.className,u=e.overlayClassName;return a.createElement("div",{id:"modular-modal","data-id":"modular-modal",className:r({hidden:!n,default:n},u)},a.createElement("div",{"data-id":"modular-modal-container",className:r("container",i)},a.createElement("div",{className:"header"},a.createElement("div",{className:"title"},o),a.createElement("button",{className:"close-button",onClick:c},"X")),a.createElement("div",{className:"content"},l)))},b=function(e){var t=e.children,n=e.orientation,l=void 0===n?"vertical":n,c=e.className;return a.createElement("div",{className:r(l,"modular-page",c)},t)},N=function(e){var t=e.headers,n=e.rows,l="",c="",o=[];if(n){o=n.map((function(e,n){return e.map((function(e,l){return a.createElement("div",{key:"element_".concat(l),className:r("element",{header:t&&0===n,element:!t||n>0})},e)}))}));for(var i=0;i<n.length;i++)l+=" auto";for(i=0;i<n[0].length;i++)c+=" auto"}return a.createElement("div",{id:"modular-table"},a.createElement("div",{className:"rows",style:{gridTemplateRows:l,gridTemplateColumns:c}},o))}},9:function(e,t,n){"use strict";n.d(t,"g",(function(){return l})),n.d(t,"e",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"f",(function(){return i})),n.d(t,"a",(function(){return u})),n.d(t,"h",(function(){return s})),n.d(t,"i",(function(){return d})),n.d(t,"d",(function(){return m})),n.d(t,"j",(function(){return f})),n.d(t,"c",(function(){return v}));var a=n(125),r=n(0),l=function(){return Object(a.a)(r.I18N.NAMESPACES[0]).t},c=function(){return Object(a.a)(r.I18N.NAMESPACES[1]).t},o=function(){return Object(a.a)(r.I18N.NAMESPACES[2]).t},i=function(){return Object(a.a)(r.I18N.NAMESPACES[3]).t},u=function(){return Object(a.a)(r.I18N.NAMESPACES[4]).t},s=function(){return Object(a.a)(r.I18N.NAMESPACES[5]).t},d=function(){return Object(a.a)(r.I18N.NAMESPACES[6]).t},m=function(){return Object(a.a)(r.I18N.NAMESPACES[7]).t},f=function(){return Object(a.a)(r.I18N.NAMESPACES[8]).t},v=function(){return Object(a.a)(r.I18N.NAMESPACES[9]).t}}}]);