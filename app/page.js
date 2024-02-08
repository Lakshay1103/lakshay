
import Nav from "../components/nav";
//import Hero from "../components/hero";
import Logos from "../components/logos";
import HeroNew from "../components/heroNew";
import Steps from "../components/steps";
import Cards from "../components/cards";

export default function Home() {
  return (
    <div>
      <Nav />
      {/* <Hero /> */}  
      <HeroNew />
      <Logos />
      <Steps />
      <Cards />
    </div>

  );
}
