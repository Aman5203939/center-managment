import React, { useState } from "react";
// page navigation ke liye
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../App.css";

function Login() {
  const navigate = useNavigate();

  // login form data store
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  // input change handle
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // login submit handle
  const handleLogin = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // check valid user
    const validUser = users.find(
      (user) =>
        user.username === loginData.username &&
        user.password === loginData.password
    );

    if (validUser) {
      // yahan par user ko store kar rahe hain
      localStorage.setItem("user", JSON.stringify(validUser));

      // agar role system future me chahiye to ye uncomment kar lena
      /*
      if (validUser.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/student");
      }
      */

      //abhi ke liye direct home page bhejna hai== tempray 
      navigate("/home");
      } else {
    
    alert("Invalid Username or Password!");
    } 
  };

  return (
    <div className="login">
      <div className="box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          {/* username input */}
          <label>Username:</label><br />
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={loginData.username}
            onChange={handleChange}
            required
          /><br />

          {/* password input */}
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={loginData.password}
            onChange={handleChange}
            required
          /><br />

          <button type="submit">Login</button>

          {/* signup ka link */}
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
