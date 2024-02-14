import React from "react";
import Nav from "../components/nav";
//import Hero from "../components/hero";
import Logos from "../components/logos";
import HeroNew from "../components/heroNew";
import Steps from "../components/steps";
import Cards from "../components/cards";
import Reels from "../components/reels";
import FAQ from "../components/faq";
import Footer from "../components/footer";
import About from "../components/about";

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
      <Reels />
      <FAQ />
      <Footer />
    </div>

  );
}
