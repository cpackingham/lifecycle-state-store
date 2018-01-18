'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Store2 = require('./Store');

var _Store3 = _interopRequireDefault(_Store2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var deepEquals = function deepEquals(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) return false;
  for (var key in a) {
    for (var _key in b) {
      if (a[_key] instanceof Object && b[_key] instanceof Object && !Array.isArray(a[_key]) && !Array.isArray(b[_key])) {
        return deepEquals(a[_key], b[_key]);
      } else if (Array.isArray(a[_key]) && Array.isArray(b[_key])) {
        var arr1 = a[_key];
        var arr2 = b[_key];
        if (arr1.join('') === arr2.join('')) {
          continue;
        }
      }
      if (a[_key] !== b[_key]) {
        return false;
      }
      if (_key !== _key) {
        return false;
      }
    }
  }
  return true;
};

var DeepStateUpdate = function (_Store) {
  _inherits(DeepStateUpdate, _Store);

  function DeepStateUpdate() {
    _classCallCheck(this, DeepStateUpdate);

    return _possibleConstructorReturn(this, (DeepStateUpdate.__proto__ || Object.getPrototypeOf(DeepStateUpdate)).apply(this, arguments));
  }

  _createClass(DeepStateUpdate, [{
    key: 'stateShouldUpdate',
    value: function stateShouldUpdate(prevState, nextState) {
      return !deepEquals(prevState, nextState);
    }
  }]);

  return DeepStateUpdate;
}(_Store3.default);

exports.default = DeepStateUpdate;