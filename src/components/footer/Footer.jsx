import React, { useEffect } from "react";
import "./footer.scss";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import Button from "../../common/button/Button";
import { LogoFooter } from "../../assets";
import $ from "jquery";

const Footer = () => {
  const SendMain = () => {
    let email = $("#contact-2-email").val();
    let subject = $("#contact-2-subject").val();
    let message = $("#message").val();

    if (name === "" || email === "" || subject === "" || message === "") {
      $(".infoForm").slideDown().delay(3000).slideUp();
    } else {
      $(".done").slideDown().delay(2000).slideUp();

      $.ajax({
        method: "POST",
        url: "https://formsubmit.co/ajax/shamimujeeb623@gmail.com",
        dataType: "json",
        accepts: "application/json",
        data: {
          Email: email,
          Subject: subject,
          Message: message,
        },
        success: (data) => {
          console.log(data, "data");
          $(".thankyou").slideDown().delay(2000).slideUp();

          document.getElementById("myform").reset();
        },
        error: (err) => {
          $(".error").slideDown().delay(3000).slideUp();
          console.log("error");
        },
      });
    }
  };

  const submit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-col">
              {/* <h1> ThnkrAi </h1> */}
              <div className="img">
                <img src={LogoFooter} alt="" />
              </div>
              <p className="description">
                Ongoing research and development in AI to advance its
                capabilities and applications, AI technology is crucial for
                self-driving cars autonomous transportation systems
              </p>
            </div>
            <div className="footer-col">
              <h3> Company </h3>
              <p> About Us </p>
              <p> Join Today </p>
            </div>
            <div className="footer-col">
              <h3> Product </h3>
              <p> Platform </p>
            </div>
            <div className="footer-col">
              <h3> Support </h3>
              <p> Privacy Policy </p>
              <p> Terms & Conditions </p>
            </div>
            <div className="footer-col">
              <h3> Contact us </h3>
              <form onSubmit={submit}>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  id="contact-2-email"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  id="contact-2-subject"
                />
                <textarea
                  rows={3}
                  cols={2}
                  placeholder="Message..."
                  name="message"
                  id="message"
                />
                <div className="btn">
                  <Button type="submit" onClick={SendMain}>
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
          <div className="all-rights">
            <p> By © ThnkrAI Inc. All Rights Reserved. contact@thnkrai.com </p>
            <div className="icons">
              <AiOutlineTwitter className="icon" />
              <AiOutlineInstagram className="icon" />
              <AiFillLinkedin className="icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
