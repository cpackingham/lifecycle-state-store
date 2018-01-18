import Store from '../src/Store'
import {genericReducer} from './helpers/reducers'
import * as ActionTypes from './helpers/actionTypes'
import sinon from 'sinon'

const simpleState = { actionType: ActionTypes.NONE }

describe('createStore', () => {
  it('should create a new store with public API available', () => {
    const store = new Store(genericReducer, simpleState)
    const methods = Object.keys(store)
    expect(methods.length).toEqual(10)
  })

  it('should update state given valid transformation', () => {
    const store = new Store(genericReducer, simpleState)
    store.dispatch({type: ActionTypes.TEST})
    expect(store.getState().actionType).toEqual(ActionTypes.TEST)
  })

  it('should update state multiple times', () => {
    const store = new Store(genericReducer, simpleState)
    store.dispatch({type: ActionTypes.TEST})
    expect(store.getState().actionType).toEqual(ActionTypes.TEST)
    store.dispatch({type: ActionTypes.HELLO})
    expect(store.getState().actionType).toEqual(ActionTypes.HELLO)
  })

  it('should allow subscription', () => {
    const store = new Store(genericReducer, simpleState)
    let spy = sinon.spy()
    store.subscribe(spy)
    store.dispatch({type: ActionTypes.TEST})
    expect(spy.calledOnce).toBeTruthy()
  })
})