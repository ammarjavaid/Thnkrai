import React from "react";
import "./login.scss";
import Button from "../../../common/button/Button";
import AuthHeader from "../authHeader/AuthHeader";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="main-bg">
        <AuthHeader />
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
            <div className="forget-password">
              <Link to="/reset-password"> Forget Password? </Link>
            </div>
            <div className="login-btn">
              <Button> Login </Button>
            </div>
            <p>
              By signing up, you agree to the Terms of Use and Privacy Policy
            </p>
            <div className="already-account">
              <p className="new-user"> New User? </p>
              <Link to="/signup"> Don't have an account? </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
