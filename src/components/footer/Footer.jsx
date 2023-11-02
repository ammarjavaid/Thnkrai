import React from "react";
import "./footer.scss";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import Button from "../../common/button/Button";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-col">
              <h1> ThnkrAi </h1>
              <p className="description">
                Ongoing research and development in AI to advance its
                capabilities and applications, AI technology is crucial for
                self-driving cars autonomous transportation systems
              </p>
            </div>
            <div className="footer-col">
              <h3> Company </h3>
              <p> About Us </p>
              <p> Join Today </p>
            </div>
            <div className="footer-col">
              <h3> Product </h3>
              <p> Platform </p>
            </div>
            <div className="footer-col">
              <h3> Support </h3>
              <p> Privacy Policy </p>
              <p> Terms & Conditions </p>
            </div>
            <div className="footer-col">
              <h3> Contact us </h3>
              <div className="input-fields">
                <input type="text" placeholder="Enter" />
                <input type="text" placeholder="Subject" />
                <textarea rows={3} cols={2} placeholder="Message..." />
                <div className="btn">
                  <Button> Submit </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="all-rights">
            <p> By © ThnkrAI Inc. All Rights Reserved. founders@thnkrai.com </p>
            <div className="icons">
              <AiOutlineTwitter className="icon" />
              <AiOutlineInstagram className="icon" />
              <AiFillLinkedin className="icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
