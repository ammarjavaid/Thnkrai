import React, { useRef } from "react";
import "./suggestion.scss";
import { CurveRed } from "../../../assets";
import { data } from "./constant";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import { Carousel } from "antd";

const Suggestion = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const carouselRef = useRef();

  return (
    <>
      <div className="suggestion">
        <div className="img">
          <img src={CurveRed} alt="" />
        </div>
        <div className="container">
          <div className="content">
            <Carousel
              afterChange={onChange}
              slidesToShow={2}
              dots={false}
              ref={carouselRef}
              autoplay={true}
              className="carousel__review"
              responsive={[
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 1,
                  },
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                  },
                },
                {
                  breakpoint: 540,
                  settings: {
                    slidesToShow: 1,
                  },
                },
              ]}
            >
              {data.map((item) => (
                <div className="box">
                  <h2> {item.title} </h2>
                  <p> {item.description} </p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Suggestion;
