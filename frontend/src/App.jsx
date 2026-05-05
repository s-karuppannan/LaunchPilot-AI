import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import { SessionProvider } from './context/SessionProvider'
import ErrorBoundary from './shared/ErrorBoundary'
import HomePage from './homepage/HomePage'
import DashboardPage from './dashboard/DashboardPage'

function App() {
  return (
    <ErrorBoundary>
      <SessionProvider>
        <AppProvider>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
          </Router>
        </AppProvider>
      </SessionProvider>
    </ErrorBoundary>
  )
}

export default App
