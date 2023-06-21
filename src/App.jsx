import React from 'react';
import Navbar from './Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar/>
      <h1>My App is so simple</h1>
      <p>This is the only thing I have in the whole app so far</p>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;