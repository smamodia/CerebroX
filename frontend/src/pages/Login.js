import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/login.css";
import Vid from '../travelAssets/loginPg/traval_planer (1).mp4';
import { UserContext } from "../UserContext"; // Context for managing global user state

const API_BASE_URL = "http://localhost:5000/api/auth";
const REGISTER_URL = `${API_BASE_URL}/register`;
const LOGIN_URL = `${API_BASE_URL}/login`;

function Login_Pg() {
  const [view, setView] = useState("login");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({ firstname: "", lastname: "", email: "", password: "" });

  const { setUser } = useContext(UserContext); // Access global user state
  const navigate = useNavigate(); // Hook for navigation

  // Handle input changes
  const handleInputChange = (e, type) => {
    const { name, value } = e.target;
    if (type === "login") setLoginData({ ...loginData, [name]: value });
    if (type === "register") setRegisterData({ ...registerData, [name]: value });
  };

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(LOGIN_URL, loginData);
      alert("Login Successful!");
      localStorage.setItem("token", response.data.token); // Save token in local storage
      setUser({ firstname: response.data.user.firstname, email: response.data.user.email }); // Update global user state
      navigate("/"); // Navigate to home page
    } catch (err) {
      alert(err.response?.data?.message || "Error logging in");
    }
  };
  

  // Handle registration
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(REGISTER_URL, registerData);
      alert("Registration Successful!");
    } catch (err) {
      alert(err.response?.data?.message || "Error registering user");
    }
  };

  const login = () => setView("login");
  const register = () => setView("register");

  const myMenuFunction = () => {
    const menu = document.getElementById("navMenu");
    if (menu.className === "nav-menu") {
      menu.className += " responsive";
    } else {
      menu.className = "nav-menu";
    }
  };

  return (
    <div>
      <video autoPlay muted id="backgroundVideo">
        <source src={Vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="wrapper">
        <nav className="nav">
          <div className="nav-logo">
            <p>Adventure Atlas</p>
          </div>
          <div className="nav-menu" id="navMenu"></div>
          <div className="nav-button">
            <button
              className={`btn ${view === "login" ? "white-btn" : ""}`}
              id="loginBtn"
              onClick={login}
            >
              Sign In
            </button>
            <button
              className={`btn ${view === "register" ? "white-btn" : ""}`}
              id="registerBtn"
              onClick={register}
            >
              Sign Up
            </button>
          </div>
          <div className="nav-menu-btn">
            <i className="bx bx-menu" onClick={myMenuFunction}></i>
          </div>
        </nav>

        <div className="form-box">
          {/* Login Form */}
          <div
            className="login-container"
            id="login"
            style={{ left: view === "login" ? "4px" : "-510px", opacity: view === "login" ? 1 : 0 }}
          >
            <div className="greet">
              {"Welcome Back.!".split("").map((char, index) => (
                <span className="letter" key={index}>
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </div>
            <div className="top">
              <span>
                Don't have an account? <a href="#" onClick={register}>Sign Up</a>
              </span>
              <header>Login</header>
            </div>
            <form onSubmit={handleLogin}>
              <div className="input-box">
                <input
                  type="text"
                  className="input-field"
                  placeholder="Email"
                  name="email"
                  value={loginData.email}
                  onChange={(e) => handleInputChange(e, "login")}
                  required
                />
                <i className="bx bx-user"></i>
              </div>
              <div className="input-box">
                <input
                  type="password"
                  className="input-field"
                  placeholder="Password"
                  name="password"
                  value={loginData.password}
                  onChange={(e) => handleInputChange(e, "login")}
                  required
                />
                <i className="bx bx-lock-alt"></i>
              </div>
              <div className="input-box">
                <input type="submit" className="submit" value="Sign In" />
              </div>
            </form>
          </div>

          {/* Register Form */}
          <div
            className="register-container"
            id="register"
            style={{ right: view === "register" ? "5px" : "-520px", opacity: view === "register" ? 1 : 0 }}
          >
            <div className="top">
              <span>
                Have an account? <a href="#" onClick={login}>Login</a>
              </span>
              <header>Sign Up</header>
            </div>
            <form onSubmit={handleRegister}>
              <div className="two-forms">
                <div className="input-box">
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Firstname"
                    name="firstname"
                    value={registerData.firstname}
                    onChange={(e) => handleInputChange(e, "register")}
                    required
                  />
                  <i className="bx bx-user"></i>
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Lastname"
                    name="lastname"
                    value={registerData.lastname}
                    onChange={(e) => handleInputChange(e, "register")}
                    required
                  />
                  <i className="bx bx-user"></i>
                </div>
              </div>
              <div className="input-box">
                <input
                  type="text"
                  className="input-field"
                  placeholder="Email"
                  name="email"
                  value={registerData.email}
                  onChange={(e) => handleInputChange(e, "register")}
                  required
                />
                <i className="bx bx-envelope"></i>
              </div>
              <div className="input-box">
                <input
                  type="password"
                  className="input-field"
                  placeholder="Password"
                  name="password"
                  value={registerData.password}
                  onChange={(e) => handleInputChange(e, "register")}
                  required
                />
                <i className="bx bx-lock-alt"></i>
              </div>
              <div className="input-box">
                <input type="submit" className="submit" value="Register" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login_Pg;
