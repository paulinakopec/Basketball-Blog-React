import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Topbar from "./components/topbar/Topbar";
import Newsletter from "./components/newsletter/Newsletter";
import Footer from "./components/footer/Footer";

// pages
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import AboutMe from "./pages/aboutme/AboutMe";
import ContactPage from "./pages/contact/ContactPage";

function App() {
  return (
    <BrowserRouter>
{/* topbar is a component visible on each page */}
      <Topbar></Topbar>

      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
      <Routes>
        <Route path="/about" element={<AboutMe/>} />
      </Routes>
      <Routes>
        <Route path="/news/billrussell" element={<Single/>} />
      </Routes>

{/* newsletter and footer are components visible on each page */}
      <Newsletter></Newsletter>
      <Footer></Footer>

    </BrowserRouter>
  );
}

export default App;
