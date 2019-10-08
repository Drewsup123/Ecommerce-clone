import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Redux Imports
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './redux/reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(
    reducer,
    applyMiddleware(thunk, logger)
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

