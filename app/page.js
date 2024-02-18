import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/hero";
import HeroNew from "../components/HeroNew";
import Logos from "../components/Logos";
import About from "../components/About";
import Steps from "../components/Steps";
import Cards from "../components/cards";
// import Reels from "../components/reels";
import Carousel from "../components/Carousel";
import FAQ from "../components/Faq";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div>
      <Nav />
      {/* <Hero /> */}  
      <HeroNew />
      <Logos />
      <About />
      <Steps />
      <Cards />
      {/* <Reels /> */}
      <Carousel />
      <FAQ />
      <Footer />
    </div>

  );
}
