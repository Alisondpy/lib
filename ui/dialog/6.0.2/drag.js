define(function(t){var e=t("jquery"),n=e(window),o=e(document),s="createTouch"in document,i=document.documentElement,r=!("minWidth"in i.style),a=!r&&"onlosecapture"in i,h="setCapture"in i,c={start:s?"touchstart":"mousedown",over:s?"touchmove":"mousemove",end:s?"touchend":"mouseup"},u=s?function(t){return t.touches||(t=t.originalEvent.touches.item(0)),t}:function(t){return t},f=function(){this.start=e.proxy(this.start,this),this.over=e.proxy(this.over,this),this.end=e.proxy(this.end,this),this.onstart=this.onover=this.onend=e.noop};return f.types=c,f.prototype={start:function(t){return t=this.startFix(t),o.on(c.over,this.over).on(c.end,this.end),this.onstart(t),!1},over:function(t){return t=this.overFix(t),this.onover(t),!1},end:function(t){return t=this.endFix(t),o.off(c.over,this.over).off(c.end,this.end),this.onend(t),!1},startFix:function(t){return t=u(t),this.target=e(t.target),this.selectstart=function(){return!1},o.on("selectstart",this.selectstart).on("dblclick",this.end),a?this.target.on("losecapture",this.end):n.on("blur",this.end),h&&this.target[0].setCapture(),t},overFix:function(t){return t=u(t)},endFix:function(t){return t=u(t),o.off("selectstart",this.selectstart).off("dblclick",this.end),a?this.target.off("losecapture",this.end):n.off("blur",this.end),h&&this.target[0].releaseCapture(),t}},f.create=function(t,s){var i,r,a,h,c=e(t),u=new f,l=f.types.start,d=function(){},p=t.className.replace(/^\s|\s.*/g,"")+"-drag-start",v={onstart:d,onover:d,onend:d,off:function(){c.off(l,u.start)}};return u.onstart=function(e){var s="fixed"===c.css("position"),u=o.scrollLeft(),f=o.scrollTop(),l=c.width(),d=c.height();i=0,r=0,a=s?n.width()-l+i:o.width()-l,h=s?n.height()-d+r:o.height()-d;var m=c.offset(),x=this.startLeft=s?m.left-u:m.left,g=this.startTop=s?m.top-f:m.top;this.clientX=e.clientX,this.clientY=e.clientY,c.addClass(p),v.onstart.call(t,e,x,g)},u.onover=function(e){var n=e.clientX-this.clientX+this.startLeft,o=e.clientY-this.clientY+this.startTop,s=c[0].style;n=Math.max(i,Math.min(a,n)),o=Math.max(r,Math.min(h,o)),s.left=n+"px",s.top=o+"px",v.onover.call(t,e,n,o)},u.onend=function(e){var n=c.position(),o=n.left,s=n.top;c.removeClass(p),v.onend.call(t,e,o,s)},u.off=function(){c.off(l,u.start)},s?u.start(s):c.on(l,u.start),v},f});