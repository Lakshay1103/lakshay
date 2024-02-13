
import Nav from "../components/nav";
//import Hero from "../components/hero";
import Logos from "../components/logos";
import HeroNew from "../components/heroNew";
import Steps from "../components/steps";
import Cards from "../components/cards";
import Reels from "../components/reels";
import FAQ from "../components/faq";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Nav />
      {/* <Hero /> */}  
      <HeroNew />
      <Logos />
      <Steps />
      <Cards />
      <Reels />
      <FAQ />
      <Footer />
    </div>

  );
}
