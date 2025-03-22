import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './i18n';

import App from './App';
import store from './store/store';
import { FeatureFlagProvider } from './contexts/FeatureFlagContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <FeatureFlagProvider>
        <App />
      </FeatureFlagProvider>
    </Provider>
  </React.StrictMode>,
);
