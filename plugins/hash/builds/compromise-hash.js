/* compromise-hash 0.0.2 MIT */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('pure-md5')) :
  typeof define === 'function' && define.amd ? define(['pure-md5'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.compromiseHash = factory(global.require$$0));
}(this, (function (require$$0) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);

  var md5 = require$$0__default['default'].md5;

  var makeHash = function makeHash(doc) {
    var str = doc.text();
    doc.list.forEach(function (p) {
      p.terms().forEach(function (t) {
        str += t.pre + (t.implicit || t.text) + t.post;
        str += Object.keys(t.tags).join('');
      });
    });
    return md5(str);
  };

  var hash = makeHash;

  var addMethods = function addMethods(Doc) {
    /** generate an md5 hash from the document */
    Doc.prototype.hash = function () {
      return hash(this);
    };
    /** compare two documents, by their hashes */


    Doc.prototype.isEqual = function (b) {
      return hash(this) === hash(b);
    };
  };

  var src = addMethods;

  return src;

})));
//# sourceMappingURL=compromise-hash.js.map
