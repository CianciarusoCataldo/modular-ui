!function(){"use strict";var e={9444:function(e){e.exports=JSON.parse('{"header":{"style":{"height":"19%","borderBottom":"2px solid #c0c0c0"}},"router":{"style":{"height":"74%"}},"footer":{"style":{"height":"7%","borderTop":"2px solid #c0c0c0"}},"drawer":{},"body":{"default":"linear-gradient(to right, #f0f3fa, #f4f6fa)","dark":"linear-gradient(to right, #3c4a5f, #273141)"},"ui":{"dark":{"background":"linear-gradient(317deg, rgba(2, 0, 36, 1) 0%, rgb(22, 17, 51) 71%, rgba(27, 17, 55, 1) 100%);"},"default":{"background":"linear-gradient(317deg, rgb(251, 251, 251) 0%, rgb(238, 238, 238) 71%, rgb(246, 246, 246) 100%);"}}}')}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}r.m=e,r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"===typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"===typeof n.then)return n}var i=Object.create(null);r.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var u=2&o&&n;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){a[e]=function(){return n[e]}}));return a.default=function(){return n},r.d(i,a),i}}(),r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))},r.u=function(e){return"static/js/"+e+"."+{60:"030de2b4",84:"afad21f8",122:"12ec1cb3",162:"2dd54c20",168:"71a31751",286:"6574c3a6",291:"fbbd69cb",320:"c6dd0be8",325:"d7cc98ff",334:"eb7ba81d",405:"193d4029",420:"13d83cd1",439:"e9eb8386",488:"f3b531a6",507:"ef48ceaa",554:"462e75be",636:"9cb0558a",637:"6b4f8d3e",721:"6cd2d3cf",722:"673192de",783:"580c6a67",787:"155c3966",791:"c1944704",795:"e512a791",822:"dc6bc2c5",827:"c60a896a",872:"00566f60",930:"665d4ae2",969:"b4ac608a",993:"c6db8683"}[e]+".chunk.js"},r.miniCssF=function(e){return"static/css/"+e+"."+{122:"d7e74088",162:"d7e74088",286:"964a55c4",291:"d7e74088",320:"d7e74088",334:"d7e74088",405:"d7e74088",420:"d7e74088",488:"d7e74088",507:"d7e74088",554:"d7e74088",636:"3bf0de71",721:"d7e74088",722:"d7e74088",783:"d7e74088",787:"d7e74088",795:"d7e74088",822:"d7e74088",827:"d7e74088",872:"d7e74088",930:"d7e74088"}[e]+".chunk.css"},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={},t="modular-app:";r.l=function(n,o,i,a){if(e[n])e[n].push(o);else{var u,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),d=0;d<f.length;d++){var l=f[d];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==t+i){u=l;break}}u||(c=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.setAttribute("data-webpack",t+i),u.src=n),e[n]=[o];var s=function(t,r){u.onerror=u.onload=null,clearTimeout(b);var o=e[n];if(delete e[n],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(r)})),t)return t(r)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=s.bind(null,u.onerror),u.onload=s.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="https://cianciarusocataldo.github.io/modular-ui/",function(){var e=function(e){return new Promise((function(t,n){var o=r.miniCssF(e),i=r.p+o;if(function(e,t){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(a=r[n]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){var a;if((o=(a=i[n]).getAttribute("data-href"))===e||o===t)return a}}(o,i))return t();!function(e,t,r,n){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(i){if(o.onerror=o.onload=null,"load"===i.type)r();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,o.parentNode.removeChild(o),n(c)}},o.href=t,document.head.appendChild(o)}(e,i,t,n)}))},t={179:0};r.f.miniCss=function(r,n){t[r]?n.push(t[r]):0!==t[r]&&{122:1,162:1,286:1,291:1,320:1,334:1,405:1,420:1,488:1,507:1,554:1,636:1,721:1,722:1,783:1,787:1,795:1,822:1,827:1,872:1,930:1}[r]&&n.push(t[r]=e(r).then((function(){t[r]=0}),(function(e){throw delete t[r],e})))}}(),function(){var e={179:0};r.f.j=function(t,n){var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var i=new Promise((function(r,n){o=e[t]=[r,n]}));n.push(o[2]=i);var a=r.p+r.u(t),u=new Error;r.l(a,(function(n){if(r.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}}),"chunk-"+t,t)}};var t=function(t,n){var o,i,a=n[0],u=n[1],c=n[2],f=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)r.o(u,o)&&(r.m[o]=u[o]);if(c)c(r)}for(t&&t(n);f<a.length;f++)i=a[f],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0},n=self.webpackChunkmodular_app=self.webpackChunkmodular_app||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),function(){var e=r(9444);"serviceWorker"in navigator?navigator.serviceWorker.register("./serviceWorker.js",{scope:"/modular-ui/"}).then((function(){console.log("Service worker registration succeeded")}),(function(){console.log("Service worker registration failed")})):console.log("Service workers are not supported."),Promise.all([r.e(168),r.e(636),r.e(286)]).then(r.bind(r,4439)).then((function(t){var n=t.initApplication;r.e(637).then(r.bind(r,6637)).then((function(t){var o=t.default;n({engine:o,theme:e,onComplete:function(e){r.e(168).then(r.t.bind(r,1168,19)).then((function(t){(0,t.render)(e,document.getElementById("root"),(function(){var e=document.getElementById("preloader");e&&(e.style.visibility="hidden")}))}))}})}))}))}()}();