/* compromise-strict 0.0.2 GPLv3 */
import require$$0 from 'chevrotain';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var NOOP = Symbol("NOOP"); // basically continue

var MATCH_ANY = Symbol("MATCH_ANY");
var MATCH_WORD = Symbol("MATCH_WORD");
var MATCH_TAG = Symbol("MATCH_TAG");
var MATCH_METHOD = Symbol("MATCH_METHOD");
var MATCH_END = Symbol("MATCH_END");
var JMP = Symbol("JMP");
var SPLIT = Symbol("SPLIT");
var GLOBAL_SAVE = Symbol("GLOBAL_SAVE"); // Set global save value, if true saves results.

var MATCH = Symbol("MATCH");
var OGROUP = Symbol("OGROUP"); // open group

var CGROUP = Symbol("CGROUP"); // close group

var INCV = Symbol("INCV"); // increment a value, set to 0 by default

var JMP_LT = Symbol("JMP_LT"); // jmp if a variable is less than value else continue

var SPLIT_LT = Symbol("SPLIT_LT"); // split if a variable is less than value else continue

var LOOKAHEAD = Symbol("LOOKAHEAD");
var NEGATIVE_LOOKAHEAD = Symbol("NEGATIVE_LOOKAHEAD");
var constants = {
  NOOP: NOOP,
  MATCH_ANY: MATCH_ANY,
  MATCH_WORD: MATCH_WORD,
  MATCH_TAG: MATCH_TAG,
  MATCH_METHOD: MATCH_METHOD,
  MATCH_END: MATCH_END,
  JMP: JMP,
  SPLIT: SPLIT,
  GLOBAL_SAVE: GLOBAL_SAVE,
  MATCH: MATCH,
  OGROUP: OGROUP,
  CGROUP: CGROUP,
  INCV: INCV,
  JMP_LT: JMP_LT,
  SPLIT_LT: SPLIT_LT,
  LOOKAHEAD: LOOKAHEAD,
  NEGATIVE_LOOKAHEAD: NEGATIVE_LOOKAHEAD
};

var EmbeddedActionsParser = require$$0.EmbeddedActionsParser,
    Lexer = require$$0.Lexer,
    createToken = require$$0.createToken;
var NOOP$1 = constants.NOOP,
    MATCH_ANY$1 = constants.MATCH_ANY,
    MATCH_TAG$1 = constants.MATCH_TAG,
    MATCH_WORD$1 = constants.MATCH_WORD,
    MATCH_METHOD$1 = constants.MATCH_METHOD,
    MATCH_END$1 = constants.MATCH_END,
    JMP$1 = constants.JMP,
    SPLIT$1 = constants.SPLIT,
    GLOBAL_SAVE$1 = constants.GLOBAL_SAVE,
    MATCH$1 = constants.MATCH,
    OGROUP$1 = constants.OGROUP,
    CGROUP$1 = constants.CGROUP,
    INCV$1 = constants.INCV,
    JMP_LT$1 = constants.JMP_LT,
    SPLIT_LT$1 = constants.SPLIT_LT,
    LOOKAHEAD$1 = constants.LOOKAHEAD,
    NEGATIVE_LOOKAHEAD$1 = constants.NEGATIVE_LOOKAHEAD;
