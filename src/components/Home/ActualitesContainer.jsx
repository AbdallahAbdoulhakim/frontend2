import React, { useEffect } from "react";

import Swiper from "swiper/bundle";
import "swiper/css/bundle";

import "../../styles/home/actualites.css";

import ItemActualite from "./ItemActualite";

const ActualitesContainer = ({ postsList }) => {
  useEffect(() => {
    /**
     * Init swiper slider with 3 slides at once in desktop view
     */
    new Swiper(".slides-3", {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 40,
        },

        1200: {
          slidesPerView: 3,
        },
      },
    });
  }, []);
  return (
    <section id="recent-posts" className="recent-posts sections-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Actualités</h2>
          <p>
            Les actualités récentes de l'Institut National de la Statistique
          </p>
        </div>

        <div
          className="slides-3 swiper"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="swiper-wrapper mb-5">
            {postsList.map((post) => (
              <ItemActualite key={post.id} post={post} />
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default ActualitesContainer;
