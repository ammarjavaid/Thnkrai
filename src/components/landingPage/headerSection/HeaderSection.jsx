import React from "react";
import "./headerSection.scss";
import Shape from "../../../assets/video/shape.mp4";
import Button from "../../../common/button/Button";
import OurSolutions from "../../Our-solution/OurSolutions";

const HeaderSection = () => {
  return (
    <>
      <div className="headerSection-wrapper">
        <div className="videos">
          <video autoPlay muted loop playsInline>
            <source src={Shape} type="video/mp4" />
          </video>
        </div>
        <div className="container">
          <div className="headerSection">
            <h3>
              WELCOME TO <br />
              <span> THNKRAI </span>
            </h3>
            <p> We make pricing easy. Beta coming soon </p>
            <p>
              Empowering all with accurate and accessible pricing intelligence
            </p>
            <div className="btn">
              <Button> Contact us </Button>
            </div>
          </div>
        </div>
        <OurSolutions />
      </div>
    </>
  );
};

export default HeaderSection;
