import React, { useState } from "react";
import "./header.scss";
import { LoginBG, Logo1, LogoBG, LogoFooter } from "../../assets";
import { useNavigate } from "react-router-dom";
import { Drawer } from "antd";
import { HiOutlineBars4 } from "react-icons/hi2";

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

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="header-left">
            {/* <img src={LogoBG} alt="" /> */}
            <div className="img">
              <img src={Logo1} alt="" />
            </div>

            {/* <div className="logo"></div> */}
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
            <HiOutlineBars4 onClick={showDrawer} className="bar-icon" />
            <img src={LoginBG} alt="" />
            <p>Login</p>
          </div>
        </div>
      </div>

      <Drawer
        title=""
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <img src={LogoFooter} alt="" />
        <p
          onClick={() => {
            handleClick("home");
            onClose();
          }}
          className={activeClass === "home" ? "active" : ""}
        >
          Home
        </p>
        <p
          onClick={() => {
            handleClick("about");
            onClose();
          }}
          className={activeClass === "about" ? "active" : ""}
        >
          About us
        </p>
        <p
          onClick={() => {
            handleClick("Join us");
            onClose();
          }}
          className={activeClass === "Join us" ? "active" : ""}
        >
          Join us
        </p>
        <p
          onClick={() => {
            handleClick("product");
            onClose();
          }}
          className={activeClass === "product" ? "active" : ""}
        >
          Product
        </p>
      </Drawer>
    </>
  );
};

export default Header;
