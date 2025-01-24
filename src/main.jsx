import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "modern-normalize";
import './index.css'
import { BrowserRouter } from "react-router-dom";
import App from './components/App/App'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
