define(function(t,e,n){"use strict";function r(t,e){var n=this,r={event:"click"};n.el=i(t),n.options=i.extend(!0,{},r,e);var a=s.build(t,!1);n.hd=a.get("hd"),n.bd=a.get("bd"),n.hdItems=a.get("hdItem"),n.containers=a.get("container"),n._initEvent(),n._init()}var i=t("jquery"),a=t("lib/core/1.0.0/event/emitter"),d=t("lib/core/1.0.0/utils/util"),s=t("lib/core/1.0.0/dom/build");d.inherits(r,a),r.prototype._initEvent=function(){var t=this;t.hdItems.on(t.options.event,function(e){e.preventDefault();var n=i(this);n.hasClass("current")||t.setCurrent(n.attr("data-target"))})},r.prototype._init=function(){},r.prototype.setCurrent=function(t){var e=this;if(void 0===t){var n=e.hd.find(".current");0==n.length&&(n=this.hdItems.eq(0)),t=n.attr("data-target")}e.hdItems.removeClass("current");var r=e.hd.find("[data-target="+t+"]");r.addClass("current"),e.containers.removeClass("current");var i=e.bd.find("[data-id="+t+"]");i.addClass("current"),e.emit("change",{hd:r,body:i})},n.exports=r});