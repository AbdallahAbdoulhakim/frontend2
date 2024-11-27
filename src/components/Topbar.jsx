import React from "react";
import { useContext } from "react";
import DataContext from "../context/DataContext";
const Topbar = () => {
  const { email, telephone, socials } = useContext(DataContext);

  return (
    <section id="topbar" className="topbar d-flex align-items-center">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope d-flex align-items-center">
            <a href={`mailto:${email}`}>{email}</a>
          </i>
          <i className="bi bi-phone d-flex align-items-center ms-4">
            <span>{telephone}</span>
          </i>
        </div>
        <div className="social-links d-none d-md-flex align-items-center">
          <a href={socials?.twitter} className="twitter">
            <i className="bi bi-twitter"></i>
          </a>
          <a href={socials?.facebook} className="facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href={socials?.instagram} className="instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href={socials?.linkedin} className="linkedin">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
