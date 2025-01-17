import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home'; // Import Home component
import '../styles/index.css'; // Import index.css

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
