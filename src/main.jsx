import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/index';

import App from './App';
// app style's state context
import AppState from './context/AppState';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppState>
        <Router>
          <App />
        </Router>
      </AppState>
    </Provider>
  </React.StrictMode>
);
