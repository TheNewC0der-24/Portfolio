import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
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
import NotFound from "./NotFound/NotFound";
import Footer from "./components/layout/Footer";
import ViewResume from "./Pages/Resume/Resume";

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
  const location = useLocation();
  const pathname = location.pathname;

  const showNavbarAndFooter = [
    "/",
    "/about",
    "/work",
    "/experience",
    "/contact",
    "/skills",
    "/education",
    "/interest",
    "/blogs",
    "/synergy",
    "/resume",
  ].includes(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="app">
      <div className="page-background" />

      {showNavbarAndFooter && <Navbar />}

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
          <Route path="/resume" element={<ViewResume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {showNavbarAndFooter && <Footer />}

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