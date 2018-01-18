import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter'
import './index.css';
import {Store} from 'lifecycle-state-store'
import {reducer} from './reducers/index'

const store = new Store(reducer, {count: 0})

ReactDOM.render(
<Counter 
  value={store.getState().count}
  onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
  onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
/>, document.getElementById('root'));

