
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const readerror = {};
    if (!email.trim()) {
      readerror.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      readerror.email = "please enter a valid email";
    }
    if (!password) {
      readerror.password = "password is required";
    }
    return readerror;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      navigate("/home");
    }
  };

return (
  <div className="auth-page">
    <div className="auth-card">

      <Link to="/Signup" className="auth-link auth-top-link">
        Create Account
      </Link>

      <h2>Welcome Back </h2>
      <p className="auth-subtitle">
        Login to continue
      </p>

      <form className="auth-form" onSubmit={handleSubmit}>

        <div className="auth-field">
          <label className="auth-label">Email</label>

          <input
            className={`auth-input ${errors.email ? "input-error" : ""}`}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {errors.email && (
            <div className="auth-error">{errors.email}</div>
          )}
        </div>

        <div className="auth-field">
          <label className="auth-label">Password</label>

          <input
            className={`auth-input ${errors.password ? "input-error" : ""}`}
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {errors.password && (
            <div className="auth-error">{errors.password}</div>
          )}
        </div>

        <button className="auth-button">
          Login
        </button>

      </form>

    </div>
  </div>
);
};
export default Login;