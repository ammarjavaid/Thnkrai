import React from "react";
import "./resetPassword.scss";
import AuthHeader from "../authHeader/AuthHeader";
import Button from "../../../common/button/Button";

const ResetPassword = () => {
  return (
    <>
      <div className="main-bg">
        <AuthHeader />
        <div className="login">
          <form>
            <h2> Reset Password </h2>
            <div className="input-group">
              <label> Email </label>
              <input type="email" placeholder="username@email.com" />
            </div>

            <div className="login-btn">
              <Button>Reset password</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
