

import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

import Signup from "./components/signup";
import {
  BrowserRouter,
  
  Route,
  Routes,
  Link
} from "react-router-dom";
import Combined from "./components/Combined";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <BrowserRouter>
      

      <Routes>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/" element={<Combined/>}/>
      </Routes>
      
      </BrowserRouter> 
    </>
  );
}

export default App;
