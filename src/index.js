import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//REACT ROUTER DOM
import { BrowserRouter as Router } from 'react-router-dom';

// REDUX STUFF
import store from './context/store';
import { Provider } from 'react-redux';

//REACT CONTETX STUFF
import { UiContextProvider } from './context/react-context/context';


ReactDOM.render(
  <Provider store={store}>
    <UiContextProvider>
      <Router>
        <App />
      </Router>
    </UiContextProvider>
  </Provider>,
  document.getElementById('root')
);