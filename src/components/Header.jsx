import React from "react";
import Navbar from "./Navbar";
import "../styles/header.css";

const Header = () => {
  return (
    <header id="header" className="header d-flex align-items-center">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          <h1>
            INSEED<span>.</span>
          </h1>
        </a>
        <Navbar />
        <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      </div>
    </header>
  );
};

export default Header;
