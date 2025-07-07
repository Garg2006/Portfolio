import AboutSection from "../components/AboutSection";
import Header from "../components/header";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import "./App.css";
import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && window.VANTA && window.VANTA.BIRDS) {
      setVantaEffect(
        window.VANTA.BIRDS({
          el: vantaRef.current,
          THREE: window.THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 500.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x111111,
          color1: 0x000000,
          birdSize: 1.7,
          separation: 31.0,
          quantity: 3,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="bg-[#111111] w-full  text-white ">
      <div
        ref={vantaRef}
        className="w-full h-screen absolute top-0 left-0"
      />
      <Header />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
};

export default App;
