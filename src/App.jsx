// React core library import kar rahe hain
import React from 'react';

// React Router se components import ho rahe hain navigation ke liye
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Custom components import ho rahe hain
import Navbar from './components/Navbar'; // Top navigation bar
import Footer from './components/Footer'; // Bottom footer

// Pages (routes) import ho rahi hain
import Home from './pages/Home';         // Home page
import Course from './pages/Course';     // Course page
import Section from './pages/Section';   // Section page
import About from './pages/About';       // About Us page
import Signup from './pages/Signup';     
import Login from './pages/Login';
// App-specific CSS file import ho rahi hai
import './App.css';
function App() {
  return (
    // Router se pura app route-enabled ban jata hai
    <Router>
      {/* Navbar sabhi pages ke upar rahega */}
      <Navbar />

      <div className="content">
        <Routes>
          {/* Yahan har route ke path aur uska page component diya gaya hai */}
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/section" element={<Section />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} />
          {/* Agar koi route match nahi hota, to Home page dikhayenge */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>

      {/* Footer sabhi pages ke niche rahega */}
      <Footer />
    </Router>
  );
}

export default App;
