/*! For license information please see 8.92459d56.chunk.js.LICENSE.txt */
(this["webpackJsonpmodular-ui-playground"]=this["webpackJsonpmodular-ui-playground"]||[]).push([[8],[,,,,,,,,function(t,r,n){"use strict";n.d(r,"a",(function(){return i}));var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])},e(t,r)};function i(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}},,,,function(t,r,n){"use strict";n.d(r,"a",(function(){return f}));var e=n(15);var i=n(53),o=n(81);var u=n(30),s=n(84);function c(t){return 0===t.length?s.a:1===t.length?t[0]:function(r){return t.reduce((function(t,r){return r(t)}),r)}}var a=n(51),f=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(r){var n=new t;return n.source=this,n.operator=r,n},t.prototype.subscribe=function(t,r,n){var u=this.operator,s=function(t,r,n){if(t){if(t instanceof e.a)return t;if(t[i.a])return t[i.a]()}return t||r||n?new e.a(t,r,n):new e.a(o.a)}(t,r,n);if(u?s.add(u.call(s,this.source)):s.add(this.source||a.a.useDeprecatedSynchronousErrorHandling&&!s.syncErrorThrowable?this._subscribe(s):this._trySubscribe(s)),a.a.useDeprecatedSynchronousErrorHandling&&s.syncErrorThrowable&&(s.syncErrorThrowable=!1,s.syncErrorThrown))throw s.syncErrorValue;return s},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(r){a.a.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=r),!function(t){for(;t;){var r=t,n=r.closed,i=r.destination,o=r.isStopped;if(n||o)return!1;t=i&&i instanceof e.a?i:null}return!0}(t)?console.warn(r):t.error(r)}},t.prototype.forEach=function(t,r){var n=this;return new(r=h(r))((function(r,e){var i;i=n.subscribe((function(r){try{t(r)}catch(n){e(n),i&&i.unsubscribe()}}),e,r)}))},t.prototype._subscribe=function(t){var r=this.source;return r&&r.subscribe(t)},t.prototype[u.a]=function(){return this},t.prototype.pipe=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return 0===t.length?this:c(t)(this)},t.prototype.toPromise=function(t){var r=this;return new(t=h(t))((function(t,n){var e;r.subscribe((function(t){return e=t}),(function(t){return n(t)}),(function(){return t(e)}))}))},t.create=function(r){return new t(r)},t}();function h(t){if(t||(t=a.a.Promise||Promise),!t)throw new Error("no Promise impl found");return t}},,,function(t,r,n){"use strict";n.d(r,"a",(function(){return f}));var e=n(8),i=n(54),o=n(81),u=n(17),s=n(53),c=n(51),a=n(52),f=function(t){function r(n,e,i){var u=t.call(this)||this;switch(u.syncErrorValue=null,u.syncErrorThrown=!1,u.syncErrorThrowable=!1,u.isStopped=!1,arguments.length){case 0:u.destination=o.a;break;case 1:if(!n){u.destination=o.a;break}if("object"===typeof n){n instanceof r?(u.syncErrorThrowable=n.syncErrorThrowable,u.destination=n,n.add(u)):(u.syncErrorThrowable=!0,u.destination=new h(u,n));break}default:u.syncErrorThrowable=!0,u.destination=new h(u,n,e,i)}return u}return e.a(r,t),r.prototype[s.a]=function(){return this},r.create=function(t,n,e){var i=new r(t,n,e);return i.syncErrorThrowable=!1,i},r.prototype.next=function(t){this.isStopped||this._next(t)},r.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},r.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},r.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},r.prototype._next=function(t){this.destination.next(t)},r.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},r.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},r.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},r}(u.a),h=function(t){function r(r,n,e,u){var s,c=t.call(this)||this;c._parentSubscriber=r;var a=c;return Object(i.a)(n)?s=n:n&&(s=n.next,e=n.error,u=n.complete,n!==o.a&&(a=Object.create(n),Object(i.a)(a.unsubscribe)&&c.add(a.unsubscribe.bind(a)),a.unsubscribe=c.unsubscribe.bind(c))),c._context=a,c._next=s,c._error=e,c._complete=u,c}return e.a(r,t),r.prototype.next=function(t){if(!this.isStopped&&this._next){var r=this._parentSubscriber;c.a.useDeprecatedSynchronousErrorHandling&&r.syncErrorThrowable?this.__tryOrSetError(r,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},r.prototype.error=function(t){if(!this.isStopped){var r=this._parentSubscriber,n=c.a.useDeprecatedSynchronousErrorHandling;if(this._error)n&&r.syncErrorThrowable?(this.__tryOrSetError(r,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(r.syncErrorThrowable)n?(r.syncErrorValue=t,r.syncErrorThrown=!0):Object(a.a)(t),this.unsubscribe();else{if(this.unsubscribe(),n)throw t;Object(a.a)(t)}}},r.prototype.complete=function(){var t=this;if(!this.isStopped){var r=this._parentSubscriber;if(this._complete){var n=function(){return t._complete.call(t._context)};c.a.useDeprecatedSynchronousErrorHandling&&r.syncErrorThrowable?(this.__tryOrSetError(r,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}},r.prototype.__tryOrUnsub=function(t,r){try{t.call(this._context,r)}catch(n){if(this.unsubscribe(),c.a.useDeprecatedSynchronousErrorHandling)throw n;Object(a.a)(n)}},r.prototype.__tryOrSetError=function(t,r,n){if(!c.a.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{r.call(this._context,n)}catch(e){return c.a.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=e,t.syncErrorThrown=!0,!0):(Object(a.a)(e),!0)}return!1},r.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},r}(f)},,function(t,r,n){"use strict";n.d(r,"a",(function(){return s}));var e=n(82),i=n(83),o=n(54),u=function(){function t(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(t,r){return r+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t}(),s=function(){function t(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._ctorUnsubscribe=!0,this._unsubscribe=t)}var r;return t.prototype.unsubscribe=function(){var r;if(!this.closed){var n=this,s=n._parentOrParents,a=n._ctorUnsubscribe,f=n._unsubscribe,h=n._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,s instanceof t)s.remove(this);else if(null!==s)for(var l=0;l<s.length;++l){s[l].remove(this)}if(Object(o.a)(f)){a&&(this._unsubscribe=void 0);try{f.call(this)}catch(b){r=b instanceof u?c(b.errors):[b]}}if(Object(e.a)(h)){l=-1;for(var p=h.length;++l<p;){var d=h[l];if(Object(i.a)(d))try{d.unsubscribe()}catch(b){r=r||[],b instanceof u?r=r.concat(c(b.errors)):r.push(b)}}}if(r)throw new u(r)}},t.prototype.add=function(r){var n=r;if(!r)return t.EMPTY;switch(typeof r){case"function":n=new t(r);case"object":if(n===this||n.closed||"function"!==typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof t)){var e=n;(n=new t)._subscriptions=[e]}break;default:throw new Error("unrecognized teardown "+r+" added to Subscription.")}var i=n._parentOrParents;if(null===i)n._parentOrParents=this;else if(i instanceof t){if(i===this)return n;n._parentOrParents=[i,this]}else{if(-1!==i.indexOf(this))return n;i.push(this)}var o=this._subscriptions;return null===o?this._subscriptions=[n]:o.push(n),n},t.prototype.remove=function(t){var r=this._subscriptions;if(r){var n=r.indexOf(t);-1!==n&&r.splice(n,1)}},t.EMPTY=((r=new t).closed=!0,r),t}();function c(t){return t.reduce((function(t,r){return t.concat(r instanceof u?r.errors:r)}),[])}},,,,,function(t,r,n){"use strict";function e(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}n.d(r,"a",(function(){return e}))},function(t,r,n){"use strict";n.d(r,"a",(function(){return i}));var e=n(22);function i(t,r){if(t){if("string"===typeof t)return Object(e.a)(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(e.a)(t,r):void 0}}},,,function(t,r,n){"use strict";n.d(r,"a",(function(){return i}));var e=n(23);function i(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],e=!0,i=!1,o=void 0;try{for(var u,s=t[Symbol.iterator]();!(e=(u=s.next()).done)&&(n.push(u.value),!r||n.length!==r);e=!0);}catch(c){i=!0,o=c}finally{try{e||null==s.return||s.return()}finally{if(i)throw o}}return n}}(t,r)||Object(e.a)(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},,,,function(t,r,n){"use strict";n.d(r,"a",(function(){return e}));var e=function(){return"function"===typeof Symbol&&Symbol.observable||"@@observable"}()},,,,,,,,function(t,r,n){"use strict";function e(){return"function"===typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}n.d(r,"a",(function(){return i}));var i=e()},,,,,,,,,,,,,function(t,r,n){"use strict";n.d(r,"a",(function(){return i}));var e=!1,i={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){t&&(new Error).stack;e=t},get useDeprecatedSynchronousErrorHandling(){return e}}},function(t,r,n){"use strict";function e(t){setTimeout((function(){throw t}),0)}n.d(r,"a",(function(){return e}))},function(t,r,n){"use strict";n.d(r,"a",(function(){return e}));var e=function(){return"function"===typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}()},function(t,r,n){"use strict";function e(t){return"function"===typeof t}n.d(r,"a",(function(){return e}))},,function(t,r,n){"use strict";n.d(r,"a",(function(){return o}));var e=n(12),i=n(17);function o(t,r){return new e.a((function(n){var e=new i.a,o=0;return e.add(r.schedule((function(){o!==t.length?(n.next(t[o++]),n.closed||e.add(this.schedule())):n.complete()}))),e}))}},,,,,,,,,,,,,,,,,,,,,,function(t,r,n){"use strict";n.d(r,"a",(function(){return f}));var e=n(86),i=n(52),o=n(38),u=n(30),s=n(85),c=n(87),a=n(83),f=function(t){if(t&&"function"===typeof t[u.a])return f=t,function(t){var r=f[u.a]();if("function"!==typeof r.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return r.subscribe(t)};if(Object(s.a)(t))return Object(e.a)(t);if(Object(c.a)(t))return n=t,function(t){return n.then((function(r){t.closed||(t.next(r),t.complete())}),(function(r){return t.error(r)})).then(null,i.a),t};if(t&&"function"===typeof t[o.a])return r=t,function(t){for(var n=r[o.a]();;){var e=void 0;try{e=n.next()}catch(i){return t.error(i),t}if(e.done){t.complete();break}if(t.next(e.value),t.closed)break}return"function"===typeof n.return&&t.add((function(){n.return&&n.return()})),t};var r,n,f,h=Object(a.a)(t)?"an invalid object":"'"+t+"'";throw new TypeError("You provided "+h+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")}},,,function(t,r,n){"use strict";n.d(r,"a",(function(){return o}));var e=n(51),i=n(52),o={closed:!0,next:function(t){},error:function(t){if(e.a.useDeprecatedSynchronousErrorHandling)throw t;Object(i.a)(t)},complete:function(){}}},function(t,r,n){"use strict";n.d(r,"a",(function(){return e}));var e=function(){return Array.isArray||function(t){return t&&"number"===typeof t.length}}()},function(t,r,n){"use strict";function e(t){return null!==t&&"object"===typeof t}n.d(r,"a",(function(){return e}))},function(t,r,n){"use strict";function e(t){return t}n.d(r,"a",(function(){return e}))},function(t,r,n){"use strict";n.d(r,"a",(function(){return e}));var e=function(t){return t&&"number"===typeof t.length&&"function"!==typeof t}},function(t,r,n){"use strict";n.d(r,"a",(function(){return e}));var e=function(t){return function(r){for(var n=0,e=t.length;n<e&&!r.closed;n++)r.next(t[n]);r.complete()}}},function(t,r,n){"use strict";function e(t){return!!t&&"function"!==typeof t.subscribe&&"function"===typeof t.then}n.d(r,"a",(function(){return e}))},function(t,r,n){"use strict";function e(t){return t&&"function"===typeof t.schedule}n.d(r,"a",(function(){return e}))},function(t,r,n){"use strict";n.d(r,"a",(function(){return u}));var e=n(12),i=n(86),o=n(56);function u(t,r){return r?Object(o.a)(t,r):new e.a(Object(i.a)(t))}},,,,,,,,,,,function(t,r,n){"use strict";n.d(r,"a",(function(){return o}));var e=n(8),i=n(15);function o(t,r){return function(n){if("function"!==typeof t)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return n.lift(new u(t,r))}}var u=function(){function t(t,r){this.project=t,this.thisArg=r}return t.prototype.call=function(t,r){return r.subscribe(new s(t,this.project,this.thisArg))},t}(),s=function(t){function r(r,n,e){var i=t.call(this,r)||this;return i.project=n,i.count=0,i.thisArg=e||i,i}return e.a(r,t),r.prototype._next=function(t){var r;try{r=this.project.call(this.thisArg,t,this.count++)}catch(n){return void this.destination.error(n)}this.destination.next(r)},r}(i.a)},,,,,,,,,,,,,,,,,function(t,r,n){"use strict";n.d(r,"a",(function(){return l}));var e=n(12),i=n(78),o=n(17),u=n(30);var s=n(56),c=n(38);var a=n(87),f=n(85);function h(t,r){if(null!=t){if(function(t){return t&&"function"===typeof t[u.a]}(t))return function(t,r){return new e.a((function(n){var e=new o.a;return e.add(r.schedule((function(){var i=t[u.a]();e.add(i.subscribe({next:function(t){e.add(r.schedule((function(){return n.next(t)})))},error:function(t){e.add(r.schedule((function(){return n.error(t)})))},complete:function(){e.add(r.schedule((function(){return n.complete()})))}}))}))),e}))}(t,r);if(Object(a.a)(t))return function(t,r){return new e.a((function(n){var e=new o.a;return e.add(r.schedule((function(){return t.then((function(t){e.add(r.schedule((function(){n.next(t),e.add(r.schedule((function(){return n.complete()})))})))}),(function(t){e.add(r.schedule((function(){return n.error(t)})))}))}))),e}))}(t,r);if(Object(f.a)(t))return Object(s.a)(t,r);if(function(t){return t&&"function"===typeof t[c.a]}(t)||"string"===typeof t)return function(t,r){if(!t)throw new Error("Iterable cannot be null");return new e.a((function(n){var e,i=new o.a;return i.add((function(){e&&"function"===typeof e.return&&e.return()})),i.add(r.schedule((function(){e=t[c.a](),i.add(r.schedule((function(){if(!n.closed){var t,r;try{var i=e.next();t=i.value,r=i.done}catch(o){return void n.error(o)}r?n.complete():(n.next(t),this.schedule())}})))}))),i}))}(t,r)}throw new TypeError((null!==t&&typeof t||t)+" is not observable")}function l(t,r){return r?h(t,r):t instanceof e.a?t:new e.a(Object(i.a)(t))}},function(t,r,n){"use strict";n.d(r,"a",(function(){return o}));var e=n(22);var i=n(23);function o(t){return function(t){if(Array.isArray(t))return Object(e.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(i.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},,function(t,r,n){"use strict";n.d(r,"a",(function(){return h}));var e=n(8),i=n(100),o=n(117),u=n(15),s=n(12),c=n(78),a=function(t){function r(r){var n=t.call(this)||this;return n.parent=r,n}return e.a(r,t),r.prototype._next=function(t){this.parent.notifyNext(t)},r.prototype._error=function(t){this.parent.notifyError(t),this.unsubscribe()},r.prototype._complete=function(){this.parent.notifyComplete(),this.unsubscribe()},r}(u.a),f=(u.a,function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return e.a(r,t),r.prototype.notifyNext=function(t){this.destination.next(t)},r.prototype.notifyError=function(t){this.destination.error(t)},r.prototype.notifyComplete=function(){this.destination.complete()},r}(u.a));u.a;function h(t,r,n){return void 0===n&&(n=Number.POSITIVE_INFINITY),"function"===typeof r?function(e){return e.pipe(h((function(n,e){return Object(o.a)(t(n,e)).pipe(Object(i.a)((function(t,i){return r(n,t,e,i)})))}),n))}:("number"===typeof r&&(n=r),function(r){return r.lift(new l(t,n))})}var l=function(){function t(t,r){void 0===r&&(r=Number.POSITIVE_INFINITY),this.project=t,this.concurrent=r}return t.prototype.call=function(t,r){return r.subscribe(new p(t,this.project,this.concurrent))},t}(),p=function(t){function r(r,n,e){void 0===e&&(e=Number.POSITIVE_INFINITY);var i=t.call(this,r)||this;return i.project=n,i.concurrent=e,i.hasCompleted=!1,i.buffer=[],i.active=0,i.index=0,i}return e.a(r,t),r.prototype._next=function(t){this.active<this.concurrent?this._tryNext(t):this.buffer.push(t)},r.prototype._tryNext=function(t){var r,n=this.index++;try{r=this.project(t,n)}catch(e){return void this.destination.error(e)}this.active++,this._innerSub(r)},r.prototype._innerSub=function(t){var r=new a(this),n=this.destination;n.add(r);var e=function(t,r){if(!r.closed){if(t instanceof s.a)return t.subscribe(r);var n;try{n=Object(c.a)(t)(r)}catch(e){r.error(e)}return n}}(t,r);e!==r&&n.add(e)},r.prototype._complete=function(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()},r.prototype.notifyNext=function(t){this.destination.next(t)},r.prototype.notifyComplete=function(){var t=this.buffer;this.active--,t.length>0?this._next(t.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()},r}(f)},,,function(t,r,n){"use strict";n.d(r,"a",(function(){return o}));var e=n(8),i=n(15);function o(t,r){return function(n){return n.lift(new u(t,r))}}var u=function(){function t(t,r){this.predicate=t,this.thisArg=r}return t.prototype.call=function(t,r){return r.subscribe(new s(t,this.predicate,this.thisArg))},t}(),s=function(t){function r(r,n,e){var i=t.call(this,r)||this;return i.predicate=n,i.thisArg=e,i.count=0,i}return e.a(r,t),r.prototype._next=function(t){var r;try{r=this.predicate.call(this.thisArg,t,this.count++)}catch(n){return void this.destination.error(n)}r&&this.destination.next(t)},r}(i.a)},function(t,r,n){"use strict";n.d(r,"a",(function(){return o}));var e=n(8),i=n(15);function o(){return function(t){return t.lift(new u)}}var u=function(){function t(){}return t.prototype.call=function(t,r){return r.subscribe(new s(t))},t}(),s=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return e.a(r,t),r.prototype._next=function(t){},r}(i.a)},function(t,r,n){"use strict";n.d(r,"a",(function(){return tt}));var e=n(8),i=n(17),o=function(t){function r(r,n){var e=t.call(this,r,n)||this;return e.scheduler=r,e.work=n,e.pending=!1,e}return e.a(r,t),r.prototype.schedule=function(t,r){if(void 0===r&&(r=0),this.closed)return this;this.state=t;var n=this.id,e=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(e,n,r)),this.pending=!0,this.delay=r,this.id=this.id||this.requestAsyncId(e,this.id,r),this},r.prototype.requestAsyncId=function(t,r,n){return void 0===n&&(n=0),setInterval(t.flush.bind(t,this),n)},r.prototype.recycleAsyncId=function(t,r,n){if(void 0===n&&(n=0),null!==n&&this.delay===n&&!1===this.pending)return r;clearInterval(r)},r.prototype.execute=function(t,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var n=this._execute(t,r);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},r.prototype._execute=function(t,r){var n=!1,e=void 0;try{this.work(t)}catch(i){n=!0,e=!!i&&i||new Error(i)}if(n)return this.unsubscribe(),e},r.prototype._unsubscribe=function(){var t=this.id,r=this.scheduler,n=r.actions,e=n.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==e&&n.splice(e,1),null!=t&&(this.id=this.recycleAsyncId(r,t,null)),this.delay=null},r}(function(t){function r(r,n){return t.call(this)||this}return e.a(r,t),r.prototype.schedule=function(t,r){return void 0===r&&(r=0),this},r}(i.a)),u=function(t){function r(r,n){var e=t.call(this,r,n)||this;return e.scheduler=r,e.work=n,e}return e.a(r,t),r.prototype.schedule=function(r,n){return void 0===n&&(n=0),n>0?t.prototype.schedule.call(this,r,n):(this.delay=n,this.state=r,this.scheduler.flush(this),this)},r.prototype.execute=function(r,n){return n>0||this.closed?t.prototype.execute.call(this,r,n):this._execute(r,n)},r.prototype.requestAsyncId=function(r,n,e){return void 0===e&&(e=0),null!==e&&e>0||null===e&&this.delay>0?t.prototype.requestAsyncId.call(this,r,n,e):r.flush(this)},r}(o),s=function(){function t(r,n){void 0===n&&(n=t.now),this.SchedulerAction=r,this.now=n}return t.prototype.schedule=function(t,r,n){return void 0===r&&(r=0),new this.SchedulerAction(this,t).schedule(n,r)},t.now=function(){return Date.now()},t}(),c=function(t){function r(n,e){void 0===e&&(e=s.now);var i=t.call(this,n,(function(){return r.delegate&&r.delegate!==i?r.delegate.now():e()}))||this;return i.actions=[],i.active=!1,i.scheduled=void 0,i}return e.a(r,t),r.prototype.schedule=function(n,e,i){return void 0===e&&(e=0),r.delegate&&r.delegate!==this?r.delegate.schedule(n,e,i):t.prototype.schedule.call(this,n,e,i)},r.prototype.flush=function(t){var r=this.actions;if(this.active)r.push(t);else{var n;this.active=!0;do{if(n=t.execute(t.state,t.delay))break}while(t=r.shift());if(this.active=!1,n){for(;t=r.shift();)t.unsubscribe();throw n}}},r}(s),a=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return e.a(r,t),r}(c),f=new a(u),h=n(12),l=n(15),p=function(){function t(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return t.prototype=Object.create(Error.prototype),t}(),d=function(t){function r(r,n){var e=t.call(this)||this;return e.subject=r,e.subscriber=n,e.closed=!1,e}return e.a(r,t),r.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var t=this.subject,r=t.observers;if(this.subject=null,r&&0!==r.length&&!t.isStopped&&!t.closed){var n=r.indexOf(this.subscriber);-1!==n&&r.splice(n,1)}}},r}(i.a),b=n(53),y=function(t){function r(r){var n=t.call(this,r)||this;return n.destination=r,n}return e.a(r,t),r}(l.a),v=function(t){function r(){var r=t.call(this)||this;return r.observers=[],r.closed=!1,r.isStopped=!1,r.hasError=!1,r.thrownError=null,r}return e.a(r,t),r.prototype[b.a]=function(){return new y(this)},r.prototype.lift=function(t){var r=new w(this,this);return r.operator=t,r},r.prototype.next=function(t){if(this.closed)throw new p;if(!this.isStopped)for(var r=this.observers,n=r.length,e=r.slice(),i=0;i<n;i++)e[i].next(t)},r.prototype.error=function(t){if(this.closed)throw new p;this.hasError=!0,this.thrownError=t,this.isStopped=!0;for(var r=this.observers,n=r.length,e=r.slice(),i=0;i<n;i++)e[i].error(t);this.observers.length=0},r.prototype.complete=function(){if(this.closed)throw new p;this.isStopped=!0;for(var t=this.observers,r=t.length,n=t.slice(),e=0;e<r;e++)n[e].complete();this.observers.length=0},r.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},r.prototype._trySubscribe=function(r){if(this.closed)throw new p;return t.prototype._trySubscribe.call(this,r)},r.prototype._subscribe=function(t){if(this.closed)throw new p;return this.hasError?(t.error(this.thrownError),i.a.EMPTY):this.isStopped?(t.complete(),i.a.EMPTY):(this.observers.push(t),new d(this,t))},r.prototype.asObservable=function(){var t=new h.a;return t.source=this,t},r.create=function(t,r){return new w(t,r)},r}(h.a),w=function(t){function r(r,n){var e=t.call(this)||this;return e.destination=r,e.source=n,e}return e.a(r,t),r.prototype.next=function(t){var r=this.destination;r&&r.next&&r.next(t)},r.prototype.error=function(t){var r=this.destination;r&&r.error&&this.destination.error(t)},r.prototype.complete=function(){var t=this.destination;t&&t.complete&&this.destination.complete()},r.prototype._subscribe=function(t){return this.source?this.source.subscribe(t):i.a.EMPTY},r}(v),_=n(117),m=new h.a((function(t){return t.complete()}));function g(t){return t?function(t){return new h.a((function(r){return t.schedule((function(){return r.complete()}))}))}(t):m}var x,O=n(88),E=n(89),j=n(56);function S(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var n=t[t.length-1];return Object(O.a)(n)?(t.pop(),Object(j.a)(t,n)):Object(E.a)(t)}function T(t){var r=t.error;t.subscriber.error(r)}x||(x={});var I=function(){function t(t,r,n){this.kind=t,this.value=r,this.error=n,this.hasValue="N"===t}return t.prototype.observe=function(t){switch(this.kind){case"N":return t.next&&t.next(this.value);case"E":return t.error&&t.error(this.error);case"C":return t.complete&&t.complete()}},t.prototype.do=function(t,r,n){switch(this.kind){case"N":return t&&t(this.value);case"E":return r&&r(this.error);case"C":return n&&n()}},t.prototype.accept=function(t,r,n){return t&&"function"===typeof t.next?this.observe(t):this.do(t,r,n)},t.prototype.toObservable=function(){var t,r;switch(this.kind){case"N":return S(this.value);case"E":return t=this.error,r?new h.a((function(n){return r.schedule(T,0,{error:t,subscriber:n})})):new h.a((function(r){return r.error(t)}));case"C":return g()}throw new Error("unexpected notification kind value")},t.createNext=function(r){return"undefined"!==typeof r?new t("N",r):t.undefinedValueNotification},t.createError=function(r){return new t("E",void 0,r)},t.createComplete=function(){return t.completeNotification},t.completeNotification=new t("C"),t.undefinedValueNotification=new t("N",void 0),t}();function A(t,r){return void 0===r&&(r=0),function(n){return n.lift(new N(t,r))}}var N=function(){function t(t,r){void 0===r&&(r=0),this.scheduler=t,this.delay=r}return t.prototype.call=function(t,r){return r.subscribe(new P(t,this.scheduler,this.delay))},t}(),P=function(t){function r(r,n,e){void 0===e&&(e=0);var i=t.call(this,r)||this;return i.scheduler=n,i.delay=e,i}return e.a(r,t),r.dispatch=function(t){var r=t.notification,n=t.destination;r.observe(n),this.unsubscribe()},r.prototype.scheduleMessage=function(t){this.destination.add(this.scheduler.schedule(r.dispatch,this.delay,new k(t,this.destination)))},r.prototype._next=function(t){this.scheduleMessage(I.createNext(t))},r.prototype._error=function(t){this.scheduleMessage(I.createError(t)),this.unsubscribe()},r.prototype._complete=function(){this.scheduleMessage(I.createComplete()),this.unsubscribe()},r}(l.a),k=function(){return function(t,r){this.notification=t,this.destination=r}}(),C=n(100),D=n(120),V=1,Y=function(){return Promise.resolve()}(),H={};function M(t){return t in H&&(delete H[t],!0)}var U=function(t){var r=V++;return H[r]=!0,Y.then((function(){return M(r)&&t()})),r},R=function(t){M(t)},q=function(t){function r(r,n){var e=t.call(this,r,n)||this;return e.scheduler=r,e.work=n,e}return e.a(r,t),r.prototype.requestAsyncId=function(r,n,e){return void 0===e&&(e=0),null!==e&&e>0?t.prototype.requestAsyncId.call(this,r,n,e):(r.actions.push(this),r.scheduled||(r.scheduled=U(r.flush.bind(r,null))))},r.prototype.recycleAsyncId=function(r,n,e){if(void 0===e&&(e=0),null!==e&&e>0||null===e&&this.delay>0)return t.prototype.recycleAsyncId.call(this,r,n,e);0===r.actions.length&&(R(n),r.scheduled=void 0)},r}(o),F=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return e.a(r,t),r.prototype.flush=function(t){this.active=!0,this.scheduled=void 0;var r,n=this.actions,e=-1,i=n.length;t=t||n.shift();do{if(r=t.execute(t.state,t.delay))break}while(++e<i&&(t=n.shift()));if(this.active=!1,r){for(;++e<i&&(t=n.shift());)t.unsubscribe();throw r}},r}(c),J=new F(q),z=n(82);var $=function(t){function r(r,n,e){void 0===n&&(n=0),void 0===e&&(e=J);var i,o=t.call(this)||this;return o.source=r,o.delayTime=n,o.scheduler=e,i=n,(Object(z.a)(i)||!(i-parseFloat(i)+1>=0)||n<0)&&(o.delayTime=0),e&&"function"===typeof e.schedule||(o.scheduler=J),o}return e.a(r,t),r.create=function(t,n,e){return void 0===n&&(n=0),void 0===e&&(e=J),new r(t,n,e)},r.dispatch=function(t){var r=t.source,n=t.subscriber;return this.add(r.subscribe(n))},r.prototype._subscribe=function(t){var n=this.delayTime,e=this.source;return this.scheduler.schedule(r.dispatch,n,{source:e,subscriber:t})},r}(h.a);function B(t,r){return void 0===r&&(r=0),function(n){return n.lift(new G(t,r))}}var G=function(){function t(t,r){this.scheduler=t,this.delay=r}return t.prototype.call=function(t,r){return new $(r,this.delay,this.scheduler).subscribe(t)},t}(),K=n(123),L=function(t,r){return t===r||"function"===typeof r&&t===r.toString()},Q=function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return function(t){return t.pipe(Object(K.a)((function(t){var n=t.type,e=r.length;if(1===e)return L(n,r[0]);for(var i=0;i<e;i++)if(L(n,r[i]))return!0;return!1})))}},W=function(){function t(t,r){for(var n=0;n<r.length;n++){var e=r[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(r,n,e){return n&&t(r.prototype,n),e&&t(r,e),r}}();var X=function(t){function r(t){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r);var n=function(t,r){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!==typeof r&&"function"!==typeof r?t:r}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return n.source=t,n}return function(t,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(t,r):t.__proto__=r)}(r,t),W(r,null,[{key:"of",value:function(){return new this(S.apply(void 0,arguments))}},{key:"from",value:function(t,r){return new this(Object(_.a)(t,r))}}]),W(r,[{key:"lift",value:function(t){var n=new r(this);return n.operator=t,n}},{key:"ofType",value:function(){return Q.apply(void 0,arguments)(this)}}]),r}(h.a);var Z=function(t){function r(t,n){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r);var e=function(t,r){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!==typeof r&&"function"!==typeof r?t:r}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,(function(t){var r=e.__notifier.subscribe(t);return r&&!r.closed&&t.next(e.value),r})));return e.value=n,e.__notifier=new v,e.__subscription=t.subscribe((function(t){t!==e.value&&(e.value=t,e.__notifier.next(t))})),e}return function(t,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(t,r):t.__proto__=r)}(r,t),r}(h.a);function tt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=f.constructor,n=new r(f.SchedulerAction);var e=new v,i=void 0,o=function(r){i=r;var o=(new v).pipe(A(n)),u=(new v).pipe(A(n)),s=new X(o),c=new Z(u,i.getState());return e.pipe(Object(C.a)((function(r){var n="dependencies"in t?r(s,c,t.dependencies):r(s,c);if(!n)throw new TypeError('Your root Epic "'+(r.name||"<anonymous>")+"\" does not return a stream. Double check you're not missing a return statement!");return n})),Object(D.a)((function(t){return Object(_.a)(t).pipe(B(n),A(n))}))).subscribe(i.dispatch),function(t){return function(r){var n=t(r);return u.next(i.getState()),o.next(r),n}}};return o.run=function(t){e.next(t)},o}},function(t,r,n){"use strict";n.d(r,"a",(function(){return f}));var e=n(8),i=n(15),o=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return e.a(r,t),r.prototype.notifyNext=function(t,r,n,e,i){this.destination.next(r)},r.prototype.notifyError=function(t,r){this.destination.error(t)},r.prototype.notifyComplete=function(t){this.destination.complete()},r}(i.a),u=function(t){function r(r,n,e){var i=t.call(this)||this;return i.parent=r,i.outerValue=n,i.outerIndex=e,i.index=0,i}return e.a(r,t),r.prototype._next=function(t){this.parent.notifyNext(this.outerValue,t,this.outerIndex,this.index++,this)},r.prototype._error=function(t){this.parent.notifyError(t,this),this.unsubscribe()},r.prototype._complete=function(){this.parent.notifyComplete(this),this.unsubscribe()},r}(i.a),s=n(78),c=n(12);function a(t,r,n,e,i){if(void 0===i&&(i=new u(t,n,e)),!i.closed)return r instanceof c.a?r.subscribe(i):Object(s.a)(r)(i)}function f(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return function(r){var n;"function"===typeof t[t.length-1]&&(n=t.pop());var e=t;return r.lift(new h(e,n))}}var h=function(){function t(t,r){this.observables=t,this.project=r}return t.prototype.call=function(t,r){return r.subscribe(new l(t,this.observables,this.project))},t}(),l=function(t){function r(r,n,e){var i=t.call(this,r)||this;i.observables=n,i.project=e,i.toRespond=[];var o=n.length;i.values=new Array(o);for(var u=0;u<o;u++)i.toRespond.push(u);for(u=0;u<o;u++){var s=n[u];i.add(a(i,s,void 0,u))}return i}return e.a(r,t),r.prototype.notifyNext=function(t,r,n){this.values[n]=r;var e=this.toRespond;if(e.length>0){var i=e.indexOf(n);-1!==i&&e.splice(i,1)}},r.prototype.notifyComplete=function(){},r.prototype._next=function(t){if(0===this.toRespond.length){var r=[t].concat(this.values);this.project?this._tryProject(r):this.destination.next(r)}},r.prototype._tryProject=function(t){var r;try{r=this.project.apply(this,t)}catch(n){return void this.destination.error(n)}this.destination.next(r)},r}(o)},function(t,r,n){"use strict";n.d(r,"a",(function(){return h}));var e=n(12),i=n(88),o=n(120),u=n(84);function s(t){return void 0===t&&(t=Number.POSITIVE_INFINITY),Object(o.a)(u.a,t)}var c=n(89);function a(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var n=Number.POSITIVE_INFINITY,o=null,u=t[t.length-1];return Object(i.a)(u)?(o=t.pop(),t.length>1&&"number"===typeof t[t.length-1]&&(n=t.pop())):"number"===typeof u&&(n=t.pop()),null===o&&1===t.length&&t[0]instanceof e.a?t[0]:s(n)(Object(c.a)(t,o))}function f(t){if(Array.isArray(t)){for(var r=0,n=Array(t.length);r<t.length;r++)n[r]=t[r];return n}return Array.from(t)}var h=function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];var e=function(){for(var t=arguments.length,n=Array(t),e=0;e<t;e++)n[e]=arguments[e];return a.apply(void 0,f(r.map((function(t){var r=t.apply(void 0,n);if(!r)throw new TypeError('combineEpics: one of the provided Epics "'+(t.name||"<anonymous>")+"\" does not return a stream. Double check you're not missing a return statement!");return r}))))};try{Object.defineProperty(e,"name",{value:"combineEpics("+r.map((function(t){return t.name||"<anonymous>"})).join(", ")+")"})}catch(i){}return e}},function(t,r,n){"use strict";n.d(r,"a",(function(){return s}));var e=n(8),i=n(15);function o(){}var u=n(54);function s(t,r,n){return function(e){return e.lift(new c(t,r,n))}}var c=function(){function t(t,r,n){this.nextOrObserver=t,this.error=r,this.complete=n}return t.prototype.call=function(t,r){return r.subscribe(new a(t,this.nextOrObserver,this.error,this.complete))},t}(),a=function(t){function r(r,n,e,i){var s=t.call(this,r)||this;return s._tapNext=o,s._tapError=o,s._tapComplete=o,s._tapError=e||o,s._tapComplete=i||o,Object(u.a)(n)?(s._context=s,s._tapNext=n):n&&(s._context=n,s._tapNext=n.next||o,s._tapError=n.error||o,s._tapComplete=n.complete||o),s}return e.a(r,t),r.prototype._next=function(t){try{this._tapNext.call(this._context,t)}catch(r){return void this.destination.error(r)}this.destination.next(t)},r.prototype._error=function(t){try{this._tapError.call(this._context,t)}catch(t){return void this.destination.error(t)}this.destination.error(t)},r.prototype._complete=function(){try{this._tapComplete.call(this._context)}catch(t){return void this.destination.error(t)}return this.destination.complete()},r}(i.a)}]]);