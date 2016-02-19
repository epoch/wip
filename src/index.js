import React from 'react';
import ReactDOM from 'react-dom';
import { App, NavTo } from './containers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './style.css';

var reducer = (prevState = { page: 'home' }, action) => {
  switch (action.type) {
    case 'GOTO_VIEW':
      return Object.assign({}, prevState, { page: action.page });
    default:
      return prevState;
  }
}

let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
