import React from 'react'
import ReactDOM from 'react-dom'
import {Store} from 'lifecycle-state-store'
import Counter from './components/Counter'
import counter from './reducers'

const store = new Store(counter, {count: 0})
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Counter
    value={store.getState().count}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  rootEl
)

render()
store.subscribe(render)

