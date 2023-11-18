import React from "react";
import "./login.scss";
import Button from "../../../common/button/Button";
import AuthHeader from "../authHeader/AuthHeader";

const Login = () => {
  return (
    <>
      {/* <AuthHeader /> */}
      <div className="login">
        <form>
          <h2> Login </h2>
          <div className="input-group">
            <label> Email </label>
            <input type="email" placeholder="username@email.com" />
          </div>
          <div className="input-group">
            <label> Password </label>
            <input type="password" placeholder="*******" />
          </div>
          <div className="login-btn">
            <Button> Login </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
