import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
import { Provider } from 'react-redux';

const store = configureStore({ reducer });

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
)
