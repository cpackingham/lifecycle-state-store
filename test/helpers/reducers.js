import ShallowStateUpdate from '../../src/ShallowStateUpdate'
import * as ActionTypes from './actionTypes'

export function genericReducer(state, action) {
  let updatedState;
  switch (action.type) {
    case ActionTypes.TEST:
      updatedState = Object.assign({}, state, { actionType: action.type })
      return updatedState
    case ActionTypes.HELLO:
      updatedState = Object.assign({}, state, { actionType: action.type })
      return updatedState
    case ActionTypes.DEEP_STATE_UPDATE:
      updatedState = Object.assign({}, state, action.update)
      return updatedState
    case ActionTypes.NONE:
      updatedState = Object.assign({}, state, {actionType: action.type})
      return updatedState
    default: 
      return state
  }
}