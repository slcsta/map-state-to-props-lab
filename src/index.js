import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// use the createStore method from redux passing in the provided reducer, manageUsers to create a store

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import manageUsers from './reducers/manageUsers';


// add imports and code
let store = createStore(manageUsers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// use Provider from react-redux to wrap <App /> passing store as a prop to the Provider this will give your components access to the store

ReactDOM.render(
  // add imports and code
  <Provider store={store}>
  <App />
  </Provider>
  // add imports and code
  ,
  document.getElementById('root')
);
