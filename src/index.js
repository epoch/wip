import React from 'react';
import ReactDOM from 'react-dom';
import { App, NavTo } from './containers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { navigate } from './actions';
import './style.css';

var route = (prevState = { path: 'home' }, action) => {
  switch (action.type) {
    case 'NAVIGATE':
      return Object.assign({}, prevState, { path: action.path });
    default:
      return prevState;
  }
}

function appReducer(state = {}, action) {
  return {
    route: route(state.route, action)
  }
}

let store = createStore(appReducer);

window.addEventListener('hashchange', function() {
  store.dispatch(navigate(window.location.hash.slice(1)));
}, false);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
