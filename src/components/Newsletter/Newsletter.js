import React from "react";
import "./newsletter.css";
import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <div className="newsletter_container">
      <h1 className="newsletter_heading">Never miss another deal.</h1>
      <p className="newsletter_details">
        Get the top deals from 100s of retailers in the Best of RetailMeNot
        emails.
      </p>
      <input type="email" placeholder="Email Address" className="newsletter_serachfeild" />
      <button className="newsletter_btn">Subscribe</button>
      <Link>Privacy Policy</Link>
    </div>
  );
};

export default Newsletter;
