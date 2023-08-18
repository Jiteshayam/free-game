import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <BrowserRouter>
      <App />
      <ToastContainer/>
      <Toaster/>
    </BrowserRouter>
  </div>
 )
