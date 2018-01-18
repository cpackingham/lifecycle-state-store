import sinon from 'sinon'
import DeepStateUpdate from '../src/DeepStateUpdate'
import {genericReducer} from './helpers/reducers'
import * as ActionTypes from './helpers/actionTypes'

const simpleState = { actionType: ActionTypes.NONE }
const deepState = {actionType: ActionTypes.DEEP_STATE_UPDATE, object: {object: "object"}}

describe('deep state update object', () => {
  it('should create a new store with public API available', () => {
    const store = new DeepStateUpdate(genericReducer, simpleState)
    const methods = Object.keys(store)
    expect(methods.length).toEqual(9)
  })

  it('should update state given valid transformation', () => {
    const store = new DeepStateUpdate(genericReducer, simpleState)
    store.dispatch({type: ActionTypes.TEST})
    expect(store.getState().actionType).toEqual(ActionTypes.TEST)
  })

  it('should update state multiple times', () => {
    const store = new DeepStateUpdate(genericReducer, simpleState)
    store.dispatch({type: ActionTypes.TEST})
    expect(store.getState().actionType).toEqual(ActionTypes.TEST)
    store.dispatch({type: ActionTypes.HELLO})
    expect(store.getState().actionType).toEqual(ActionTypes.HELLO)
  })

  it('should not update when state has not changed', () => {
    const store = new DeepStateUpdate(genericReducer, simpleState)
    let spy = sinon.spy(store, "stateWillUpdate")
    store.dispatch({type: ActionTypes.NONE})
    expect(spy.notCalled).toBeTruthy()
  })

  it('should update deep state', () => {
    const store = new DeepStateUpdate(genericReducer, deepState)
    const update = {object: {object: [1,2,3]}}
    store.dispatch({type: ActionTypes.DEEP_STATE_UPDATE, update})
    expect(store.getState().object).toEqual({object: [1,2,3]})
  })
})