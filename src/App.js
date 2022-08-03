import React from "react";
import Topbar from "./components/topbar/Topbar";
// import Home from "./pages/home/Home";
import Newsletter from "./components/newsletter/Newsletter";
import Footer from "./components/footer/Footer";
// import Single from "./pages/single/Single";
// import AboutMe from "./pages/aboutme/AboutMe";
import ContactPage from "./pages/contact/ContactPage";

function App() {
  return (
    <>
      <Topbar></Topbar>
      {/* <Home></Home> */}
      {/* <Single></Single> */}
      {/* <AboutMe></AboutMe> */}
      <ContactPage></ContactPage>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  );
}

export default App;
