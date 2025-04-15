import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { store } from 'config/store'

import { RoutesAdmin } from 'pages/navigator/routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RoutesAdmin /> 
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
