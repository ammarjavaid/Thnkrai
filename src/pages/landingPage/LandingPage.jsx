import React from "react";
import HeaderSection from "../../components/landingPage/headerSection/HeaderSection";
import PricingMadeEasy from "../../components/landingPage/pricing-made-easy/PricingMadeEasy";
import NeuralNetwork from "../../components/landingPage/building-neural-network/NeuralNetwork";
import AutomaticModels from "../../components/landingPage/automatic-models/AutomaticModels";
import Product from "../../components/landingPage/product/Product";

const LandingPage = () => {
  return (
    <>
      <HeaderSection />
      <NeuralNetwork />
      <PricingMadeEasy />
      <Product />
      <AutomaticModels />
    </>
  );
};

export default LandingPage;
