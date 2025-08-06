// Login.jsx
import React, { useState } from "react";

function Login() {
  // Login form ke liye state banaya
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [role, setRole] = useState("student");
  // Input handle karne ka function
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  // Login submit hone par yahan role aur data check hoga
  const handleLogin = (e) => {
    e.preventDefault();

   if (role === "admin") {
  alert(`Admin logged in: ${loginData.username}`);
} else {
  alert(`Student logged in: ${loginData.username}`);
}
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <label>Username:</label><br />
        <input type="text" name="username" value={loginData.username} onChange={handleChange} /><br />

        <label>Password:</label><br />
        <input type="password" name="password" value={loginData.password} onChange={handleChange} /><br />

        <label>Role:</label><br />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select><br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;