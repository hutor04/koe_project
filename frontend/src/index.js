import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {createStore } from 'redux';
import { Provider } from 'react-redux';
 import rootReducer from './reducer/rootReducer';
 
const store = createStore(rootReducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
document.getElementById('root'),
);
