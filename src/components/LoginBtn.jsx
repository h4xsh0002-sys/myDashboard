import React, { useState } from "react";
import Login from "../forms/Login.jsx";
import Register from "../forms/Register.jsx";
import Dashboard from "../components/Dashboard.jsx";

export default function LoginBtn() {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("registeredUser")) || null;
    } catch {
      return null;
    }
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const [page, setPage] = useState("home");

  function register(newUser) {
    localStorage.setItem("registeredUser", JSON.stringify(newUser));
    setUser(newUser);
    setPage("login");
  }

  function login(email, password) {
    if (user && user.email === email && user.password === password) {
      setLoggedIn(true);
      setPage("dashboard");
    } else {
      alert("Email or password is incorrect. Please try again.");
    }
  }

  function handleLoginButton() {
    setPage("login");
  }

  function handleLogout() {
    setLoggedIn(false);
    setPage("home");
  }

  return (
    <div>
      {page === "home" && (
        <div className="round">
          <p>
            Welcome to <span id='hii'>🛍️Indian Online Market.</span> <br />
            Click login to continue.
          </p>
          <button
            type="button"
            className="header-button"
            onClick={handleLoginButton}
          >
            Login
          </button>
          </div>
      )}

      {page === "login" && !loggedIn && (
        <Login onLogin={login} onRegister={() => setPage("register")} />
      )}

      {page === "register" && !loggedIn && (
        <Register
          onRegister={register}
          onBackToLogin={() => setPage("login")}
        />
      )}

      {page === "dashboard" && loggedIn && (
        <Dashboard user={user} 
        onLogout={handleLogout} />
      )}
    </div>
  );
}