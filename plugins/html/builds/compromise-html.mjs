/* compromise-html 0.0.2 MIT */
import htm from 'htm';
import vhtml from 'vhtml';

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
  var h = htm.bind(vhtml);

  if (options.bind) {
    h = htm.bind(options.bind);
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

export default src;
