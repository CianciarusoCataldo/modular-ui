(this["webpackJsonpmodular-ui-playground"]=this["webpackJsonpmodular-ui-playground"]||[]).push([[12],{19:function(n,t,e){"use strict";e.d(t,"b",(function(){return r}));var c=e(77),r=function(n){return c.a.changeLanguage(n)};t.a=c.a},20:function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return i})),e.d(t,"d",(function(){return o}));var c=e(18),r=Object(c.a)((function(n){return n.ui}),(function(n){return n})),a=Object(c.a)(r,(function(n){return n.isDrawerOpen})),u=Object(c.a)(r,(function(n){return n.isHomePage})),i=Object(c.a)(r,(function(n){return n.language})),o=Object(c.a)(r,(function(n){return n.darkMode}))},21:function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"b",(function(){return b}));var c=e(18),r=Object(c.a)((function(n){return n.config}),(function(n){return n})),a=Object(c.a)(r,(function(n){return n.ROUTER})),u=Object(c.a)(r,(function(n){return n.I18N})),i=Object(c.a)(r,(function(n){return n.APP_NAME})),o=(Object(c.a)(r,(function(n){return n.ROUTER.BASENAME})),Object(c.a)(u,(function(n){return n.SUPPORTED_LANGUAGES})),Object(c.a)(a,(function(n){return n.ROUTES_PATHS}))),b=Object(c.a)(a,(function(n){return n.ROUTES_MAP}))},23:function(n,t,e){"use strict";e.d(t,"c",(function(){return o})),e.d(t,"b",(function(){return b})),e.d(t,"a",(function(){return l}));var c=e(9),r=e(19),a=e(20),u=e(17),i=e(6),o=function(n,t){var e=n[window.location.pathname]||n[window.location.pathname.substring(0,window.location.pathname.length-1)]||n["".concat(window.location.pathname,"/")],c=e&&r.a.isInitialized&&"HOME"!==e?"Modular-ui - ".concat(e):t;window.document.title=c},b=function(n){return"".concat(window.location.pathname,"/")===n||window.location.pathname.substring(0,window.location.pathname.length-1)===n||window.location.pathname===n},l=function(n){return function(t){var e=Object(u.c)(a.d);return Object(i.jsx)(n,Object(c.a)(Object(c.a)({},t),{},{dark:e}))}}},26:function(n,t,e){"use strict";e.d(t,"c",(function(){return r})),e.d(t,"b",(function(){return a})),e.d(t,"a",(function(){return u})),e.d(t,"d",(function(){return i}));var c=e(34),r=Object(c.b)("@@ui/OPEN_DRAWER"),a=Object(c.b)("@@ui/CLOSE_DRAWER"),u=Object(c.b)("@@ui/CHANGE_LANGUAGE",(function(n){return{payload:{language:n}}})),i=Object(c.b)("@@ui/SWITCH_DARK_MODE",(function(n){return{payload:{language:n}}}))},28:function(n,t,e){"use strict";e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return o}));var c=e(9),r=e(7),a={HOME:Object(r.lazy)((function(){return Promise.all([e.e(3),e.e(4),e.e(0),e.e(10)]).then(e.bind(null,81))})),Form:Object(r.lazy)((function(){return Promise.all([e.e(1),e.e(0),e.e(20)]).then(e.bind(null,66))})),Card:Object(r.lazy)((function(){return Promise.all([e.e(1),e.e(0),e.e(15)]).then(e.bind(null,67))})),Dropdown:Object(r.lazy)((function(){return Promise.all([e.e(1),e.e(0),e.e(19)]).then(e.bind(null,68))})),Button:Object(r.lazy)((function(){return Promise.all([e.e(1),e.e(0),e.e(14)]).then(e.bind(null,69))})),Divider:Object(r.lazy)((function(){return Promise.all([e.e(1),e.e(0),e.e(18)]).then(e.bind(null,70))})),Link:Object(r.lazy)((function(){return Promise.all([e.e(1),e.e(0),e.e(22)]).then(e.bind(null,80))})),Modal:Object(r.lazy)((function(){return Promise.all([e.e(1),e.e(0),e.e(13)]).then(e.bind(null,71))})),Input:Object(r.lazy)((function(){return Promise.all([e.e(1),e.e(0),e.e(21)]).then(e.bind(null,72))})),Table:Object(r.lazy)((function(){return Promise.all([e.e(1),e.e(0),e.e(23)]).then(e.bind(null,73))})),Checkbox:Object(r.lazy)((function(){return Promise.all([e.e(1),e.e(0),e.e(16)]).then(e.bind(null,74))})),CodeBox:Object(r.lazy)((function(){return Promise.all([e.e(1),e.e(0),e.e(17)]).then(e.bind(null,75))})),Toggle:Object(r.lazy)((function(){return Promise.all([e.e(1),e.e(0),e.e(24)]).then(e.bind(null,76))}))},u=function(n){return Object.keys(n).map((function(t){return{component:a[t],key:n[t],exact:!0,path:n[t]}}))},i=function(n){var t=Object(c.a)({},n.ROUTER.ROUTES_PATHS);return Object.keys(t).forEach((function(e){t[e]="".concat(n.ROUTER.BASENAME).concat(t[e])})),t},o=function(n){return Object.fromEntries(Object.keys(n).map((function(t,e){return[n[t],t]})))}},31:function(n,t,e){"use strict";e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return u})),e.d(t,"b",(function(){return i}));var c=e(34),r=e(51),a=function(n){return Object(r.c)(n)},u=Object(c.b)("@@router/CHECK_ROUTE",(function(n){return{payload:{isHomePage:n}}})),i=Object(c.b)("@@router/LOCATION_CHANGE")},4:function(n,t,e){"use strict";e.r(t),e.d(t,"initStore",(function(){return M}));var c=e(119),r=e(9),a={router:{location:{pathname:"",hash:"",search:"",state:""},action:""},ui:{isDrawerOpen:!1,language:navigator.language.split("-")[0],isHomePage:!0,darkMode:!0}},u=e(26),i=e(31),o={ui:[{action:u.d.type,callback:function(n){return Object(r.a)(Object(r.a)({},n),{},{darkMode:!n.darkMode})}},{action:u.c.type,callback:function(n){return Object(r.a)(Object(r.a)({},n),{},{isDrawerOpen:!0})}},{action:u.b.type,callback:function(n){return Object(r.a)(Object(r.a)({},n),{},{isDrawerOpen:!1})}},{action:u.a.type,callback:function(n,t){return Object(r.a)(Object(r.a)({},n),{},{language:t.payload.language})}},{action:i.a.type,callback:function(n,t){return Object(r.a)(Object(r.a)({},n),{},{isHomePage:t.payload.isHomePage})}}],config:[]},b=e(40),l=e(124),O=e(127),f=e(110),d=e(19),j=e(23),s=e(21),p=e(129),h=e(125),m=[function(n,t){return n.pipe(Object(l.a)(i.b.match),Object(O.a)(t),Object(f.a)((function(n){var t=Object(b.a)(n,2),e=(t[0],t[1]);return d.a.isInitialized&&Object(j.c)(Object(s.b)(e),Object(s.a)(e)),Object(i.a)(Object(j.b)(Object(s.c)(e).HOME))})))},function(n,t){return n.pipe(Object(l.a)(u.a.match),Object(O.a)(t),Object(p.a)((function(n){var t=Object(b.a)(n,2),e=t[0],c=t[1];Object(d.b)(e.payload.language).then((function(){Object(j.c)(Object(s.b)(c),Object(s.a)(c))}))})),Object(h.a)())}],g=e(41),y=e(34),E=e(126),P=e(128),w=e(51),R=e(79),v=e(28),A=Object(w.a)({history:Object(R.a)()}),T=A.createReduxHistory,k=A.routerMiddleware,H=A.routerReducer,M=function(n){var t=Object(r.a)({},a),e=Object(v.a)(n);t.config=Object(r.a)(Object(r.a)({},n),{},{ROUTER:Object(r.a)(Object(r.a)({},n.ROUTER),{},{ROUTES_PATHS:e,ROUTES_MAP:Object(v.b)(e)})});var u=Object(g.b)(Object(r.a)({router:H},Object.fromEntries(Object.keys(o).map((function(n,e){return[n,Object(y.c)(t[n],(function(t){var e;null===(e=o[n])||void 0===e||e.forEach((function(n){t.addCase(n.action,(function(t,e){return n.callback(t,e)}))}))}))]}))))),i=Object(E.a)(),b=Object(y.a)({reducer:u,preloadedState:a,middleware:[i,k],devTools:!1});return i.run(P.a.apply(void 0,Object(c.a)(m))),{store:b,history:T(b)}}}}]);