import React from "react";
import "./meet-our-team.scss";
import { cardData } from "./constant";
import { BsLinkedin } from "react-icons/bs";

const MeetOurTeam = () => {
  return (
    <>
      <div className="meet-our-team">
        <div className="container">
          <h1>
            Meet our <span>Team </span>
          </h1>
          <div className="cards">
            {cardData.map((item) => (
              <div className="myCard">
                <div className="myCard-left">
                  <div className="img">
                    <img src={item.img} alt="" />
                  </div>
                </div>
                <div className="myCard-right">
                  <h4> {item.name} </h4>
                  <p> {item.description} </p>
                  <h6> {item.title} </h6>
                  <BsLinkedin className="icon" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetOurTeam;
