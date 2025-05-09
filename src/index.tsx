import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Assets/Scss/Custom.scss';
import {} from 'react-router-dom';
import {} from '@tanstack/react-query';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
