define(function(t){"use strict";var e=t("jquery"),n=t("./popup"),i=t("../../../core/1.0.0/utils/util"),o=t("./config"),a=o.cssUri;if(a){var c=t[t.toUrl?"toUrl":"resolve"];if(c){a=c(a),a='<link rel="stylesheet" href="'+a+'" />';var r=e("link, base").last();r.length?r.before(a):e("head").append(a)}}var s=window.document,u=0,d=+new Date,l=!("minWidth"in s.documentElement.style),h="createTouch"in s&&!("onmousemove"in s)||/(iPhone|iPad|iPod)/i.test(navigator.userAgent),f=!l&&!h,p=function(t,n,i){var o=t=t||{};"string"!=typeof t&&1!==t.nodeType||(t={content:t,fixed:!h}),t=e.extend(!0,{},p.defaults,t),t.original=o;var a=t.id=t.id||d+u,c=p.get(a);return c?c.focus():(f||(t.fixed=!1),t.quickClose&&(t.modal=!0,t.backdropOpacity=0),e.isArray(t.button)||(t.button=[]),void 0!==i&&(t.cancel=i),t.cancel&&t.button.push({id:"cancel",value:t.cancelValue,callback:t.cancel,display:t.cancelDisplay}),void 0!==n&&(t.ok=n),t.ok&&t.button.push({id:"ok",value:t.okValue,callback:t.ok,autofocus:!0}),p.list[a]=new p.create(t))};i.inherits(p,n),p.create=function(t,i){var o=this;if(void 0===i)return o.destroyed=!1,o.once("beforeShow",function(){p.create.call(o,t,1)}),o;n.call(o,t);var a=e(o.node).html(t.innerHTML),c=e(o.backdrop);o.options=t,o._popup=a,o._nodeList={},o.$("header").hide(),o.$("footer").hide(),o.emit("initOption"),e.each(t,function(t,e){"function"==typeof o[t]?o[t](e):o[t]=e}),t.zIndex&&(n.zIndex=t.zIndex),a.attr({"aria-labelledby":o.$("title").attr("id","title:"+o.id).attr("id"),"aria-describedby":o.$("content").attr("id","content:"+o.id).attr("id")}),o.$("close").css("display",o.cancel===!1?"none":"").attr("title",o.cancelValue).on("click",function(t){o._action("cancel"),t.preventDefault()}),o.$("dialog").addClass(o.skin),o.$("body").css("padding",o.padding),t.quickClose&&c.on("onmousedown"in s?"mousedown":"click",function(){return o._action("cancel"),!1}),o.on("show",function(){c.css({opacity:0,background:t.backdropBackground}).animate({opacity:t.backdropOpacity},150)});var r=function(t){var e=t.target,i=e.nodeName,a=/^input|textarea$/i,c=n.current===o,r=t.keyCode;!c||a.test(i)&&"button"!==e.type||27===r&&o._action("cancel")};e(s).on("keydown",r),o.on("remove",function(){e(s).off("keydown",r),delete p.list[o.id]}),u++,p.oncreate(o)};var b=p.prototype;return p.create.prototype=b,e.extend(b,{content:function(t){var n=this.$("content");return t&&t.nodeType?(e.contains(s,t)&&this.on("beforeremove",function(){e("body").append(t.hide())}),t=e(t),n.empty().append(t.show())):n.html(t),this.reset()},title:function(t){return this.$("title").text(t),this.$("header")[t?"show":"hide"](),this},width:function(t){return this.$("content").css("width",t),this.reset()},height:function(t){return this.$("content").css("height",t),this.reset()},button:function(t){t=t||[];var n=this,i="",o=0;return this._actions={},"string"==typeof t?(i=t,o++):e.each(t,function(t,a){var c=a.id=a.id||a.value,r="";n._actions[c]=a.callback,a.display===!1?r=' style="display:none"':o++,i+='<button type="button" i-id="'+c+'"'+r+(a.disabled?" disabled":"")+(a.autofocus?' autofocus class="ui-dialog-autofocus"':"")+">"+a.value+"</button>",n.$("button").on("click",'[i-id="'+c+'"]',function(t){var i=e(this);i.attr("disabled")||n._action(c),t.preventDefault()})}),this.$("button").html(i),this.$("footer")[o?"show":"hide"](),this},statusbar:function(t){return this.$("statusbar").html(t)[t?"show":"hide"](),this},$:function(t){var e=this._nodeList;return e[t]||(e[t]=this._popup.find('[i="'+t+'"]'))},_action:function(t){var e=this._actions[t];return"function"!=typeof e||e.call(this)!==!1?this.close().remove():this}}),p.oncreate=e.noop,p.getCurrent=function(){return n.current},p.get=function(t){return void 0===t?p.list:p.list[t]},p.list={},p.defaults=o,p});