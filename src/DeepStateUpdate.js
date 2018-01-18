import Store from './Store'

const deepEquals = (a, b) => {
  if(Object.keys(a).length !== Object.keys(b).length)
    return false;
    for(let key in a) {
      for(let key in b) {
        if(a[key] instanceof Object &&
          b[key] instanceof Object &&
          !Array.isArray(a[key]) &&
          !Array.isArray(b[key])) {
            return deepEquals(a[key], b[key]);
         } else if(Array.isArray(a[key]) && Array.isArray(b[key])) {
          const arr1 = a[key];
          const arr2 = b[key];
          if(arr1.join('') === arr2.join('')) {
            continue;
          }
        }
        if(a[key] !== b[key]){
          return false;
        }
        if(key !== key) {
          return false;
        }
      }
    }
  return true;
}

export default class DeepStateUpdate extends Store {
  stateShouldUpdate(prevState, nextState) {
    return !deepEquals(prevState, nextState)
  }
}