"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Store = function () {
  function Store(reducer, initialState) {
    _classCallCheck(this, Store);

    this.storeWillInitialize = this.storeWillInitialize.bind(this);
    this.storeWillInitialize();
    this.reducer = reducer;
    this.state = initialState;
    this.dispatch = this.dispatch.bind(this);
    this.getState = this.getState.bind(this);
    this.setStateSafe = this.setStateSafe.bind(this);
    this.setStateDirect = this.setStateDirect.bind(this);
    this.stateShouldUpdate = this.stateShouldUpdate.bind(this);
    this.stateWillUpdate = this.stateWillUpdate.bind(this);
    this.stateDidUpdate = this.stateDidUpdate.bind(this);
    this.storeDidInitialize = this.storeDidInitialize.bind(this);
    this.storeDidInitialize();
  }

  /*
    Store actions
  */

  _createClass(Store, [{
    key: "dispatch",
    value: function dispatch(action) {
      var updatedState = this.reducer(this.getState(), action);

      if (!this.stateShouldUpdate()) {
        return null;
      }

      this.stateWillUpdate();

      this.state = updatedState;

      this.stateDidUpdate();
    }
  }, {
    key: "getState",
    value: function getState() {
      return this.state;
    }
  }, {
    key: "setStateSafe",
    value: function setStateSafe(newState) {
      if (!this.stateShouldUpdate()) {
        return false;
      }
      this.stateWillUpdate();
      this.setStateDirect(newState);
      this.stateDidUpdate();
    }
  }, {
    key: "setStateDirect",
    value: function setStateDirect(newState) {
      this.state = newState;
    }

    /* 
      Store lifecycle methods
    */

  }, {
    key: "storeWillInitialize",
    value: function storeWillInitialize() {}
  }, {
    key: "storeDidInitialize",
    value: function storeDidInitialize() {}

    /*
      State lifecycle methods
    */

  }, {
    key: "stateDidUpdate",
    value: function stateDidUpdate() {}
  }, {
    key: "stateWillUpdate",
    value: function stateWillUpdate() {}
  }, {
    key: "stateShouldUpdate",
    value: function stateShouldUpdate() {
      return true;
    }
  }]);

  return Store;
}();

exports.default = Store;