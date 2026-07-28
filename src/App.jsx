import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navber";
import Home from "./components/pages/Home"
import properties  from "./components/pages/Properties"
import Contact from "./components/pages/Contact"
import Services from "./components/pages/Services"
import Maps from "./components/pages/Maps"
import About from "./components/pages/About"
import Footer from "./components/pages/Footer"
import Chiose from "./components/pages/Chiose"
import OK from "./components/pages/OK"

import Noida from"./components/pages/Noida"
import GreateNoida from "./components/pages/GreateNoida";
import Yemuna from "./components/pages/Yemuna";
import FAQ from "./components/pages/FAQ"
import Shivam from "./components/pages/Shivam";
import Chhabra from "./components/pages/Chhabra"




function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/properties" element={<properties/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/maps" element={<Maps/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/noida" element={<Noida/>}/>
        <Route path="/greater-noida" element={<GreateNoida/>}/>
           <Route path="/yemunaexpress" element={<Yemuna/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        
      </Routes>
     
      <OK/>

      <Shivam/>
      <Chhabra/>
    

      <Chiose/>
       <FAQ/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;