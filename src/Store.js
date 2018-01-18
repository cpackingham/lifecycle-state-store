export default class Store {

  constructor(reducer, initialState) {
    this.storeWillInitialize = this.storeWillInitialize.bind(this)
    this.storeWillInitialize()
    this.reducer = reducer
    this.state = initialState
    this.dispatch = this.dispatch.bind(this)
    this.getState = this.getState.bind(this)
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

    const prevState = this.state 
    const nextState = this.reducer(prevState, action)
    if(!this.stateShouldUpdate(prevState, nextState)) {
      return null
    }
    this.stateWillUpdate(prevState, nextState)
    this.state = nextState
    this.stateDidUpdate(prevState, nextState)

  }

  getState() {
    return this.state
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

  stateShouldUpdate(prevState, nextState) {
    return true
  }

  stateWillUpdate(prevState, nextState) {

  }

  stateDidUpdate(prevState, nextState) {

  }

}