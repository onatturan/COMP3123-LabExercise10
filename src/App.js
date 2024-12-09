import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Redux ile ilgili importlar
import { Provider } from 'react-redux';
import store from './redux/store'; // Store'unuzu oluşturacağınız dosyadan import edin

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Provider ile uygulamayı sarmalayarak Redux Store'u sağlıyoruz */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Performans ölçümü için
reportWebVitals();
