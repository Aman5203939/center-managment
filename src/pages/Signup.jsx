import React, { useState } from "react";

function Signup() {
  // State banaya user data store karne ke liye
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "student", // default role student hoga
  });
  // Input change handle karne ka function
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // Form submit hone par data console me print hoga
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    alert("Signup successful!");
  };

  return (
    <div>
      <h2>Signup Page</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label><br />
        <input type="text" name="username" value={formData.username} onChange={handleChange} /><br />

        <label>Password:</label><br />
        <input type="password" name="password" value={formData.password} onChange={handleChange} /><br />

        <label>Role:</label><br />
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select><br /><br />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
