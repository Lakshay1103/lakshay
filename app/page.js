import Image from "next/image";
import Nav from "../components/nav";
import Hero from "../components/hero";
import Logos from "../components/logos";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Logos />
    </div>

  );
}
