import React from "react";
import Nav from "../components/nav";
import Hero from "../components/hero";
import HeroNew from "../components/heroNew";
import Logos from "../components/logos";
import About from "../components/about";
import Steps from "../components/steps";
import Cards from "../components/cards";
// import Reels from "../components/reels";
import Carousel from "../components/carousel";
import FAQ from "../components/faq";
import Footer from "../components/footer";


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
