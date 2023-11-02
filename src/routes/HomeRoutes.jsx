import React from "react";
import Layout from "../layout/Layout";
import LandingPage from "../pages/landingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../pages/about/About";
import JoinUs from "../pages/join-us/JoinUs";
import ProductPage from "../pages/productPage/ProductPage";

const HomeRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          {/* <LandingPage /> */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/product" element={<ProductPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default HomeRoutes;
