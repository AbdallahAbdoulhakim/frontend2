import React from "react";

const IconBox = ({ item }) => {
  return (
    <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
      <div
        className="icon-box"
        onMouseOver={(e) => {
          const legend = e.target.parentElement.nextSibling.nextSibling;
          legend.style.display = "inherit";
        }}
        onMouseLeave={(e) => {
          const legend = e.target.parentElement.nextSibling.nextSibling;
          legend.style.display = "none";
        }}
      >
        <div className="icon">
          <i className={item.icon}></i>
        </div>
        <h4 className="title">
          <a href="/" className="stretched-link">
            {item.title}
          </a>
        </h4>
        <h5 className="subtitle">{item.subtitle}</h5>
        <h6 className="legend">{item.legend}</h6>
      </div>
    </div>
  );
};

export default IconBox;
