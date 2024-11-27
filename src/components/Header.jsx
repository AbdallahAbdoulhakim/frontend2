import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header id="header" className="header d-flex align-items-center">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          <img
            src={`${process.env.PUBLIC_URL}/assets/img/logo.png`}
            alt="logo"
          />
          <h1>
            <span>.</span>
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
