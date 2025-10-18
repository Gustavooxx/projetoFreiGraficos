import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import Website from './pages/home/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Website />
  </StrictMode>,
)
