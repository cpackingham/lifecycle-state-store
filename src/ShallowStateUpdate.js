import Store from './Store'

const getType = (element) => {
  return Object.prototype.toString.call(elem)
}


export default class ShallowStateUpdate extends Store{

  stateShouldUpdate(currentState, nextState) {
    for(let key in currentState) {
      if(currentState[key] !== nextState[key]) {
        return true
      }
    }
    return false
  }

}