"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getType(element) {
  return Object.prototype.toString.call(elem);
}

var ShallowStateUpdate = function () {
  function ShallowStateUpdate(prevState, updatedState, changedFields) {
    _classCallCheck(this, ShallowStateUpdate);

    this.prevState = prevState;
    this.updatedState = updatedState;
    this.changedFields = changedFields;
    this.hasChanged = this.hasChanged.bind(this);
    this.hasChangedTypes = this.hasChangedTypes.bind(this);
    this.getUpdatedState = this.getUpdatedState.bind(this);
    this.getPrevState = this.getPrevState.bind(this);
    this.getChangedFields = this.getChangedFields.bind(this);
  }

  _createClass(ShallowStateUpdate, [{
    key: "hasChanged",
    value: function hasChanged() {
      this.changedFields.length !== 0 ? true : false;
    }
  }, {
    key: "hasChangedTypes",
    value: function hasChangedTypes() {
      var changedFields = this.getChangedFields();
      var updatedState = this.getUpdatedState();
      var prevState = this.getPrevState();
      for (var key in changedFields) {
        if (getType(updatedState[key]) !== getType(prevState[key])) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: "getUpdatedState",
    value: function getUpdatedState() {
      return this.updatedState;
    }
  }, {
    key: "getPrevState",
    value: function getPrevState() {
      return this.prevState;
    }
  }, {
    key: "getChangedFields",
    value: function getChangedFields() {
      return this.changedFields;
    }
  }]);

  return ShallowStateUpdate;
}();

exports.default = ShallowStateUpdate;