var StartOf = createToken({
  name: 'StartOf',
  pattern: /\^/
});
var EndOf = createToken({
  name: 'EndOf',
  pattern: /\$/
});
var Tag = createToken({
  name: 'Tag',
  pattern: /#([_-\w]|\\.)+/
});
var EscapedWord = createToken({
  name: 'EscapedWord',
  pattern: /\\[#@]([_-\w]|\\.)+/
});
var Word = createToken({
  name: 'Word',
  pattern: /([_-\w]|\\.)+/
});
var Method = createToken({
  name: 'Method',
  pattern: /@[_-\w]+/
});
var Question = createToken({
  name: 'Question',
  pattern: /\?/,
  longer_alt: Word
});
var Exclamation = createToken({
  name: 'Exclamation',
  pattern: /!/,
  longer_alt: Word
});
var Equals = createToken({
  name: 'Equals',
  pattern: /=/,
  longer_alt: Word
});
var Pound = createToken({
  name: 'Pound',
  pattern: /#/,
  longer_alt: Tag
});
var Dot = createToken({
  name: 'Dot',
  pattern: /\./,
  longer_alt: Word
});
var Pipe = createToken({
  name: 'Pipe',
  pattern: /\|/
});
var Comma = createToken({
  name: 'Comma',
  pattern: /,/,
  longer_alt: Word
});
var Colon = createToken({
  name: 'Colon',
  pattern: /:/,
  longer_alt: Word
});
var Plus = createToken({
  name: 'Plus',
  pattern: /\+/
});
var Star = createToken({
  name: 'Star',
  pattern: /\*/
});
var Zero = createToken({
  name: 'Zero',
  pattern: /0/,
  longer_alt: Word
});
var PositiveInt = createToken({
  name: 'PositiveInt',
  pattern: /[1-9]\d*/,
  longer_alt: Word
});
var LParenthesis = createToken({
  name: 'LParenthesis',
  pattern: /\(/
});
var RParenthesis = createToken({
  name: 'RParenthesis',
  pattern: /\)/
});
var LCurly = createToken({
  name: 'LCurly',
  pattern: /\{/
});
var RCurly = createToken({
  name: 'RCurly',
  pattern: /\}/
});
var NamedGroupBegin = createToken({
  name: 'NamedGroupBegin',
  pattern: /P</
});
var NamedGroupEnd = createToken({
  name: 'NamedGroupEnd',
  pattern: />/,
  longer_alt: Word
});
var WhiteSpace = createToken({
  name: 'WhiteSpace',
  pattern: /\s+/,
  group: Lexer.SKIPPED
});
var allTokens = [NamedGroupBegin, NamedGroupEnd, WhiteSpace, StartOf, EndOf, Zero, PositiveInt, Dot, EscapedWord, Word, Method, Tag, Exclamation, Equals, Pound, Colon, Question, Plus, Star, Comma, Pipe, LParenthesis, RParenthesis, LCurly, RCurly]; // Notes or something like it, may not be accurate.
// (a|b)
// 0. split 1, 3
// 1. char a
// 2. jmp 4
// 3. char b
// 4. match
//
// (a|b|c)
// 0. split 1, 3, 5
// 1. char a
// 2. jmp 7
// 3. char b
// 4. jmp 7
// 5. char c
// 6. match
//
// ((a|b)|c)
// 0. split 1, 6
// 1. split 2, 4
// 2. char a
// 3. jmp 7
// 4. char b
// 5. jmp 7
// 6. char c
// 7. match
//
// a{2}
// 0. noop
// 1. char a
// 2. incv i 1, def=0
// 3. jmp_lt i 2 [0]
//
// a{2, 3}
// 0. noop
// 1. char a
// 2. incv i 1, def=0
// 3. jmp_lt 0 i [2]
// 4. split_lt i 3 [0, 6]
//
// a{,3}
// 0. noop
// 1. char a
// 2. incv i 1, def=0
// 3. split_lt i 3 [0, 5]
//
// a{3,}
// 0. noop
// 1. char a
// 2. incv i 1, def=0
// 3. jmp_lt i 3
// 4. split [0, 6]
//
// a(!b)
// 0. noop
// 1. char a
// 2. nlookahead prog  // negative lookahead is a sub program
//   1. match b
//   2. match
// 2.1. if found stop, else continue at current sp
//

var MatchParser = /*#__PURE__*/function (_EmbeddedActionsParse) {
  _inherits(MatchParser, _EmbeddedActionsParse);

  var _super = _createSuper(MatchParser);

  function MatchParser() {
    var _this;

    _classCallCheck(this, MatchParser);

    _this = _super.call(this, allTokens);
    /*
     * '.'
     * '^remind #Noun$'
     * '\#Noun' -- escaped word containing #
     * '(remind|#Noun)'
     * '(remind+|#Noun)'
     * '(remind|#Noun)+'
     * '#Noun{2}'
     * '#Noun?'
     * '#Noun*'
     * '(?:remind #Noun)' -- non capturing group
     * '(?P<name>#Noun)'
     * '(?P<name>#Noun)+'
     *
     * matchStatement ([startOf] valueStatement [endOf])
     * valueStatement (value [...value])
     * rangeModifier (LCurly, ((PositiveInt|Zero) [, PositiveInt]) RCurly)
     * oneOrMore (Plus)
     * zeroOrMore (Star)
     * zeroOrOne (Question)
     * valueModifier (oneOrMore, rangeModifier, zeroOrMore, zeroOrOne)
     * value (dot, word, escapedWord, tag, Zero, PositiveInt, group)[valueModifier]
     * namedGroupBegin: token pattern /\?P</
     * namedGroupEnd: token pattern />/
     * namedGroup (namedGroupBegin, Word, namedGroupEnd)
     * nonCapturingGroup token pattern /\?:/ -- TODO: figure out how to escape these
     * negativeGroup token patter /\?!/
     * groupModifier [namedGroup|nonCapturingGroup]
     * group (LParent, [groupModifier], valueStatement|...), RParen)
     *
     */

    var $ = _assertThisInitialized(_this);

    $.RULE('matchStatement', function () {
      var matches = {
        startOf: false,
        prog: [],
        endOf: false
      };
      $.OPTION(function () {
        $.CONSUME(StartOf);
        matches.startOf = true;
      }); // handle ^ startOf

      if (!matches.startOf) {
        // .*? at the start when not ^ / startOf, don't save the matched
        // values.
        matches.prog.push({
          code: GLOBAL_SAVE$1,
          value: false
        });
        matches.prog.push({
          code: SPLIT$1,
          locs: [4, 2]
        });
        matches.prog.push({
          code: MATCH_ANY$1
        });
        matches.prog.push({
          code: JMP$1,
          loc: 1
        });
        matches.prog.push({
          code: GLOBAL_SAVE$1,
          value: true
        });
      }

      matches.groups = [];
      $.SUBRULE($.valueStatement, {
        ARGS: [matches.prog, matches.groups]
      });
      $.OPTION1(function () {
        $.CONSUME(EndOf);
        matches.endOf = true;
      }); // handle $ endOf

      $.ACTION(function () {
        if (matches.endOf) {
          matches.prog.push({
            code: MATCH_END$1
          });
        }

        matches.prog.push({
          code: MATCH$1
        });
      });
      return matches;
    });
    $.RULE('valueStatement', function () {
      var prog = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var groups = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var vars = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var inst = [];
      $.AT_LEAST_ONE({
        DEF: function DEF() {
          $.SUBRULE($.value, {
            ARGS: [prog, groups, vars]
          });
        }
      });
      return inst;
    });
    $.RULE('value', function () {
      var prog = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var groups = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var vars = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var split = {
        code: NOOP$1
      }; // save split for modifiers

      prog.push(split);
      var start = prog.length; // save start for split jmp later

      $.OR([{
        ALT: function ALT() {
          $.CONSUME(Dot);
          prog.push({
            code: MATCH_ANY$1
          });
        }
      }, {
        ALT: function ALT() {
          prog.push({
            code: MATCH_WORD$1,
            value: $.CONSUME(Word).image
          });
        }
      }, {
        ALT: function ALT() {
          prog.push({
            code: MATCH_WORD$1,
            value: $.CONSUME(EscapedWord).image.substr(1)
          });
        }
      }, {
        ALT: function ALT() {
          prog.push({
            code: MATCH_TAG$1,
            value: $.CONSUME(Tag).image.substr(1)
          });
        }
      }, {
        ALT: function ALT() {
          prog.push({
            code: MATCH_WORD$1,
            value: $.CONSUME(Zero).image
          });
        }
      }, {
        ALT: function ALT() {
          prog.push({
            code: MATCH_WORD$1,
            value: $.CONSUME(PositiveInt).image
          });
        }
      }, {
        ALT: function ALT() {
          prog.push({
            code: MATCH_METHOD$1,
            value: $.CONSUME(Method).image.substr(1)
          });
        }
      }, {
        ALT: function ALT() {
          $.SUBRULE($.group, {
            ARGS: [prog, groups, vars]
          });
        }
      }]);
      $.OPTION(function () {
        // TODO: could probably allow relative jmps to get rid of noop
        var _$$SUBRULE = $.SUBRULE($.valueModifier),
            type = _$$SUBRULE.type,
            greedy = _$$SUBRULE.greedy,
            min = _$$SUBRULE.min,
            max = _$$SUBRULE.max;

        switch (type) {
          case 'ZERO_OR_ONE':
            split.code = SPLIT$1;
            split.locs = [start, prog.length];
            break;

          case 'ZERO_OR_MORE':
            prog.push({
              code: JMP$1,
              loc: start - 1
            });
            split.code = SPLIT$1;
            split.locs = [start, prog.length];
            break;

          case 'ONE_OR_MORE':
            prog.push({
              code: SPLIT$1,
              locs: [start, prog.length + 1]
            });

            if (!greedy) {
              prog[prog.length - 1].locs.reverse();
            }

            break;

          case 'RANGE':
            var varId = vars.length;
            vars.push(varId);
            prog.push({
              code: INCV$1,
              varId: varId
            }); // increment first

            var minInst = {
              code: JMP_LT$1,
              varId: varId,
              value: min || 0,
              loc: start
            };
            var maxInst = null;

            if (min === max) {
              // a{x}
              if (min === 0) {
                // a{0} skip matching, causes token to be ignored
                split.code = JMP$1;
                split.loc = prog.length; // next instruction
              } else {
                // a{x}
                prog.push(minInst);
              }
            } else if ((min || 0) === 0 && max !== null) {
              // a{,y} a{0,y}
              split.code = SPLIT$1;
              split.locs = [start, prog.length + 1];
              maxInst = {
                code: SPLIT_LT$1,
                varId: varId,
                value: max,
                locs: [start, prog.length + 1]
              };
              prog.push(maxInst);
            } else if (min !== null && max === null) {
              // a{x,}
              prog.push(minInst);
              maxInst = {
                code: SPLIT$1,
                locs: [start, prog.length + 1]
              };
              prog.push(maxInst);
            } else {
              // if (min !== null && max !== null) {
              // a{x,y}
              prog.push(minInst);
              maxInst = {
                code: SPLIT_LT$1,
                varId: varId,
                value: max,
                locs: [start, prog.length + 1]
              };
              prog.push(maxInst);
            }

            if (!greedy && maxInst && maxInst.locs) {
              maxInst.locs.reverse(); // reverse thread priority for greedy / non-greedy
            } //{ code: SPLIT, locs: [ ] }
            //prog.push({ code: SETV_ONCE, id: rid, value: 0 });
            //prog.push({ code: INCREMENT, id: rid, value: 1 });
            //prog.push({ code: JMP_IF_GTE, id: rid, value: 0 });


            break;
        }

        if (!greedy && split.locs) {
          split.locs.reverse();
        }
      });
    });
    $.RULE('valueModifier', function () {
      var result = {
        type: null,
        greedy: true
      };
      $.OR([{
        ALT: function ALT() {
          $.CONSUME(Question);
          result.type = 'ZERO_OR_ONE';
        }
      }, {
        ALT: function ALT() {
          $.CONSUME(Star);
          result.type = 'ZERO_OR_MORE';
        }
      }, {
        ALT: function ALT() {
          $.CONSUME(Plus);
          result.type = 'ONE_OR_MORE';
        }
      }, {
        ALT: function ALT() {
          var _$$SUBRULE2 = $.SUBRULE($.rangeModifier),
              min = _$$SUBRULE2.min,
              max = _$$SUBRULE2.max;

          $.ACTION(function () {
            result.type = 'RANGE';
            result.min = min;
            result.max = max;
          });
        }
      }]);
      $.OPTION(function () {
        $.CONSUME1(Question);
        $.ACTION(function () {
          result.greedy = false;
        });
      });
      return result;
    });
    $.RULE('rangeModifier', function () {
      var range = {
        min: null,
        max: null
      };
      $.CONSUME(LCurly); // {x}

      $.OPTION(function () {
        $.OR([{
          ALT: function ALT() {
            range.min = $.CONSUME(Zero).image;
          }
        }, {
          ALT: function ALT() {
            range.min = $.CONSUME(PositiveInt).image;
          }
        }]);
      }); // {x}

      range.max = range.min;
      $.OPTION1(function () {
        $.CONSUME(Comma); // {x,}

        range.max = null; // {,x} {x,}, {x,y}

        $.OPTION2(function () {
          range.max = $.CONSUME1(PositiveInt).image;
        });
      });
      $.ACTION(function () {
        if (range.min) {
          range.min = parseInt(range.min, 10);
        }

        if (range.max) {
          range.max = parseInt(range.max, 10);
        }

        var min = range.min,
            max = range.max;

        if (min && max && min > max) {
          throw new Error("Range min(".concat(min, ") must be greater than max(").concat(max, ")."));
        }

        if (min === null && max === null) {
          throw new Error("Range min or max must be defined.");
        }
      });
      $.CONSUME(RCurly);
      return range;
    });
    $.RULE('group', function () {
      var prog = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var groups = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var vars = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var modifiers = {
        capture: true,
        name: null,
        lookahead: false,
        negative: false
      };
      $.CONSUME(LParenthesis);
      $.OPTION(function () {
        modifiers = $.SUBRULE($.groupModifier);
      });
      var oProg = null;

      if (modifiers.lookahead) {
        // part 1, see finish at end
        modifiers.capture = false;
        oProg = prog;
        prog = [];
      }

      var gId = groups.length;

      if (modifiers.capture) {
        groups.push(modifiers);
        prog.push({
          code: OGROUP$1,
          id: gId,
          name: modifiers.name
        });
      }

      var split = {
        code: SPLIT$1,
        locs: []
      };
      prog.push(split);
      var jmps = [];
      $.AT_LEAST_ONE_SEP({
        SEP: Pipe,
        DEF: function DEF() {
          split.locs.push(prog.length);
          $.SUBRULE($.valueStatement, {
            ARGS: [prog, groups, vars]
          });
          var jmp = {
            code: JMP$1,
            loc: null
          };
          jmps.push(jmp);
          prog.push(jmp);
        }
      }); // make split noop when just one in group

      if (split.locs.length === 1) {
        split.code = NOOP$1;
        delete split.locs;
      } // remove last jmp so it continues


      prog.pop(); // set jmps to end

      for (var _i = 0, _jmps = jmps; _i < _jmps.length; _i++) {
        var jmp = _jmps[_i];
        jmp.loc = prog.length;
      } // close the group if necessary as the last step


      if (modifiers.capture) {
        prog.push({
          code: CGROUP$1,
          id: gId,
          name: modifiers.name
        });
      }

      if (modifiers.lookahead) {
        prog.push({
          code: MATCH$1
        });
        oProg.push({
          code: modifiers.negative ? NEGATIVE_LOOKAHEAD$1 : LOOKAHEAD$1,
          prog: prog
        });
      }

      $.CONSUME(RParenthesis);
    });
    $.RULE('namedGroup', function () {
      $.CONSUME(Question);
      $.CONSUME(NamedGroupBegin);
      var name = $.CONSUME(Word).image;
      $.CONSUME(NamedGroupEnd);
      return name;
    });
    $.RULE('nonCapturingGroup', function () {
      $.CONSUME(Question);
      $.CONSUME(Colon);
    });
    $.RULE('negativeLookaheadGroup', function () {
      $.CONSUME(Question);
      $.CONSUME(Exclamation);
    });
    $.RULE('positiveLookaheadGroup', function () {
      $.CONSUME(Question);
      $.CONSUME(Equals);
    });
    $.RULE('commentGroup', function () {
      $.CONSUME(Question);
      $.CONSUME(Pound);
    });
    $.RULE('groupModifier', function () {
      var result = {
        capture: true,
        name: null,
        lookahead: false,
        negative: false,
        comment: false
      };
      $.OR([{
        ALT: function ALT() {
          $.SUBRULE($.nonCapturingGroup);
          result.capture = false;
        }
      }, {
        ALT: function ALT() {
          result.name = $.SUBRULE($.namedGroup);
        }
      }, {
        ALT: function ALT() {
          $.SUBRULE($.negativeLookaheadGroup);
          result.capture = false;
          result.lookahead = true;
          result.negative = true;
        }
      }, {
        ALT: function ALT() {
          $.SUBRULE($.positiveLookaheadGroup);
          result.capture = false;
          result.lookahead = true;
          result.negative = false;
        }
      }
      /*
      { ALT: () => {
        $.SUBRULE($.commentGroup);
        result.capture = false;
        result.comment = true;
      }}
      */
      ]);
      return result;
    });

    _this.performSelfAnalysis();

    return _this;
  }

  return MatchParser;
}(EmbeddedActionsParser);

var parser = {
  allTokens: allTokens,
  MatchParser: MatchParser
};

var NOOP$2 = constants.NOOP,
    MATCH_ANY$2 = constants.MATCH_ANY,
    MATCH_TAG$2 = constants.MATCH_TAG,
    MATCH_WORD$2 = constants.MATCH_WORD,
    MATCH_METHOD$2 = constants.MATCH_METHOD,
    MATCH_END$2 = constants.MATCH_END,
    JMP$2 = constants.JMP,
    SPLIT$2 = constants.SPLIT,
    GLOBAL_SAVE$2 = constants.GLOBAL_SAVE,
    MATCH$2 = constants.MATCH,
    OGROUP$2 = constants.OGROUP,
    CGROUP$2 = constants.CGROUP,
    INCV$2 = constants.INCV,
    JMP_LT$2 = constants.JMP_LT,
    SPLIT_LT$2 = constants.SPLIT_LT,
    LOOKAHEAD$2 = constants.LOOKAHEAD,
    NEGATIVE_LOOKAHEAD$2 = constants.NEGATIVE_LOOKAHEAD;

var termContainsTag = function termContainsTag(term, name) {
  return Object.entries(term.tags || {}).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        _k = _ref2[0],
        v = _ref2[1];

    return v;
  }) //eslint-disable-line
  .map(function (entry) {
    return entry[0].toLowerCase();
  }).includes(name.toLowerCase());
};
/**
 * Helper function, create a thread
 * Copies saved and groups.saved so that each thread contains its own
 * independent saved values.
 *
 * Note: Using the { saved, groups } allows passing a thread which will cause
 * its saved to be cloned.
 *
 * @param {int} pc - position of instance code to execute
 * @param {*[]} saved - matched objects that were saved
 * @param {object} groups - capture groups key of group id
 * @returns {object} thread
 */


