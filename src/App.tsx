import { Routes, Route } from "react-router-dom";
import Banner from "./Components/Layout/header/Banner";
import Nav from "./Components/Layout/header/Nav";
import Footer from "./Components/Layout/footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import ComingSoon from "./pages/ComingSoon";




function App() {
  

  return (
    <div className="relative">
      <Banner />
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/testimonials" element={<Testimonials />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/comingsoon" element={<ComingSoon/>}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App
