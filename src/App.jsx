import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('./Home'))
const Contact = lazy(() => import('./Contact'))
const About = lazy(() => import('./About'))
const Platform = lazy(() => import('./Platform'))
const Services = lazy(() => import('./Services'))
const MetasploitFramework = lazy(() => import('./MetasploitFramework'))
const AiCybersecurityConsulting = lazy(() => import('./AiCybersecurityConsulting'))
const AiSecurityTools = lazy(() => import('./AiSecurityTools'))

// Loading component for Suspense
const PageLoader = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#111' }}>
    <div className="spinner-border text-info" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/metasploit-framework" element={<MetasploitFramework />} />
          <Route path="/services/ai-cybersecurity-consulting" element={<AiCybersecurityConsulting />} />
          <Route path="/services/ai-security-tools-automation" element={<AiSecurityTools />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
