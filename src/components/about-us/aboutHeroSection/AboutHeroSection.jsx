import React from "react";
import "./aboutHeroSection.scss";
import Shapes from "../../../assets/video/shapes.mp4";

const AboutHeroSection = () => {
  return (
    <>
      <div className="about">
        <div className="video">
          <video autoPlay muted loop playsInline>
            <source src={Shapes} type="video/mp4" />
          </video>
        </div>
        <div className="container">
          <div className="about-content">
            <div className="about-content-left">
              <h3>
                Who <span> We Are </span>
              </h3>
              <p>
                ThinkAI is a dynamic team of innovators and technology
                enthusiasts. We specialize in harnessing the potential of
                artificial intelligence to create transformative solutions. Our
                commitment is to drive progress and make AI accessible to all.
                Discover more about our passionate team and the exciting work we
                do.
              </p>
            </div>
            <div className="about-content-right"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHeroSection;
