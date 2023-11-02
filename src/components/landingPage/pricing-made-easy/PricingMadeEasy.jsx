import React from "react";
import "./pricingMadeEasy.scss";
import { BtnTop, Pricing } from "../../../assets";
import { PricingBox } from "./constant";

const PricingMadeEasy = () => {
  return (
    <>
      <div className="pricing">
        <div className="container">
          <h2>
            PRICING MADE <br /> <span> EASY </span>
          </h2>
          <div className="pricing-content">
            <div className="pricing-content-left">
              {PricingBox.map((el) => (
                <>
                  <div className="Streamlining">
                    <p> {el.detail} </p>
                    <div className="desc-box">
                      <p className="desc"> {el.desc} </p>
                      <img src={el.img} alt="" className="icon-img" />
                      <img src={BtnTop} alt="" className="btn-top-img" />
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className="pricing-content-right">
              <div className="img">
                <img src={Pricing} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingMadeEasy;
