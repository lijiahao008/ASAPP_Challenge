//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  window.store = store;
  const root = document.getElementById('root');
  if (root) {
    ReactDOM.render(<Root store={store}/>, root);
  }
});
