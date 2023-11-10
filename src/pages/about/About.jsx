import React from "react";
import "./about.scss";
import AboutHeroSection from "../../components/about-us/aboutHeroSection/AboutHeroSection";
import MeetOurTeam from "../../components/about-us/meet-our-team/MeetOurTeam";
import Suggestion from "../../components/about-us/suggestion/Suggestion";

const About = () => {
  return (
    <>
      <AboutHeroSection />
      {/* <Suggestion /> */}
      <MeetOurTeam />
    </>
  );
};

export default About;
