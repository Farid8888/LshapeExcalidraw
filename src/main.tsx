import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {ModalProvider} from './context/ModalContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ModalProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ModalProvider>
  ,
)
