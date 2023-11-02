import React from "react";
import "./button.scss";
import { BiRightArrowAlt } from "react-icons/bi";
import { BtnLeft, BtnRight } from "../../assets";

const Button = ({ children }) => {
  return (
    <>
      <div className="button">
        <div className="button-left">
          <button className="button-left-btn"> {children} </button>
          <img src={BtnRight} alt="" />
        </div>
        <div className="button-right">
          <img src={BtnLeft} alt="" />
          <button className="button-right-btn">
            <BiRightArrowAlt />
          </button>
        </div>
      </div>
    </>
  );
};

export default Button;
