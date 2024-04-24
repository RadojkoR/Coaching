import { Routes, Route } from "react-router-dom";
import { Home, About, Services, Testimonials, Contact, ComingSoon } from "./pages";
import Banner from "./Components/Layout/header/Banner";
import Nav from "./Components/Layout/header/Nav";
import Footer from "./Components/Layout/footer/Footer";




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
