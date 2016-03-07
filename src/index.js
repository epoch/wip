import React from 'react';
import ReactDOM from 'react-dom';
import { App, NavTo } from './containers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { gotoView } from './actions';
import './style.css';

var reducer = (prevState = { path: 'home' }, action) => {
  switch (action.type) {
    case 'GOTO_VIEW':
      return Object.assign({}, prevState, { path: action.path });
    default:
      return prevState;
  }
}

let store = createStore(reducer);

window.addEventListener('hashchange', function() {
  store.dispatch(gotoView(window.location.hash.slice(1)));
}, false);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
