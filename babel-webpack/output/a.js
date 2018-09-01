"use strict";

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _from = require("babel-runtime/core-js/array/from");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s = [1, 3, 5].includes(1);
console.log(s);

var v = (0, _from2.default)('foo');

var fn = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var a;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return new _promise2.default(function (resolve, reject) {
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

    function ss() {
        return _ref.apply(this, arguments);
    }

    return ss;
}();
fn();

var fun = /*#__PURE__*/_regenerator2.default.mark(function vv() {
    var a;
    return _regenerator2.default.wrap(function vv$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.next = 2;
                    return new _promise2.default(function (resolve, reject) {
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
    for (var _iterator = (0, _getIterator3.default)(fun()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var n = _step.value;

        console.log("n:::", n); //n::: Promise { 1 }
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}