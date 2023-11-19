import React from "react";
import { Logo1 } from "../../../assets";
import "./suthHeader.scss";
import { useNavigate } from "react-router-dom";

const AuthHeader = () => {
  const navigate = useNavigate();

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
            {window.location.pathname === "/login" ? (
              <p onClick={() => navigate("/signup")}> Sign up </p>
            ) : (
              <p onClick={() => navigate("/login")}> Log in </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthHeader;
