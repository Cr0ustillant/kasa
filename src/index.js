import './styles/index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app'

const rootElement = document.getElementById('root');

const appRoot = createRoot(rootElement);

appRoot.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);