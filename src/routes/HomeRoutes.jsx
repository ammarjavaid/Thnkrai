import React from "react";
import Layout from "../layout/Layout";
import LandingPage from "../pages/landingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../pages/about/About";
import JoinUs from "../pages/join-us/JoinUs";
import ProductPage from "../pages/productPage/ProductPage";
import Login from "../pages/authPages/login/Login";
import AuthHeader from "../pages/authPages/authHeader/AuthHeader";
import Signup from "../pages/authPages/signup/Signup";
import ResetPassword from "../pages/authPages/resetPassword/ResetPassword";

const HomeRoutes = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Layout> */}
        {/* <LandingPage /> */}
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <LandingPage />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/join-us"
            element={
              <Layout>
                <JoinUs />
              </Layout>
            }
          />
          <Route
            path="/product"
            element={
              <Layout>
                <ProductPage />
              </Layout>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
        {/* </Layout> */}
      </BrowserRouter>
    </>
  );
};

export default HomeRoutes;
