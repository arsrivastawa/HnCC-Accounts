

import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

import Signup from "./components/signup";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/Signup" element={<Signup/>}/>
      </Routes>

      <Hero />
      <About />
      </BrowserRouter> 
    </>
  );
}

export default App;
