import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import OpeningSection from "./components/OpeningSection";
import ProductSection from "./components/ProductSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  // State to manage the menu's open/close status
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu's open/close status
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="App">
      {/* Pass state and toggle function as props to Header */}
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <main>
        <OpeningSection />
        <ProductSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
