import React from "react";
import "./our_solution.scss";
import Marquee from "react-fast-marquee";

const OurSolutions = () => {
  return (
    <>
      <div className="our-solutions">
        <div className="container">
          <div className="our-solution-content">
            <p> Our Solutions </p>
            <ul>
              <Marquee pauseOnHover={true}>
                <li>Machine Learning</li>
                <li>AI in Finance</li>
                <li>AI in Education</li>
                <li>AI in Business</li>
                <li>Natural Language Processing (NLP)</li>
                <li>Computer Vision</li>
                <li>Robotics</li>
                <li>Neural Networks</li>
                <li>Speech Recognition</li>
                <li>Reinforcement Learning</li>
              </Marquee>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSolutions;
