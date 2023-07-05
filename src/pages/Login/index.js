import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
// import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook, AiFillApple } from "react-icons/ai";
import { BsPaypal } from "react-icons/bs";

const Login = () => {
  return (
    <div className="login_container">
        <div className="Login">
          <div className="heading">
            <h1>Log In</h1>
            <p>
              Don’t have an account? <Link> Sign up</Link>
            </p>
          </div>
          <form className="form">
            <label htmlFor="email">Email Address</label>
            <input type="email" placeholder="Email Address" />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" />
            <button className="btn">Log In</button>
            <Link>Forgot Password</Link>
            <span>OR</span>
            <hr />
            <div className="btn_feild">
              <AiFillFacebook className="icon" />
              <button>Connect with Facebook</button>
            </div>
            <div className="btn_feild">
              <FcGoogle className="icon" />
              <button>Connect with Google</button>
            </div>
            <div className="btn_feild">
              <AiFillApple className="icon" />
              <button>Connect with Apple</button>
            </div>
            <div className="btn_feild">
              <BsPaypal className="icon" />
              <button>Connect with Paypal</button>
            </div>

            <div className="privacy_div">
              <p>By continuing, I agree to RetailMeNot’s</p>
              <p><Link>Privacy Policy</Link> and <Link>Terms of Use.</Link></p>
            </div>
          </form>
        </div>
      </div>
  );
};

export default Login;
