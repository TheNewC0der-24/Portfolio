import './App.css';
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorBoundary';

import NotFound from './NotFound/404NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './Layout/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Resume from './Components/DisplayResume/DisplayResume';
import Education from './Pages/Education/Education';
import Interest from './Pages/Interest/Interest';
import Skills from './Pages/Skills/Skills';
import Work from './Pages/Work/Work';
import Experience from './Pages/Experience/Experience';
import Blogs from './Pages/Blogs/Blogs';
import BlogPost from './Pages/Blogs/BlogPost';
import Contact from './Pages/Contact/Contact';

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

  const isResumeRoute = location.pathname === '/resume';

  return (
    <React.Fragment>
      {!isResumeRoute && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/work" element={<Work />} />
        <Route exact path="/experience" element={<Experience />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/blog/:slug" element={<BlogPost />} />
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
  );
}

export default App;
