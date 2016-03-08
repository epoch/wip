import React from 'react';
import ReactDOM from 'react-dom';
import { App, NavTo } from './containers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { navigate } from './actions';
import appReducer from './reducers';
import './style.css';


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
