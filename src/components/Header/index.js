import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import LogoImage from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="navbar_container">
      <header>
        <div className="logo">
          <Link>
            <img src={LogoImage} alt="Logo" />
          </Link>
        </div>
        <div className="nav">
          <Link>4th of july deals</Link>
          <Link>Stores</Link>
          <Link>Cash Back</Link>
          <Link>Blog</Link>
        </div>
        <div className="searchfeild">
          <BiSearch />
          <input type="search" placeholder="Search on RetailMeNot" />
        </div>
        <Link to="/login" className="loginLink">
          Login
        </Link>
        <button className="btn">Add to chrome</button>
      </header>
    </div>
  );
};

export default Header;
