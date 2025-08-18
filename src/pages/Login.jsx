import React, { useState } from "react";
// Page navigation ke liye
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../App.css";

function Login() {
  const navigate = useNavigate();

  // Login form data store
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  // Input change handle
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // Login submit handle
  const handleLogin = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check valid user
    const validUser = users.find(
      (user) =>
        user.username === loginData.username &&
        user.password === loginData.password
    );

    if (validUser) {
     localStorage.setItem("user", JSON.stringify({ username: loginData.username }));//yaha line logaout vale user ko localStorage me store kar rahe hain

      // Role ke hisaab se navigate
      if (validUser.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/student");
      }
    } else {
      (" ");
    } 
  };

  return (
    <div className="login">
      <div className="box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          {/* Username input */}
   <label>Username:</label><br />
   <input
   type="text"
   name="username"
  placeholder="Enter username"
    value={loginData.username}
    onChange={handleChange}
     required
  /><br />

   {/* Password input */}
   <label>Password:</label><br />
     <input
     type="password"
       name="password"
    placeholder="Enter password"
     value={loginData.password}
     onChange={handleChange}
z    /><br />

    <button type="submit">Login</button>
    {/*yaha ham login ke niche signup ka link de rahe he */} 
    <p>
        Not registered yet?{" "}
        <Link to="/signup">Signup here</Link>
      </p>  
           </form>
      </div>
    </div>
  );
}

export default Login;
