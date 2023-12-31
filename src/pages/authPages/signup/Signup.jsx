import React from "react";
import "./signup.scss";
import AuthHeader from "../authHeader/AuthHeader";
import Button from "../../../common/button/Button";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="main-bg">
        <AuthHeader />
        <div className="login">
          <form>
            <h2> Sign up </h2>
            <div className="input-group">
              <label> Email </label>
              <input type="email" placeholder="username@email.com" />
            </div>
            <div className="input-group">
              <label> Password </label>
              <input type="password" placeholder="*******" />
            </div>

            <div className="login-btn">
              <Button> Sign up </Button>
            </div>
            <p>
              By signing up, you agree to the Terms of Use and Privacy Policy
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
