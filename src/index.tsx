import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ProviderContext } from './contexts/Context';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ProviderContext>
      <App />
    </ProviderContext>
  </React.StrictMode>
);
