import ShallowStateUpdate from '../src/ShallowStateUpdate'
import { genericReducer } from './helpers/reducers'
import sinon from 'sinon'
import * as ActionTypes from './helpers/actionTypes'

const simpleState = { actionType: ActionTypes.NONE }

describe('shallow state update object', () => {
  it('should create a new store with public API available', () => {
    const store = new ShallowStateUpdate(genericReducer, simpleState)
    const methods = Object.keys(store)
    expect(methods.length).toEqual(10)
  })

  it('should update state given valid transformation', () => {
    const store = new ShallowStateUpdate(genericReducer, simpleState)
    store.dispatch({type: ActionTypes.TEST})
    expect(store.getState().actionType).toEqual(ActionTypes.TEST)
  })

  it('should update state multiple times', () => {
    const store = new ShallowStateUpdate(genericReducer, simpleState)
    store.dispatch({type: ActionTypes.TEST})
    expect(store.getState().actionType).toEqual(ActionTypes.TEST)
    store.dispatch({type: ActionTypes.HELLO})
    expect(store.getState().actionType).toEqual(ActionTypes.HELLO)
  })

  it('should not update when state has not changed', () => {
    const store = new ShallowStateUpdate(genericReducer, simpleState)
    let spy = sinon.spy(store, "stateWillUpdate")
    store.dispatch({type: ActionTypes.NONE})
    expect(spy.notCalled).toBeTruthy()
  })
})