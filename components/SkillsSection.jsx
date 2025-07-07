import Box from "./Box";
import css from "../src/assets/cssLogo.png";
import firebase from "../src/assets/firebaseLogo.svg";
import html from "../src/assets/htmlLogo.png";
import javaScript from "../src/assets/javaScriptLogo.png";
import react from "../src/assets/ReactLogo.svg";
import tailwind from "../src/assets/taiwlindLogo.svg";
import vite from "../src/assets/viteLogo.svg";
import redux from "../src/assets/reduxLogo.svg";
import motion from "../src/assets/motion.png";
import { useEffect, useState } from "react";

const imageData_1 = [
  null,
  null,
  null,
  null,
  { logo: html, color: "rgba(255,87,34,0.6)" },
  { logo: css, color: "rgba(42,83,221,1)" },
  { logo: javaScript, color: "rgba(247,228,37,1)" },
  { logo: react, color: "rgba(0,214,253,1)" },
  { logo: redux, color: "rgba(118,74,188,1)" },
  null,
  null,
  null,
  null,
];

const imageData_1Below1200 = [
  null,
  null,
  { logo: html, color: "rgba(255,87,34,0.6)" },
  { logo: css, color: "rgba(42,83,221,1)" },
  { logo: javaScript, color: "rgba(247,228,37,1)" },
  { logo: react, color: "rgba(0,214,253,1)" },
  { logo: redux, color: "rgba(118,74,188,1)" },
  null,
  null,
  null,
  null,
];

const imageData_1Below900 = [
  null,
  { logo: html, color: "rgba(255,87,34,0.6)" },
  { logo: css, color: "rgba(42,83,221,1)" },
  { logo: javaScript, color: "rgba(247,228,37,1)" },
  { logo: react, color: "rgba(0,214,253,1)" },
  { logo: redux, color: "rgba(118,74,188,1)" },
  null,
  null,
  null,
  null,
];

const imageData_2 = [
  null,
  null,
  null,
  null,
  null,
  { logo: tailwind, color: "rgba(0,214,253,1)" },
  { logo: vite, color: "rgba(111,118,203,0.97)" },
  { logo: firebase, color: "rgba(255,145,0,1)" },
  { logo: motion, color: "rgba(247,228,37,1)" },
  null,
  null,
  null,
  null,
];
const imageData_2Below1200 = [
  null,
  null,
  null,
  { logo: tailwind, color: "rgba(0,214,253,1)" },
  { logo: vite, color: "rgba(111,118,203,0.97)" },
  { logo: firebase, color: "rgba(255,145,0,1)" },
  { logo: motion, color: "rgba(247,228,37,1)" },
  null,
  null,
  null,
  null,
];

const imageData_All = [
  null,
  null,
  null,
  { logo: html, color: "rgba(255,87,34,0.6)" },
  { logo: css, color: "rgba(42,83,221,1)" },
  { logo: javaScript, color: "rgba(247,228,37,1)" },
  { logo: react, color: "rgba(0,214,253,1)" },
  { logo: redux, color: "rgba(118,74,188,1)" },
  { logo: tailwind, color: "rgba(0,214,253,1)" },
  { logo: vite, color: "rgba(111,118,203,0.97)" },
  { logo: firebase, color: "rgba(255,145,0,1)" },
  { logo: motion, color: "rgba(247,228,37,1)" },

  null,
  null,
  null,
  null,
];

const SkillsSection = () => {
  const [width, setWidth] = useState(() => window.outerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.outerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const valBelow1200 = width < 1200;
  const valBelow900 = width < 900;

  return (
    <div className="overflow-x-hidden">
      <div className="relative z-30 text-center">
        <h1 className="text-3xl min-[600px]:text-5xl font-bold bg-linear-[0deg,_#fff,_#ffffffc2] bg-clip-text text-transparent max-[600px]:mx-10">
          Code Is My Craft — These Are My Tools
        </h1>
      </div>
      <div className="mask-fade mx-5 sm:mx-auto md:w-min -mt-10  before:content-[''] before:block before:w-full before:h-[80px] before:bg-linear-[0deg,_#17171700,_#111111b3,_#111111] before:absolute before:top-0 before:left-0 before:right-0 relative z-10 before:z-10 after:content-[''] after:block after:w-full after:h-[100px] after:bg-linear-[180deg,_#17171700,_#111111b3,_#111111] after:absolute after:bottom-0 after:left-0 after:right-0 after:z-10">
        <div className="md:grid grid-flow-col auto-cols-[96px] gap-6 mb-6 translate-x-8 hidden">
          {Array.from({ length: 12 }, (_, i) => (
            <Box key={i} />
          ))}
        </div>
        <div className="md:grid grid-flow-col auto-cols-[96px] gap-6 mb-6 translate-x-0 hidden">
          {valBelow1200
            ? valBelow900
              ? imageData_1Below900.map((imgData) => (
                  <Box img={imgData?.logo} color={imgData?.color} />
                ))
              : imageData_1Below1200.map((imgData) => (
                  <Box img={imgData?.logo} color={imgData?.color} />
                ))
            : imageData_1.map((imgData) => (
                <Box img={imgData?.logo} color={imgData?.color} />
              ))}
        </div>
        <div className="md:grid grid-flow-col auto-cols-[96px] gap-6 mb-6 -translate-x-10 hidden">
          {valBelow1200
            ? valBelow900
              ? imageData_2Below1200.map((imgData) => (
                  <Box img={imgData?.logo} color={imgData?.color} />
                ))
              : imageData_2Below1200.map((imgData) => (
                  <Box img={imgData?.logo} color={imgData?.color} />
                ))
            : imageData_2.map((imgData) => (
                <Box img={imgData?.logo} color={imgData?.color} />
              ))}
        </div>
        <div className="md:grid grid-flow-col auto-cols-[96px] gap-6 mb-6 translate-x-0 hidden">
          {Array.from({ length: 12 }, () => (
            <Box />
          ))}
        </div>
        <div
          className="
        flex flex-wrap gap-5 mb-6 translate-y-8 justify-center   
        md:hidden                                  
      "
        >
          {imageData_All.map((d, i) => (
            <Box key={`m-${i}`} img={d?.logo} color={d?.color} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