var thread = function thread(pc) {
  var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref3$save = _ref3.save,
      save = _ref3$save === void 0 ? true : _ref3$save,
      _ref3$saved = _ref3.saved,
      saved = _ref3$saved === void 0 ? [] : _ref3$saved,
      _ref3$groups = _ref3.groups,
      groups = _ref3$groups === void 0 ? {} : _ref3$groups,
      _ref3$vars = _ref3.vars,
      vars = _ref3$vars === void 0 ? {} : _ref3$vars;

  var ngroups = Object.values(groups).reduce(function (ng, g) {
    ng[g.id] = Object.assign({}, g);
    ng[g.id].saved = g.saved.slice();
    return ng;
  }, {});
  return {
    pc: pc,
    save: save,
    saved: _toConsumableArray(saved),
    // clone groups.saved
    groups: ngroups,
    vars: Object.assign({}, vars)
  };
};

var addthread = function addthread(prog, list, th) {
  var inst = prog[th.pc]; //console.log("addthread:", th.pc);
  //console.log("  inst:", inst);

  switch (inst.code) {
    case GLOBAL_SAVE$2:
      th.save = inst.value;
      addthread(prog, list, thread(th.pc + 1, th));
      break;

    case NOOP$2:
      addthread(prog, list, thread(th.pc + 1, th));
      break;

    case JMP$2:
      addthread(prog, list, thread(inst.loc, th));
      break;

    case SPLIT$2:
      var _iterator = _createForOfIteratorHelper(inst.locs),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var loc = _step.value;
          addthread(prog, list, thread(loc, th));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      break;

    case OGROUP$2:
      // again (see below comment in pikevm match), can modify thread
      // because it ends here
      th.groups[inst.id] = {
        id: inst.id,
        name: inst.name,
        saved: [],
        open: true
      };
      addthread(prog, list, thread(th.pc + 1, th));
      break;

    case CGROUP$2:
      th.groups[inst.id].open = false;
      addthread(prog, list, thread(th.pc + 1, th));
      break;

    case INCV$2:
      th.vars[inst.varId] = (th.vars[inst.varId] || 0) + 1;
      addthread(prog, list, thread(th.pc + 1, th));
      break;

    case JMP_LT$2:
      if (th.vars[inst.varId] < inst.value) {
        // jump!
        addthread(prog, list, thread(inst.loc, th));
      } else {
        // continue
        addthread(prog, list, thread(th.pc + 1, th));
      }

      break;

    case SPLIT_LT$2:
      if (th.vars[inst.varId] < inst.value) {
        // split!
        var _iterator2 = _createForOfIteratorHelper(inst.locs),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _loc = _step2.value;
            addthread(prog, list, thread(_loc, th));
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      } else {
        // continue
        addthread(prog, list, thread(th.pc + 1, th));
      }

      break;

    default:
      list.push(th);
      break;
  }
};
/**
 * Save a match to a thread.
 * Handles saving to open groups too
 * @param {object} th - the thread
 * @param {*] sp - the matched value to add
 * @return {object} the thread th
 */


