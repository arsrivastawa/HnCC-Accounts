import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import OverviewAndSteps from "./components/OverviewAndSteps";
import Alumni from "./components/Alumni";
import FooterHero from "./components/FooterHero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <OverviewAndSteps />
      <Alumni />
      <FooterHero />
    </>
  );
}

export default App;
