import React, { useState, lazy, Suspense, useEffect } from 'react';

import {
  BrowserRouter as Router, Routes, Route, useLocation
} from 'react-router-dom';

import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorBoundary';
import './App.css';

import LoadingScreen from './LoadingScreen/LoadingScreen';

const Navbar = lazy(() => import('./Components/Navbar/Navbar'));
const Home = lazy(() => import('./Components/Home/Home'));
const About = lazy(() => import('./Components/About/About'));
const Education = lazy(() => import('./Components/Education/Education'));
const Interest = lazy(() => import('./Components/Interest/Interest'));
const Skills = lazy(() => import('./Components/Skills/Skills'));
const Work = lazy(() => import('./Components/Projects/Project'));
const Experience = lazy(() => import('./Components/Experience/Experience'));
const Blogs = lazy(() => import('./Components/Blogs/Blogs'));
const Contact = lazy(() => import('./Components/Contact/Contact'));

function App() {
  return (
    <Router>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          window.location.href = '/';
        }}
      >
        <AppContent />
      </ErrorBoundary>
    </Router>
  );
}

function AppContent() {

  const [loading, setLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <Suspense fallback={<LoadingScreen />}>
      {
        loading ? (
          <LoadingScreen />
        ) : (
          <React.Fragment>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/work" element={<Work />} />
              <Route exact path="/experience" element={<Experience />} />
              <Route exact path="/blogs" element={<Blogs />} />
              <Route exact path="/education" element={<Education />} />
              <Route exact path="/interest" element={<Interest />} />
              <Route exact path="/skills" element={<Skills />} />
              <Route exact path="/contact" element={<Contact />} />
            </Routes>
          </React.Fragment>
        )
      }
    </Suspense>
  );
}

export default App;
