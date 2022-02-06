import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ErrorBoundary from './components/ErrorBoundary';
import './index.css';
import App from './App';

import store from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root'),
);
