define(function(t){var e=t("jquery"),i=t("./popup"),n=t("./dialog-config"),o=n.cssUri;if(o){var a=t[t.toUrl?"toUrl":"resolve"];a&&(o=a(o),o='<link rel="stylesheet" href="'+o+'" />',e("base")[0]?e("base").before(o):e("head").append(o))}var s=0,r=new Date-0,c=!("minWidth"in e("html")[0].style),l="createTouch"in document&&!("onmousemove"in document)||/(iPhone|iPad|iPod)/i.test(navigator.userAgent),u=!c&&!l,d=function(t,i,n){var o=t=t||{};"string"!=typeof t&&1!==t.nodeType||(t={content:t,fixed:!l}),t=e.extend(!0,{},d.defaults,t),t._=o;var a=t.id=t.id||r+s,c=d.get(a);return c?c.focus():(u||(t.fixed=!1),t.quickClose&&(t.modal=!0,o.backdropOpacity||(t.backdropOpacity=0)),e.isArray(t.button)||(t.button=[]),void 0!==n&&(t.cancel=n),t.cancel&&t.button.push({id:"cancel",value:t.cancelValue,callback:t.cancel,display:t.cancelDisplay}),void 0!==i&&(t.ok=i),t.ok&&t.button.push({id:"ok",value:t.okValue,callback:t.ok,autofocus:!0}),d.list[a]=new d.create(t))},h=function(){};h.prototype=i.prototype;var p=d.prototype=new h;return d.create=function(t){var n=this;e.extend(this,new i);var o=e(this.node).html(t.innerHTML);return this.options=t,this._popup=o,e.each(t,function(t,e){"function"==typeof n[t]?n[t](e):n[t]=e}),t.zIndex&&(i.zIndex=t.zIndex),o.attr({"aria-labelledby":this._$("title").attr("id","title:"+this.id).attr("id"),"aria-describedby":this._$("content").attr("id","content:"+this.id).attr("id")}),this._$("close").css("display",this.cancel===!1?"none":"").attr("title",this.cancelValue).on("click",function(t){n._trigger("cancel"),t.preventDefault()}),this._$("dialog").addClass(this.skin),this._$("body").css("padding",this.padding),o.on("click","[data-id]",function(t){t.preventDefault();var i=e(this);if(!i.attr("disabled"))return n._trigger(i.data("id"))}),t.quickClose&&e(this.backdrop).on("onmousedown"in document?"mousedown":"click",function(){return n._trigger("cancel"),!1}),this._esc=function(t){var e=t.target,o=e.nodeName,a=/^input|textarea$/i,s=i.current===n,r=t.keyCode;!s||a.test(o)&&"button"!==e.type||27===r&&n._trigger("cancel")},e(document).on("keydown",this._esc),this.addEventListener("remove",function(){e(document).off("keydown",this._esc),delete d.list[this.id]}),s++,d.oncreate(this),this},d.create.prototype=p,e.extend(p,{content:function(t){var e=this._getTypeHtml(t);return e&&(t=e),this._$("content").empty("")["object"==typeof t?"append":"html"](t),this.reset()},type:function(t){this.options.type=t;var e=this._$("content").find(".ui-dialog-cnt-html");return e&&0==e.length&&(e=this._$("content")),this.content(e.html())},_getTypeHtml:function(t){var e=this.options.type,i="",n="";if(this.options.url&&this.options.url.length>0)return!1;switch(e){case"tips":n="&#xe63b;";break;case"warn":n="&#xe637;";break;case"question":n="&#xe634;";break;case"error":n="&#xe635;";break;case"ok":n="&#xe636;";break;case"loading-text":n='<img src="//static5.bubugao.com/public/img/loading/loading32x32.gif" />'}if(n.length>0){i='<div class="ui-dialog-cnt-icon icon iconfont">'+n+'</div><div class="ui-dialog-cnt-html">'+t+"</div>";var o="ui-dialog-type ui-dialog-tips ui-dialog-warn ui-dialog-question ui-dialog-error ui-dialog-ok ui-dialog-loading ui-dialog-null";return this._$("dialog").removeClass(o),this._$("dialog").addClass("ui-dialog-type ui-dialog-"+e),i}return!1},title:function(t){return this._$("title").text(t),this._$("header")[t?"show":"hide"](),this},width:function(t){return this._$("content").css("width",t),this.reset()},height:function(t){return this._$("content").css("height",t),this.reset()},button:function(t){t=t||[];var i=this,n="",o=0;return this.callbacks={},"string"==typeof t?n=t:e.each(t,function(t,e){e.id=e.id||e.value,i.callbacks[e.id]=e.callback;var a="";e.display===!1?a=' style="display:none"':o++,n+='<button type="button" data-id="'+e.id+'"'+a+(e.disabled?" disabled":"")+(e.autofocus?' autofocus class="ui-dialog-autofocus"':"")+">"+e.value+"</button>"}),this._$("footer")[o?"show":"hide"](),this._$("button").html(n),this},statusbar:function(t){return this._$("statusbar").html(t)[t?"show":"hide"](),this},_$:function(t){return this._popup.find("[i="+t+"]")},_trigger:function(t){var e=this.callbacks[t];return"function"!=typeof e||e.call(this)!==!1?this.close().remove():this}}),d.oncreate=e.noop,d.getCurrent=function(){return i.current},d.get=function(t){return void 0===t?d.list:d.list[t]},d.list={},d.defaults=n,d});