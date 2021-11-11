import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//REACT ROUTER DOM
import { BrowserRouter as Router } from 'react-router-dom';

// REDUX STUFF
import store from './context/store';
import { Provider } from 'react-redux';


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);