import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    farmName: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  const handleRegister = (event) => {
    event.preventDefault();

    if (formData.password.length < 8) {
      alert("Password must contain at least 8 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Registration is not saved to a database yet.
    alert("Demo registration completed!");
    navigate("/login");
  };

  return (
    <div className="auth-page">
      <div className="auth-card register-card">
        <div className="auth-logo">
          <span>🌾</span>
          <h1>AgriSmart AI</h1>
        </div>

        <h2>Create Your Account</h2>

        <p className="auth-description">
          Start managing your feed quality and farm information.
        </p>

        <form onSubmit={handleRegister} className="auth-form">
          <label htmlFor="fullName">Full Name</label>

          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <label htmlFor="registerEmail">Email Address</label>

          <input
            id="registerEmail"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="farmName">Farm Name</label>

          <input
            id="farmName"
            name="farmName"
            type="text"
            placeholder="Enter your farm name"
            value={formData.farmName}
            onChange={handleChange}
            required
          />

          <label htmlFor="registerPassword">Password</label>

          <input
            id="registerPassword"
            name="password"
            type="password"
            placeholder="At least 8 characters"
            value={formData.password}
            onChange={handleChange}
            minLength={8}
            required
          />

          <label htmlFor="confirmPassword">Confirm Password</label>

          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Re-enter your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            minLength={8}
            required
          />

          <button type="submit" className="primary-button">
            Create Account
          </button>
        </form>

        <p className="auth-footer">
          Already registered?{" "}
          <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;