import React from "react";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Newsletter from "./components/newsletter/Newsletter";
import Footer from "./components/footer/Footer";
// import Single from "./pages/single/Single";
// import AboutMe from "./pages/aboutme/AboutMe";

function App() {
  return (
    <>
      <Topbar></Topbar>
      <Home></Home>
      {/* <Single></Single> */}
      {/* <AboutMe></AboutMe> */}
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  );
}

export default App;
