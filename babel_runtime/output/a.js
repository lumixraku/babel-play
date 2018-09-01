"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var s = [1, 3, 5].includes(1);
console.log(s);
var v = Array.from('foo');

var fn =
/*#__PURE__*/
function () {
  var _ss = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    var a;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new Promise(function (resolve, reject) {
              resolve(2);
            });

          case 2:
            a = _context.sent;
            console.log(a);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function ss() {
    return _ss.apply(this, arguments);
  };
}();

fn();

var fun =
/*#__PURE__*/
_regenerator.default.mark(function vv() {
  var a;
  return _regenerator.default.wrap(function vv$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return new Promise(function (resolve, reject) {
            resolve(1);
          });

        case 2:
          a = _context2.sent;
          return _context2.abrupt("return", a);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  }, vv, this);
});

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = fun()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var n = _step.value;
    console.log("n:::", n); //n::: Promise { 1 }
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return != null) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}