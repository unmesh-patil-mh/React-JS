import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
  // Strict mode agar on raha to vo humhare page ko do baar run karta hai development ke liye ye humha on rakhna bss iss code ke liye off
)
