import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div> 
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      
    </div>
  );
}
