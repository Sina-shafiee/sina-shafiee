import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
// app style's state context
import AppState from './context/AppState';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppState>
      <Router>
        <App />
      </Router>
    </AppState>
  </React.StrictMode>
);
