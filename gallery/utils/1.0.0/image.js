define(function(r,e,n){"use strict";function t(r,e,n){var t,i,o=0,u=r.length-1;if(e>=r[u])return u;if(e<=r[o])return o;for(;o<=u;)if(t=(o+u)/2|0,i=r[t],i<e)o=t+1;else{if(!(i>e))return t;u=t-1}o>u&&(i=o,o=u,u=i);var a=(r[u]+r[o])/2,f=(a-e)/(a-r[o]);Math.abs(f);return f>0&&(n||f>.5)?o:u}function i(r,e){var n=t(s,r,e),i=s[n];return d[i]}function o(r,e,n){if(!e)throw"The original dpr not defined.";var t=h.exec(r)||[],o=t[1],u="."+t[2],a=t[3],c=a&&l[a];return void 0===n&&(n=f),c&&e!==n?(a=i(Math.ceil(c/e*n),n>1)||a,o+u+"!"+a):r}function u(r,e){if(!l[e])return r;var n=h.exec(r)||[],t=n[3];return t?t!==e?r.replace("!"+t,"!"+e):r:r+"!"+e}function a(r){var e,n,t;return(e=v.exec(r))&&(t=(n=e[3])&&(t=l[n])?{width:t,height:t}:{width:+e[1],height:+e[2]}),t}var f=window.devicePixelRatio||1,c=function(r,e){for(var n in r)r.hasOwnProperty(n)&&e(r[n],n)},l=(Object.keys||function(r){var e=[];for(var n in r)r.hasOwnProperty(n)&&e.push(n);return e},{s1:70,s2:100,m1:200,m2:300,l1:400,l2:600,l5:750,l3:800,l4:1e3,dk1:500,sp1:640}),d={},s=[];c(l,function(r,e){s.push(+r),d[r]=e}),s.sort(function(r,e){return r>e});var h=/(.*?)\.(\w+)!(\w+?)$/,v=/_(\d+)x(\d+)\.[\w]+(?:!(\w+?)|\?.*)*$/;e.getImageType=i,e.rebuildImageURL=o,e.getImageURL=u,e.parseSize=a,e.load=function(r,e,n,t){var i;if(!r)return n&&n();"string"==typeof r?i=new Image:(i=r,r=i.getAttibute("data-url")||i.getAttibute("data-src"));var o=function(){i.onload=i.onerror=i=null,o=null};n&&(i.onerror=function(){n(i),o()}),e&&(i.onload=function(){e(i),o()}),i.src=r}});