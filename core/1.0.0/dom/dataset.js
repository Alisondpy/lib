define(function(e,t,r){"use strict";function n(e){return e.replace(u,"ms-").replace(s,f)}function a(e){try{return"true"===e||"false"!==e&&("null"===e?null:+e+""===e?+e:c.test(e)?i.parseJSON(e):e)}catch(e){}}function o(e,t,r){var n;return void 0===r&&1===e.nodeType&&(n="data-"+t.replace(d,"-$&").toLowerCase(),r=e.getAttribute(n),"string"!=typeof r&&(r=void 0)),r}var i=(window.document,e("jquery")),u=/^-ms-/,s=/-([\da-z])/gi,f=function(e,t){return t.toUpperCase()},c=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,d=/[A-Z]/g,l=function(e,t,r){if(!e||1!==e.nodeType)throw new TypeError("dataset(): Not a valid DOM element.");var i,u,s,f;if(1===arguments.length){if(s=e.dataset){f={};for(u in s)s.hasOwnProperty(u)&&(f[u]=a(s[u]));return f}for(s=e.attributes,i=s.length,f={};i--;)s[i]&&(u=s[i].name,0===u.indexOf("data-")&&(u=n(u.slice(5)),f[u]=a(o(e,u))));return f}};r.exports=l});