import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout.tsx'
import About from './component/About.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <App />
  </StrictMode>,

)
