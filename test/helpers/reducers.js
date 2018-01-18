import ShallowStateUpdate from '../../src/ShallowStateUpdate';

export function genericReducer(state, action) {
  let updatedState;
  switch (action.type) {
    case "TEST":
      updatedState = Object.assign({}, state, { actionType: action.type })
      return updatedState
    case "HELLO":
      updatedState = Object.assign({}, state, { actionType: action.type })
      return updatedState
    default: 
      updatedState = Object.assign({}, state, { actionType: action.type })
      return updatedState
  }
}