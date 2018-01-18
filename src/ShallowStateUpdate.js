function getType(element) {
  return Object.prototype.toString.call(elem)
}

export default class ShallowStateUpdate {
  constructor(prevState, updatedState, changedFields) {
    this.prevState = prevState
    this.updatedState = updatedState
    this.changedFields = changedFields
    this.hasChanged = this.hasChanged.bind(this)
    this.hasChangedTypes = this.hasChangedTypes.bind(this)
    this.getUpdatedState = this.getUpdatedState.bind(this)
    this.getPrevState = this.getPrevState.bind(this)
    this.getChangedFields = this.getChangedFields.bind(this)
  }

  hasChanged() {
    this.changedFields.length !== 0 ? true : false
  }

  hasChangedTypes() {
    let changedFields = this.getChangedFields()
    let updatedState = this.getUpdatedState()
    let prevState = this.getPrevState()
    for(let key in changedFields) {
      if(getType(updatedState[key]) !== getType(prevState[key])) {
        return true
      }
    }
    return false
  }

  getUpdatedState() {
    return this.updatedState
  }

  getPrevState() {
    return this.prevState
  }

  getChangedFields() {
    return this.changedFields
  }

}