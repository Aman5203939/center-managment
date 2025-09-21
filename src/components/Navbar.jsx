import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [user, setUser] = useState(null); // track user reactively
  const navigate = useNavigate();

  useEffect(() => {
    // Load user info from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null); // update state
    navigate("/login");
  };

  return (
    <>
      <header className={`navbar-header ${isOpen ? "shifted" : ""}`}>
        <div className="hamburger" onClick={toggleSidebar}>
          <span></span> 
          <span></span> 
          <span></span> 
        </div>
        <h2 className="navbar-title">Exam Center Management</h2>
      </header>

      <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          {/* Home route depends on login */}
          <li>
            <Link to={user ? "/home" : "/login"}>Home</Link>
          </li>
          <li><Link to="/course">Course</Link></li>
          <li><Link to="/section">Section</Link></li>
          <li><Link to="/about">About</Link></li>

          {user ? (
            <li>
              <span className="logout-span" onClick={handleLogout}>
                Logout
              </span>
            </li>
          ) : (
            <li><Link to="/login">Login / Signup</Link></li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
