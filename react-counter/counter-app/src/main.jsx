import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Todos from './Todos.jsx'
import CheckUseEffect from './CheckUseEffect';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CheckUseEffect />
  </StrictMode>,
)
