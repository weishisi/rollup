var t="object"==typeof global&&global&&global.Object===Object&&global,r="object"==typeof self&&self&&self.Object===Object&&self,n=t||r||Function("return this")(),e=n.Symbol,o=Object.prototype,i=o.hasOwnProperty,a=o.toString,u=e?e.toStringTag:void 0;var c=Object.prototype.toString;var l=e?e.toStringTag:void 0;function s(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":l&&l in Object(t)?function(t){var r=i.call(t,u),n=t[u];try{t[u]=void 0;var e=!0}catch(t){}var o=a.call(t);return e&&(r?t[u]=n:delete t[u]),o}(t):function(t){return c.call(t)}(t)}function f(t){return"symbol"==typeof t||function(t){return null!=t&&"object"==typeof t}(t)&&"[object Symbol]"==s(t)}var p=Array.isArray,h=e?e.prototype:void 0,_=h?h.toString:void 0;function v(t){if("string"==typeof t)return t;if(p(t))return function(t,r){for(var n=-1,e=null==t?0:t.length,o=Array(e);++n<e;)o[n]=r(t[n],n,t);return o}(t,v)+"";if(f(t))return _?_.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r}function y(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)}var d,g=n["__core-js_shared__"],b=(d=/[^.]+$/.exec(g&&g.keys&&g.keys.IE_PROTO||""))?"Symbol(src)_1."+d:"";var j=Function.prototype.toString;var O=/^\[object .+?Constructor\]$/,m=RegExp("^"+Function.prototype.toString.call(Object.prototype.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function w(t){if(!y(t)||(r=t,b&&b in r))return!1;var r,n=function(t){if(!y(t))return!1;var r=s(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r}(t)?m:O;return n.test(function(t){if(null!=t){try{return j.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function z(t,r){var n=function(t,r){return null==t?void 0:t[r]}(t,r);return w(n)?n:void 0}var S=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,$=/^\w*$/;var x=z(Object,"create");var P=Object.prototype.hasOwnProperty;var A=Object.prototype.hasOwnProperty;function F(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function C(t,r){for(var n,e,o=t.length;o--;)if((n=t[o][0])===(e=r)||n!=n&&e!=e)return o;return-1}F.prototype.clear=function(){this.__data__=x?x(null):{},this.size=0},F.prototype.delete=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r},F.prototype.get=function(t){var r=this.__data__;if(x){var n=r[t];return"__lodash_hash_undefined__"===n?void 0:n}return P.call(r,t)?r[t]:void 0},F.prototype.has=function(t){var r=this.__data__;return x?void 0!==r[t]:A.call(r,t)},F.prototype.set=function(t,r){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=x&&void 0===r?"__lodash_hash_undefined__":r,this};var E=Array.prototype.splice;function T(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}T.prototype.clear=function(){this.__data__=[],this.size=0},T.prototype.delete=function(t){var r=this.__data__,n=C(r,t);return n>=0&&(n==r.length-1?r.pop():E.call(r,n,1),--this.size,!0)},T.prototype.get=function(t){var r=this.__data__,n=C(r,t);return 0>n?void 0:r[n][1]},T.prototype.has=function(t){return C(this.__data__,t)>-1},T.prototype.set=function(t,r){var n=this.__data__,e=C(n,t);return 0>e?(++this.size,n.push([t,r])):n[e][1]=r,this};var I=z(n,"Map");function k(t,r){var n,e,o=t.__data__;return("string"==(e=typeof(n=r))||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==n:null===n)?o["string"==typeof r?"string":"hash"]:o.map}function R(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}R.prototype.clear=function(){this.size=0,this.__data__={hash:new F,map:new(I||T),string:new F}},R.prototype.delete=function(t){var r=k(this,t).delete(t);return this.size-=r?1:0,r},R.prototype.get=function(t){return k(this,t).get(t)},R.prototype.has=function(t){return k(this,t).has(t)},R.prototype.set=function(t,r){var n=k(this,t),e=n.size;return n.set(t,r),this.size+=n.size==e?0:1,this};function G(t,r){if("function"!=typeof t||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var n=function(){var e=arguments,o=r?r.apply(this,e):e[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,e);return n.cache=i.set(o,a)||i,a};return n.cache=new(G.Cache||R),n}G.Cache=R;var M,N,U,q=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,B=/\\(\\)?/g,D=(M=function(t){var r=[];return 46===t.charCodeAt(0)&&r.push(""),t.replace(q,(function(t,n,e,o){r.push(e?o.replace(B,"$1"):n||t)})),r},N=G(M,(function(t){return 500===U.size&&U.clear(),t})),U=N.cache,N),H=D;function J(t,r){return p(t)?t:function(t,r){if(p(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!f(t))||$.test(t)||!S.test(t)||null!=r&&t in Object(r)}(t,r)?[t]:H(function(t){return null==t?"":v(t)}(t))}function K(t){if("string"==typeof t||f(t))return t;var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r}function L(t,r,n){var e=null==t?void 0:function(t,r){for(var n=0,e=(r=J(r,t)).length;null!=t&&e>n;)t=t[K(r[n++])];return n&&n==e?t:void 0}(t,r);return void 0===e?n:e}var Q={name:"xix"};function V(t){console.log("hha"),console.log("1.0.0");var r=L(Q,"name");return console.log("name=>",r),!0}export{V as default};
