// React ka useState hook import kar rahe hain sidebar toggle ke liye
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Functional component Navbar banaya ja raha hai
const Navbar = () => {
  // Sidebar ke open/close state ke liye React state banaya gaya hai
  const [isOpen, setIsOpen] = useState(false);

  // Sidebar open/close toggle karne ka function
  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Agar open hai to close karo, close hai to open karo
  };

  // React Router ka navigate hook use kar rahe hain redirect ke liye
  const navigate = useNavigate();

  // localStorage me user data check kar rahe hain
  const user = localStorage.getItem("user");

  // logout ke liye function – user data remove hoga aur login page par bhej dega
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login"); 
  };

  return (
    <>
      {/*  top header jisme heading aur hamburger menu icon hai */}
      <header className="navbar-header">

        {/* hamburger icon  jisse sidebar toggle hoga */}
        <div className="hamburger" onClick={toggleSidebar}>
          <span></span> {/* Line 1 */}
          <span></span> 
          <span></span> 
        </div>
        <h2 className="navbar-title">Exam Center Management</h2>
        
      </header>

      {/*  Sdebar menu className dynamically change hota hai open/close ke basis pe */}
      <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          {/* Navigation links – sidebar open hone par link click karne se band bhi ho jata hai */}
          <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
          <li><Link to="/course" onClick={toggleSidebar}>Course</Link></li>
          <li><Link to="/section" onClick={toggleSidebar}>Section</Link></li>
          <li><Link to="/about" onClick={toggleSidebar}>About</Link></li>

          {/* agar user login hai to logout button dikhana hai, warna Login/Signup */}
       {user ? (
  <li>
    <span className="logout-span" onClick={handleLogout}>
      Logout
    </span>
  </li>
) : (
            <li><Link to="/login" onClick={toggleSidebar}>Login / Signup</Link></li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
