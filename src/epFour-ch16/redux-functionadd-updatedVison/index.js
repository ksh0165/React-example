import React from 'react';
import {createRoot}  from 'react-dom/client';
import { createStore } from 'redux';
import App from './containers/App';
import { reducer } from './reducers';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
const store = createStore(reducer,composeWithDevTools());
const root = createRoot(document.getElementById("root"))
root.render
(
    <Provider store={store}>
        <App />
    </Provider>
)