import { Button } from "antd";
import React from "react";
import "./signup.scss";

const Signup = () => {
  return (
    <>
      <div className="login">
        <form>
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
        </form>
      </div>
    </>
  );
};

export default Signup;
