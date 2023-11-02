import React from "react";
import "./product.scss";
import { AIbusiness, CurveBlue } from "../../../assets";
import Button from "../../../common/button/Button";
import productVideo from "../../../assets/video/productVideos.mp4";
import { Link, useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="product">
        <div className="container">
          <div className="content">
            <div className="content-right">
              <div className="img">
                <img src={AIbusiness} alt="" />
              </div>
            </div>
            <div className="content-left">
              <h3>
                Explore Our <span> Products </span>
              </h3>
              <p>
                Discover a wide range of innovative and high-quality products
                carefully curated to meet your needs. From cutting-edge
                technology to stylish accessories, our product selection is
                designed to enhance your lifestyle and elevate your everyday
                experiences. Explore our product catalog and find the perfect
                solutions for your requirements.
              </p>
              <Link to="/product" style={{ textDecoration: "none" }}>
                <Button>Our Products</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
