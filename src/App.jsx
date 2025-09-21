// react core library import kar rahe hain
import React from 'react';

// react router se components import ho rahe hain navigation ke liye
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// custom components import ho rahe hain
import Footer from './components/Footer'; 
// pages (routes) import ho rahi hain
import Home from './pages/Home';
import Course from './pages/Course';   
import Section from './pages/Section';   
import About from './pages/About';      
import Signup from './pages/Signup';     
import Login from './pages/Login';
import Admin from './pages/Admin';
import Student from './pages/Student';

// appspecific CSS file import ho rahi hai
import './App.css';

// PrivateRoute component banaya gaya hai jo check karega ki user login hai ya nahi
const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user")); 
  return user ? children : <Navigate to="/login" />;
};

// RoleRoute component banaya gaya hai jo check karega ki user ka role admin ya student hai
const RoleRoute = ({ children, role }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user && user.role === role ? children : <Navigate to="/home" />;
};

function App() {
  return (
    // Router se pura app route-enabled ban jata hai
    <Router>
      {/* Navbar sabhi pages ke upar rahega */}
      {/* <Navbar /> */}

      <div className="content">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected routes (login ke baad access) */}
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/course" element={<PrivateRoute><Course /></PrivateRoute>} />
          <Route path="/section" element={<PrivateRoute><Section /></PrivateRoute>} />
          <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />

          {/* Role-based routes */}
          <Route path="/admin" element={<RoleRoute role="admin"><Admin /></RoleRoute>} />
          <Route path="/student" element={<RoleRoute role="student"><Student /></RoleRoute>} />

          {/* Agar koi route match nahi hota, to Home page dikhayenge */}
          <Route path="*" element={<PrivateRoute><Home /></PrivateRoute>} />
        </Routes>
      </div>

      {/* Footer sabhi pages ke niche rahega */}
      <Footer />
    </Router>
  );
}

export default App;
