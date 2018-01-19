export default class Store {

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

  constructor(reducer, initialState) {
    this.storeWillInitialize = this.storeWillInitialize.bind(this)
    this.storeWillInitialize()
    this.reducer = reducer
    this.state = initialState
    this.listeners = []
    this.dispatch = this.dispatch.bind(this)
    this.getState = this.getState.bind(this)
    this.stateShouldUpdate = this.stateShouldUpdate.bind(this)
    this.stateWillUpdate = this.stateWillUpdate.bind(this)
    this.stateDidUpdate = this.stateDidUpdate.bind(this)
    this.storeDidInitialize = this.storeDidInitialize.bind(this)
    this.storeDidInitialize()
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

  dispatch(action) {
    let currentState = this.state
    const nextState = this.reducer(currentState, action)
    if (!this.stateShouldUpdate(currentState, nextState)) {
      return action
    }
    this.stateWillUpdate(currentState, nextState)
    this.state = Object.assign({}, currentState, nextState)
    const prevState = currentState
    currentState = this.state
    this.stateDidUpdate(prevState, currentState)
    return action
  }

  /**
   * Gets the current state of the application.
   * 
   * @returns {Object} Returns the state.
   */

  getState() {
    return this.state
  }

  /**
   * Adds a listener to be called after state is updated.
   * 
   * @param {Function} listener A function to be called when 
   * state updates. 
   */

  subscribe(listener) {
    this.listeners.push(listener)
  }

  /**
   * Store Lifecycle Methods
   */

  /**
   * Called before the rest of the constructor is run. 
   * This method is intended to be extended by implementations of Store.
   */

  storeWillInitialize() {

  }

  /**
   * Called after the rest of the constructor is run. 
   * This method is intended to be extended by implementations of Store.
   */
  storeDidInitialize() {

  }

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
  stateShouldUpdate(currentState, nextState) {
    return true
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
  stateWillUpdate(currentState, nextState) {

  }

  /**
   * Called after state is updated. This method is intended to be extended by
   * implementations of Store. By default calls all listener methods.
   * 
   * @param {Object} prevState The previous state of the application.
   * 
   * @param {Object} currentState The current state of the application.
   * 
   */
  stateDidUpdate(prevState, currentState) {
    const listeners = this.listeners
    listeners.forEach(listener => {
      listener()
    })
  }

}