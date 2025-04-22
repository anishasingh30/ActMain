// src/pages/RegisterPage.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/authService";
import "../styles/RegisterForm.css";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    // You may include extra fields if your backend supports them:
    // hearingStatus: "hearing",
    // reasonForLearning: "",
    // skillLevel: "",
    // phoneNumber: "",
    // country: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Update form state as user types
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Submit form: on success, store data and redirect to UserProfile page
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await registerUser(formData);
      // data should be an object like { message, user, token? }
      alert(data.message); // e.g., "User registered successfully"

      // Save user (and token if provided) to localStorage
      localStorage.setItem("user", JSON.stringify(data.user));
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      // Redirect to UserProfile page
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      {/* Left Column (Form) */}
      <div className="register-left">
        <div className="register-header">
          <h1 className="logo">ActAware</h1>
          <h2>Create Your Account</h2>
          <p>Please fill in your details below</p>
        </div>

        <form onSubmit={handleSubmit} className="register-form">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {error && <p className="error">{error}</p>}

          <button type="submit" className="register-btn" disabled={loading}>
            {loading ? "Registering..." : "Sign Up"}
          </button>

          <div className="login-link">
            <p>
              Already have an account? <Link to="/signup">Sign In</Link>
            </p>
          </div>
        </form>
      </div>

      {/* Right Column (Illustration) */}
      <div className="register-right">
        <div className="illustration-text">{/* Optional illustration */}</div>
      </div>
    </div>
  );
};

export default RegisterPage;
