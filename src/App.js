import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Bloglist from "./Components/Bloglist";
import SideNav from "./Components/SideNav";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={""} />
        <Route path="*" element={""} />
        <Route path="author" element={""} />
        <Route path=":musicStyle" />
        <Route path=":blogId" />
      </Routes>
      <div className="main">
        <SideNav />
        <Bloglist />
      </div>

      <Footer />
    </div>
  );
}

export default App;