var saveMatch = function saveMatch(th, sp) {
  if (!th.save) {
    return th;
  } // get the `saved` from the open buckets


  var tmp = Object.values(th.groups).filter(function (g) {
    return g.open;
  }).map(function (g) {
    return g.saved;
  });
  var buckets = [th.saved].concat(tmp);

  var _iterator3 = _createForOfIteratorHelper(buckets),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var saved = _step3.value;
      saved.push(sp);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return th;
};
/**
 * Simulate pike's vm, see https://swtch.com/~rsc/regexp/regexp2.html
 * @param {object[]} inst - instructions to execute
 * @param {object[]} input - input word w/ terms
 * @returns true or false for match and saved matches
 */


var pikevm = function pikevm(prog, input) {
  var clist = [];
  var nlist = [];
  var found = false;
  var groups = {};
  var saved = []; // helps with match end and also matches that end at exactly the end so that
  // the match function gets a chance to run.

  var END = Symbol('END');
  input = input.concat(END);
  addthread(prog, clist, thread(0)); // and so we begin...

  for (var i = 0; i < input.length; i++) {
    if (clist.length === 0) {
      break;
    }

    var sp = input[i];

    for (var j = 0; j < clist.length; j++) {
      // can probably convert to clist.shift as optimization
      var th = clist[j];
      var inst = prog[th.pc]; //console.log("exec:", inst);
      //console.log(`  stack(${i}):`, clist);

      var gotoNextWord = false;

      switch (inst.code) {
        case MATCH_ANY$2:
          // Note: can call save match like this without worrying about other
          // threads because this thread ends here and another will be created
          // in its place
          if (sp !== END) {
            addthread(prog, nlist, thread(th.pc + 1, saveMatch(th, sp)));
          }

          break;

        case MATCH_WORD$2:
          if (sp.text && sp.text.toLowerCase() === inst.value.toLowerCase()) {
            // continue on next word
            addthread(prog, nlist, thread(th.pc + 1, saveMatch(th, sp)));
          }

          break;

        case MATCH_TAG$2:
          if (termContainsTag(sp, inst.value)) {
            addthread(prog, nlist, thread(th.pc + 1, saveMatch(th, sp)));
          }

          break;

        case MATCH_METHOD$2:
          // call method using null coalescing on term, if it returns true continue
          if (sp[inst.value]()) {
            addthread(prog, nlist, thread(th.pc + 1, saveMatch(th, sp)));
          }

          break;

        case MATCH_END$2:
          if (sp === END) {
            // continue
            addthread(prog, clist, thread(th.pc + 1, th));
          }

          break;

        case LOOKAHEAD$2:
          var mla = pikevm(inst.prog, input.slice(i));

          if (mla.found) {
            addthread(prog, clist, thread(th.pc + 1, th));
          }

          break;

        case NEGATIVE_LOOKAHEAD$2:
          var mnla = pikevm(inst.prog, input.slice(i));

          if (!mnla.found) {
            // continue at current position
            // NOTE: this would be in addthread but we require access to input
            addthread(prog, clist, thread(th.pc + 1, th));
          }

          break;

        case MATCH$2:
          saved = th.saved;
          groups = th.groups;
          found = true; // Go to the next word which causes all pending threads in the
          // current list (stack) to be cleared so we don't go down those
          // paths. This allows for greedy and non-greedy matches to work.

          gotoNextWord = true;
          break;

        default:
          throw new Error("Unsuppored Op code: ".concat(inst.code));
      }

      if (gotoNextWord) {
        break; // continue next iteration
      }
    }

    clist = nlist;
    nlist = [];
  }

  if (found) {
    return {
      found: found,
      saved: saved,
      groups: groups
    };
  }

  return {
    found: found
  };
};

