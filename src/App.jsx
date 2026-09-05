import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ErrorFallback from "./ErrorBoundary";
import Navbar from "./components/layout/Navbar";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About/About";
import Work from "./Pages/Work/Work";
import Experience from "./Pages/Experience/Experience";
import Contact from "./Pages/Contact/Contact";
import Skills from "./Pages/Skills/Skills";
import Education from "./Pages/Education/Education";
import Interest from "./Pages/Interest/Interest";
import Blogs from "./Pages/Blogs/Blogs";
import Synergy from "./Pages/Synergy/Synergy";

const App = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <AppRoutes />
      </ErrorBoundary>
    </BrowserRouter>
  );
};

const AppRoutes = () => {
  return (
    <div className="app">
      <div className="page-background" />

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/interest" element={<Interest />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/synergy" element={<Synergy />} />
          <Route path="/404" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </main>

      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#111318",
            color: "#f5f7fa",
            border: "1px solid rgba(255,255,255,0.09)",
          },
        }}
      />
    </div>
  )
}

export default App;