import React, { useState } from "react";
import "./header.scss";
import { LoginBG, LogoBG } from "../../assets";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const [activeClass, setActiveClass] = useState("home");

  const handleClick = (type) => {
    setActiveClass(type);
    if (type === "home") {
      navigate("/");
    } else if (type === "about") {
      navigate("/about");
    } else if (type === "Join us") {
      navigate("/join-us");
    } else if (type === "product") {
      navigate("/product");
    }
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="header-left">
            <img src={LogoBG} alt="" />
            <div className="logo">ThnkrAI</div>
          </div>
          <div className="header-center">
            <p
              onClick={() => handleClick("home")}
              className={activeClass === "home" ? "active" : ""}
            >
              Home
            </p>
            <p
              onClick={() => handleClick("about")}
              className={activeClass === "about" ? "active" : ""}
            >
              About us
            </p>
            <p
              onClick={() => handleClick("Join us")}
              className={activeClass === "Join us" ? "active" : ""}
            >
              Join us
            </p>
            <p
              onClick={() => handleClick("product")}
              className={activeClass === "product" ? "active" : ""}
            >
              Product
            </p>
          </div>

          <div className="header-right">
            <img src={LoginBG} alt="" />
            <p>Login</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
