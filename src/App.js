import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Education from './Components/Education/Education';
import Interest from './Components/Interest/Interest';
import Skills from './Components/Skills/Skills';
import Work from './Components/Projects/Project';
import Experience from './Components/Experience/Experience';
import Blogs from './Components/Blogs/Blogs';
import Contact from './Components/Contact/Contact';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/interest" element={<Interest />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/work" element={<Work />} />
          <Route exact path="/experience" element={<Experience />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
