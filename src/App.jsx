import './App.css';
import React, { useState, lazy, Suspense, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorBoundary';

import LoadingScreen from './LoadingScreen/LoadingScreen';
import NotFound from './NotFound/404NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = lazy(() => import('./Layout/Header'));
const Home = lazy(() => import('./Pages/Home/Home'));
const About = lazy(() => import('./Pages/About/About'));
const Resume = lazy(() => import('./Components/DisplayResume/DisplayResume'));
const Education = lazy(() => import('./Pages/Education/Education'));
const Interest = lazy(() => import('./Pages/Interest/Interest'));
const Skills = lazy(() => import('./Pages/Skills/Skills'));
const Work = lazy(() => import('./Pages/Work/Work'));
const Experience = lazy(() => import('./Pages/Experience/Experience'));
const Blogs = lazy(() => import('./Pages/Blogs/Blogs'));
const Contact = lazy(() => import('./Pages/Contact/Contact'));

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
    }, 1000);

    return () => clearTimeout(timer);
  }, [location]);

  const isResumeRoute = location.pathname === '/resume';

  return (
    <Suspense fallback={<LoadingScreen />}>
      {
        loading ? (
          <LoadingScreen />
        ) : (
          <React.Fragment>
            {!isResumeRoute && <Navbar />}
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/resume" element={<Resume />} />
              <Route exact path="/work" element={<Work />} />
              <Route exact path="/experience" element={<Experience />} />
              <Route exact path="/blogs" element={<Blogs />} />
              <Route exact path="/education" element={<Education />} />
              <Route exact path="/interest" element={<Interest />} />
              <Route exact path="/skills" element={<Skills />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </React.Fragment>
        )
      }
    </Suspense>
  );
}

export default App;
