import React from "react";
import "./auth.css";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook, AiFillApple } from "react-icons/ai";
import { BsPaypal } from "react-icons/bs";

const Signup = () => {
  return (
    <div className="login_container">
      <div className="backgroundImage"></div>
      <div className="Login">
        <div className="heading">
          <h1>Sign Up</h1>
          <p>
            Already have an account? <Link to="/login">Login In</Link>
          </p>
        </div>
        <form className="form">
          <label htmlFor="name">Username</label>
          <input type="text" placeholder="UserName" />
          <label htmlFor="email">Email Address</label>
          <input type="email" placeholder="Email Address" />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" />
          <button className="btn">Sign Up</button>

          <div className="privacy_div">
            <p>By continuing, I agree to RetailMeNot’s</p>
            <p>
              <Link>Privacy Policy</Link> and <Link>Terms of Use.</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
