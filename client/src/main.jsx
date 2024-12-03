import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux";
import { store } from './Redux/store.js';
import {Toaster} from 'react-hot-toast';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Toaster/>
      <ToastContainer/>
    </Provider>
  </React.StrictMode>,
)
