import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { DataProvider } from "./context/DataContext";

const App = () => {
  useEffect(() => {
    /**
     * Preloader
     */
    const preloader = document.querySelector("#preloader");
    if (preloader) {
      window.addEventListener("load", () => {
        preloader.remove();
      });
    }

    /**
     * Sticky Header on Scroll
     */
    const selectHeader = document.querySelector("#header");

    if (selectHeader) {
      let headerOffset = selectHeader.offsetTop;
      let nextElement = selectHeader.nextElementSibling;

      const headerFixed = () => {
        if (headerOffset - window.scrollY <= 0) {
          selectHeader.classList.add("sticked");
          if (nextElement) nextElement.classList.add("sticked-header-offset");
        } else {
          selectHeader.classList.remove("sticked");
          if (nextElement)
            nextElement.classList.remove("sticked-header-offset");
        }
      };
      window.addEventListener("load", headerFixed);
      document.addEventListener("scroll", headerFixed);
    }

    /**
     * Mobile nav toggle
     */
    const mobileNavShow = document.querySelector(".mobile-nav-show");

    const mobileNavHide = document.querySelector(".mobile-nav-hide");

    document.querySelectorAll(".mobile-nav-toggle").forEach((el) => {
      el.addEventListener("click", function (event) {
        event.preventDefault();
        mobileNavToogle();
      });
    });

    function mobileNavToogle() {
      document.querySelector("body").classList.toggle("mobile-nav-active");
      console.log(mobileNavShow.classList);
      mobileNavShow.classList.toggle("d-none");
      mobileNavHide.classList.toggle("d-none");
    }

    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll("#navbar a").forEach((navbarlink) => {
      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      navbarlink.addEventListener("click", () => {
        if (document.querySelector(".mobile-nav-active")) {
          mobileNavToogle();
        }
      });
    });

    /**
     * Toggle mobile nav dropdowns
     */
    const navDropdowns = document.querySelectorAll(".navbar .dropdown > a");

    navDropdowns.forEach((el) => {
      el.addEventListener("click", function (event) {
        if (document.querySelector(".mobile-nav-active")) {
          event.preventDefault();
          this.classList.toggle("active");
          this.nextElementSibling.classList.toggle("dropdown-active");

          let dropDownIndicator = this.querySelector(".dropdown-indicator");
          dropDownIndicator.classList.toggle("bi-chevron-up");
          dropDownIndicator.classList.toggle("bi-chevron-down");
        }
      });
    });
  }, []);

  return (
    <>
      <DataProvider>
        <Topbar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </DataProvider>
    </>
  );
};

export default App;
