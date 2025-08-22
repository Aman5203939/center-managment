// react core library import kar rahe hain
import React from 'react';

// react router se components import ho rahe hain navigation ke liye
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Custom components import ho rahe hain
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// Pages (routes) import ho rahi hain
import Home from './pages/Home';
import Course from './pages/Course';
import Section from './pages/Section';
import About from './pages/About';
import Signup from './pages/Signup';
import Login from './pages/Login';
// appspecific CSS file import ho rahi hai
import './App.css';
function App() {
  return (
    // router se pura app route-enabled ban jata hai
    <Router>
      {/* Navbar sabhi pages ke upar rahega */}
      {/* <Navbar /> */}

      <div className="content">
        <Routes>
          {/* Yahan har route ke path aur uska page component diya gaya hai */}
          <Route path="/" element={<Login />} />
          <Route path="/course" element={<Course />} />
          <Route path="/section" element={<Section />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* agar koi route match nahi hota, to Home page dikhayenge */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>

      {/* footer sabhi pages ke niche rahega */}
      <Footer />
    </Router>
  );
}

export default App;
