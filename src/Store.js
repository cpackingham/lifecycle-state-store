export default class Store {

  constructor(reducer, initialState) {
    this.storeWillInitialize = this.storeWillInitialize.bind(this)
    this.storeWillInitialize()
    this.reducer = reducer
    this.state = initialState
    this.dispatch = this.dispatch.bind(this)
    this.getState = this.getState.bind(this)
    this.setStateSafe = this.setStateSafe.bind(this) 
    this.setStateDirect = this.setStateDirect.bind(this)
    this.stateShouldUpdate = this.stateShouldUpdate.bind(this)
    this.stateWillUpdate = this.stateWillUpdate.bind(this)
    this.stateDidUpdate = this.stateDidUpdate.bind(this)
    this.storeDidInitialize = this.storeDidInitialize.bind(this)
    this.storeDidInitialize()
  }

  /*
    Store actions
  */

  dispatch(action) {
    const updatedState = this.reducer(this.getState(), action)

    if(!this.stateShouldUpdate()) {
      return null
    }

    this.stateWillUpdate()

    this.state = updatedState

    this.stateDidUpdate()
  }

  getState() {
    return this.state
  }

  setStateSafe(newState) {
    if(!this.stateShouldUpdate()) {
      return false
    }
    this.stateWillUpdate()
    this.setStateDirect(newState)
    this.stateDidUpdate()
  }

  setStateDirect(newState) {
    this.state = newState
  }

  /* 
    Store lifecycle methods
  */

  storeWillInitialize() {

  }

  storeDidInitialize() {

  }

  /*
    State lifecycle methods
  */

  stateDidUpdate() {

  }

  stateWillUpdate() {

  }

  stateShouldUpdate() {
    return true
  }

}