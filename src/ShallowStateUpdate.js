import Store from './Store'

const getType = (element) => {
  return Object.prototype.toString.call(elem)
}


export default class ShallowStateUpdate extends Store{

  stateShouldUpdate(prevState, nextState) {
    console.log("prevState", prevState)
    console.log("nextState", nextState)
    for(let key in prevState) {
      if(prevState[key] !== nextState[key]) {
        return true
      }
    }
    return false
  }

}