import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import LoanRouter from './components/LoanRouter';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LoanRouter />
  </React.StrictMode>
);
