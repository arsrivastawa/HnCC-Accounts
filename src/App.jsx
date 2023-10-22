import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import OverviewAndSteps from "./components/OverviewAndSteps";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <OverviewAndSteps />
    </>
  );
}

export default App;
