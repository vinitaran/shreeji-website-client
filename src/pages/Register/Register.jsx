import React from "react";
import { Link } from "react-router-dom";
import "../Login/Login.css";

export default function Register() {
  return (
    <div className="login__container">
      <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
        <div className="header__logo">
          <span>Shreeji In Fashion</span>
        </div>
      </Link>
      <form>
        <h3>Register</h3>

        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Register
        </button>
        <p className="forgot-password text-right">
          Already registered <Link to="/login">log in?</Link>
        </p>
      </form>
    </div>
  );
}
