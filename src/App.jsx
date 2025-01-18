import React from "react";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection"
import Service from "./Components/Service"
import Skills from "./Components/Skills"
import Portfolio from "./Components/Portfolio"
import Footer from "./Components/Footer"
import './index.css';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Service />
      <Skills />
      <Portfolio />
      <Footer />
      

      {/* Content Sections */}
    </div>
  );
}

export default App;
