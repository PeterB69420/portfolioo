import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Index from './pages/Index'
import Projects from './pages/Projects';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/Projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
