"use client";

import React, { useState, useEffect } from "react";
import Nav from "../components/nav";
import Hero from "../components/hero";
import HeroNew from "../components/heroNew";
import Logos from "../components/logos";
import About from "../components/about";
import Steps from "../components/steps";
import Cards from "../components/cards";
import Carousel from "../components/carousel";
import FAQ from "../components/faq";
import Footer from "../components/footer";
import Carouselsm from "../components/carouselsm";
import Cardssm from "../components/cardssm";
import Navsm from "../components/navsm";

export default function Home() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {screenWidth >= 750 ? <Nav /> : <Navsm />}
      {/* <Hero /> */}
      <HeroNew />
      <Logos />
      <About />
      <Steps />
      {screenWidth < 800 ? <Cardssm /> : <Cards />}
      {/* <Reels /> */}
      {screenWidth < 1000 ? <Carouselsm /> : <Carousel />}
      <FAQ />
      <Footer />
    </div>
  );
}
