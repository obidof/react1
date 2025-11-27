import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/Home.jsx'
import React from 'react'
import { Toaster } from 'react-hot-toast'
import Root from './Root.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Root />
      <Toaster />
    </BrowserRouter>
  </StrictMode>,
)
