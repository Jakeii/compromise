/* compromise-hash 0.0.2 MIT */
import require$$0 from 'pure-md5';

var md5 = require$$0.md5;

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

export default src;
