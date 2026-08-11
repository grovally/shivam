
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navber";
import Footer from "./components/pages/Footer";
import Gallery from "./components/shivam/Gallary";

import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";
import Maps from "./components/pages/Maps";
import About from "./components/pages/About";

import OK from "./components/pages/OK";
import Shivam from "./components/pages/Shivam";
import Chhabra from "./components/pages/Chhabra";
import Chiose from "./components/pages/Chiose";
import FAQ from "./components/pages/FAQ";

import Noida from "./components/shivam/Noida";
import NoidaDetels from "./components/shivam/NoidaDetail";

import Greater from "./components/pages/Greater";
import GreaterNoidaDetail from "./components/pages/GreaterNoidaDetail";

import Yemuna from "./components/pages/Yemuna";
import YemunaDetels from "./components/pages/YemunaDetail";

import WOW from "./components/shivam/WOW";

import ScrollToTop from "./components/pages/ScrollToTop";
import Location from "./components/shivam/Location";



import "./App.css";


function MainLayout() {
  return (
    <main className="relative min-h-screen bg-white text-black">

      {/* =====================================
          GLOBAL CRYSTAL BACKGROUND
      ====================================== */}
     


      {/* =====================================
          WEBSITE CONTENT
          50% BLACK TRANSPARENT OVERLAY
      ====================================== */}
      <div className="website-content">

        {/* NAVBAR */}
        <Navbar />


        {/* =====================================
            ROUTES
        ====================================== */}
        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <OK />
                <Shivam />
                <Location />
                <Chhabra />
                <WOW />
                <Chiose />
                
                <FAQ />
              </>
            }
          />


          {/* CONTACT */}
          <Route
            path="/contact"
            element={<Contact />}
          />


          {/* SERVICES */}
          <Route
            path="/services"
            element={<Services />}
          />


          {/* MAPS */}
          <Route
            path="/maps"
            element={<Maps />}
          />


          {/* ABOUT */}
          <Route
            path="/about"
            element={<About />}
          />


          {/* NOIDA */}
          <Route
            path="/noida"
            element={<Noida />}
          />

          <Route
            path="/noida/:id"
            element={<NoidaDetels />}
          />


          {/* GALLERY */}
          <Route
            path="/gallery"
            element={<Gallery />}
          />


          {/* GREATER NOIDA */}
          <Route
            path="/greater-noida"
            element={<Greater />}
          />

          <Route
            path="/greater-noida/:id"
            element={<GreaterNoidaDetail />}
          />


          {/* YAMUNA EXPRESSWAY */}
          <Route
            path="/yamuna-expressway"
            element={<Yemuna />}
          />

          <Route
            path="/yamuna-expressway/:id"
            element={<YemunaDetels />}
          />

        </Routes>


        {/* FOOTER */}
        <Footer />

      </div>

    </main>
  );
}


export default function App() {
  return (
    <BrowserRouter>

      {/* SCROLL TO TOP ON ROUTE CHANGE */}
      <ScrollToTop />


      <Routes>

        <Route
          path="/*"
          element={<MainLayout />}
        />

      </Routes>

    </BrowserRouter>
  );
}
