import React from "react";

const Breadcrumbs = ({ title, message }) => {
  return (
    <div className="breadcrumbs">
      <div className="page-header d-flex align-items-center">
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <h2>{title}</h2>
              <p>{message}</p>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div className="container">
          <ol>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>Blog</li>
          </ol>
        </div>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
