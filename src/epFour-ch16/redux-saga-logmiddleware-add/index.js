import React from 'react';
import {createRoot}  from 'react-dom/client';
import { createStore , applyMiddleware} from 'redux';
import App from './containers/App';
import { reducer,rootSaga } from './reducers';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,applyMiddleware(logger,sagaMiddleware));
const root = createRoot(document.getElementById("root"))
sagaMiddleware.run(rootSaga);
root.render
(
    <Provider store={store}>
        <App />
    </Provider>
)