

import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import OverviewAndSteps from "./components/OverviewAndSteps";
import Alumni from "./components/Alumni";
import FooterHero from "./components/FooterHero";

import Signup from "./components/signup";
import {
  BrowserRouter,
  
  Route,
  Routes,
  Link
} from "react-router-dom";
import Combined from "./components/Combined";
import Login from "./components/Login";


function App() {
  return (
    <>

    <BrowserRouter>
      

      <Routes>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/" element={<Combined/>}/>
          <Route path="/combined" element={<Combined/>}/>
          <Route path="/login" element={<Login/>}/>
      </Routes>
      
      </BrowserRouter> 

    </>
  );
}

export default App;
