
import { Routes, Route } from "react-router-dom";
import { Footer, Nav } from "./Components/Layout";
import { About, Contact, Home, Services, Testimonials } from "./Pages";



function App() {
  

  return (
    <div>
      <Nav />
      <div>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/testimonials" element={<Testimonials />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App
