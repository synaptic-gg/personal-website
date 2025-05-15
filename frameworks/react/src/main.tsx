import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app.css'
import App from './App.tsx'

createRoot(document.getElementById('react')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
