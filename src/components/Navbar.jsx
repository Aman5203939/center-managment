// React ka useState hook import kar rahe hain sidebar toggle ke liye
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';// Navbar-specific CSS file import ho rahi hai

// Functional component Navbar banaya ja raha hai
const Navbar = () => {

  // Sidebar ke open/close state ke liye React state banaya gaya hai
  const [isOpen, setIsOpen] = useState(false);

  // Sidebar open/close toggle karne ka function
  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Agar open hai to close karo, close hai to open karo
  };

  return (
    <>
      {/*  Top header jisme heading aur hamburger menu icon hai */}
      <header className="navbar-header">
        <h2>Exam Center Management</h2>

        {/* Hamburger icon (3 lines), jisse sidebar toggle hoga */}
        <div className="hamburger" onClick={toggleSidebar}>
          <span></span> {/* Line 1 */}
          <span></span> 
          <span></span> 
        </div>
      </header>

      {/*  Sidebar menu – className dynamically change hota hai open/close ke basis pe */}
      <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          {/* Navigation links – sidebar open hone par link click karne se band bhi ho jata hai */}
          <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
          <li><Link to="/course" onClick={toggleSidebar}>Course</Link></li>
          <li><Link to="/section" onClick={toggleSidebar}>Section</Link></li>
          <li><Link to="/about" onClick={toggleSidebar}>About</Link></li>
          <li><Link to="/signup" onClick={toggleSidebar}>Signup</Link></li>
          <li><Link to="/login" onClick={toggleSidebar}>Login</Link></li>
        </ul>
      </nav>
    </>
  );
};


export default Navbar;
