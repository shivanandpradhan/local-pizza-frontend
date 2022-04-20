import "./App.css";
import React, { useState } from "react";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import SlidingNavbar from './components/SlidingNavbar/SlidingNavbar'


function App() {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWidthChange = (event) => {
    setWidth(window.innerWidth);
  };

  window.addEventListener("resize", handleWidthChange);

  return (
    <>
      {/* navbar */}
      {width > 650 ? <Navbar width={width}/> : <SlidingNavbar />}

      {/* routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
