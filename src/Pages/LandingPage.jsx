import React from "react";
import Header from "../Components/Header/Header";
import Slider from "../Components/Slider/Slider";
import Cards from "../Components/Home/Cards";
// import Card from '../Components/Cards/Card'
import Category from "../Components/Home/Category";
import Footer from "../Components/Footer/Footer";
import Features from "../Components/Home/Features";
import AboutUs from "../Components/Home/AboutUs";

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
