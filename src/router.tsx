import { Routes, Route } from 'react-router-dom'

// Import Pages
import HomePage from './pages/HomePage'
import AppPage from './pages/AppPage'

// Not Found
import NotFoundPage from './pages/NotFoundPage'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/apps" element={<AppPage />} />

      {/* 404 catch-all route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}