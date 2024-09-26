import React from 'react';
import './HomePage.css';
import Navbar from "../Components/Navbar/Navbar"
import Destinations from "../Components/Destinations/Destinations"
import Home from "../Components/Home/Home"
import Middle from "../Components/Middle/Middle"
import Portfolio from "../Components/Portfolio/Portfolio"
import Questions from "../Components/Questions/Questions"
import Reviews from "../Components/Reviews/Reviews"
import Subscribe from "../Components/Subscribe/Subscribe"
import Footer from "../Components/Footer/Footer"

function HomePage() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Middle/>
      <Destinations/>
      <Portfolio/>
      <Reviews/>
      <Questions/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}
export default HomePage
