import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the change in import
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root

root.render(
  <Router>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </Router>
);
