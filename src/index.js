import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import './index.css';
import { createStore } from 'redux';

const defaultState = {counters: [0,10,3,0, 0, 9 , 88]}

const counterReducer = (state=defaultState, action) => {
  console.log('this is inside the counterReducer')
  console.log(state)
  console.log(action)


  switch(action.type){
    case "INCREMENT":
      let newCounters = state.counters.slice()
      newCounters[action.index] += 1
      return {counters: newCounters}
    case "DECREMENT":
      newCounters = state.counters.slice()
      newCounters[action.index] -= 1
      return {counters: newCounters}
    default:
      return state;
  }
}

const store = createStore(counterReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// action is a object with a type property
// i.e. {type: 'DECREMENT'}
