define(function(require, exports, module) {
    'use strict';
    var $ = require('jquery');
    //自定义事件
    var EventEmitter = require('lib/core/1.0.0/event/emitter');
    var Util = require('lib/core/1.0.0/utils/util');
    var IScroll = require('lib/plugins/iscroll/1.0.0/iscroll-probe');
    var build = require('lib/core/1.0.0/dom/build');

    function Tab(selector, options) {
        var _this = this;
        var defaults = {};

        _this.el = $(selector);
        _this.options = $.extend(true, {}, defaults, options);

        var builder = build.build(selector, false);
        _this.hd = builder.get('hd');
        _this.bd = builder.get('bd');
        _this.hdItems = builder.get('hdItem');
        _this.containers = builder.get('container');

        _this._initEvent();
    }

    //继承自定义事件
    Util.inherits(Tab, EventEmitter);

    Tab.prototype._initEvent = function() {
        var _this = this;
        _this.hd.on('click', 'li', function() {

        });
    }

    Tab.prototype.show = function(index) {

    }


    module.exports = Tab;
});
