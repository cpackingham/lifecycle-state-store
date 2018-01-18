import Store from '../src/Store'

import {genericReducer} from './helpers/reducers'

const simpleState = { actionType: "" };

describe('createStore', () => {
  it('should create a new store with public API available', () => {
    const store = new Store(genericReducer, simpleState)
    const methods = Object.keys(store)

    expect(methods.length).toEqual(11)

  })

  it('should update state given valid transformation', () => {
    const store = new Store(genericReducer, simpleState)
    store.dispatch({type: "TEST"})
    expect(store.getState().actionType).toEqual("TEST")
  })

  it('should update state multiple times', () => {
    const store = new Store(genericReducer, simpleState)
    store.dispatch({type: "TEST"})
    expect(store.getState().actionType).toEqual("TEST")
    store.dispatch({type: "HELLO"})
    expect(store.getState().actionType).toEqual("HELLO")
  })
})