import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import InfosPratiques from "./InfosPratiques";
import { useLocation } from "react-router-dom";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/InfosPratiques" element={<InfosPratiques />} />
    </Routes>
  );
  
}