import React, { useState } from "react";
import "../styles/login.css";
import Vid from '../travelAssests/loginPg/traval_planer (1).mp4'

function Login_Pg() {
  const [view, setView] = useState("login");

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
          <div className="nav-menu" id="navMenu">
            <ul>
              <li>
                <a href="#" className="link">
                  Home
                </a>
              </li>
            </ul>
          </div>
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
            <div className="input-box">
              <input type="text" className="input-field" placeholder="Username or Email" />
              <i className="bx bx-user"></i>
            </div>
            <div className="input-box">
              <input type="password" className="input-field" placeholder="Password" />
              <i className="bx bx-lock-alt"></i>
            </div>
            <div className="input-box">
              <input type="submit" className="submit" value="Sign In" />
            </div>
            <div className="two-col">
              <div className="one">
                <input type="checkbox" id="login-check" />
                <label htmlFor="login-check"> Remember Me</label>
              </div>
              <div className="two">
                <label>
                  <a href="#">Forgot password?</a>
                </label>
              </div>
            </div>
          </div>

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
            <div className="two-forms">
              <div className="input-box">
                <input type="text" className="input-field" placeholder="Firstname" />
                <i className="bx bx-user"></i>
              </div>
              <div className="input-box">
                <input type="text" className="input-field" placeholder="Lastname" />
                <i className="bx bx-user"></i>
              </div>
            </div>
            <div className="input-box">
              <input type="text" className="input-field" placeholder="Email" />
              <i className="bx bx-envelope"></i>
            </div>
            <div className="input-box">
              <input type="password" className="input-field" placeholder="Password" />
              <i className="bx bx-lock-alt"></i>
            </div>
            <div className="input-box">
              <input type="submit" className="submit" value="Register" />
            </div>
            <div className="two-col">
              <div className="one">
                <input type="checkbox" id="register-check" />
                <label htmlFor="register-check"> Remember Me</label>
              </div>
              <div className="two">
                <label>
                  <a href="#">Terms & conditions</a>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login_Pg;
