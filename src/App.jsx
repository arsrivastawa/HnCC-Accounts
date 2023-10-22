import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import OverviewAndSteps from "./components/OverviewAndSteps";
import Alumni from "./components/Alumni";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <OverviewAndSteps />
      <Alumni />
    </>
  );
}

export default App;
