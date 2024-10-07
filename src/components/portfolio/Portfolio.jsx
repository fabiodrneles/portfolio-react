import React from "react";
import "./portfolio.css";
import { Data } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const portfolio = () => {
  return (
    <section className="portfolio container section" id="portfolio">
      <h2 className="section__title">My Portfolio</h2>
      <span className="section__subtitle">
      Loading... Something awesome is coming!

        {/* Browse my showcase of study and skill development projects. */}
      </span>

      <Swiper
        className="portfolio__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 28,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description, link }) => {
          return (
            <SwiperSlide className="portfolio__card" key={id}>
              <img src={image} alt="" className="portfolio__img" />

              <h3 className="portfolio__name">{title}</h3>
              <p className="portfolio__description">{description}</p>
              <p className="portfolio__link">{link}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default portfolio;
