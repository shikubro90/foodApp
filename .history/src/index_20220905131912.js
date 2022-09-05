import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {AnimatePresence} from 'framer-motion'
import App from './App'

import {BrowserRouter} from 'react-router-dom'

import 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AnimatePresence>
      <App />
    </AnimatePresence>
    </BrowserRouter>
  </React.StrictMode>
);
