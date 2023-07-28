import React from "react";
import Header from "../Components/Header/Header";
import Slider from "../Components/Slider/Slider";
import Cards from "../Components/Cards/Cards";
// import Card from '../Components/Cards/Card'
import Category from "../Components/Category/Category";
import Footer from "../Components/Footer/Footer";
import Features from "../Components/Features/Features";
import AboutUs from "../Components/About us/AboutUs";

function LandingPage() {
  return (
    <div>
      <Header />
      <Slider />
      <AboutUs />
      <Cards />
      <Category />
      <Features />
      <Footer />
    </div>
  );
}

export default LandingPage;
