/* compromise-html 0.0.2 MIT */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('htm'), require('vhtml')) :
  typeof define === 'function' && define.amd ? define(['htm', 'vhtml'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.compromiseHtml = factory(global.htm, global.vhtml));
}(this, (function (htm, vhtml) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var htm__default = /*#__PURE__*/_interopDefaultLegacy(htm);
  var vhtml__default = /*#__PURE__*/_interopDefaultLegacy(vhtml);

  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  function _templateObject2() {
    var data = _taggedTemplateLiteral(["<pre>", "</pre>"]);

    _templateObject2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject() {
    var data = _taggedTemplateLiteral(["<span class=", ">", "</span>"]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  var toHtml = function toHtml(doc, segments, options) {
    var h = htm__default['default'].bind(vhtml__default['default']);

    if (options.bind) {
      h = htm__default['default'].bind(options.bind);
    }

    var html = [];
    var arr = doc.segment(segments);
    arr.forEach(function (o) {
      var str = h(_templateObject(), o.segment, o.text);
      html.push(str);
    });
    return h(_templateObject2(), html);
  };

  var html = toHtml;

  var addMethods = function addMethods(Doc) {
    /** generate sanitized html from the document */
    Doc.prototype.html = function () {
      var segments = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return html(this, segments, options);
    };
  };

  var src = addMethods;

  return src;

})));
//# sourceMappingURL=compromise-html.js.map
