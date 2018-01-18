import ShallowStateUpdate from '../src/ShallowStateUpdate'
import { genericReducer } from './helpers/reducers'
import sinon from 'sinon'

const simpleState = { actionType: "NONE" }

describe('shallow state update object', () => {
  it('should create a new store with public API available', () => {
    const store = new ShallowStateUpdate(genericReducer, simpleState)
    const methods = Object.keys(store)
    expect(methods.length).toEqual(9)
  })

  it('should update state given valid transformation', () => {
    const store = new ShallowStateUpdate(genericReducer, simpleState)
    store.dispatch({type: "TEST"})
    expect(store.getState().actionType).toEqual("TEST")
  })

  it('should update state multiple times', () => {
    const store = new ShallowStateUpdate(genericReducer, simpleState)
    store.dispatch({type: "TEST"})
    expect(store.getState().actionType).toEqual("TEST")
    store.dispatch({type: "HELLO"})
    expect(store.getState().actionType).toEqual("HELLO")
  })

  it('should not update when state has not changed', () => {
    const store = new ShallowStateUpdate(genericReducer, simpleState)
    let spy = sinon.spy(store, "stateWillUpdate")
    store.dispatch({type: "NONE"})
    expect(spy.notCalled).toBeTruthy()
  })
})