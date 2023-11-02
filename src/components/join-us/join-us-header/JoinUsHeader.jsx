import React from "react";
import "./join-us-header.scss";
import { AI } from "../../../assets";

const JoinUsHeader = () => {
  return (
    <>
      <div className="join-us-header">
        <div className="img">
          <img src={AI} alt="" />
        </div>
        <div className="container content-join-us-header">
          <h3>
            Join <span>thnkrAi</span>
          </h3>
          <p>
            Explore a world of opportunities as we shape the future of AI
            together and join our diverse community of thinkers, innovators, and
            creators. Collaborate, learn, and contribute to the AI revolution.
          </p>
        </div>
      </div>
    </>
  );
};

export default JoinUsHeader;
