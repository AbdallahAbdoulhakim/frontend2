import React from "react";
import IconBoxContainer from "./IconBoxContainer";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container position-relative">
        <div className="row gy-5" data-aos="fade-in">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
            <p>
              L’Institut national de la statistique et des études économiques et
              collecte, produit, analyse et diffuse des informations sur
              l’économie et la société comoriennes
            </p>
          </div>
          <div className="col-lg-6 order-1 order-lg-2  text-center">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/logo-inseed.png`}
              className="img-fluid w-50"
              alt=""
              data-aos="zoom-out"
              data-aos-delay="100"
            />
          </div>
        </div>
      </div>

      <IconBoxContainer />
    </section>
  );
};

export default Hero;
