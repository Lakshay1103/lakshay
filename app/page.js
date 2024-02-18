import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/hero";
import Logos from "../components/Logos";
import About from "../components/About";
import Steps from "../components/Steps";
import Cards from "../components/cards";
import Reels from "../components/Reels";
import FAQ from "../components/Faq";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import HeroNew from "../components/HeroNew";

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
