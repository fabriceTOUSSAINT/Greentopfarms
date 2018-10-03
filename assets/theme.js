/*!
 * jQuery JavaScript Library v1.11.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-17T15:27Z
 */
/*!
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
 *
 * @version 1.0.3
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */
function FastClick(e,t){"use strict";var n;if(t=t||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=t.touchBoundary||10,this.layer=e,this.tapDelay=t.tapDelay||200,!FastClick.notNeeded(e)){for(var o=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],r=this,i=0,a=o.length;i<a;i++)r[o[i]]=function(e,t){return function(){return e.apply(t,arguments)}}(r[o[i]],r);deviceIsAndroid&&(e.addEventListener("mouseover",this.onMouse,!0),e.addEventListener("mousedown",this.onMouse,!0),e.addEventListener("mouseup",this.onMouse,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1),e.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,n,o){var r=Node.prototype.removeEventListener;"click"===t?r.call(e,t,n.hijacked||n,o):r.call(e,t,n,o)},e.addEventListener=function(t,n,o){var r=Node.prototype.addEventListener;"click"===t?r.call(e,t,n.hijacked||(n.hijacked=function(e){e.propagationStopped||n(e)}),o):r.call(e,t,n,o)}),"function"==typeof e.onclick&&(n=e.onclick,e.addEventListener("click",function(e){n(e)},!1),e.onclick=null)}}!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t=e.length,n=oe.type(e);return"function"!==n&&!oe.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e))}function o(e,t,n){if(oe.isFunction(t))return oe.grep(e,function(e,o){return!!t.call(e,o,e)!==n});if(t.nodeType)return oe.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(fe.test(t))return oe.filter(t,e,n);t=oe.filter(t,e)}return oe.grep(e,function(e){return oe.inArray(e,t)>=0!==n})}function r(e,t){do{e=e[t]}while(e&&1!==e.nodeType);return e}function i(e){var t=ve[e]={};return oe.each(e.match(ge)||[],function(e,n){t[n]=!0}),t}function a(){pe.addEventListener?(pe.removeEventListener("DOMContentLoaded",s,!1),e.removeEventListener("load",s,!1)):(pe.detachEvent("onreadystatechange",s),e.detachEvent("onload",s))}function s(){(pe.addEventListener||"load"===event.type||"complete"===pe.readyState)&&(a(),oe.ready())}function l(e,t,n){if(void 0===n&&1===e.nodeType){var o="data-"+t.replace(Ce,"-$1").toLowerCase();if("string"==typeof(n=e.getAttribute(o))){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:xe.test(n)?oe.parseJSON(n):n)}catch(e){}oe.data(e,t,n)}else n=void 0}return n}function u(e){var t;for(t in e)if(("data"!==t||!oe.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function c(e,t,n,o){if(oe.acceptData(e)){var r,i,a=oe.expando,s=e.nodeType,l=s?oe.cache:e,u=s?e[a]:e[a]&&a;if(u&&l[u]&&(o||l[u].data)||void 0!==n||"string"!=typeof t)return u||(u=s?e[a]=G.pop()||oe.guid++:a),l[u]||(l[u]=s?{}:{toJSON:oe.noop}),"object"!=typeof t&&"function"!=typeof t||(o?l[u]=oe.extend(l[u],t):l[u].data=oe.extend(l[u].data,t)),i=l[u],o||(i.data||(i.data={}),i=i.data),void 0!==n&&(i[oe.camelCase(t)]=n),"string"==typeof t?null==(r=i[t])&&(r=i[oe.camelCase(t)]):r=i,r}}function f(e,t,n){if(oe.acceptData(e)){var o,r,i=e.nodeType,a=i?oe.cache:e,s=i?e[oe.expando]:oe.expando;if(a[s]){if(t&&(o=n?a[s]:a[s].data)){oe.isArray(t)?t=t.concat(oe.map(t,oe.camelCase)):t in o?t=[t]:(t=oe.camelCase(t),t=t in o?[t]:t.split(" ")),r=t.length;for(;r--;)delete o[t[r]];if(n?!u(o):!oe.isEmptyObject(o))return}(n||(delete a[s].data,u(a[s])))&&(i?oe.cleanData([e],!0):ne.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}function d(){return!0}function p(){return!1}function m(){try{return pe.activeElement}catch(e){}}function h(e){var t=je.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}function y(e,t){var n,o,r=0,i=typeof e.getElementsByTagName!==_e?e.getElementsByTagName(t||"*"):typeof e.querySelectorAll!==_e?e.querySelectorAll(t||"*"):void 0;if(!i)for(i=[],n=e.childNodes||e;null!=(o=n[r]);r++)!t||oe.nodeName(o,t)?i.push(o):oe.merge(i,y(o,t));return void 0===t||t&&oe.nodeName(e,t)?oe.merge([e],i):i}function g(e){Ae.test(e.type)&&(e.defaultChecked=e.checked)}function v(e,t){return oe.nodeName(e,"table")&&oe.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function w(e){return e.type=(null!==oe.find.attr(e,"type"))+"/"+e.type,e}function b(e){var t=qe.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _(e,t){for(var n,o=0;null!=(n=e[o]);o++)oe._data(n,"globalEval",!t||oe._data(t[o],"globalEval"))}function x(e,t){if(1===t.nodeType&&oe.hasData(e)){var n,o,r,i=oe._data(e),a=oe._data(t,i),s=i.events;if(s){delete a.handle,a.events={};for(n in s)for(o=0,r=s[n].length;o<r;o++)oe.event.add(t,n,s[n][o])}a.data&&(a.data=oe.extend({},a.data))}}function C(e,t){var n,o,r;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!ne.noCloneEvent&&t[oe.expando]){r=oe._data(t);for(o in r.events)oe.removeEvent(t,o,r.handle);t.removeAttribute(oe.expando)}"script"===n&&t.text!==e.text?(w(t).text=e.text,b(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),ne.html5Clone&&e.innerHTML&&!oe.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ae.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}}function S(t,n){var o,r=oe(n.createElement(t)).appendTo(n.body),i=e.getDefaultComputedStyle&&(o=e.getDefaultComputedStyle(r[0]))?o.display:oe.css(r[0],"display");return r.detach(),i}function T(e){var t=pe,n=Qe[e];return n||(n=S(e,t),"none"!==n&&n||(Ke=(Ke||oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=(Ke[0].contentWindow||Ke[0].contentDocument).document,t.write(),t.close(),n=S(e,t),Ke.detach()),Qe[e]=n),n}function k(e,t){return{get:function(){var n=e();if(null!=n)return n?void delete this.get:(this.get=t).apply(this,arguments)}}}function E(e,t){if(t in e)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),o=t,r=ct.length;r--;)if((t=ct[r]+n)in e)return t;return o}function A(e,t){for(var n,o,r,i=[],a=0,s=e.length;a<s;a++)o=e[a],o.style&&(i[a]=oe._data(o,"olddisplay"),n=o.style.display,t?(i[a]||"none"!==n||(o.style.display=""),""===o.style.display&&ke(o)&&(i[a]=oe._data(o,"olddisplay",T(o.nodeName)))):(r=ke(o),(n&&"none"!==n||!r)&&oe._data(o,"olddisplay",r?n:oe.css(o,"display"))));for(a=0;a<s;a++)o=e[a],o.style&&(t&&"none"!==o.style.display&&""!==o.style.display||(o.style.display=t?i[a]||"":"none"));return e}function N(e,t,n){var o=at.exec(t);return o?Math.max(0,o[1]-(n||0))+(o[2]||"px"):t}function P(e,t,n,o,r){for(var i=n===(o?"border":"content")?4:"width"===t?1:0,a=0;i<4;i+=2)"margin"===n&&(a+=oe.css(e,n+Te[i],!0,r)),o?("content"===n&&(a-=oe.css(e,"padding"+Te[i],!0,r)),"margin"!==n&&(a-=oe.css(e,"border"+Te[i]+"Width",!0,r))):(a+=oe.css(e,"padding"+Te[i],!0,r),"padding"!==n&&(a+=oe.css(e,"border"+Te[i]+"Width",!0,r)));return a}function I(e,t,n){var o=!0,r="width"===t?e.offsetWidth:e.offsetHeight,i=Ze(e),a=ne.boxSizing&&"border-box"===oe.css(e,"boxSizing",!1,i);if(r<=0||null==r){if(r=Je(e,t,i),(r<0||null==r)&&(r=e.style[t]),tt.test(r))return r;o=a&&(ne.boxSizingReliable()||r===e.style[t]),r=parseFloat(r)||0}return r+P(e,t,n||(a?"border":"content"),o,i)+"px"}function D(e,t,n,o,r){return new D.prototype.init(e,t,n,o,r)}function L(){return setTimeout(function(){ft=void 0}),ft=oe.now()}function j(e,t){var n,o={height:e},r=0;for(t=t?1:0;r<4;r+=2-t)n=Te[r],o["margin"+n]=o["padding"+n]=e;return t&&(o.opacity=o.width=e),o}function $(e,t,n){for(var o,r=(gt[t]||[]).concat(gt["*"]),i=0,a=r.length;i<a;i++)if(o=r[i].call(n,t,e))return o}function M(e,t,n){var o,r,i,a,s,l,u,c=this,f={},d=e.style,p=e.nodeType&&ke(e),m=oe._data(e,"fxshow");n.queue||(s=oe._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,c.always(function(){c.always(function(){s.unqueued--,oe.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],u=oe.css(e,"display"),"inline"===("none"===u?oe._data(e,"olddisplay")||T(e.nodeName):u)&&"none"===oe.css(e,"float")&&(ne.inlineBlockNeedsLayout&&"inline"!==T(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",ne.shrinkWrapBlocks()||c.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(o in t)if(r=t[o],pt.exec(r)){if(delete t[o],i=i||"toggle"===r,r===(p?"hide":"show")){if("show"!==r||!m||void 0===m[o])continue;p=!0}f[o]=m&&m[o]||oe.style(e,o)}else u=void 0;if(oe.isEmptyObject(f))"inline"===("none"===u?T(e.nodeName):u)&&(d.display=u);else{m?"hidden"in m&&(p=m.hidden):m=oe._data(e,"fxshow",{}),i&&(m.hidden=!p),p?oe(e).show():c.done(function(){oe(e).hide()}),c.done(function(){var t;oe._removeData(e,"fxshow");for(t in f)oe.style(e,t,f[t])});for(o in f)a=$(p?m[o]:0,o,c),o in m||(m[o]=a.start,p&&(a.end=a.start,a.start="width"===o||"height"===o?1:0))}}function F(e,t){var n,o,r,i,a;for(n in e)if(o=oe.camelCase(n),r=t[o],i=e[n],oe.isArray(i)&&(r=i[1],i=e[n]=i[0]),n!==o&&(e[o]=i,delete e[n]),(a=oe.cssHooks[o])&&"expand"in a){i=a.expand(i),delete e[o];for(n in i)n in e||(e[n]=i[n],t[n]=r)}else t[o]=r}function z(e,t,n){var o,r,i=0,a=yt.length,s=oe.Deferred().always(function(){delete l.elem}),l=function(){if(r)return!1;for(var t=ft||L(),n=Math.max(0,u.startTime+u.duration-t),o=n/u.duration||0,i=1-o,a=0,l=u.tweens.length;a<l;a++)u.tweens[a].run(i);return s.notifyWith(e,[u,i,n]),i<1&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:oe.extend({},t),opts:oe.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:ft||L(),duration:n.duration,tweens:[],createTween:function(t,n){var o=oe.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(o),o},stop:function(t){var n=0,o=t?u.tweens.length:0;if(r)return this;for(r=!0;n<o;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(F(c,u.opts.specialEasing);i<a;i++)if(o=yt[i].call(u,e,c,u.opts))return o;return oe.map(c,$,u),oe.isFunction(u.opts.start)&&u.opts.start.call(e,u),oe.fx.timer(oe.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function R(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var o,r=0,i=t.toLowerCase().match(ge)||[];if(oe.isFunction(n))for(;o=i[r++];)"+"===o.charAt(0)?(o=o.slice(1)||"*",(e[o]=e[o]||[]).unshift(n)):(e[o]=e[o]||[]).push(n)}}function H(e,t,n,o){function r(s){var l;return i[s]=!0,oe.each(e[s]||[],function(e,s){var u=s(t,n,o);return"string"!=typeof u||a||i[u]?a?!(l=u):void 0:(t.dataTypes.unshift(u),r(u),!1)}),l}var i={},a=e===Ot;return r(t.dataTypes[0])||!i["*"]&&r("*")}function O(e,t){var n,o,r=oe.ajaxSettings.flatOptions||{};for(o in t)void 0!==t[o]&&((r[o]?e:n||(n={}))[o]=t[o]);return n&&oe.extend(!0,e,n),e}function B(e,t,n){for(var o,r,i,a,s=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(a in s)if(s[a]&&s[a].test(r)){l.unshift(a);break}if(l[0]in n)i=l[0];else{for(a in n){if(!l[0]||e.converters[a+" "+l[0]]){i=a;break}o||(o=a)}i=i||o}if(i)return i!==l[0]&&l.unshift(i),n[i]}function V(e,t,n,o){var r,i,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];for(i=c.shift();i;)if(e.responseFields[i]&&(n[e.responseFields[i]]=t),!l&&o&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=i,i=c.shift())if("*"===i)i=l;else if("*"!==l&&l!==i){if(!(a=u[l+" "+i]||u["* "+i]))for(r in u)if(s=r.split(" "),s[1]===i&&(a=u[l+" "+s[0]]||u["* "+s[0]])){!0===a?a=u[r]:!0!==u[r]&&(i=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+l+" to "+i}}}return{state:"success",data:t}}function W(e,t,n,o){var r;if(oe.isArray(t))oe.each(t,function(t,r){n||Wt.test(e)?o(e,r):W(e+"["+("object"==typeof r?t:"")+"]",r,n,o)});else if(n||"object"!==oe.type(t))o(e,t);else for(r in t)W(e+"["+r+"]",t[r],n,o)}function q(){try{return new e.XMLHttpRequest}catch(e){}}function X(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}function U(e){return oe.isWindow(e)?e:9===e.nodeType&&(e.defaultView||e.parentWindow)}var G=[],Y=G.slice,K=G.concat,Q=G.push,Z=G.indexOf,J={},ee=J.toString,te=J.hasOwnProperty,ne={},oe=function(e,t){return new oe.fn.init(e,t)},re=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,ie=/^-ms-/,ae=/-([\da-z])/gi,se=function(e,t){return t.toUpperCase()};oe.fn=oe.prototype={jquery:"1.11.2",constructor:oe,selector:"",length:0,toArray:function(){return Y.call(this)},get:function(e){return null!=e?e<0?this[e+this.length]:this[e]:Y.call(this)},pushStack:function(e){var t=oe.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return oe.each(this,e,t)},map:function(e){return this.pushStack(oe.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(Y.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:Q,sort:G.sort,splice:G.splice},oe.extend=oe.fn.extend=function(){var e,t,n,o,r,i,a=arguments[0]||{},s=1,l=arguments.length,u=!1;for("boolean"==typeof a&&(u=a,a=arguments[s]||{},s++),"object"==typeof a||oe.isFunction(a)||(a={}),s===l&&(a=this,s--);s<l;s++)if(null!=(r=arguments[s]))for(o in r)e=a[o],n=r[o],a!==n&&(u&&n&&(oe.isPlainObject(n)||(t=oe.isArray(n)))?(t?(t=!1,i=e&&oe.isArray(e)?e:[]):i=e&&oe.isPlainObject(e)?e:{},a[o]=oe.extend(u,i,n)):void 0!==n&&(a[o]=n));return a},oe.extend({expando:"jQuery"+("1.11.2"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===oe.type(e)},isArray:Array.isArray||function(e){return"array"===oe.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!oe.isArray(e)&&e-parseFloat(e)+1>=0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},isPlainObject:function(e){var t;if(!e||"object"!==oe.type(e)||e.nodeType||oe.isWindow(e))return!1;try{if(e.constructor&&!te.call(e,"constructor")&&!te.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}if(ne.ownLast)for(t in e)return te.call(e,t);for(t in e);return void 0===t||te.call(e,t)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?J[ee.call(e)]||"object":typeof e},globalEval:function(t){t&&oe.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(ie,"ms-").replace(ae,se)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,o){var r=0,i=e.length,a=n(e);if(o){if(a)for(;r<i&&!1!==t.apply(e[r],o);r++);else for(r in e)if(!1===t.apply(e[r],o))break}else if(a)for(;r<i&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(re,"")},makeArray:function(e,t){var o=t||[];return null!=e&&(n(Object(e))?oe.merge(o,"string"==typeof e?[e]:e):Q.call(o,e)),o},inArray:function(e,t,n){var o;if(t){if(Z)return Z.call(t,e,n);for(o=t.length,n=n?n<0?Math.max(0,o+n):n:0;n<o;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,t){for(var n=+t.length,o=0,r=e.length;o<n;)e[r++]=t[o++];if(n!==n)for(;void 0!==t[o];)e[r++]=t[o++];return e.length=r,e},grep:function(e,t,n){for(var o=[],r=0,i=e.length,a=!n;r<i;r++)!t(e[r],r)!==a&&o.push(e[r]);return o},map:function(e,t,o){var r,i=0,a=e.length,s=n(e),l=[];if(s)for(;i<a;i++)null!=(r=t(e[i],i,o))&&l.push(r);else for(i in e)null!=(r=t(e[i],i,o))&&l.push(r);return K.apply([],l)},guid:1,proxy:function(e,t){var n,o,r;if("string"==typeof t&&(r=e[t],t=e,e=r),oe.isFunction(e))return n=Y.call(arguments,2),o=function(){return e.apply(t||this,n.concat(Y.call(arguments)))},o.guid=e.guid=e.guid||oe.guid++,o},now:function(){return+new Date},support:ne}),oe.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){J["[object "+t+"]"]=t.toLowerCase()});var le=/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
function(e){function t(e,t,n,o){var r,i,a,s,u,f,d,p,m,h;if((t?t.ownerDocument||t:z)!==P&&N(t),t=t||P,n=n||[],s=t.nodeType,"string"!=typeof e||!e||1!==s&&9!==s&&11!==s)return n;if(!o&&D){if(11!==s&&(r=ye.exec(e)))if(a=r[1]){if(9===s){if(!(i=t.getElementById(a))||!i.parentNode)return n;if(i.id===a)return n.push(i),n}else if(t.ownerDocument&&(i=t.ownerDocument.getElementById(a))&&M(t,i)&&i.id===a)return n.push(i),n}else{if(r[2])return K.apply(n,t.getElementsByTagName(e)),n;if((a=r[3])&&w.getElementsByClassName)return K.apply(n,t.getElementsByClassName(a)),n}if(w.qsa&&(!L||!L.test(e))){if(p=d=F,m=t,h=1!==s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(f=C(e),(d=t.getAttribute("id"))?p=d.replace(ve,"\\$&"):t.setAttribute("id",p),p="[id='"+p+"'] ",u=f.length;u--;)f[u]=p+c(f[u]);m=ge.test(e)&&l(t.parentNode)||t,h=f.join(",")}if(h)try{return K.apply(n,m.querySelectorAll(h)),n}catch(e){}finally{d||t.removeAttribute("id")}}}return T(e.replace(ae,"$1"),t,n,o)}function n(){function e(n,o){return t.push(n+" ")>b.cacheLength&&delete e[t.shift()],e[n+" "]=o}var t=[];return e}function o(e){return e[F]=!0,e}function r(e){var t=P.createElement("div");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function i(e,t){for(var n=e.split("|"),o=e.length;o--;)b.attrHandle[n[o]]=t}function a(e,t){var n=t&&e,o=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||q)-(~e.sourceIndex||q);if(o)return o;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function s(e){return o(function(t){return t=+t,o(function(n,o){for(var r,i=e([],n.length,t),a=i.length;a--;)n[r=i[a]]&&(n[r]=!(o[r]=n[r]))})})}function l(e){return e&&void 0!==e.getElementsByTagName&&e}function u(){}function c(e){for(var t=0,n=e.length,o="";t<n;t++)o+=e[t].value;return o}function f(e,t,n){var o=t.dir,r=n&&"parentNode"===o,i=H++;return t.first?function(t,n,i){for(;t=t[o];)if(1===t.nodeType||r)return e(t,n,i)}:function(t,n,a){var s,l,u=[R,i];if(a){for(;t=t[o];)if((1===t.nodeType||r)&&e(t,n,a))return!0}else for(;t=t[o];)if(1===t.nodeType||r){if(l=t[F]||(t[F]={}),(s=l[o])&&s[0]===R&&s[1]===i)return u[2]=s[2];if(l[o]=u,u[2]=e(t,n,a))return!0}}}function d(e){return e.length>1?function(t,n,o){for(var r=e.length;r--;)if(!e[r](t,n,o))return!1;return!0}:e[0]}function p(e,n,o){for(var r=0,i=n.length;r<i;r++)t(e,n[r],o);return o}function m(e,t,n,o,r){for(var i,a=[],s=0,l=e.length,u=null!=t;s<l;s++)(i=e[s])&&(n&&!n(i,o,r)||(a.push(i),u&&t.push(s)));return a}function h(e,t,n,r,i,a){return r&&!r[F]&&(r=h(r)),i&&!i[F]&&(i=h(i,a)),o(function(o,a,s,l){var u,c,f,d=[],h=[],y=a.length,g=o||p(t||"*",s.nodeType?[s]:s,[]),v=!e||!o&&t?g:m(g,d,e,s,l),w=n?i||(o?e:y||r)?[]:a:v;if(n&&n(v,w,s,l),r)for(u=m(w,h),r(u,[],s,l),c=u.length;c--;)(f=u[c])&&(w[h[c]]=!(v[h[c]]=f));if(o){if(i||e){if(i){for(u=[],c=w.length;c--;)(f=w[c])&&u.push(v[c]=f);i(null,w=[],u,l)}for(c=w.length;c--;)(f=w[c])&&(u=i?Z(o,f):d[c])>-1&&(o[u]=!(a[u]=f))}}else w=m(w===a?w.splice(y,w.length):w),i?i(null,a,w,l):K.apply(a,w)})}function y(e){for(var t,n,o,r=e.length,i=b.relative[e[0].type],a=i||b.relative[" "],s=i?1:0,l=f(function(e){return e===t},a,!0),u=f(function(e){return Z(t,e)>-1},a,!0),p=[function(e,n,o){var r=!i&&(o||n!==k)||((t=n).nodeType?l(e,n,o):u(e,n,o));return t=null,r}];s<r;s++)if(n=b.relative[e[s].type])p=[f(d(p),n)];else{if(n=b.filter[e[s].type].apply(null,e[s].matches),n[F]){for(o=++s;o<r&&!b.relative[e[o].type];o++);return h(s>1&&d(p),s>1&&c(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ae,"$1"),n,s<o&&y(e.slice(s,o)),o<r&&y(e=e.slice(o)),o<r&&c(e))}p.push(n)}return d(p)}function g(e,n){var r=n.length>0,i=e.length>0,a=function(o,a,s,l,u){var c,f,d,p=0,h="0",y=o&&[],g=[],v=k,w=o||i&&b.find.TAG("*",u),_=R+=null==v?1:Math.random()||.1,x=w.length;for(u&&(k=a!==P&&a);h!==x&&null!=(c=w[h]);h++){if(i&&c){for(f=0;d=e[f++];)if(d(c,a,s)){l.push(c);break}u&&(R=_)}r&&((c=!d&&c)&&p--,o&&y.push(c))}if(p+=h,r&&h!==p){for(f=0;d=n[f++];)d(y,g,a,s);if(o){if(p>0)for(;h--;)y[h]||g[h]||(g[h]=G.call(l));g=m(g)}K.apply(l,g),u&&!o&&g.length>0&&p+n.length>1&&t.uniqueSort(l)}return u&&(R=_,k=v),y};return r?o(a):a}var v,w,b,_,x,C,S,T,k,E,A,N,P,I,D,L,j,$,M,F="sizzle"+1*new Date,z=e.document,R=0,H=0,O=n(),B=n(),V=n(),W=function(e,t){return e===t&&(A=!0),0},q=1<<31,X={}.hasOwnProperty,U=[],G=U.pop,Y=U.push,K=U.push,Q=U.slice,Z=function(e,t){for(var n=0,o=e.length;n<o;n++)if(e[n]===t)return n;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ee="[\\x20\\t\\r\\n\\f]",te="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ne=te.replace("w","w#"),oe="\\["+ee+"*("+te+")(?:"+ee+"*([*^$|!~]?=)"+ee+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ne+"))|)"+ee+"*\\]",re=":("+te+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+oe+")*)|.*)\\)|)",ie=new RegExp(ee+"+","g"),ae=new RegExp("^"+ee+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ee+"+$","g"),se=new RegExp("^"+ee+"*,"+ee+"*"),le=new RegExp("^"+ee+"*([>+~]|"+ee+")"+ee+"*"),ue=new RegExp("="+ee+"*([^\\]'\"]*?)"+ee+"*\\]","g"),ce=new RegExp(re),fe=new RegExp("^"+ne+"$"),de={ID:new RegExp("^#("+te+")"),CLASS:new RegExp("^\\.("+te+")"),TAG:new RegExp("^("+te.replace("w","w*")+")"),ATTR:new RegExp("^"+oe),PSEUDO:new RegExp("^"+re),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ee+"*(even|odd|(([+-]|)(\\d*)n|)"+ee+"*(?:([+-]|)"+ee+"*(\\d+)|))"+ee+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+ee+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ee+"*((?:-\\d)?\\d*)"+ee+"*\\)|)(?=[^-]|$)","i")},pe=/^(?:input|select|textarea|button)$/i,me=/^h\d$/i,he=/^[^{]+\{\s*\[native \w/,ye=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ge=/[+~]/,ve=/'|\\/g,we=new RegExp("\\\\([\\da-f]{1,6}"+ee+"?|("+ee+")|.)","ig"),be=function(e,t,n){var o="0x"+t-65536;return o!==o||n?t:o<0?String.fromCharCode(o+65536):String.fromCharCode(o>>10|55296,1023&o|56320)},_e=function(){N()};try{K.apply(U=Q.call(z.childNodes),z.childNodes),U[z.childNodes.length].nodeType}catch(e){K={apply:U.length?function(e,t){Y.apply(e,Q.call(t))}:function(e,t){for(var n=e.length,o=0;e[n++]=t[o++];);e.length=n-1}}}w=t.support={},x=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},N=t.setDocument=function(e){var t,n,o=e?e.ownerDocument||e:z;return o!==P&&9===o.nodeType&&o.documentElement?(P=o,I=o.documentElement,n=o.defaultView,n&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",_e,!1):n.attachEvent&&n.attachEvent("onunload",_e)),D=!x(o),w.attributes=r(function(e){return e.className="i",!e.getAttribute("className")}),w.getElementsByTagName=r(function(e){return e.appendChild(o.createComment("")),!e.getElementsByTagName("*").length}),w.getElementsByClassName=he.test(o.getElementsByClassName),w.getById=r(function(e){return I.appendChild(e).id=F,!o.getElementsByName||!o.getElementsByName(F).length}),w.getById?(b.find.ID=function(e,t){if(void 0!==t.getElementById&&D){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},b.filter.ID=function(e){var t=e.replace(we,be);return function(e){return e.getAttribute("id")===t}}):(delete b.find.ID,b.filter.ID=function(e){var t=e.replace(we,be);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),b.find.TAG=w.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):w.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,o=[],r=0,i=t.getElementsByTagName(e);if("*"===e){for(;n=i[r++];)1===n.nodeType&&o.push(n);return o}return i},b.find.CLASS=w.getElementsByClassName&&function(e,t){if(D)return t.getElementsByClassName(e)},j=[],L=[],(w.qsa=he.test(o.querySelectorAll))&&(r(function(e){I.appendChild(e).innerHTML="<a id='"+F+"'></a><select id='"+F+"-\f]' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&L.push("[*^$]="+ee+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||L.push("\\["+ee+"*(?:value|"+J+")"),e.querySelectorAll("[id~="+F+"-]").length||L.push("~="),e.querySelectorAll(":checked").length||L.push(":checked"),e.querySelectorAll("a#"+F+"+*").length||L.push(".#.+[+~]")}),r(function(e){var t=o.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&L.push("name"+ee+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||L.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),L.push(",.*:")})),(w.matchesSelector=he.test($=I.matches||I.webkitMatchesSelector||I.mozMatchesSelector||I.oMatchesSelector||I.msMatchesSelector))&&r(function(e){w.disconnectedMatch=$.call(e,"div"),$.call(e,"[s!='']:x"),j.push("!=",re)}),L=L.length&&new RegExp(L.join("|")),j=j.length&&new RegExp(j.join("|")),t=he.test(I.compareDocumentPosition),M=t||he.test(I.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,o=t&&t.parentNode;return e===o||!(!o||1!==o.nodeType||!(n.contains?n.contains(o):e.compareDocumentPosition&&16&e.compareDocumentPosition(o)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},W=t?function(e,t){if(e===t)return A=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!w.sortDetached&&t.compareDocumentPosition(e)===n?e===o||e.ownerDocument===z&&M(z,e)?-1:t===o||t.ownerDocument===z&&M(z,t)?1:E?Z(E,e)-Z(E,t):0:4&n?-1:1)}:function(e,t){if(e===t)return A=!0,0;var n,r=0,i=e.parentNode,s=t.parentNode,l=[e],u=[t];if(!i||!s)return e===o?-1:t===o?1:i?-1:s?1:E?Z(E,e)-Z(E,t):0;if(i===s)return a(e,t);for(n=e;n=n.parentNode;)l.unshift(n);for(n=t;n=n.parentNode;)u.unshift(n);for(;l[r]===u[r];)r++;return r?a(l[r],u[r]):l[r]===z?-1:u[r]===z?1:0},o):P},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==P&&N(e),n=n.replace(ue,"='$1']"),w.matchesSelector&&D&&(!j||!j.test(n))&&(!L||!L.test(n)))try{var o=$.call(e,n);if(o||w.disconnectedMatch||e.document&&11!==e.document.nodeType)return o}catch(e){}return t(n,P,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==P&&N(e),M(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==P&&N(e);var n=b.attrHandle[t.toLowerCase()],o=n&&X.call(b.attrHandle,t.toLowerCase())?n(e,t,!D):void 0;return void 0!==o?o:w.attributes||!D?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],o=0,r=0;if(A=!w.detectDuplicates,E=!w.sortStable&&e.slice(0),e.sort(W),A){for(;t=e[r++];)t===e[r]&&(o=n.push(r));for(;o--;)e.splice(n[o],1)}return E=null,e},_=t.getText=function(e){var t,n="",o=0,r=e.nodeType;if(r){if(1===r||9===r||11===r){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=_(e)}else if(3===r||4===r)return e.nodeValue}else for(;t=e[o++];)n+=_(t);return n},b=t.selectors={cacheLength:50,createPseudo:o,match:de,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(we,be),e[3]=(e[3]||e[4]||e[5]||"").replace(we,be),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return de.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&ce.test(n)&&(t=C(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(we,be).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=O[e+" "];return t||(t=new RegExp("(^|"+ee+")"+e+"("+ee+"|$)"))&&O(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,o){return function(r){var i=t.attr(r,e);return null==i?"!="===n:!n||(i+="","="===n?i===o:"!="===n?i!==o:"^="===n?o&&0===i.indexOf(o):"*="===n?o&&i.indexOf(o)>-1:"$="===n?o&&i.slice(-o.length)===o:"~="===n?(" "+i.replace(ie," ")+" ").indexOf(o)>-1:"|="===n&&(i===o||i.slice(0,o.length+1)===o+"-"))}},CHILD:function(e,t,n,o,r){var i="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===o&&0===r?function(e){return!!e.parentNode}:function(t,n,l){var u,c,f,d,p,m,h=i!==a?"nextSibling":"previousSibling",y=t.parentNode,g=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(y){if(i){for(;h;){for(f=t;f=f[h];)if(s?f.nodeName.toLowerCase()===g:1===f.nodeType)return!1;m=h="only"===e&&!m&&"nextSibling"}return!0}if(m=[a?y.firstChild:y.lastChild],a&&v){for(c=y[F]||(y[F]={}),u=c[e]||[],p=u[0]===R&&u[1],d=u[0]===R&&u[2],f=p&&y.childNodes[p];f=++p&&f&&f[h]||(d=p=0)||m.pop();)if(1===f.nodeType&&++d&&f===t){c[e]=[R,p,d];break}}else if(v&&(u=(t[F]||(t[F]={}))[e])&&u[0]===R)d=u[1];else for(;(f=++p&&f&&f[h]||(d=p=0)||m.pop())&&((s?f.nodeName.toLowerCase()!==g:1!==f.nodeType)||!++d||(v&&((f[F]||(f[F]={}))[e]=[R,d]),f!==t)););return(d-=r)===o||d%o==0&&d/o>=0}}},PSEUDO:function(e,n){var r,i=b.pseudos[e]||b.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return i[F]?i(n):i.length>1?(r=[e,e,"",n],b.setFilters.hasOwnProperty(e.toLowerCase())?o(function(e,t){for(var o,r=i(e,n),a=r.length;a--;)o=Z(e,r[a]),e[o]=!(t[o]=r[a])}):function(e){return i(e,0,r)}):i}},pseudos:{not:o(function(e){var t=[],n=[],r=S(e.replace(ae,"$1"));return r[F]?o(function(e,t,n,o){for(var i,a=r(e,null,o,[]),s=e.length;s--;)(i=a[s])&&(e[s]=!(t[s]=i))}):function(e,o,i){return t[0]=e,r(t,null,i,n),t[0]=null,!n.pop()}}),has:o(function(e){return function(n){return t(e,n).length>0}}),contains:o(function(e){return e=e.replace(we,be),function(t){return(t.textContent||t.innerText||_(t)).indexOf(e)>-1}}),lang:o(function(e){return fe.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(we,be).toLowerCase(),function(t){var n;do{if(n=D?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===I},focus:function(e){return e===P.activeElement&&(!P.hasFocus||P.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return me.test(e.nodeName)},input:function(e){return pe.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:s(function(){return[0]}),last:s(function(e,t){return[t-1]}),eq:s(function(e,t,n){return[n<0?n+t:n]}),even:s(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:s(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:s(function(e,t,n){for(var o=n<0?n+t:n;--o>=0;)e.push(o);return e}),gt:s(function(e,t,n){for(var o=n<0?n+t:n;++o<t;)e.push(o);return e})}},b.pseudos.nth=b.pseudos.eq;for(v in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[v]=function(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}(v);for(v in{submit:!0,reset:!0})b.pseudos[v]=function(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}(v);return u.prototype=b.filters=b.pseudos,b.setFilters=new u,C=t.tokenize=function(e,n){var o,r,i,a,s,l,u,c=B[e+" "];if(c)return n?0:c.slice(0);for(s=e,l=[],u=b.preFilter;s;){o&&!(r=se.exec(s))||(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),o=!1,(r=le.exec(s))&&(o=r.shift(),i.push({value:o,type:r[0].replace(ae," ")}),s=s.slice(o.length));for(a in b.filter)!(r=de[a].exec(s))||u[a]&&!(r=u[a](r))||(o=r.shift(),i.push({value:o,type:a,matches:r}),s=s.slice(o.length));if(!o)break}return n?s.length:s?t.error(e):B(e,l).slice(0)},S=t.compile=function(e,t){var n,o=[],r=[],i=V[e+" "];if(!i){for(t||(t=C(e)),n=t.length;n--;)i=y(t[n]),i[F]?o.push(i):r.push(i);i=V(e,g(r,o)),i.selector=e}return i},T=t.select=function(e,t,n,o){var r,i,a,s,u,f="function"==typeof e&&e,d=!o&&C(e=f.selector||e);if(n=n||[],1===d.length){if(i=d[0]=d[0].slice(0),i.length>2&&"ID"===(a=i[0]).type&&w.getById&&9===t.nodeType&&D&&b.relative[i[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(we,be),t)||[])[0]))return n;f&&(t=t.parentNode),e=e.slice(i.shift().value.length)}for(r=de.needsContext.test(e)?0:i.length;r--&&(a=i[r],!b.relative[s=a.type]);)if((u=b.find[s])&&(o=u(a.matches[0].replace(we,be),ge.test(i[0].type)&&l(t.parentNode)||t))){if(i.splice(r,1),!(e=o.length&&c(i)))return K.apply(n,o),n;break}}return(f||S(e,d))(o,t,!D,n,ge.test(e)&&l(t.parentNode)||t),n},w.sortStable=F.split("").sort(W).join("")===F,w.detectDuplicates=!!A,N(),w.sortDetached=r(function(e){return 1&e.compareDocumentPosition(P.createElement("div"))}),r(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||i("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),w.attributes&&r(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||i("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),r(function(e){return null==e.getAttribute("disabled")})||i(J,function(e,t,n){var o;if(!n)return!0===e[t]?t.toLowerCase():(o=e.getAttributeNode(t))&&o.specified?o.value:null}),t}(e);oe.find=le,oe.expr=le.selectors,oe.expr[":"]=oe.expr.pseudos,oe.unique=le.uniqueSort,oe.text=le.getText,oe.isXMLDoc=le.isXML,oe.contains=le.contains;var ue=oe.expr.match.needsContext,ce=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,fe=/^.[^:#\[\.,]*$/;oe.filter=function(e,t,n){var o=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===o.nodeType?oe.find.matchesSelector(o,e)?[o]:[]:oe.find.matches(e,oe.grep(t,function(e){return 1===e.nodeType}))},oe.fn.extend({find:function(e){var t,n=[],o=this,r=o.length;if("string"!=typeof e)return this.pushStack(oe(e).filter(function(){for(t=0;t<r;t++)if(oe.contains(o[t],this))return!0}));for(t=0;t<r;t++)oe.find(e,o[t],n);return n=this.pushStack(r>1?oe.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},filter:function(e){return this.pushStack(o(this,e||[],!1))},not:function(e){return this.pushStack(o(this,e||[],!0))},is:function(e){return!!o(this,"string"==typeof e&&ue.test(e)?oe(e):e||[],!1).length}});var de,pe=e.document,me=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(oe.fn.init=function(e,t){var n,o;if(!e)return this;if("string"==typeof e){if(!(n="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:me.exec(e))||!n[1]&&t)return!t||t.jquery?(t||de).find(e):this.constructor(t).find(e);if(n[1]){if(t=t instanceof oe?t[0]:t,oe.merge(this,oe.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:pe,!0)),ce.test(n[1])&&oe.isPlainObject(t))for(n in t)oe.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}if((o=pe.getElementById(n[2]))&&o.parentNode){if(o.id!==n[2])return de.find(e);this.length=1,this[0]=o}return this.context=pe,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):oe.isFunction(e)?void 0!==de.ready?de.ready(e):e(oe):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),oe.makeArray(e,this))}).prototype=oe.fn,de=oe(pe);var he=/^(?:parents|prev(?:Until|All))/,ye={children:!0,contents:!0,next:!0,prev:!0};oe.extend({dir:function(e,t,n){for(var o=[],r=e[t];r&&9!==r.nodeType&&(void 0===n||1!==r.nodeType||!oe(r).is(n));)1===r.nodeType&&o.push(r),r=r[t];return o},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),oe.fn.extend({has:function(e){var t,n=oe(e,this),o=n.length;return this.filter(function(){for(t=0;t<o;t++)if(oe.contains(this,n[t]))return!0})},closest:function(e,t){for(var n,o=0,r=this.length,i=[],a=ue.test(e)||"string"!=typeof e?oe(e,t||this.context):0;o<r;o++)for(n=this[o];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&oe.find.matchesSelector(n,e))){i.push(n);break}return this.pushStack(i.length>1?oe.unique(i):i)},index:function(e){return e?"string"==typeof e?oe.inArray(this[0],oe(e)):oe.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(oe.unique(oe.merge(this.get(),oe(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),oe.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return oe.dir(e,"parentNode")},parentsUntil:function(e,t,n){return oe.dir(e,"parentNode",n)},next:function(e){return r(e,"nextSibling")},prev:function(e){return r(e,"previousSibling")},nextAll:function(e){return oe.dir(e,"nextSibling")},prevAll:function(e){return oe.dir(e,"previousSibling")},nextUntil:function(e,t,n){return oe.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return oe.dir(e,"previousSibling",n)},siblings:function(e){return oe.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return oe.sibling(e.firstChild)},contents:function(e){return oe.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:oe.merge([],e.childNodes)}},function(e,t){oe.fn[e]=function(n,o){var r=oe.map(this,t,n);return"Until"!==e.slice(-5)&&(o=n),o&&"string"==typeof o&&(r=oe.filter(o,r)),this.length>1&&(ye[e]||(r=oe.unique(r)),he.test(e)&&(r=r.reverse())),this.pushStack(r)}});var ge=/\S+/g,ve={};oe.Callbacks=function(e){e="string"==typeof e?ve[e]||i(e):oe.extend({},e);var t,n,o,r,a,s,l=[],u=!e.once&&[],c=function(i){for(n=e.memory&&i,o=!0,a=s||0,s=0,r=l.length,t=!0;l&&a<r;a++)if(!1===l[a].apply(i[0],i[1])&&e.stopOnFalse){n=!1;break}t=!1,l&&(u?u.length&&c(u.shift()):n?l=[]:f.disable())},f={add:function(){if(l){var o=l.length;!function t(n){oe.each(n,function(n,o){var r=oe.type(o);"function"===r?e.unique&&f.has(o)||l.push(o):o&&o.length&&"string"!==r&&t(o)})}(arguments),t?r=l.length:n&&(s=o,c(n))}return this},remove:function(){return l&&oe.each(arguments,function(e,n){for(var o;(o=oe.inArray(n,l,o))>-1;)l.splice(o,1),t&&(o<=r&&r--,o<=a&&a--)}),this},has:function(e){return e?oe.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],r=0,this},disable:function(){return l=u=n=void 0,this},disabled:function(){return!l},lock:function(){return u=void 0,n||f.disable(),this},locked:function(){return!u},fireWith:function(e,n){return!l||o&&!u||(n=n||[],n=[e,n.slice?n.slice():n],t?u.push(n):c(n)),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},oe.extend({Deferred:function(e){var t=[["resolve","done",oe.Callbacks("once memory"),"resolved"],["reject","fail",oe.Callbacks("once memory"),"rejected"],["notify","progress",oe.Callbacks("memory")]],n="pending",o={state:function(){return n},always:function(){return r.done(arguments).fail(arguments),this},then:function(){var e=arguments;return oe.Deferred(function(n){oe.each(t,function(t,i){var a=oe.isFunction(e[t])&&e[t];r[i[1]](function(){var e=a&&a.apply(this,arguments);e&&oe.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[i[0]+"With"](this===o?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?oe.extend(e,o):o}},r={};return o.pipe=o.then,oe.each(t,function(e,i){var a=i[2],s=i[3];o[i[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),r[i[0]]=function(){return r[i[0]+"With"](this===r?o:this,arguments),this},r[i[0]+"With"]=a.fireWith}),o.promise(r),e&&e.call(r,r),r},when:function(e){var t,n,o,r=0,i=Y.call(arguments),a=i.length,s=1!==a||e&&oe.isFunction(e.promise)?a:0,l=1===s?e:oe.Deferred(),u=function(e,n,o){return function(r){n[e]=this,o[e]=arguments.length>1?Y.call(arguments):r,o===t?l.notifyWith(n,o):--s||l.resolveWith(n,o)}};if(a>1)for(t=new Array(a),n=new Array(a),o=new Array(a);r<a;r++)i[r]&&oe.isFunction(i[r].promise)?i[r].promise().done(u(r,o,i)).fail(l.reject).progress(u(r,n,t)):--s;return s||l.resolveWith(o,i),l.promise()}});var we;oe.fn.ready=function(e){return oe.ready.promise().done(e),this},oe.extend({isReady:!1,readyWait:1,holdReady:function(e){e?oe.readyWait++:oe.ready(!0)},ready:function(e){if(!0===e?!--oe.readyWait:!oe.isReady){if(!pe.body)return setTimeout(oe.ready);oe.isReady=!0,!0!==e&&--oe.readyWait>0||(we.resolveWith(pe,[oe]),oe.fn.triggerHandler&&(oe(pe).triggerHandler("ready"),oe(pe).off("ready")))}}}),oe.ready.promise=function(t){if(!we)if(we=oe.Deferred(),"complete"===pe.readyState)setTimeout(oe.ready);else if(pe.addEventListener)pe.addEventListener("DOMContentLoaded",s,!1),e.addEventListener("load",s,!1);else{pe.attachEvent("onreadystatechange",s),e.attachEvent("onload",s);var n=!1;try{n=null==e.frameElement&&pe.documentElement}catch(e){}n&&n.doScroll&&function e(){if(!oe.isReady){try{n.doScroll("left")}catch(t){return setTimeout(e,50)}a(),oe.ready()}}()}return we.promise(t)};var be,_e="undefined";for(be in oe(ne))break;ne.ownLast="0"!==be,ne.inlineBlockNeedsLayout=!1,oe(function(){var e,t,n,o;(n=pe.getElementsByTagName("body")[0])&&n.style&&(t=pe.createElement("div"),o=pe.createElement("div"),o.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(o).appendChild(t),typeof t.style.zoom!==_e&&(t.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",ne.inlineBlockNeedsLayout=e=3===t.offsetWidth,e&&(n.style.zoom=1)),n.removeChild(o))}),function(){var e=pe.createElement("div");if(null==ne.deleteExpando){ne.deleteExpando=!0;try{delete e.test}catch(e){ne.deleteExpando=!1}}e=null}(),oe.acceptData=function(e){var t=oe.noData[(e.nodeName+" ").toLowerCase()],n=+e.nodeType||1;return(1===n||9===n)&&(!t||!0!==t&&e.getAttribute("classid")===t)};var xe=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ce=/([A-Z])/g;oe.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return!!(e=e.nodeType?oe.cache[e[oe.expando]]:e[oe.expando])&&!u(e)},data:function(e,t,n){return c(e,t,n)},removeData:function(e,t){return f(e,t)},_data:function(e,t,n){return c(e,t,n,!0)},_removeData:function(e,t){return f(e,t,!0)}}),oe.fn.extend({data:function(e,t){var n,o,r,i=this[0],a=i&&i.attributes;if(void 0===e){if(this.length&&(r=oe.data(i),1===i.nodeType&&!oe._data(i,"parsedAttrs"))){for(n=a.length;n--;)a[n]&&(o=a[n].name,0===o.indexOf("data-")&&(o=oe.camelCase(o.slice(5)),l(i,o,r[o])));oe._data(i,"parsedAttrs",!0)}return r}return"object"==typeof e?this.each(function(){oe.data(this,e)}):arguments.length>1?this.each(function(){oe.data(this,e,t)}):i?l(i,e,oe.data(i,e)):void 0},removeData:function(e){return this.each(function(){oe.removeData(this,e)})}}),oe.extend({queue:function(e,t,n){var o;if(e)return t=(t||"fx")+"queue",o=oe._data(e,t),n&&(!o||oe.isArray(n)?o=oe._data(e,t,oe.makeArray(n)):o.push(n)),o||[]},dequeue:function(e,t){t=t||"fx";var n=oe.queue(e,t),o=n.length,r=n.shift(),i=oe._queueHooks(e,t),a=function(){oe.dequeue(e,t)};"inprogress"===r&&(r=n.shift(),o--),r&&("fx"===t&&n.unshift("inprogress"),delete i.stop,r.call(e,a,i)),!o&&i&&i.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return oe._data(e,n)||oe._data(e,n,{empty:oe.Callbacks("once memory").add(function(){oe._removeData(e,t+"queue"),oe._removeData(e,n)})})}}),oe.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?oe.queue(this[0],e):void 0===t?this:this.each(function(){var n=oe.queue(this,e,t);oe._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&oe.dequeue(this,e)})},dequeue:function(e){return this.each(function(){oe.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,o=1,r=oe.Deferred(),i=this,a=this.length,s=function(){--o||r.resolveWith(i,[i])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=oe._data(i[a],e+"queueHooks"))&&n.empty&&(o++,n.empty.add(s));return s(),r.promise(t)}});var Se=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Te=["Top","Right","Bottom","Left"],ke=function(e,t){return e=t||e,"none"===oe.css(e,"display")||!oe.contains(e.ownerDocument,e)},Ee=oe.access=function(e,t,n,o,r,i,a){var s=0,l=e.length,u=null==n;if("object"===oe.type(n)){r=!0;for(s in n)oe.access(e,t,s,n[s],!0,i,a)}else if(void 0!==o&&(r=!0,oe.isFunction(o)||(a=!0),u&&(a?(t.call(e,o),t=null):(u=t,t=function(e,t,n){return u.call(oe(e),n)})),t))for(;s<l;s++)t(e[s],n,a?o:o.call(e[s],s,t(e[s],n)));return r?e:u?t.call(e):l?t(e[0],n):i},Ae=/^(?:checkbox|radio)$/i;!function(){var e=pe.createElement("input"),t=pe.createElement("div"),n=pe.createDocumentFragment();if(t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",ne.leadingWhitespace=3===t.firstChild.nodeType,ne.tbody=!t.getElementsByTagName("tbody").length,ne.htmlSerialize=!!t.getElementsByTagName("link").length,ne.html5Clone="<:nav></:nav>"!==pe.createElement("nav").cloneNode(!0).outerHTML,e.type="checkbox",e.checked=!0,n.appendChild(e),ne.appendChecked=e.checked,t.innerHTML="<textarea>x</textarea>",ne.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue,n.appendChild(t),t.innerHTML="<input type='radio' checked='checked' name='t'/>",ne.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,ne.noCloneEvent=!0,t.attachEvent&&(t.attachEvent("onclick",function(){ne.noCloneEvent=!1}),t.cloneNode(!0).click()),null==ne.deleteExpando){ne.deleteExpando=!0;try{delete t.test}catch(e){ne.deleteExpando=!1}}}(),function(){var t,n,o=pe.createElement("div");for(t in{submit:!0,change:!0,focusin:!0})n="on"+t,(ne[t+"Bubbles"]=n in e)||(o.setAttribute(n,"t"),ne[t+"Bubbles"]=!1===o.attributes[n].expando);o=null}();var Ne=/^(?:input|select|textarea)$/i,Pe=/^key/,Ie=/^(?:mouse|pointer|contextmenu)|click/,De=/^(?:focusinfocus|focusoutblur)$/,Le=/^([^.]*)(?:\.(.+)|)$/;oe.event={global:{},add:function(e,t,n,o,r){var i,a,s,l,u,c,f,d,p,m,h,y=oe._data(e);if(y){for(n.handler&&(l=n,n=l.handler,r=l.selector),n.guid||(n.guid=oe.guid++),(a=y.events)||(a=y.events={}),(c=y.handle)||(c=y.handle=function(e){return typeof oe===_e||e&&oe.event.triggered===e.type?void 0:oe.event.dispatch.apply(c.elem,arguments)},c.elem=e),t=(t||"").match(ge)||[""],s=t.length;s--;)i=Le.exec(t[s])||[],p=h=i[1],m=(i[2]||"").split(".").sort(),p&&(u=oe.event.special[p]||{},p=(r?u.delegateType:u.bindType)||p,u=oe.event.special[p]||{},f=oe.extend({type:p,origType:h,data:o,handler:n,guid:n.guid,selector:r,needsContext:r&&oe.expr.match.needsContext.test(r),namespace:m.join(".")},l),(d=a[p])||(d=a[p]=[],d.delegateCount=0,u.setup&&!1!==u.setup.call(e,o,m,c)||(e.addEventListener?e.addEventListener(p,c,!1):e.attachEvent&&e.attachEvent("on"+p,c))),u.add&&(u.add.call(e,f),f.handler.guid||(f.handler.guid=n.guid)),r?d.splice(d.delegateCount++,0,f):d.push(f),oe.event.global[p]=!0);e=null}},remove:function(e,t,n,o,r){var i,a,s,l,u,c,f,d,p,m,h,y=oe.hasData(e)&&oe._data(e);if(y&&(c=y.events)){for(t=(t||"").match(ge)||[""],u=t.length;u--;)if(s=Le.exec(t[u])||[],p=h=s[1],m=(s[2]||"").split(".").sort(),p){for(f=oe.event.special[p]||{},p=(o?f.delegateType:f.bindType)||p,d=c[p]||[],s=s[2]&&new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=i=d.length;i--;)a=d[i],
!r&&h!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||o&&o!==a.selector&&("**"!==o||!a.selector)||(d.splice(i,1),a.selector&&d.delegateCount--,f.remove&&f.remove.call(e,a));l&&!d.length&&(f.teardown&&!1!==f.teardown.call(e,m,y.handle)||oe.removeEvent(e,p,y.handle),delete c[p])}else for(p in c)oe.event.remove(e,p+t[u],n,o,!0);oe.isEmptyObject(c)&&(delete y.handle,oe._removeData(e,"events"))}},trigger:function(t,n,o,r){var i,a,s,l,u,c,f,d=[o||pe],p=te.call(t,"type")?t.type:t,m=te.call(t,"namespace")?t.namespace.split("."):[];if(s=c=o=o||pe,3!==o.nodeType&&8!==o.nodeType&&!De.test(p+oe.event.triggered)&&(p.indexOf(".")>=0&&(m=p.split("."),p=m.shift(),m.sort()),a=p.indexOf(":")<0&&"on"+p,t=t[oe.expando]?t:new oe.Event(p,"object"==typeof t&&t),t.isTrigger=r?2:3,t.namespace=m.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=o),n=null==n?[t]:oe.makeArray(n,[t]),u=oe.event.special[p]||{},r||!u.trigger||!1!==u.trigger.apply(o,n))){if(!r&&!u.noBubble&&!oe.isWindow(o)){for(l=u.delegateType||p,De.test(l+p)||(s=s.parentNode);s;s=s.parentNode)d.push(s),c=s;c===(o.ownerDocument||pe)&&d.push(c.defaultView||c.parentWindow||e)}for(f=0;(s=d[f++])&&!t.isPropagationStopped();)t.type=f>1?l:u.bindType||p,i=(oe._data(s,"events")||{})[t.type]&&oe._data(s,"handle"),i&&i.apply(s,n),(i=a&&s[a])&&i.apply&&oe.acceptData(s)&&(t.result=i.apply(s,n),!1===t.result&&t.preventDefault());if(t.type=p,!r&&!t.isDefaultPrevented()&&(!u._default||!1===u._default.apply(d.pop(),n))&&oe.acceptData(o)&&a&&o[p]&&!oe.isWindow(o)){c=o[a],c&&(o[a]=null),oe.event.triggered=p;try{o[p]()}catch(e){}oe.event.triggered=void 0,c&&(o[a]=c)}return t.result}},dispatch:function(e){e=oe.event.fix(e);var t,n,o,r,i,a=[],s=Y.call(arguments),l=(oe._data(this,"events")||{})[e.type]||[],u=oe.event.special[e.type]||{};if(s[0]=e,e.delegateTarget=this,!u.preDispatch||!1!==u.preDispatch.call(this,e)){for(a=oe.event.handlers.call(this,e,l),t=0;(r=a[t++])&&!e.isPropagationStopped();)for(e.currentTarget=r.elem,i=0;(o=r.handlers[i++])&&!e.isImmediatePropagationStopped();)e.namespace_re&&!e.namespace_re.test(o.namespace)||(e.handleObj=o,e.data=o.data,void 0!==(n=((oe.event.special[o.origType]||{}).handle||o.handler).apply(r.elem,s))&&!1===(e.result=n)&&(e.preventDefault(),e.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,o,r,i,a=[],s=t.delegateCount,l=e.target;if(s&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(!0!==l.disabled||"click"!==e.type)){for(r=[],i=0;i<s;i++)o=t[i],n=o.selector+" ",void 0===r[n]&&(r[n]=o.needsContext?oe(n,this).index(l)>=0:oe.find(n,this,null,[l]).length),r[n]&&r.push(o);r.length&&a.push({elem:l,handlers:r})}return s<t.length&&a.push({elem:this,handlers:t.slice(s)}),a},fix:function(e){if(e[oe.expando])return e;var t,n,o,r=e.type,i=e,a=this.fixHooks[r];for(a||(this.fixHooks[r]=a=Ie.test(r)?this.mouseHooks:Pe.test(r)?this.keyHooks:{}),o=a.props?this.props.concat(a.props):this.props,e=new oe.Event(i),t=o.length;t--;)n=o[t],e[n]=i[n];return e.target||(e.target=i.srcElement||pe),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,a.filter?a.filter(e,i):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,o,r,i=t.button,a=t.fromElement;return null==e.pageX&&null!=t.clientX&&(o=e.target.ownerDocument||pe,r=o.documentElement,n=o.body,e.pageX=t.clientX+(r&&r.scrollLeft||n&&n.scrollLeft||0)-(r&&r.clientLeft||n&&n.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||n&&n.scrollTop||0)-(r&&r.clientTop||n&&n.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?t.toElement:a),e.which||void 0===i||(e.which=1&i?1:2&i?3:4&i?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==m()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){if(this===m()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(oe.nodeName(this,"input")&&"checkbox"===this.type&&this.click)return this.click(),!1},_default:function(e){return oe.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,o){var r=oe.extend(new oe.Event,n,{type:e,isSimulated:!0,originalEvent:{}});o?oe.event.trigger(r,null,t):oe.event.dispatch.call(t,r),r.isDefaultPrevented()&&n.preventDefault()}},oe.removeEvent=pe.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var o="on"+t;e.detachEvent&&(typeof e[o]===_e&&(e[o]=null),e.detachEvent(o,n))},oe.Event=function(e,t){if(!(this instanceof oe.Event))return new oe.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?d:p):this.type=e,t&&oe.extend(this,t),this.timeStamp=e&&e.timeStamp||oe.now(),this[oe.expando]=!0},oe.Event.prototype={isDefaultPrevented:p,isPropagationStopped:p,isImmediatePropagationStopped:p,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=d,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=d,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=d,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},oe.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){oe.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,o=this,r=e.relatedTarget,i=e.handleObj;return r&&(r===o||oe.contains(o,r))||(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}}),ne.submitBubbles||(oe.event.special.submit={setup:function(){if(oe.nodeName(this,"form"))return!1;oe.event.add(this,"click._submit keypress._submit",function(e){var t=e.target,n=oe.nodeName(t,"input")||oe.nodeName(t,"button")?t.form:void 0;n&&!oe._data(n,"submitBubbles")&&(oe.event.add(n,"submit._submit",function(e){e._submit_bubble=!0}),oe._data(n,"submitBubbles",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&oe.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(oe.nodeName(this,"form"))return!1;oe.event.remove(this,"._submit")}}),ne.changeBubbles||(oe.event.special.change={setup:function(){if(Ne.test(this.nodeName))return"checkbox"!==this.type&&"radio"!==this.type||(oe.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),oe.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),oe.event.simulate("change",this,e,!0)})),!1;oe.event.add(this,"beforeactivate._change",function(e){var t=e.target;Ne.test(t.nodeName)&&!oe._data(t,"changeBubbles")&&(oe.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||oe.event.simulate("change",this.parentNode,e,!0)}),oe._data(t,"changeBubbles",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type)return e.handleObj.handler.apply(this,arguments)},teardown:function(){return oe.event.remove(this,"._change"),!Ne.test(this.nodeName)}}),ne.focusinBubbles||oe.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){oe.event.simulate(t,e.target,oe.event.fix(e),!0)};oe.event.special[t]={setup:function(){var o=this.ownerDocument||this,r=oe._data(o,t);r||o.addEventListener(e,n,!0),oe._data(o,t,(r||0)+1)},teardown:function(){var o=this.ownerDocument||this,r=oe._data(o,t)-1;r?oe._data(o,t,r):(o.removeEventListener(e,n,!0),oe._removeData(o,t))}}}),oe.fn.extend({on:function(e,t,n,o,r){var i,a;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=void 0);for(i in e)this.on(i,t,n,e[i],r);return this}if(null==n&&null==o?(o=t,n=t=void 0):null==o&&("string"==typeof t?(o=n,n=void 0):(o=n,n=t,t=void 0)),!1===o)o=p;else if(!o)return this;return 1===r&&(a=o,o=function(e){return oe().off(e),a.apply(this,arguments)},o.guid=a.guid||(a.guid=oe.guid++)),this.each(function(){oe.event.add(this,e,o,n,t)})},one:function(e,t,n,o){return this.on(e,t,n,o,1)},off:function(e,t,n){var o,r;if(e&&e.preventDefault&&e.handleObj)return o=e.handleObj,oe(e.delegateTarget).off(o.namespace?o.origType+"."+o.namespace:o.origType,o.selector,o.handler),this;if("object"==typeof e){for(r in e)this.off(r,t,e[r]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=p),this.each(function(){oe.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){oe.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return oe.event.trigger(e,t,n,!0)}});var je="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",$e=/ jQuery\d+="(?:null|\d+)"/g,Me=new RegExp("<(?:"+je+")[\\s/>]","i"),Fe=/^\s+/,ze=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Re=/<([\w:]+)/,He=/<tbody/i,Oe=/<|&#?\w+;/,Be=/<(?:script|style|link)/i,Ve=/checked\s*(?:[^=]|=\s*.checked.)/i,We=/^$|\/(?:java|ecma)script/i,qe=/^true\/(.*)/,Xe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Ue={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:ne.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},Ge=h(pe),Ye=Ge.appendChild(pe.createElement("div"));Ue.optgroup=Ue.option,Ue.tbody=Ue.tfoot=Ue.colgroup=Ue.caption=Ue.thead,Ue.th=Ue.td,oe.extend({clone:function(e,t,n){var o,r,i,a,s,l=oe.contains(e.ownerDocument,e);if(ne.html5Clone||oe.isXMLDoc(e)||!Me.test("<"+e.nodeName+">")?i=e.cloneNode(!0):(Ye.innerHTML=e.outerHTML,Ye.removeChild(i=Ye.firstChild)),!(ne.noCloneEvent&&ne.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||oe.isXMLDoc(e)))for(o=y(i),s=y(e),a=0;null!=(r=s[a]);++a)o[a]&&C(r,o[a]);if(t)if(n)for(s=s||y(e),o=o||y(i),a=0;null!=(r=s[a]);a++)x(r,o[a]);else x(e,i);return o=y(i,"script"),o.length>0&&_(o,!l&&y(e,"script")),o=s=r=null,i},buildFragment:function(e,t,n,o){for(var r,i,a,s,l,u,c,f=e.length,d=h(t),p=[],m=0;m<f;m++)if((i=e[m])||0===i)if("object"===oe.type(i))oe.merge(p,i.nodeType?[i]:i);else if(Oe.test(i)){for(s=s||d.appendChild(t.createElement("div")),l=(Re.exec(i)||["",""])[1].toLowerCase(),c=Ue[l]||Ue._default,s.innerHTML=c[1]+i.replace(ze,"<$1></$2>")+c[2],r=c[0];r--;)s=s.lastChild;if(!ne.leadingWhitespace&&Fe.test(i)&&p.push(t.createTextNode(Fe.exec(i)[0])),!ne.tbody)for(i="table"!==l||He.test(i)?"<table>"!==c[1]||He.test(i)?0:s:s.firstChild,r=i&&i.childNodes.length;r--;)oe.nodeName(u=i.childNodes[r],"tbody")&&!u.childNodes.length&&i.removeChild(u);for(oe.merge(p,s.childNodes),s.textContent="";s.firstChild;)s.removeChild(s.firstChild);s=d.lastChild}else p.push(t.createTextNode(i));for(s&&d.removeChild(s),ne.appendChecked||oe.grep(y(p,"input"),g),m=0;i=p[m++];)if((!o||-1===oe.inArray(i,o))&&(a=oe.contains(i.ownerDocument,i),s=y(d.appendChild(i),"script"),a&&_(s),n))for(r=0;i=s[r++];)We.test(i.type||"")&&n.push(i);return s=null,d},cleanData:function(e,t){for(var n,o,r,i,a=0,s=oe.expando,l=oe.cache,u=ne.deleteExpando,c=oe.event.special;null!=(n=e[a]);a++)if((t||oe.acceptData(n))&&(r=n[s],i=r&&l[r])){if(i.events)for(o in i.events)c[o]?oe.event.remove(n,o):oe.removeEvent(n,o,i.handle);l[r]&&(delete l[r],u?delete n[s]:typeof n.removeAttribute!==_e?n.removeAttribute(s):n[s]=null,G.push(r))}}}),oe.fn.extend({text:function(e){return Ee(this,function(e){return void 0===e?oe.text(this):this.empty().append((this[0]&&this[0].ownerDocument||pe).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){v(this,e).appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=v(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,o=e?oe.filter(e,this):this,r=0;null!=(n=o[r]);r++)t||1!==n.nodeType||oe.cleanData(y(n)),n.parentNode&&(t&&oe.contains(n.ownerDocument,n)&&_(y(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&oe.cleanData(y(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&oe.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return oe.clone(this,e,t)})},html:function(e){return Ee(this,function(e){var t=this[0]||{},n=0,o=this.length;if(void 0===e)return 1===t.nodeType?t.innerHTML.replace($e,""):void 0;if("string"==typeof e&&!Be.test(e)&&(ne.htmlSerialize||!Me.test(e))&&(ne.leadingWhitespace||!Fe.test(e))&&!Ue[(Re.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(ze,"<$1></$2>");try{for(;n<o;n++)t=this[n]||{},1===t.nodeType&&(oe.cleanData(y(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,function(t){e=this.parentNode,oe.cleanData(y(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=K.apply([],e);var n,o,r,i,a,s,l=0,u=this.length,c=this,f=u-1,d=e[0],p=oe.isFunction(d);if(p||u>1&&"string"==typeof d&&!ne.checkClone&&Ve.test(d))return this.each(function(n){var o=c.eq(n);p&&(e[0]=d.call(this,n,o.html())),o.domManip(e,t)});if(u&&(s=oe.buildFragment(e,this[0].ownerDocument,!1,this),n=s.firstChild,1===s.childNodes.length&&(s=n),n)){for(i=oe.map(y(s,"script"),w),r=i.length;l<u;l++)o=s,l!==f&&(o=oe.clone(o,!0,!0),r&&oe.merge(i,y(o,"script"))),t.call(this[l],o,l);if(r)for(a=i[i.length-1].ownerDocument,oe.map(i,b),l=0;l<r;l++)o=i[l],We.test(o.type||"")&&!oe._data(o,"globalEval")&&oe.contains(a,o)&&(o.src?oe._evalUrl&&oe._evalUrl(o.src):oe.globalEval((o.text||o.textContent||o.innerHTML||"").replace(Xe,"")));s=n=null}return this}}),oe.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){oe.fn[e]=function(e){for(var n,o=0,r=[],i=oe(e),a=i.length-1;o<=a;o++)n=o===a?this:this.clone(!0),oe(i[o])[t](n),Q.apply(r,n.get());return this.pushStack(r)}});var Ke,Qe={};!function(){var e;ne.shrinkWrapBlocks=function(){if(null!=e)return e;e=!1;var t,n,o;return(n=pe.getElementsByTagName("body")[0])&&n.style?(t=pe.createElement("div"),o=pe.createElement("div"),o.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(o).appendChild(t),typeof t.style.zoom!==_e&&(t.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",t.appendChild(pe.createElement("div")).style.width="5px",e=3!==t.offsetWidth),n.removeChild(o),e):void 0}}();var Ze,Je,et=/^margin/,tt=new RegExp("^("+Se+")(?!px)[a-z%]+$","i"),nt=/^(top|right|bottom|left)$/;e.getComputedStyle?(Ze=function(t){return t.ownerDocument.defaultView.opener?t.ownerDocument.defaultView.getComputedStyle(t,null):e.getComputedStyle(t,null)},Je=function(e,t,n){var o,r,i,a,s=e.style;return n=n||Ze(e),a=n?n.getPropertyValue(t)||n[t]:void 0,n&&(""!==a||oe.contains(e.ownerDocument,e)||(a=oe.style(e,t)),tt.test(a)&&et.test(t)&&(o=s.width,r=s.minWidth,i=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=o,s.minWidth=r,s.maxWidth=i)),void 0===a?a:a+""}):pe.documentElement.currentStyle&&(Ze=function(e){return e.currentStyle},Je=function(e,t,n){var o,r,i,a,s=e.style;return n=n||Ze(e),a=n?n[t]:void 0,null==a&&s&&s[t]&&(a=s[t]),tt.test(a)&&!nt.test(t)&&(o=s.left,r=e.runtimeStyle,i=r&&r.left,i&&(r.left=e.currentStyle.left),s.left="fontSize"===t?"1em":a,a=s.pixelLeft+"px",s.left=o,i&&(r.left=i)),void 0===a?a:a+""||"auto"}),function(){function t(){var t,n,o,r;(n=pe.getElementsByTagName("body")[0])&&n.style&&(t=pe.createElement("div"),o=pe.createElement("div"),o.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(o).appendChild(t),t.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",i=a=!1,l=!0,e.getComputedStyle&&(i="1%"!==(e.getComputedStyle(t,null)||{}).top,a="4px"===(e.getComputedStyle(t,null)||{width:"4px"}).width,r=t.appendChild(pe.createElement("div")),r.style.cssText=t.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",r.style.marginRight=r.style.width="0",t.style.width="1px",l=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight),t.removeChild(r)),t.innerHTML="<table><tr><td></td><td>t</td></tr></table>",r=t.getElementsByTagName("td"),r[0].style.cssText="margin:0;border:0;padding:0;display:none",s=0===r[0].offsetHeight,s&&(r[0].style.display="",r[1].style.display="none",s=0===r[0].offsetHeight),n.removeChild(o))}var n,o,r,i,a,s,l;n=pe.createElement("div"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",r=n.getElementsByTagName("a")[0],(o=r&&r.style)&&(o.cssText="float:left;opacity:.5",ne.opacity="0.5"===o.opacity,ne.cssFloat=!!o.cssFloat,n.style.backgroundClip="content-box",n.cloneNode(!0).style.backgroundClip="",ne.clearCloneStyle="content-box"===n.style.backgroundClip,ne.boxSizing=""===o.boxSizing||""===o.MozBoxSizing||""===o.WebkitBoxSizing,oe.extend(ne,{reliableHiddenOffsets:function(){return null==s&&t(),s},boxSizingReliable:function(){return null==a&&t(),a},pixelPosition:function(){return null==i&&t(),i},reliableMarginRight:function(){return null==l&&t(),l}}))}(),oe.swap=function(e,t,n,o){var r,i,a={};for(i in t)a[i]=e.style[i],e.style[i]=t[i];r=n.apply(e,o||[]);for(i in t)e.style[i]=a[i];return r};var ot=/alpha\([^)]*\)/i,rt=/opacity\s*=\s*([^)]*)/,it=/^(none|table(?!-c[ea]).+)/,at=new RegExp("^("+Se+")(.*)$","i"),st=new RegExp("^([+-])=("+Se+")","i"),lt={position:"absolute",visibility:"hidden",display:"block"},ut={letterSpacing:"0",fontWeight:"400"},ct=["Webkit","O","Moz","ms"];oe.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Je(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:ne.cssFloat?"cssFloat":"styleFloat"},style:function(e,t,n,o){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var r,i,a,s=oe.camelCase(t),l=e.style;if(t=oe.cssProps[s]||(oe.cssProps[s]=E(l,s)),a=oe.cssHooks[t]||oe.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(r=a.get(e,!1,o))?r:l[t];if(i=typeof n,"string"===i&&(r=st.exec(n))&&(n=(r[1]+1)*r[2]+parseFloat(oe.css(e,t)),i="number"),null!=n&&n===n&&("number"!==i||oe.cssNumber[s]||(n+="px"),ne.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),!(a&&"set"in a&&void 0===(n=a.set(e,n,o)))))try{l[t]=n}catch(e){}}},css:function(e,t,n,o){var r,i,a,s=oe.camelCase(t);return t=oe.cssProps[s]||(oe.cssProps[s]=E(e.style,s)),a=oe.cssHooks[t]||oe.cssHooks[s],a&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Je(e,t,o)),"normal"===i&&t in ut&&(i=ut[t]),""===n||n?(r=parseFloat(i),!0===n||oe.isNumeric(r)?r||0:i):i}}),oe.each(["height","width"],function(e,t){oe.cssHooks[t]={get:function(e,n,o){if(n)return it.test(oe.css(e,"display"))&&0===e.offsetWidth?oe.swap(e,lt,function(){return I(e,t,o)}):I(e,t,o)},set:function(e,n,o){var r=o&&Ze(e);return N(e,n,o?P(e,t,o,ne.boxSizing&&"border-box"===oe.css(e,"boxSizing",!1,r),r):0)}}}),ne.opacity||(oe.cssHooks.opacity={get:function(e,t){return rt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,o=e.currentStyle,r=oe.isNumeric(t)?"alpha(opacity="+100*t+")":"",i=o&&o.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===oe.trim(i.replace(ot,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||o&&!o.filter)||(n.filter=ot.test(i)?i.replace(ot,r):i+" "+r)}}),oe.cssHooks.marginRight=k(ne.reliableMarginRight,function(e,t){if(t)return oe.swap(e,{display:"inline-block"},Je,[e,"marginRight"])}),oe.each({margin:"",padding:"",border:"Width"},function(e,t){oe.cssHooks[e+t]={expand:function(n){for(var o=0,r={},i="string"==typeof n?n.split(" "):[n];o<4;o++)r[e+Te[o]+t]=i[o]||i[o-2]||i[0];return r}},et.test(e)||(oe.cssHooks[e+t].set=N)}),oe.fn.extend({css:function(e,t){return Ee(this,function(e,t,n){var o,r,i={},a=0;if(oe.isArray(t)){for(o=Ze(e),r=t.length;a<r;a++)i[t[a]]=oe.css(e,t[a],!1,o);return i}return void 0!==n?oe.style(e,t,n):oe.css(e,t)},e,t,arguments.length>1)},show:function(){return A(this,!0)},hide:function(){return A(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ke(this)?oe(this).show():oe(this).hide()})}}),oe.Tween=D,D.prototype={constructor:D,init:function(e,t,n,o,r,i){this.elem=e,this.prop=n,this.easing=r||"swing",this.options=t,this.start=this.now=this.cur(),this.end=o,this.unit=i||(oe.cssNumber[n]?"":"px")},cur:function(){var e=D.propHooks[this.prop];return e&&e.get?e.get(this):D.propHooks._default.get(this)},run:function(e){var t,n=D.propHooks[this.prop];return this.options.duration?this.pos=t=oe.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):D.propHooks._default.set(this),this}},D.prototype.init.prototype=D.prototype,D.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=oe.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){oe.fx.step[e.prop]?oe.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[oe.cssProps[e.prop]]||oe.cssHooks[e.prop])?oe.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},D.propHooks.scrollTop=D.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},oe.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},oe.fx=D.prototype.init,oe.fx.step={};var ft,dt,pt=/^(?:toggle|show|hide)$/,mt=new RegExp("^(?:([+-])=|)("+Se+")([a-z%]*)$","i"),ht=/queueHooks$/,yt=[M],gt={"*":[function(e,t){var n=this.createTween(e,t),o=n.cur(),r=mt.exec(t),i=r&&r[3]||(oe.cssNumber[e]?"":"px"),a=(oe.cssNumber[e]||"px"!==i&&+o)&&mt.exec(oe.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==i){i=i||a[3],r=r||[],a=+o||1;do{s=s||".5",a/=s,oe.style(n.elem,e,a+i)}while(s!==(s=n.cur()/o)&&1!==s&&--l)}return r&&(a=n.start=+a||+o||0,n.unit=i,n.end=r[1]?a+(r[1]+1)*r[2]:+r[2]),n}]};oe.Animation=oe.extend(z,{tweener:function(e,t){oe.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,o=0,r=e.length;o<r;o++)n=e[o],gt[n]=gt[n]||[],gt[n].unshift(t)},prefilter:function(e,t){t?yt.unshift(e):yt.push(e)}}),oe.speed=function(e,t,n){var o=e&&"object"==typeof e?oe.extend({},e):{complete:n||!n&&t||oe.isFunction(e)&&e,duration:e,easing:n&&t||t&&!oe.isFunction(t)&&t};return o.duration=oe.fx.off?0:"number"==typeof o.duration?o.duration:o.duration in oe.fx.speeds?oe.fx.speeds[o.duration]:oe.fx.speeds._default,null!=o.queue&&!0!==o.queue||(o.queue="fx"),o.old=o.complete,o.complete=function(){oe.isFunction(o.old)&&o.old.call(this),o.queue&&oe.dequeue(this,o.queue)},o},oe.fn.extend({fadeTo:function(e,t,n,o){return this.filter(ke).css("opacity",0).show().end().animate({opacity:t},e,n,o)},animate:function(e,t,n,o){var r=oe.isEmptyObject(e),i=oe.speed(t,n,o),a=function(){var t=z(this,oe.extend({},e),i);(r||oe._data(this,"finish"))&&t.stop(!0)};return a.finish=a,r||!1===i.queue?this.each(a):this.queue(i.queue,a)},stop:function(e,t,n){var o=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,r=null!=e&&e+"queueHooks",i=oe.timers,a=oe._data(this);if(r)a[r]&&a[r].stop&&o(a[r]);else for(r in a)a[r]&&a[r].stop&&ht.test(r)&&o(a[r]);for(r=i.length;r--;)i[r].elem!==this||null!=e&&i[r].queue!==e||(i[r].anim.stop(n),t=!1,i.splice(r,1));!t&&n||oe.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=oe._data(this),o=n[e+"queue"],r=n[e+"queueHooks"],i=oe.timers,a=o?o.length:0;for(n.finish=!0,oe.queue(this,e,[]),r&&r.stop&&r.stop.call(this,!0),t=i.length;t--;)i[t].elem===this&&i[t].queue===e&&(i[t].anim.stop(!0),i.splice(t,1));for(t=0;t<a;t++)o[t]&&o[t].finish&&o[t].finish.call(this);delete n.finish})}}),oe.each(["toggle","show","hide"],function(e,t){var n=oe.fn[t];oe.fn[t]=function(e,o,r){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(j(t,!0),e,o,r)}}),oe.each({slideDown:j("show"),slideUp:j("hide"),slideToggle:j("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){oe.fn[e]=function(e,n,o){return this.animate(t,e,n,o)}}),oe.timers=[],oe.fx.tick=function(){var e,t=oe.timers,n=0;for(ft=oe.now();n<t.length;n++)(e=t[n])()||t[n]!==e||t.splice(n--,1);t.length||oe.fx.stop(),ft=void 0},oe.fx.timer=function(e){oe.timers.push(e),e()?oe.fx.start():oe.timers.pop()},oe.fx.interval=13,oe.fx.start=function(){dt||(dt=setInterval(oe.fx.tick,oe.fx.interval))},oe.fx.stop=function(){clearInterval(dt),dt=null},oe.fx.speeds={slow:600,fast:200,_default:400},oe.fn.delay=function(e,t){return e=oe.fx?oe.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var o=setTimeout(t,e);n.stop=function(){clearTimeout(o)}})},function(){var e,t,n,o,r;t=pe.createElement("div"),t.setAttribute("className","t"),t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",o=t.getElementsByTagName("a")[0],n=pe.createElement("select"),r=n.appendChild(pe.createElement("option")),e=t.getElementsByTagName("input")[0],o.style.cssText="top:1px",ne.getSetAttribute="t"!==t.className,ne.style=/top/.test(o.getAttribute("style")),ne.hrefNormalized="/a"===o.getAttribute("href"),ne.checkOn=!!e.value,ne.optSelected=r.selected,ne.enctype=!!pe.createElement("form").enctype,n.disabled=!0,ne.optDisabled=!r.disabled,e=pe.createElement("input"),e.setAttribute("value",""),ne.input=""===e.getAttribute("value"),e.value="t",e.setAttribute("type","radio"),ne.radioValue="t"===e.value}();var vt=/\r/g;oe.fn.extend({val:function(e){var t,n,o,r=this[0];{if(arguments.length)return o=oe.isFunction(e),this.each(function(n){var r;1===this.nodeType&&(r=o?e.call(this,n,oe(this).val()):e,null==r?r="":"number"==typeof r?r+="":oe.isArray(r)&&(r=oe.map(r,function(e){return null==e?"":e+""})),(t=oe.valHooks[this.type]||oe.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,r,"value")||(this.value=r))});if(r)return(t=oe.valHooks[r.type]||oe.valHooks[r.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(r,"value"))?n:(n=r.value,"string"==typeof n?n.replace(vt,""):null==n?"":n)}}}),oe.extend({valHooks:{option:{get:function(e){var t=oe.find.attr(e,"value");return null!=t?t:oe.trim(oe.text(e))}},select:{get:function(e){for(var t,n,o=e.options,r=e.selectedIndex,i="select-one"===e.type||r<0,a=i?null:[],s=i?r+1:o.length,l=r<0?s:i?r:0;l<s;l++)if(n=o[l],(n.selected||l===r)&&(ne.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!oe.nodeName(n.parentNode,"optgroup"))){if(t=oe(n).val(),i)return t;a.push(t)}return a},set:function(e,t){for(var n,o,r=e.options,i=oe.makeArray(t),a=r.length;a--;)if(o=r[a],oe.inArray(oe.valHooks.option.get(o),i)>=0)try{o.selected=n=!0}catch(e){o.scrollHeight}else o.selected=!1;return n||(e.selectedIndex=-1),r}}}}),oe.each(["radio","checkbox"],function(){oe.valHooks[this]={set:function(e,t){if(oe.isArray(t))return e.checked=oe.inArray(oe(e).val(),t)>=0}},ne.checkOn||(oe.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var wt,bt,_t=oe.expr.attrHandle,xt=/^(?:checked|selected)$/i,Ct=ne.getSetAttribute,St=ne.input;oe.fn.extend({attr:function(e,t){return Ee(this,oe.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){oe.removeAttr(this,e)})}}),oe.extend({attr:function(e,t,n){var o,r,i=e.nodeType;if(e&&3!==i&&8!==i&&2!==i)return typeof e.getAttribute===_e?oe.prop(e,t,n):(1===i&&oe.isXMLDoc(e)||(t=t.toLowerCase(),o=oe.attrHooks[t]||(oe.expr.match.bool.test(t)?bt:wt)),void 0===n?o&&"get"in o&&null!==(r=o.get(e,t))?r:(r=oe.find.attr(e,t),null==r?void 0:r):null!==n?o&&"set"in o&&void 0!==(r=o.set(e,n,t))?r:(e.setAttribute(t,n+""),n):void oe.removeAttr(e,t))},removeAttr:function(e,t){var n,o,r=0,i=t&&t.match(ge);if(i&&1===e.nodeType)for(;n=i[r++];)o=oe.propFix[n]||n,oe.expr.match.bool.test(n)?St&&Ct||!xt.test(n)?e[o]=!1:e[oe.camelCase("default-"+n)]=e[o]=!1:oe.attr(e,n,""),e.removeAttribute(Ct?n:o)},attrHooks:{type:{set:function(e,t){if(!ne.radioValue&&"radio"===t&&oe.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),bt={set:function(e,t,n){return!1===t?oe.removeAttr(e,n):St&&Ct||!xt.test(n)?e.setAttribute(!Ct&&oe.propFix[n]||n,n):e[oe.camelCase("default-"+n)]=e[n]=!0,n}},oe.each(oe.expr.match.bool.source.match(/\w+/g),function(e,t){var n=_t[t]||oe.find.attr;_t[t]=St&&Ct||!xt.test(t)?function(e,t,o){var r,i;return o||(i=_t[t],_t[t]=r,r=null!=n(e,t,o)?t.toLowerCase():null,_t[t]=i),r}:function(e,t,n){if(!n)return e[oe.camelCase("default-"+t)]?t.toLowerCase():null}}),St&&Ct||(oe.attrHooks.value={set:function(e,t,n){if(!oe.nodeName(e,"input"))return wt&&wt.set(e,t,n);e.defaultValue=t}}),Ct||(wt={set:function(e,t,n){var o=e.getAttributeNode(n);if(o||e.setAttributeNode(o=e.ownerDocument.createAttribute(n)),o.value=t+="","value"===n||t===e.getAttribute(n))return t}},_t.id=_t.name=_t.coords=function(e,t,n){var o;if(!n)return(o=e.getAttributeNode(t))&&""!==o.value?o.value:null},oe.valHooks.button={get:function(e,t){var n=e.getAttributeNode(t);if(n&&n.specified)return n.value},set:wt.set},oe.attrHooks.contenteditable={set:function(e,t,n){wt.set(e,""!==t&&t,n)}},oe.each(["width","height"],function(e,t){oe.attrHooks[t]={set:function(e,n){if(""===n)return e.setAttribute(t,"auto"),n}}})),ne.style||(oe.attrHooks.style={get:function(e){return e.style.cssText||void 0},set:function(e,t){return e.style.cssText=t+""}});var Tt=/^(?:input|select|textarea|button|object)$/i,kt=/^(?:a|area)$/i;oe.fn.extend({prop:function(e,t){return Ee(this,oe.prop,e,t,arguments.length>1)},removeProp:function(e){return e=oe.propFix[e]||e,this.each(function(){try{this[e]=void 0,delete this[e]}catch(e){}})}}),oe.extend({propFix:{for:"htmlFor",class:"className"},prop:function(e,t,n){var o,r,i,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return i=1!==a||!oe.isXMLDoc(e),i&&(t=oe.propFix[t]||t,r=oe.propHooks[t]),void 0!==n?r&&"set"in r&&void 0!==(o=r.set(e,n,t))?o:e[t]=n:r&&"get"in r&&null!==(o=r.get(e,t))?o:e[t]},propHooks:{
tabIndex:{get:function(e){var t=oe.find.attr(e,"tabindex");return t?parseInt(t,10):Tt.test(e.nodeName)||kt.test(e.nodeName)&&e.href?0:-1}}}}),ne.hrefNormalized||oe.each(["href","src"],function(e,t){oe.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),ne.optSelected||(oe.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),oe.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){oe.propFix[this.toLowerCase()]=this}),ne.enctype||(oe.propFix.enctype="encoding");var Et=/[\t\r\n\f]/g;oe.fn.extend({addClass:function(e){var t,n,o,r,i,a,s=0,l=this.length,u="string"==typeof e&&e;if(oe.isFunction(e))return this.each(function(t){oe(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(ge)||[];s<l;s++)if(n=this[s],o=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Et," "):" ")){for(i=0;r=t[i++];)o.indexOf(" "+r+" ")<0&&(o+=r+" ");a=oe.trim(o),n.className!==a&&(n.className=a)}return this},removeClass:function(e){var t,n,o,r,i,a,s=0,l=this.length,u=0===arguments.length||"string"==typeof e&&e;if(oe.isFunction(e))return this.each(function(t){oe(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(ge)||[];s<l;s++)if(n=this[s],o=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Et," "):"")){for(i=0;r=t[i++];)for(;o.indexOf(" "+r+" ")>=0;)o=o.replace(" "+r+" "," ");a=e?oe.trim(o):"",n.className!==a&&(n.className=a)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):oe.isFunction(e)?this.each(function(n){oe(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n)for(var t,o=0,r=oe(this),i=e.match(ge)||[];t=i[o++];)r.hasClass(t)?r.removeClass(t):r.addClass(t);else n!==_e&&"boolean"!==n||(this.className&&oe._data(this,"__className__",this.className),this.className=this.className||!1===e?"":oe._data(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,o=this.length;n<o;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(Et," ").indexOf(t)>=0)return!0;return!1}}),oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){oe.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),oe.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,o){return this.on(t,e,n,o)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var At=oe.now(),Nt=/\?/,Pt=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;oe.parseJSON=function(t){if(e.JSON&&e.JSON.parse)return e.JSON.parse(t+"");var n,o=null,r=oe.trim(t+"");return r&&!oe.trim(r.replace(Pt,function(e,t,r,i){return n&&t&&(o=0),0===o?e:(n=r||t,o+=!i-!r,"")}))?Function("return "+r)():oe.error("Invalid JSON: "+t)},oe.parseXML=function(t){var n,o;if(!t||"string"!=typeof t)return null;try{e.DOMParser?(o=new DOMParser,n=o.parseFromString(t,"text/xml")):(n=new ActiveXObject("Microsoft.XMLDOM"),n.async="false",n.loadXML(t))}catch(e){n=void 0}return n&&n.documentElement&&!n.getElementsByTagName("parsererror").length||oe.error("Invalid XML: "+t),n};var It,Dt,Lt=/#.*$/,jt=/([?&])_=[^&]*/,$t=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Mt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ft=/^(?:GET|HEAD)$/,zt=/^\/\//,Rt=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ht={},Ot={},Bt="*/".concat("*");try{Dt=location.href}catch(e){Dt=pe.createElement("a"),Dt.href="",Dt=Dt.href}It=Rt.exec(Dt.toLowerCase())||[],oe.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Dt,type:"GET",isLocal:Mt.test(It[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Bt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":oe.parseJSON,"text xml":oe.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?O(O(e,oe.ajaxSettings),t):O(oe.ajaxSettings,e)},ajaxPrefilter:R(Ht),ajaxTransport:R(Ot),ajax:function(e,t){function n(e,t,n,o){var r,c,g,v,b,x=t;2!==w&&(w=2,s&&clearTimeout(s),u=void 0,a=o||"",_.readyState=e>0?4:0,r=e>=200&&e<300||304===e,n&&(v=B(f,_,n)),v=V(f,v,_,r),r?(f.ifModified&&(b=_.getResponseHeader("Last-Modified"),b&&(oe.lastModified[i]=b),(b=_.getResponseHeader("etag"))&&(oe.etag[i]=b)),204===e||"HEAD"===f.type?x="nocontent":304===e?x="notmodified":(x=v.state,c=v.data,g=v.error,r=!g)):(g=x,!e&&x||(x="error",e<0&&(e=0))),_.status=e,_.statusText=(t||x)+"",r?m.resolveWith(d,[c,x,_]):m.rejectWith(d,[_,x,g]),_.statusCode(y),y=void 0,l&&p.trigger(r?"ajaxSuccess":"ajaxError",[_,f,r?c:g]),h.fireWith(d,[_,x]),l&&(p.trigger("ajaxComplete",[_,f]),--oe.active||oe.event.trigger("ajaxStop")))}"object"==typeof e&&(t=e,e=void 0),t=t||{};var o,r,i,a,s,l,u,c,f=oe.ajaxSetup({},t),d=f.context||f,p=f.context&&(d.nodeType||d.jquery)?oe(d):oe.event,m=oe.Deferred(),h=oe.Callbacks("once memory"),y=f.statusCode||{},g={},v={},w=0,b="canceled",_={readyState:0,getResponseHeader:function(e){var t;if(2===w){if(!c)for(c={};t=$t.exec(a);)c[t[1].toLowerCase()]=t[2];t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===w?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return w||(e=v[n]=v[n]||e,g[e]=t),this},overrideMimeType:function(e){return w||(f.mimeType=e),this},statusCode:function(e){var t;if(e)if(w<2)for(t in e)y[t]=[y[t],e[t]];else _.always(e[_.status]);return this},abort:function(e){var t=e||b;return u&&u.abort(t),n(0,t),this}};if(m.promise(_).complete=h.add,_.success=_.done,_.error=_.fail,f.url=((e||f.url||Dt)+"").replace(Lt,"").replace(zt,It[1]+"//"),f.type=t.method||t.type||f.method||f.type,f.dataTypes=oe.trim(f.dataType||"*").toLowerCase().match(ge)||[""],null==f.crossDomain&&(o=Rt.exec(f.url.toLowerCase()),f.crossDomain=!(!o||o[1]===It[1]&&o[2]===It[2]&&(o[3]||("http:"===o[1]?"80":"443"))===(It[3]||("http:"===It[1]?"80":"443")))),f.data&&f.processData&&"string"!=typeof f.data&&(f.data=oe.param(f.data,f.traditional)),H(Ht,f,t,_),2===w)return _;l=oe.event&&f.global,l&&0==oe.active++&&oe.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!Ft.test(f.type),i=f.url,f.hasContent||(f.data&&(i=f.url+=(Nt.test(i)?"&":"?")+f.data,delete f.data),!1===f.cache&&(f.url=jt.test(i)?i.replace(jt,"$1_="+At++):i+(Nt.test(i)?"&":"?")+"_="+At++)),f.ifModified&&(oe.lastModified[i]&&_.setRequestHeader("If-Modified-Since",oe.lastModified[i]),oe.etag[i]&&_.setRequestHeader("If-None-Match",oe.etag[i])),(f.data&&f.hasContent&&!1!==f.contentType||t.contentType)&&_.setRequestHeader("Content-Type",f.contentType),_.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Bt+"; q=0.01":""):f.accepts["*"]);for(r in f.headers)_.setRequestHeader(r,f.headers[r]);if(f.beforeSend&&(!1===f.beforeSend.call(d,_,f)||2===w))return _.abort();b="abort";for(r in{success:1,error:1,complete:1})_[r](f[r]);if(u=H(Ot,f,t,_)){_.readyState=1,l&&p.trigger("ajaxSend",[_,f]),f.async&&f.timeout>0&&(s=setTimeout(function(){_.abort("timeout")},f.timeout));try{w=1,u.send(g,n)}catch(e){if(!(w<2))throw e;n(-1,e)}}else n(-1,"No Transport");return _},getJSON:function(e,t,n){return oe.get(e,t,n,"json")},getScript:function(e,t){return oe.get(e,void 0,t,"script")}}),oe.each(["get","post"],function(e,t){oe[t]=function(e,n,o,r){return oe.isFunction(n)&&(r=r||o,o=n,n=void 0),oe.ajax({url:e,type:t,dataType:r,data:n,success:o})}}),oe._evalUrl=function(e){return oe.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,throws:!0})},oe.fn.extend({wrapAll:function(e){if(oe.isFunction(e))return this.each(function(t){oe(this).wrapAll(e.call(this,t))});if(this[0]){var t=oe(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return oe.isFunction(e)?this.each(function(t){oe(this).wrapInner(e.call(this,t))}):this.each(function(){var t=oe(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=oe.isFunction(e);return this.each(function(n){oe(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){oe.nodeName(this,"body")||oe(this).replaceWith(this.childNodes)}).end()}}),oe.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0||!ne.reliableHiddenOffsets()&&"none"===(e.style&&e.style.display||oe.css(e,"display"))},oe.expr.filters.visible=function(e){return!oe.expr.filters.hidden(e)};var Vt=/%20/g,Wt=/\[\]$/,qt=/\r?\n/g,Xt=/^(?:submit|button|image|reset|file)$/i,Ut=/^(?:input|select|textarea|keygen)/i;oe.param=function(e,t){var n,o=[],r=function(e,t){t=oe.isFunction(t)?t():null==t?"":t,o[o.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=oe.ajaxSettings&&oe.ajaxSettings.traditional),oe.isArray(e)||e.jquery&&!oe.isPlainObject(e))oe.each(e,function(){r(this.name,this.value)});else for(n in e)W(n,e[n],t,r);return o.join("&").replace(Vt,"+")},oe.fn.extend({serialize:function(){return oe.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=oe.prop(this,"elements");return e?oe.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!oe(this).is(":disabled")&&Ut.test(this.nodeName)&&!Xt.test(e)&&(this.checked||!Ae.test(e))}).map(function(e,t){var n=oe(this).val();return null==n?null:oe.isArray(n)?oe.map(n,function(e){return{name:t.name,value:e.replace(qt,"\r\n")}}):{name:t.name,value:n.replace(qt,"\r\n")}}).get()}}),oe.ajaxSettings.xhr=void 0!==e.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&q()||X()}:q;var Gt=0,Yt={},Kt=oe.ajaxSettings.xhr();e.attachEvent&&e.attachEvent("onunload",function(){for(var e in Yt)Yt[e](void 0,!0)}),ne.cors=!!Kt&&"withCredentials"in Kt,Kt=ne.ajax=!!Kt,Kt&&oe.ajaxTransport(function(e){if(!e.crossDomain||ne.cors){var t;return{send:function(n,o){var r,i=e.xhr(),a=++Gt;if(i.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(r in e.xhrFields)i[r]=e.xhrFields[r];e.mimeType&&i.overrideMimeType&&i.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(r in n)void 0!==n[r]&&i.setRequestHeader(r,n[r]+"");i.send(e.hasContent&&e.data||null),t=function(n,r){var s,l,u;if(t&&(r||4===i.readyState))if(delete Yt[a],t=void 0,i.onreadystatechange=oe.noop,r)4!==i.readyState&&i.abort();else{u={},s=i.status,"string"==typeof i.responseText&&(u.text=i.responseText);try{l=i.statusText}catch(e){l=""}s||!e.isLocal||e.crossDomain?1223===s&&(s=204):s=u.text?200:404}u&&o(s,l,u,i.getAllResponseHeaders())},e.async?4===i.readyState?setTimeout(t):i.onreadystatechange=Yt[a]=t:t()},abort:function(){t&&t(void 0,!0)}}}}),oe.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return oe.globalEval(e),e}}}),oe.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),oe.ajaxTransport("script",function(e){if(e.crossDomain){var t,n=pe.head||oe("head")[0]||pe.documentElement;return{send:function(o,r){t=pe.createElement("script"),t.async=!0,e.scriptCharset&&(t.charset=e.scriptCharset),t.src=e.url,t.onload=t.onreadystatechange=function(e,n){(n||!t.readyState||/loaded|complete/.test(t.readyState))&&(t.onload=t.onreadystatechange=null,t.parentNode&&t.parentNode.removeChild(t),t=null,n||r(200,"success"))},n.insertBefore(t,n.firstChild)},abort:function(){t&&t.onload(void 0,!0)}}}});var Qt=[],Zt=/(=)\?(?=&|$)|\?\?/;oe.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Qt.pop()||oe.expando+"_"+At++;return this[e]=!0,e}}),oe.ajaxPrefilter("json jsonp",function(t,n,o){var r,i,a,s=!1!==t.jsonp&&(Zt.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Zt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return r=t.jsonpCallback=oe.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Zt,"$1"+r):!1!==t.jsonp&&(t.url+=(Nt.test(t.url)?"&":"?")+t.jsonp+"="+r),t.converters["script json"]=function(){return a||oe.error(r+" was not called"),a[0]},t.dataTypes[0]="json",i=e[r],e[r]=function(){a=arguments},o.always(function(){e[r]=i,t[r]&&(t.jsonpCallback=n.jsonpCallback,Qt.push(r)),a&&oe.isFunction(i)&&i(a[0]),a=i=void 0}),"script"}),oe.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||pe;var o=ce.exec(e),r=!n&&[];return o?[t.createElement(o[1])]:(o=oe.buildFragment([e],t,r),r&&r.length&&oe(r).remove(),oe.merge([],o.childNodes))};var Jt=oe.fn.load;oe.fn.load=function(e,t,n){if("string"!=typeof e&&Jt)return Jt.apply(this,arguments);var o,r,i,a=this,s=e.indexOf(" ");return s>=0&&(o=oe.trim(e.slice(s,e.length)),e=e.slice(0,s)),oe.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&oe.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){r=arguments,a.html(o?oe("<div>").append(oe.parseHTML(e)).find(o):e)}).complete(n&&function(e,t){a.each(n,r||[e.responseText,t,e])}),this},oe.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){oe.fn[t]=function(e){return this.on(t,e)}}),oe.expr.filters.animated=function(e){return oe.grep(oe.timers,function(t){return e===t.elem}).length};var en=e.document.documentElement;oe.offset={setOffset:function(e,t,n){var o,r,i,a,s,l,u,c=oe.css(e,"position"),f=oe(e),d={};"static"===c&&(e.style.position="relative"),s=f.offset(),i=oe.css(e,"top"),l=oe.css(e,"left"),u=("absolute"===c||"fixed"===c)&&oe.inArray("auto",[i,l])>-1,u?(o=f.position(),a=o.top,r=o.left):(a=parseFloat(i)||0,r=parseFloat(l)||0),oe.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(d.top=t.top-s.top+a),null!=t.left&&(d.left=t.left-s.left+r),"using"in t?t.using.call(e,d):f.css(d)}},oe.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){oe.offset.setOffset(this,e,t)});var t,n,o={top:0,left:0},r=this[0],i=r&&r.ownerDocument;if(i)return t=i.documentElement,oe.contains(t,r)?(typeof r.getBoundingClientRect!==_e&&(o=r.getBoundingClientRect()),n=U(i),{top:o.top+(n.pageYOffset||t.scrollTop)-(t.clientTop||0),left:o.left+(n.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}):o},position:function(){if(this[0]){var e,t,n={top:0,left:0},o=this[0];return"fixed"===oe.css(o,"position")?t=o.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),oe.nodeName(e[0],"html")||(n=e.offset()),n.top+=oe.css(e[0],"borderTopWidth",!0),n.left+=oe.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-oe.css(o,"marginTop",!0),left:t.left-n.left-oe.css(o,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||en;e&&!oe.nodeName(e,"html")&&"static"===oe.css(e,"position");)e=e.offsetParent;return e||en})}}),oe.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n=/Y/.test(t);oe.fn[e]=function(o){return Ee(this,function(e,o,r){var i=U(e);if(void 0===r)return i?t in i?i[t]:i.document.documentElement[o]:e[o];i?i.scrollTo(n?oe(i).scrollLeft():r,n?r:oe(i).scrollTop()):e[o]=r},e,o,arguments.length,null)}}),oe.each(["top","left"],function(e,t){oe.cssHooks[t]=k(ne.pixelPosition,function(e,n){if(n)return n=Je(e,t),tt.test(n)?oe(e).position()[t]+"px":n})}),oe.each({Height:"height",Width:"width"},function(e,t){oe.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,o){oe.fn[o]=function(o,r){var i=arguments.length&&(n||"boolean"!=typeof o),a=n||(!0===o||!0===r?"margin":"border");return Ee(this,function(t,n,o){var r;return oe.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(r=t.documentElement,Math.max(t.body["scroll"+e],r["scroll"+e],t.body["offset"+e],r["offset"+e],r["client"+e])):void 0===o?oe.css(t,n,a):oe.style(t,n,o,a)},t,i?o:void 0,i,null)}})}),oe.fn.size=function(){return this.length},oe.fn.andSelf=oe.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return oe});var tn=e.jQuery,nn=e.$;return oe.noConflict=function(t){return e.$===oe&&(e.$=nn),t&&e.jQuery===oe&&(e.jQuery=tn),oe},typeof t===_e&&(e.jQuery=e.$=oe),oe}),function(e,t){var n=function(e,t){"use strict";if(t.getElementsByClassName){var n,o,r=t.documentElement,i=e.Date,a=e.HTMLPictureElement,s=e.addEventListener,l=e.setTimeout,u=e.requestAnimationFrame||l,c=e.requestIdleCallback,f=/^picture$/i,d=["load","error","lazyincluded","_lazyloaded"],p={},m=Array.prototype.forEach,h=function(e,t){return p[t]||(p[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),p[t].test(e.getAttribute("class")||"")&&p[t]},y=function(e,t){h(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},g=function(e,t){var n;(n=h(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))},v=function(e,t,n){var o=n?"addEventListener":"removeEventListener";n&&v(e,t),d.forEach(function(n){e[o](n,t)})},w=function(e,o,r,i,a){var s=t.createEvent("CustomEvent");return r||(r={}),r.instance=n,s.initCustomEvent(o,!i,!a,r),e.dispatchEvent(s),s},b=function(t,n){var r;!a&&(r=e.picturefill||o.pf)?r({reevaluate:!0,elements:[t]}):n&&n.src&&(t.src=n.src)},_=function(e,t){return(getComputedStyle(e,null)||{})[t]},x=function(e,t,n){for(n=n||e.offsetWidth;n<o.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},C=function(){var e,n,o=[],r=[],i=o,a=function(){var t=i;for(i=o.length?r:o,e=!0,n=!1;t.length;)t.shift()();e=!1},s=function(o,r){e&&!r?o.apply(this,arguments):(i.push(o),n||(n=!0,(t.hidden?l:u)(a)))};return s._lsFlush=a,s}(),S=function(e,t){return t?function(){C(e)}:function(){var t=this,n=arguments;C(function(){e.apply(t,n)})}},T=function(e){var t,n=0,r=o.throttleDelay,a=o.ricTimeout,s=function(){t=!1,n=i.now(),e()},u=c&&a>49?function(){c(s,{timeout:a}),a!==o.ricTimeout&&(a=o.ricTimeout)}:S(function(){l(s)},!0);return function(e){var o;(e=!0===e)&&(a=33),t||(t=!0,o=r-(i.now()-n),o<0&&(o=0),e||o<9?u():l(u,o))}},k=function(e){var t,n,o=function(){t=null,e()},r=function(){var e=i.now()-n;e<99?l(r,99-e):(c||o)(o)};return function(){n=i.now(),t||(t=l(r,99))}};!function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};o=e.lazySizesConfig||e.lazysizesConfig||{};for(t in n)t in o||(o[t]=n[t]);e.lazySizesConfig=o,l(function(){o.init&&N()})}();var E=function(){var a,u,c,d,p,x,E,N,P,I,D,L,j,$,M=/^img$/i,F=/^iframe$/i,z="onscroll"in e&&!/glebot/.test(navigator.userAgent),R=0,H=0,O=-1,B=function(e){H--,e&&e.target&&v(e.target,B),(!e||H<0||!e.target)&&(H=0)},V=function(e,n){var o,i=e,a="hidden"==_(t.body,"visibility")||"hidden"!=_(e,"visibility");for(N-=n,D+=n,P-=n,I+=n;a&&(i=i.offsetParent)&&i!=t.body&&i!=r;)(a=(_(i,"opacity")||1)>0)&&"visible"!=_(i,"overflow")&&(o=i.getBoundingClientRect(),a=I>o.left&&P<o.right&&D>o.top-1&&N<o.bottom+1);return a},W=function(){var e,i,s,l,c,f,p,m,h,y=n.elements;if((d=o.loadMode)&&H<8&&(e=y.length)){i=0,O++,null==j&&("expand"in o||(o.expand=r.clientHeight>500&&r.clientWidth>500?500:370),L=o.expand,j=L*o.expFactor),R<j&&H<1&&O>2&&d>2&&!t.hidden?(R=j,O=0):R=d>1&&O>1&&H<6?L:0;for(;i<e;i++)if(y[i]&&!y[i]._lazyRace)if(z)if((m=y[i].getAttribute("data-expand"))&&(f=1*m)||(f=R),h!==f&&(x=innerWidth+f*$,E=innerHeight+f,p=-1*f,h=f),s=y[i].getBoundingClientRect(),(D=s.bottom)>=p&&(N=s.top)<=E&&(I=s.right)>=p*$&&(P=s.left)<=x&&(D||I||P||N)&&(o.loadHidden||"hidden"!=_(y[i],"visibility"))&&(u&&H<3&&!m&&(d<3||O<4)||V(y[i],f))){if(Z(y[i]),c=!0,H>9)break}else!c&&u&&!l&&H<4&&O<4&&d>2&&(a[0]||o.preloadAfterLoad)&&(a[0]||!m&&(D||I||P||N||"auto"!=y[i].getAttribute(o.sizesAttr)))&&(l=a[0]||y[i]);else Z(y[i]);l&&!c&&Z(l)}},q=T(W),X=function(e){y(e.target,o.loadedClass),g(e.target,o.loadingClass),v(e.target,G),w(e.target,"lazyloaded")},U=S(X),G=function(e){U({target:e.target})},Y=function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}},K=function(e){var t,n=e.getAttribute(o.srcsetAttr);(t=o.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},Q=S(function(e,t,n,r,i){var a,s,u,d,p,h;(p=w(e,"lazybeforeunveil",t)).defaultPrevented||(r&&(n?y(e,o.autosizesClass):e.setAttribute("sizes",r)),s=e.getAttribute(o.srcsetAttr),a=e.getAttribute(o.srcAttr),i&&(u=e.parentNode,d=u&&f.test(u.nodeName||"")),h=t.firesLoad||"src"in e&&(s||a||d),p={target:e},h&&(v(e,B,!0),clearTimeout(c),c=l(B,2500),y(e,o.loadingClass),v(e,G,!0)),d&&m.call(u.getElementsByTagName("source"),K),s?e.setAttribute("srcset",s):a&&!d&&(F.test(e.nodeName)?Y(e,a):e.src=a),i&&(s||d)&&b(e,{src:a})),e._lazyRace&&delete e._lazyRace,g(e,o.lazyClass),C(function(){(!h||e.complete&&e.naturalWidth>1)&&(h?B(p):H--,X(p))},!0)}),Z=function(e){var t,n=M.test(e.nodeName),r=n&&(e.getAttribute(o.sizesAttr)||e.getAttribute("sizes")),i="auto"==r;(!i&&u||!n||!e.getAttribute("src")&&!e.srcset||e.complete||h(e,o.errorClass)||!h(e,o.lazyClass))&&(t=w(e,"lazyunveilread").detail,i&&A.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,H++,Q(e,t,i,r,n))},J=function(){if(!u){if(i.now()-p<999)return void l(J,999);var e=k(function(){o.loadMode=3,q()});u=!0,o.loadMode=3,q(),s("scroll",function(){3==o.loadMode&&(o.loadMode=2),e()},!0)}};return{_:function(){p=i.now(),n.elements=t.getElementsByClassName(o.lazyClass),a=t.getElementsByClassName(o.lazyClass+" "+o.preloadClass),$=o.hFac,s("scroll",q,!0),s("resize",q,!0),e.MutationObserver?new MutationObserver(q).observe(r,{childList:!0,subtree:!0,attributes:!0}):(r.addEventListener("DOMNodeInserted",q,!0),r.addEventListener("DOMAttrModified",q,!0),setInterval(q,999)),s("hashchange",q,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t.addEventListener(e,q,!0)}),/d$|^c/.test(t.readyState)?J():(s("load",J),t.addEventListener("DOMContentLoaded",q),l(J,2e4)),n.elements.length?(W(),C._lsFlush()):q()},checkElems:q,unveil:Z}}(),A=function(){var e,n=S(function(e,t,n,o){var r,i,a;if(e._lazysizesWidth=o,o+="px",e.setAttribute("sizes",o),f.test(t.nodeName||""))for(r=t.getElementsByTagName("source"),i=0,a=r.length;i<a;i++)r[i].setAttribute("sizes",o);n.detail.dataAttr||b(e,n.detail)}),r=function(e,t,o){var r,i=e.parentNode;i&&(o=x(e,i,o),r=w(e,"lazybeforesizes",{width:o,dataAttr:!!t}),r.defaultPrevented||(o=r.detail.width)&&o!==e._lazysizesWidth&&n(e,i,r,o))},i=function(){var t,n=e.length;if(n)for(t=0;t<n;t++)r(e[t])},a=k(i);return{_:function(){e=t.getElementsByClassName(o.autosizesClass),s("resize",a)},checkElems:a,updateElem:r}}(),N=function(){N.i||(N.i=!0,A._(),E._())};return n={cfg:o,autoSizer:A,loader:E,init:N,uP:b,aC:y,rC:g,hC:h,fire:w,gW:x,rAF:C}}}(e,e.document);e.lazySizes=n,"object"==typeof module&&module.exports&&(module.exports=n)}(window),function(e,t){var n=function(){t(e.lazySizes),e.removeEventListener("lazyunveilread",n,!0)};t=t.bind(null,e,e.document),"object"==typeof module&&module.exports?t(require("lazysizes")):e.lazySizes?n():e.addEventListener("lazyunveilread",n,!0)}(window,function(e,t,n){"use strict";function o(t,n){var o,r,i,a,s=e.getComputedStyle(t);r=t.parentNode,a={isPicture:!(!r||!d.test(r.nodeName||""))},i=function(e,n){var o=t.getAttribute("data-"+e);if(!o){var r=s.getPropertyValue("--ls-"+e);r&&(o=r.trim())}if(o){if("true"==o)o=!0;else if("false"==o)o=!1;else if(f.test(o))o=parseFloat(o);else if("function"==typeof u[e])o=u[e](t,o);else if(y.test(o))try{o=JSON.parse(o)}catch(e){}a[e]=o}else e in u&&"function"!=typeof u[e]?a[e]=u[e]:n&&"function"==typeof u[e]&&(a[e]=u[e](t,o))};for(o in u)i(o);return n.replace(h,function(e,t){t in a||i(t,!0)}),a}function r(e,t){var n=[],o=function(e,n){return c[typeof t[n]]?t[n]:e};return n.srcset=[],t.absUrl&&(v.setAttribute("href",e),e=v.href),e=((t.prefix||"")+e+(t.postfix||"")).replace(h,o),t.widths.forEach(function(o){var r=t.widthmap[o]||o,i={u:e.replace(p,r).replace(m,t.ratio?Math.round(o*t.ratio):""),w:o};n.push(i),n.srcset.push(i.c=i.u+" "+o+"w")}),n}function i(e,n,o){var i=0,a=0,s=o;if(e){if("container"===n.ratio){for(i=s.scrollWidth,a=s.scrollHeight;!(i&&a||s===t);)s=s.parentNode,i=s.scrollWidth,a=s.scrollHeight;i&&a&&(n.ratio=a/i)}e=r(e,n),e.isPicture=n.isPicture,b&&"IMG"==o.nodeName.toUpperCase()?o.removeAttribute(l.srcsetAttr):o.setAttribute(l.srcsetAttr,e.srcset.join(", ")),Object.defineProperty(o,"_lazyrias",{value:e,writable:!0})}}function a(e,t){var r=o(e,t);return u.modifyOptions.call(e,{target:e,details:r,detail:r}),n.fire(e,"lazyriasmodifyoptions",r),r}function s(e){return e.getAttribute(e.getAttribute("data-srcattr")||u.srcAttr)||e.getAttribute(l.srcsetAttr)||e.getAttribute(l.srcAttr)||e.getAttribute("data-pfsrcset")||""}var l,u,c={string:1,number:1},f=/^\-*\+*\d+\.*\d*$/,d=/^picture$/i,p=/\s*\{\s*width\s*\}\s*/i,m=/\s*\{\s*height\s*\}\s*/i,h=/\s*\{\s*([a-z0-9]+)\s*\}\s*/gi,y=/^\[.*\]|\{.*\}$/,g=/^(?:auto|\d+(px)?)$/,v=t.createElement("a"),w=t.createElement("img"),b="srcset"in w&&!("sizes"in w),_=!!e.HTMLPictureElement&&!b;!function(){var t,o=function(){},r={prefix:"",postfix:"",srcAttr:"data-src",absUrl:!1,modifyOptions:o,widthmap:{},ratio:!1};l=n&&n.cfg||e.lazySizesConfig,l||(l={},e.lazySizesConfig=l),l.supportsType||(l.supportsType=function(e){return!e}),l.rias||(l.rias={}),"widths"in(u=l.rias)||(u.widths=[],function(e){for(var t,n=0;!t||t<3e3;)n+=5,n>30&&(n+=1),t=36*n,e.push(t)}(u.widths));for(t in r)t in u||(u[t]=r[t])}(),addEventListener("lazybeforesizes",function(e){if(e.detail.instance==n){var t,o,r,c,f,d,m,h,y,v,w,b,C;if(t=e.target,e.detail.dataAttr&&!e.defaultPrevented&&!u.disabled&&(y=t.getAttribute(l.sizesAttr)||t.getAttribute("sizes"))&&g.test(y)){if(o=s(t),r=a(t,o),w=p.test(r.prefix)||p.test(r.postfix),r.isPicture&&(c=t.parentNode))for(f=c.getElementsByTagName("source"),d=0,m=f.length;d<m;d++)(w||p.test(h=s(f[d])))&&(i(h,r,f[d]),b=!0);w||p.test(o)?(i(o,r,t),b=!0):b&&(C=[],C.srcset=[],C.isPicture=!0,Object.defineProperty(t,"_lazyrias",{value:C,writable:!0})),b&&(_?t.removeAttribute(l.srcAttr):"auto"!=y&&(v={width:parseInt(y,10)},x({target:t,detail:v})))}}},!0);var x=function(){var o=function(e,t){return e.w-t.w},r=function(e){var t,n,o=e.length,r=e[o-1],i=0;for(i;i<o;i++)if(r=e[i],r.d=r.w/e.w,r.d>=e.d){!r.cached&&(t=e[i-1])&&t.d>e.d-.13*Math.pow(e.d,2.2)&&(n=Math.pow(t.d-.6,1.6),t.cached&&(t.d+=.15*n),t.d+(r.d-e.d)*n>e.d&&(r=t));break}return r},i=function(e,t){var o;return!e._lazyrias&&n.pWS&&(o=n.pWS(e.getAttribute(l.srcsetAttr||""))).length&&(Object.defineProperty(e,"_lazyrias",{value:o,writable:!0}),t&&e.parentNode&&(o.isPicture="PICTURE"==e.parentNode.nodeName.toUpperCase())),e._lazyrias},a=function(t){var o=e.devicePixelRatio||1,r=n.getX&&n.getX(t);return Math.min(r||o,2.4,o)},s=function(t,n){var s,l,u,c,f,d;if(f=t._lazyrias,f.isPicture&&e.matchMedia)for(l=0,s=t.parentNode.getElementsByTagName("source"),u=s.length;l<u;l++)if(i(s[l])&&!s[l].getAttribute("type")&&(!(c=s[l].getAttribute("media"))||(matchMedia(c)||{}).matches)){f=s[l]._lazyrias;break}return(!f.w||f.w<n)&&(f.w=n,f.d=a(t),d=r(f.sort(o))),d},u=function(o){if(o.detail.instance==n){var r,a=o.target;if(!b&&(e.respimage||e.picturefill||lazySizesConfig.pf))return void t.removeEventListener("lazybeforesizes",u);("_lazyrias"in a||o.detail.dataAttr&&i(a,!0))&&(r=s(a,o.detail.width))&&r.u&&a._lazyrias.cur!=r.u&&(a._lazyrias.cur=r.u,r.cached=!0,n.rAF(function(){a.setAttribute(l.srcAttr,r.u),a.setAttribute("src",r.u)}))}};return _?u=function(){}:addEventListener("lazybeforesizes",u),u}()});var deviceIsAndroid=navigator.userAgent.indexOf("Android")>0,deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),deviceIsIOS4=deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),deviceIsIOSWithBadTarget=deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),deviceIsBlackBerry10=navigator.userAgent.indexOf("BB10")>0;/*!
 * Currency tools
 *
 * Copyright (c) 2014 Caroline Schnapp (mllegeorgesand@gmail.com)
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
if(FastClick.prototype.needsClick=function(e){"use strict";switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled)return!0;break;case"input":if(deviceIsIOS&&"file"===e.type||e.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(e.className)},FastClick.prototype.needsFocus=function(e){"use strict";switch(e.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!deviceIsAndroid;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}},FastClick.prototype.sendClick=function(e,t){"use strict";var n,o;document.activeElement&&document.activeElement!==e&&document.activeElement.blur(),o=t.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(e),!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,e.dispatchEvent(n)},FastClick.prototype.determineEventType=function(e){"use strict";return deviceIsAndroid&&"select"===e.tagName.toLowerCase()?"mousedown":"click"},FastClick.prototype.focus=function(e){"use strict";var t;deviceIsIOS&&e.setSelectionRange&&0!==e.type.indexOf("date")&&"time"!==e.type?(t=e.value.length,e.setSelectionRange(t,t)):e.focus()},FastClick.prototype.updateScrollParent=function(e){"use strict";var t,n;if(!(t=e.fastClickScrollParent)||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n,e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}t&&(t.fastClickLastScrollTop=t.scrollTop)},FastClick.prototype.getTargetElementFromEventTarget=function(e){"use strict";return e.nodeType===Node.TEXT_NODE?e.parentNode:e},FastClick.prototype.onTouchStart=function(e){"use strict";var t,n,o;if(e.targetTouches.length>1)return!0;if(t=this.getTargetElementFromEventTarget(e.target),n=e.targetTouches[0],deviceIsIOS){if(o=window.getSelection(),o.rangeCount&&!o.isCollapsed)return!0;if(!deviceIsIOS4){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return e.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(t)}}return this.trackingClick=!0,this.trackingClickStart=e.timeStamp,this.targetElement=t,this.touchStartX=n.pageX,this.touchStartY=n.pageY,e.timeStamp-this.lastClickTime<this.tapDelay&&e.preventDefault(),!0},FastClick.prototype.touchHasMoved=function(e){"use strict";var t=e.changedTouches[0],n=this.touchBoundary;return Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n},FastClick.prototype.onTouchMove=function(e){"use strict";return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e))&&(this.trackingClick=!1,this.targetElement=null),!0)},FastClick.prototype.findControl=function(e){"use strict";return void 0!==e.control?e.control:e.htmlFor?document.getElementById(e.htmlFor):e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},FastClick.prototype.onTouchEnd=function(e){"use strict";var t,n,o,r,i,a=this.targetElement;if(!this.trackingClick)return!0;if(e.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(this.cancelNextClick=!1,this.lastClickTime=e.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,deviceIsIOSWithBadTarget&&(i=e.changedTouches[0],a=document.elementFromPoint(i.pageX-window.pageXOffset,i.pageY-window.pageYOffset)||a,a.fastClickScrollParent=this.targetElement.fastClickScrollParent),"label"===(o=a.tagName.toLowerCase())){if(t=this.findControl(a)){if(this.focus(a),deviceIsAndroid)return!1;a=t}}else if(this.needsFocus(a))return e.timeStamp-n>100||deviceIsIOS&&window.top!==window&&"input"===o?(this.targetElement=null,!1):(this.focus(a),this.sendClick(a,e),deviceIsIOS&&"select"===o||(this.targetElement=null,e.preventDefault()),!1);return!(!deviceIsIOS||deviceIsIOS4||!(r=a.fastClickScrollParent)||r.fastClickLastScrollTop===r.scrollTop)||(this.needsClick(a)||(e.preventDefault(),this.sendClick(a,e)),!1)},FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=!1,this.targetElement=null},FastClick.prototype.onMouse=function(e){"use strict";return!this.targetElement||(!!e.forwardedTouchEvent||(!e.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(e.stopImmediatePropagation?e.stopImmediatePropagation():e.propagationStopped=!0,e.stopPropagation(),e.preventDefault(),!1))))},FastClick.prototype.onClick=function(e){"use strict";var t;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===e.target.type&&0===e.detail||(t=this.onMouse(e),t||(this.targetElement=null),t)},FastClick.prototype.destroy=function(){"use strict";var e=this.layer;deviceIsAndroid&&(e.removeEventListener("mouseover",this.onMouse,!0),e.removeEventListener("mousedown",this.onMouse,!0),e.removeEventListener("mouseup",this.onMouse,!0)),e.removeEventListener("click",this.onClick,!0),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1),e.removeEventListener("touchcancel",this.onTouchCancel,!1)},FastClick.notNeeded=function(e){"use strict";var t,n,o;if(void 0===window.ontouchstart)return!0;if(n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!deviceIsAndroid)return!0;if(t=document.querySelector("meta[name=viewport]")){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(n>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(deviceIsBlackBerry10&&(o=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),o[1]>=10&&o[2]>=3&&(t=document.querySelector("meta[name=viewport]")))){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===e.style.msTouchAction},FastClick.attach=function(e,t){"use strict";return new FastClick(e,t)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){"use strict";return FastClick}):"undefined"!=typeof module&&module.exports?(module.exports=FastClick.attach,module.exports.FastClick=FastClick):window.FastClick=FastClick,/*!
 *  jQuery OwlCarousel v1.3.2
 *
 *  Copyright (c) 2013 Bartosz Wojciechowski
 *  http://www.owlgraphic.com/owlcarousel/
 *
 *  Licensed under MIT
 *
 */
"function"!=typeof Object.create&&(Object.create=function(e){function t(){}return t.prototype=e,new t}),function(e,t,n){var o={init:function(t,n){var o=this;o.$elem=e(n),o.options=e.extend({},e.fn.owlCarousel.options,o.$elem.data(),t),o.userOptions=t,o.loadContent()},loadContent:function(){function t(e){var t,n="";if("function"==typeof o.options.jsonSuccess)o.options.jsonSuccess.apply(this,[e]);else{for(t in e.owl)e.owl.hasOwnProperty(t)&&(n+=e.owl[t].item);o.$elem.html(n)}o.logIn()}var n,o=this;"function"==typeof o.options.beforeInit&&o.options.beforeInit.apply(this,[o.$elem]),"string"==typeof o.options.jsonPath?(n=o.options.jsonPath,e.getJSON(n,t)):o.logIn()},logIn:function(){var e=this;e.$elem.data("owl-originalStyles",e.$elem.attr("style")).data("owl-originalClasses",e.$elem.attr("class")),e.$elem.css({opacity:0}),e.orignalItems=e.options.items,e.checkBrowser(),e.wrapperWidth=0,e.checkVisible=null,e.setVars()},setVars:function(){var e=this;if(0===e.$elem.children().length)return!1;e.baseClass(),e.eventTypes(),e.$userItems=e.$elem.children(),e.itemsAmount=e.$userItems.length,e.wrapItems(),e.$owlItems=e.$elem.find(".owl-item"),e.$owlWrapper=e.$elem.find(".owl-wrapper"),e.playDirection="next",e.prevItem=0,e.prevArr=[0],e.currentItem=0,e.customEvents(),e.onStartup()},onStartup:function(){var e=this;e.updateItems(),e.calculateAll(),e.buildControls(),e.updateControls(),e.response(),e.moveEvents(),e.stopOnHover(),e.owlStatus(),!1!==e.options.transitionStyle&&e.transitionTypes(e.options.transitionStyle),!0===e.options.autoPlay&&(e.options.autoPlay=5e3),e.play(),e.$elem.find(".owl-wrapper").css("display","block"),e.$elem.is(":visible")?e.$elem.css("opacity",1):e.watchVisibility(),e.onstartup=!1,e.eachMoveUpdate(),"function"==typeof e.options.afterInit&&e.options.afterInit.apply(this,[e.$elem])},eachMoveUpdate:function(){var e=this;!0===e.options.lazyLoad&&e.lazyLoad(),!0===e.options.autoHeight&&e.autoHeight(),e.onVisibleItems(),"function"==typeof e.options.afterAction&&e.options.afterAction.apply(this,[e.$elem])},updateVars:function(){var e=this;"function"==typeof e.options.beforeUpdate&&e.options.beforeUpdate.apply(this,[e.$elem]),e.watchVisibility(),e.updateItems(),e.calculateAll(),e.updatePosition(),e.updateControls(),e.eachMoveUpdate(),"function"==typeof e.options.afterUpdate&&e.options.afterUpdate.apply(this,[e.$elem])},reload:function(){var e=this;t.setTimeout(function(){e.updateVars()},0)},watchVisibility:function(){var e=this;if(!1!==e.$elem.is(":visible"))return!1;e.$elem.css({opacity:0}),t.clearInterval(e.autoPlayInterval),t.clearInterval(e.checkVisible),e.checkVisible=t.setInterval(function(){e.$elem.is(":visible")&&(e.reload(),e.$elem.animate({opacity:1},200),t.clearInterval(e.checkVisible))},500)},wrapItems:function(){var e=this;e.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'),e.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'),e.wrapperOuter=e.$elem.find(".owl-wrapper-outer"),e.$elem.css("display","block")},baseClass:function(){var e=this,t=e.$elem.hasClass(e.options.baseClass),n=e.$elem.hasClass(e.options.theme);t||e.$elem.addClass(e.options.baseClass),n||e.$elem.addClass(e.options.theme)},updateItems:function(){var t,n,o=this;if(!1===o.options.responsive)return!1;if(!0===o.options.singleItem)return o.options.items=o.orignalItems=1,o.options.itemsCustom=!1,o.options.itemsDesktop=!1,o.options.itemsDesktopSmall=!1,o.options.itemsTablet=!1,o.options.itemsTabletSmall=!1,o.options.itemsMobile=!1,!1;if(t=e(o.options.responsiveBaseWidth).width(),t>(o.options.itemsDesktop[0]||o.orignalItems)&&(o.options.items=o.orignalItems),!1!==o.options.itemsCustom)for(o.options.itemsCustom.sort(function(e,t){return e[0]-t[0]}),n=0;n<o.options.itemsCustom.length;n+=1)o.options.itemsCustom[n][0]<=t&&(o.options.items=o.options.itemsCustom[n][1]);else t<=o.options.itemsDesktop[0]&&!1!==o.options.itemsDesktop&&(o.options.items=o.options.itemsDesktop[1]),t<=o.options.itemsDesktopSmall[0]&&!1!==o.options.itemsDesktopSmall&&(o.options.items=o.options.itemsDesktopSmall[1]),t<=o.options.itemsTablet[0]&&!1!==o.options.itemsTablet&&(o.options.items=o.options.itemsTablet[1]),t<=o.options.itemsTabletSmall[0]&&!1!==o.options.itemsTabletSmall&&(o.options.items=o.options.itemsTabletSmall[1]),t<=o.options.itemsMobile[0]&&!1!==o.options.itemsMobile&&(o.options.items=o.options.itemsMobile[1]);o.options.items>o.itemsAmount&&!0===o.options.itemsScaleUp&&(o.options.items=o.itemsAmount)},response:function(){var n,o,r=this;if(!0!==r.options.responsive)return!1;o=e(t).width(),r.resizer=function(){e(t).width()!==o&&(!1!==r.options.autoPlay&&t.clearInterval(r.autoPlayInterval),t.clearTimeout(n),n=t.setTimeout(function(){o=e(t).width(),r.updateVars()},r.options.responsiveRefreshRate))},e(t).resize(r.resizer)},updatePosition:function(){var e=this;e.jumpTo(e.currentItem),!1!==e.options.autoPlay&&e.checkAp()},appendItemsSizes:function(){var t=this,n=0,o=t.itemsAmount-t.options.items;t.$owlItems.each(function(r){var i=e(this);i.css({width:t.itemWidth}).data("owl-item",Number(r)),r%t.options.items!=0&&r!==o||r>o||(n+=1),i.data("owl-roundPages",n)})},appendWrapperSizes:function(){var e=this,t=e.$owlItems.length*e.itemWidth;e.$owlWrapper.css({width:2*t,left:0}),e.appendItemsSizes()},calculateAll:function(){var e=this;e.calculateWidth(),e.appendWrapperSizes(),e.loops(),e.max()},calculateWidth:function(){var e=this;e.itemWidth=Math.round(e.$elem.width()/e.options.items)},max:function(){var e=this,t=-1*(e.itemsAmount*e.itemWidth-e.options.items*e.itemWidth);return e.options.items>e.itemsAmount?(e.maximumItem=0,t=0,e.maximumPixels=0):(e.maximumItem=e.itemsAmount-e.options.items,e.maximumPixels=t),t},min:function(){return 0},loops:function(){var t,n,o,r=this,i=0,a=0;for(r.positionsInArray=[0],r.pagesInArray=[],t=0;t<r.itemsAmount;t+=1)a+=r.itemWidth,r.positionsInArray.push(-a),!0===r.options.scrollPerPage&&(n=e(r.$owlItems[t]),(o=n.data("owl-roundPages"))!==i&&(r.pagesInArray[i]=r.positionsInArray[t],i=o))},buildControls:function(){var t=this;!0!==t.options.navigation&&!0!==t.options.pagination||(t.owlControls=e('<div class="owl-controls"/>').toggleClass("clickable",!t.browser.isTouch).appendTo(t.$elem)),!0===t.options.pagination&&t.buildPagination(),!0===t.options.navigation&&t.buildButtons()},buildButtons:function(){var t=this,n=e('<div class="owl-buttons"/>');t.owlControls.append(n),t.buttonPrev=e("<div/>",{class:"owl-prev",html:t.options.navigationText[0]||""}),t.buttonNext=e("<div/>",{class:"owl-next",html:t.options.navigationText[1]||""}),n.append(t.buttonPrev).append(t.buttonNext),n.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(e){e.preventDefault()}),n.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(n){n.preventDefault(),e(this).hasClass("owl-next")?t.next():t.prev()})},buildPagination:function(){var t=this;t.paginationWrapper=e('<div class="owl-pagination"/>'),t.owlControls.append(t.paginationWrapper),t.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(n){n.preventDefault(),Number(e(this).data("owl-page"))!==t.currentItem&&t.goTo(Number(e(this).data("owl-page")),!0)})},updatePagination:function(){var t,n,o,r,i,a,s=this;if(!1===s.options.pagination)return!1;for(s.paginationWrapper.html(""),t=0,n=s.itemsAmount-s.itemsAmount%s.options.items,r=0;r<s.itemsAmount;r+=1)r%s.options.items==0&&(t+=1,n===r&&(o=s.itemsAmount-s.options.items),i=e("<div/>",{class:"owl-page"}),a=e("<span></span>",{text:!0===s.options.paginationNumbers?t:"",class:!0===s.options.paginationNumbers?"owl-numbers":""}),i.append(a),i.data("owl-page",n===r?o:r),i.data("owl-roundPages",t),s.paginationWrapper.append(i));s.checkPagination()},checkPagination:function(){var t=this;if(!1===t.options.pagination)return!1;t.paginationWrapper.find(".owl-page").each(function(){e(this).data("owl-roundPages")===e(t.$owlItems[t.currentItem]).data("owl-roundPages")&&(t.paginationWrapper.find(".owl-page").removeClass("active"),e(this).addClass("active"))})},checkNavigation:function(){var e=this;if(!1===e.options.navigation)return!1;!1===e.options.rewindNav&&(0===e.currentItem&&0===e.maximumItem?(e.buttonPrev.addClass("disabled"),e.buttonNext.addClass("disabled")):0===e.currentItem&&0!==e.maximumItem?(e.buttonPrev.addClass("disabled"),e.buttonNext.removeClass("disabled")):e.currentItem===e.maximumItem?(e.buttonPrev.removeClass("disabled"),e.buttonNext.addClass("disabled")):0!==e.currentItem&&e.currentItem!==e.maximumItem&&(e.buttonPrev.removeClass("disabled"),e.buttonNext.removeClass("disabled")))},updateControls:function(){var e=this;e.updatePagination(),e.checkNavigation(),e.owlControls&&(e.options.items>=e.itemsAmount?e.owlControls.hide():e.owlControls.show())},destroyControls:function(){var e=this;e.owlControls&&e.owlControls.remove()},next:function(e){var t=this;if(t.isTransition)return!1;if(t.currentItem+=!0===t.options.scrollPerPage?t.options.items:1,t.currentItem>t.maximumItem+(!0===t.options.scrollPerPage?t.options.items-1:0)){if(!0!==t.options.rewindNav)return t.currentItem=t.maximumItem,!1;t.currentItem=0,e="rewind"}t.goTo(t.currentItem,e)},prev:function(e){var t=this;if(t.isTransition)return!1;if(!0===t.options.scrollPerPage&&t.currentItem>0&&t.currentItem<t.options.items?t.currentItem=0:t.currentItem-=!0===t.options.scrollPerPage?t.options.items:1,t.currentItem<0){if(!0!==t.options.rewindNav)return t.currentItem=0,!1;t.currentItem=t.maximumItem,e="rewind"}t.goTo(t.currentItem,e)},goTo:function(e,n,o){var r,i=this;return!i.isTransition&&("function"==typeof i.options.beforeMove&&i.options.beforeMove.apply(this,[i.$elem]),e>=i.maximumItem?e=i.maximumItem:e<=0&&(e=0),i.currentItem=i.owl.currentItem=e,!1!==i.options.transitionStyle&&"drag"!==o&&1===i.options.items&&!0===i.browser.support3d?(i.swapSpeed(0),!0===i.browser.support3d?i.transition3d(i.positionsInArray[e]):i.css2slide(i.positionsInArray[e],1),i.afterGo(),i.singleItemTransition(),!1):(r=i.positionsInArray[e],!0===i.browser.support3d?(i.isCss3Finish=!1,!0===n?(i.swapSpeed("paginationSpeed"),t.setTimeout(function(){i.isCss3Finish=!0},i.options.paginationSpeed)):"rewind"===n?(i.swapSpeed(i.options.rewindSpeed),t.setTimeout(function(){i.isCss3Finish=!0},i.options.rewindSpeed)):(i.swapSpeed("slideSpeed"),t.setTimeout(function(){i.isCss3Finish=!0},i.options.slideSpeed)),i.transition3d(r)):!0===n?i.css2slide(r,i.options.paginationSpeed):"rewind"===n?i.css2slide(r,i.options.rewindSpeed):i.css2slide(r,i.options.slideSpeed),void i.afterGo()))},jumpTo:function(e){var t=this;"function"==typeof t.options.beforeMove&&t.options.beforeMove.apply(this,[t.$elem]),e>=t.maximumItem||-1===e?e=t.maximumItem:e<=0&&(e=0),t.swapSpeed(0),!0===t.browser.support3d?t.transition3d(t.positionsInArray[e]):t.css2slide(t.positionsInArray[e],1),t.currentItem=t.owl.currentItem=e,t.afterGo()},afterGo:function(){var e=this;e.prevArr.push(e.currentItem),e.prevItem=e.owl.prevItem=e.prevArr[e.prevArr.length-2],e.prevArr.shift(0),e.prevItem!==e.currentItem&&(e.checkPagination(),e.checkNavigation(),e.eachMoveUpdate(),!1!==e.options.autoPlay&&e.checkAp()),"function"==typeof e.options.afterMove&&e.prevItem!==e.currentItem&&e.options.afterMove.apply(this,[e.$elem])},stop:function(){var e=this;e.apStatus="stop",t.clearInterval(e.autoPlayInterval)},checkAp:function(){var e=this;"stop"!==e.apStatus&&e.play()},play:function(){var e=this;if(e.apStatus="play",!1===e.options.autoPlay)return!1;t.clearInterval(e.autoPlayInterval),e.autoPlayInterval=t.setInterval(function(){e.next(!0)},e.options.autoPlay)},swapSpeed:function(e){var t=this;"slideSpeed"===e?t.$owlWrapper.css(t.addCssSpeed(t.options.slideSpeed)):"paginationSpeed"===e?t.$owlWrapper.css(t.addCssSpeed(t.options.paginationSpeed)):"string"!=typeof e&&t.$owlWrapper.css(t.addCssSpeed(e))},addCssSpeed:function(e){return{"-webkit-transition":"all "+e+"ms ease","-moz-transition":"all "+e+"ms ease","-o-transition":"all "+e+"ms ease",transition:"all "+e+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(e){return{"-webkit-transform":"translate3d("+e+"px, 0px, 0px)","-moz-transform":"translate3d("+e+"px, 0px, 0px)","-o-transform":"translate3d("+e+"px, 0px, 0px)","-ms-transform":"translate3d("+e+"px, 0px, 0px)",transform:"translate3d("+e+"px, 0px,0px)"}},transition3d:function(e){var t=this;t.$owlWrapper.css(t.doTranslate(e))},css2move:function(e){this.$owlWrapper.css({left:e})},css2slide:function(e,t){var n=this;n.isCssFinish=!1,n.$owlWrapper.stop(!0,!0).animate({left:e},{duration:t||n.options.slideSpeed,complete:function(){n.isCssFinish=!0}})},checkBrowser:function(){var e,o,r,i,a=this,s="translate3d(0px, 0px, 0px)",l=n.createElement("div");l.style.cssText="  -moz-transform:"+s+"; -ms-transform:"+s+"; -o-transform:"+s+"; -webkit-transform:"+s+"; transform:"+s,e=/translate3d\(0px, 0px, 0px\)/g,o=l.style.cssText.match(e),r=null!==o&&1===o.length,i="ontouchstart"in t||t.navigator.msMaxTouchPoints,a.browser={support3d:r,isTouch:i}},moveEvents:function(){var e=this;!1===e.options.mouseDrag&&!1===e.options.touchDrag||(e.gestures(),e.disabledEvents())},eventTypes:function(){var e=this,t=["s","e","x"];e.ev_types={},!0===e.options.mouseDrag&&!0===e.options.touchDrag?t=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]:!1===e.options.mouseDrag&&!0===e.options.touchDrag?t=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:!0===e.options.mouseDrag&&!1===e.options.touchDrag&&(t=["mousedown.owl","mousemove.owl","mouseup.owl"]),e.ev_types.start=t[0],e.ev_types.move=t[1],e.ev_types.end=t[2]},disabledEvents:function(){var t=this;t.$elem.on("dragstart.owl",function(e){e.preventDefault()}),t.$elem.on("mousedown.disableTextSelect",function(t){return e(t.target).is("input, textarea, select, option")})},gestures:function(){function o(e){if(void 0!==e.touches)return{x:e.touches[0].pageX,y:e.touches[0].pageY};if(void 0===e.touches){if(void 0!==e.pageX)return{x:e.pageX,y:e.pageY};if(void 0===e.pageX)return{x:e.clientX,y:e.clientY}}}function r(t){"on"===t?(e(n).on(l.ev_types.move,a),e(n).on(l.ev_types.end,s)):"off"===t&&(e(n).off(l.ev_types.move),e(n).off(l.ev_types.end))}function i(n){var i,a=n.originalEvent||n||t.event;if(3===a.which)return!1;if(!(l.itemsAmount<=l.options.items)){if(!1===l.isCssFinish&&!l.options.dragBeforeAnimFinish)return!1;if(!1===l.isCss3Finish&&!l.options.dragBeforeAnimFinish)return!1;!1!==l.options.autoPlay&&t.clearInterval(l.autoPlayInterval),!0===l.browser.isTouch||l.$owlWrapper.hasClass("grabbing")||l.$owlWrapper.addClass("grabbing"),l.newPosX=0,l.newRelativeX=0,e(this).css(l.removeTransition()),i=e(this).position(),u.relativePos=i.left,u.offsetX=o(a).x-i.left,u.offsetY=o(a).y-i.top,r("on"),u.sliding=!1,u.targetElement=a.target||a.srcElement}}function a(r){var i,a,s=r.originalEvent||r||t.event;l.newPosX=o(s).x-u.offsetX,l.newPosY=o(s).y-u.offsetY,l.newRelativeX=l.newPosX-u.relativePos,"function"==typeof l.options.startDragging&&!0!==u.dragging&&0!==l.newRelativeX&&(u.dragging=!0,l.options.startDragging.apply(l,[l.$elem])),(l.newRelativeX>8||l.newRelativeX<-8)&&!0===l.browser.isTouch&&(void 0!==s.preventDefault?s.preventDefault():s.returnValue=!1,u.sliding=!0),(l.newPosY>10||l.newPosY<-10)&&!1===u.sliding&&e(n).off("touchmove.owl"),i=function(){return l.newRelativeX/5},a=function(){return l.maximumPixels+l.newRelativeX/5},l.newPosX=Math.max(Math.min(l.newPosX,i()),a()),!0===l.browser.support3d?l.transition3d(l.newPosX):l.css2move(l.newPosX)}function s(n){var o,i,a,s=n.originalEvent||n||t.event;s.target=s.target||s.srcElement,u.dragging=!1,!0!==l.browser.isTouch&&l.$owlWrapper.removeClass("grabbing"),l.newRelativeX<0?l.dragDirection=l.owl.dragDirection="left":l.dragDirection=l.owl.dragDirection="right",0!==l.newRelativeX&&(o=l.getNewPosition(),l.goTo(o,!1,"drag"),u.targetElement===s.target&&!0!==l.browser.isTouch&&(e(s.target).on("click.disable",function(t){t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault(),e(t.target).off("click.disable")}),i=e._data(s.target,"events").click,a=i.pop(),i.splice(0,0,a))),r("off")}var l=this,u={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};l.isCssFinish=!0,l.$elem.on(l.ev_types.start,".owl-wrapper",i)},getNewPosition:function(){var e=this,t=e.closestItem();return t>e.maximumItem?(e.currentItem=e.maximumItem,t=e.maximumItem):e.newPosX>=0&&(t=0,e.currentItem=0),t},closestItem:function(){var t=this,n=!0===t.options.scrollPerPage?t.pagesInArray:t.positionsInArray,o=t.newPosX,r=null;return e.each(n,function(i,a){o-t.itemWidth/20>n[i+1]&&o-t.itemWidth/20<a&&"left"===t.moveDirection()?(r=a,!0===t.options.scrollPerPage?t.currentItem=e.inArray(r,t.positionsInArray):t.currentItem=i):o+t.itemWidth/20<a&&o+t.itemWidth/20>(n[i+1]||n[i]-t.itemWidth)&&"right"===t.moveDirection()&&(!0===t.options.scrollPerPage?(r=n[i+1]||n[n.length-1],t.currentItem=e.inArray(r,t.positionsInArray)):(r=n[i+1],t.currentItem=i+1))}),t.currentItem},moveDirection:function(){var e,t=this;return t.newRelativeX<0?(e="right",t.playDirection="next"):(e="left",t.playDirection="prev"),e},customEvents:function(){var e=this;e.$elem.on("owl.next",function(){e.next()}),e.$elem.on("owl.prev",function(){e.prev()}),e.$elem.on("owl.play",function(t,n){e.options.autoPlay=n,e.play(),e.hoverStatus="play"}),e.$elem.on("owl.stop",function(){e.stop(),e.hoverStatus="stop"}),e.$elem.on("owl.goTo",function(t,n){e.goTo(n)}),e.$elem.on("owl.jumpTo",function(t,n){e.jumpTo(n)})},stopOnHover:function(){var e=this;!0===e.options.stopOnHover&&!0!==e.browser.isTouch&&!1!==e.options.autoPlay&&(e.$elem.on("mouseover",function(){e.stop()}),e.$elem.on("mouseout",function(){"stop"!==e.hoverStatus&&e.play()}))},lazyLoad:function(){var t,n,o,r,i=this;if(!1===i.options.lazyLoad)return!1;for(t=0;t<i.itemsAmount;t+=1)n=e(i.$owlItems[t]),"loaded"!==n.data("owl-loaded")&&(o=n.data("owl-item"),r=n.find(".lazyOwl"),"string"==typeof r.data("src")?(void 0===n.data("owl-loaded")&&(r.hide(),n.addClass("loading").data("owl-loaded","checked")),(!0!==i.options.lazyFollow||o>=i.currentItem)&&o<i.currentItem+i.options.items&&r.length&&i.lazyPreload(n,r)):n.data("owl-loaded","loaded"))},lazyPreload:function(e,n){function o(){e.data("owl-loaded","loaded").removeClass("loading"),n.removeAttr("data-src"),"fade"===a.options.lazyEffect?n.fadeIn(400):n.show(),"function"==typeof a.options.afterLazyLoad&&a.options.afterLazyLoad.apply(this,[a.$elem])}function r(){s+=1,a.completeImg(n.get(0))||!0===i?o():s<=100?t.setTimeout(r,100):o()}var i,a=this,s=0;"DIV"===n.prop("tagName")?(n.css("background-image","url("+n.data("src")+")"),i=!0):n[0].src=n.data("src"),r()},autoHeight:function(){function n(){var n=e(i.$owlItems[i.currentItem]).height();i.wrapperOuter.css("height",n+"px"),i.wrapperOuter.hasClass("autoHeight")||t.setTimeout(function(){i.wrapperOuter.addClass("autoHeight")},0)}function o(){r+=1,i.completeImg(a.get(0))?n():r<=100?t.setTimeout(o,100):i.wrapperOuter.css("height","")}var r,i=this,a=e(i.$owlItems[i.currentItem]).find("img");void 0!==a.get(0)?(r=0,o()):n()},completeImg:function(e){return!!e.complete&&("undefined"===typeof e.naturalWidth||0!==e.naturalWidth)},onVisibleItems:function(){var t,n=this;for(!0===n.options.addClassActive&&n.$owlItems.removeClass("active"),n.visibleItems=[],t=n.currentItem;t<n.currentItem+n.options.items;t+=1)n.visibleItems.push(t),!0===n.options.addClassActive&&e(n.$owlItems[t]).addClass("active");n.owl.visibleItems=n.visibleItems},transitionTypes:function(e){var t=this;t.outClass="owl-"+e+"-out",t.inClass="owl-"+e+"-in"},singleItemTransition:function(){var e=this,t=e.outClass,n=e.inClass,o=e.$owlItems.eq(e.currentItem),r=e.$owlItems.eq(e.prevItem),i=Math.abs(e.positionsInArray[e.currentItem])+e.positionsInArray[e.prevItem],a=Math.abs(e.positionsInArray[e.currentItem])+e.itemWidth/2,s="webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";e.isTransition=!0,e.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":a+"px","-moz-perspective-origin":a+"px","perspective-origin":a+"px"}),r.css(function(e){return{position:"relative",left:e+"px"}}(i)).addClass(t).on(s,function(){e.endPrev=!0,r.off(s),e.clearTransStyle(r,t)}),o.addClass(n).on(s,function(){e.endCurrent=!0,o.off(s),e.clearTransStyle(o,n)})},clearTransStyle:function(e,t){var n=this;e.css({position:"",left:""}).removeClass(t),n.endPrev&&n.endCurrent&&(n.$owlWrapper.removeClass("owl-origin"),n.endPrev=!1,n.endCurrent=!1,n.isTransition=!1)},owlStatus:function(){var e=this;e.owl={userOptions:e.userOptions,baseElement:e.$elem,userItems:e.$userItems,owlItems:e.$owlItems,currentItem:e.currentItem,prevItem:e.prevItem,visibleItems:e.visibleItems,isTouch:e.browser.isTouch,browser:e.browser,dragDirection:e.dragDirection}},clearEvents:function(){var o=this;o.$elem.off(".owl owl mousedown.disableTextSelect"),e(n).off(".owl owl"),e(t).off("resize",o.resizer)},unWrap:function(){var e=this;0!==e.$elem.children().length&&(e.$owlWrapper.unwrap(),e.$userItems.unwrap().unwrap(),e.owlControls&&e.owlControls.remove()),e.clearEvents(),e.$elem.attr("style",e.$elem.data("owl-originalStyles")||"").attr("class",e.$elem.data("owl-originalClasses"))},destroy:function(){var e=this;e.stop(),t.clearInterval(e.checkVisible),e.unWrap(),e.$elem.removeData()},reinit:function(t){var n=this,o=e.extend({},n.userOptions,t);n.unWrap(),n.init(o,n.$elem)},addItem:function(e,t){var n,o=this;return!!e&&(0===o.$elem.children().length?(o.$elem.append(e),o.setVars(),!1):(o.unWrap(),n=void 0===t||-1===t?-1:t,n>=o.$userItems.length||-1===n?o.$userItems.eq(-1).after(e):o.$userItems.eq(n).before(e),void o.setVars()))},removeItem:function(e){var t,n=this;if(0===n.$elem.children().length)return!1;t=void 0===e||-1===e?-1:e,n.unWrap(),n.$userItems.eq(t).remove(),n.setVars()}};e.fn.owlCarousel=function(t){return this.each(function(){if(!0===e(this).data("owl-init"))return!1;e(this).data("owl-init",!0);var n=Object.create(o);n.init(t,this),e.data(this,"owlCarousel",n)})},e.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1e3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:t,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1}}(jQuery,window,document),/*!
 * Spin.js
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 */
function(e,t){"object"==typeof exports?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Spinner=t()}(this,function(){"use strict";function e(e,t){var n,o=document.createElement(e||"div");for(n in t)o[n]=t[n];return o}function t(e){for(var t=1,n=arguments.length;t<n;t++)e.appendChild(arguments[t]);return e}function n(e,t,n,o){var r=["opacity",t,~~(100*e),n,o].join("-"),i=.01+n/o*100,a=Math.max(1-(1-e)/t*(100-i),e),s=l.substring(0,l.indexOf("Animation")).toLowerCase(),u=s&&"-"+s+"-"||"";return c[r]||(f.insertRule("@"+u+"keyframes "+r+"{0%{opacity:"+a+"}"+i+"%{opacity:"+e+"}"+(i+.01)+"%{opacity:1}"+(i+t)%100+"%{opacity:"+e+"}100%{opacity:"+a+"}}",f.cssRules.length),c[r]=1),r}function o(e,t){var n,o,r=e.style;for(t=t.charAt(0).toUpperCase()+t.slice(1),o=0;o<u.length;o++)if(n=u[o]+t,void 0!==r[n])return n;if(void 0!==r[t])return t}function r(e,t){for(var n in t)e.style[o(e,n)||n]=t[n];return e}function i(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)void 0===e[o]&&(e[o]=n[o])}return e}function a(e,t){return"string"==typeof e?e:e[t%e.length]}function s(e){this.opts=i(e||{},s.defaults,d)}var l,u=["webkit","Moz","ms","O"],c={},f=function(){var n=e("style",{type:"text/css"});return t(document.getElementsByTagName("head")[0],n),n.sheet||n.styleSheet}(),d={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",position:"absolute"};s.defaults={},i(s.prototype,{spin:function(t){this.stop();var n=this,o=n.opts,i=n.el=r(e(0,{className:o.className}),{position:o.position,width:0,zIndex:o.zIndex});o.radius,o.length,o.width;if(r(i,{left:o.left,top:o.top}),t&&t.insertBefore(i,t.firstChild||null),i.setAttribute("role","progressbar"),n.lines(i,n.opts),!l){var a,s=0,u=(o.lines-1)*(1-o.direction)/2,c=o.fps,f=c/o.speed,d=(1-o.opacity)/(f*o.trail/100),p=f/o.lines;!function e(){s++;for(var t=0;t<o.lines;t++)a=Math.max(1-(s+(o.lines-t)*p)%f*d,o.opacity),n.opacity(i,t*o.direction+u,a,o);n.timeout=n.el&&setTimeout(e,~~(1e3/c))}()}return n},stop:function(){var e=this.el;return e&&(clearTimeout(this.timeout),e.parentNode&&e.parentNode.removeChild(e),this.el=void 0),this},lines:function(o,i){function s(t,n){return r(e(),{position:"absolute",width:i.length+i.width+"px",height:i.width+"px",background:t,boxShadow:n,transformOrigin:"left",transform:"rotate("+~~(360/i.lines*c+i.rotate)+"deg) translate("+i.radius+"px,0)",borderRadius:(i.corners*i.width>>1)+"px"})}for(var u,c=0,f=(i.lines-1)*(1-i.direction)/2;c<i.lines;c++)u=r(e(),{position:"absolute",top:1+~(i.width/2)+"px",transform:i.hwaccel?"translate3d(0,0,0)":"",opacity:i.opacity,animation:l&&n(i.opacity,i.trail,f+c*i.direction,i.lines)+" "+1/i.speed+"s linear infinite"}),i.shadow&&t(u,r(s("#000","0 0 4px #000"),{top:"2px"})),t(o,t(u,s(a(i.color,c),"0 0 1px rgba(0,0,0,.1)")));return o},opacity:function(e,t,n){t<e.childNodes.length&&(e.childNodes[t].style.opacity=n)}});var p=r(e("group"),{behavior:"url(#default#VML)"});return!o(p,"transform")&&p.adj?function(){function n(t,n){return e("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',n)}f.addRule(".spin-vml","behavior:url(#default#VML)"),s.prototype.lines=function(e,o){function i(){return r(n("group",{coordsize:c+" "+c,coordorigin:-u+" "+-u}),{width:c,height:c})}function s(e,s,l){t(d,t(r(i(),{rotation:360/o.lines*e+"deg",left:~~s}),t(r(n("roundrect",{arcsize:o.corners}),{width:u,height:o.width,left:o.radius,top:-o.width>>1,filter:l}),n("fill",{color:a(o.color,e),opacity:o.opacity}),n("stroke",{opacity:0}))))}var l,u=o.length+o.width,c=2*u,f=2*-(o.width+o.length)+"px",d=r(i(),{position:"absolute",top:f,left:f});if(o.shadow)for(l=1;l<=o.lines;l++)s(l,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(l=1;l<=o.lines;l++)s(l);return t(e,d)},s.prototype.opacity=function(e,t,n,o){var r=e.firstChild;o=o.shadow&&o.lines||0,r&&t+o<r.childNodes.length&&(r=r.childNodes[t+o],r=r&&r.firstChild,(r=r&&r.firstChild)&&(r.opacity=n))}}():l=o(p,"animation"),s}),/**
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 */
function(e){if("object"==typeof exports)e(require("jquery"),require("spin"));else if("function"==typeof define&&define.amd)define(["jquery","spin"],e);else{if(!window.Spinner)throw new Error("Spin.js not present");e(window.jQuery,window.Spinner)}}(function(e,t){e.fn.spin=function(n,o){return this.each(function(){var r=e(this),i=r.data();i.spinner&&(i.spinner.stop(),delete i.spinner),!1!==n&&(n=e.extend({color:o||r.css("color")},e.fn.spin.presets[n]||n),i.spinner=new t(n).spin(this))})},e.fn.spin.presets={tiny:{lines:8,length:2,width:2,radius:3},small:{lines:8,length:4,width:3,radius:5},large:{lines:10,length:8,width:4,radius:8}}}),function(e){function t(e){var t=e.length,o=n.type(e);return"function"!==o&&!n.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===o||0===t||"number"==typeof t&&t>0&&t-1 in e))}if(!e.jQuery){var n=function(e,t){return new n.fn.init(e,t)};n.isWindow=function(e){return null!=e&&e==e.window},n.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?r[a.call(e)]||"object":typeof e},n.isArray=Array.isArray||function(e){return"array"===n.type(e)},n.isPlainObject=function(e){var t;if(!e||"object"!==n.type(e)||e.nodeType||n.isWindow(e))return!1;try{if(e.constructor&&!i.call(e,"constructor")&&!i.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}for(t in e);return void 0===t||i.call(e,t)},n.each=function(e,n,o){var r=0,i=e.length,a=t(e);if(o){if(a)for(;r<i&&!1!==n.apply(e[r],o);r++);else for(r in e)if(!1===n.apply(e[r],o))break}else if(a)for(;r<i&&!1!==n.call(e[r],r,e[r]);r++);else for(r in e)if(!1===n.call(e[r],r,e[r]))break;return e},n.data=function(e,t,r){if(void 0===r){var i=e[n.expando],a=i&&o[i];if(void 0===t)return a;if(a&&t in a)return a[t]}else if(void 0!==t){var i=e[n.expando]||(e[n.expando]=++n.uuid);return o[i]=o[i]||{},o[i][t]=r,r}},n.removeData=function(e,t){var r=e[n.expando],i=r&&o[r];i&&n.each(t,function(e,t){delete i[t]})},n.extend=function(){var e,t,o,r,i,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[l]||{},l++),"object"!=typeof s&&"function"!==n.type(s)&&(s={}),l===u&&(s=this,l--);l<u;l++)if(null!=(i=arguments[l]))for(r in i)e=s[r],o=i[r],s!==o&&(c&&o&&(n.isPlainObject(o)||(t=n.isArray(o)))?(t?(t=!1,a=e&&n.isArray(e)?e:[]):a=e&&n.isPlainObject(e)?e:{},s[r]=n.extend(c,a,o)):void 0!==o&&(s[r]=o));return s},n.queue=function(e,o,r){if(e){o=(o||"fx")+"queue";var i=n.data(e,o);return r?(!i||n.isArray(r)?i=n.data(e,o,function(e,n){var o=n||[];return null!=e&&(t(Object(e))?function(e,t){for(var n=+t.length,o=0,r=e.length;o<n;)e[r++]=t[o++];if(n!==n)for(;void 0!==t[o];)e[r++]=t[o++];e.length=r}(o,"string"==typeof e?[e]:e):[].push.call(o,e)),o}(r)):i.push(r),i):i||[]}},n.dequeue=function(e,t){n.each(e.nodeType?[e]:e,function(e,o){t=t||"fx";var r=n.queue(o,t),i=r.shift();"inprogress"===i&&(i=r.shift()),i&&("fx"===t&&r.unshift("inprogress"),i.call(o,function(){n.dequeue(o,t)}))})},n.fn=n.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var t=this[0],e=e.apply(t),o=this.offset(),r=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:n(e).offset();return o.top-=parseFloat(t.style.marginTop)||0,o.left-=parseFloat(t.style.marginLeft)||0,e.style&&(r.top+=parseFloat(e.style.borderTopWidth)||0,r.left+=parseFloat(e.style.borderLeftWidth)||0),{top:o.top-r.top,left:o.left-r.left}}};var o={};n.expando="velocity"+(new Date).getTime(),n.uuid=0;for(var r={},i=r.hasOwnProperty,a=r.toString,s="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;l<s.length;l++)r["[object "+s[l]+"]"]=s[l].toLowerCase();n.fn.init.prototype=n.fn,e.Velocity={Utilities:n}}}(window),function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){return function(e,t,n,o){/* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */
function r(e){for(var t=-1,n=e?e.length:0,o=[];++t<n;){var r=e[t];r&&o.push(r)}return o}function i(e){return h.isWrapped(e)?e=[].slice.call(e):h.isNode(e)&&(e=[e]),e}function a(e){var t=d.data(e,"velocity");return null===t?o:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}/* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
function l(e,n,o,r){function i(e,t){return 1-3*t+3*e}function a(e,t){return 3*t-6*e}function s(e){return 3*e}function l(e,t,n){return((i(t,n)*e+a(t,n))*e+s(t))*e}function u(e,t,n){return 3*i(t,n)*e*e+2*a(t,n)*e+s(t)}function c(t,n){for(var r=0;r<h;++r){var i=u(n,e,o);if(0===i)return n;n-=(l(n,e,o)-t)/i}return n}function f(){for(var t=0;t<w;++t)C[t]=l(t*b,e,o)}function d(t,n,r){var i,a,s=0;do{a=n+(r-n)/2,i=l(a,e,o)-t,i>0?r=a:n=a}while(Math.abs(i)>g&&++s<v);return a}function p(t){for(var n=0,r=1,i=w-1;r!=i&&C[r]<=t;++r)n+=b;--r;var a=(t-C[r])/(C[r+1]-C[r]),s=n+a*b,l=u(s,e,o);return l>=y?c(t,s):0==l?s:d(t,n,n+b)}function m(){S=!0,e==n&&o==r||f()}var h=4,y=.001,g=1e-7,v=10,w=11,b=1/(w-1),_="Float32Array"in t;if(4!==arguments.length)return!1;for(var x=0;x<4;++x)if("number"!=typeof arguments[x]||isNaN(arguments[x])||!isFinite(arguments[x]))return!1;e=Math.min(e,1),o=Math.min(o,1),e=Math.max(e,0),o=Math.max(o,0);var C=_?new Float32Array(w):new Array(w),S=!1,T=function(t){return S||m(),e===n&&o===r?t:0===t?0:1===t?1:l(p(t),n,r)};T.getControlPoints=function(){return[{x:e,y:n},{x:o,y:r}]};var k="generateBezier("+[e,n,o,r]+")";return T.toString=function(){return k},T}function u(e,t){var n=e;return h.isString(e)?w.Easings[e]||(n=!1):n=h.isArray(e)&&1===e.length?s.apply(null,e):h.isArray(e)&&2===e.length?b.apply(null,e.concat([t])):!(!h.isArray(e)||4!==e.length)&&l.apply(null,e),!1===n&&(n=w.Easings[w.defaults.easing]?w.defaults.easing:v),n}function c(e){if(e)for(var t=(new Date).getTime(),n=0,r=w.State.calls.length;n<r;n++)if(w.State.calls[n]){var i=w.State.calls[n],s=i[0],l=i[2],u=i[3],p=!!u;u||(u=w.State.calls[n][3]=t-16);for(var m=Math.min((t-u)/l.duration,1),y=0,g=s.length;y<g;y++){var v=s[y],b=v.element;if(a(b)){var x=!1;if(l.display!==o&&null!==l.display&&"none"!==l.display){if("flex"===l.display){var S=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];d.each(S,function(e,t){_.setPropertyValue(b,"display",t)})}_.setPropertyValue(b,"display",l.display)}l.visibility!==o&&"hidden"!==l.visibility&&_.setPropertyValue(b,"visibility",l.visibility);for(var T in v)if("element"!==T){var k,E=v[T],A=h.isString(E.easing)?w.Easings[E.easing]:E.easing;if(1===m)k=E.endValue;else if(k=E.startValue+(E.endValue-E.startValue)*A(m),!p&&k===E.currentValue)continue;if(E.currentValue=k,_.Hooks.registered[T]){var N=_.Hooks.getRoot(T),P=a(b).rootPropertyValueCache[N];P&&(E.rootPropertyValue=P)}var I=_.setPropertyValue(b,T,E.currentValue+(0===parseFloat(k)?"":E.unitType),E.rootPropertyValue,E.scrollData);_.Hooks.registered[T]&&(_.Normalizations.registered[N]?a(b).rootPropertyValueCache[N]=_.Normalizations.registered[N]("extract",null,I[1]):a(b).rootPropertyValueCache[N]=I[1]),"transform"===I[0]&&(x=!0)}l.mobileHA&&a(b).transformCache.translate3d===o&&(a(b).transformCache.translate3d="(0px, 0px, 0px)",x=!0),x&&_.flushTransformCache(b)}}l.display!==o&&"none"!==l.display&&(w.State.calls[n][2].display=!1),l.visibility!==o&&"hidden"!==l.visibility&&(w.State.calls[n][2].visibility=!1),l.progress&&l.progress.call(i[1],i[1],m,Math.max(0,u+l.duration-t),u),1===m&&f(n)}w.State.isTicking&&C(c)}function f(e,t){if(!w.State.calls[e])return!1;for(var n=w.State.calls[e][0],r=w.State.calls[e][1],i=w.State.calls[e][2],s=w.State.calls[e][4],l=!1,u=0,c=n.length;u<c;u++){var f=n[u].element;if(t||i.loop||("none"===i.display&&_.setPropertyValue(f,"display",i.display),"hidden"===i.visibility&&_.setPropertyValue(f,"visibility",i.visibility)),!0!==i.loop&&(d.queue(f)[1]===o||!/\.velocityQueueEntryFlag/i.test(d.queue(f)[1]))&&a(f)){a(f).isAnimating=!1,a(f).rootPropertyValueCache={};var p=!1;d.each(_.Lists.transforms3D,function(e,t){var n=/^scale/.test(t)?1:0,r=a(f).transformCache[t];a(f).transformCache[t]!==o&&new RegExp("^\\("+n+"[^.]").test(r)&&(p=!0,delete a(f).transformCache[t])}),i.mobileHA&&(p=!0,delete a(f).transformCache.translate3d),p&&_.flushTransformCache(f),_.Values.removeClass(f,"velocity-animating")}if(!t&&i.complete&&!i.loop&&u===c-1)try{i.complete.call(r,r)}catch(e){setTimeout(function(){throw e},1)}s&&!0!==i.loop&&s(r),!0!==i.loop||t||(d.each(a(f).tweensContainer,function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360)}),w(f,"reverse",{loop:!0,delay:i.delay})),!1!==i.queue&&d.dequeue(f,i.queue)}w.State.calls[e]=!1;for(var m=0,h=w.State.calls.length;m<h;m++)if(!1!==w.State.calls[m]){l=!0;break}!1===l&&(w.State.isTicking=!1,delete w.State.calls,w.State.calls=[])}var d,p=function(){if(n.documentMode)return n.documentMode;for(var e=7;e>4;e--){var t=n.createElement("div");if(t.innerHTML="\x3c!--[if IE "+e+"]><span></span><![endif]--\x3e",t.getElementsByTagName("span").length)return t=null,e}return o}(),m=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var n,o=(new Date).getTime();/* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */
return n=Math.max(0,16-(o-e)),e=o+n,setTimeout(function(){t(o+n)},n)}}(),h={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},/* Copyright Martin Bohm. MIT License: https://gist.github.com/Tomalak/818a78a226a0738eaade */
isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==o&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},y=!1;if(e.fn&&e.fn.jquery?(d=e,y=!0):d=t.Velocity.Utilities,p<=8&&!y)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(p<=7)return void(jQuery.fn.velocity=jQuery.fn.animate);var g=400,v="swing",w={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:n.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:d,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:g,easing:v,begin:o,complete:o,progress:o,display:o,visibility:o,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){d.data(e,"velocity",{isSVG:h.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:1,patch:0},debug:!1};t.pageYOffset!==o?(w.State.scrollAnchor=t,w.State.scrollPropertyLeft="pageXOffset",w.State.scrollPropertyTop="pageYOffset"):(w.State.scrollAnchor=n.documentElement||n.body.parentNode||n.body,w.State.scrollPropertyLeft="scrollLeft",w.State.scrollPropertyTop="scrollTop");/* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
/* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
       then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */
var b=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,n,o){var r={x:t.x+o.dx*n,v:t.v+o.dv*n,tension:t.tension,friction:t.friction};return{dx:r.v,dv:e(r)}}function n(n,o){var r={dx:n.v,dv:e(n)},i=t(n,.5*o,r),a=t(n,.5*o,i),s=t(n,o,a),l=1/6*(r.dx+2*(i.dx+a.dx)+s.dx),u=1/6*(r.dv+2*(i.dv+a.dv)+s.dv);return n.x=n.x+l*o,n.v=n.v+u*o,n}return function e(t,o,r){var i,a,s,l={x:-1,v:0,tension:null,friction:null},u=[0],c=0;for(t=parseFloat(t)||500,o=parseFloat(o)||20,r=r||null,l.tension=t,l.friction=o,i=null!==r,i?(c=e(t,o),a=c/r*.016):a=.016;;)if(s=n(s||l,a),u.push(1+s.x),c+=16,!(Math.abs(s.x)>1e-4&&Math.abs(s.v)>1e-4))break;return i?function(e){return u[e*(u.length-1)|0]}:c}}();w.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},d.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){w.Easings[t[0]]=l.apply(null,t[1])});var _=w.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<_.Lists.colors.length;e++){var t="color"===_.Lists.colors[e]?"0 0 0 1":"255 255 255 1";_.Hooks.templates[_.Lists.colors[e]]=["Red Green Blue Alpha",t]}var n,o,r;if(p)for(n in _.Hooks.templates){o=_.Hooks.templates[n],r=o[0].split(" ");var i=o[1].match(_.RegEx.valueSplit);"Color"===r[0]&&(r.push(r.shift()),i.push(i.shift()),_.Hooks.templates[n]=[r.join(" "),i.join(" ")])}for(n in _.Hooks.templates){o=_.Hooks.templates[n],r=o[0].split(" ");for(var e in r){var a=n+r[e],s=e;_.Hooks.registered[a]=[n,s]}}},getRoot:function(e){var t=_.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return _.RegEx.valueUnwrap.test(t)&&(t=t.match(_.RegEx.valueUnwrap)[1]),_.Values.isCSSNullValue(t)&&(t=_.Hooks.templates[e][1]),t},extractValue:function(e,t){var n=_.Hooks.registered[e];if(n){var o=n[0],r=n[1];return t=_.Hooks.cleanRootPropertyValue(o,t),t.toString().match(_.RegEx.valueSplit)[r]}return t},injectValue:function(e,t,n){var o=_.Hooks.registered[e];if(o){var r,i=o[0],a=o[1];return n=_.Hooks.cleanRootPropertyValue(i,n),r=n.toString().match(_.RegEx.valueSplit),r[a]=t,r.join(" ")}return n}},Normalizations:{registered:{clip:function(e,t,n){switch(e){case"name":return"clip";case"extract":var o;return _.RegEx.wrappedValueAlreadyExtracted.test(n)?o=n:(o=n.toString().match(_.RegEx.valueUnwrap),o=o?o[1].replace(/,(\s+)?/g," "):n),o;case"inject":return"rect("+n+")"}},blur:function(e,t,n){switch(e){case"name":return"-webkit-filter";case"extract":var o=parseFloat(n);if(!o&&0!==o){var r=n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);o=r?r[1]:0}return o;case"inject":return parseFloat(n)?"blur("+n+")":"none"}},opacity:function(e,t,n){if(p<=8)switch(e){case"name":return"filter";case"extract":var o=n.toString().match(/alpha\(opacity=(.*)\)/i);return n=o?o[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(n)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(n),10)+")"}else switch(e){case"name":return"opacity";case"extract":case"inject":return n}}},register:function(){p<=9||w.State.isGingerbread||(_.Lists.transformsBase=_.Lists.transformsBase.concat(_.Lists.transforms3D));for(var e=0;e<_.Lists.transformsBase.length;e++)!function(){var t=_.Lists.transformsBase[e];_.Normalizations.registered[t]=function(e,n,r){switch(e){case"name":return"transform";case"extract":return a(n)===o||a(n).transformCache[t]===o?/^scale/i.test(t)?1:0:a(n).transformCache[t].replace(/[()]/g,"");case"inject":var i=!1;switch(t.substr(0,t.length-1)){case"translate":i=!/(%|px|em|rem|vw|vh|\d)$/i.test(r);break;case"scal":case"scale":w.State.isAndroid&&a(n).transformCache[t]===o&&r<1&&(r=1),i=!/(\d)$/i.test(r);break;case"skew":case"rotate":i=!/(deg|\d)$/i.test(r)}return i||(a(n).transformCache[t]="("+r+")"),a(n).transformCache[t]}}}();for(var e=0;e<_.Lists.colors.length;e++)!function(){var t=_.Lists.colors[e];_.Normalizations.registered[t]=function(e,n,r){switch(e){case"name":return t;case"extract":var i;if(_.RegEx.wrappedValueAlreadyExtracted.test(r))i=r;else{var a,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(r)?a=s[r]!==o?s[r]:s.black:_.RegEx.isHex.test(r)?a="rgb("+_.Values.hexToRgb(r).join(" ")+")":/^rgba?\(/i.test(r)||(a=s.black),i=(a||r).toString().match(_.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return p<=8||3!==i.split(" ").length||(i+=" 1"),i;case"inject":return p<=8?4===r.split(" ").length&&(r=r.split(/\s+/).slice(0,3).join(" ")):3===r.split(" ").length&&(r+=" 1"),(p<=8?"rgb":"rgba")+"("+r.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(p||w.State.isAndroid&&!w.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(w.State.prefixMatches[e])return[w.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],n=0,o=t.length;n<o;n++){var r;if(r=0===n?e:t[n]+e.replace(/^\w/,function(e){return e.toUpperCase()}),h.isString(w.State.prefixElement.style[r]))return w.State.prefixMatches[e]=r,[r,!0]}return[e,!1]}},Values:{/* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */
hexToRgb:function(e){var t,n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return e=e.replace(n,function(e,t,n,o){return t+t+n+n+o+o}),t=o.exec(e),t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,n,r,i){function s(e,n){function r(){u&&_.setPropertyValue(e,"display","none")}var l=0;if(p<=8)l=d.css(e,n);else{var u=!1;if(/^(width|height)$/.test(n)&&0===_.getPropertyValue(e,"display")&&(u=!0,_.setPropertyValue(e,"display",_.Values.getDisplayType(e))),!i){if("height"===n&&"border-box"!==_.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(_.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(_.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(_.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(_.getPropertyValue(e,"paddingBottom"))||0);return r(),c}if("width"===n&&"border-box"!==_.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var f=e.offsetWidth-(parseFloat(_.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(_.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(_.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(_.getPropertyValue(e,"paddingRight"))||0);return r(),f}}var m;m=a(e)===o?t.getComputedStyle(e,null):a(e).computedStyle?a(e).computedStyle:a(e).computedStyle=t.getComputedStyle(e,null),(p||w.State.isFirefox)&&"borderColor"===n&&(n="borderTopColor"),l=9===p&&"filter"===n?m.getPropertyValue(n):m[n],""!==l&&null!==l||(l=e.style[n]),r()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(n)){var h=s(e,"position");("fixed"===h||"absolute"===h&&/top|left/i.test(n))&&(l=d(e).position()[n]+"px")}return l}var l;if(_.Hooks.registered[n]){var u=n,c=_.Hooks.getRoot(u);r===o&&(r=_.getPropertyValue(e,_.Names.prefixCheck(c)[0])),_.Normalizations.registered[c]&&(r=_.Normalizations.registered[c]("extract",e,r)),l=_.Hooks.extractValue(u,r)}else if(_.Normalizations.registered[n]){var f,m;f=_.Normalizations.registered[n]("name",e),"transform"!==f&&(m=s(e,_.Names.prefixCheck(f)[0]),_.Values.isCSSNullValue(m)&&_.Hooks.templates[n]&&(m=_.Hooks.templates[n][1])),l=_.Normalizations.registered[n]("extract",e,m)}return/^[\d-]/.test(l)||(l=a(e)&&a(e).isSVG&&_.Names.SVGAttribute(n)?/^(height|width)$/i.test(n)?e.getBBox()[n]:e.getAttribute(n):s(e,_.Names.prefixCheck(n)[0])),_.Values.isCSSNullValue(l)&&(l=0),w.debug>=2&&console.log("Get "+n+": "+l),l},setPropertyValue:function(e,n,o,r,i){var s=n;if("scroll"===n)i.container?i.container["scroll"+i.direction]=o:"Left"===i.direction?t.scrollTo(o,i.alternateValue):t.scrollTo(i.alternateValue,o);else if(_.Normalizations.registered[n]&&"transform"===_.Normalizations.registered[n]("name",e))_.Normalizations.registered[n]("inject",e,o),s="transform",o=a(e).transformCache[n];else{if(_.Hooks.registered[n]){var l=n,u=_.Hooks.getRoot(n);r=r||_.getPropertyValue(e,u),o=_.Hooks.injectValue(l,o,r),n=u}if(_.Normalizations.registered[n]&&(o=_.Normalizations.registered[n]("inject",e,o),n=_.Normalizations.registered[n]("name",e)),s=_.Names.prefixCheck(n)[0],p<=8)try{e.style[s]=o}catch(e){w.debug&&console.log("Browser does not support ["+o+"] for ["+s+"]")}else a(e)&&a(e).isSVG&&_.Names.SVGAttribute(n)?e.setAttribute(n,o):e.style[s]=o;w.debug>=2&&console.log("Set "+n+" ("+s+"): "+o)}return[s,o]},flushTransformCache:function(e){function t(t){return parseFloat(_.getPropertyValue(e,t))}var n="";if((p||w.State.isAndroid&&!w.State.isChrome)&&a(e).isSVG){var o={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};d.each(a(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),o[e]&&(n+=e+"("+o[e].join(" ")+") ",delete o[e])})}else{var r,i;d.each(a(e).transformCache,function(t){if(r=a(e).transformCache[t],"transformPerspective"===t)return i=r,!0;9===p&&"rotateZ"===t&&(t="rotate"),n+=t+r+" "}),i&&(n="perspective"+i+" "+n)}_.setPropertyValue(e,"transform",n)}};_.Hooks.register(),_.Normalizations.register(),w.hook=function(e,t,n){var r=o;return e=i(e),d.each(e,function(e,i){if(a(i)===o&&w.init(i),n===o)r===o&&(r=w.CSS.getPropertyValue(i,t));else{var s=w.CSS.setPropertyValue(i,t,n);"transform"===s[0]&&w.CSS.flushTransformCache(i),r=s}}),r};var x=function(){function e(){return l?A.promise||null:p}function s(){function e(e){function p(e,t){var n=o,r=o,i=o;return h.isArray(e)?(n=e[0],!h.isArray(e[1])&&/^[\d-]/.test(e[1])||h.isFunction(e[1])||_.RegEx.isHex.test(e[1])?i=e[1]:(h.isString(e[1])&&!_.RegEx.isHex.test(e[1])||h.isArray(e[1]))&&(r=t?e[1]:u(e[1],l.duration),e[2]!==o&&(i=e[2]))):n=e,t||(r=r||l.easing),h.isFunction(n)&&(n=n.call(s,T,S)),h.isFunction(i)&&(i=i.call(s,T,S)),[n||0,r,i]}function m(e,t){var n,o;return o=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return n=e,""}),n||(n=_.Values.getUnitType(e)),[o,n]}if(l.begin&&0===T)try{l.begin.call(y,y)}catch(e){setTimeout(function(){throw e},1)}if("scroll"===N){var g,x,C,k=/^x$/i.test(l.axis)?"Left":"Top",E=parseFloat(l.offset)||0;l.container?h.isWrapped(l.container)||h.isNode(l.container)?(l.container=l.container[0]||l.container,g=l.container["scroll"+k],C=g+d(s).position()[k.toLowerCase()]+E):l.container=null:(g=w.State.scrollAnchor[w.State["scrollProperty"+k]],x=w.State.scrollAnchor[w.State["scrollProperty"+("Left"===k?"Top":"Left")]],C=d(s).offset()[k.toLowerCase()]+E),f={scroll:{rootPropertyValue:!1,startValue:g,currentValue:g,endValue:C,unitType:"",easing:l.easing,scrollData:{container:l.container,direction:k,alternateValue:x}},element:s},w.debug&&console.log("tweensContainer (scroll): ",f.scroll,s)}else if("reverse"===N){if(!a(s).tweensContainer)return void d.dequeue(s,l.queue);"none"===a(s).opts.display&&(a(s).opts.display="auto"),"hidden"===a(s).opts.visibility&&(a(s).opts.visibility="visible"),a(s).opts.loop=!1,a(s).opts.begin=null,a(s).opts.complete=null,b.easing||delete l.easing,b.duration||delete l.duration,l=d.extend({},a(s).opts,l);var P=d.extend(!0,{},a(s).tweensContainer);for(var I in P)if("element"!==I){var D=P[I].startValue;P[I].startValue=P[I].currentValue=P[I].endValue,P[I].endValue=D,h.isEmptyObject(b)||(P[I].easing=l.easing),w.debug&&console.log("reverse tweensContainer ("+I+"): "+JSON.stringify(P[I]),s)}f=P}else if("start"===N){var P;a(s).tweensContainer&&!0===a(s).isAnimating&&(P=a(s).tweensContainer),d.each(v,function(e,t){if(RegExp("^"+_.Lists.colors.join("$|^")+"$").test(e)){var n=p(t,!0),r=n[0],i=n[1],a=n[2];if(_.RegEx.isHex.test(r)){for(var s=["Red","Green","Blue"],l=_.Values.hexToRgb(r),u=a?_.Values.hexToRgb(a):o,c=0;c<s.length;c++){var f=[l[c]];i&&f.push(i),u!==o&&f.push(u[c]),v[e+s[c]]=f}delete v[e]}}});for(var L in v){var j=p(v[L]),F=j[0],z=j[1],R=j[2];L=_.Names.camelCase(L);var H=_.Hooks.getRoot(L),O=!1;if(a(s).isSVG||!1!==_.Names.prefixCheck(H)[1]||_.Normalizations.registered[H]!==o){(l.display!==o&&null!==l.display&&"none"!==l.display||l.visibility!==o&&"hidden"!==l.visibility)&&/opacity|filter/.test(L)&&!R&&0!==F&&(R=0),l._cacheValues&&P&&P[L]?(R===o&&(R=P[L].endValue+P[L].unitType),O=a(s).rootPropertyValueCache[H]):_.Hooks.registered[L]?R===o?(O=_.getPropertyValue(s,H),R=_.getPropertyValue(s,L,O)):O=_.Hooks.templates[H][1]:R===o&&(R=_.getPropertyValue(s,L));var B,V,W,q=!1;if(B=m(L,R),R=B[0],W=B[1],B=m(L,F),F=B[0].replace(/^([+-\/*])=/,function(e,t){return q=t,""}),V=B[1],R=parseFloat(R)||0,F=parseFloat(F)||0,"%"===V&&(/^(fontSize|lineHeight)$/.test(L)?(F/=100,V="em"):/^scale/.test(L)?(F/=100,V=""):/(Red|Green|Blue)$/i.test(L)&&(F=F/100*255,V="")),/[\/*]/.test(q))V=W;else if(W!==V&&0!==R)if(0===F)V=W;else{i=i||function(){var e={myParent:s.parentNode||n.body,position:_.getPropertyValue(s,"position"),fontSize:_.getPropertyValue(s,"fontSize")},o=e.position===$.lastPosition&&e.myParent===$.lastParent,r=e.fontSize===$.lastFontSize;$.lastParent=e.myParent,$.lastPosition=e.position,$.lastFontSize=e.fontSize;var i={};if(r&&o)i.emToPx=$.lastEmToPx,i.percentToPxWidth=$.lastPercentToPxWidth,i.percentToPxHeight=$.lastPercentToPxHeight;else{var l=a(s).isSVG?n.createElementNS("http://www.w3.org/2000/svg","rect"):n.createElement("div");w.init(l),e.myParent.appendChild(l),d.each(["overflow","overflowX","overflowY"],function(e,t){w.CSS.setPropertyValue(l,t,"hidden")}),w.CSS.setPropertyValue(l,"position",e.position),w.CSS.setPropertyValue(l,"fontSize",e.fontSize),w.CSS.setPropertyValue(l,"boxSizing","content-box"),d.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){w.CSS.setPropertyValue(l,t,"100%")}),w.CSS.setPropertyValue(l,"paddingLeft","100em"),i.percentToPxWidth=$.lastPercentToPxWidth=(parseFloat(_.getPropertyValue(l,"width",null,!0))||1)/100,i.percentToPxHeight=$.lastPercentToPxHeight=(parseFloat(_.getPropertyValue(l,"height",null,!0))||1)/100,i.emToPx=$.lastEmToPx=(parseFloat(_.getPropertyValue(l,"paddingLeft"))||1)/100,e.myParent.removeChild(l)}return null===$.remToPx&&($.remToPx=parseFloat(_.getPropertyValue(n.body,"fontSize"))||16),null===$.vwToPx&&($.vwToPx=parseFloat(t.innerWidth)/100,$.vhToPx=parseFloat(t.innerHeight)/100),i.remToPx=$.remToPx,i.vwToPx=$.vwToPx,i.vhToPx=$.vhToPx,w.debug>=1&&console.log("Unit ratios: "+JSON.stringify(i),s),i}();var X=/margin|padding|left|right|width|text|word|letter/i.test(L)||/X$/.test(L)||"x"===L?"x":"y";switch(W){case"%":R*="x"===X?i.percentToPxWidth:i.percentToPxHeight;break;case"px":break;default:R*=i[W+"ToPx"]}switch(V){case"%":R*=1/("x"===X?i.percentToPxWidth:i.percentToPxHeight);break;case"px":break;default:R*=1/i[V+"ToPx"]}}switch(q){case"+":F=R+F;break;case"-":F=R-F;break;case"*":F*=R;break;case"/":F=R/F}f[L]={rootPropertyValue:O,startValue:R,currentValue:R,endValue:F,unitType:V,easing:z},w.debug&&console.log("tweensContainer ("+L+"): "+JSON.stringify(f[L]),s)}else w.debug&&console.log("Skipping ["+H+"] due to a lack of browser support.")}f.element=s}f.element&&(_.Values.addClass(s,"velocity-animating"),M.push(f),""===l.queue&&(a(s).tweensContainer=f,a(s).opts=l),a(s).isAnimating=!0,T===S-1?(w.State.calls.length>1e4&&(w.State.calls=r(w.State.calls)),w.State.calls.push([M,y,l,null,A.resolver]),!1===w.State.isTicking&&(w.State.isTicking=!0,c())):T++)}var i,s=this,l=d.extend({},w.defaults,b),f={};switch(a(s)===o&&w.init(s),parseFloat(l.delay)&&!1!==l.queue&&d.queue(s,l.queue,function(e){w.velocityQueueEntryFlag=!0,a(s).delayTimer={setTimeout:setTimeout(e,parseFloat(l.delay)),next:e}}),l.duration.toString().toLowerCase()){case"fast":l.duration=200;break;case"normal":l.duration=g;break;case"slow":l.duration=600;break;default:l.duration=parseFloat(l.duration)||1}!1!==w.mock&&(!0===w.mock?l.duration=l.delay=1:(l.duration*=parseFloat(w.mock)||1,l.delay*=parseFloat(w.mock)||1)),l.easing=u(l.easing,l.duration),l.begin&&!h.isFunction(l.begin)&&(l.begin=null),l.progress&&!h.isFunction(l.progress)&&(l.progress=null),l.complete&&!h.isFunction(l.complete)&&(l.complete=null),l.display!==o&&null!==l.display&&(l.display=l.display.toString().toLowerCase(),"auto"===l.display&&(l.display=w.CSS.Values.getDisplayType(s))),l.visibility!==o&&null!==l.visibility&&(l.visibility=l.visibility.toString().toLowerCase()),l.mobileHA=l.mobileHA&&w.State.isMobile&&!w.State.isGingerbread,!1===l.queue?l.delay?setTimeout(e,l.delay):e():d.queue(s,l.queue,function(t,n){if(!0===n)return A.promise&&A.resolver(y),!0;w.velocityQueueEntryFlag=!0,e(t)}),""!==l.queue&&"fx"!==l.queue||"inprogress"===d.queue(s)[0]||d.dequeue(s)}var l,p,m,y,v,b,C=arguments[0]&&(d.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||h.isString(arguments[0].properties));if(h.isWrapped(this)?(l=!1,m=0,y=this,p=this):(l=!0,m=1,y=C?arguments[0].elements:arguments[0]),y=i(y)){C?(v=arguments[0].properties,b=arguments[0].options):(v=arguments[m],b=arguments[m+1]);var S=y.length,T=0;if("stop"!==v&&!d.isPlainObject(b)){var k=m+1;b={};for(var E=k;E<arguments.length;E++)h.isArray(arguments[E])||!/^(fast|normal|slow)$/i.test(arguments[E])&&!/^\d/.test(arguments[E])?h.isString(arguments[E])||h.isArray(arguments[E])?b.easing=arguments[E]:h.isFunction(arguments[E])&&(b.complete=arguments[E]):b.duration=arguments[E]}var A={promise:null,resolver:null,rejecter:null};l&&w.Promise&&(A.promise=new w.Promise(function(e,t){A.resolver=e,A.rejecter=t}));var N;switch(v){case"scroll":N="scroll";break;case"reverse":N="reverse";break;case"stop":d.each(y,function(e,t){a(t)&&a(t).delayTimer&&(clearTimeout(a(t).delayTimer.setTimeout),a(t).delayTimer.next&&a(t).delayTimer.next(),delete a(t).delayTimer)});var P=[];return d.each(w.State.calls,function(e,t){t&&d.each(t[1],function(n,r){var i=h.isString(b)?b:"";if(b!==o&&t[2].queue!==i)return!0;d.each(y,function(t,n){n===r&&(b!==o&&(d.each(d.queue(n,i),function(e,t){h.isFunction(t)&&t(null,!0)}),d.queue(n,i,[])),a(n)&&""===i&&d.each(a(n).tweensContainer,function(e,t){t.endValue=t.currentValue}),P.push(e))})})}),d.each(P,function(e,t){f(t,!0)}),A.promise&&A.resolver(y),e();default:if(!d.isPlainObject(v)||h.isEmptyObject(v)){if(h.isString(v)&&w.Redirects[v]){var I=d.extend({},b),D=I.duration,L=I.delay||0;return!0===I.backwards&&(y=d.extend(!0,[],y).reverse()),d.each(y,function(e,t){parseFloat(I.stagger)?I.delay=L+parseFloat(I.stagger)*e:h.isFunction(I.stagger)&&(I.delay=L+I.stagger.call(t,e,S)),I.drag&&(I.duration=parseFloat(D)||(/^(callout|transition)/.test(v)?1e3:g),I.duration=Math.max(I.duration*(I.backwards?1-e/S:(e+1)/S),.75*I.duration,200)),w.Redirects[v].call(t,t,I||{},e,S,y,A.promise?A:o)}),e()}var j="Velocity: First argument ("+v+") was not a property map, a known action, or a registered redirect. Aborting.";return A.promise?A.rejecter(new Error(j)):console.log(j),e()}N="start"}var $={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},M=[];d.each(y,function(e,t){h.isNode(t)&&s.call(t)});var F,I=d.extend({},w.defaults,b);if(I.loop=parseInt(I.loop),F=2*I.loop-1,I.loop)for(var z=0;z<F;z++){var R={delay:I.delay,progress:I.progress};z===F-1&&(R.display=I.display,R.visibility=I.visibility,R.complete=I.complete),x(y,"reverse",R)}return e()}};w=d.extend(x,w),w.animate=x;var C=t.requestAnimationFrame||m;return w.State.isMobile||n.hidden===o||n.addEventListener("visibilitychange",function(){n.hidden?(C=function(e){return setTimeout(function(){e(!0)},16)},c()):C=t.requestAnimationFrame||m}),e.Velocity=w,e!==t&&(e.fn.velocity=x,e.fn.velocity.defaults=w.defaults),d.each(["Down","Up"],function(e,t){w.Redirects["slide"+t]=function(e,n,r,i,a,s){var l=d.extend({},n),u=l.begin,c=l.complete,f={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},p={};l.display===o&&(l.display="Down"===t?"inline"===w.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){u&&u.call(a,a);for(var n in f){p[n]=e.style[n];var o=w.CSS.getPropertyValue(e,n);f[n]="Down"===t?[o,0]:[0,o]}p.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in p)e.style[t]=p[t];c&&c.call(a,a),s&&s.resolver(a)},w(e,f,l)}}),d.each(["In","Out"],function(e,t){w.Redirects["fade"+t]=function(e,n,r,i,a,s){var l=d.extend({},n),u={opacity:"In"===t?1:0},c=l.complete;l.complete=r!==i-1?l.begin=null:function(){c&&c.call(a,a),s&&s.resolver(a)},l.display===o&&(l.display="In"===t?"auto":"none"),w(this,u,l)}}),w}(window.jQuery||window.Zepto||window,window,document)}),function(e){"use strict";e.fn.fitVids=function(t){var n={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("div");r.innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',o.appendChild(r.childNodes[1])}return t&&e.extend(n,t),this.each(function(){var t=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];n.customSelector&&t.push(n.customSelector);var o=".fitvidsignore";n.ignore&&(o=o+", "+n.ignore);var r=e(this).find(t.join(","));r=r.not("object object"),r=r.not(o),r.each(function(){var t=e(this);if(!(t.parents(o).length>0||"embed"===this.tagName.toLowerCase()&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)){t.css("height")||t.css("width")||!isNaN(t.attr("height"))&&!isNaN(t.attr("width"))||(t.attr("height",9),t.attr("width",16));var n="object"===this.tagName.toLowerCase()||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height(),r=isNaN(parseInt(t.attr("width"),10))?t.width():parseInt(t.attr("width"),10),i=n/r;if(!t.attr("name")){var a="fitvid"+e.fn.fitVids._count;t.attr("name",a),e.fn.fitVids._count++}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*i+"%"),t.removeAttr("height").removeAttr("width")}})})},e.fn.fitVids._count=0}(window.jQuery||window.Zepto),void 0===Currency)var Currency={};Currency.cookie={configuration:{expires:365,path:"/",domain:window.location.hostname},name:"currency",write:function(e){jQuery.cookie(this.name,e,this.configuration)},read:function(){return jQuery.cookie(this.name)},destroy:function(){jQuery.cookie(this.name,null,this.configuration)}},Currency.moneyFormats={USD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} USD"},EUR:{money_format:"&euro;{{amount}}",money_with_currency_format:"&euro;{{amount}} EUR"},GBP:{money_format:"&pound;{{amount}}",money_with_currency_format:"&pound;{{amount}} GBP"},CAD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} CAD"},ALL:{money_format:"Lek {{amount}}",money_with_currency_format:"Lek {{amount}} ALL"},DZD:{money_format:"DA {{amount}}",money_with_currency_format:"DA {{amount}} DZD"},AOA:{money_format:"Kz{{amount}}",money_with_currency_format:"Kz{{amount}} AOA"},ARS:{money_format:"${{amount_with_comma_separator}}",money_with_currency_format:"${{amount_with_comma_separator}} ARS"},AMD:{money_format:"{{amount}} AMD",money_with_currency_format:"{{amount}} AMD"},AWG:{money_format:"Afl{{amount}}",money_with_currency_format:"Afl{{amount}} AWG"},AUD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} AUD"},BBD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} Bds"},AZN:{money_format:"m.{{amount}}",money_with_currency_format:"m.{{amount}} AZN"},BDT:{money_format:"Tk {{amount}}",money_with_currency_format:"Tk {{amount}} BDT"},BSD:{money_format:"BS${{amount}}",money_with_currency_format:"BS${{amount}} BSD"},BHD:{money_format:"{{amount}}0 BD",money_with_currency_format:"{{amount}}0 BHD"},BYR:{money_format:"Br {{amount}}",money_with_currency_format:"Br {{amount}} BYR"},BZD:{money_format:"BZ${{amount}}",money_with_currency_format:"BZ${{amount}} BZD"},BTN:{money_format:"Nu {{amount}}",money_with_currency_format:"Nu {{amount}} BTN"},BAM:{money_format:"KM {{amount_with_comma_separator}}",money_with_currency_format:"KM {{amount_with_comma_separator}} BAM"},BRL:{money_format:"R$ {{amount_with_comma_separator}}",money_with_currency_format:"R$ {{amount_with_comma_separator}} BRL"},BOB:{money_format:"Bs{{amount_with_comma_separator}}",money_with_currency_format:"Bs{{amount_with_comma_separator}} BOB"},BWP:{money_format:"P{{amount}}",money_with_currency_format:"P{{amount}} BWP"},BND:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} BND"},BGN:{money_format:"{{amount}} лв",money_with_currency_format:"{{amount}} лв BGN"},MMK:{money_format:"K{{amount}}",money_with_currency_format:"K{{amount}} MMK"},KHR:{money_format:"KHR{{amount}}",money_with_currency_format:"KHR{{amount}}"},KYD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} KYD"},XAF:{money_format:"FCFA{{amount}}",money_with_currency_format:"FCFA{{amount}} XAF"},CLP:{money_format:"${{amount_no_decimals}}",money_with_currency_format:"${{amount_no_decimals}} CLP"},CNY:{money_format:"&#165;{{amount}}",money_with_currency_format:"&#165;{{amount}} CNY"},COP:{money_format:"${{amount_with_comma_separator}}",money_with_currency_format:"${{amount_with_comma_separator}} COP"},CRC:{money_format:"&#8353; {{amount_with_comma_separator}}",money_with_currency_format:"&#8353; {{amount_with_comma_separator}} CRC"},HRK:{money_format:"{{amount_with_comma_separator}} kn",money_with_currency_format:"{{amount_with_comma_separator}} kn HRK"},CZK:{money_format:"{{amount_with_comma_separator}} K&#269;",money_with_currency_format:"{{amount_with_comma_separator}} K&#269;"},DKK:{money_format:"{{amount_with_comma_separator}} kr",money_with_currency_format:"kr.{{amount_with_comma_separator}}"},DOP:{money_format:"RD$ {{amount_with_comma_separator}}",money_with_currency_format:"RD$ {{amount_with_comma_separator}}"},XCD:{money_format:"${{amount}}",money_with_currency_format:"EC${{amount}}"},EGP:{money_format:"LE {{amount}}",money_with_currency_format:"LE {{amount}} EGP"},ETB:{money_format:"Br{{amount}}",money_with_currency_format:"Br{{amount}} ETB"},XPF:{money_format:"{{amount_no_decimals_with_comma_separator}} XPF",money_with_currency_format:"{{amount_no_decimals_with_comma_separator}} XPF"},FJD:{money_format:"${{amount}}",money_with_currency_format:"FJ${{amount}}"},GMD:{money_format:"D {{amount}}",money_with_currency_format:"D {{amount}} GMD"},GHS:{money_format:"GH&#8373;{{amount}}",money_with_currency_format:"GH&#8373;{{amount}}"},GTQ:{money_format:"Q{{amount}}",money_with_currency_format:"{{amount}} GTQ"},GYD:{money_format:"G${{amount}}",money_with_currency_format:"${{amount}} GYD"},GEL:{money_format:"{{amount}} GEL",money_with_currency_format:"{{amount}} GEL"},HNL:{money_format:"L {{amount}}",money_with_currency_format:"L {{amount}} HNL"},HKD:{money_format:"${{amount}}",money_with_currency_format:"HK${{amount}}"},HUF:{money_format:"{{amount_no_decimals_with_comma_separator}}",money_with_currency_format:"{{amount_no_decimals_with_comma_separator}} Ft"},ISK:{money_format:"{{amount_no_decimals}} kr",money_with_currency_format:"{{amount_no_decimals}} kr ISK"},INR:{money_format:"Rs. {{amount}}",money_with_currency_format:"Rs. {{amount}}"},IDR:{money_format:"{{amount_with_comma_separator}}",money_with_currency_format:"Rp {{amount_with_comma_separator}}"},ILS:{money_format:"{{amount}} NIS",money_with_currency_format:"{{amount}} NIS"},JMD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} JMD"},JPY:{money_format:"&#165;{{amount_no_decimals}}",money_with_currency_format:"&#165;{{amount_no_decimals}} JPY"},JEP:{money_format:"&pound;{{amount}}",money_with_currency_format:"&pound;{{amount}} JEP"},JOD:{money_format:"{{amount}}0 JD",money_with_currency_format:"{{amount}}0 JOD"},KZT:{money_format:"{{amount}} KZT",money_with_currency_format:"{{amount}} KZT"},KES:{money_format:"KSh{{amount}}",money_with_currency_format:"KSh{{amount}}"},KWD:{money_format:"{{amount}}0 KD",money_with_currency_format:"{{amount}}0 KWD"},KGS:{money_format:"лв{{amount}}",money_with_currency_format:"лв{{amount}}"},LVL:{money_format:"Ls {{amount}}",money_with_currency_format:"Ls {{amount}} LVL"},LBP:{money_format:"L&pound;{{amount}}",money_with_currency_format:"L&pound;{{amount}} LBP"},LTL:{money_format:"{{amount}} Lt",money_with_currency_format:"{{amount}} Lt"},MGA:{money_format:"Ar {{amount}}",money_with_currency_format:"Ar {{amount}} MGA"},MKD:{money_format:"ден {{amount}}",money_with_currency_format:"ден {{amount}} MKD"},MOP:{money_format:"MOP${{amount}}",money_with_currency_format:"MOP${{amount}}"},MVR:{money_format:"Rf{{amount}}",money_with_currency_format:"Rf{{amount}} MRf"},MXN:{money_format:"$ {{amount}}",money_with_currency_format:"$ {{amount}} MXN"},MYR:{money_format:"RM{{amount}} MYR",money_with_currency_format:"RM{{amount}} MYR"},MUR:{money_format:"Rs {{amount}}",money_with_currency_format:"Rs {{amount}} MUR"},MDL:{money_format:"{{amount}} MDL",money_with_currency_format:"{{amount}} MDL"},MAD:{money_format:"{{amount}} dh",money_with_currency_format:"Dh {{amount}} MAD"},MNT:{money_format:"{{amount_no_decimals}} &#8366",money_with_currency_format:"{{amount_no_decimals}} MNT"},MZN:{money_format:"{{amount}} Mt",money_with_currency_format:"Mt {{amount}} MZN"},NAD:{money_format:"N${{amount}}",money_with_currency_format:"N${{amount}} NAD"},NPR:{money_format:"Rs{{amount}}",money_with_currency_format:"Rs{{amount}} NPR"},ANG:{money_format:"&fnof;{{amount}}",money_with_currency_format:"{{amount}} NA&fnof;"},NZD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} NZD"},NIO:{money_format:"C${{amount}}",money_with_currency_format:"C${{amount}} NIO"},NGN:{money_format:"&#8358;{{amount}}",money_with_currency_format:"&#8358;{{amount}} NGN"},NOK:{money_format:"kr {{amount_with_comma_separator}}",money_with_currency_format:"kr {{amount_with_comma_separator}} NOK"},OMR:{money_format:"{{amount_with_comma_separator}} OMR",money_with_currency_format:"{{amount_with_comma_separator}} OMR"},PKR:{money_format:"Rs.{{amount}}",money_with_currency_format:"Rs.{{amount}} PKR"},PGK:{money_format:"K {{amount}}",money_with_currency_format:"K {{amount}} PGK"},PYG:{money_format:"Gs. {{amount_no_decimals_with_comma_separator}}",money_with_currency_format:"Gs. {{amount_no_decimals_with_comma_separator}} PYG"},PEN:{money_format:"S/. {{amount}}",money_with_currency_format:"S/. {{amount}} PEN"},PHP:{money_format:"&#8369;{{amount}}",money_with_currency_format:"&#8369;{{amount}} PHP"},PLN:{money_format:"{{amount_with_comma_separator}} zl",money_with_currency_format:"{{amount_with_comma_separator}} zl PLN"},QAR:{money_format:"QAR {{amount_with_comma_separator}}",money_with_currency_format:"QAR {{amount_with_comma_separator}}"},RON:{money_format:"{{amount_with_comma_separator}} lei",money_with_currency_format:"{{amount_with_comma_separator}} lei RON"},RUB:{money_format:"&#1088;&#1091;&#1073;{{amount_with_comma_separator}}",money_with_currency_format:"&#1088;&#1091;&#1073;{{amount_with_comma_separator}} RUB"},RWF:{money_format:"{{amount_no_decimals}} RF",money_with_currency_format:"{{amount_no_decimals}} RWF"},WST:{money_format:"WS$ {{amount}}",money_with_currency_format:"WS$ {{amount}} WST"},SAR:{money_format:"{{amount}} SR",money_with_currency_format:"{{amount}} SAR"},STD:{money_format:"Db {{amount}}",money_with_currency_format:"Db {{amount}} STD"},RSD:{money_format:"{{amount}} RSD",money_with_currency_format:"{{amount}} RSD"},SCR:{money_format:"Rs {{amount}}",money_with_currency_format:"Rs {{amount}} SCR"},SGD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} SGD"},SYP:{money_format:"S&pound;{{amount}}",money_with_currency_format:"S&pound;{{amount}} SYP"},ZAR:{money_format:"R {{amount}}",money_with_currency_format:"R {{amount}} ZAR"},KRW:{money_format:"&#8361;{{amount_no_decimals}}",money_with_currency_format:"&#8361;{{amount_no_decimals}} KRW"},LKR:{money_format:"Rs {{amount}}",money_with_currency_format:"Rs {{amount}} LKR"},SEK:{money_format:"{{amount_no_decimals}} kr",money_with_currency_format:"{{amount_no_decimals}} kr SEK"},CHF:{money_format:"SFr. {{amount}}",money_with_currency_format:"SFr. {{amount}} CHF"},TWD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} TWD"},THB:{money_format:"{{amount}} &#xe3f;",money_with_currency_format:"{{amount}} &#xe3f; THB"},TZS:{money_format:"{{amount}} TZS",money_with_currency_format:"{{amount}} TZS"},TTD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} TTD"},TND:{money_format:"{{amount}}",money_with_currency_format:"{{amount}} DT"},TRY:{money_format:"{{amount}}TL",money_with_currency_format:"{{amount}}TL"},UGX:{money_format:"Ush {{amount_no_decimals}}",money_with_currency_format:"Ush {{amount_no_decimals}} UGX"},UAH:{money_format:"₴{{amount}}",money_with_currency_format:"₴{{amount}} UAH"},AED:{money_format:"Dhs. {{amount}}",money_with_currency_format:"Dhs. {{amount}} AED"},UYU:{money_format:"${{amount_with_comma_separator}}",money_with_currency_format:"${{amount_with_comma_separator}} UYU"},VUV:{money_format:"${{amount}}",money_with_currency_format:"${{amount}}VT"},VEF:{money_format:"Bs. {{amount_with_comma_separator}}",money_with_currency_format:"Bs. {{amount_with_comma_separator}} VEF"},VND:{money_format:"{{amount_no_decimals_with_comma_separator}}&#8363;",money_with_currency_format:"{{amount_no_decimals_with_comma_separator}} VND"},XBT:{money_format:"{{amount_no_decimals}} BTC",money_with_currency_format:"{{amount_no_decimals}} BTC"},XOF:{money_format:"CFA{{amount}}",money_with_currency_format:"CFA{{amount}} XOF"},ZMW:{money_format:"K{{amount_no_decimals_with_comma_separator}}",money_with_currency_format:"ZMW{{amount_no_decimals_with_comma_separator}}"}},Currency.formatMoney=function(e,t){function n(e,t){return void 0===e?t:e}function o(e,t,o,r){if(t=n(t,2),o=n(o,","),r=n(r,"."),isNaN(e)||null==e)return 0;e=(e/100).toFixed(t);var i=e.split(".");return i[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+o)+(i[1]?r+i[1]:"")}if("function"==typeof Shopify.formatMoney)return Shopify.formatMoney(e,t);"string"==typeof e&&(e=e.replace(".",""));var r="",i=/\{\{\s*(\w+)\s*\}\}/,a=t||"${{amount}}";switch(a.match(i)[1]){case"amount":r=o(e,2);break;case"amount_no_decimals":r=o(e,0);break;case"amount_with_comma_separator":r=o(e,2,".",",");break;case"amount_no_decimals_with_comma_separator":r=o(e,0,".",",")}return a.replace(i,r)},Currency.currentCurrency="",Currency.format="money_with_currency_format",Currency.convertAll=function(e,t,n,o,r){jQuery(n||"span.money").each(function(){if(0!=jQuery(this).html().length&&(jQuery(this).attr("data-currency")!==t||0!=r)){if(jQuery(this).attr("data-currency-"+t)&&0==r)jQuery(this).html(jQuery(this).attr("data-currency-"+t));else{var n=0,i=Currency.moneyFormats[e][o||Currency.format]||"{{amount}}",a=Currency.moneyFormats[t][o||Currency.format]||"{{amount}}";n=-1!==i.indexOf("amount_no_decimals")?Currency.convert(100*parseInt(jQuery(this).html().replace(/[^0-9]/g,""),10),e,t):"JOD"===e||"KWD"==e||"BHD"==e?Currency.convert(parseInt(jQuery(this).html().replace(/[^0-9]/g,""),10)/10,e,t):Currency.convert(parseInt(jQuery(this).html().replace(/[^0-9]/g,""),10),e,t);var s=Currency.formatMoney(n,a);jQuery(this).html(s),jQuery(this).attr("data-currency-"+t,s)}jQuery(this).attr("data-currency",t)}}),this.currentCurrency=t,this.cookie.write(t)},/*!

 matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license 

*/
window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),n=document.getElementsByTagName("script")[0],o=null;t.type="text/css",t.id="matchmediajs-test",n.parentNode.insertBefore(t,n),o="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle,e={matchMedium:function(e){var n="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return t.styleSheet?t.styleSheet.cssText=n:t.textContent=n,"1px"===o.width}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}()),function(e,t,n){function o(e,t){return typeof e===t}function r(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):x?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function i(){var e=t.body;return e||(e=r(x?"svg":"body"),e.fake=!0),e}function a(e,n,o,a){var s,l,u,c,f="modernizr",d=r("div"),p=i();if(parseInt(o,10))for(;o--;)u=r("div"),u.id=a?a[o]:f+(o+1),d.appendChild(u);return s=r("style"),s.type="text/css",s.id="s"+f,(p.fake?p:d).appendChild(s),p.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),d.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",c=_.style.overflow,_.style.overflow="hidden",_.appendChild(p)),l=n(d,e),p.fake?(p.parentNode.removeChild(p),_.style.overflow=c,_.offsetHeight):d.parentNode.removeChild(d),!!l}function s(e,t){return!!~(""+e).indexOf(t)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(e,t){return function(){return e.apply(t,arguments)}}function c(e,t,n){var r;for(var i in e)if(e[i]in t)return!1===n?e[i]:(r=t[e[i]],o(r,"function")?u(r,n||t):r);return!1}function f(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(t,n,o){var r;if("getComputedStyle"in e){r=getComputedStyle.call(e,t,n);var i=e.console;if(null!==r)o&&(r=r.getPropertyValue(o));else if(i){var a=i.error?"error":"log";i[a].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else r=!n&&t.currentStyle&&t.currentStyle[o];return r}function p(t,o){var r=t.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(f(t[r]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];r--;)i.push("("+f(t[r])+":"+o+")");return i=i.join(" or "),a("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==d(e,null,"position")})}return n}function m(e,t,i,a){function u(){f&&(delete N.style,delete N.modElem)}if(a=!o(a,"undefined")&&a,!o(i,"undefined")){var c=p(e,i);if(!o(c,"undefined"))return c}for(var f,d,m,h,y,g=["modernizr","tspan","samp"];!N.style&&g.length;)f=!0,N.modElem=r(g.shift()),N.style=N.modElem.style;for(m=e.length,d=0;m>d;d++)if(h=e[d],y=N.style[h],s(h,"-")&&(h=l(h)),N.style[h]!==n){if(a||o(i,"undefined"))return u(),"pfx"!=t||h;try{N.style[h]=i}catch(e){}if(N.style[h]!=y)return u(),"pfx"!=t||h}return u(),!1}function h(e,t,n,r,i){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+k.join(a+" ")+a).split(" ");return o(t,"string")||o(t,"undefined")?m(s,t,r,i):(s=(e+" "+E.join(a+" ")+a).split(" "),c(s,t,n))}function y(e,t,o){return h(e,n,n,t,o)}var g=[],v=[],w={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){v.push({name:e,fn:t,options:n})},addAsyncTest:function(e){v.push({name:null,fn:e})}},b=function(){};b.prototype=w,b=new b,b.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}});var _=t.documentElement,x="svg"===_.nodeName.toLowerCase(),C=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];w._prefixes=C;var S=w.testStyles=a;b.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var o=["@media (",C.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");S(o,function(e){n=9===e.offsetTop})}return n});var T="Moz O ms Webkit",k=w._config.usePrefixes?T.split(" "):[];w._cssomPrefixes=k;var E=w._config.usePrefixes?T.toLowerCase().split(" "):[];w._domPrefixes=E;var A={elem:r("modernizr")};b._q.push(function(){delete A.elem});var N={style:A.elem.style};b._q.unshift(function(){delete N.style}),w.testAllProps=h,w.testAllProps=y,b.addTest("cssgridlegacy",y("grid-columns","10px",!0)),b.addTest("cssgrid",y("grid-template-rows","none",!0)),function(){var e,t,n,r,i,a,s;for(var l in v)if(v.hasOwnProperty(l)){if(e=[],t=v[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=o(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],s=a.split("."),1===s.length?b[s[0]]=r:(!b[s[0]]||b[s[0]]instanceof Boolean||(b[s[0]]=new Boolean(b[s[0]])),b[s[0]][s[1]]=r),g.push((r?"":"no-")+s.join("-"))}}(),function(e){var t=_.className,n=b._config.classPrefix||"";if(x&&(t=t.baseVal),b._config.enableJSClass){var o=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(o,"$1"+n+"js$2")}b._config.enableClasses&&(t+=" "+n+e.join(" "+n),x?_.className.baseVal=t:_.className=t)}(g),delete w.addTest,delete w.addAsyncTest;for(var P=0;P<b._q.length;P++)b._q[P]();e.Modernizr=b}(window,document);
(function() {
  var FrameworkAlign,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  FrameworkAlign = (function() {
    function FrameworkAlign(element1, type1) {
      this.element = element1;
      this.type = type1;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.fillYSpace = bind(this.fillYSpace, this);
      this.checkOverlap = bind(this.checkOverlap, this);
      this.createOverlapDetectors = bind(this.createOverlapDetectors, this);
      this.position = bind(this.position, this);
      this.parent = this.element.parent();
      this.left_side_border;
      this.right_element_width = null;
      this.position();
      this.fillYSpace();
      this.createOverlapDetectors();
      this.resizeListeners();
    }

    FrameworkAlign.prototype.position = function() {
      if (this.type === 'center-x') {
        this.element.css({
          'margin-left': -(this.element.outerWidth() / 2)
        });
      }
      if (this.type === 'center-y') {
        return this.element.css({
          'margin-top': -(this.element.outerHeight() / 2)
        });
      }
    };

    FrameworkAlign.prototype.createOverlapDetectors = function() {
      var _this;
      _this = this;
      if (_this.type === 'right') {
        return this.right_element_width = _this.element.outerWidth();
      }
    };

    FrameworkAlign.prototype.checkOverlap = function() {
      var _this, left_element, left_side_border, right_side_border;
      _this = this;
      if (_this.type === 'right') {
        _this.parent.removeClass('overlap');
        left_element = _this.parent.children().eq(_this.element.index() - 1);
        left_side_border = left_element.position().left + left_element.outerWidth();
        right_side_border = _this.parent.outerWidth() - _this.right_element_width;
        if (left_side_border >= right_side_border) {
          return _this.parent.addClass('overlap');
        }
      }
    };

    FrameworkAlign.prototype.fillYSpace = function() {
      var _this, container_height, text_panel_height;
      _this = this;
      if (_this.type === 'fill-y--dynamic') {
        container_height = _this.parent.outerHeight();
        text_panel_height = _this.parent.find('.fw--align--fill-y--fixed').outerHeight();
        return _this.element.outerHeight(container_height - text_panel_height);
      }
    };

    FrameworkAlign.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      $(window).on('resize.FrameworkAlign', function() {
        _this.checkOverlap();
        return _this.fillYSpace();
      });
      return setTimeout(function() {
        return _this.checkOverlap();
      }, 1);
    };

    return FrameworkAlign;

  })();

  theme.classes.FrameworkAnimation = (function() {
    function FrameworkAnimation() {}

    return FrameworkAnimation;

  })();

  theme.classes.FrameworkCart = (function() {
    function FrameworkCart(root) {
      var _this;
      this.root = root;
      this.convertCurrency = bind(this.convertCurrency, this);
      this.openModalListener = bind(this.openModalListener, this);
      this.openOffCanvasListener = bind(this.openOffCanvasListener, this);
      this.removeItem = bind(this.removeItem, this);
      this.removeItemListeners = bind(this.removeItemListeners, this);
      this.updateTotalsComplete = bind(this.updateTotalsComplete, this);
      this.updateTotals = bind(this.updateTotals, this);
      this.plusQuantity = bind(this.plusQuantity, this);
      this.minusQuantity = bind(this.minusQuantity, this);
      this.updateQuantityListeners = bind(this.updateQuantityListeners, this);
      this.addItem = bind(this.addItem, this);
      this.renderOther = bind(this.renderOther, this);
      this.renderListener = bind(this.renderListener, this);
      this.renderCart = bind(this.renderCart, this);
      _this = this;
      _this.adjusting_qty_timer = null;
      _this.table_content = _this.root.find('form > .content');
      _this.render_trigger = $('.fw--cart-modal--trigger-render');
      _this.totals = {};
      _this.add_locked = false;
      _this.render_locked = false;
      if (_this.root.hasClass('off-canvas')) {
        _this.view = 'off canvas';
      }
      if (_this.root.hasClass('modal--content')) {
        _this.view = 'modal';
      }
      _this.temp_quantity = 0;
      _this.renderCart();
      if (_this.view === 'off canvas') {
        _this.openOffCanvasListener();
      }
      _this.openModalListener();
      _this.renderListener();
    }

    FrameworkCart.prototype.renderCart = function(callback) {
      var _this;
      _this = this;
      if (!_this.render_locked) {
        _this.render_locked = true;
        _this.table_content.empty();
        return $.ajax({
          type: "POST",
          url: "/cart.js",
          dataType: "json"
        }).done(function(data, textStatus, jqXHR) {
          var cart, index, item, j, len, ref, row;
          if (textStatus === 'success') {
            cart = data;
            if (cart.items.length) {
              _this.root.removeClass('no-items');
            } else {
              _this.root.addClass('no-items');
            }
            ref = cart.items;
            for (index = j = 0, len = ref.length; j < len; index = ++j) {
              item = ref[index];
              item.image_url = Shopify.resizeImage(item.image, "400x");
              item.price = Currency.formatMoney(item.price, theme.money_format);
              if ((index + 1) === cart.items.length) {
                row = '<div class="variant-id last-variant width--12" data-variant-id=' + item.variant_id + '>';
              } else {
                row = '<div class="variant-id width--12" data-variant-id=' + item.variant_id + '>';
              }
              row += '<div class="width--12 width--medium-4 width--large-6 block">';
              if (item.image_url === null) {
                row += '<span class="image block width--4 width--medium-12 width--large-4 spacing--3"></span>';
              } else {
                row += '<span class="image block width--4 width--medium-12 width--large-4 spacing--3"><a href="' + item.url + '"><img src="' + item.image_url + '" alt="' + item.title + '"></a></span>';
              }
              row += '<span class="title show--small show--large block width--8 spacing--3 font--size-4"><a href="' + item.url + '">' + item.title + '</a></span>';
              row += '</div>';
              row += '<div class="right-column width--12 width--medium-8 width--large-6 block spacing--3y text-align--left text-align--large-right">';
              row += '<span class="title show--medium block width--12 spacing--3 font--size-4"><a href="' + item.url + '">' + item.title + '</a></span>';
              row += '<span class="price font--accent spacing--3 font--size-3 money">' + item.price + '</span>';
              row += '<span class="quantity spacing--3"><div class="input--number">';
              row += '<a tabindex="0" aria-label="' + theme.translations.remove_one_item + '" class="minus">' + theme.utils.addSymbol('minus') + '</a>';
              row += '<input type="text" value="' + item.quantity + '" min="1" pattern="[1-9]*">';
              row += '<a tabindex="0" aria-label="' + theme.translations.add_one_item + '" class="plus">' + theme.utils.addSymbol('plus') + '</a>';
              row += '</div></span>';
              row += '<span class="remove spacing--3">';
              row += '<a aria-label="' + theme.translations.remove_item + '" role="button" href="#" class="cart--remove-button remove">' + theme.utils.addSymbol('cross-circle') + '</a>';
              row += '</span>';
              row += '</div>';
              row += '</div>';
              row += '<div class="spacer spacing--3y"></div>';
              _this.table_content.append(row);
            }
            row = '<div class="totals width--12 text-align--center ">';
            row += '<div class="width--12 width--large-8 block">';
            row += '</div>';
            row += '<div class="block spacing--3y width--12 width--large-4 font--size-3 text--bold text-align--large-right text--uppercase">';
            row += '<span class="spacing--3">' + theme.translations.cart_subtotal + '</span>';
            row += '<span class="total spacing--3 money font--accent font--subheading--size">' + _this.totals.price + '</span>';
            row += '</div>';
            row += '</div>';
            row += '<div class="spacer spacing--3y show--small-medium"></div>';
            _this.table_content.append(row);
            _this.updateTotals();
            if (callback) {
              callback();
            }
            $(window).trigger('resize.FrameworkModal');
            _this.render_locked = false;
            _this.removeItemListeners();
            _this.updateQuantityListeners();
            return _this.convertCurrency(_this.root.find('.money'));
          } else {
            return console.log('cart - render item status - ' + textStatus);
          }
        }).fail(function(jqXHR, textStatus) {
          console.log("cart rendering failed");
          return _this.render_locked = false;
        });
      }
    };

    FrameworkCart.prototype.renderListener = function() {
      var _this;
      _this = this;
      return _this.root.on('renderCart', function() {
        return _this.renderCart();
      });
    };

    FrameworkCart.prototype.renderOther = function() {
      var _this;
      _this = this;
      if (theme.utils.mqs.current_window === 'small') {
        return $('.fw--cart.modal--content').trigger('renderCart');
      } else {
        return $('.fw--cart.off-canvas').trigger('renderCart');
      }
    };

    FrameworkCart.prototype.addItem = function(form, callback) {
      var _this;
      _this = this;
      if (!_this.add_locked) {
        _this.add_locked = true;
        return $.ajax({
          type: "POST",
          url: "/cart/add.js",
          dataType: "json",
          data: form.serialize()
        }).done(function(data, textStatus, jqXHR) {
          callback(true);
          _this.renderOther();
          return _this.add_locked = false;
        }).fail(function(jqXHR, textStatus) {
          callback(false, jqXHR.responseJSON.description);
          return _this.add_locked = false;
        });
      }
    };

    FrameworkCart.prototype.updateQuantityListeners = function() {
      var _this;
      _this = this;
      _this.table_content.find('.input--number input').attr("autocomplete", "off").on('keyup.LayoutCartModal paste.LayoutCartModal', function() {
        var input, input_wrapper, variant_id;
        input_wrapper = $(this).closest('.input--number');
        input = input_wrapper.find('input');
        if (parseInt(input.val()) > 0) {
          input_wrapper.addClass('updating');
          clearTimeout(_this.adjusting_qty_timer);
          variant_id = $(this).closest('.variant-id').data('variant-id');
          _this.adjusting_qty_timer = setTimeout(function() {
            input_wrapper.removeClass('updating');
            return _this.updateTotals();
          }, 500);
        } else if (parseInt(input.val()) === 0) {
          variant_id = $(this).closest('.variant-id').data('variant-id');
          _this.removeItem(variant_id);
          if ($(this).closest('form').find('.variant-id').length === 1) {
            _this.root.addClass('no-items');
          } else {
            $(this).closest('.variant-id').remove();
          }
        }
        return false;
      });
      _this.table_content.find('.input--number .minus').on('keypress.LayoutCartModal click.LayoutCartModal', function(e) {
        var input, input_wrapper, variant_id;
        if (theme.utils.a11yClick(e) === true) {
          input_wrapper = $(this).closest('.input--number');
          input = input_wrapper.find('input');
          if (parseInt(input.val()) > 1) {
            input_wrapper.addClass('updating');
            clearTimeout(_this.adjusting_qty_timer);
            input.val(parseInt(input.val()) - 1);
            variant_id = $(this).closest('.variant-id').data('variant-id');
            _this.adjusting_qty_timer = setTimeout(function() {
              _this.minusQuantity(variant_id, parseInt(input.val()));
              input_wrapper.removeClass('updating');
              return _this.updateTotals();
            }, 500);
          }
          return false;
        }
      });
      return _this.table_content.find('.input--number .plus').on('keypress.LayoutCartModal click.LayoutCartModal', function(e) {
        var input, input_wrapper, variant_id;
        if (theme.utils.a11yClick(e) === true) {
          clearTimeout(_this.adjusting_qty_timer);
          input_wrapper = $(this).closest('.input--number');
          input = input_wrapper.find('input');
          if (_this.temp_quantity === 0) {
            _this.temp_quantity = parseInt(input.val());
          }
          input_wrapper.addClass('updating');
          input.val(1 + parseInt(input.val()));
          variant_id = $(this).closest('.variant-id').data('variant-id');
          _this.adjusting_qty_timer = setTimeout(function() {
            var add_quantity;
            add_quantity = parseInt(input.val()) - _this.temp_quantity;
            return _this.plusQuantity(variant_id, add_quantity, function(pass, error) {
              if (pass) {
                input_wrapper.removeClass('updating');
                _this.updateTotals();
                return _this.temp_quantity = 0;
              } else {
                input.val(_this.temp_quantity);
                input_wrapper.removeClass('updating');
                _this.updateTotals();
                return _this.temp_quantity = 0;
              }
            });
          }, 500);
          return false;
        }
      });
    };

    FrameworkCart.prototype.minusQuantity = function(variant_id, quantity) {
      var _this;
      _this = this;
      return $.ajax({
        type: "POST",
        url: "/cart/change.js",
        dataType: "json",
        data: 'quantity=' + quantity + '&id=' + variant_id,
        async: false
      }).done(function(data, textStatus, jqXHR) {
        if (textStatus === 'success') {
          _this.updateTotals();
          return _this.renderOther();
        } else {
          return console.log('cart - update cart item status - ' + textStatus);
        }
      }).fail(function(jqXHR, textStatus) {
        return console.log("cart - update failed");
      });
    };

    FrameworkCart.prototype.plusQuantity = function(variant_id, quantity, callback) {
      var _this;
      _this = this;
      if (!_this.add_locked) {
        _this.add_locked = true;
        return $.ajax({
          type: "POST",
          url: "/cart/add.js",
          dataType: "json",
          data: 'quantity=' + quantity + '&id=' + variant_id
        }).done(function(data, textStatus, jqXHR) {
          callback(true);
          _this.renderOther();
          return _this.add_locked = false;
        }).fail(function(jqXHR, textStatus) {
          callback(false, jqXHR.responseJSON.description);
          return _this.add_locked = false;
        });
      }
    };

    FrameworkCart.prototype.updateTotals = function() {
      var _this;
      _this = this;
      return $.ajax({
        type: "POST",
        url: "/cart.js",
        dataType: "json"
      }).done(function(data, textStatus, jqXHR) {
        var cart, cart_total, item, j, len, ref;
        if (textStatus === 'success') {
          cart = data;
          cart_total = {};
          cart_total.quantity = 0;
          cart_total.price = 0;
          ref = cart.items;
          for (j = 0, len = ref.length; j < len; j++) {
            item = ref[j];
            cart_total.quantity += item.quantity;
            cart_total.price += item.price * item.quantity;
          }
          _this.totals.count = cart_total.quantity;
          _this.totals.price = Currency.formatMoney(cart_total.price, theme.money_format);
          _this.render_trigger.find('.count').html(_this.totals.count);
          _this.render_trigger.find('.total-price').html(_this.totals.price);
          _this.table_content.find('.total').html(_this.totals.price);
          $('.layout--header .layout--off-canvas--open.right').html(_this.totals.count);
          $('.layout--header .cart-link .count').html('(' + _this.totals.count + ')');
          if (_this.totals.count > 0) {
            _this.render_trigger.css('display', 'inline-block');
            $('.layout--header .cart-link .count').css('display', 'inline');
            $('.header--cart-count').css('display', 'inline-block');
          } else {
            _this.render_trigger.hide();
            $('.layout--header .cart-link .count').hide();
          }
          if (theme.currency_switcher_enabled) {
            _this.convertCurrency(_this.render_trigger.find('.total-price'));
            _this.convertCurrency(_this.table_content.find('.total'));
          }
          return _this.updateTotalsComplete();
        } else {
          return console.log('cart - update totals item status - ' + textStatus);
        }
      }).fail(function(jqXHR, textStatus) {
        return console.log("cart - updating totals failed");
      });
    };

    FrameworkCart.prototype.updateTotalsComplete = function() {
      var _this;
      return _this = this;
    };

    FrameworkCart.prototype.removeItemListeners = function() {
      var _this;
      _this = this;
      return _this.table_content.find('a.remove').on('click.LayoutCartModal', function() {
        var variant_id;
        variant_id = $(this).closest('.variant-id').data('variant-id');
        _this.removeItem(variant_id);
        if ($(this).closest('form').find('.variant-id').length === 1) {
          _this.root.addClass('no-items');
          $(window).trigger('resize.FrameworkModal');
        } else {
          $(this).closest('.variant-id').remove();
        }
        _this.updateTotals();
        return false;
      });
    };

    FrameworkCart.prototype.removeItem = function(variant_id) {
      var _this;
      _this = this;
      return _this.minusQuantity(variant_id, 0);
    };

    FrameworkCart.prototype.openOffCanvasListener = function() {
      var _this;
      _this = this;
      return $('.layout--off-canvas--cart--open-trigger').on('click', function() {
        $('.layout--off-canvas--right-sidebar').trigger('open');
        return false;
      });
    };

    FrameworkCart.prototype.openModalListener = function() {
      var _this;
      _this = this;
      return $('.fw--cart-modal--trigger-render').on('click', function() {
        $('.cart-link .modal--link').trigger('click');
        return false;
      });
    };

    FrameworkCart.prototype.convertCurrency = function(elems) {
      var _this;
      _this = this;
      if (theme.currency_switcher_enabled) {
        return Currency.convertAll(shopCurrency, jQuery('[name=currencies]').val());
      } else {
        return false;
      }
    };

    return FrameworkCart;

  })();

  theme.classes.FrameworkContentBlocks = (function() {
    function FrameworkContentBlocks(root) {
      var _this;
      this.root = root;
      _this = this;
    }

    return FrameworkContentBlocks;

  })();

  theme.classes.FrameworkFeaturedBlog = (function() {
    function FrameworkFeaturedBlog(root) {
      var _this;
      this.root = root;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      _this = this;
      _this.item_container = _this.root.find('.featured-blog--body');
      _this.items = _this.root.find('.featured-blog--item');
      _this.matchImageHeights();
      _this.resizeListeners();
    }

    FrameworkFeaturedBlog.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      return theme.utils.matchImageHeights(_this.item_container, _this.items, '.featured-blog--item--image');
    };

    FrameworkFeaturedBlog.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.FeaturedGrid', theme.utils.debounce(100, function() {
        return _this.matchImageHeights();
      }));
    };

    return FrameworkFeaturedBlog;

  })();

  theme.classes.FrameworkFeaturedCollections = (function() {
    function FrameworkFeaturedCollections(root) {
      var _this;
      this.root = root;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      _this = this;
      _this.item_container = _this.root.find('.featured-collections--body');
      _this.items = _this.root.find('.featured-collections--item');
      _this.matchImageHeights();
      _this.resizeListeners();
    }

    FrameworkFeaturedCollections.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      return theme.utils.matchImageHeights(_this.item_container, _this.items, '.featured-collections--image');
    };

    FrameworkFeaturedCollections.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.FeaturedCollections', theme.utils.debounce(100, function() {
        return _this.matchImageHeights();
      }));
    };

    return FrameworkFeaturedCollections;

  })();

  theme.classes.FrameworkFeaturedGrid = (function() {
    function FrameworkFeaturedGrid(root) {
      var _this;
      this.root = root;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      _this = this;
      _this.item_container = _this.root.find('.featured-grid--body');
      _this.items = _this.root.find('.featured-grid--item');
      _this.text_position = _this.root.data('text-position');
      _this.matchImageHeights();
      _this.resizeListeners();
    }

    FrameworkFeaturedGrid.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      if (_this.text_position === 'center' && theme.utils.mqs.current_window !== 'small') {
        return;
      }
      return theme.utils.matchImageHeights(_this.item_container, _this.items, '.featured-grid--item--image');
    };

    FrameworkFeaturedGrid.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.FeaturedGrid', theme.utils.debounce(100, function() {
        return _this.matchImageHeights();
      }));
    };

    return FrameworkFeaturedGrid;

  })();

  theme.classes.FrameworkFeedbackBar = (function() {
    function FrameworkFeedbackBar(root) {
      var _this;
      this.root = root;
      this.load = bind(this.load, this);
      _this = this;
      _this.messages = _this.root.find('.feedback-bar--message span');
      _this.load();
    }

    FrameworkFeedbackBar.prototype.load = function() {
      var _this, anchor_tag, message, message_elem;
      _this = this;
      _this.messages.hide();
      anchor_tag = window.location.hash.substr(1);
      message = anchor_tag.replace('feedback-bar--', '');
      message_elem = _this.messages.filter('[data-feedback-bar--message="' + message + '"]');
      if (message_elem.length) {
        message_elem.show();
        setTimeout(function() {
          return _this.root.attr('data-feedback-bar--open', 'true');
        }, 200);
        return setTimeout(function() {
          return _this.root.attr('data-feedback-bar--open', 'false');
        }, 3000);
      }
    };

    return FrameworkFeedbackBar;

  })();

  theme.classes.FrameworkLoadingAnimation = (function() {
    function FrameworkLoadingAnimation(root) {
      var _this;
      this.root = root;
      _this = this;
      if (_this.root.hasClass('tiny')) {
        _this.root.spin('tiny');
      } else {
        _this.root.spin('small');
      }
    }

    return FrameworkLoadingAnimation;

  })();

  theme.classes.FrameworkMap = (function() {
    function FrameworkMap(root) {
      var _this;
      this.root = root;
      this.buildStyles = bind(this.buildStyles, this);
      this.buildMap = bind(this.buildMap, this);
      this.geolocate = bind(this.geolocate, this);
      this.loadMapsApi = bind(this.loadMapsApi, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.api_status = null;
      _this.map_instance = null;
      _this.key = _this.root.data('api-key');
      _this.address = _this.root.data('address');
      _this.theme = _this.root.data('theme');
      _this.styles = null;
      _this.container = _this.root.find('.map--google-maps');
      _this.center = null;
      _this.load();
    }

    FrameworkMap.prototype.load = function() {
      var _this;
      _this = this;
      if (_this.container.length > 0) {
        return _this.loadMapsApi();
      }
    };

    FrameworkMap.prototype.loadMapsApi = function() {
      var _this, other_map_loading_checker;
      _this = this;
      if (theme.utils.google_map_api_status === 'loading') {
        return other_map_loading_checker = setInterval(function() {
          if (theme.utils.google_map_api_status === 'loaded') {
            _this.geolocate();
            return clearInterval(other_map_loading_checker);
          }
        }, 100);
      } else if (typeof window.google === 'undefined') {
        theme.utils.google_map_api_status = 'loading';
        return $.getScript('https://maps.googleapis.com/maps/api/js?key=' + _this.key).then(function() {
          _this.geolocate();
          return theme.utils.google_map_api_status = 'loaded';
        });
      } else {
        return _this.geolocate();
      }
    };

    FrameworkMap.prototype.geolocate = function() {
      var _this, geocoder;
      _this = this;
      geocoder = new google.maps.Geocoder;
      return geocoder.geocode({
        address: _this.address
      }, function(results, status) {
        if (status === 'OK') {
          _this.center = results[0].geometry.location;
          _this.buildStyles();
          return _this.buildMap();
        } else {
          return console.log('couldn\'t convert address with geocoder');
        }
      });
    };

    FrameworkMap.prototype.buildMap = function() {
      var _this, center, map, mapOptions, marker;
      _this = this;
      mapOptions = {
        zoom: 15,
        center: _this.center,
        disableDefaultUI: true,
        zoomControl: true,
        scrollwheel: false,
        styles: _this.styles
      };
      map = new google.maps.Map(_this.container[0], mapOptions);
      center = map.getCenter();
      marker = new google.maps.Marker({
        map: map,
        position: map.getCenter()
      });
      return _this.map_instance = google.maps.event.addDomListener(window, 'resize', theme.utils.debounce(500, function() {
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
      }));
    };

    FrameworkMap.prototype.buildStyles = function() {
      var _this;
      _this = this;
      if (_this.theme === 'grayscale') {
        return _this.styles = [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          }, {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }, {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          }, {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          }, {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          }, {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          }, {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dadada"
              }
            ]
          }, {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          }, {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }, {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          }, {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#c9c9c9"
              }
            ]
          }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }
        ];
      } else if (_this.theme === 'dark') {
        return _this.styles = [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          }, {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }, {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          }, {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }, {
            "featureType": "administrative.land_parcel",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }, {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          }, {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#181818"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1b1b1b"
              }
            ]
          }, {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#2c2c2c"
              }
            ]
          }, {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#8a8a8a"
              }
            ]
          }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#373737"
              }
            ]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#3c3c3c"
              }
            ]
          }, {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#4e4e4e"
              }
            ]
          }, {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          }, {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#000000"
              }
            ]
          }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#3d3d3d"
              }
            ]
          }
        ];
      }
    };

    return FrameworkMap;

  })();

  theme.classes.FrameworkMediaQueries = (function() {
    function FrameworkMediaQueries() {
      this.screenSizeListener = bind(this.screenSizeListener, this);
      this.getScreenSize = bind(this.getScreenSize, this);
      this.medium_screen = 768;
      this.large_screen = 1024;
      this.current_window = null;
      this.getScreenSize();
      this.screenSizeListener();
    }

    FrameworkMediaQueries.prototype.getScreenSize = function() {
      var _this;
      _this = this;
      if (window.matchMedia('only screen and (min-width: ' + _this.large_screen + 'px)').matches) {
        if (_this.current_window !== 'large') {
          $.event.trigger("largeWindow");
          return _this.current_window = 'large';
        }
      } else if (window.matchMedia('only screen and (min-width: ' + _this.medium_screen + 'px)').matches) {
        if (_this.current_window !== 'medium') {
          $.event.trigger("mediumWindow");
          return _this.current_window = 'medium';
        }
      } else {
        if (_this.current_window !== 'small') {
          $.event.trigger("smallWindow");
          return _this.current_window = 'small';
        }
      }
    };

    FrameworkMediaQueries.prototype.screenSizeListener = function() {
      var _this;
      _this = this;
      return $(window).resize(function() {
        return _this.getScreenSize();
      });
    };

    return FrameworkMediaQueries;

  })();

  theme.classes.FrameworkModal = (function() {
    function FrameworkModal(container1) {
      var _this;
      this.container = container1;
      _this = this;
      _this.fullscreen = _this.container.data('modal--fullscreen') ? true : false;
      if (_this.container.data('modal--custom-close')) {
        _this.custom_close_button = _this.container.data('modal--custom-close');
      } else {
        _this.custom_close_button = '';
      }
      _this.view = _this.container.data('modal--view');
      _this.links = _this.container.find('.modal--link');
      _this.content = _this.container.find('.modal--content');
      _this.window = _this.createModalWindow();
      _this.window_container = _this.window.find('.modal--container');
      _this.mask = _this.window.find('.modal--mask');
      _this.close_button = _this.window.find('.modal--close');
      _this.next_button = _this.window.find('.modal--next');
      _this.prev_button = _this.window.find('.modal--prev');
      _this.slider = null;
      _this.slides = null;
      _this.main_content_window = $('.off-canvas--main-content');
      _this.openListeners();
      _this.modal_state = 'closed';
      _this.nav_lock = false;
    }

    FrameworkModal.prototype.createModalWindow = function() {
      var _this, window, window_html;
      _this = this;
      window = null;
      if ($('.modal--window').length) {
        window = $('.modal--window');
      } else {
        window_html = '<div class="modal--window"> <div class="modal--mask"></div> <div class="modal--container"></div> <button class="modal--close">' + theme.utils.addSymbol('cross') + '</button> <button class="modal--prev">' + theme.utils.addSymbol('chevron-left') + '</button> <button class="modal--next">' + theme.utils.addSymbol('chevron-right') + '</button> </div>';
        window = $(window_html).appendTo('body');
      }
      return window;
    };

    FrameworkModal.prototype.openListeners = function() {
      var _this;
      _this = this;
      return _this.links.on('keypress.FrameworkModal, click.FrameworkModal, quick-open', function(e) {
        var clicked_item;
        if (e.type === 'keypress' && theme.utils.a11yClick(e) === false) {
          return false;
        }
        clicked_item = $(this);
        _this.links.each(function(index) {
          if ($(this).is(clicked_item)) {
            if (e.type === 'quick-open') {
              return _this.open(index, true);
            } else {
              return _this.open(index);
            }
          }
        });
        return false;
      });
    };

    FrameworkModal.prototype.open = function(index, quick_open) {
      var _this, scrolled_position;
      if (quick_open == null) {
        quick_open = false;
      }
      _this = this;
      if (_this.modal_state === 'closed') {
        _this.modal_state = 'opened';
        $('html').addClass('modal-open');
        _this.window.attr('data-modal--fullscreen', _this.fullscreen);
        _this.window.attr('data-modal--custom-close', _this.custom_close_button);
        _this.window.attr('data-modal--view', _this.view);
        _this.closeListeners();
        _this.positionListeners();
        scrolled_position = $(window).scrollTop();
        _this.main_content_window.css({
          position: 'fixed',
          top: -scrolled_position
        });
        _this.moveContentToWindow();
        if (_this.slides.length > 1) {
          _this.next_button.show();
          _this.prev_button.show();
          _this.prevListeners();
          _this.nextListeners();
        }
        _this.window.show();
        _this.window_container.show();
        _this.renderVideo(_this.slides.eq(index));
        if (quick_open) {
          _this.slides.eq(index).addClass('active');
          return _this.position();
        } else {
          _this.mask.fadeIn();
          return _this.loadModal(_this.slides.eq(index), function() {
            return setTimeout(function() {
              return _this.window_container.find('input[type="text"]').focus();
            }, 0);
          });
        }
      }
    };

    FrameworkModal.prototype.moveContentToWindow = function(index) {
      var _this, content;
      _this = this;
      content = _this.container.find('.modal--content');
      _this.window_container.append(content);
      return _this.slides = _this.window_container.find('.modal--content');
    };

    FrameworkModal.prototype.detectImageSlide = function(slide) {
      var _this;
      return _this = this;
    };

    FrameworkModal.prototype.renderVideo = function(slide) {
      var _this, id, iframe, src_url, type, video;
      _this = this;
      video = slide.find('.responsive-video').first();
      src_url = video.data('video');
      type = _this.extractVideoType(src_url);
      id = _this.extractVideoId(src_url, type);
      iframe = _this.createIframe(type, id);
      if (type === 'vimeo') {
        video.addClass('vimeo');
      }
      if (type === 'kickstarter') {
        video.addClass('kickstarter');
      }
      return video.append(iframe);
    };

    FrameworkModal.prototype.extractVideoType = function(src_url) {
      var _this, matches, re;
      _this = this;
      re = /\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9_\-]+)/i;
      matches = re.exec(src_url);
      if (matches) {
        return 'youtube';
      }
      re = /^.*(vimeo)\.com\/(?:watch\?v=)?(.*?)(?:\z|$|&)/;
      matches = re.exec(src_url);
      if (matches) {
        return 'vimeo';
      }
      re = /^.*(kickstarter)\.com/g;
      matches = re.exec(src_url);
      if (matches) {
        return 'kickstarter';
      }
      return false;
    };

    FrameworkModal.prototype.extractVideoId = function(src_url, type) {
      var _this, match, regExp;
      _this = this;
      if (type === 'youtube') {
        regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        match = src_url.match(regExp);
        if (match && match[2].length === 11) {
          return match[2];
        }
      } else if (type === "vimeo") {
        regExp = /^.*(vimeo)\.com\/(?:watch\?v=)?(.*?)(?:\z|$|&)/;
        match = src_url.match(regExp);
        if (match) {
          return match[2];
        }
      } else if (type === "kickstarter") {
        regExp = /(?:kickstarter\.com\/projects\/)(.*)(|\?)/;
        match = src_url.match(regExp);
        if (match) {
          return match[1];
        }
      }
    };

    FrameworkModal.prototype.createIframe = function(type, id) {
      var _this;
      _this = this;
      if (type === "youtube") {
        return '<iframe  src="//www.youtube.com/embed/' + id + '?autoplay=1" frameborder="0" allowfullwidth></iframe>';
      } else if (type === "vimeo") {
        return '<iframe src="//player.vimeo.com/video/' + id + '?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&amp;autoplay=1?" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
      } else if (type === "kickstarter") {
        return '<iframe src="//www.kickstarter.com/projects/' + id + '/widget/video.html" frameborder="0" webkitallowfullwidth mozallowfullwidth allowfullwidth></iframe>';
      }
    };

    FrameworkModal.prototype.removeVideos = function() {
      var _this;
      _this = this;
      return _this.slides.find('.responsive-video').each(function() {
        if ($(this).data('video')) {
          return $(this).find('iframe').remove();
        }
      });
    };

    FrameworkModal.prototype.loadModal = function(modal, callback) {
      var _this;
      _this = this;
      modal.addClass('active');
      _this.position();
      if (callback) {
        callback();
      }
      return _this.nav_lock = false;
    };

    FrameworkModal.prototype.position = function() {
      var _this, active_modal, entire_modal_height, modal_height, modal_width;
      _this = this;
      if (_this.window_container != null) {
        active_modal = _this.content.filter('.active');
        _this.window_container.attr('style', '');
        _this.positionVideoColumns(active_modal);
        _this.detectImageSlide(active_modal);
        _this.window.removeClass('fixed');
        modal_height = active_modal.outerHeight();
        modal_width = active_modal.outerWidth();
        entire_modal_height = modal_height + parseInt(_this.window.css('padding-top')) + parseInt(_this.window.css('padding-bottom'));
        if (_this.fullscreen) {
          return;
        }
        if (active_modal.hasClass('type--image')) {
          entire_modal_height = modal_height;
        }
        if ($(window).height() >= entire_modal_height) {
          return _this.window.addClass('fixed');
        } else {
          $("html, body").animate({
            scrollTop: 0
          }, '0');
          $('body,html').on('DOMMouseScroll.FrameworkModal mousewheel.FrameworkModal touchmove.FrameworkModal', function(e) {
            if (e.which > 0 || e.type === "mousewheel" || e.type === "touchmove") {
              return $("html,body").stop();
            }
          });
          return _this.window.removeClass('fixed');
        }
      }
    };

    FrameworkModal.prototype.positionVideoColumns = function(modal) {
      var _this, column_one, column_two, height_one, height_two;
      _this = this;
      if (modal.find('.responsive-video').length > 0) {
        column_one = modal.find('.fw--blocks > div').eq(0);
        column_two = modal.find('.fw--blocks > div').eq(1);
        column_one.css({
          width: ''
        });
        column_two.css({
          width: ''
        });
        height_one = column_one.outerHeight();
        height_two = column_two.outerHeight();
        if (height_one < height_two) {
          column_one.css({
            width: '100%'
          });
          return column_two.css({
            width: '100%'
          });
        }
      }
    };

    FrameworkModal.prototype.positionListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.FrameworkModal', function() {
        return _this.position();
      });
    };

    FrameworkModal.prototype.nextListeners = function() {
      var _this;
      _this = this;
      $(document).on('keydown.FrameworkModal', function(e) {
        if (e.keyCode === 39) {
          return _this.next();
        }
      });
      return _this.next_button.on('click.FrameworkModal', function() {
        return _this.next();
      });
    };

    FrameworkModal.prototype.next = function() {
      var _this, active_slide, index;
      _this = this;
      if (!_this.nav_lock) {
        _this.nav_lock = true;
        index = _this.slides.filter('.active').index();
        _this.slides.removeClass('active');
        _this.removeVideos();
        if ((index + 1) === _this.slides.length) {
          active_slide = _this.slides.eq(0);
        } else {
          active_slide = _this.slides.eq(index + 1);
        }
        _this.renderVideo(active_slide);
        return _this.loadModal(active_slide);
      }
    };

    FrameworkModal.prototype.prevListeners = function() {
      var _this;
      _this = this;
      $(document).on('keydown.FrameworkModal', function(e) {
        if (e.keyCode === 37) {
          return _this.prev();
        }
      });
      return _this.prev_button.on('click.FrameworkModal', function() {
        return _this.prev();
      });
    };

    FrameworkModal.prototype.prev = function() {
      var _this, active_slide, index;
      _this = this;
      if (!_this.nav_lock) {
        _this.nav_lock = true;
        index = _this.slides.filter('.active').index();
        _this.slides.removeClass('active');
        _this.removeVideos();
        if (index === 0) {
          active_slide = _this.slides.eq(_this.slides.length - 1);
        } else {
          active_slide = _this.slides.eq(index - 1);
        }
        _this.renderVideo(active_slide);
        return _this.loadModal(active_slide);
      }
    };

    FrameworkModal.prototype.closeListeners = function() {
      var _this;
      _this = this;
      _this.container.on('quick-close', function() {
        return _this.close(true);
      });
      $(document).on('keydown.FrameworkModal', function(e) {
        if (e.keyCode === 27) {
          return _this.close();
        }
      });
      _this.mask.on('click.FrameworkModal', function() {
        return _this.close();
      });
      _this.window_container.on('click.FrameworkModal', function() {
        return _this.close();
      });
      _this.content.on('click.FrameworkModal', function(e) {
        return e.stopPropagation();
      });
      return _this.close_button.on('click.FrameworkModal', function() {
        return _this.close();
      });
    };

    FrameworkModal.prototype.close = function(quick_close) {
      var _this, scrolled_position;
      if (quick_close == null) {
        quick_close = false;
      }
      _this = this;
      scrolled_position = parseInt(_this.main_content_window.css('top')) * -1;
      _this.container.trigger('modalClosed');
      _this.main_content_window.css({
        top: '0',
        position: 'relative'
      });
      $(window).scrollTop(scrolled_position);
      _this.putBackContent();
      _this.next_button.hide();
      _this.prev_button.hide();
      _this.window.hide();
      if (quick_close) {
        _this.mask.hide();
        this.window_container.empty();
        _this.modal_state = 'closed';
      } else {
        _this.mask.fadeOut(function() {
          _this.window_container.empty();
          return _this.modal_state = 'closed';
        });
      }
      $('html').removeClass('modal-open');
      _this.removeListeners();
      return $(window).trigger('FrameworkModal.afterClose');
    };

    FrameworkModal.prototype.putBackContent = function() {
      var _this;
      _this = this;
      _this.removeVideos();
      return _this.slides.removeClass('active').appendTo(_this.container);
    };

    FrameworkModal.prototype.removeListeners = function() {
      var _this;
      _this = this;
      $(document).off('keydown.FrameworkModal');
      $(window).off('resize.FrameworkModal');
      $('body,html').off('DOMMouseScroll.FrameworkModal mousewheel.FrameworkModal touchmove.FrameworkModal');
      _this.next_button.off('click.FrameworkModal');
      _this.prev_button.off('click.FrameworkModal');
      _this.close_button.off('click.FrameworkModal');
      _this.mask.off('click.FrameworkModal');
      return _this.window_container.off('click.FrameworkModal');
    };

    return FrameworkModal;

  })();

  theme.classes.FrameworkOffCanvas = (function() {
    function FrameworkOffCanvas(root) {
      var _this;
      this.root = root;
      this.touchListener = bind(this.touchListener, this);
      this.closeRight = bind(this.closeRight, this);
      this.closeLeft = bind(this.closeLeft, this);
      this.fadeInOverlay = bind(this.fadeInOverlay, this);
      this.openRight = bind(this.openRight, this);
      this.openLeft = bind(this.openLeft, this);
      this.toggle = bind(this.toggle, this);
      this.toggleListeners = bind(this.toggleListeners, this);
      this.viewPortHeightListener = bind(this.viewPortHeightListener, this);
      this.setViewPortHeight = bind(this.setViewPortHeight, this);
      this.setState = bind(this.setState, this);
      this.unload = bind(this.unload, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.viewport = $('.off-canvas--viewport');
      _this.left_sidebar = $('.off-canvas--left-sidebar');
      _this.right_sidebar = $('.off-canvas--right-sidebar');
      _this.main_content = $('.off-canvas--main-content');
      _this.overlay = $('.off-canvas--overlay');
      _this.state = 'closed';
      _this.load();
    }

    FrameworkOffCanvas.prototype.load = function() {
      var _this;
      _this = this;
      _this.close = $('.off-canvas--close');
      _this.triggers = $('.off-canvas--open');
      _this.setViewPortHeight();
      _this.viewPortHeightListener();
      _this.toggleListeners();
      return _this.touchListener();
    };

    FrameworkOffCanvas.prototype.unload = function() {
      var _this;
      _this = this;
      _this.triggers.off('click');
      _this.overlay.add(_this.close).off('click');
      $(document).off('touchstart.FrameworkOffCanvas');
      return $(document).off('touchend.FrameworkOffCanvas');
    };

    FrameworkOffCanvas.prototype.setState = function(state) {
      var _this;
      _this = this;
      _this.state = state;
      return _this.root.attr('data-off-canvas--state', state);
    };

    FrameworkOffCanvas.prototype.setViewPortHeight = function() {
      var _this;
      _this = this;
      return _this.viewport.css({
        'min-height': $(window).height()
      });
    };

    FrameworkOffCanvas.prototype.viewPortHeightListener = function() {
      var _this;
      _this = this;
      return $(window).resize(function() {
        return _this.setViewPortHeight();
      });
    };

    FrameworkOffCanvas.prototype.toggleListeners = function() {
      var _this;
      _this = this;
      _this.triggers.on('click', function() {
        if ($(this).data('off-canvas--open') === 'left-sidebar') {
          _this.toggle('left-sidebar');
        } else if ($(this).data('off-canvas--open') === 'right-sidebar') {
          _this.toggle('right-sidebar');
        }
        return false;
      });
      return _this.overlay.add(_this.close).on('click', function() {
        if (_this.state === 'left-open') {
          return _this.toggle('left-sidebar');
        } else if (_this.state === 'right-open') {
          return _this.toggle('right-sidebar');
        }
      });
    };

    FrameworkOffCanvas.prototype.toggle = function(element) {
      var _this;
      _this = this;
      if (element === 'left-sidebar' && _this.state === 'closed') {
        return _this.openLeft();
      } else if (element === 'left-sidebar' && _this.state === 'left-open') {
        return _this.closeLeft();
      } else if (element === 'right-sidebar' && _this.state === 'closed') {
        return _this.openRight();
      } else if (element === 'right-sidebar' && _this.state === 'right-open') {
        return _this.closeRight();
      }
    };

    FrameworkOffCanvas.prototype.openLeft = function() {
      var _this;
      _this = this;
      _this.setState('left-open');
      _this.main_content.css({
        position: 'fixed',
        top: -($(window).scrollTop())
      });
      _this.left_sidebar.velocity({
        translateX: [0, '-100%']
      }, {
        complete: function() {
          return _this.left_sidebar.css({
            position: 'relative'
          });
        }
      });
      return _this.fadeInOverlay();
    };

    FrameworkOffCanvas.prototype.openRight = function() {
      var _this;
      _this = this;
      _this.setState('right-open');
      _this.main_content.css({
        position: 'fixed',
        top: -($(window).scrollTop())
      });
      _this.right_sidebar.velocity({
        translateX: ['-100%', 0]
      }, {
        complete: function() {
          return _this.right_sidebar.css({
            position: 'relative'
          });
        }
      });
      return _this.fadeInOverlay();
    };

    FrameworkOffCanvas.prototype.fadeInOverlay = function() {
      var _this;
      _this = this;
      _this.overlay.show();
      return _this.overlay.velocity({
        opacity: '0.3'
      });
    };

    FrameworkOffCanvas.prototype.closeLeft = function() {
      var _this, scrolled_position;
      _this = this;
      if (_this.state !== 'left-open') {
        return false;
      }
      _this.setState('closed');
      scrolled_position = parseInt(_this.main_content.css('top')) * -1;
      _this.left_sidebar.velocity({
        translateX: ['-100%', 0]
      }, {
        complete: function() {
          _this.left_sidebar.css({
            position: 'absolute'
          });
          _this.main_content.css({
            position: 'relative',
            top: 'initial'
          });
          return $(window).scrollTop(scrolled_position);
        }
      });
      return _this.overlay.velocity('fadeOut');
    };

    FrameworkOffCanvas.prototype.closeRight = function() {
      var _this, scrolled_position;
      _this = this;
      if (_this.state !== 'right-open') {
        return false;
      }
      _this.setState('closed');
      scrolled_position = parseInt(_this.main_content.css('top')) * -1;
      _this.right_sidebar.velocity({
        translateX: [0, '-100%']
      }, {
        complete: function() {
          _this.right_sidebar.css({
            position: 'absolute'
          });
          _this.main_content.css({
            position: 'relative',
            top: 'initial'
          });
          return $(window).scrollTop(scrolled_position);
        }
      });
      return _this.overlay.velocity('fadeOut');
    };

    FrameworkOffCanvas.prototype.touchListener = function() {
      var _this, position;
      _this = this;
      if (!Modernizr.touchevents) {
        return false;
      }
      position = {
        start: {},
        end: {}
      };
      $(document).on('touchstart.FrameworkOffCanvas', function(e) {
        position.start.x = e.originalEvent.touches[0].clientX;
        position.start.y = e.originalEvent.touches[0].clientY;
      });
      return $(document).on('touchend.FrameworkOffCanvas', function(e) {
        position.end.x = e.originalEvent.changedTouches[0].clientX;
        position.end.y = e.originalEvent.changedTouches[0].clientY;
        if (Math.abs(position.start.y - position.end.y) > 30) {
          return false;
        }
        if (position.start.x > position.end.x + 5) {
          return _this.closeLeft();
        } else if (position.start.x < position.end.x - 5) {
          return _this.closeRight();
        }
      });
    };

    return FrameworkOffCanvas;

  })();

  theme.classes.FrameworkSearch = (function() {
    function FrameworkSearch(root) {
      var _this;
      this.root = root;
      this.linkRows = bind(this.linkRows, this);
      this.hideResults = bind(this.hideResults, this);
      this.getResults = bind(this.getResults, this);
      this.clear = bind(this.clear, this);
      this.focusModalAlways = bind(this.focusModalAlways, this);
      this.listenForKeyEntered = bind(this.listenForKeyEntered, this);
      this.loadSpinners = bind(this.loadSpinners, this);
      _this = this;
      _this.toggle_link = _this.root.find('.search--toggle');
      _this.form = _this.root.find('form');
      _this.text_box = _this.root.find('.search--textbox');
      _this.loading = _this.root.find('.search--loading');
      _this.no_results = _this.root.find('.search--no-results');
      _this.results = _this.root.find('.search--results');
      _this.view = _this.root.data('search--view');
      _this.icon = _this.root.find('.search--icon');
      _this.clear_button = _this.root.find('.search--clear');
      _this.max_results = 12;
      _this.ajax_request = null;
      _this.search_term = null;
      _this.search_url = null;
      _this.close_results_timer = null;
      _this.typing_timer = null;
      _this.focusModalAlways();
      _this.listenForKeyEntered();
      _this.loadSpinners();
      _this.clear();
    }

    FrameworkSearch.prototype.loadSpinners = function() {
      var _this, spinner;
      _this = this;
      spinner = _this.loading.find('.animation');
      if (spinner.hasClass('tiny')) {
        return spinner.spin('tiny');
      } else {
        return spinner.spin('small');
      }
    };

    FrameworkSearch.prototype.listenForKeyEntered = function() {
      var _this;
      _this = this;
      return _this.text_box.attr("autocomplete", "off").on("keyup paste", function() {
        var term;
        clearTimeout(_this.typing_timer);
        term = $(this).val();
        if (term.length < 2) {
          _this.results.empty();
          _this.hideResults();
          _this.loading.hide();
          _this.icon.show();
          _this.no_results.hide();
          _this.clear('checkToggle');
          return false;
        }
        _this.results.hide();
        _this.loading.show();
        _this.icon.hide();
        _this.no_results.hide();
        _this.clear('checkToggle');
        return _this.typing_timer = setTimeout(function() {
          _this.search_url = "/search?type=product&q=" + term;
          return _this.getResults(term);
        }, 300);
      });
    };

    FrameworkSearch.prototype.focusModalAlways = function() {
      var _this;
      _this = this;
      if (_this.view === 'grid') {
        return _this.root.on('click', function() {
          return _this.text_box.focus();
        });
      }
    };

    FrameworkSearch.prototype.clear = function(event) {
      var _this;
      _this = this;
      if (event === 'checkToggle') {
        if (_this.text_box.val().length > 0) {
          return _this.clear_button.show();
        } else {
          _this.clear_button.hide();
          return _this.text_box.trigger('keyup');
        }
      } else {
        return _this.clear_button.on('click', function() {
          _this.text_box.val('');
          return _this.clear('checkToggle');
        });
      }
    };

    FrameworkSearch.prototype.getResults = function(term) {
      var _this;
      _this = this;
      _this.results.empty();
      _this.ajax_request = $.getJSON(_this.search_url + "type=product&view=json", function(data) {
        if (data.results_count === 0) {
          _this.close_results_timer = setTimeout(function() {
            _this.hideResults();
            _this.no_results.show();
            _this.loading.hide();
            return _this.icon.show();
          }, 300);
        } else {
          clearTimeout(_this.close_results_timer);
          _this.loading.hide();
          _this.icon.show();
          _this.no_results.hide();
          _this.results.show();
          _this.results.stop(true, true).fadeIn(0);
          $.each(data.results, function(index, item) {
            var image, row;
            if (index >= _this.max_results) {
              return;
            }
            if (item.product_image) {
              image = '<img src="' + item.product_image + '" />';
            } else {
              image = '';
            }
            row = $('<a class="search--item" href="' + item.url + '"> <span class="search--image">' + image + '</span> <span class="search--title">' + item.title + '</span> </a>');
            _this.results.append(row);
            if (_this.view === 'modal') {
              $(window).trigger('resize.FrameworkModal');
              setTimeout(function() {
                return $(window).trigger('resize.FrameworkModal');
              }, 100);
            }
          });
          $.event.trigger("ie8ClearingFix");
          if (data.results_count > _this.max_results) {
            _this.results.append('<div class="search--view-more"> <a href="' + _this.search_url + '">' + theme.translations.general_search_see_all_results + ' ("' + data.results_count + '") </a> </div>');
          }
        }
      }).fail(function() {
        return console.log("error retrieving search.json results");
      });
    };

    FrameworkSearch.prototype.hideResults = function() {
      var _this;
      _this = this;
      return _this.results.fadeOut(0);
    };

    FrameworkSearch.prototype.linkRows = function() {
      var _this;
      _this = this;
      return _this.results.find("td").on('click', function() {
        var link;
        link = $(this).parent().attr('data-link');
        if (link.length) {
          return window.location = link;
        }
      });
    };

    return FrameworkSearch;

  })();

  theme.classes.Sections = (function() {
    function Sections() {
      this.unload = bind(this.unload, this);
      this.deselectBlock = bind(this.deselectBlock, this);
      this.selectBlock = bind(this.selectBlock, this);
      this.deselectSection = bind(this.deselectSection, this);
      this.selectSection = bind(this.selectSection, this);
      this.load = bind(this.load, this);
      this.getActiveBlock = bind(this.getActiveBlock, this);
      this.getActiveSection = bind(this.getActiveSection, this);
      this.listeners = bind(this.listeners, this);
      var _this;
      _this = this;
      _this.listeners();
    }

    Sections.prototype.listeners = function() {
      var _this;
      _this = this;
      _this.load();
      _this.unload();
      _this.selectSection();
      _this.deselectSection();
      _this.selectBlock();
      return _this.deselectBlock();
    };

    Sections.prototype.getActiveSection = function(evt) {
      var _this, active_section;
      _this = this;
      active_section = $(evt.target).find('[data-section-id]');
      return active_section;
    };

    Sections.prototype.getActiveBlock = function(evt) {
      var _this, active_block;
      _this = this;
      active_block = $(evt.target);
      return active_block;
    };

    Sections.prototype.load = function(evt) {
      var _this;
      _this = this;
      return $(document).on('shopify:section:load', function(evt) {
        var active_section;
        theme.utils.loadJsClasses();
        active_section = _this.getActiveSection(evt);
        active_section.triggerHandler("theme:section:load");
        return active_section.find('[data-js-class]').each(function() {
          return $(this).triggerHandler("theme:section:load");
        });
      });
    };

    Sections.prototype.selectSection = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:section:select', function(evt) {
        var active_section;
        active_section = _this.getActiveSection(evt);
        return active_section.triggerHandler("theme:section:select");
      });
    };

    Sections.prototype.deselectSection = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:section:deselect', function(evt) {
        var active_section;
        active_section = _this.getActiveSection(evt);
        return active_section.triggerHandler('theme:section:deselect');
      });
    };

    Sections.prototype.selectBlock = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:block:select', function(evt) {
        var active_block;
        active_block = _this.getActiveBlock(evt);
        return active_block.triggerHandler('theme:block:select');
      });
    };

    Sections.prototype.deselectBlock = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:block:deselect', function(evt) {
        var active_block;
        active_block = _this.getActiveBlock(evt);
        return active_block.triggerHandler('theme:block:deselect');
      });
    };

    Sections.prototype.unload = function(evt) {
      var _this;
      _this = this;
      return $(document).on('shopify:section:unload', function(evt) {
        var active_section;
        active_section = _this.getActiveSection(evt);
        active_section.triggerHandler("theme:section:unload");
        return active_section.find('[data-js-loaded="true"]').each(function() {
          return $(this).triggerHandler("theme:section:unload");
        });
      });
    };

    return Sections;

  })();

  theme.classes.FrameworkSlider = (function() {
    function FrameworkSlider(container1) {
      this.container = container1;
      this.eventListeners = bind(this.eventListeners, this);
      this.alignPlayButton = bind(this.alignPlayButton, this);
      this.updateContextMenu = bind(this.updateContextMenu, this);
      this.autoplay = bind(this.autoplay, this);
      this.formatPaginationNumbers = bind(this.formatPaginationNumbers, this);
      this.getActiveIndex = bind(this.getActiveIndex, this);
      this.createSlider = bind(this.createSlider, this);
      this.autoplay_enabled = this.container.data('autoplay') ? true : false;
      this.navigation = this.container.data('navigation') ? true : false;
      this.pagination_numbers = this.container.data('pagination-numbers') ? true : false;
      this.autoplay_frequency = 3000;
      this.slide_length = this.container.children().length;
      this.active_index = 0;
      this.news_panel = this.container.data('news-panel') ? true : false;
      this.createSlider();
      this.eventListeners();
      this.owl = this.container.data('owlCarousel');
    }

    FrameworkSlider.prototype.createSlider = function() {
      var _this, slider;
      _this = this;
      slider = this.container.owlCarousel({
        singleItem: true,
        navigation: _this.navigation,
        navigationText: false,
        pagination: _this.container.data('pagination') ? true : false,
        paginationNumbers: _this.pagination_numbers,
        scrollPerPageNav: true,
        slideSpeed: 800,
        autoHeight: false,
        autoPlay: _this.autoplay(),
        afterInit: function() {},
        afterAction: function() {
          _this.alignPlayButton();
          _this.active_index = _this.getActiveIndex();
          _this.updateContextMenu(_this.active_index);
          return _this.formatPaginationNumbers();
        }
      });
      if (_this.navigation) {
        slider.find('.owl-prev').html(theme.utils.addSymbol('chevron-left'));
        slider.find('.owl-next').html(theme.utils.addSymbol('chevron-right'));
      }
      return slider;
    };

    FrameworkSlider.prototype.getActiveIndex = function() {
      return this.container.find('.owl-pagination .owl-page.active').index();
    };

    FrameworkSlider.prototype.formatPaginationNumbers = function() {
      return this.container.find('.owl-page.active .owl-numbers').text((this.active_index + 1) + "/" + this.slide_length);
    };

    FrameworkSlider.prototype.autoplay = function() {
      if (this.autoplay_enabled) {
        return this.autoplay_frequency;
      }
      return false;
    };

    FrameworkSlider.prototype.updateContextMenu = function(index) {
      var context_navigation, type_class;
      if (this.news_panel) {
        type_class = '.' + this.container.find('.slide').eq(index).data('feed-type');
        context_navigation = this.container.closest('.template--index--news').find('.context-navigation');
        context_navigation.find('.item').hide();
        return context_navigation.find(type_class).show();
      }
    };

    FrameworkSlider.prototype.alignPlayButton = function() {
      var play_button, play_button_height, slide, slide_height, video_offset;
      slide = this.container.find('.owl-item').eq(this.active_index);
      play_button = slide.find('.play-button');
      if (play_button.length === 0) {
        return;
      }
      play_button.css('visibility', 'hidden');
      if (PAGE.hasClass('transparent-menu') && $('.main-header').css('position') === 'absolute') {
        slide_height = slide.outerHeight();
        play_button_height = play_button.outerHeight();
        video_offset = (slide_height - play_button_height) / 2;
        play_button.css({
          'margin-top': 0,
          'top': video_offset
        });
      } else {
        play_button.css({
          'margin-top': '-40px',
          'top': '50%'
        });
      }
      return play_button.css('visibility', 'visible');
    };

    FrameworkSlider.prototype.eventListeners = function() {
      var _this;
      _this = this;
      this.container.find(".play-button").on('click', function() {
        var video_modal;
        video_modal = new VideoModal($(this).closest('.video'));
        video_modal.open();
        _this.owl.stop();
        return false;
      });
      return this.container.find('.owl-pagination .owl-page, .skip-to-next').on('click', function() {
        _this.owl.next();
        return false;
      });
    };

    return FrameworkSlider;

  })();

  theme.classes.FrameworkStickyColumn = (function() {
    function FrameworkStickyColumn(container1, column_a, column_b, mq) {
      this.container = container1;
      this.column_a = column_a;
      this.column_b = column_b;
      this.mq = mq;
      this.Listeners = bind(this.Listeners, this);
      this.setColumnPosition = bind(this.setColumnPosition, this);
      this.getAlignment = bind(this.getAlignment, this);
      this.getState = bind(this.getState, this);
      this.resetLargerColumn = bind(this.resetLargerColumn, this);
      this.getSmallerColumn = bind(this.getSmallerColumn, this);
      this.heightsHaveChanged = bind(this.heightsHaveChanged, this);
      this.setHeights = bind(this.setHeights, this);
      this.loadColumns = bind(this.loadColumns, this);
      if (Modernizr.touchevents) {
        return false;
      }
      this.current_state = 'auto';
      this.column_a_height = 0;
      this.column_b_height = 0;
      this.loadColumns();
    }

    FrameworkStickyColumn.prototype.loadColumns = function() {
      var _this;
      _this = this;
      return theme.utils.imagesLoaded(_this.container, function() {
        _this.Listeners();
        return _this.setColumnPosition();
      });
    };

    FrameworkStickyColumn.prototype.setHeights = function() {
      this.column_a_height = this.column_a.outerHeight();
      return this.column_b_height = this.column_b.outerHeight();
    };

    FrameworkStickyColumn.prototype.heightsHaveChanged = function() {
      if (this.column_a.outerHeight() !== this.column_a_height) {
        this.setHeights();
        return true;
      }
      if (this.column_b.outerHeight() !== this.column_b_height) {
        this.setHeights();
        return true;
      }
      return false;
    };

    FrameworkStickyColumn.prototype.getSmallerColumn = function() {
      if (this.column_a_height < this.column_b_height) {
        return this.column_a;
      } else {
        return this.column_b;
      }
    };

    FrameworkStickyColumn.prototype.resetLargerColumn = function() {
      if (this.column_a_height > this.column_b_height) {
        return this.column_a.css({
          'position': 'relative',
          'top': 'auto',
          'bottom': 'auto'
        });
      } else {
        return this.column_b.css({
          'position': 'relative',
          'top': 'auto',
          'bottom': 'auto'
        });
      }
    };

    FrameworkStickyColumn.prototype.getState = function(scroll_pos, window_height, column) {
      var column_height, height_for_bottom, overflowing_column, state;
      state = 'auto';
      if (this.mq.current_window === 'small') {
        return 'auto';
      }
      column_height = column.outerHeight();
      if (window_height > column_height) {
        overflowing_column = true;
      }
      if (scroll_pos < this.container.offset().top) {
        state = 'auto';
      }
      if (overflowing_column) {
        height_for_bottom = column_height;
      } else {
        height_for_bottom = window_height;
      }
      if ((scroll_pos + height_for_bottom) > (this.container.offset().top + this.container.outerHeight())) {
        state = 'absolute-bottom';
      } else if (scroll_pos > this.container.offset().top && overflowing_column) {
        state = 'fixed-top';
      } else if (window_height < column_height && (scroll_pos + window_height) > (this.container.offset().top + column.outerHeight())) {
        state = 'fixed-bottom';
      }
      return state;
    };

    FrameworkStickyColumn.prototype.getAlignment = function(column) {
      if (column.hasClass('column-a')) {
        return 'left';
      } else if (column.hasClass('column-b')) {
        return 'right';
      }
    };

    FrameworkStickyColumn.prototype.setColumnPosition = function() {
      var _this, align, column, state;
      _this = this;
      _this.setHeights();
      column = _this.getSmallerColumn();
      state = _this.getState($(window).scrollTop(), $(window).height(), column);
      align = _this.getAlignment(column);
      if (state === 'auto' && this.current_state !== 'auto') {
        this.current_state = 'auto';
        column.css({
          'position': 'relative',
          'top': 'auto',
          'bottom': 'auto'
        });
      } else if (state === 'fixed-bottom' && this.current_state !== 'fixed-bottom') {
        this.current_state = 'fixed-bottom';
        column.css({
          'position': 'fixed',
          'top': 'auto',
          'bottom': 0
        });
      } else if (state === 'fixed-top' && this.current_state !== 'fixed-top') {
        this.current_state = 'fixed-top';
        column.css({
          'position': 'fixed',
          'top': 0,
          'bottom': 'auto'
        });
      } else if (state === 'absolute-bottom' && this.current_state !== 'absolute-bottom') {
        this.current_state = 'absolute-bottom';
        column.css({
          'position': 'absolute',
          'top': 'auto',
          'bottom': 0
        });
      }
      if (align === 'right') {
        return column.css({
          'right': 0
        });
      }
    };

    FrameworkStickyColumn.prototype.Listeners = function() {
      var _this;
      _this = this;
      $(window).scroll(function() {
        return _this.setColumnPosition();
      });
      setInterval(function() {
        if (_this.heightsHaveChanged()) {
          _this.resetLargerColumn();
          return _this.setColumnPosition();
        }
      }, 250);
      return $(window).resize(function() {
        _this.resetLargerColumn();
        return _this.setColumnPosition();
      });
    };

    return FrameworkStickyColumn;

  })();

  theme.classes.FrameworkUtils = (function() {
    function FrameworkUtils() {
      var _this;
      _this = this;
      _this.google_map_api_status = null;
    }

    FrameworkUtils.prototype.debounce = function(delay, fn) {
      var timeoutId;
      timeoutId = void 0;
      return function() {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(fn.bind(this), delay, arguments);
      };
    };

    FrameworkUtils.prototype.imagesLoaded = function(selector, callback) {
      var count, images_length;
      count = 0;
      images_length = selector.find('img[data-sizes="auto"]').length;
      if (images_length < 1) {
        callback();
        return;
      }
      return selector.on('lazybeforeunveil', function(e) {
        return $(e.target).one('load', function() {
          count++;
          if (count === images_length) {
            return callback();
          }
        });
      });
    };

    FrameworkUtils.prototype.a11yClick = function(event) {
      var code;
      if (event.type === 'click') {
        return true;
      } else if (event.type === 'keypress') {
        code = event.charCode || event.keyCode;
        if (code === 32) {
          event.preventDefault();
        }
        if (code === 32 || code === 13) {
          return true;
        }
      }
      return false;
    };

    FrameworkUtils.prototype.matchImageHeights = function(container, items, image_class) {
      var _this, greatest_image_height, items_per_row, row_items;
      _this = this;
      items_per_row = Math.round(container.width() / items.first().outerWidth());
      greatest_image_height = 0;
      row_items = $();
      items.find(image_class).css('height', 'auto');
      items.find('.placeholder--root').css('height', 'auto');
      return items.each(function(index) {
        var this_height;
        if ($(this).find('.image--root').length > 0) {
          this_height = $(this).find(image_class + ' .image--root').outerHeight();
        } else {
          this_height = $(this).find('.placeholder--root').outerHeight();
        }
        row_items = row_items.add($(this));
        if (this_height > greatest_image_height) {
          greatest_image_height = this_height;
        }
        if (index % items_per_row === items_per_row - 1 || index + 1 === items.length) {
          row_items.find(image_class + ', .placeholder--root').height(greatest_image_height);
          greatest_image_height = 0;
          return row_items = $();
        }
      });
    };

    return FrameworkUtils;

  })();

  theme.classes.FrameworkVideo = (function() {
    function FrameworkVideo(root) {
      var _this;
      this.root = root;
      _this = this;
      _this.root.fitVids();
    }

    return FrameworkVideo;

  })();

  theme.classes.FrameworkXMenu = (function() {
    function FrameworkXMenu(root) {
      var _this;
      this.root = root;
      this.slideUp = bind(this.slideUp, this);
      this.slideDown = bind(this.slideDown, this);
      this.arrangeMegaNav = bind(this.arrangeMegaNav, this);
      this.resizeListeners = bind(this.resizeListeners, this);
      this.checkOverlap = bind(this.checkOverlap, this);
      this.listeners = bind(this.listeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.debugging = false;
      _this.state = 'closed';
      _this.parent_links = _this.root.find('.x-menu--level-1--link > a');
      _this.sub_menu_links = _this.root.find('.x-menu--level-1--link:not([data-x-menu--depth="1"]) > a');
      _this.sub_menu_items = _this.sub_menu_links.parent().find('ul a');
      _this.parents_with_sub_menu = _this.sub_menu_links.parent();
      _this.overlap_parent = _this.root.data('x-menu--overlap-parent');
      _this.load();
    }

    FrameworkXMenu.prototype.load = function() {
      var _this;
      _this = this;
      _this.arrangeMegaNav();
      _this.listeners();
      _this.checkOverlap();
      return _this.resizeListeners();
    };

    FrameworkXMenu.prototype.listeners = function() {
      var _this;
      _this = this;
      _this.parents_with_sub_menu.on('mouseenter.XMenu', function(e) {
        return _this.slideDown($(this).find('> a'));
      });
      _this.parents_with_sub_menu.on('mouseleave.XMenu', function() {
        return _this.slideUp();
      });
      _this.parent_links.on('focus', function(e) {
        return _this.slideUp();
      });
      _this.sub_menu_links.on('focus', function(e) {
        return _this.slideDown($(this));
      });
      return _this.sub_menu_links.on('touchstart.XMenu', function(e) {
        e.preventDefault();
        if ($(this).parent().attr('data-x-menu--open') === 'true') {
          return _this.slideUp();
        } else {
          return _this.slideDown($(this));
        }
      });
    };

    FrameworkXMenu.prototype.checkOverlap = function() {
      var _this, center_index, center_item, center_item_left_edge, center_item_right_edge, center_item_width, container, container_width, first_center_child, last_center_child, left_break_point, left_item, right_item, right_item_edge;
      _this = this;
      if (Modernizr.touchevents && theme.utils.mqs.current_window !== 'large') {
        _this.root.attr('data-x-menu--overlap', 'true');
        return false;
      }
      _this.root.attr('data-x-menu--overlap', 'false');
      center_item = _this.root;
      if (_this.overlap_parent === 1) {
        center_item = center_item.parent();
      } else if (_this.overlap_parent === 2) {
        center_item = center_item.parent().parent();
      }
      container = center_item.parent();
      center_index = center_item.index();
      left_item = false;
      if (center_index > 1) {
        left_item = container.children().eq(center_index - 1);
      }
      right_item = false;
      if (center_index + 1 < container.children().length) {
        right_item = container.children().eq(center_index + 1);
      }
      container_width = container.width();
      center_item_width = _this.root.outerWidth();
      if (left_item) {
        first_center_child = center_item.find('> :first-child');
        center_item_left_edge = first_center_child.offset().left - 1;
        left_break_point = (container_width - center_item_width) / 2;
        if (left_edge >= center_item_left_edge) {
          _this.root.attr('data-x-menu--overlap', 'true');
        }
      }
      if (right_item) {
        last_center_child = center_item.find('> :last-child');
        center_item_right_edge = last_center_child.outerWidth() + last_center_child.offset().left + 1;
        right_item_edge = right_item.offset().left;
        if (center_item_right_edge >= right_item_edge) {
          return _this.root.attr('data-x-menu--overlap', 'true');
        }
      }
    };

    FrameworkXMenu.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.XMenu', _this.debounce(100, function() {
        return _this.checkOverlap();
      }));
    };

    FrameworkXMenu.prototype.debounce = function(delay, fn) {
      var timeoutId;
      timeoutId = void 0;
      return function() {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(fn.bind(this), delay, arguments);
      };
    };

    FrameworkXMenu.prototype.arrangeMegaNav = function() {
      var _this, mega_navs;
      _this = this;
      if (_this.parents_with_sub_menu.length === 0) {
        return false;
      }
      mega_navs = _this.root.find('[data-x-menu--depth="3"] .x-menu--level-2--container');
      return mega_navs.each(function() {
        var container, single_parents, single_parents_container;
        container = $(this);
        single_parents = container.find('[data-x-menu--single-parent="true"]');
        if (single_parents.length > 0) {
          single_parents_container = $('<div class="x-menu--single-parents"></div>').insertAfter(container.find('.x-menu--bg'));
          return single_parents_container.append('<ul>').find('ul').append(single_parents);
        }
      });
    };

    FrameworkXMenu.prototype.slideDown = function(link, delay) {
      var _this, display_type, link_wrapper, menu_height, sub_menu;
      if (delay == null) {
        delay = false;
      }
      _this = this;
      clearTimeout(_this.timer);
      link_wrapper = link.parent();
      if (link_wrapper.attr('data-x-menu--open') === 'true') {
        return false;
      }
      _this.slideUp(false);
      if (delay && delay !== 'complete') {
        _this.timer = setTimeout(function() {
          return _this.slideDown(link, 'complete');
        }, delay);
      } else {
        link.closest('.x-menu--level-1--link').find('.fw--icon--expand-less').show();
        link.closest('.x-menu--level-1--link').find('.fw--icon--expand-more').hide();
        link.closest('.x-menu--level-1--link').find('.fw--icon--minus').show();
        link.closest('.x-menu--level-1--link').find('.fw--icon--plus').hide();
        _this.state = 'open';
        link_wrapper.attr('data-x-menu--open', 'true');
        link.attr('aria-expanded', 'true');
        sub_menu = link.closest('.x-menu--level-1--link').find('.x-menu--level-2--container');
        display_type = 'block';
        if (link_wrapper.attr('data-x-menu--depth') === "3") {
          display_type = 'flex';
        }
        sub_menu.velocity('stop');
        sub_menu.css({
          height: 'auto',
          display: display_type
        });
        menu_height = sub_menu.outerHeight();
        sub_menu.css({
          height: 0,
          opacity: 1
        });
        sub_menu.find('.x-menu--level-2--list').css({
          display: display_type
        });
        sub_menu.velocity({
          height: [menu_height, 0]
        }, {
          queue: false,
          duration: 600,
          easing: "easeOutExpo"
        });
      }
    };

    FrameworkXMenu.prototype.slideUp = function(delay) {
      var _this, link, link_wrapper, sub_menu;
      if (delay == null) {
        delay = 300;
      }
      _this = this;
      if (_this.debugging) {
        return false;
      }
      link_wrapper = _this.parents_with_sub_menu.filter('[data-x-menu--open="true"]');
      link = link_wrapper.find('> a');
      if (link_wrapper.attr('data-x-menu--open') === 'false') {
        return false;
      }
      if (delay) {
        return _this.timer = setTimeout(function() {
          return _this.slideUp(false);
        }, delay);
      } else {
        link.closest('.x-menu--level-1--link').find('.fw--icon--expand-less').hide();
        link.closest('.x-menu--level-1--link').find('.fw--icon--expand-more').show();
        link.closest('.x-menu--level-1--link').find('.fw--icon--minus').hide();
        link.closest('.x-menu--level-1--link').find('.fw--icon--plus').show();
        sub_menu = link.closest('.x-menu--level-1--link').find('.x-menu--level-2--container');
        link_wrapper.attr('data-x-menu--open', 'false');
        link.attr('aria-expanded', 'false');
        _this.state = 'closed';
        return sub_menu.velocity({
          opacity: 0
        }, {
          duration: 200,
          display: 'none'
        });
      }
    };

    return FrameworkXMenu;

  })();

  theme.classes.FrameworkYMenu = (function() {
    function FrameworkYMenu(root) {
      var _this;
      this.root = root;
      this.slideRight = bind(this.slideRight, this);
      this.slideLeft = bind(this.slideLeft, this);
      this.adjustHeight = bind(this.adjustHeight, this);
      this.listeners = bind(this.listeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.state = 'closed';
      _this.sub_menu_links = _this.root.find('.fw--icon--chevron-right').parent();
      _this.back_links = _this.root.find('.y-menu--back-link a');
      _this.timer = null;
      _this.load();
    }

    FrameworkYMenu.prototype.load = function() {
      var _this;
      _this = this;
      return _this.listeners();
    };

    FrameworkYMenu.prototype.listeners = function() {
      var _this;
      _this = this;
      _this.sub_menu_links.on('click', function(e) {
        _this.slideLeft($(this));
        return false;
      });
      return _this.back_links.on('click', function(e) {
        _this.slideRight($(this));
        return false;
      });
    };

    FrameworkYMenu.prototype.adjustHeight = function(open_list) {
      var _this, current_height, open_list_height;
      _this = this;
      _this.root.css({
        height: 'auto'
      });
      current_height = _this.root.outerHeight();
      open_list_height = open_list.outerHeight();
      if (open_list.css('position') === 'absolute') {
        open_list.css('position', 'relative');
        open_list_height = open_list.outerHeight();
        open_list.css('position', 'absolute');
      }
      return _this.root.velocity({
        height: open_list_height
      });
    };

    FrameworkYMenu.prototype.slideLeft = function(link) {
      var _this, sub_menu;
      _this = this;
      sub_menu = link.closest('li').find('ul').first();
      sub_menu.css({
        display: 'block'
      });
      _this.adjustHeight(sub_menu);
      return sub_menu.velocity({
        translateX: ['-100%', 0]
      });
    };

    FrameworkYMenu.prototype.slideRight = function(link) {
      var _this, container, parent_container;
      _this = this;
      container = link.closest('ul');
      parent_container = container.parent().closest('ul');
      _this.adjustHeight(parent_container);
      return container.velocity({
        translateX: [0, '-100%']
      });
    };

    return FrameworkYMenu;

  })();

  theme.classes.Cart = (function(superClass) {
    extend(Cart, superClass);

    function Cart(root) {
      this.root = root;
      this.updateTotalsComplete = bind(this.updateTotalsComplete, this);
      Cart.__super__.constructor.call(this, this.root);
    }

    Cart.prototype.updateTotalsComplete = function() {
      var _this;
      _this = this;
      $('.header--cart .toggle .total').html(_this.totals.price);
      $('.header--cart .toggle .count').html(_this.totals.count);
      if (_this.totals.count > 0) {
        return $('.header--cart .cart-link').attr('data-cart--has-items', 'true');
      } else {
        return $('.header--cart .cart-link').attr('data-cart--has-items', 'false');
      }
    };

    return Cart;

  })(theme.classes.FrameworkCart);

  theme.classes.FeedbackBar = (function() {
    function FeedbackBar(container1) {
      var _this;
      this.container = container1;
      this.load = bind(this.load, this);
      _this = this;
      _this.messages = _this.container.find('.feedback-bar--message span');
      _this.load();
    }

    FeedbackBar.prototype.load = function() {
      var _this, anchor_tag, message, message_elem;
      _this = this;
      _this.messages.hide();
      anchor_tag = window.location.hash.substr(1);
      message = anchor_tag.replace('feedback-bar--', '');
      message_elem = _this.messages.filter('[data-feedback-bar--message="' + message + '"]');
      if (message_elem.length) {
        message_elem.show();
        setTimeout(function() {
          return _this.container.attr('data-feedback-bar--open', 'true');
        }, 200);
        return setTimeout(function() {
          return _this.container.attr('data-feedback-bar--open', 'false');
        }, 3000);
      }
    };

    return FeedbackBar;

  })();

  theme.classes.Slideshow = (function() {
    function Slideshow(root) {
      var _this, slide_parent;
      this.root = root;
      this.eventListeners = bind(this.eventListeners, this);
      this.alignPlayButton = bind(this.alignPlayButton, this);
      this.alignCaption = bind(this.alignCaption, this);
      this.isFirstSlider = bind(this.isFirstSlider, this);
      this.getActiveIndex = bind(this.getActiveIndex, this);
      this.autoplay = bind(this.autoplay, this);
      this.createSlider = bind(this.createSlider, this);
      _this = this;
      this.el = _this.root.find('.slides');
      slide_parent = this.el.closest('.slider');
      this.autoplay_enabled = slide_parent.data('autoplay');
      if (slide_parent.find('.slide').length < 2) {
        this.autoplay_enabled = false;
      }
      this.autoplay_frequency = slide_parent.data('rotateFrequency');
      this.transition_style = slide_parent.data('transitionStyle');
      this.createSlider();
      this.owl = $(".owl-carousel").data('owlCarousel');
    }

    Slideshow.prototype.createSlider = function() {
      var slider, slider_options;
      slider = this;
      slider_options = {
        singleItem: true,
        navigation: false,
        paginationNumbers: false,
        scrollPerPageNav: true,
        slideSpeed: 800,
        pagination: true,
        autoHeight: true,
        autoPlay: slider.autoplay(),
        afterInit: function() {
          return slider.eventListeners();
        },
        afterAction: function() {
          slider.alignCaption();
          return slider.alignPlayButton();
        }
      };
      if (this.transition_style !== 'default') {
        slider_options['transitionStyle'] = this.transition_style;
      }
      return slider.el.owlCarousel(slider_options);
    };

    Slideshow.prototype.autoplay = function() {
      if (this.autoplay_enabled) {
        return this.autoplay_frequency;
      }
      return false;
    };

    Slideshow.prototype.getActiveIndex = function() {
      return this.el.find('.owl-pagination .owl-page.active').index();
    };

    Slideshow.prototype.isFirstSlider = function() {
      var current_section_id, first_section, first_section_id;
      first_section = $('.index-sections').children('div:first');
      first_section_id = first_section.find('.slider').data('sectionId');
      current_section_id = this.el.closest('.slider').data('sectionId');
      if (first_section.hasClass('section--slideshow')) {
        return current_section_id === first_section_id;
      }
      return false;
    };

    Slideshow.prototype.alignCaption = function() {
      var caption, caption_height, caption_width, left_offset, middle_top, slide, slide_height, slide_padding, slide_width, top_offset;
      slide = this.el.find('.owl-item').eq(this.getActiveIndex());
      caption = slide.find('.caption');
      caption.css('visibility', 'hidden');
      caption_height = caption.outerHeight();
      caption_width = caption.outerWidth();
      slide_padding = 30;
      slide_height = slide.outerHeight();
      slide_width = slide.outerWidth();
      top_offset = 0;
      if (caption.hasClass('top')) {
        caption.css('top', top_offset + slide_padding);
      } else if (caption.hasClass('middle')) {
        middle_top = top_offset + (slide_height - top_offset - caption_height) / 2;
        caption.css('top', middle_top);
      }
      if (caption.hasClass('center')) {
        left_offset = (slide_width - caption_width) / 2;
        caption.css('left', left_offset);
      }
      return caption.css('visibility', 'visible');
    };

    Slideshow.prototype.alignPlayButton = function() {
      var play_button, slide;
      slide = this.el.find('.owl-item').eq(this.getActiveIndex());
      play_button = slide.find('.play-button');
      play_button.css('visibility', 'hidden');
      play_button.css({
        'margin-top': '-40px',
        'top': '50%'
      });
      return play_button.css('visibility', 'visible');
    };

    Slideshow.prototype.eventListeners = function() {
      var slider;
      slider = this;
      return this.el.find('.owl-pagination .owl-page').on('click', function() {
        return slider.owl.stop();
      });
    };

    return Slideshow;

  })();

  theme.classes.Header = (function() {
    function Header(root) {
      var _this;
      this.root = root;
      this.accelerationState = bind(this.accelerationState, this);
      this.newScrollDetected = bind(this.newScrollDetected, this);
      this.scrollHandler = bind(this.scrollHandler, this);
      this.touchListener = bind(this.touchListener, this);
      this.scrollListener = bind(this.scrollListener, this);
      this.validScrollZone = bind(this.validScrollZone, this);
      this.detectAndLockHeader = bind(this.detectAndLockHeader, this);
      this.hideFixedHeader = bind(this.hideFixedHeader, this);
      this.closeWhenReady = bind(this.closeWhenReady, this);
      this.showFixedHeader = bind(this.showFixedHeader, this);
      this.resizeListeners = bind(this.resizeListeners, this);
      this.sectionListeners = bind(this.sectionListeners, this);
      this.moveContactButton = bind(this.moveContactButton, this);
      this.moveYMenu = bind(this.moveYMenu, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.container = _this.root.find('.header--container');
      _this.fixed_height = 0;
      _this.delta = 0;
      _this.scrollings = [];
      _this.prev_time = new Date().getTime();
      _this.prev_acceleration_state = 'decel';
      _this.scroll_detection_active = false;
      _this.time_last_scrolled = 0;
      _this.browser_type = null;
      _this.mouse_type = null;
      _this.animation_lock = false;
      _this.load();
    }

    Header.prototype.load = function() {
      var _this;
      _this = this;
      _this.moveYMenu();
      _this.moveContactButton();
      _this.resizeListeners();
      _this.sectionListeners();
      _this.scrollListener();
      return _this.touchListener();
    };

    Header.prototype.moveYMenu = function() {
      var _this;
      _this = this;
      $('.mobile-nav--menu').empty();
      return $('.y-menu').appendTo('.mobile-nav--menu');
    };

    Header.prototype.moveContactButton = function() {
      var _this;
      _this = this;
      $('.mobile-nav--contact-button').empty();
      if ($('.header--contact-button-for-off-canvas').length > 0) {
        return $('.header--contact-button-for-off-canvas .contact-modal').appendTo('.mobile-nav--contact-button');
      }
    };

    Header.prototype.sectionListeners = function() {
      var _this;
      _this = this;
      _this.root.on('theme:section:load', function() {
        if ($('.modal--window').css('display') === 'block') {
          $('.modal--close').trigger('click');
        }
        theme.partials.FrameworkOffCanvas.unload();
        return theme.partials.FrameworkOffCanvas.load();
      });
      return _this.root.on('theme:section:unload', function() {
        return $(window).off('resize.Header');
      });
    };

    Header.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.Header', _this.checkOverlap);
    };

    Header.prototype.showFixedHeader = function(from_event) {
      var _this, valid_zone;
      if (from_event == null) {
        from_event = 'scroll';
      }
      _this = this;
      if (from_event === 'add-to-cart') {
        valid_zone = _this.validScrollZone(0);
      } else {
        valid_zone = _this.validScrollZone();
      }
      if (_this.root.attr('data-header--position') === 'fixed' || !valid_zone) {
        return false;
      }
      _this.animation_lock = true;
      _this.root.height(_this.root.height());
      _this.root.attr('data-header--position', 'fixed');
      if (_this.fixed_height === 0) {
        _this.fixed_height = _this.container.outerHeight();
      }
      return _this.container.velocity({
        translateY: [0, -_this.fixed_height]
      }, {
        duration: 500,
        complete: function() {
          _this.animation_lock = false;
          if (from_event === 'add-to-cart') {
            return _this.closeWhenReady();
          }
        }
      });
    };

    Header.prototype.closeWhenReady = function() {
      var _this, timer;
      _this = this;
      timer = setTimeout(function() {
        _this.hideFixedHeader();
        return _this.container.off('mouseenter mouseleave');
      }, 2000);
      _this.container.on('mouseenter', function() {
        return clearTimeout(timer);
      });
      return _this.container.on('mouseleave', function() {
        return timer = setTimeout(function() {
          _this.hideFixedHeader();
          return _this.container.off('mouseenter mouseleave');
        }, 500);
      });
    };

    Header.prototype.hideFixedHeader = function(duration) {
      var _this;
      if (duration == null) {
        duration = 400;
      }
      _this = this;
      if (_this.root.attr('data-header--position') !== 'fixed') {
        return false;
      }
      _this.animation_lock = true;
      _this.container.velocity("stop", true);
      return _this.container.velocity({
        translateY: [-_this.fixed_height, 0]
      }, {
        duration: duration,
        complete: function() {
          _this.root.attr('data-header--position', 'relative');
          _this.container.removeAttr('style');
          _this.root.height('auto');
          return _this.animation_lock = false;
        }
      });
    };

    Header.prototype.detectAndLockHeader = function() {
      var _this, header_offset, scroll_top;
      _this = this;
      if (_this.root.attr('data-header--position') !== 'fixed') {
        return;
      }
      scroll_top = $(window).scrollTop();
      header_offset = _this.root.offset().top;
      if ($('[data-banner--enabled="true"]').length === 0) {
        header_offset += 0;
      }
      if (scroll_top <= header_offset) {
        return _this.hideFixedHeader(0);
      }
    };

    Header.prototype.validScrollZone = function(offset_threshold) {
      var _this, header_offset, scroll_top;
      if (offset_threshold == null) {
        offset_threshold = 600;
      }
      _this = this;
      scroll_top = $(window).scrollTop();
      header_offset = _this.root.offset().top + (_this.root.outerHeight() / 2);
      if (scroll_top > header_offset + offset_threshold) {
        return true;
      } else {
        return false;
      }
    };

    Header.prototype.scrollListener = function() {
      var _this;
      _this = this;
      $(window).on("DOMMouseScroll mousewheel touchmove", function(e) {
        _this.scrollHandler(e);
        return _this.detectAndLockHeader();
      });
      return $(window).on("scroll", function(e) {
        return _this.detectAndLockHeader();
      });
    };

    Header.prototype.touchListener = function() {
      var _this, position;
      _this = this;
      if (!Modernizr.touchevents) {
        return false;
      }
      position = {
        start: {},
        end: {}
      };
      $(document).on('touchmove', function(e) {
        return _this.detectAndLockHeader();
      });
      $(document).on('touchstart', function(e) {
        position.start.x = e.originalEvent.touches[0].clientX;
        position.start.y = e.originalEvent.touches[0].clientY;
      });
      return $(document).bind('touchend', function(e) {
        if (_this.animation_lock) {
          return false;
        }
        position.end.x = e.originalEvent.changedTouches[0].clientX;
        position.end.y = e.originalEvent.changedTouches[0].clientY;
        if (Math.abs(position.start.x - position.end.x) > 30) {
          return false;
        }
        if (position.start.y > position.end.y + 5) {
          return _this.hideFixedHeader();
        } else if (position.start.y < position.end.y - 5) {
          return _this.showFixedHeader();
        }
      });
    };

    Header.prototype.scrollHandler = function(e) {
      var _this, delta, horizontalDetection, isScrollingVertically, value;
      _this = this;
      if (_this.animation_lock) {
        return false;
      }
      e = e.originalEvent;
      if (typeof e.wheelDelta !== 'undefined') {
        value = e.wheelDelta;
        _this.browser_type = 'webkit';
      } else if (typeof e.detail !== 'undefined') {
        value = -e.detail;
        _this.browser_type = 'firefox';
      }
      delta = Math.max(-1, Math.min(1, value));
      if (_this.scrollings.length > 149) {
        _this.scrollings.shift();
      }
      _this.scrollings.push(Math.abs(value));
      horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
      isScrollingVertically = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !horizontalDetection;
      if (isScrollingVertically) {
        if (_this.newScrollDetected()) {
          if (delta < 0) {
            return _this.hideFixedHeader();
          } else {
            return _this.showFixedHeader();
          }
        }
      }
    };

    Header.prototype.newScrollDetected = function() {
      var _this, acceleration_state, cur_time, scrolled_recently;
      _this = this;
      cur_time = new Date().getTime();
      acceleration_state = _this.accelerationState();
      scrolled_recently = cur_time - _this.time_last_scrolled < 500;
      if (!acceleration_state) {
        return false;
      } else if (acceleration_state === 'accel' && _this.prev_acceleration_state === 'decel' && !scrolled_recently) {
        _this.prev_acceleration_state = acceleration_state;
        return true;
      } else {
        _this.prev_acceleration_state = acceleration_state;
        return false;
      }
    };

    Header.prototype.accelerationState = function() {
      var _this, accel_state, average_end, average_middle, cur_time, getAverage, time_diff;
      _this = this;
      cur_time = new Date().getTime();
      time_diff = cur_time - _this.prev_time;
      _this.prev_time = cur_time;
      if (time_diff > 50) {
        _this.scrollings = [_this.scrollings[_this.scrollings.length - 1]];
        _this.prev_acceleration_state = 'decel';
      }
      getAverage = function(elements, number) {
        var i, lastElements, sum;
        sum = 0;
        lastElements = elements.slice(elements.length - number);
        i = 0;
        while (i < lastElements.length) {
          sum = sum + lastElements[i];
          i++;
        }
        return sum / number;
      };
      average_middle = getAverage(_this.scrollings, Math.ceil(_this.scrollings.length * 0.5));
      average_end = getAverage(_this.scrollings, Math.ceil(_this.scrollings.length * 0.05));
      accel_state = 'decel';
      if (_this.scrollings.length > 1) {
        if (_this.scrollings[0] === 120) {
          accel_state = 'accel';
        } else if (_this.scrollings.length === 2) {
          if (_this.scrollings[0] === 1 && _this.scrollings[1] === 1) {
            accel_state = 'accel';
          }
        } else if (average_end > average_middle) {
          accel_state = 'accel';
        }
      }
      return accel_state;
    };

    return Header;

  })();

  theme.classes.MobileNav = (function() {
    function MobileNav(root) {
      var _this;
      this.root = root;
      this.contactModalTrigger = bind(this.contactModalTrigger, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.modal_content = _this.root.find('.modal--content');
      _this.load();
    }

    MobileNav.prototype.load = function() {
      var _this;
      _this = this;
      return _this.contactModalTrigger();
    };

    MobileNav.prototype.contactModalTrigger = function() {
      var _this, trigger;
      _this = this;
      trigger = $('.mobile-nav--contact-modal-trigger');
      if (trigger.length) {
        return trigger.on("click", function() {
          theme.partials.FrameworkOffCanvas.closeLeft();
          setTimeout(function() {
            return $('.header--contact-modal .modal--link').trigger('click');
          }, 400);
          return false;
        });
      }
    };

    return MobileNav;

  })();

  theme.classes.Popup = (function() {
    function Popup(root) {
      var _this;
      this.root = root;
      _this = this;
      _this.container = _this.root.find('.popup--container');
      _this.open_link = $('.popup--open');
      _this.close_link = _this.root.find('.popup--close');
      _this.show_again_after = _this.root.data('show-again-after');
      _this.mode = _this.root.data('mode');
      _this.newsletter_form = _this.root.find('#contact_form');
      _this.body = $('body');
      _this.eventListeners();
      _this.autoPopup();
    }

    Popup.prototype.eventListeners = function() {
      var _this;
      _this = this;
      _this.open_link.on('keypress.Popup, click.Popup', function(e) {
        if (_this.body.hasClass('popup--opened')) {
          _this.close();
        } else {
          _this.open();
        }
        return false;
      });
      return _this.close_link.on('keypress.Popup, click.Popup', function(e) {
        _this.close();
        return false;
      });
    };

    Popup.prototype.open = function(source) {
      var _this;
      _this = this;
      if ($('.template--index .banner').length && source === 'auto') {
        _this.delayUntilValidScrollPosition();
        return false;
      }
      _this.container.removeClass('popup--closed');
      _this.container.velocity({
        translateY: [0, _this.container.outerHeight()]
      }, {
        duration: 300
      });
      _this.body.addClass('popup--opened');
      return setTimeout(function() {
        return _this.body.css('padding-bottom', _this.container.outerHeight());
      }, 300);
    };

    Popup.prototype.delayUntilValidScrollPosition = function() {
      var _this;
      _this = this;
      return $(window).on("DOMMouseScroll.Popup mousewheel.Popup touchmove.Popup scroll.Popup touchmove.Popup", function(e) {
        var header_offset, scroll_top;
        header_offset = $('.header').offset().top;
        scroll_top = $(window).scrollTop();
        if (scroll_top > header_offset) {
          _this.open();
          return $(window).off("DOMMouseScroll.Popup mousewheel.Popup touchmove.Popup scroll.Popup touchmove.Popup");
        }
      });
    };

    Popup.prototype.close = function() {
      var _this;
      _this = this;
      _this.body.removeClass('popup--opened');
      _this.body.velocity({
        paddingBottom: 0
      }, {
        duration: 300
      });
      return _this.container.velocity({
        translateY: [_this.container.outerHeight(), 0]
      }, {
        duration: 300,
        complete: function() {
          return _this.container.addClass('popup--closed');
        }
      });
    };

    Popup.prototype.autoPopup = function() {
      var _this;
      _this = this;
      if (_this.mode === 'manual') {
        return;
      }
      if (!Modernizr.localstorage || _this.mode === 'test') {
        return setTimeout(function() {
          return _this.open('auto');
        }, 1000);
      } else if (localStorage['troop-themes'] === void 0) {
        _this.setResetTime();
        return setTimeout(function() {
          return _this.open('auto');
        }, 1000);
      } else if (_this.readyToReset()) {
        _this.setResetTime();
        return setTimeout(function() {
          return _this.open('auto');
        }, 1000);
      }
    };

    Popup.prototype.readyToReset = function() {
      var _this, expires, now, troop_local_storage;
      _this = this;
      troop_local_storage = JSON.parse(localStorage['troop-themes']);
      expires = troop_local_storage.popup_expires;
      now = new Date().getTime();
      if (parseFloat(expires - now) <= 0) {
        _this.setResetTime();
        return true;
      }
      return false;
    };

    Popup.prototype.setResetTime = function() {
      var _this, date, expires, object, seconds_from_now;
      _this = this;
      date = new Date();
      seconds_from_now = 1000 * 60 * 60 * 24 * _this.show_again_after;
      expires = date.setTime(date.getTime() + seconds_from_now);
      object = {
        popup_expires: expires
      };
      localStorage['troop-themes'] = JSON.stringify(object);
      return _this;
    };

    return Popup;

  })();

  theme.classes.QuickAdd = (function() {
    function QuickAdd(root) {
      var _this;
      this.root = root;
      this.addProductComplete = bind(this.addProductComplete, this);
      this.renderCart = bind(this.renderCart, this);
      this.variantSelected = bind(this.variantSelected, this);
      this.initiateVariants = bind(this.initiateVariants, this);
      this.handleDuplicates = bind(this.handleDuplicates, this);
      this.eventListeners = bind(this.eventListeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.id = _this.root.data('quick-add--id');
      _this.index = '';
      _this.json = theme.quick_add['json_' + _this.id];
      _this.show_variants = _this.root.data('quick-add--show-variants');
      _this.add_button = _this.root.find('.quick-add--add-button');
      _this.confirm_button_wrapper = _this.root.find('.quick-add--button-wrapper');
      _this.confirm_button = _this.root.find('.quick-add--confirm-button');
      _this.cancel_button = _this.root.find('.quick-add--cancel-button');
      _this.cart_form = _this.root.find('.quick-add--cart-form');
      _this.variant_sold_out = _this.root.find('.quick-add--sold-out--variant');
      _this.unavailable_variant = _this.root.find('.quick-add--unavailable-variant');
      _this.price_wrapper = _this.root.find('.quick-add--price-wrapper');
      _this.price = _this.root.find('.quick-add--price');
      _this.compare_price = _this.root.find('.quick-add--compare-price');
      _this.details = _this.root.find('.quick-add--details');
      _this.product_image = _this.root.closest('.product').find('.product--image img');
      _this.related_product_details = _this.root.closest('.product--details').find('.product--details--title-row, .product--excerpt, .product--vendor');
      _this.load();
    }

    QuickAdd.prototype.load = function() {
      var _this;
      _this = this;
      _this.handleDuplicates();
      _this.initiateVariants();
      return _this.eventListeners();
    };

    QuickAdd.prototype.eventListeners = function() {
      var _this;
      _this = this;
      _this.add_button.on('keypress click', function(e) {
        if (_this.show_variants) {
          _this.details.show();
          _this.add_button.hide();
          _this.related_product_details.hide();
        } else {
          _this.cart_form.trigger('submit');
        }
        return false;
      });
      _this.cancel_button.on('keypress click', function(e) {
        if (theme.utils.a11yClick(e) === true) {
          _this.details.hide();
          _this.add_button.show();
          _this.related_product_details.show();
        }
        return false;
      });
      if (_this.cart_form.length > 0) {
        return _this.cart_form.on('submit', function(e) {
          e.preventDefault();
          _this.cart_form.find('p.error').remove();
          _this.add_button.attr('data-loading', 'true');
          _this.confirm_button.attr('data-loading', 'true');
          theme.partials.Cart.addItem($(this), function(pass, error) {
            if (pass) {
              return _this.renderCart();
            } else {
              _this.cart_form.append('<div class="product-page--error error">' + error + '</div>');
              _this.add_button.attr('data-loading', 'false');
              return _this.confirm_button.attr('data-loading', 'false');
            }
          });
          return false;
        });
      }
    };

    QuickAdd.prototype.handleDuplicates = function() {
      var _this, product;
      _this = this;
      product = $('[data-quick-add--id="' + _this.id + '"]');
      if (product.length > 1) {
        return product.each(function(index) {
          if ($(this).attr('data-quick-add--duplicates-processed') !== 'true') {
            $(this).find('select').attr('id', 'quick-add--select--' + _this.id + '-' + index);
            $(this).attr('data-quick-add--duplicates-processed', 'true');
          }
          if ($(this).is(_this.root)) {
            return _this.index = '-' + index;
          }
        });
      }
    };

    QuickAdd.prototype.initiateVariants = function() {
      var _this, id, options;
      _this = this;
      id = 'quick-add--select--' + _this.id + _this.index;
      if (_this.root.find('select').length > 0) {
        return options = new Shopify.OptionSelectors(id, {
          product: _this.json,
          onVariantSelected: _this.variantSelected,
          enableHistoryState: false
        });
      }
    };

    QuickAdd.prototype.variantSelected = function(variant, selector, options) {
      var _this, product_sold_out;
      _this = this;
      product_sold_out = false;
      if (_this.root.find('.quick-add--sold-out--product').length) {
        product_sold_out = true;
      }
      _this.variant_sold_out.hide();
      _this.unavailable_variant.hide();
      _this.add_button.hide();
      _this.price_wrapper.hide();
      _this.confirm_button_wrapper.hide();
      if (!variant) {
        _this.unavailable_variant.show();
        return false;
      } else if (variant && variant.available) {
        _this.price_wrapper.show();
        _this.confirm_button_wrapper.show();
        if (_this.details.css('display') !== 'block') {
          _this.add_button.show();
        }
      } else if (product_sold_out) {
        _this.variant_sold_out.hide();
        _this.add_button.hide();
      } else {
        _this.variant_sold_out.show();
      }
      _this.price.html(Shopify.formatMoney(variant.price, theme.money_format));
      if (variant.compare_at_price > variant.price) {
        _this.compare_price.html(Shopify.formatMoney(variant.compare_at_price, theme.money_format));
        return _this.compare_price.show();
      } else {
        return _this.compare_price.hide();
      }
    };

    QuickAdd.prototype.renderCart = function() {
      var _this;
      _this = this;
      return theme.partials.Cart.renderCart(function() {
        return _this.addProductComplete();
      });
    };

    QuickAdd.prototype.addProductComplete = function() {
      var _this;
      _this = this;
      _this.add_button.attr('data-loading', 'false');
      _this.confirm_button.attr('data-loading', 'false');
      _this.details.hide();
      _this.add_button.show();
      _this.related_product_details.show();
      theme.partials.Header.showFixedHeader('add-to-cart');
      return $('.header--cart .toggle .total, .header--cart .toggle .count').velocity({
        opacity: 0
      }, {
        delay: 500,
        duration: 200
      }).velocity({
        opacity: 1
      }, {
        duration: 500
      });
    };

    return QuickAdd;

  })();

  theme.classes.ServiceList = (function() {
    function ServiceList(root) {
      var _this;
      this.root = root;
      this.balanceColumns = bind(this.balanceColumns, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.section_id = _this.root.data('section-id');
      _this.block_list = _this.root.find('.service-list--blocks');
      _this.blocks = _this.root.find('li');
      _this.blocks_container = _this.root.find('.service-list--container');
      _this.headers = _this.root.find('.service-list--block-header');
      _this.single_column = _this.root.find('.service-list--single-column');
      _this.left_column = _this.root.find('.service-list--left-column');
      _this.right_column = _this.root.find('.service-list--right-column');
      _this.load();
    }

    ServiceList.prototype.load = function() {
      var _this;
      _this = this;
      return _this.balanceColumns();
    };

    ServiceList.prototype.balanceColumns = function() {
      var _this, assignLoopList, isTypeHeader, loop_list, offset, thresholdBreached, with_multiple_headers;
      _this = this;
      offset = _this.root.data('service-list--show-descriptions') === true ? 75 : 0;
      with_multiple_headers = _this.block_list.length > 1 ? true : false;
      isTypeHeader = function(item) {
        return item.hasClass('service-list--block-header');
      };
      thresholdBreached = function() {
        var left_column_height, right_column_height, single_column_height;
        single_column_height = _this.single_column.outerHeight();
        left_column_height = _this.left_column.outerHeight();
        right_column_height = _this.right_column.outerHeight();
        return left_column_height >= parseFloat(right_column_height + single_column_height - offset);
      };
      assignLoopList = function() {
        if (with_multiple_headers) {
          _this.root.attr('data-service-list--has-headers', true);
          return _this.block_list;
        } else {
          _this.left_column.append('<ul class="service-list--blocks"></ul>');
          return _this.blocks;
        }
      };
      loop_list = assignLoopList();
      return loop_list.each(function(index) {
        if (thresholdBreached()) {
          _this.single_column.find('.service-list--blocks').appendTo(_this.right_column);
          return;
        } else {
          if (with_multiple_headers) {
            $(this).appendTo(_this.left_column);
          } else {
            if (isTypeHeader($(this))) {
              $(this).find('.service-list--block-header--text').prependTo(_this.blocks_container);
              $(this).remove();
            } else {
              $(this).appendTo(_this.left_column.find('.service-list--blocks'));
            }
          }
        }
        if (index === loop_list.length - 1 && _this.right_column.is(':empty') && _this.headers.length > 1) {
          return _this.left_column.find('.service-list--blocks').last().appendTo(_this.right_column);
        }
      });
    };

    return ServiceList;

  })();

  theme.classes.XMenu = (function(superClass) {
    extend(XMenu, superClass);

    function XMenu(root) {
      var _this;
      this.root = root;
      this.getLongestDropDrown = bind(this.getLongestDropDrown, this);
      this.orientateDropDown = bind(this.orientateDropDown, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.longest_drop_down = _this.getLongestDropDrown();
      _this.bottom_position_for_sub_above = $(window).height() - _this.root.offset().top;
      _this.banner_exists = $('.banner--container').length > 0;
      XMenu.__super__.constructor.apply(this, arguments);
    }

    XMenu.prototype.load = function() {
      var _this;
      _this = this;
      XMenu.__super__.load.apply(this, arguments);
      $(window).on('resize scroll', function() {
        return _this.orientateDropDown();
      });
      return _this.orientateDropDown();
    };

    XMenu.prototype.orientateDropDown = function() {
      var _this, banner_exists;
      _this = this;
      banner_exists = $('.banner--container').length > 0;
      if (banner_exists && $(window).scrollTop() < 50 && _this.longest_drop_down + 150 < $(window).height()) {
        return _this.root.attr('data-x-menu--sub-above', 'true');
      } else {
        return _this.root.attr('data-x-menu--sub-above', 'false');
      }
    };

    XMenu.prototype.getLongestDropDrown = function() {
      var _this, longest, sub_menus;
      _this = this;
      longest = 0;
      sub_menus = _this.root.find('.x-menu--level-2--container');
      sub_menus.each(function() {
        if ($(this).outerHeight() > longest) {
          return longest = $(this).outerHeight();
        }
      });
      return longest;
    };

    return XMenu;

  })(theme.classes.FrameworkXMenu);

  theme.classes.Blog = (function() {
    function Blog(root) {
      var _this;
      this.root = root;
      this.setGreatestHeight = bind(this.setGreatestHeight, this);
      this.blogFilterListener = bind(this.blogFilterListener, this);
      this.sectionListeners = bind(this.sectionListeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.section_id = _this.root.data('section-id');
      _this.article_container = _this.root.find('.blog--articles');
      _this.article_items = _this.root.find('.blog--article');
      _this.load();
    }

    Blog.prototype.load = function() {
      var _this;
      _this = this;
      _this.setGreatestHeight();
      _this.sectionListeners();
      $(window).on('resize.section-' + _this.section_id, _this.setGreatestHeight);
      return _this.blogFilterListener();
    };

    Blog.prototype.sectionListeners = function() {
      var _this;
      _this = this;
      return _this.root.on('theme:section:load', _this.blogFilterListener);
    };

    Blog.prototype.blogFilterListener = function() {
      var _this, filter_select;
      _this = this;
      filter_select = _this.root.find('.blog--filter--select');
      if (filter_select.length) {
        return filter_select.on('change', function() {
          location.href = $(this).val();
        });
      }
    };

    Blog.prototype.setGreatestHeight = function() {
      var _this;
      _this = this;
      return theme.utils.matchImageHeights(_this.article_container, _this.article_items, '.article--image');
    };

    return Blog;

  })();

  theme.classes.IndexBanner = (function() {
    function IndexBanner(root) {
      var _this;
      this.root = root;
      this.parallaxScrollListener = bind(this.parallaxScrollListener, this);
      this.sectionListeners = bind(this.sectionListeners, this);
      this.setSectionCountAttribute = bind(this.setSectionCountAttribute, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.bg = _this.root.find('.banner--background-image');
      _this.fg = _this.root.find('.banner--foreground-object');
      _this.section_id = _this.root.data('section-id');
      _this.enabled = false;
      _this.parallax_options = {
        speed: 0.5,
        range: 350
      };
      _this.load();
    }

    IndexBanner.prototype.load = function() {
      var _this;
      _this = this;
      _this.setSectionCountAttribute();
      _this.sectionListeners();
      _this.root.on('theme:section:load', function() {
        theme.partials.XMenu.orientateDropDown();
        return console.log(1, theme.partials);
      });
      if (_this.root.find('.banner--container').length) {
        $('body').attr('data-banner--enabled', true);
        _this.enabled = true;
        if (!Modernizr.touchevents) {
          _this.parallaxScrollListener(_this.parallax_options.speed, _this.parallax_options.range);
          return $(window).on('scroll.' + _this.section_id, function() {
            return _this.parallaxScrollListener(_this.parallax_options.speed, _this.parallax_options.range);
          });
        }
      } else {
        return $('body').attr('data-banner--enabled', false);
      }
    };

    IndexBanner.prototype.setSectionCountAttribute = function() {
      var _this;
      _this = this;
      if (!$('.layout--main-content [data-section-id]').length) {
        return $('body').attr('data-no-content-sections', 'true');
      }
    };

    IndexBanner.prototype.sectionListeners = function() {
      var _this;
      _this = this;
      return _this.root.on('theme:section:unload', function() {
        return $(window).off('scroll.' + _this.section_id);
      });
    };

    IndexBanner.prototype.parallaxScrollListener = function(speed, range) {
      var _this, banner_offset, calc, fullscreen_container, y_offset;
      _this = this;
      y_offset = $(window).scrollTop();
      fullscreen_container = $('.fullscreen-container');
      banner_offset = fullscreen_container.offset().top + fullscreen_container.outerHeight() / 2;
      calc = 1 - (y_offset - banner_offset + range) / range;
      _this.bg.css('background-position-y', -(y_offset * speed) + 'px');
      _this.fg.css('opacity', calc);
      _this.fg.css({
        'opacity': calc > 1 ? 1 : calc < 0 ? 0 : void 0
      });
    };

    return IndexBanner;

  })();

  theme.classes.IndexFeaturedCollection = (function() {
    function IndexFeaturedCollection(root) {
      var _this;
      this.root = root;
      this.setGreatestHeight = bind(this.setGreatestHeight, this);
      this.sectionListeners = bind(this.sectionListeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.section_id = _this.root.data('section-id');
      _this.items = _this.root.find('.product');
      _this.load();
      _this.sectionListeners();
    }

    IndexFeaturedCollection.prototype.load = function() {
      var _this;
      _this = this;
      _this.setGreatestHeight();
      return $(window).on('resize.section-' + _this.section_id, theme.utils.debounce(100, function() {
        return _this.setGreatestHeight();
      }));
    };

    IndexFeaturedCollection.prototype.sectionListeners = function() {
      var _this;
      _this = this;
      return _this.root.on('theme:section:unload', function() {
        return $(window).off('resize.section-' + _this.section_id);
      });
    };

    IndexFeaturedCollection.prototype.setGreatestHeight = function() {
      var _this;
      _this = this;
      if (theme.utils.mqs.current_window === 'small') {
        return _this.items.find('.product--image').css('height', 'auto');
      } else {
        return theme.utils.matchImageHeights(_this.root, _this.items, '.product--image');
      }
    };

    return IndexFeaturedCollection;

  })();

  theme.classes.IndexGallery = (function() {
    function IndexGallery(container1) {
      var _this;
      this.container = container1;
      this.loadInstagramFeed = bind(this.loadInstagramFeed, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.instagram_username = _this.container.data('gallery--instagram-username');
      _this.instagram_access_token = _this.container.data('gallery--instagram-access-token');
      _this.items = _this.container.find('.gallery--items');
      _this.mask_image = _this.container.data('gallery--mask-image');
      _this.load();
    }

    IndexGallery.prototype.load = function() {
      var _this;
      _this = this;
      return _this.loadInstagramFeed();
    };

    IndexGallery.prototype.loadInstagramFeed = function() {
      var _this, items_to_load;
      _this = this;
      items_to_load = 10;
      if (_this.instagram_access_token.length < 1) {
        return false;
      }
      return $.ajax({
        dataType: "jsonp",
        url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + _this.instagram_access_token + '&count=' + items_to_load,
        success: function(response) {
          var data, i, img_src, j, ref, results1;
          if (response.meta.code === 200) {
            data = response.data;
            results1 = [];
            for (i = j = 0, ref = items_to_load - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
              if (data[i]) {
                img_src = data[i].images.low_resolution.url;
                img_src = img_src.replace("http:", "https:");
                results1.push(_this.items.append('<a class="gallery--item" target="_blank" href="' + data[i].link + '"> <div class="gallery--item-container"> <img class="gallery--mask-image" src="' + _this.mask_image + '" /> <div class="gallery--image" style="background-image: url(\'' + img_src + '\');" > </div> </div> </a>'));
              } else {
                results1.push(void 0);
              }
            }
            return results1;
          } else {
            return _this.items.append('<h4 class="error">' + response.meta.error_message + '</h4>');
          }
        },
        error: function(jqXHR, textStatus) {
          console.log(jqXHR);
          return console.log(textStatus);
        }
      });
    };

    return IndexGallery;

  })();

  theme.classes.ProductPage = (function() {
    function ProductPage(container1) {
      var _this;
      this.container = container1;
      this.retractDetails = bind(this.retractDetails, this);
      this.setInfoBoxHeights = bind(this.setInfoBoxHeights, this);
      this.expandDetails = bind(this.expandDetails, this);
      this.moreDetailsListener = bind(this.moreDetailsListener, this);
      this.addProductComplete = bind(this.addProductComplete, this);
      this.renderCart = bind(this.renderCart, this);
      this.addToCartListener = bind(this.addToCartListener, this);
      this.updateVariantImage = bind(this.updateVariantImage, this);
      this.thumbListener = bind(this.thumbListener, this);
      this.sectionListeners = bind(this.sectionListeners, this);
      this.variantSelected = bind(this.variantSelected, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.add_button = _this.container.find('.product-page--add-to-cart');
      _this.cart_form = _this.container.find('.product-page--cart-form > form');
      _this.close_description = _this.container.find('.product-page--close-description');
      _this.compare_price = _this.container.find('.product-page--compare-price');
      _this.description = _this.container.find('.product-page--description');
      _this.image_slider = _this.container.find('.product-page--slider');
      _this.info_box = _this.container.find('.product-page--info-box--container');
      _this.less_details = _this.container.find('.product-page--less-details');
      _this.main_images = _this.container.find('.product-page--image');
      _this.more_details = _this.container.find('.product-page--more-details');
      _this.price = _this.container.find('.product-page--price');
      _this.price_wrapper = _this.container.find('.product-page--price-wrapper');
      _this.smart_payment_buttons = _this.container.find('.product-page--smart-payment-buttons');
      _this.thumbs = _this.container.find('.product-page--thumb');
      _this.unavailable_variant = _this.container.find('.product-page--unavailable-variant');
      _this.variant_sold_out = _this.container.find('.product-page--sold-out--variant');
      _this.initial_height = 0;
      _this.initial_width = 0;
      _this.expanded_height = 0;
      _this.expanded_width = 700;
      _this.load();
    }

    ProductPage.prototype.load = function() {
      var _this;
      _this = this;
      _this.moreDetailsListener();
      _this.thumbListener();
      _this.addToCartListener();
      return _this.sectionListeners();
    };

    ProductPage.prototype.variantSelected = function(variant, selector, options) {
      var _this, product_sold_out;
      _this = this;
      product_sold_out = false;
      if (_this.container.find('.product-page--sold-out--product').length) {
        product_sold_out = true;
      }
      _this.variant_sold_out.hide();
      _this.unavailable_variant.hide();
      _this.add_button.hide();
      _this.price_wrapper.hide();
      if (!variant) {
        _this.unavailable_variant.show();
        _this.smart_payment_buttons.hide();
        return false;
      } else if (variant && variant.available) {
        _this.price_wrapper.show();
        _this.add_button.show();
        _this.smart_payment_buttons.show();
      } else if (product_sold_out) {
        _this.variant_sold_out.hide();
        _this.add_button.hide();
        _this.smart_payment_buttons.hide();
      } else {
        _this.variant_sold_out.show();
        _this.smart_payment_buttons.hide();
      }
      _this.price.html(Shopify.formatMoney(variant.price, theme.money_format));
      if (variant.compare_at_price > variant.price) {
        _this.compare_price.html(Shopify.formatMoney(variant.compare_at_price, theme.money_format));
        _this.compare_price.show();
      } else {
        _this.compare_price.hide();
      }
      if (variant.featured_image) {
        return _this.updateVariantImage(variant.featured_image.id);
      }
    };

    ProductPage.prototype.sectionListeners = function() {
      var _this;
      _this = this;
      return _this.container.on('theme:section:load', function() {
        return new Shopify.OptionSelectors('product-page--select', {
          product: theme.product_json,
          onVariantSelected: _this.variantSelected,
          enableHistoryState: true
        });
      });
    };

    ProductPage.prototype.thumbListener = function() {
      var _this;
      _this = this;
      return _this.thumbs.on('keypress click', function(e) {
        var variant_id;
        if (theme.utils.a11yClick(e) === true) {
          variant_id = $(this).data('image-id');
          console.log(variant_id);
          return _this.updateVariantImage(variant_id);
        }
      });
    };

    ProductPage.prototype.updateVariantImage = function(variant_id) {
      var _this, image_slide, variant_image;
      _this = this;
      _this.main_images.attr('data-active', 'false');
      variant_image = _this.main_images.filter('[data-image-id="' + variant_id + '"]');
      variant_image.attr('data-active', 'true');
      image_slide = _this.image_slider.find('[data-image-id="' + variant_id + '"]').closest('.owl-item');
      return _this.image_slider.find('.owl-carousel').trigger('owl.jumpTo', image_slide.index());
    };

    ProductPage.prototype.addToCartListener = function() {
      var _this;
      _this = this;
      if (_this.cart_form.length > 0) {
        return _this.cart_form.submit(function() {
          _this.cart_form.find('p.error').remove();
          _this.add_button.attr('data-loading', 'true');
          theme.partials.Cart.addItem($(this), function(pass, error) {
            if (pass) {
              return _this.renderCart();
            } else {
              _this.cart_form.append('<div class="product-page--error error">' + error + '</div>');
              return _this.add_button.attr('data-loading', 'false');
            }
          });
          return false;
        });
      }
    };

    ProductPage.prototype.renderCart = function() {
      var _this;
      _this = this;
      return theme.partials.Cart.renderCart(function() {
        return _this.addProductComplete();
      });
    };

    ProductPage.prototype.addProductComplete = function() {
      var _this;
      _this = this;
      _this.add_button.attr('data-loading', 'false');
      return $('.modal.cart-link .modal--link').trigger('click');
    };

    ProductPage.prototype.moreDetailsListener = function() {
      var _this;
      _this = this;
      _this.more_details.on('keypress click', function(e) {
        if (theme.utils.a11yClick(e) === true) {
          _this.expandDetails();
        }
        return false;
      });
      _this.less_details.on('keypress click', function(e) {
        if (theme.utils.a11yClick(e) === true) {
          _this.retractDetails();
        }
        return false;
      });
      return _this.close_description.on('click', function() {
        return _this.retractDetails();
      });
    };

    ProductPage.prototype.expandDetails = function() {
      var _this;
      _this = this;
      _this.setInfoBoxHeights();
      _this.info_box.height(_this.info_box.height());
      _this.info_box.width(_this.info_box.width());
      _this.info_box.find('> *').hide();
      _this.info_box.find('.product-page--title').show();
      _this.info_box.find('.product-page--close-description').show();
      _this.info_box.find('.product-page--more-details').hide();
      _this.info_box.find('.product-page--less-details').show();
      _this.info_box.find('.product-page--description-toggle').show().css({
        position: 'absolute',
        bottom: '15px'
      });
      _this.info_box.velocity({
        width: _this.expanded_width,
        height: _this.expanded_height
      }, {
        duration: 400
      });
      return _this.info_box.find('.product-page--description').css({
        display: 'block',
        opacity: 0
      }).velocity({
        opacity: 1
      }, {
        delay: 300
      });
    };

    ProductPage.prototype.setInfoBoxHeights = function() {
      var _this, info_box_clone, ratio;
      _this = this;
      if (_this.expanded_height === 0) {
        _this.initial_height = _this.info_box.outerHeight();
        _this.initial_width = _this.info_box.outerWidth();
        info_box_clone = _this.info_box.clone().css({
          visibility: 'hidden',
          width: _this.expanded_width,
          position: 'fixed'
        }).attr('data-show-description', 'true').appendTo(_this.container);
        _this.expanded_height = info_box_clone.outerHeight();
        ratio = _this.expanded_height / _this.expanded_width;
        if (ratio < .65) {
          _this.expanded_width = _this.expanded_height * 1.5;
          info_box_clone.css({
            width: _this.expanded_width
          });
          _this.expanded_height = info_box_clone.outerHeight();
        }
        return info_box_clone.remove();
      }
    };

    ProductPage.prototype.retractDetails = function() {
      var _this;
      _this = this;
      _this.info_box.find('.product-page--more-details').show();
      _this.info_box.find('.product-page--less-details').hide();
      _this.info_box.find('.product-page--close-description').hide();
      _this.info_box.find('.product-page--description').hide();
      _this.info_box.find('.product-page--description-toggle').css({
        bottom: 'auto',
        position: 'relative'
      });
      _this.info_box.velocity({
        width: _this.initial_width,
        height: _this.initial_height
      }, {
        duration: 400,
        complete: function() {
          return _this.info_box.removeAttr('style');
        }
      });
      return _this.info_box.find('.product-page--excerpt, .product-page--cart-form, .product-page--description-toggle, .product-page--social-media').css({
        display: 'block',
        opacity: 0
      }).velocity({
        opacity: 1
      }, {
        delay: 300,
        complete: function() {
          return _this.info_box.find('> *').removeAttr('style');
        }
      });
    };

    return ProductPage;

  })();

  jQuery(function($) {
    var $filter_select, MAIN, PAGE, copyLink, digitalDownloads, fw_media_queries, isFirefox, stickyFooter, templateArticle;
    $('.responsive-video--root').fitVids();
    PAGE = $('body');
    MAIN = $('.layout--main-content');
    theme.money_format = Currency.moneyFormats[theme.shop_currency].money_format;
    $('.fw--cart-modal--trigger-render span.total-price').addClass('money');
    $('.template--product .partial--product.view--full .actual-price').addClass('money');
    theme.sections = new theme.classes.Sections();
    fw_media_queries = new theme.classes.FrameworkMediaQueries();
    theme.utils = new theme.classes.FrameworkUtils();
    theme.utils.mqs = fw_media_queries;
    theme.utils.a11yClick = function(event) {
      var code;
      if (event.type === 'click') {
        return true;
      } else if (event.type === 'keypress') {
        code = event.charCode || event.keyCode;
        if (code === 32) {
          event.preventDefault();
        }
        if (code === 32 || code === 13) {
          return true;
        }
      }
      return false;
    };
    theme.utils.addSymbol = function(icon_name) {
      return '<svg class="fw--icon fw--icon--' + icon_name + '"> <use xlink:href="#fw--icon--' + icon_name + '" /> </svg>';
    };
    theme.utils.loadJsClasses = function() {
      return $('[data-js-class]').each(function() {
        var js_class, partial_class;
        js_class = $(this).attr('data-js-class');
        if ($(this).attr('data-js-loaded') !== 'true') {
          partial_class = theme.classes[js_class];
          if (typeof partial_class !== "undefined") {
            theme.partials[js_class] = new partial_class($(this));
            return $(this).attr('data-js-loaded', 'true');
          }
        }
      });
    };
    $('a').each(function() {
      var _this;
      _this = $(this);
      if (this.host === location.host) {
        return _this.attr('target', '_self');
      } else {
        return _this.attr('target', '_blank').attr('rel', 'noopener');
      }
    });
    isFirefox = typeof InstallTrigger !== "undefined";
    if (isFirefox) {
      $('img').addClass('image-scale-hack');
    }
    $('.fw--align--center-y').each(function() {
      return new FrameworkAlign($(this), 'center-y');
    });
    $('.partial--popup #mc-embedded-subscribe-form').on('submit', function(event) {
      $('.modal--close').click();
      return true;
    });
    $('.partial--popup #contact_form').on('submit', function(event) {
      var form, modal, wrapper;
      form = this;
      modal = $(this).closest('.partial--popup');
      modal.find('.error, .success').remove();
      wrapper = modal.find('.wrapper');
      event.preventDefault();
      if (modal.find('[type="email"]').val().length === 0) {
        return false;
      } else {
        wrapper.find('*').remove().end().prepend('<p class="success">' + theme.translations.mailing_list_success_message + '</p>').show();
        setTimeout(function() {
          return form.submit();
        }, 500);
      }
      return false;
    });
    if (PAGE.hasClass('template--collection')) {
      $filter_select = $('.collection--filter--select');
      if ($filter_select.length) {
        $filter_select.on('change', function() {
          location.href = $(this).val();
        });
      }
    }
    if (PAGE.hasClass('template--password')) {
      $(document).on('click', '.login-link', function() {
        $(this).css('visibility', 'hidden');
        $('.wrapper').hide();
        $('.login-form').css('visibility', 'visible');
        $('.login-form input[type="password"]').focus();
        return false;
      }).on('click', '.login-form .cancel', function() {
        $('.login-link').css('visibility', 'visible');
        $('.wrapper').fadeIn();
        $('.login-form').css('visibility', 'hidden');
        return false;
      });
      if ($('.login-form .errors').size()) {
        $('.login-link').click();
      }
    }
    if (PAGE.hasClass('template--article')) {
      templateArticle = (function() {
        var first_article_img, pinterest_button;
        pinterest_button = $('.partial--social-media .pinterest--link');
        first_article_img = $('article img').first().attr('src');
        return pinterest_button.attr('href', pinterest_button.attr('href') + '&media=' + first_article_img);
      })();
      copyLink = (function() {
        var copy_link, copy_link_textarea;
        copy_link = $('.partial--social-media .copy-link a');
        copy_link_textarea = copy_link.parent().find('textarea');
        copy_link.on('click', function() {
          copy_link_textarea.toggle();
          copy_link_textarea.focus();
          return false;
        });
        return copy_link.parent().find('textarea').on('focus', function() {
          var $this;
          $this = $(this);
          $this.select();
          return $this.on('mouseup', function() {
            $this.unbind("mouseup");
            return false;
          });
        });
      })();
    }
    digitalDownloads = function() {
      if ($('.sdd-download').length) {
        return $('.sdd-download-button').removeClass('sdd-download-button').css('visibility', 'visible');
      }
    };
    digitalDownloads();
    theme.utils.loadJsClasses();
    $('.fw--align--fill-y--dynamic').each(function() {
      return new FrameworkAlign($(this), 'fill-y--dynamic');
    });
    $('.fw--align--max-img-height').each(function() {
      return new FrameworkAlign($(this), 'max-img-height');
    });
    $('html').addClass('after-js-loaded');
    if (!PAGE.hasClass('template--index')) {
      stickyFooter = function() {
        var height;
        if ($(window).outerHeight() > $('.off-canvas--main-content').outerHeight()) {
          height = $(window).outerHeight() - $('.header').outerHeight() - $('.footer').outerHeight() - parseInt($('.off-canvas--main-content').css('borderWidth')) * 2;
          return $('.layout--main-content').css({
            'min-height': height
          });
        }
      };
      stickyFooter();
      $(window).resize(function() {
        return stickyFooter();
      });
    }
    return setTimeout(function() {
      return $(".owl-carousel").each(function() {
        return $(this).data('owlCarousel').calculateAll();
      });
    }, 0);
  });

}).call(this);
