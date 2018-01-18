'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeepStateUpdate = exports.ShallowStateUpdate = exports.Store = undefined;

var _Store = require('./Store');

var _Store2 = _interopRequireDefault(_Store);

var _ShallowStateUpdate = require('./ShallowStateUpdate');

var _ShallowStateUpdate2 = _interopRequireDefault(_ShallowStateUpdate);

var _DeepStateUpdate = require('./DeepStateUpdate');

var _DeepStateUpdate2 = _interopRequireDefault(_DeepStateUpdate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Store = _Store2.default;
exports.ShallowStateUpdate = _ShallowStateUpdate2.default;
exports.DeepStateUpdate = _DeepStateUpdate2.default;