import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import './index.css';
import redux, { createStore } from 'redux';

const defaultState = {counter: 50}

const counterReducer = (state=defaultState, action) => {
  switch(action.type){
    case "INCREMENT":
      return {counter: state.counter + 1}
    case "DECREMENT":
      return {counter: state.counter - 1}
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
