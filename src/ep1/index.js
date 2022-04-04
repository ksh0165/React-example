import React from 'react';
import {createRoot}  from 'react-dom/client';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {reducer } from './reducers';

const store = createStore(reducer);
const root = createRoot(document.getElementById("root"))
root.render
(
  <Provider store={store}>
    <App />
  </Provider>
)
