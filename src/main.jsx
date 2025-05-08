import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Index from './pages/Index'
import Projects from './pages/projects'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
