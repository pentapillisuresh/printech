import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Technology from "./pages/Technology";
import Contact from "./pages/Contact";
import Whatsapp from "./components/Whatsapp";
import Call from "./components/Call";
import Printkem from "./pages/Home/printkem/Home";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        {/* Navbar always visible */}
        <Navbar />

        {/* Main content (routes) */}
        <main className="flex-grow">
          <Routes>
            <Route path="/printkem" element={<Printkem />} />

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer always visible */}
        <Footer />

        {/* Floating buttons */}
        <Whatsapp />
        <Call />
      </div>
    </Router>
  );
}

export default App;