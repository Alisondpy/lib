define(function(t,i,n){"use strict";var e=t("jquery"),o=t("./item"),s=t("lib/core/1.0.0/utils/util"),c=function(t){this.options=t,this.$content=e('<div  node-type="tab-item" class="rich-tab-box ui-animated" data-type="'+this.options.type+'"></div>'),this._addEvents()};s.inherits(c,o),c.prototype._addEvents=function(){var t=this;this.$content.on("click",function(){t.emit("tabAction",t.$content,t.options.type)})},n.exports=c});