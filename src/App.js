import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

// components
import Topbar from "./components/topbar/Topbar";
import Newsletter from "./components/newsletter/Newsletter";
import Footer from "./components/footer/Footer";

// pages
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import AboutMe from "./pages/aboutme/AboutMe";
import ContactPage from "./pages/contact/ContactPage";
import SliderPostPage from "./pages/sliderpost/SliderPostPage";
import CategoriesPage from "./pages/categoriespage/CategoriesPage";

function App() {
  useEffect(() => {
  window.scrollTo(0, 0)
}, [])
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
        <Route path="/post/:id" element={<Single/>} />
      </Routes>
      <Routes>
        <Route path="/sliderpost/:id" element={<SliderPostPage/>} />
      </Routes>
      <Routes>
        <Route path="/categories" element={<CategoriesPage/>} />
      </Routes>

{/* newsletter and footer are components visible on each page */}
      <Newsletter></Newsletter>
      <Footer></Footer>

    </BrowserRouter>
  );
}

export default App;
