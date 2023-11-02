import React from "react";
import "./neuralNetwork.scss";
import { Nural, Robo1 } from "../../../assets";
import Button from "../../../common/button/Button";

const NeuralNetwork = () => {
  return (
    <>
      <div className="neuralNetwork">
        <div className="container">
          <h1>
            BUILDING <span> NURAL </span> <br /> NETWORK
          </h1>
          <div className="neuralNetwork-content">
            <div className="neuralNetwork-content-left">
              <h2>
                <span> Building The World’s Best </span> <br /> Neural network
                for pricing analysis and insights.
              </h2>
              <p>
                Introducing the thnkrAI pricing model, the first-ever pricing
                model for all. Our technology empowers individuals to access a
                comprehensive and accurate pricing solution for any product. No
                more guesswork or uncertainty as our model utilizes advanced
                algorithms and market insights to determine fair prices based on
                a multitude of adjustable variables. You can now make confident
                and informed purchasing or selling decisions and experience a
                new level of pricing support. Experience the future of consumer
                pricing with us today.
              </p>
              <div className="btn">
                <Button> Check it out </Button>
              </div>
            </div>
            <div className="neuralNetwork-content-right">
              <img src={Robo1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NeuralNetwork;
