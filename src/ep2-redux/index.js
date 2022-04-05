import React from 'react';
import {createRoot}  from 'react-dom/client';
import App from './containers/App';
import {reducer } from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducer);
const root = createRoot(document.getElementById("root"))
root.render
(
    <Provider store={store}>
    <App />
    </Provider>
)
