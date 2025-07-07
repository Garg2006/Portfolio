import { motion } from "motion/react";

const AboutSection = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-between px-2 md:px-20">
      <div className="overflow-hidden max-[768px]:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="uppercase text-6xl md:text-8xl font-bold font-mono ">
            frontend
            <div className="text-4xl md:text-6xl">developer</div>
          </h1>
          <h4 className="text text-xl md:text-2xl">
            “Not an artist. Not a designer. Just a dev with {""}
            <div className="relative inline-block">
              <span className="relative z-10"> deadly logic</span>
              <div className="absolute bottom-1 w-full h-2 bg-[#9ddcff] z-0"></div>
            </div>
            .”
          </h4>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-300         max-[768px]:text-justify ">
            Hey, I’m a frontend developer who believes clean code is just as
            beautiful as clean design — but I’m not here to design pixels. I
            bring interfaces to life with logic, interactivity, and performance
            at the core. I build smooth, responsive, and intuitive web
            experiences that don’t just look good — they work. Whether it's
            animations, dynamic UI, or seamless functionality, I make sure every
            line of code adds value.
          </p>{" "}
          <p className="font-medium">
            Tech is my tool. JavaScript is my language. React is my playground.
          </p>
          <p className="font-medium">
            {" "}
            I don’t design dreams — I develop them.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
