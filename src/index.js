import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import groceryStore from './store/GroceryStore';

ReactDOM.render(
  <Provider store={groceryStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);


