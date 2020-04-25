import React from 'react';
import App from './app';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import switchAppReducer from './reducer';
import {createStore, combineReducers,compose,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

let store = createStore(combineReducers({
    switchApp:switchAppReducer

}),compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension?window.devToolsExtension():f=>f
));

render(
    <Provider store = {store}>
        <App/>
    </Provider>,document.getElementById('root'))