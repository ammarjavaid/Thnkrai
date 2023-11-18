import React from "react";
import { Logo1 } from "../../../assets";
import "./suthHeader.scss";

const AuthHeader = () => {
  return (
    <>
      <div className="authHeade">
        <div className="container authHeade-content">
          <div className="authHeader-left">
            <div className="img">
              <img src={Logo1} alt="" />
            </div>
          </div>
          <div className="authHeader-right">
            <p> Login </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthHeader;
