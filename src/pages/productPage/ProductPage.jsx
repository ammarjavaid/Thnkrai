import React from "react";
import "./productPage.scss";
import { LastRobot, PgImg, PgRobot } from "../../assets";
import Coding from "../../assets/video/coding.mp4";
import AI_Video from "../../assets/video/ai-video.mp4";
import Button from "../../common/button/Button";

const ProductPage = () => {
  return (
    <>
      <div className="product-page">
        <div className="container product-header">
          <div className="product-header-left">
            <h1>
              Empower Your{" "}
              <span>
                {" "}
                Shopping <br /> Experience{" "}
              </span>
            </h1>
            <p>
              Welcome to thnkrAI, your go-to destination for effortless and
              precise product pricing. Our platform is designed to empower
              consumers, providing an intuitive way to accurately determine the
              value of any product.
            </p>
          </div>
          <div className="product-header-right">
            <div className="img">
              <img src={PgImg} alt="" className="animate-img" />
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------------------- */}

      <div className="product-page-video-section">
        <div className="container video-section">
          <h1>
            {" "}
            Customized Pricing Solutions <br /> for Your{" "}
            <span> Enterprise </span>{" "}
          </h1>
          <p>
            Unleash the power of your enterprise's data by integrating it with
            thnkrAI's innovative model. Craft bespoke pricing models that cater
            specifically to your unique needs.
          </p>
          <div className="videos">
            <video autoPlay muted loop playsInline>
              <source src={Coding} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* ----------------------------------- */}

      <div className="product-page-pricing-section">
        <div className="container pricing-section">
          <div className="pricing-section-left">
            <div className="img">
              <img src={PgRobot} alt="" />
            </div>
          </div>
          <div className="pricing-section-right">
            <h1>
              {" "}
              Deep Dive into Product <br /> <span> Subcategories </span>{" "}
            </h1>
            <p>
              Explore and dissect product subcategories effortlessly with
              thnkrAI. Our platform provides comprehensive tools to analyze and
              understand specific product subsets within any industry.
            </p>
          </div>
        </div>
      </div>

      {/* ---------------------------------- */}

      <div className="product-page-ai-video">
        <div className="videos">
          <video autoPlay muted loop playsInline>
            <source src={AI_Video} type="video/mp4" />
          </video>
        </div>

        <div className="content">
          <div className="conainer">
            <p>
              From individual consumers to enterprises, thnkrAI offers intuitive
              tools for understanding market values, analyzing trends, and
              crafting customized pricing models. Our innovative approach
              harnesses the power of AI and data analytics, making pricing
              strategies smarter, more informed, and more accessible to
              everyone.
            </p>
            <Button> Join us </Button>
          </div>
        </div>
      </div>

      {/* ---------------------------------- */}

      <div className="product-page-last">
        <div className="container last-content">
          <div className="last-content-left">
            <h1>
              Powering Precision with{" "}
              <span>thnkrAI's Neural Network Innovation</span>
            </h1>
            <p>
              Crafted using thnkrAI's state-of-the-art neural network, our
              platform embodies the pinnacle of cutting-edge technology. The
              advanced neural network forms the bedrock of our innovative
              pricing solutions, empowering users with unparalleled accuracy and
              intelligence in pricing analysis.
            </p>
          </div>
          <div className="last-content-right">
            <div className="img">
              <img src={LastRobot} alt="" className="animate-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
