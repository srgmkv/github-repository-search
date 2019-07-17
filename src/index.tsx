import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga";
import reducers from './reducers';
import apiSaga from './sagas/api-saga';

const initialiseSagaMiddleware = createSagaMiddleware();


const store = createStore(
  reducers, composeWithDevTools(
    applyMiddleware(initialiseSagaMiddleware)
));

initialiseSagaMiddleware.run(apiSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
