import React from "react";
import "./join-us-form.scss";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";
import Button from "../../../common/button/Button";

const JoinUsForm = () => {
  return (
    <>
      <div className="join-us-form">
        <div className="container">
          <div className="content">
            <div className="content-left">
              <h3>
                {" "}
                Sign up for early access to <span>our beta!</span>{" "}
              </h3>
              <p>
                Join us now for early access to our pricing model beta. Gain a
                competitive edge by accurately determining fair prices for all
                the products you want in a rapidly changing market.
              </p>
              <div className="address">
                <MdOutlineLocationOn className="address-icon" />
                Washington DC, US
              </div>
              <div className="email">
                <FaRegEnvelope className="email-icon" />
                founders@thnkrai.com
              </div>
            </div>
            <div className="content-right">
              <div className="form">
                <div className="input-group">
                  <label> Name </label>
                  <input
                    type="text"
                    placeholder="Enter name..."
                    className="input"
                  />
                </div>
                <div className="input-group">
                  <label> Email </label>
                  <input
                    type="email"
                    placeholder="Enter email..."
                    className="input"
                  />
                </div>
              </div>
              <div className="btn-contact">
                <Button> Sign up </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinUsForm;
