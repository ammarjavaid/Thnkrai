import React from "react";
import "./automaticModels.scss";
import { Model, Robo2 } from "../../../assets";
import Button from "../../../common/button/Button";

const AutomaticModels = () => {
  return (
    <>
      <div className="automaticModels">
        <div className="container">
          <h1>
            OUR <span> AUTOMATIC </span> <br /> AI MODELS
          </h1>
          <div className="automaticModels-content">
            <div className="automaticModels-content-left">
              <h2>
                <span> Adaptable To </span> <br /> An ever-changing market.
              </h2>
              <p>
                By utilizing the most recent market data, our models dynamically
                adjust to reflect current market trends, ensuring accurate and
                fair price estimates for our users. When purchasing products or
                services, thnkrAI empowers you to make informed decisions by
                providing up-to-date and personalized pricing information.
              </p>
              <div className="btn">
                <Button> Check it out </Button>
              </div>
            </div>
            <div className="automaticModels-content-right">
              <img src={Robo2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AutomaticModels;
