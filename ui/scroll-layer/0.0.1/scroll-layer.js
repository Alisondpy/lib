define(function(o,t,e){"use strict";function i(o,t){function e(){i(),f(!0),c()}function i(){switch(w=d.height(),g=d.width(),v=!0,t.direction){case"y":B=z+t.obstructionSize,x=(g-b)/2,(T+z+t.obstructionSize>w||b>g)&&(v=!1,u());break;case"x":B=(w-T)/2,x=g/2+z,z<0&&(x-=b),(T>w||g/2+t.offset+b+t.obstructionSize>=g)&&(v=!1,u())}}function r(o,t,e,i){var n;return function(){var r=i||this,c=arguments,f=function(){n=null,e||o.apply(r,c)},u=e&&!n;clearTimeout(n),n=setTimeout(f,t),u&&o.apply(r,c)}}function c(){d.resize(function(o){i(),f()}),d.scroll(r(function(){f()})),t.goTop&&t.goTop.ele&&h.on("click",t.goTop.ele,function(){d.scrollTop(0),t.goTop.callback&&t.goTop.callback(h)})}function f(o){S=d.scrollTop(),m=p.height(),a=S+w-(m-t.fromBottom)-B,k=a>0?S+w-(m-t.fromBottom):B,o?h.css({left:x,bottom:k}):h.stop().animate({left:x,bottom:k}),S>=t.fromTop&&v?l():u()}function u(){h.is(":hidden")||(t.onBeforeHide?t.onBeforeHide(h,function(){h.hide()}):h.hide())}function l(){h.is(":hidden")&&(t.onAfterShow?t.onAfterShow(h,function(){h.show()}):h.show())}var s={direction:"x",offset:0,fromBottom:0,fromTop:0,obstructionSize:0,onAfterShow:null,onBeforeHide:null,goTop:{ele:null,callback:null}};if(void 0===o)throw new Error("param ele is required");var h=n(o);if(0===h.length)throw new Error("param ele is not find");var a,t=(t.obstructionSize,n.extend(!0,s,t)),d=n(window),p=n(document),m=p.height(),w=d.height(),g=d.width(),T=h.outerHeight(),b=h.outerWidth(),S=0,v=!0,z=t.offset,B=0,k=0,x=0;return h.css({position:"fixed"}),e(),this}var n=o("jquery");e.exports=i});