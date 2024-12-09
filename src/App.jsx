import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// component
import Home from "./pag/Home";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Gallery from "./pag/Gallery";
import Contact from "./pag/Contact";
import About from "./pag/About";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} /> {/* หน้าแรก */}
                <Route path="/home" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;

