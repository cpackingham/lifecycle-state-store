"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Store = function () {

  /**
   * Constructor of the base Store class. 
   * 
   * @param {Function} reducer A function which returns the next state,
   * given the current state and an action to handle.
   * 
   * @param {Object} initialState The initial state of the application.
   * 
   * @returns {Store} The state store on which functions can be called.
   * 
   */

  function Store(reducer, initialState) {
    _classCallCheck(this, Store);

    this.storeWillInitialize = this.storeWillInitialize.bind(this);
    this.storeWillInitialize();
    this.reducer = reducer;
    this.state = initialState;
    this.listeners = [];
    this.dispatch = this.dispatch.bind(this);
    this.getState = this.getState.bind(this);
    this.stateShouldUpdate = this.stateShouldUpdate.bind(this);
    this.stateWillUpdate = this.stateWillUpdate.bind(this);
    this.stateDidUpdate = this.stateDidUpdate.bind(this);
    this.storeDidInitialize = this.storeDidInitialize.bind(this);
    this.storeDidInitialize();
  }

  /**
   * Store Actions
   */

  /**
   * Dispatches an action to the reducer in order to update state.
   * This function should not be extended.
   * 
   * @param {Object} action An action which the reducer uses to 
   * perform a state update. The action must contain a type, and optionally
   * other data.
   * 
   * @returns {Object} Returns the action which it received. 
   * 
   */

  _createClass(Store, [{
    key: "dispatch",
    value: function dispatch(action) {
      var currentState = this.state;
      var nextState = this.reducer(currentState, action);
      if (!this.stateShouldUpdate(currentState, nextState)) {
        return action;
      }
      this.stateWillUpdate(currentState, nextState);
      this.state = Object.assign({}, currentState, nextState);
      var prevState = currentState;
      currentState = this.state;
      this.stateDidUpdate(prevState, currentState);
      return action;
    }

    /**
     * Gets the current state of the application.
     * 
     * @returns {Object} Returns the state.
     */

  }, {
    key: "getState",
    value: function getState() {
      return this.state;
    }

    /**
     * Adds a listener to be called after state is updated.
     * 
     * @param {Function} listener A function to be called when 
     * state updates. 
     */

  }, {
    key: "subscribe",
    value: function subscribe(listener) {
      this.listeners.push(listener);
    }

    /**
     * Store Lifecycle Methods
     */

    /**
     * Called before the rest of the constructor is run. 
     * This method is intended to be extended by implementations of Store.
     */

  }, {
    key: "storeWillInitialize",
    value: function storeWillInitialize() {}

    /**
     * Called after the rest of the constructor is run. 
     * This method is intended to be extended by implementations of Store.
     */

  }, {
    key: "storeDidInitialize",
    value: function storeDidInitialize() {}

    /**
     * State Lifecycle Methods
     */

    /**
     * Called before state is updated in order to decide whether or not
     * state should be changed. This method is intended to be extended
     * by implementations of Store.
     * 
     * @param {Object} currentState The current state of the application.
     * 
     * @param {Object} nextState The next state of the application.
     * 
     * @returns {boolean} Return true if state should update, return false if not.
     * Returns true by default.
     */

  }, {
    key: "stateShouldUpdate",
    value: function stateShouldUpdate(currentState, nextState) {
      return true;
    }

    /**
     * Called before state is updated. This method is intended to be extended by
     * implementations of Store.
     * 
     * @param {Object} currentState The current state of the application.
     * 
     * @param {Object} nextState The next state of the application.
     * 
     */

  }, {
    key: "stateWillUpdate",
    value: function stateWillUpdate(currentState, nextState) {}

    /**
     * Called after state is updated. This method is intended to be extended by
     * implementations of Store. By default calls all listener methods.
     * 
     * @param {Object} prevState The previous state of the application.
     * 
     * @param {Object} currentState The current state of the application.
     * 
     */

  }, {
    key: "stateDidUpdate",
    value: function stateDidUpdate(prevState, currentState) {
      var listeners = this.listeners;
      listeners.forEach(function (listener) {
        listener();
      });
    }
  }]);

  return Store;
}();

exports.default = Store;