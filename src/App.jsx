import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navber";
import Footer from "./components/pages/Footer";

import Home from "./components/pages/Home";
import Properties from "./components/pages/Properties";
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";
import Maps from "./components/pages/Maps";
import About from "./components/pages/About";

import OK from "./components/pages/OK";
import Shivam from "./components/pages/Shivam";
import Chhabra from "./components/pages/Chhabra";
import Chiose from "./components/pages/Chiose";
import FAQ from "./components/pages/FAQ";
import FloatingContact from "./components/pages/FloatingContact";


import Noida from "./components/shivam/Noida";
import NoidaDetels from "./components/shivam/NoidaDetail";


import Greater from "./components/pages/Greater";
import GreaterNoidaDetail from "./components/pages/GreaterNoidaDetail";


import Yemuna from "./components/pages/Yemuna";
import YemunaDetels from "./components/pages/YemunaDetail";


import ScrollToTop from "./components/pages/ScrollToTop";





function MainLayout(){

return(

<>

<Navbar />


<Routes>


<Route
path="/"
element={
<>
<Home />
<OK />
<Shivam />
<Chhabra />
<Chiose />
<FAQ />

</>
}
/>



<Route 
path="/properties"
element={<Properties />}
/>


<Route 
path="/contact"
element={<Contact />}
/>


<Route 
path="/services"
element={<Services />}
/>


<Route 
path="/maps"
element={<Maps />}
/>


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





{/* GREATER NOIDA */}
<Route path="/greater-noida" element={<Greater />} />

<Route
  path="/greater-noida/:id"
  element={<GreaterNoidaDetail />}
/>





{/* YAMUNA */}

<Route
path="/yamuna-expressway"
element={<Yemuna />}
/>


<Route
path="/yamuna-expressway/:id"
element={<YemunaDetels />}
/>



</Routes>

<FloatingContact/>




<Footer />


</>

)

}






export default function App(){

return(

<BrowserRouter>


<ScrollToTop />


<Routes>


<Route
path="/*"
element={<MainLayout />}
/>


</Routes>


</BrowserRouter>

)

}