// React aur useState import
import React, { useState } from "react";
// Page navigation ke liye
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../App.css";


function Signup() {
  const navigate = useNavigate();

  // Form data store karne ke liye state
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    role: "student",
  });

  // Input change handle
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Signup submit handle
  const handleSignup = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user already exists
    const userExists = users.some(
      (user) =>
        user.email === formData.email || user.username === formData.username
    );

    if (userExists) {
      alert(" Email ya Username pehle se registered hai!");
      return;
    }

    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users)); //data push ho raha he  local storage

    alert(" Signup successful!");
    navigate("/login"); 
  };

  return (
    <div className="signup">
      <div className="box">
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <label>Email:</label><br />
  <input
   type="email"
     name="email"
     placeholder="Enter your email"
     value={formData.email}
     onChange={handleChange}
    required
   /><br />

  <label>Username:</label><br />
   <input
    type="text"
     name="username"
    placeholder="Enter username"
    value={formData.username}
    onChange={handleChange}
    required
    /><br />

    <label>Password:</label><br />
   <input
    type="password"
     name="password"
      placeholder="Enter password"
      value={formData.password}
       onChange={handleChange}
     required
    /><br />

     <label>Role:</label><br />
     <select name="role" value={formData.role} onChange={handleChange}>
      <option value="student">Student</option>
      <option value="admin">Admin</option>
      </select><br /><br />

          <button type="submit">Signup</button>
          {/* Signup ke niche login ka link de rahe hain */}
          
      <p>
        Already have an account?{" "}
        <Link to="/login">Login here</Link>
      </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