var pikevm_1 = {
  termContainsTag: termContainsTag,
  pikevm: pikevm
};

var Lexer$1 = require$$0.Lexer;
var MatchParser$1 = parser.MatchParser,
    allTokens$1 = parser.allTokens;
var pikevm$1 = pikevm_1.pikevm;
var NLPMatchLexer = new Lexer$1(allTokens$1);
var parserInstance = new MatchParser$1();

var NLPRegexParseError = /*#__PURE__*/function () {
  function NLPRegexParseError(errors) {
    _classCallCheck(this, NLPRegexParseError);

    this.errors = errors;
  }

  _createClass(NLPRegexParseError, [{
    key: "toString",
    value: function toString() {
      return "NLP RegexP Parsing error: ".concat(this.message);
    }
  }, {
    key: "message",
    get: function get() {
      return this.errors[0].message;
    }
  }]);

  return NLPRegexParseError;
}();
/**
 * Custom NLPRegexP class for regexp compile / cache.
 */


var NLPRegexP = /*#__PURE__*/function () {
  /**
   * @param {string} regex - regular expression like string for matching nlp
   * terms.
   */
  function NLPRegexP(regex) {
    _classCallCheck(this, NLPRegexP);

    if (regex.prog) {
      // take another NLPRegexP
      this.regex = regex.regex;
      this.prog = regex.prog.slice();
      return;
    }

    var _NLPMatchLexer$tokeni = NLPMatchLexer.tokenize(regex),
        tokens = _NLPMatchLexer$tokeni.tokens;

    parserInstance.input = tokens;
    var parsed = null;

    try {
      parsed = parserInstance.matchStatement();
    } catch (e) {
      // catch thrown error
      throw new NLPRegexParseError([e]);
    }

    if (parserInstance.errors.length > 0) {
      throw new NLPRegexParseError(parserInstance.errors);
    }

    this.regex = regex;
    this.prog = parsed.prog;
  }

  _createClass(NLPRegexP, [{
    key: "exec",
    value: function exec(docOrPhrase) {
      switch (docOrPhrase.isA.toLowerCase()) {
        case 'doc':
          return this.execDoc(docOrPhrase);

        case 'phrase':
          return this.execPhrase(docOrPhrase);

        default:
          throw new Error('Invalid type, must be Document or Phrase');
      }
    }
  }, {
    key: "execDoc",
    value: function execDoc(doc) {
      var _this = this;

      return doc.buildFrom(doc.list.map(function (phrase) {
        return _this.execPhrase(phrase);
      }).filter(function (p) {
        return p !== null;
      }));
    }
  }, {
    key: "execPhrase",
    value: function execPhrase(phrase) {
      var _pikevm = pikevm$1(this.prog, phrase.terms()),
          found = _pikevm.found,
          _pikevm$saved = _pikevm.saved,
          saved = _pikevm$saved === void 0 ? [] : _pikevm$saved,
          _pikevm$groups = _pikevm.groups,
          groups = _pikevm$groups === void 0 ? {} : _pikevm$groups;

      var namedGroups = Object.values(groups).reduce(function (arr, g) {
        var obj = Object.assign({}, arr);
        var num = parseInt(g.id, 10);
        obj[num] = {
          group: g.name || "".concat(g.id),
          start: g.saved[0] ? g.saved[0].id || 0 : 0,
          length: g.saved.length
        };
        return obj;
      }, {});
      return found && saved[0] && saved[0].id ? phrase.buildFrom(saved[0].id, saved.length, namedGroups) : null;
    }
  }]);

  return NLPRegexP;
}();

var regex = {
  NLPMatchLexer: NLPMatchLexer,
  parserInstance: parserInstance,
  NLPRegexParseError: NLPRegexParseError,
  NLPRegexP: NLPRegexP
};

var NLPRegexP$1 = regex.NLPRegexP; // nlp compromise plugin

var plugin = function plugin(Doc, _world, nlp, Phrase) {
  var preCompile = function preCompile(regex) {
    return new NLPRegexP$1(regex);
  };

  nlp.preCompile = preCompile;

  var strictMatch = function strictMatch(regex) {
    // function, non arrow, need bind for this which is doc/phrase
    regex = new NLPRegexP$1(regex); // coerce the value

    return regex.exec(this);
  };

  Doc.prototype.strictMatch = strictMatch;
  Phrase.prototype.strictMatch = strictMatch; // Doc.prototype.match = strictMatch
  // Phrase.prototype.match = strictMatch
};

var src = plugin;

export default src;
