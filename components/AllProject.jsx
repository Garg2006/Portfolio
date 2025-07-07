import { motion } from "motion/react";
import netflix from "../src/assets/netflixScreenShot.png";
import cloth from "../src/assets/ecommerce.png";
import obys from "../src/assets/Obys.png";
import Card from "./card";
import MobileCard from "./MobileCard";

const NetfLixBuiltWith = [
  "react",
  "tailwind css",
  "redux",
  "firebase",
  "tmdb api",
];
const EcommerceBuiltWith = [
  "React",
  "Tailwind Css",
  "LocalStorage",
  "Clothing API",
];
const ObysBuiltWith = ["react", "tailwind css", "motion"];

const AllProject = ({
  finalRotateZ,
  finalRotateZ1,
  finalRotateZ2,
  finalRotateZ3,
  translateX,
  translateX1,
  translateX2,
  translateX3,
  finalRotateY,
  finalRotateY1,
  finalRotateY2,
  finalRotateY3,
  combinedY,
  combinedY1,
  combinedY2,
  combinedY3,
  ref,
}) => {
  return (
    <>
        <div className="max-[1020px]:hidden"> 
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-[12vw] leading-none inline">SOME </div>
              <div className="text-[12vw] leading-none inline">OF </div>
              <div className="text-[12vw] leading-none inline">MY</div>
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "-100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-[12vw] text-right leading-none">
                PROJECTS
              </div>
            </motion.div>
          </div>
        </div>
        <div className="max-[1020px]:hidden relative mt-20 h-[2000px] mb-[200px] " ref={ref}>
          <Card
            heading="Netflix Clone"
            description="Netflix-Style Web App with <br /> Real-Time Content
                  Integration"
            projectBuilt={NetfLixBuiltWith}
            rotateZ={finalRotateZ}
            rotateY={finalRotateY}
            translateX={translateX}
            translateY={combinedY}
            bgImg={netflix}
            href="https://netfliiiiixclone.netlify.app"
          />
          <Card
            heading="Clothing Shop"
            description="Clothing shop with filters, cart, and latest trendy
                      collections."
            projectBuilt={EcommerceBuiltWith}
            rotateZ={finalRotateZ1}
            rotateY={finalRotateY1}
            translateX={translateX1}
            translateY={combinedY1}
            bgImg={cloth}
            href="https://clothescommerce.netlify.app"
            overlay="true"
          />
          <Card
            heading="Obys Clone"
            description=" Frontend showcase of Obys with minimal logic, all about
                      motion."
            projectBuilt={ObysBuiltWith}
            rotateZ={finalRotateZ2}
            rotateY={finalRotateY2}
            translateX={translateX2}
            translateY={combinedY2}
            bgImg={obys}
            href="https://projectanimate.netlify.app/"
          />
          <Card
            heading="COMING SOON?"
            rotateZ={finalRotateZ3}
            rotateY={finalRotateY3}
            translateX={translateX3}
            translateY={combinedY3}
          />
        </div>
      <div className="min-[1020px]:hidden">
        <div>
          <h1 className="text-5xl font-bold">Some Of My Projects</h1>
        </div>
        <div className="mt-10 flex flex-col items-center">
          <MobileCard
            heading="Netflix Clone"
            description="Netflix-Style Web App with <br /> Real-Time Content
                  Integration"
            projectBuilt={NetfLixBuiltWith}
            bgImg={netflix}
            href="https://netfliiiiixclone.netlify.app"
          />
          <MobileCard
            heading="Clothing Shop"
            description="Clothing shop with filters, cart, and latest trendy
                      collections."
            projectBuilt={EcommerceBuiltWith}
            bgImg={cloth}
            href="https://clothescommerce.netlify.app"
            overlay="true"
          />
          <MobileCard
            heading="Obys Clone"
            description="Frontend showcase of Obys with minimal logic, all about
                      motion."
            projectBuilt={ObysBuiltWith}
            bgImg={obys}
            href="https://projectanimate.netlify.app/"
            overlay="true"
          />
        </div>
      </div>
    </>
  );
};

export default AllProject;
