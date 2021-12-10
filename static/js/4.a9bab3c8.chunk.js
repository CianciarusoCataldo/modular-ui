/*! For license information please see 4.a9bab3c8.chunk.js.LICENSE.txt */
(this["webpackJsonpmodular-ui-playground"]=this["webpackJsonpmodular-ui-playground"]||[]).push([[4],{11:function(t,n,e){"use strict";e.d(n,"a",(function(){return j})),e.d(n,"b",(function(){return O})),e.d(n,"c",(function(){return m})),e.d(n,"d",(function(){return k})),e.d(n,"e",(function(){return v})),e.d(n,"f",(function(){return C}));var r=e(59),o=e(7),i=e.n(o),a=(e(35),e(79)),u=e(113),c=e(56),p=e(25),s=e(114),l=e.n(s),f=(e(85),e(27)),h=(e(84),function(t){var n=Object(u.a)();return n.displayName=t,n}),d=h("Router-History"),v=h("Router"),m=function(t){function n(n){var e;return(e=t.call(this,n)||this).state={location:n.history.location},e._isMounted=!1,e._pendingLocation=null,n.staticContext||(e.unlisten=n.history.listen((function(t){e._isMounted?e.setState({location:t}):e._pendingLocation=t}))),e}Object(r.a)(n,t),n.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var e=n.prototype;return e.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},e.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},e.render=function(){return i.a.createElement(v.Provider,{value:{history:this.props.history,location:this.state.location,match:n.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},i.a.createElement(d.Provider,{children:this.props.children||null,value:this.props.history}))},n}(i.a.Component);i.a.Component;var y=function(t){function n(){return t.apply(this,arguments)||this}Object(r.a)(n,t);var e=n.prototype;return e.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},e.componentDidUpdate=function(t){this.props.onUpdate&&this.props.onUpdate.call(this,this,t)},e.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},e.render=function(){return null},n}(i.a.Component);var g={},x=0;function b(t,n){return void 0===t&&(t="/"),void 0===n&&(n={}),"/"===t?t:function(t){if(g[t])return g[t];var n=l.a.compile(t);return x<1e4&&(g[t]=n,x++),n}(t)(n,{pretty:!0})}function j(t){var n=t.computedMatch,e=t.to,r=t.push,o=void 0!==r&&r;return i.a.createElement(v.Consumer,null,(function(t){t||Object(c.a)(!1);var r=t.history,u=t.staticContext,s=o?r.push:r.replace,l=Object(a.c)(n?"string"===typeof e?b(e,n.params):Object(p.a)({},e,{pathname:b(e.pathname,n.params)}):e);return u?(s(l),null):i.a.createElement(y,{onMount:function(){s(l)},onUpdate:function(t,n){var e=Object(a.c)(n.to);Object(a.f)(e,Object(p.a)({},l,{key:e.key}))||s(l)},to:e})}))}var E={},w=0;function C(t,n){void 0===n&&(n={}),("string"===typeof n||Array.isArray(n))&&(n={path:n});var e=n,r=e.path,o=e.exact,i=void 0!==o&&o,a=e.strict,u=void 0!==a&&a,c=e.sensitive,p=void 0!==c&&c;return[].concat(r).reduce((function(n,e){if(!e&&""!==e)return null;if(n)return n;var r=function(t,n){var e=""+n.end+n.strict+n.sensitive,r=E[e]||(E[e]={});if(r[t])return r[t];var o=[],i={regexp:l()(t,o,n),keys:o};return w<1e4&&(r[t]=i,w++),i}(e,{end:i,strict:u,sensitive:p}),o=r.regexp,a=r.keys,c=o.exec(t);if(!c)return null;var s=c[0],f=c.slice(1),h=t===s;return i&&!h?null:{path:e,url:"/"===e&&""===s?"/":s,isExact:h,params:a.reduce((function(t,n,e){return t[n.name]=f[e],t}),{})}}),null)}var O=function(t){function n(){return t.apply(this,arguments)||this}return Object(r.a)(n,t),n.prototype.render=function(){var t=this;return i.a.createElement(v.Consumer,null,(function(n){n||Object(c.a)(!1);var e=t.props.location||n.location,r=t.props.computedMatch?t.props.computedMatch:t.props.path?C(e.pathname,t.props):n.match,o=Object(p.a)({},n,{location:e,match:r}),a=t.props,u=a.children,s=a.component,l=a.render;return Array.isArray(u)&&function(t){return 0===i.a.Children.count(t)}(u)&&(u=null),i.a.createElement(v.Provider,{value:o},o.match?u?"function"===typeof u?u(o):u:s?i.a.createElement(s,o):l?l(o):null:"function"===typeof u?u(o):null)}))},n}(i.a.Component);function _(t){return"/"===t.charAt(0)?t:"/"+t}function U(t,n){if(!t)return n;var e=_(t);return 0!==n.pathname.indexOf(e)?n:Object(p.a)({},n,{pathname:n.pathname.substr(e.length)})}function M(t){return"string"===typeof t?t:Object(a.e)(t)}function R(t){return function(){Object(c.a)(!1)}}function A(){}i.a.Component;var k=function(t){function n(){return t.apply(this,arguments)||this}return Object(r.a)(n,t),n.prototype.render=function(){var t=this;return i.a.createElement(v.Consumer,null,(function(n){n||Object(c.a)(!1);var e,r,o=t.props.location||n.location;return i.a.Children.forEach(t.props.children,(function(t){if(null==r&&i.a.isValidElement(t)){e=t;var a=t.props.path||t.props.from;r=a?C(o.pathname,Object(p.a)({},t.props,{path:a})):n.match}})),r?i.a.cloneElement(e,{location:o,computedMatch:r}):null}))},n}(i.a.Component);i.a.useContext},113:function(t,n,e){"use strict";(function(t){var r=e(7),o=e.n(r),i=e(59),a=e(35),u=e.n(a),c=1073741823,p="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:{};function s(t){var n=[];return{on:function(t){n.push(t)},off:function(t){n=n.filter((function(n){return n!==t}))},get:function(){return t},set:function(e,r){t=e,n.forEach((function(n){return n(t,r)}))}}}var l=o.a.createContext||function(t,n){var e,o,a="__create-react-context-"+function(){var t="__global_unique_id__";return p[t]=(p[t]||0)+1}()+"__",l=function(t){function e(){var n;return(n=t.apply(this,arguments)||this).emitter=s(n.props.value),n}Object(i.a)(e,t);var r=e.prototype;return r.getChildContext=function(){var t;return(t={})[a]=this.emitter,t},r.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var e,r=this.props.value,o=t.value;((i=r)===(a=o)?0!==i||1/i===1/a:i!==i&&a!==a)?e=0:(e="function"===typeof n?n(r,o):c,0!==(e|=0)&&this.emitter.set(t.value,e))}var i,a},r.render=function(){return this.props.children},e}(r.Component);l.childContextTypes=((e={})[a]=u.a.object.isRequired,e);var f=function(n){function e(){var t;return(t=n.apply(this,arguments)||this).state={value:t.getValue()},t.onUpdate=function(n,e){0!==((0|t.observedBits)&e)&&t.setState({value:t.getValue()})},t}Object(i.a)(e,n);var r=e.prototype;return r.componentWillReceiveProps=function(t){var n=t.observedBits;this.observedBits=void 0===n||null===n?c:n},r.componentDidMount=function(){this.context[a]&&this.context[a].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=void 0===t||null===t?c:t},r.componentWillUnmount=function(){this.context[a]&&this.context[a].off(this.onUpdate)},r.getValue=function(){return this.context[a]?this.context[a].get():t},r.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},e}(r.Component);return f.contextTypes=((o={})[a]=u.a.object,o),{Provider:l,Consumer:f}};n.a=l}).call(this,e(48))},114:function(t,n,e){var r=e(115);t.exports=h,t.exports.parse=i,t.exports.compile=function(t,n){return u(i(t,n),n)},t.exports.tokensToFunction=u,t.exports.tokensToRegExp=f;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(t,n){for(var e,r=[],i=0,a=0,u="",s=n&&n.delimiter||"/";null!=(e=o.exec(t));){var l=e[0],f=e[1],h=e.index;if(u+=t.slice(a,h),a=h+l.length,f)u+=f[1];else{var d=t[a],v=e[2],m=e[3],y=e[4],g=e[5],x=e[6],b=e[7];u&&(r.push(u),u="");var j=null!=v&&null!=d&&d!==v,E="+"===x||"*"===x,w="?"===x||"*"===x,C=e[2]||s,O=y||g;r.push({name:m||i++,prefix:v||"",delimiter:C,optional:w,repeat:E,partial:j,asterisk:!!b,pattern:O?p(O):b?".*":"[^"+c(C)+"]+?"})}}return a<t.length&&(u+=t.substr(a)),u&&r.push(u),r}function a(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function u(t,n){for(var e=new Array(t.length),o=0;o<t.length;o++)"object"===typeof t[o]&&(e[o]=new RegExp("^(?:"+t[o].pattern+")$",l(n)));return function(n,o){for(var i="",u=n||{},c=(o||{}).pretty?a:encodeURIComponent,p=0;p<t.length;p++){var s=t[p];if("string"!==typeof s){var l,f=u[s.name];if(null==f){if(s.optional){s.partial&&(i+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be defined')}if(r(f)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var h=0;h<f.length;h++){if(l=c(f[h]),!e[p].test(l))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===h?s.prefix:s.delimiter)+l}}else{if(l=s.asterisk?encodeURI(f).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):c(f),!e[p].test(l))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+l+'"');i+=s.prefix+l}}else i+=s}return i}}function c(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function p(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function s(t,n){return t.keys=n,t}function l(t){return t&&t.sensitive?"":"i"}function f(t,n,e){r(n)||(e=n||e,n=[]);for(var o=(e=e||{}).strict,i=!1!==e.end,a="",u=0;u<t.length;u++){var p=t[u];if("string"===typeof p)a+=c(p);else{var f=c(p.prefix),h="(?:"+p.pattern+")";n.push(p),p.repeat&&(h+="(?:"+f+h+")*"),a+=h=p.optional?p.partial?f+"("+h+")?":"(?:"+f+"("+h+"))?":f+"("+h+")"}}var d=c(e.delimiter||"/"),v=a.slice(-d.length)===d;return o||(a=(v?a.slice(0,-d.length):a)+"(?:"+d+"(?=$))?"),a+=i?"$":o&&v?"":"(?="+d+"|$)",s(new RegExp("^"+a,l(e)),n)}function h(t,n,e){return r(n)||(e=n||e,n=[]),e=e||{},t instanceof RegExp?function(t,n){var e=t.source.match(/\((?!\?)/g);if(e)for(var r=0;r<e.length;r++)n.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return s(t,n)}(t,n):r(t)?function(t,n,e){for(var r=[],o=0;o<t.length;o++)r.push(h(t[o],n,e).source);return s(new RegExp("(?:"+r.join("|")+")",l(e)),n)}(t,n,e):function(t,n,e){return f(i(t,e),n,e)}(t,n,e)}},115:function(t,n){t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},33:function(t,n,e){var r;!function(){"use strict";var e={}.hasOwnProperty;function o(){for(var t=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&t.push(a)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var u in r)e.call(r,u)&&r[u]&&t.push(u);else t.push(r.toString())}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(n,[]))||(t.exports=r)}()},48:function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(r){"object"===typeof window&&(e=window)}t.exports=e},59:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(82);function o(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,Object(r.a)(t,n)}}}]);