import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

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

import Reels from "./components/shivam/Reels";
import WOW from "./components/shivam/WOW";

import ScrollToTop from "./components/pages/ScrollToTop";
import Location from "./components/shivam/Location";

import KOMO from "./components/shivam/KOMO";

// BLOG
import Blog from "./components/shivam/Blog";


// ADMIN
import AdminLogin from "./components/admin/AdminLogin";
import AdminDashboard from "./components/admin/AdminDashboard";
import BlogForm from "./components/admin/BlogForm";
import BlogManager from "./components/admin/BlogManger";

import "./App.css";


function MainLayout() {

  return (

    <main className="relative min-h-screen bg-white">

      <div className="website-content">

        <Navbar />

        <Routes>

          {/* =========================
              HOME
          ========================= */}

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
                <KOMO />

                <Reels />
                <Chiose />
                <FAQ />
              </>
            }
          />


          {/* =========================
              CONTACT
          ========================= */}

          <Route
            path="/contact"
            element={<Contact />}
          />


          {/* =========================
              SERVICES
          ========================= */}

          <Route
            path="/services"
            element={<Services />}
          />


          {/* =========================
              MAPS
          ========================= */}

          <Route
            path="/maps"
            element={<Maps />}
          />


          {/* =========================
              BLOG LIST
          ========================= */}

          <Route
            path="/blog"
            element={<Blog />}
          />


          {/* =========================
              BLOG DETAILS
          ========================= */}

          
          


          {/* =========================
              ABOUT
          ========================= */}

          <Route
            path="/about"
            element={<About />}
          />


          {/* =========================
              NOIDA
          ========================= */}

          <Route
            path="/noida"
            element={<Noida />}
          />

          <Route
            path="/noida/:id"
            element={<NoidaDetels />}
          />


          {/* =========================
              GALLERY
          ========================= */}

          <Route
            path="/gallery"
            element={<Gallery />}
          />


          {/* =========================
              GREATER NOIDA
          ========================= */}

          <Route
            path="/greater-noida"
            element={<Greater />}
          />

          <Route
            path="/greater-noida/:id"
            element={<GreaterNoidaDetail />}
          />


          {/* =========================
              YAMUNA EXPRESSWAY
          ========================= */}

          <Route
            path="/yamuna-expressway"
            element={<Yemuna />}
          />

          <Route
            path="/yamuna-expressway/:id"
            element={<YemunaDetels />}
          />

        </Routes>


        <Footer />

      </div>

    </main>

  );

}


export default function App() {

  return (

    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        {/* =========================
            ADMIN LOGIN
        ========================= */}

        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />


        {/* =========================
            ADMIN DASHBOARD
        ========================= */}

        <Route
          path="/admin/dashboard"
          element={<AdminDashboard />}
        />


        {/* =========================
            BLOG MANAGER
        ========================= */}

        <Route
          path="/admin/blogs"
          element={<BlogManager />}
        />


        {/* =========================
            CREATE BLOG
        ========================= */}

        <Route
          path="/admin/blogs/create"
          element={<BlogForm />}
        />


        {/* =========================
            EDIT BLOG
        ========================= */}

        <Route
          path="/admin/blogs/edit/:id"
          element={<BlogForm />}
        />


        {/* =========================
            MAIN WEBSITE
        ========================= */}

        <Route
          path="/*"
          element={<MainLayout />}
        />

      </Routes>

    </BrowserRouter>

  );

}